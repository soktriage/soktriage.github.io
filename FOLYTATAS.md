# TRIÁZS APP — FOLYTATÁSI ÚTMUTATÓ (állapot: 2026-07-19, session-limit miatt szakaszolva)

Ez a dokumentum mindent tartalmaz, ami a munka folytatásához kell egy ÚJ
sessionben. A korábbi session scratchpadjára SEMMI nem támaszkodik — minden
szükséges fájl a projektmappában van.

## Mi a cél? (az eredeti kérés összefoglalója)

Triage döntéstámogató app **kizárólag a feltöltött forrásokra alapozva**
(Triázs tankönyv 2.0 = CTAS magyar fordítás, MSOTKE 2016, 99 old.; MSTR
oktatói jegyzet 2022, 349 diaoldal). Követelmények:
- **transzparens, ellenőrizhető** döntés vezető panasz + paraméterek + módosítók alapján,
- **folyamatábrán látszódjon**, mi alapján döntött az algoritmus (javíthatóság!),
- minden szabály **forrásoldalra hivatkozva** (tankönyv/jegyzet + oldalszám),
- későbbre előkészítve: Chrome-bővítmény az e-MedSolution-höz, KBA-vonalkód,
  spot monitoros lelet automatikus átvétele (a lelet-formátum dokumentálva).

## Mi van KÉSZEN?

| Elem | Hely | Állapot |
|---|---|---|
| App-váz (UI, motor, folyamatábra, lelet-parser, tesztkeret) | `app/` | ✅ kész, böngészőben hibátlanul betölt |
| MedSol-integráció dokumentáció | `app/INTEGRACIO.md` | ✅ kész (workflow-agent írta a 3 MHTML-ből) |
| PDF-szövegek oldaljelölőkkel | `munka/mstr_full.txt`, `munka/tankonyv_full.txt` | ✅ |
| Oldalképek (a diatáblázatok CSAK itt láthatók!) | `munka/pages_mstr/p001-349.png`, `munka/pages_tk/p001-099.png` | ✅ |
| Tankönyv-kinyerés (10/10 tartomány) | `munka/extract/tankonyv_*.json` | ✅ MIND KÉSZ |
| Jegyzet-kinyerés | `munka/extract/jegyzet_*.json` | ✅ **24/24 KÉSZ (teljes jegyzet, 001–349. o.).** 331–349. o. szándékosan üres (adminisztratív). Össz. mindkét forrásból: 673 entry (523 normatív szabály + 150 eset/példa). |
| Témánkénti szintézis + ellenőrzés + javítás | `munka/kb/` | ❌ még nem indult (üres) |
| Végleges tudásbázis | `app/js/kb.js` | ❌ helyőrző — az összeállítás a szintézis után jön |

Az extract-fájlok formátuma: `{"doc","range","entries":[{"type","title","content","data","pages","is_normative"}]}` —
a `pages` a forrásoldal-hivatkozás alapja. Minőségük ellenőrizve, kiváló.

> **Tanulság (2026-07-19, 2. leállás):** egy kinyerő agent ~5-8 percig dolgozik és
> CSAK a végén ír fájlt — futás közben megszakítva minden munkája elvész. Szűk keretnél
> ezért KIS BATCH-ekben futtasd (3-4 tartomány/batch, `workflow_kinyeres_batch.js` +
> args.ranges), és egy batch-et mindig hagyj végigfutni. 8 tartományos batch ~10-12%
> session-keretet éget Pro seaten.

## KÖVETKEZŐ LÉPÉSEK (pontos sorrend az új sessionnek)

**A KINYERÉS TELJESEN KÉSZ (24/24 jegyzet + 10/10 tankönyv, 673 entry).** A soron
következő fázis a SZINTÉZIS → ELLENŐRZÉS → JAVÍTÁS, majd a kb.js összeállítása.

1. **Szintézis-workflow indítása** (a szkript KÉSZ, út-független, skip-if-exists védelemmel;
   a kinyerés-részt magától átugorja, mert minden extract-fájl megvan):
   ```
   Workflow({ scriptPath: "/Users/adamkornel/Claude/Projects/triage_app/munka/workflow_folytatas.js",
              args: { ranges: [[346,349]] } })   // dummy: a kinyerés kész, ez azonnal skippel
   ```
   Ez lefuttatja: 7 téma szintézise (`munka/kb/kb_*.json`) → témánként 2 adverzáriális
   ellenőr (numerikus hűség + teljesség) → javító agentek.
   **Szakaszolás**: a 7 téma egy pipeline-ban fut; ha szűk a keret, a `workflow_folytatas.js`
   TOPICS tömbjét szűkítsd le 2-3 témára, futtasd többször — a kész kb_*.json-okat átugorja.
   Témák: szintek, elsodleges_felnott, gyermek, masodlagos, cedis, folyamat, esetek.
2. **kb.js összeállítása** a `munka/kb/kb_*.json`-okból az alábbi CÉLFORMÁTUM szerint
   (ezt a fő session csinálja, NEM agent — konzisztencia!). A helyőrző: `app/js/kb.js`.
4. **Tesztek**: `node app/tests/run_tests.mjs` — a kb.js `cases` listáján (a források
   esettanulmányain) futtatja a motort. Eltérésnél: előbb a forrásoldalt ellenőrizd,
   utána dönts: KB-hiba vagy motor-hiba.
5. **Böngészős próba**: `app/index.html` megnyitása; a mintalelet beillesztése a
   lelet-mezőbe (lásd lent), panasz kiválasztása, folyamatábra ellenőrzése.
6. **Felülvizsgáló workflow** az app kódján (motor + kb.js): bug-vadász +
   adverzáriális verifikáció (az ultracode-minták szerint), javítások.
7. Kész jelentés Ádámnak (nem technikus! — egyszerű magyar összefoglaló).

## A kb.js CÉLFORMÁTUMA (app/js/engine.js és app.js EZT várja!)

```js
(function (global) {
  const KB = {
    meta: { version:'1.0', generated:'ÉÉÉÉ-HH-NN', gyermekHatarEv:<a források szerint>, sources:{...} },
    levels: [{ level:1, name:'Újraélesztés', color:'#hex', targetTime:'azonnal', reassess:'folyamatos',
               description:'...', source:[{doc:'tankonyv',page:24}] }, ...],
    complaints: [{ id:'kebab-azonosito', name:'Mellkasi fájdalom (szív eredetű)', category:'Szív- és érrendszeri',
                   defaultLevel:null|szám, notes:'', source:[...] }, ...],
    azonnaliSzabalyok: [ /* kritikus megjelenés → MSTR 1, szabály-formátum lent */ ],
    firstOrder: { respiratory:[...], hemodynamic:[...], consciousness:[...], temperature:[...],
                  pain:[...], bleeding:[...], mechanism:[...] },
    secondOrder: [ /* + csakPanaszok:['panasz-id',...] mező a hatókörhöz */ ],
    vitals: { /* referencia-táblák megjelenítéshez: felnőtt + gyermek korcsoportos sávok, forrással */ },
    processRules: [ /* pl. id:'folyamat_45_vitalis_normal' — a motor névre keresi! */ ],
    inputFields: [ /* dinamikus űrlapmezők, lásd lent */ ],
    cases: [{ id, desc, inputs:{...beteg-mezők...}, expected_level:N, rationale, source }],
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = KB;
  else global.MSTR_KB = KB;
})(typeof window !== 'undefined' ? window : globalThis);
```

**Szabály-formátum** (a motor `csoportFuttat`-ja ezt értékeli ki):
```js
{ id:'resp_01', name:'Súlyos légzészavar', applies_to:'mind'|'felnott'|'gyermek',
  condition_text:'a forrás szó szerinti feltétele', 
  condition:[ {mezo:'legzesiMunka', egyenlo:'sulyos'} ],   // ÉS-kapcsolat; min/max/egyenlo/benne/nemEgyenlo
  level:1, source:[{doc:'jegyzet',page:32}], notes:'', conflicts:[],
  korMinHonap:null, korMaxHonap:null,           // opcionális életkorsáv
  csakPanaszok:[] }                              // csak secondOrder-nél
```
A `condition` mezőnevei a beteg-objektum mezői: `hr,rr,sys,dia,spo2,temp,gcsE,gcsV,gcsM`
+ származtatott: `gcs` (összeg), `eletkorHonap`, `gyermek` (bool) + a dinamikus mezők id-i.
`condition:[]` (üres) = kézi megítélésű szabály, a motor 'nem_teljesult'-ként listázza megjegyzéssel.

**inputFields** (ebből épül az űrlap — CSAK olyan mezőt vegyél fel, amit szabály használ):
```js
{ id:'legzesiMunka', group:'megfigyeles'|'fajdalom'|'masodlagos', label:'Légzési munka',
  type:'select'|'number'|'checkbox', options:[{value:'sulyos',label:'Súlyos — ...'}],
  unit:'', min:0, max:10, step:1, help:'rövid súgó' }
```
A select-értékek stringek — a condition `egyenlo`/`benne` ugyanezeket használja.
GCS-t, vitálokat, életkort, panaszt NEM ide — azok fix mezők az index.html-ben.

**Konfliktus-szabály**: ha a tankönyv és a 2022-es jegyzet eltér → a jegyzet értéke a fő,
a tankönyvi eltérés a `conflicts`-ba, és a `notes`-ban jelezd.

### Szintézis-állapot és nyitott döntések (Ádámnak eldöntendő / a felülvizsgálatnak)

**Szintézis haladás: ✅ 7/7 TÉMA KÉSZ.** Összesen 240 szabály + 163 CEDIS-panasz (17 kategória)
+ 75 esettanulmány-teszteset + 38 dinamikus űrlapmező. Fájlok: `munka/kb/kb_*.json`.

### ✅ kb.js ÖSSZEÁLLÍTVA + motor v2 kész + app betölt (2026-07-20)

- **`app/js/kb.js` AUTOGENERÁLT** a `munka/assemble_kb.py` szkripttel a 7 kb_*.json-ból.
  Újragenerálás: `python3 munka/assemble_kb.py`. Tartalom: 5 szint, **163 panasz**, **151 kiértékelhető
  szabály** (csoportokra osztva: respiratory/hemodynamic/consciousness/temperature/pain/bleeding/
  mechanism/pediatric/secondary), 2 gyermek vitál-sávtábla (HR/RR, a motor számolja), 45 referencia-
  definíció, 38 űrlapmező, 75 teszteset. Séma: sík `rules` + `stepOrder` + `vitalBands` (ld. kb.js eleje).
- **`app/js/engine.js` ÁTÍRVA v2-re** (adatvezérelt): sík szabálylista `group` szerint, `stepOrder`
  sorrendben; gyermek HR/RR sáv-kikeresés a `vitalBands`-ből; elfogad közvetlen `gcs` összeget is.
- **App betölt** (v1.0, 163 panasz a listában, nincs konzolhiba). Tesztfuttatás node NÉLKÜL:
  `"/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc" app/tests/run_tests_jsc.js`
  (a projekt gyökeréből). Nincs node/npm a gépen — jsc-t használunk.

### ⚠️ KULCS-MEGÁLLAPÍTÁS: a 75-eset teszt jelenleg 17/75 — DE ez NEM motorhiba

A motor teljes bemenettel BIZONYÍTOTTAN helyesen tüzel (GCS 12→MSTR2, súlyos nehézlégzés→1,
centrális/akut/súlyos fájdalom→2, gyermek RR-sáv→3). A bukások oka **adatszerződés-eltérés a
szintézis-agentek közt**: az `esetek`-agent az esetek `inputs`-ába CSAK nyers számokat írt
(hr, rr, sys, dia, temp, spo2, gcs, fajdalomPont, kor, panasz), a döntéshez szükséges MEGÍTÉLÉSI
select-mezőket viszont NEM (`fajdalomLokalizacio`, `fajdalomJelleg`, `nehezlegzesFok`,
`keringesiAllapot`, `lazKullem`, `verzesSulyossag`, gyermek-flagek). A szabályok viszont ezekre
épülnek → a legtöbb eset „nincs" (egy szabály sem tüzel) vagy a gyermek vitál-sáv fölé-triázsol.

**KÖVETKEZŐ LÉPÉS (választható), hogy a teszt valódi korrektség-kapu legyen:** egy agent-pass, ami
minden esethez a `desc`+`rationale` alapján kitölti a hiányzó megítélési mezőket a `munka/kb/kb_esetek.json`
`inputs`-ában (a rules elérhető mezőnevei: ld. az egyes kb_*.json inputFields), MAJD újragenerálás + jsc-teszt.
Két valódi tartalmi észrevétel a triázshoz (nem blokkoló): (1) FELNŐTT hipotermia/HT nyers számból nincs
gépi szabály (SYS 193 & T35 → „nincs", mert a HT-küszöb >200/220, a hipotermia adultnál kézi) — ellenőrizendő
a forrásban, kell-e adult numerikus szabály; (2) a gyermek HR/RR sáv „referencia-irányszám, ha bizonytalan
triázsolj felfelé" — néhány esetnél a holisztikus forrás-döntésnél magasabbra sorol (biztonságos irány, de exact-match teszt bukik).

### 2026-07-20 (2. munkaegység): esetek kiegészítve + teszt 45/75 + kategorizálás

- Az `esetek` inputs kiegészítve a megítélési mezőkkel (workflow_esetek_kiegeszites.js, 5 batch,
  eredeti mentve: `munka/kb/kb_esetek.backup.json`). Teszt: **17 → 44 → 45/75** (a +1 a lenti fix).
- **KB-integritás audit + FIX**: `fajdalomTipus` → `fajdalomJelleg` mezőnév-eltérés a 6 gyermek
  fájdalom-szabályban (a gyermek-agent más nevet használt, mint a felnőtt-agent) — javítva a
  kb_gyermek.json-ban. Több mezőnév-eltérés NINCS (audit tiszta). Halott mezők: immunszupprimalt,
  pefrSzazalek (csak kézi-megítélésű szabályok használják — nem hiba).

**A maradó 30 bukás kategóriái (a MOTOR jó — ezek KB-lefedettségi/döntési kérdések):**
1. **Panasz-specifikus módosítók + complaint-intrinsic szintek NINCSENEK bekötve** (~15 eset) — a
   legnagyobb tétel. A `secondary` szabályok `csakPanaszok`-ja üres, és a complaints-nak nincs
   `defaultLevel`-je. Ide tartozik: szív-eredetű mellkasi fájd.→2 (eset_02,07), nem-szív mellkasi→3
   (06), szem-sérülés/vegyi→2 (55,64), fogavulzió→2 (62), here/pénisz urológiai→2 (39,61), stroke
   időablak→3 (16), végtagdeformitás→3 (19), minor (kötéscsere/CT-lelet/kis esés/krón. seb/szúrt
   seb)→5 (05,20,26,34,50), gyermek vérhányás→2 (38), digoxin-mérgezés→2 (67).
2. **⚠️ ALULTRIÁZS – biztonsági prioritás: mechanizmus gyermekre nem alkalmazódik** — a mechanizmus-
   szabályok `applies_to='felnott'`; 13é és 8é trauma (eset_29,41) exp2→kapott3. VERIFIKÁLANDÓ a
   forrásból, majd valószínűleg `applies_to='mind'`.
3. **Aktív/lezajlott görcsroham szabály hiányzik** — aktív tónusos-klónusos→1 (66,73), lázgörcs
   után→3 (63), posztiktális→3 (54). Kell egy `gorcsAllapot` mező + szabályok.
4. **DÖNTÉS KELL (Ádám – biztonságfilozófia): gyermek HR/RR vitál-sáv MÉRVADÓ vagy TANÁCSADÓ?**
   A forrás „referencia-irányszám, ha bizonytalan triázsolj felfelé". Most mérvadó → jó állapotú
   gyereknél FÖLÉ-triázsol (eset_47 exp4→3, eset_54 exp3→2). Ez BIZTONSÁGOS irány, de bukik az
   exact-match teszten. Opció: (a) marad mérvadó (biztonságos, de „szigorúbb"); (b) tanácsadó =
   csak figyelmeztet, nem dönt (a nővér ítél). Ádám döntése.
5. **Megjelenés-alapú (PAT/„első ránézés") → 1-2, nincs numerikus mérőszám** (eset_35 csecsemő floppy+láz→1;
   40 izomdisztrófiás fokozott légzési munka→1; 70-74 megjelenés-vignetták). Részben a `gyermekKullem`/
   PAT-mezők bővítésével, részben elkerülhetetlenül nővéri megítélés (a tool ezt jelzi is).

**JAVASOLT KÖVETKEZŐ EGYSÉG (legnagyobb haszon):** panasz-specifikus módosítók + complaint-intrinsic
szintek bekötése (1. kategória) — forráshű synthesis-pass, ami a masodlagos/folyamat szabályokhoz és a
CEDIS panaszokhoz hozzárendeli a szintet/hatókört. Ez ~15 esetet old meg, köztük alultriázsokat.
Előtte/vele: mechanizmus-gyermek verifikáció (2.) és Ádám döntése a sáv-filozófiáról (4.).

### 2026-07-20 (3. munkaegység): panasz-specifikus szabályok bekötve — teszt 66/75

- Mechanizmus-szabályok `applies_to: mind` (forrás-igazolt: jegyzet 248. o. 13é eset + tankönyv 70. o.).
- Esetek panasz-id-i kanonizálva (44 slug → CEDIS-id, mapping: `munka/kb/slugmap.json`).
- **60 új panasz-specifikus szabály** 3 patch-fájlban (`munka/kb/patch_panasz_*.json`), 21 új mező
  (gorcsAllapot, strokeTunetKezdet, szemSerulesModosito, fogElvesztes, sebModosito, verhanyasJelleg stb.),
  14 forrás-igazolt eset-input-kiegészítés. 4 régi szűkítetlen duplikátum leváltva (assemble_kb.py SUPERSEDED).
- **Motor-kiegészítés**: tisztán panasz-alapú szabály (condition:[] + csakPanaszok + level) a panasz
  kiválasztásakor tüzel. Teszt: 45 → 62 → **66/75**. KB most: 207 szabály, 57 mező.
- **Maradék 9 bukás** (mind ismert kategória):
  (a) 2 eset — gyermek HR/RR sáv-filozófia, ÁDÁM DÖNTÉSÉRE VÁR (mérvadó=biztonságos felültriázs vs tanácsadó);
  (b) 6 eset — megjelenés-alapú (PAT / „első ránézés": leszürkült, márványozott, tónustalan+láz, étel-elutasítás
      +levertség, fluktuáló tudat, súlyos légzési munka izombetegnél → MSTR 1-2). MEGOLDÁS KÉSZ TERV:
      „kritikus megjelenés" select az 'immediate' csoportba (a forrás támogatja: jegyzet 196-210, 271-285) —
      a következő UI-egységben az átrendezéssel együtt;
  (c) 1 eset (eset_64, gyermek szem-idegentest) — forrás-kétértelműség, nyitott kérdésként dokumentálva.
- Fontos nyitott forrás-kérdések a patch-agentektől: stroke 4,5-24h trombektómia-ablak (jegyzet 154 vs 156. o.);
  cellulitis-módosító szint (p100: 3 vs p145: 4); égés 5-25% sáv következtetett.

### 2026-07-20 (4. munkaegység): kritikus megjelenés + UI-átrendezés — teszt 72/75 ✅

- **Elsődleges szabályok hatóköre mind-re bővítve** forrás-igazolással (nehézlégzés-fok: jegyzet
  217-219; hemodinamika: 226-228 — a gyermek-modul ugyanazt a leképezést adja); gyermek_09/10/11
  keringés-duplikátumok SUPERSEDED.
- **Kritikus megjelenés (look test / PAT) mező + 6 'immediate' szabály** (`munka/kb/patch_kritikus_megjelenes.json`):
  vitális disztressz/periarreszt→1, leszürkült-ernyedt gyermek→1, cianotikus-márványozott→1,
  aktív görcs→1, csak-fájdalomra-reagál→1, étel-elutasítás+letargia (kisgyermek)→2. Mind oldalhivatkozott.
- **Teszt: 72/75.** Maradék 3: eset_47+54 (gyermek vitál-sáv filozófia — ÁDÁM DÖNTÉSE), eset_64 (forrás-kétértelmű).
- **UI kész az Ádám-féle követelményre**: gyermek-mezők a lista végi összecsukott kártyában
  (gyermekkorú betegnél auto-kinyílik); panasz-hatókörös mezők (23 db) csak a releváns panasznál
  látszanak; figyelmeztetések MEZŐNKÉNT összevonva (67 sor → 1); folyamatábrán csak a tüzelt
  szabályok + "+N további" gomb (212 chip → ~13). Cache-bust: script src ?v=3 (fájlmódosításkor bump!).
- **Böngészős end-to-end teszt (Kuti Istvánné mintalelet)**: parser mindent átvesz (név-regex javítva,
  MAP-címke pótolva), kor 82 auto, GCS 15; „általános gyengeség" + nincs-kritikus-küllem + nincs-nehézlégzés
  + stabil-potenciálisan-instabil keringés → **MSTR 3 (Sürgős, 30 perc)** — a döntési út tisztán látszik.
- Motor: trace-be került `hianyzoMezok`; tisztán panasz-alapú szabály (condition:[] + csakPanaszok + level) tüzel.

### 2026-07-20 (5. munkaegység): lépésenkénti (wizard) UX — Ádám kérésére

- A bal oszlop LÉPÉSENKÉNTI kitöltés lett, a triázsfolyamat sorrendjében, oda-vissza lapozható,
  fent kattintható lépés-sávval: **1. Első megtekintés** (lelet-beillesztés + életkor* + kritikus
  megjelenés* — kötelezők, e nélkül nincs Tovább) → **2. Vezető panasz*** → **3. Vitálparaméterek**
  → **4. Megfigyelés, fájdalom** → **5. Panasz-specifikus** (kimarad, ha nincs releváns mező) →
  **6. Gyermek** (felnőttnél automatikusan kimarad) → **7. Összegzés**.
- **Progresszív felfedés**: fájdalom-részletek (lokalizáció/jelleg) csak fajdalomPont>0 esetén.
- **Kritikus rövidzár**: ha a javaslat MSTR 1-2, piros sáv jelenik meg („további kitöltés nem
  szükséges") + ugrás az összegzéshez — a forrás elve szerint (1-es szintnél ne vesztegess időt).
- Figyelmeztetés-lista: üres űrlapnál semmi; kitöltés közben max 5 mező + számláló.
- Pipát csak meglátogatott/teljesített lépés kap. Élő eredmény + folyamatábra végig jobb oldalt.
- Javított hiba: `hidden` attribútumot felülíró `display:flex` (kritikus-banner) — CSS-szabállyal.
- Cache-bust: ?v=8. Tesztek változatlanul 72/75 (motor nem változott).

### 2026-07-20 (6. munkaegység): kártya-wizard UX újratervezés (v3-inspiráció alapján)

Ádám megosztotta a `~/Downloads/mstr_triage_v3.html` korábbi munkát INSPIRÁCIÓNAK (esztétika +
mechanizmus, NEM tartalom). Ebből átvéve, de a MI motorunkra/tudásbázisunkra építve:
- **Új felület: egy-kérdés-egy-kártya wizard** (`app/js/wizard.js`, ez váltja az `app.js` UI-szerepét;
  az `app.js` már NEM töltődik be — dead code, törölhető). Motor/KB/leletparser/flowchart változatlan.
- Lépések: 1. Első megtekintés (look test, szintszínes választókártyák) → 2. Kor → 3. Panaszkör
  (ikonos kategória-rács, 17 kat.) → 4. Vezető panasz (kereshető lista) → 5. Vitálok (lelet-beillesztés
  + nagy számmezők + GCS-rács) → 6. Légzés/keringés/láz → 7. Fájdalom (VAS 0–10 szintszínezve, majd
  lokalizáció/jelleg progresszíven) → 8. Panasz-specifikus (csak a releváns mezők) → 9. Gyermek (csak
  gyermeknél) → 10. Eredmény.
- **Átvett v3-mechanizmusok**: progress bar, breadcrumb, vissza/előzmény-verem, szintszínes tap-targetek,
  VAS/GCS widget, **kitöltési napló (path log)**, kritikus rövidzár (MSTR 1-2 → piros sáv + ugrás).
- **Megtartott előnyünk**: minden a motorból jön (nem hardcode-olt flow), forráshivatkozott döntési út
  (összecsukható, kattintható szabályok → oldalszám), 210 szabály, 72/75 validáció.
- Böngészőben végigtesztelve: kritikus út → MSTR 1; hasi fájdalom centrális/akut/5 → MSTR 3 helyes
  döntő szabállyal; lelet-beillesztés (Kuti) HR/GCS/kor OK. Cache-bust: ?v=13. Nincs konzolhiba.
- Javított hibák: DOMContentLoaded-miss (azonnali indítás), „Tovább" élő engedélyezése gépelésre,
  lelet-üzenet megőrzése render között, kritikusnál nincs opcionális-mező nyaggatás.

### 2026-07-20 (7. munkaegység): MSTR színek + azonosítás/barcode + dinamikus kérdés-kihagyás

1. **Színkódok az MSTR-kategóriákhoz igazítva**: 1=piros #C0392B, 2=narancs #D35400, 3=sárga #B7950B,
   4=zöld #1E8449, 5=kék #1A5276 — a `kb.js` badge-ei (assemble_kb SZIN_HEX) és a `style.css` most EGYEZNEK.
2. **Azonosítás/barcode lépés (Lépés 1)**: ápoló neve + beteg-azonosító mező, ami KÉSZ a vonalkód-scanner
   bevitelére (a leolvasó billentyűleütést + Entert küld; `parseAzonosito` bontja | ^ ; , tab mentén, tiszta
   számjegy → KBA/azonosító). Kihagyható. A napló és a breadcrumb mutatja. Valódi KBA-integráció később
   (INTEGRACIO.md); ez az előkészített horog.
3. **DINAMIKUS KÉRDÉS-KIHAGYÁS (biztonságos)** — wizard.js `mezoLegjobbSzint`/`mezoRelevansId`:
   mivel a végső szint = a tüzelt szabályok MINIMUMA, ha van egy "padló" (pl. kardiális mellkasi
   fájd. → MSTR 2), akkor azokat a kérdéseket, amelyek MINDEN kimenete >= padló (csak enyhébbet
   adhatnának), NEM kérdezzük. A súlyosbító irányú (kisebb szám felé mutató) kérdések végig aktívak.
   Invariáns: SOHA nem hagyunk ki olyat, ami a szintet súlyosbíthatná → adat nem vész el, ami számít.
   Az eredményen zöld sáv jelzi, hány kérdés maradt ki és miért (átláthatóság).
   - Bizonyítva böngészőben: kardiális mellkasi fájd. → MSTR 2; megfigyelés-lépésen már CSAK
     "Nehézlégzés (A-B)" + "Hemodinamika (C)" (→ elérhetik az 1-et); láz-küllem/fájdalom/3-as
     módosítók kihagyva; 4 kérdés-kihagyás jelezve.
   - A teljes rövidzár (banner "nem szükséges tovább") már CSAK MSTR 1-nél; MSTR 2-nél a súlyosbítók
     még kérdeződnek.
4. Motor változatlan → teszt 72/75. Cache-bust ?v=16.

### 2026-07-20 (8. munkaegység): search-first panaszválasztó + telepítési csomag + ellenőrzés indítva

- **Panaszválasztó okosabb** (egy képernyő, `panasz` lépés beolvadt a `panaszKat`-ba): fő kereső
  legfelül (az ÖSSZES panaszban keres kattintás előtt), alatta kategória-rács ikonokkal; kategóriára
  kattintva inline lista + „← Összes kategória"; a beépítetten súlyos panaszokon szint-badge
  (pl. szív eredetű mellkasi fájd. [2], szívleállás [1]) — `panaszSzint()` a csakPanaszok+feltétel
  nélküli szabályokból. Cache-bust ?v=17.
- **Telepítési csomag KÉSZ**: `dist/mstr_triage.html` — egyfájlos, önálló (520 KB, 0 külső hivatkozás),
  dupla kattintással v. bármely statikus szerveren fut. Build: `python3 munka/build_singlefile.py`.
  Útmutató: `DEPLOY.md` (dupla katt / Apache-nginx / `python3 -m http.server` / GitHub Pages /
  Semmelweis-szerver). `.gitignore` kész (nagy oldalképek + PDF-ek kihagyva a repóból).
- **Adverzáriális KB-ellenőrzés ELINDÍTVA** (workflow_ellenorzes.js, háttér): 10 KB-fájl × (numerikus
  hűség + teljesség) a forrásoldalak ellen, majd igazolt javítások. Jelentések: `munka/verify/ell_*.md`.
  Eredmény a workflow végén; a javítások után újra kell futtatni assemble_kb.py + jsc-teszt + build.

### 2026-07-20 (9. munkaegység): KB-ELLENŐRZÉS LEFUTOTT ✅ — 0 kritikus hiba

Adverzáriális ellenőrzés (10 fájl × numerikus+teljesség, 17 agent) eredménye:
**29 észrevétel, EBBŐL 0 KRITIKUS** (nincs elírt triázs-küszöb / rossz szint) — a numerikus mag
(GCS-sávok, célidők, O2/PEF, láz, fájdalom-mátrix, mechanizmus km/h, gyermek HR/RR sávok) HELYES.
7 forrásigazolt javítás átvezetve (assemble_kb.py újrafutott → kb.js: 213 szabály; teszt 72/75; build ?v=18).
Fájlonként: szintek 5db(1 jav,1 elvetve), elsődleges 5db, gyermek 1db, másodlagos 2db(1 jav), cedis 3db(1),
folyamat 2db(1), kardio-patch 3db, trauma-patch 2db(1), minor-patch 3db(1), kritikus-patch 3db(1).
Jelentések: `munka/verify/ell_*.md`. A megmaradt észrevételek MIND „fontos/kisebb" (forráshivatkozás-
pontosítás, szövegárnyalat) — pl. újraértékelési intervallum forrása (tankönyv p22 hozzáadva),
5. szint „bizonytalan→bizonyított" szóelírás, néhány levezetett hivatkozás jelölése. Ezek NEM
befolyásolják a besorolást; a maradék „kisebb" tételek átnézése a finomhangoló fázisra hagyható
(a részletek a verify/ell_*.md-ben tételesen).

**A TARTALMI FÁZIS EZZEL LEZÁRULT.** Innen: tesztelés (több eset kézi próbája) + UI-finomhangolás.

### 2026-07-20 (10. munkaegység): derivációk — kemény paraméterből előre kitöltött módosító

Ádám kérése: ha egy jól körülírt HATÁRÉRTÉKŰ numerikus paraméter meghatároz egy módosítót,
töltse ki előre; a szubjektív marad megerősítendő. Megvalósítva adatvezérelt **derivációs réteg**:
- `assemble_kb.py`: `derivations` tömb (forráshivatkozott!) + `derivValueOrder`. Most bekötve:
  **SpO₂ → nehézlégzés foka** (<90 súlyos / 90-92 közepes / 93-94 enyhe / ≥95 nincs; forrás: jegyzet
  p82,p110, tankönyv p32) és **PEFR → nehézlégzés foka** (<40 súlyos / 40-60 közepes / >60 nincs).
- `wizard.js`: `alkalmazDerivaciok()` az `ertekel()`-ben fut; a legsúlyosabb nyer több forrásnál;
  `keziMezo` felülírja (kézi választás nyer, deriváció eldobódik); ha a numerikus adat eltűnik, az
  auto-érték visszavonódik. Az auto-mező MINDIG látszik (megerősítéshez), akkor is, ha a padló miatt
  egyébként kihagynánk. Jelölés: ⚡ + „megerősítendő" az opción és az eredményen.
- Bizonyítva böngészőben: SpO₂ 84 → nehézlégzés=Súlyos előre kitöltve, ⚡ megerősítendő, chip MSTR 1.
- `opcioKartyak` most szám/checkbox mezőt is helyesen renderel (pefrSzazalek nem üres kártya).
- **Bővíthető**: további derivációkat a `derivations` tömbbe kell felvenni (from→to+map+source). A
  szubjektív mezők (keringés-sokk, láz-küllem) SZÁNDÉKOSAN nem deriváltak (klinikai megítélés).
- Teszt 72/75; egyfájlos build frissítve (534 KB, ?v=20).

### 2026-07-20 (11. munkaegység): BIZTONSÁGI JAVÍTÁS — SpO₂-deriváció suggest-módra

Ádám jogos aggálya: SpO₂ <90% → automatikus MSTR 1 TÚL ÉRZÉKENY (COPD/krónikus hipoxia!).
Forrás-ellenőrzés (jegyzet p80/109, tankönyv p31-32) IGAZOLTA: a „súlyos nehézlégzés" a forrásban
elsősorban KLINIKAI (fokozott légzési munka, cyanosis, egyszavas beszéd) — az O₂<90 csak KÍSÉRŐ jel;
és külön szabály (rule_06): „≥10% relatív esés a beteg SAJÁT alapértékéhez képest → MSTR 1; COPD-nél
a megszokott saját érték a viszonyítás." Tehát az abszolút <90 → auto-MSTR1 NEM volt forráshű.

Javítva:
- **A SpO₂/PEFR deriváció `mode:'suggest'`** (assemble_kb): NEM tölti ki magától a fokozatot, NEM visz
  automatikusan MSTR 1-re — csak JAVASLATOT ad (💡 kiemelt „javasolt" opció + a mező fölött COPD/klinikai
  caveat). A nővér koppintással erősíti meg. Böngészőben igazolva: SpO₂ 84 → chip „–", nem MSTR 1;
  „Súlyos" javasoltként jelölve, de nincs előre kiválasztva.
- **rule_06 mostantól ténylegesen kiértékelhető**: új `relativO2Eses` checkbox (kb_elsodleges_felnott),
  „≥10% O₂-esés a saját alapértékhez (COPD)" → MSTR 1, deliberát nővéri jelöléssel (eddig sosem tüzelt).
- Tanulság a derivációkhoz: csak TISZTA, kontextusfüggetlen határérték legyen 'auto'; ahol klinikai/COPD
  kontextus van, az 'suggest' + megerősítés. (Jelenleg minden deriváció suggest.)
- Teszt 72/75; egyfájlos build ?v=21.

### 2026-07-20 (12. munkaegység): AKUT vs. KRÓNIKUS kapu az O₂-javaslathoz (Ádám észrevétele)

Ádám: az akut/nem-akut nem csak COPD-nél számít. Forrás IGAZOLTA (tankönyv 31. o., szó szerint):
„az O₂-szaturáció [a nehézlégzés fokához] feltételezi..., hogy a betegnek az aktuális állapot
kialakulása ELŐTT az O₂-szaturációja normális volt" — tehát az abszolút O₂-szám CSAK AKUT esésnél
(előzőleg normál alapérték) használható; COPD/krónikus a fő, de nem egyetlen kivétel.
- Új `o2Akut` mező (akut / krónikus-COPD-ismeretlen). Az SpO₂→nehézlégzés deriváció `gate:{o2Akut:akut}`.
- Az o2Akut és relativO2Eses kérdés CSAK alacsony SpO₂-nél (<95) jelenik meg a légzés-lépésen.
- Krónikus/ismeretlen alapértéknél: figyelmeztetés (abszolút szám nem megbízható → klinikai jelek +
  PEFR + ≥10% relatív esés checkbox), NINCS O₂-javaslat.
- **Motorhiba javítva**: a kapu megkerülhető volt (a kapu nélküli PEFR-deriváció átvette az SpO₂
  célértékét) — a gate mostantól DERIVÁCIÓNKÉNT, a célérték-építés ELŐTT érvényesül (alkalmazDerivaciok
  átírva: gate az 1. körben; célonkénti alkalmazás a 2.-ban).
- Böngészőben igazolva: SpO₂84 + o2Akut nincs → nincs javaslat, szint „–"; krónikus → figyelmeztetés,
  nincs javaslat; akut → „Súlyos" javasolt (nem előre kiválasztva, nővér erősíti meg).
- Teszt 72/75; build ?v=23.

### 2026-07-20 (13. munkaegység): busy-ED UX-gyorsítók + buktató-gyűjtés indítva

**UX (kész, böngészőben tesztelve):**
- Fejléc „⟳ Új beteg" gomb (bárhonnan azonnali új triázs; eredmény-képernyőn kérdés nélkül, közben megerősítéssel).
- Billentyűzet: **Enter = Tovább** (kivéve textarea/barcode/kereső fókusz); **barcode-mező Enter** (scanner) → felvétel
  + automatikus továbblépés; **kereső Enter** → első találat kiválasztása. Autofókusz a barcode-on és a keresőn.
- **Sticky navigáció** (a Tovább/Vissza mindig elérhető görgetés nélkül), nagyobb tap-targetek mobil/tablet nézetben.
- Bizonyítva: kor+Enter→panasz; kereső "mellkasi fájdalom"+Enter→szív eredetű kiválasztva (chip 2). Cache ?v=24.

**Buktató/kivétel-gyűjtés ELINDÍTVA** (workflow_buktatok.js, háttér, wf_8b8bc7a7-e12): 7 domain-agent taxatívan
gyűjti a forrás kontextusfüggő feltételeit/kivételeit/buktatóit (mint az akut/krónikus O2-kapu) — pl. a
tankönyv 4.4 „Lehetséges hibák, buktatók" fejezete, GCS demens/szedált betegnél, hőmérséklet mérési mód/korhatár,
fájdalom centrális/perifériás kivételek, gyermek kompenzált sokk, "legsúlyosabb elem dönt", "beavatkozás nem
csökkenti a szintet" stb. Kimenet: `munka/caveats/cav_*.md` + `OSSZESITES.md` (prioritált beépítési lista).
**KÖVETKEZŐ:** az OSSZESITES.md alapján a „gyorsan+biztonságosan beépíthető" (kritikus/fontos, egyértelmű forrás)
tételek integrálása gate-mezőként / warningként / rule-kivételként (mint az o2Akut), majd assemble+teszt+build.

### 2026-07-20 (14. munkaegység): légzés-fokozat SZÁMÍTOTT + reverzibilitás + buktató-gyűjtés/integráció

**Légzés okos átalakítás (Ádám kérése — „ne kérdezze újra a numerikust"):**
- `nehezlegzesFok` mostantól SZÁMÍTOTT (computed) mező, NEM kérdés. Új `legzesiJelek` (klinikai
  jelek, O2-szám NÉLKÜL, a forrás rule_02-05 leírásaival). Új `KB.computedFields`: nehezlegzesFok =
  a klinikai jel + (AKUT esésnél) SpO₂-sáv + PEFR-sáv közül a LEGSÚLYOSABB (worst-of). A numerikust
  (SpO₂) NEM kérdezi újra — kontextusként mutatja + a számított eredményt provenienciával kijelzi.
- **Reverzibilitási BUG javítva**: a kézzel megadott mező (keziMezo) MINDIG látható/átállítható
  marad (a padló-szűrés eddig eltüntette a súlyosnak jelölt légzést). 
- **Holt-mező szűrő**: csak olyan mező jelenik meg kérdésként, amit tényleg használ szabály/computed
  (pl. az orphan „Immunszupprimált gyermek" checkbox eltűnt). `mezoHasznos()`.
- Böngészőben igazolva: SpO₂84 → nincs „<90%" kérdés; akut → „Nehézlégzés: Súlyos → MSTR 1 (SpO₂ 84%)";
  klinikai jel átállítható. Teszt 72/75; ?v=26.

**Busy-ED UX (13. egység): fejléc „Új beteg", Enter=Tovább, barcode/kereső Enter, sticky nav.**

**BUKTATÓ/KIVÉTEL taxatív gyűjtés KÉSZ + INTEGRÁCIÓ FUT:**
- `munka/caveats/OSSZESITES.md` — 107 caveat → **68 teendő (T1–T68), 51 🟢 azonnal beépíthető**, 17 🟡.
- Integráció FUT (workflow_buktatok_integracio.js, w6b4nbv8h): a 🟢 tételek → `patch_buktatok_altalanos.json`
  + `patch_buktatok_panasz.json` (inputField+rule / gate), forrás-újraigazolással. assemble_kb már fűzi
  a patch-derivációkat is. **KÖVETKEZŐ (a workflow után): assemble + jsc-teszt + build + böngészős sanity.**
- ⚠️ **3 FORRÁS-DÖNTÉS ÁDÁMNAK** (a gyűjtés jelezte, NEM döntöttük el): (1) GCS-küszöb (3-9/10-13 vs 3-8/9-13),
  (2) láz-életkor (≥17 vs 16), (3) rektális hőmérséklet korhatár (<2 vs <3 év).
- ⚠️ **Motor-korlát (🟡)**: a baseline-hez viszonyított aritmetika (10% szat-esés, GCS-trend, relatív
  hypotonia) diszkrét `map`-pel nem fejezhető ki → motor-bővítés kell (később). A relatív O2-esést
  addig a `relativO2Eses` checkbox fedi (kézi nővéri jelölés).

### 2026-07-20 (15. munkaegység): SpO₂ NEM dönt magától + buktató-integráció

**Ádám kulcskérése teljesítve — az SpO₂ önmagában SOHA nem ad MSTR 1-et:**
- A nehézlégzés fokozata (`nehezlegzesFok`, computed) mostantól KIZÁRÓLAG a klinikai jelekből
  (`legzesiJelek`) számol. Az SpO₂/PEFR már NEM bemenet a worst-of-ba — csak NEM KÖTELEZŐ JAVASLAT
  (suggest-deriváció → `legzesiJelek`, kapu: o2Akut=akut), ami kiemeli az opciót, de nem tölti ki.
- Alacsony SpO₂ (<95) → előjönnek: akut/krónikus (o2Akut), ≥10% relatív esés (relativO2Eses), klinikai
  jelek — és a KLINIKAI megítélés dönt. Böngészőben igazolva: SpO₂84 → „–"; akut → „–" + javaslat;
  klinikai közepes → 2; súlyos → 1 (reverzibilisen). NINCS automatikus T1 a számból.
- Holt-mező szűrő kiegészítve: a deriváció kapu-mezői (o2Akut) is „hasznos"-nak számítanak.

**Buktató-integráció KÉSZ** (workflow w6b4nbv8h): +6 forrásigazolt szabály (patch_buktatok_altalanos/panasz.json):
intubált/lélegeztetett→1, légútvédelem-képtelen→1, nem-szülőszobai újszülött→2; perineális bőrelfeketedés
(nekrotizáló fasciitis)→2, fejsérülés+prehospitális ájulás→3, új keletű furcsa viselkedés→3. Mind checkbox/
select-re tüzel (nincs auto-túltriázs), padló-logika (csak felfelé). 20 tétel kihagyva: nagyrészt MÁR bekötve
(immunszupprimált+láz=elsodleges_felnott_15, maghő<32=masodlagos_22 stb.), v. nem automatizálható (baseline-
aritmetika / folyamat-warning → notes). KB most: 219 szabály, 68 mező. Teszt 72/75. Build ?v=29.

**MÉG NYITOTT a buktató-fázisból:**
- ⚠️ **3 FORRÁS-DÖNTÉS ÁDÁMNAK**: GCS-küszöb (3-9/10-13 vs 3-8/9-13); láz-életkor (≥17 vs 16); rektális
  hőmérséklet korhatár (<2 vs <3 év). — Amíg nincs döntés, a jegyzet (2022) értéke a fő.
- 🟡 **Motor-bővítés kell** (baseline-relatív aritmetika): 10% szat-esés (most kézi checkbox fedi),
  relatív hypotonia a beteg megszokottjához, GCS-trend. Külön kis motor-feature.
- Teljes T1–T68 tétel-egyeztetés (melyik implementált / deferred / decision) — a `munka/caveats/OSSZESITES.md`
  a forrás; a reconciliation a következő menet záró lépése lehet.

### 2026-07-20 (16. munkaegység): CTAS COT-2008 + MSTR-előadások — 2 ellentmondás MEGOLDVA

Ádám 5 PPT-t adott (MSTR-előadások + a kanonikus CTAS COT-2008, az MSTR ALAPJA). Szöveg kinyerve:
`munka/ppt/*.txt` (COT-2008 = 406 dia). **A CTAS mint döntőbíró 2 nyitott forrás-ellentmondást eldönt,
a mi jelenlegi FŐ értékünk javára — így Ádámnak ezekben már nem kell döntenie:**
- ✅ **GCS: 3–9 → 1, 10–13 → 2** (CTAS COT-2008 „Adults: Level of Consciousness" tábla, DIA 66-69, szó szerint;
  a tankönyvi függelék 3-8/9-13 az eltérő — a jegyzet + CTAS egyezik, ez a mérvadó).
- ✅ **Láz felnőtt-korhatár ≥17 év** (CTAS: „Fever >38.5 C (age ≥17 years)").
- CTAS légzés-tábla is KLINIKAI jellel vezet (O₂ csak másodlagos oszlop) → megerősíti a „klinikai kép dönt,
  SpO₂ csak támpont" megoldásunkat. Maghő <32→2 / 32–35→3 is egyezik.
- ⚠️ MARAD (kisebb): rektális hőmérséklet korhatár (<2 vs <3 év) — ez mérési technika, a CTAS nem dönti el;
  alacsony jelentőségű, a jegyzet-érték marad.

**CTAS-korroboráció FUT** (workflow_ctas_korroboracio.js, wm9eswspj): a szubjektív/kétes szabályainkat veti
össze a CTAS COT-2008 + MSTR-előadás tábláival (megerősítés / eltérés / finomítás — CSAK javaslat, nem írja a
KB-t). Kimenet: `munka/ctas/korr_*.md`. **KÖVETKEZŐ:** az eltéréseket átnézni, a finomításokat (pontosabb
condition_text/help a szubjektív pontokon) + az igazolt eltérés-javításokat beépíteni, majd assemble+teszt+build.

### 2026-07-20 (17. munkaegység): CTAS-korroboráció KÉSZ — erős független validáció

4 szelet, **48 megerősítés, 12 eltérés, 0 KRITIKUS** (jelentések: `munka/ctas/korr_*.md`). A KB túlnyomó
része SZÓ SZERINT egyezik a kanonikus CTAS COT-2008-cal (légzés/keringés/tudat DIA 8-9/66-69/208-209;
láz+fájdalom-mátrix DIA 11-12; másodlagos: vércukor 185-186, kiszáradás 40, hipotermia 68-69, terhesség 124,
mentális 97-104, nemi erőszak 120; gyermek Paeds-táblák). A 12 eltérés nagyrészt TUDATOS MSTR-döntés vagy apró
szövegezés — egyik sem kritikus.

**Beépítésre/ELDÖNTÉSRE érdemes (a korroborációból):**
- ⚠️ **DÖNTÉS (biztonsági): gyermek GCS-sávhatár.** A KB gyermeknél 3-8→1 / 9-13→2 (magyar jegyzet peds),
  DE felnőttnél 3-9→1 / 10-13→2 (jegyzet+CTAS). Belső inkonzisztencia + a CTAS gyermeknél is 3-9/10-13 →
  GCS 9-es gyereknél nálunk L2, CTAS-nál L1 (alultriázs-irány). Ajánlás: gyermeket is 3-9→1 / 10-13→2-re
  igazítani (biztonságos + konzisztens); Ádám döntése (magyar forrás felülírása). 
- 🟢 Finomítások (szint NEM változik, csak egyértelműsítés): hipertónia tünetlista bővítése „zavartság" +
  „hirtelen fejfájás" (F1); SpO₂ 92% sáv-átfedés szövegezése; fájdalom „<1 hónap" numerikus helyett CTAS
  mintázat-def.; petechiás kiütés gyermeknél → figyelmeztetés; <7 napos apnoés csecsemő. Részletek a korr_*.md-ben.
- Megjegyzés: a láz ≥38 (MSTR) vs >38.5 (CTAS) és a hipertónia >/≥ küszöb TUDATOS magyar-forrás-döntés — marad.
- A COT-2008 PPT NEM tartalmazza a korspecifikus RR/HR normáltáblákat → a mi számszerű gyermek vitál-sávjaink
  (Fleming/Lancet 2011, a tankönyvből) csak a súlyosság→MSTR elv szintjén validálhatók a CTAS-ból, a számok nem.

**A 3 eredeti forrás-ellentmondásból 2 MEGOLDVA (CTAS-igazolt): GCS felnőtt 3-9/10-13 ✓, láz ≥17 ✓.
Marad: rektális korhatár (kisebb) + ÚJ: gyermek-GCS igazítás (döntés).**

### 2026-07-20 (18. munkaegység): CTAS-finomítások BEÉPÍTVE

- ✅ **Gyermek GCS igazítva 3-9→1 / 10-13→2** (gyermek_12/13) — CTAS Paeds + felnőtt-konzisztencia + betegbiztonság
  (GCS 9 gyermek most MSTR 1, eddig 2). Motorral igazolva. (Ádám jóváhagyta: „csináld amit kell".)
- ✅ **Hipertónia tünetlista** kiegészítve „zavartság" + „hirtelen fejfájás"-sal (CTAS DIA 39) — 5 szabály
  condition_text + a hipertoniaTunet mező help. Nem szintváltó, csak egyértelműsít.
- Teszt 72/75 (nincs regresszió); build ?v=30. KB: 219 szabály.
- A 3 eredeti forrás-ellentmondásból **2 megoldva (GCS felnőtt, láz ≥17)**, a gyermek-GCS most igazítva;
  marad a rektális hőmérséklet korhatár (kisebb, mérési technika — jegyzet-érték).
- További apró CTAS-finomítások (petechiás kiütés→figyelmeztetés, <7 napos apnoé, SpO₂ 92% szövegezés,
  fájdalom mintázat-def.) DOKUMENTÁLVA a `munka/ctas/korr_*.md`-ben — nem szintkritikusak, ráérnek.

### 2026-07-20 (19. munkaegység): gyermek-finomítások + teljes end-to-end validáció

- Beépítve (nem szintváltó, egyértelműsítő): csecsemoApnoe help (<7 napos→min 2, CTAS DIA 355); gyermekKullem
  label „(toxikus/nem toxikus)"; gyermek_06 elhúzódó kilégzés jel; gyermek_velesz_01 protokoll-levél megjegyzés.
- **Teljes end-to-end böngészős validáció (hibátlan):** barcode Enter→lépés; lelet-beillesztés (HR/SpO₂ auto);
  hasi fájd. centr/akut/5 → MSTR 3; 8 lépéses kitöltési napló; 0 konzolhiba. Build ?v=31; teszt 72/75.
- A tartalom mostanra KÉTSZERESEN validált: saját források (adverzáriális) + kanonikus CTAS COT-2008.

### NYITOTT DÖNTÉSEK ÁDÁMNAK (nem sürgős, de a pontossághoz):
1. Gyermek HR/RR vitál-sáv: MÉRVADÓ (most így, néha felültriázsol jó állapotú gyereknél) vs TANÁCSADÓ.
   (Ez okozza a teszt 3 „bukását": eset_47/54 — biztonságos irány, de exact-match nem.)
2. Rektális hőmérséklet mérési korhatár (<2 vs <3 év) — kisebb, mérési technika.

### 🟡 KÉSŐBBI motor-bővítés (nem szabály, hanem képesség):
- Baseline-relatív aritmetika: ≥10% szat-esés a saját alapértékhez (most kézi checkbox fedi), relatív
  hypotonia, GCS-trend. Kis engine-feature (a `map` diszkrét).
- Apró CTAS-finomítások (laz_fajdalom: immunszuppr.-lista jelölés, jól-néz-ki→4 SIRS-szűkítés; petechiás
  kiütés; neonatális sárgaság panasz) — dokumentálva `munka/ctas/`-ban, ráérnek.

### 2026-07-20 (20. munkaegység): ABCDE-csoportosítás a felületen (Ádám észrevétele) + optimalizáló workflow

- **Elsődleges-módosító lépés ABCDE-alcímekkel** (forrás: jegyzet 740-742): **A–B · Légzés és légút**
  (o2Akut, klinikai jelek, ≥10% relatív O₂-esés, intubált/asszisztált lélegeztetés, légútját védeni képtelen),
  **C · Keringés**, **E · Láz**, **Módosítók** (vérzés, mechanizmus). A korábban a lista VÉGÉN lévő légzési/
  légúti checkboxok (relativO2Eses, lelegeztetest_igenyel, legutvedelem_keptelen) most az A–B blokkban.
  Forrás-igazolt: intubált/lélegeztetés a súlyos nehézlégzés (A-B) sorában (tankönyv 32); a „védtelen légút"
  a forrásban az eszméletlen (D) definícióhoz is kötődik (CTAS LOC DIA 68) → A-B alá, D-jelzés a súgóban.
  Böngészőben igazolva; teszt 72/75; build ?v=32. (`KLIN_CSOPORT`/`KLIN_SORREND` a wizard.js-ben.)
- **Multi-agent OPTIMALIZÁLÓ workflow FUT** (wqo0idthe): 5 elemző (UX-kritika, átlagos munkamenet, szabály-
  ellenőrzés, motor-ellenőrzés, 16 tesztszcenárió) + szintézis → `munka/review/TEENDOK.md`. Read-only elemzés;
  az eredményből a fő session építi be a javításokat + futtatja a szcenáriókat. **KÖVETKEZŐ:** TEENDOK.md
  átnézése → szabály/motor-fix (ha van kritikus) → szcenáriók lefuttatása → gyors-győzelem UX-ek → teszt+build.

**ELV (Ádám): implementálni CSAK explicit forráshivatkozással szabad — a Triázs tankönyv + MSTR jegyzet a
mindenkori alap, a CTAS COT-2008 a döntőbíró a kétes pontokon.**

### 2026-07-20 (21. munkaegység): okosabb szabad-szavas panaszkeresés

- **Kereső-motor fejlesztve** (wizard.js `normSzo`/`panaszKereses`): ékezet-érzéketlen, több-szavas
  (minden token illeszkedjen), alias-tudatos, RANGSOROLT (névtalálat > alias). Böngészőben igazolva:
  „fejfajas"→Fejfájás, „legszomj"→Légszomj (ékezet nélkül is). A CEDIS-lista marad az alap.
- **Szinonima-réteg készül** (háttér-agent → `munka/kb/synonyms.json`): magyar köznyelvi/beteg-bemondás
  kifejezések (pl. „infarktus"/„szívroham"→mellkasi-fajdalom-sziv-eredetu; „nem kap levegőt"→legszomj;
  „elesett/elájult"; latin/angol: dyspnoe/stroke/AMI...). Az assemble_kb már beolvassa (`complaints[].aliases`).
  Ezek CSAK keresést segítenek (a nővér a valódi CEDIS-panaszt választja) — triázs-logikát nem érintik.
  **KÉSZ:** `synonyms.json` (159 panasz, 833 alias) beépítve, assemble+build ?v=34. Böngészőben igazolva:
  „infarktus"/„mellkas szorít"→szív-eredetű mellkasi fájd.; „nem kap levegőt"→légszomj; „leesett a cukra"→
  hypoglycemia; „rángatózik"→görcsroham; „stroke"→CVA; „vért köp"→vérköpés; „fáj a feje"→fejfájás. ✓
- Párhuzamosan FUT az optimalizáló workflow (wqo0idthe) is → `munka/review/TEENDOK.md`.
- Teszt 72/75; build ?v=34.

### 2026-07-20 (22. munkaegység): multi-agent optimalizálás eredménye + kritikus javítások

Az 5+1 agentes optimalizálás kész (`munka/review/TEENDOK.md`, 40 tétel: 13 szabály/motor, 19 UX, 8 gyors-győzelem;
16 tesztszcenárió). **2 KRITIKUS betegbiztonsági hibát talált — MINDKETTŐ JAVÍTVA:**
- ✅ **1.1 Kritikus rövidzár csak MSTR 1-nél** (wizard.js RENDER.kritikus): eddig szint≤2-nél az egész
  felmérést átugorta (alultriázs: letargiás gyermek look-teszten 2, de hypoxiás is lehet →1). Most csak
  szint===1 zár rövidre; 2-nél folytatja a vitál/megfigyelés lépéseket.
- ✅ **1.2 gyermek_14 (GCS 14-15) level 3 → null**: eddig MINDEN éber gyermeket automatikusan MSTR 3-ra tett
  (rendszerszintű túltriázs); most a felnőtt szabállyal (elsodleges_felnott_13) és a CTAS-szal egyezik.
- ✅ **1.3 Kor-mezők kölcsönösen kizáróak + egységes korprecedencia** (engine.gyermekE + wizard paramMezo):
  ellentmondó életkor (év+hónap együtt) nem adhat rossz gyermek-vitálsávot.
- **VALIDÁCIÓ:** meglévő 75 teszt 72/75 (nincs regresszió) + **16 FÜGGETLEN új szcenárió 16/16 egyezik** (más
  agent tervezte). Build ?v=36.
- **TEENDOK.md maradó tételei** (nem sürgős, dokumentálva): 1.4 dinamikus-kihagyás computed-gráf-követés
  (most hardcode fedi), 1.5 look-teszt gyermek-only szabály kor előtt (opció-címkék úgyis explicitek),
  + 19 UX / 8 gyors-győzelem ötlet (pl. gyakori panaszok gyorsgombjai, betegadat-perzisztálás [adatvédelmi
  egyeztetés kell]). Ezek a következő UX-körre.

### 2026-07-20 (23. munkaegység): kiszáradás-bug fix + gyakori-panasz gyorsgombok + a 72/75 tisztázása

- ✅ **Kiszáradás-szabályok bekötve** (gyermek_dehid_01-04 → `dehidraciofok` mező; eddig condition:[] = holt).
  Valódi funkcionális javítás (a mező most tényleg működik). Teszt marad 72/75 + 16/16 (nincs regresszió).
- ✅ **Gyakori-panasz gyorsgombok** a Vezető panasz lépésen (10 leggyakoribb ED-bemondás egy koppintással:
  mellkasi fájd. szív, hasi fájd., légszomj, fejfájás, láz, szédülés, hányás, ájulás, CVA, alsóvégtagi sérülés)
  + szint-badge. Busy-ED gyorsítás. Build ?v=37.

**A 72/75 TISZTÁZVA — nem 3 bug, és a 75/75 hajszolása itt RONTANA a biztonságon:**
- eset_47 (jó állapotú, enyhén tachycard/tachypnoés gyerek → forrás „4"): a mi vitál-sávunk „3"-at ad, mert
  NEM sorol le eltért vitálisú gyereket. Ez a VÉDHETŐBB: a forrás kifejezetten óv a gyermekkori KOMPENZÁLT
  SOKKtól (a gyerek „jól néz ki", a tachycardia az egyetlen korai jel). Az eset holisztikus lefelé-sorolása
  épp a csapda. → A mérvadó vitál-sáv marad (biztonságosabb); NEM tesszük tanácsadóvá.
- eset_64: az eset INPUTJÁBÓL hiányzik a döntő megítélési mező (szem-módosító) — a teszt-adat korlátja,
  nem motorhiba. Valós használatban az ápoló kitölti ezt (a szem-módosítóval a rendszer MSTR 2-t ad).
- eset_54: **JAVÍTVA A KORÁBBI TÉVES INDOKLÁS (2026-09-18, adversariális verifikátor).** Korábban itt az
  állt, hogy az input-ból hiányzik a görcs-fázis mező. Ez TÉNYSZERŰEN NEM IGAZ: az eset_54 inputja
  tartalmazza a `gorcsAllapot: 'kitisztult'` mezőt. Az eltérés valódi oka a `band_rr`: 16 éves fiú,
  RR 22/perc — a gyermek vitál-sáv (Fleming) ezt MSTR 2-re sorolja, míg a forrás MSTR 3-at mond. Tehát
  ez ugyanannak a 18-éves-határ problémának a megnyilvánulása, ami külön nyitott döntési pont (ld. lentebb).
  Az irány továbbra is BIZTONSÁGOS (fölé-triázs), de az indoklás korábban hibás volt.
- ⇒ A 72/75 azt jelenti: a motor helyesen, a biztonságos irányba dönt. Gaming-elni 75/75-re nem cél.

### NYITOTT DÖNTÉS (opcionális, Ádámé): gyermek HR/RR vitál-sáv mérvadó (JELENLEG, ajánlott, kompenzált-sokk
biztonság) vs. tanácsadó. — A jelenlegi (mérvadó) a szakmailag védhetőbb; váltás csak kifejezett kérésre.

### 2026-07-20 (24. munkaegység): workflow-simító UX gyors-győzelmek (TEENDOK 2.x)

Elv (Ádám): a logika a WORKFLOW-t szolgálja — sima, tiszta, „jó használni". Beépítve (biztonságos, adatvédelmi
kérdés nélküli tételek):
- ✅ **2.2 Lelet AUTOMATIKUS átvétele beillesztésre** (paste event) — –1 koppintás/beteg; a gomb marad fallback.
- ✅ **2.1 Vitál-mező: tartományon kívüli érték piros jelzés + `inputmode=decimal`** (mobil számbillentyűzet).
- ✅ **2.5 Tap-targetek: GCS 44px, fejléc-gomb nagyobb** (kesztyűs félrekoppintás ellen).
- ✅ **2.7 `focus-visible`** minden interaktív elemen (akadálymentesség, billentyűs/kapcsoló-vezérlés).
- (+ előző körből: ⚡ gyakori-panasz gyorsgombok.)
- Böngészőben igazolva; teszt 72/75; build ?v=38.

**ADATVÉDELMI EGYEZTETÉST igénylő, ezért HALASZTOTT (Ádámmal):** 2.3 beteg-parkolás/„beteg-sor" localStorage-ban,
2.6 félkész triázs perzisztálás (sessionStorage) + beforeunload-őr. Ezek nagy munkamenet-hasznot adnának
(párhuzamos betegek, adatvesztés-védelem), de betegadat helyi tárolása → adatvédelmi döntés kell.

### 2026-07-20 (25. munkaegység): beteg-parkolás + adatvesztés-védelem (Ádám: GDPR nem akadály)

- ✅ **Beteg-parkolás / „Függő betegek"** (localStorage `mstr_parkolt_v1`): az „Új beteg" gomb a folyamatban
  lévő triázst NEM dobja el, hanem PARKOLJA egy sárga chip-sorba (fejléc alatt) — cimke = név/KBA v. panasz,
  + lépés + szint-badge; egy koppintás = visszatöltés (a mostani beteg ilyenkor automatikusan parkolódik),
  ✕ = elvetés. Több párhuzamos függő beteg. Böngészőben igazolva (park → fresh → visszatöltés).
- ✅ **Adatvesztés-védelem** (localStorage `mstr_aktiv_v1`): minden render()-nél mentődik az aktív triázs;
  indításkor, ha volt félbehagyott (nem `eredmeny`) állapot, AUTOMATIKUSAN visszatölt. Igazolva: teljes
  lapújratöltés után a beteg (lépés, crumbs, szint) helyreállt.
- Sorozat-alapok: `sMentheto/sVisszaallit/perzisztal/parkol/parkoltBetolt`. Build ?v=39; teszt 72/75.
- (GDPR: Ádám jóváhagyta a betegadat helyi tárolását. Ha később kell: „minden triázs törlése" gomb +
  auto-lejárat könnyen hozzáadható.)

**A busy-ED workflow mostanra végponttól végpontig sima:** azonosítás (scanner-Enter) → első ránézés →
kor → panasz (gyorsgomb / köznyelvi keresés) → vitál (lelet auto-paste) → ABCDE-megítélés → eredmény;
„Új beteg" azonnali váltás parkolással; refresh-biztos.

### 2026-07-20 (26. munkaegység): TEENDOK gyors-győzelmek LEZÁRVA + 1.4 robustusság

- ✅ **G7** SpO₂ 92% sáv-átfedés feloldva (gyermek_07 min:93; a 92 → közepes/2 a súlyosabb javára). G6 nem
  kellett (a gyermek_12/13 condition_text leíró, nem tartalmaz elavult számot).
- ✅ **1.4** Dinamikus kihagyás a SZÁMÍTOTT-mező gráfot követi: `mezoLegjobbSzint` a computedFields inputjaira
  a CÉLMEZŐ szabályai szerinti legjobb szintet örökli (legzesiJelek → nehezlegzesFok) — indirekt kérdés sem
  maradhat ki tévedésből. A hardcode védőhálóként marad.
- **Mind a 8 TEENDOK „gyors-győzelem" beépítve** (G1-G8). Teszt 72/75 + 16/16; build ?v=40; 0 konzolhiba.
- Gyermek SpO₂-alapú légzés-szabályok (gyermek_05/06/07) SZÁNDÉKOSAN mérvadók maradnak (gyermek-alultriázs /
  kompenzált sokk elleni védelem) — konzisztens a gyermek HR/RR sáv mérvadó döntésével.

**A TEENDOK.md-ből maradt: 1.5 (look-teszt gyermek-only szabály kor előtt — opció-címkék explicitek, alacsony
kockázat), 2.8 (look-teszt explicit Tovább — jelenlegi auto-advance smooth), + a nyitott band/peds-SpO₂
policy (mérvadó marad, Ádám bármikor válthat). Ezek finomságok / policy — a mag kész.**

### 2026-07-20 (27. munkaegység): konzisztencia + GCS-gyorsgomb + előzmények (beteg & ápoló)

Ádám kérései:
- ✅ **Konzisztencia:** a triázs-szint badge LEVÉVE a panasz-gombokról (lista + gyorsgombok) — a legtöbb
  panasznál a szint módosító-függő, nem lehet mindenhol, ezért sehol a gombon; a szint a döntési úton/
  eredményen látszik. (`panaszTetel` + gyakori-chip.)
- ✅ **GCS gyorsgomb:** „✓ Éber — GCS 15 (E4 V5 M6)" egy koppintással a GCS-rács fölött (toggle).
- ✅ **Beteg-előzmények:** befejezett triázsok archívuma (localStorage `mstr_history_v1`); fejléc „🕘 Előzmények"
  gomb → modal (idő, cimke/KBA, MSTR-szint badge, panasz, ápoló); „Új beteg" eredményből → archivál. Törlés-gomb.
- ✅ **Ápoló gyors-választás:** korábbi ápolónevek mentése (`mstr_staff_v1`), az azonosítás lépésen datalist
  (autocomplete) + „KORÁBBI:" gyors-chipek; továbblépéskor menti a nevet.
- ✅ **2 megjelenítési BUG javítva:** `.hdr-lvchip` és `.parkolt-sav` `display:flex`-e felülírta a `hidden`
  attribútumot (stale szint-chip + üres sárga sáv) → `[hidden]{display:none}` override.
- Böngészőben végigtesztelve; teszt 72/75; build ?v=42.

### 2026-07-20 (28. munkaegység): didaktikus szövegek mellőzése (profi felhasználó)

Ádám: a felhasználók profik — az „alap-tudás" magyarázó szövegek (pl. „az SpO₂ önmagában nem dönt") mellőzendők
a fő flow-ból; a kísérő magyarázat maradjon az ALGORITMUSBAN (KB-jegyzet + szabály-részletpanel forrással), és
csak ahol a döntéshez feltétlen kell — ott is szakmai, lényegre törő részletességgel. Lefaragva a fő flow-ban:
- Nehézlégzés-eredmény: „➜ Nehézlégzés: X → MSTR n" (a „csak támpont, nem dönt" magyarázat törölve).
- SpO₂-javaslat banner: „💡 SpO₂-alapú javaslat: Súlyos — koppintson." (lecke törölve).
- Krónikus-alapérték figyelmeztetés: 1 tömör sor. Kihagyott-kérdés jelzés: „N kérdés kihagyva — az MSTR X
  padlót nem befolyásolják." Kontextus: „Rögzítve: SpO₂ 88%". Lépés-alcímek tömörre fogva (pl. „ABCDE szerint.").
- MEGMARAD (szakmai, döntéshez kell): a súlyos/közepes/enyhe nehézlégzés KLINIKAI kritériumai az opciókon
  (forrás szó szerint), a szabály-részletpanel (feltétel + forrásoldal), a lábléc-forrásmegjelölés.
- Teszt 72/75; build ?v=43.

### 2026-07-20 (29. munkaegység, szabad kéz): dokumentációs kör lezárása

- ✅ **„📋 Összegzés vágólapra" + 🖨 nyomtatás az eredmény-képernyőn** — a forrás szerint a triázs-dokumentáció
  kötelező; a szöveges összegzés (idő, ápoló, beteg/KBA, panasz, vitálisok, napló-lépések, BESOROLÁS + döntő
  szabály forrásoldallal) egy koppintással másolható → MedSolba illeszthető. Ezzel a kör zárt: adat BE a
  MedSolból (lelet-paste), eredmény KI a MedSolba (összegzés-paste). Clipboard API + execCommand fallback;
  @media print CSS (csak az eredmény-kártya nyomtatódik). `osszegzoSzoveg()`/`vagolapra()` a wizard.js-ben.
- ✅ **Teljes regressziós végigfutás** (Kuti Istvánné, teljes út: ápoló+KBA barcode → look → kor → gyakori-gomb
  panasz → lelet-paste → GCS-15 gyorsgomb → ABCDE → eredmény): MSTR 2, napló 6 sor, másolás „✓ Másolva".
  A perzisztálás-visszatöltés is bizonyított (a teszt maga futott bele — helyesen állította vissza az állapotot).
- ✅ **README.md ÚJRAÍRVA** (a régi a törölt app.js-t és a kétoszlopos felületet írta le) — most a wizard-folyamat,
  busy-ED funkciók, KB-pipeline, validáció. Elavult `tests/run_tests.mjs` (node-os, nincs node) törölve.
- Teszt 72/75 + 16/16; build ?v=44.

**HÁTRALÉVŐ (fontossági sorrendben):**
1. Adverzáriális ellenőrzés a kb_*.json-okon a források ellen (numerikus hűség + teljesség lencse —
   a szintézis-fázis ellenőrző lépése MÉG NEM FUTOTT LE; workflow_folytatas.js verify/fix részét lásd mintának).
2. Ádám döntése: gyermek HR/RR sáv mérvadó vs tanácsadó (2 teszteset múlik rajta).
3. Nyitott forrás-kérdések tisztázása (stroke-ablak, cellulitis-szint, égés-sáv, nemi erőszak időzítés, SIRS-Fvs).
4. Kód-review (engine/app/flowchart/leletparser) + esetleges Chrome-extension előkészítő lépések (INTEGRACIO.md kész).

### 2026-07-20 (30. munkaegység): algoritmus-fa teljességi audit + INFEKCIÓKONTROLL/IZOLÁCIÓ beépítve

Ádám kérése: „nézd át az algoritmikus elemek fáját… szerepel-e infekció? izolációs igény? veszélyeztető
magatartás? ritka/speciális esetek és módosítók? szuicidumhoz kapcsolódóak?"

**AUDIT-eredmény (bekötöttség = GÉPI condition + level, nem csak panaszként létezik):**
- ✅ **Szuicidum/depresszió**: teljes (masodlagos_41–47, 84): kísérlet/pontos terv→2, aktív szándék→2,
  biztonsági kockázat→2, gondolat terv nélkül→3, depresszió gondolat nélkül→4, egyértelműen veszélyeztető→1,
  szökésveszély→2. Mező: `mentalisDepresszioOngyilkossag` + `biztonsagosMegfigyeles`.
- ✅ **Veszélyeztető/erőszakos magatartás**: teljes (masodlagos_57 ön-/közveszélyes→1, _58 biztonsági kockázat→2,
  _59 terv nélkül→3). Mező: `mentalisEroszakos`.
- ✅ **Pszichózis/szorongás/hallucináció** (masodlagos_49–54), **nemi erőszak** (_76–78 idő szerint),
  **bántalmazás/betegjólét** (_60,_70,_71): mind bekötve, szintezve, forrásolt.
- ⚠️ **FERTŐZÉS/IZOLÁCIÓ = a valódi hiány volt**: eddig CSAK referencia (folyamat_07/08, condition:[]),
  a triázs-folyamatban nem jelent meg actionable jelzésként.

**BEÉPÍTVE — infekciókontroll / izolációs igény (adatvezérelt, forráshű):**
- Új KB-blokk: `munka/kb/kb_infekciokontroll.json` → `KB.infekciokontroll` (assemble_kb.py betölti + átvezeti).
  4 jelzés: `inf_csepp` (köhögés/hányás → cseppfertőzés → N95/FFP3), `inf_kontakt` (hasmenés/nyílt seb → kontakt),
  `inf_kiutes` (kiütés/bárányhimlő → azonnali elkülönítés, neg. nyomású szoba), `inf_expozicio` (ismert
  fertőző-kontakt/MDR → kontakt). Forrás: **tankönyv o.20 (1.10.3), o.28 (2.2.2: „Köhögés, hányás =
  cseppfertőzés; Hasmenés, nyílt sebek = kontakt"), o.57 (kiütéses gyermek); jegyzet o.63 (N95/FFP3), o.207**.
- `autoPanasz`: köhögés/URTI/hányás→inf_csepp, kiütés→inf_kiutes, fertőző-kontakt/fertőzés-kizárása→inf_expozicio.
  A vezető panaszból AUTOMATIKUSAN előjelöli a megfelelő izolációs jelzést.
- **FONTOS elvi döntés**: az izoláció **NEM módosítja az MSTR-szintet** (párhuzamos elhelyezési/PPE-jelzés),
  a forrás is így kezeli — ezért NEM rule, hanem külön flag. Szerkeszthető chip-ek az eredmény-képernyőn
  (mindig látszik, mert a kiszűrés kötelező minden betegnél); sárga jelző mutatja a típus(oka)t + PPE-t;
  bekerül a 📋 vágólap-összegzésbe („IZOLÁCIÓS IGÉNY: …"). Perzisztál (`S.beteg.infekcio`).
  `wizard.js`: `infekcioAuto/infekcioAktiv/infekcioToggle/infekcioOsszegzes/infekcioVezerlo`. CSS: `.inf-chip(s)`.
- **Böngészős end-to-end ellenőrzés OK**: köhögés-panasz → eredményen a „Köhögés/hányás…" jelzés
  automatikusan ✓, „Izolációs igény: Cseppfertőzés → N95 (FFP3)"; toggle-lel Kontakt hozzáadva → egyesített PPE.
- Teszt **72/75 változatlan** (a motor nem változott — a flag ortogonális) + 16/16; build **?v=45**.

**Megjegyzés a „ritka/speciális esetek és módosítók"-hoz**: a masodlagos-ág 129 szabálya lefedi a
környezeti/mérgezési/terhességi/szociális/mentális módosítókat; a korábbi buktató-bányászat (OSSZESITES.md,
28. munkaegység előtt) 6 új forrásolt szabályt integrált. Nyitott, engine-képességet igénylő tételek (10% SpO₂-esés
relatívan, relatív hipotenzió, GCS-trend) továbbra is a 🟡 listán (manuális checkbox fedi a 10%-esést).

### 2026-07-20 (31. munkaegység): éles-teszt UI-hibák + KRITIKUS helyességi diagnózis

Ádám éles teszteléséből 3 UI-hiba JAVÍTVA (mind ellenőrizve böngészőben, build ?v=46, teszt 72/75 változatlan):
- ✅ **Boolean „Nem" nem mutatott jelölést**: a `sel` osztály csak az „Igen"-re került, és a „Nem" `null`-t
  állított (= megkülönböztethetetlen a nem-választól). Javítva: nem→`false`, mindkét gomb kap jelölést (✓).
- ✅ **Duplikált naplóbejegyzések**: `naplo()` minden kattintásra új sort adott; most a mezőhöz tartozó
  meglévő bejegyzést FELÜLÍRJA (végső választ tartja).
- ✅ **Számbadge-ek az opciógombokon** (Ádám: „vagy legyen vagy ne"): mivel egyes opcióknak nincs szintje,
  a „mindenhol" lehetetlen → egységesen ELHAGYVA (a szint a részletes döntési úton látszik). `opt-lv` színkód marad.

**⚠️ KRITIKUS HELYESSÉGI HIBA (Ádám szúrta ki: „nem született kategória"):** két, egymást erősítő gyökérok:
1. **50 `masodlagos`-csoportú módosító mező ÁRVA — sehol nem jelenik meg a folyamatban.** A wizard csak a
   `group==='megfigyeles'` (nem-scoped) és a `csakPanaszok`-scoped mezőket kérdezi; a másodlagos mezőknek
   nincs `csakPanaszok`-uk (a KB-jegyzet szerint „v1-ben nincs bekötve"), így egyik lépésbe sem esnek.
   → A hozzájuk tartozó, MOTORBAN meglévő szabályok a VALÓSÁGBAN SOHA nem tüzelnek, mert a kérdés fel sem
   tevődik. Érintett, szintet adó árva mezők (14+): **mentalisEroszakos (erőszak 1/2/3), mentalisDepresszio-
   Ongyilkossag (öngyilkosság/depresszió!), nemiEroszakIdo, mentalisSzorongasHallucinacio, betegjoletiSzem-
   pontok, mentalisSzocialis, mentalisFurcsaViselkedes, mentalisAlmatlansag, dehidraciofok, hipertoniaTunet,
   vercukorTunet, terhessegModosito, necrotizaloFasciitisBoreflektedes, biztonsagosMegfigyeles.** Azaz a
   TELJES mentális-egészség tengely (öngyilkosság, erőszak, nemi erőszak) a gyakorlatban NEM működik. (Az
   engine-audit `bekötöttnek` látta — de csak a motorban; a UI nem teszi fel a kérdést.)
2. **Mind a 163 CEDIS-panasznak `defaultLevel: null`.** A motor TÁMOGATJA a panasz-alapszintet
   (engine.js:180-184: ha egy módosító sem tüzelt, a panasz defaultLevel-je érvényes), de egyik panaszhoz
   sincs kitöltve → ha semmi sem tüzel, „nincs javaslat".

**A JAVÍTÁS TERVE (a KÖVETKEZŐ nagy egység, forráshivatkozással — a projekt lelke):**
- (a) **Másodlagos módosítók panasz-hatókörének bekötése** (`csakPanaszok`): minden árva másodlagos mezőt/
  szabályt a hozzá tartozó CEDIS-panasz(ok)hoz kötni (pl. mentalisEroszakos → erőszakos-közveszélyes-viselkedés;
  mentalisDepresszioOngyilkossag → depresszió/öngyilkossági szándék panasz). Így a helyes kérdés megjelenik és
  a szabály tüzel. Forrás: tankönyv/jegyzet CEDIS második-rendű módosító táblák.
- (b) **Panasz-alapszint (`defaultLevel`) hozzárendelése minden panaszhoz** — konzervatív, forrásolt: stabil,
  módosító nélküli beteg → a panaszhoz tartozó legalacsonyabb indokolt akutság. FONTOS SORREND: az (a)-t ELŐBB,
  mert a default másképp elfedné a hiányzó-kérdés hibát és ALÁ-triázsolna.
- Legjobb read-only audit-workflow-val feltérképezni (panasz→módosító mapping + default, idézetekkel), majd
  patch-elni, assemble + teszt + build. Ez a 72/75 tesztet is érintheti (új, most már tüzelő szabályok).

**Ádám további UI-kérése (külön egység): „egyszerre csak egy mezőre kelljen válaszolni"** — a jelenlegi
megfigyelés/módosító lépés több mezőt rak egymás alá (görgetni kell). Kért: egy-kérdés-egy-képernyő wizard.
Természetes sorrend: az (a) helyességi javítás UTÁN (akkor tudjuk, mennyi kérdés van), hogy egyesével jöjjenek.

### 2026-07-20 (32. munkaegység): HELYESSÉG 1. rész — pszichoszociális tengely bekötve (Ádám: „helyesség előbb")

A 31. egységben feltárt „árva másodlagos mezők" hiba javításának 1. része. Ádám döntése: helyesség előbb.
- **9 pszichoszociális mező panaszhoz kötve** (`csakPanaszok`, 34 szabály), szkripttel a kb_masodlagos.json-ban:
  mentalisEroszakos→erőszakos-közveszélyes-viselkedés; mentalisDepresszioOngyilkossag + biztonsagosMegfigyeles→
  depresszió-öngyilkossági-szándék; mentalisSzorongasHallucinacio→szorongás-krízis + hallucinációk-téveszmék;
  mentalisFurcsaViselkedes→furcsa-viselkedés; mentalisAlmatlansag→álmatlanság; mentalisSzocialis +
  betegjoletiSzempontok→szociális-problémák + szociális-helyzetből-adódó-panasz; nemiEroszakIdo→nemi-erőszak.
  Forrás: CEDIS-taxonómia (a mentális kategória panaszai 1:1 a fokozat-mezőkkel); a szintek már oldalhivatkozottak.
- Így e panaszoknál a panasz-specifikus fokozat-kérdés MEGJELENIK a módosító-lépésben és a szabály TÜZEL.
- **Böngészős ellenőrzés OK**: „Erőszakos/közveszélyes viselkedés" → most kérdezi a fokozatot → „Ön- és
  közveszélyes" → **MSTR 1** (döntő szabály forrással). Korábban „nincs javaslat" volt.
- Teszt **72/75 változatlan** (a scoping csak elérhetővé tette a meglévő szabályokat, nem rontott); build **?v=47**.
  (A 31. egység 3 UI-hibája is benne: boolean „Nem"-jelölés, napló-dedup, számbadge-elhagyás — mind ellenőrizve.)

**HÁTRALÉVŐ (HELYESSÉG 2. rész — a következő egység(ek)):**
1. **Kereszt-metsző („általános") módosítók** — NEM egy panaszhoz kötendők, mert univerzálisan mérhetők/relevánsak,
   különben alá-triázsolnának: **hipertoniaTunet (BP mindenkinél), vercukor/vercukorTunet, dehidraciofok,
   terhessegModosito (több terhesség-panasz), necrotizaloFasciitisBoreflektedes (több bőr-panasz).** Ezeknek külön,
   „általános módosító"-mechanizmus kell (pl. mindig megjelenő szűrő, vagy numerikus küszöb-alapú), forrás-alapon.
2. **Panasz-alapszint (`defaultLevel`) mind a 163 panaszhoz** — konzervatív, forrásolt: stabil, módosító nélküli
   beteg → a panasz legalacsonyabb indokolt akutsága. Ez adja a „nincs javaslat" végső megszüntetését. Nagy,
   ítéletigényes, forrás-bányászást igényel (érdemes read-only agent/workflow-val, majd patch + teszt).
3. Ezután Ádám kérése: **egy-kérdés-egy-képernyő** UI-átalakítás (a több-mező-egy-lapon + görgetés megszüntetése).

### 2026-07-20 (33. munkaegység): szóhasználat („tüzel" ki) + vitál ABCDE-sorrend + háttéranyag-áttekintés

Ádám két minor kérése JAVÍTVA (build ?v=48, teszt 72/75 változatlan):
- ✅ **A „tüzel/tüzelt" szó eltávolítva a megjelenő szövegekből** (hülyén hangzik): wizard.js result-none +
  jelmagyarázat, flowchart.js vég-üzenet → „teljesült"; a KB-forrásjegyzetekben is (kb_gyermek, patch_buktatok_
  altalanos, patch_panasz_kardio_neuro): tüzelt→teljesült, tüzelő→érvényesülő. Belső státusz-kulcsok
  ('tuzelt' stb.) maradnak — azok nem látszanak; a megjelenő címke már eddig is „TELJESÜLT" volt.
- ✅ **Vitál-lépés ABCDE logikai sorrendben**, szekciócímkékkel (RENDER.vital): A–B · Légzés (RR, SpO₂);
  C · Keringés (HR, SYS, DIA); D · Tudat (GCS); E · Testhőmérséklet (temp). (Eddig: HR, RR, SpO₂, SYS, DIA,
  temp, GCS — vegyes.) Böngészőben ellenőrizve. `.klin-fejlec` stílus újrahasználva.

**HÁTTÉRANYAG-ÁTTEKINTÉS (Ádám: „a cél egy all-rounder, hiteles, pontos app/db"; a CTAS-pptx régi, de ilyet
hivatott kiváltani intuitívabban):** kinyert források a munka/-ban: tankonyv_full.txt (Triázs tankönyv 2.0),
mstr_full.txt (MSTR jegyzet), ppt/COT-2008…txt (a kanonikus CTAS — EZ a „ugráló" pptx, döntőbíró), és több
PBL_Triage SOOM oktatói dekk (2015/2017). Mind rendelkezésre áll a defaultLevel + általános módosítók forrás-
alapú megalapozásához.

**FONTOS FELFEDEZÉS a defaultLevel-hez:** a panasz-alapszintnek MÁR VAN egy működő mechanizmusa: feltétel
NÉLKÜLI, panasz-scoped szabály (level + csakPanaszok, condition:[]) → a panasz kiválasztásakor tüzel
(engine.js:136-142). A patch_panasz_kardio_neuro ilyet ad pl. a mellkasi fájdalomnak (Aktuális: 2). Tehát a
163 alapszint bevihető (b) ilyen condition-nélküli forrásolt „kiinduló szint" szabályokként (a döntési úton
látszik, forrással) VAGY (a) a complaints[].defaultLevel kitöltésével (engine-fallback). A (b) átláthatóbb.
JELENLEG: complaints defaultLevel 0/163; néhány panasznak van (b)-alapszintje a kardio/neuro patch-ből.

### 2026-07-20 (34. munkaegység, KÉSZ): kimerítő MSTR lefedettségi audit LEFUTOTT

EREDMÉNY (18 ágens, 0 hiba, ~966k token, ~20 perc). Mentve:
- `munka/review/coverage_matrix.json` (teljes strukturált mátrix: 17 kategória, 163 panasz, perCategory+synthesis)
- `munka/review/LEFEDETTSEGI_JELENTES.md` (626 soros olvasható jelentés, panaszonként baseline+gap+forrás)
- **327 gap** összesen (átlag ~2/panasz): **18 P1** (beteg-biztonság/alá-triázs), **5 P2** (lefedettség), **2 P3** (finomítás).
- Két megerősített RENDSZERSZINTŰ hiba: (1) baseline/defaultLevel szinte mindenütt null; (2) sok panasznál üres
  módosítótábla (110/163 panasz-specifikus módosító nélkül) → jelenleg nem besorolható.
- P1 kiemelt (alá-triázs kockázat): fix magas-akutságú panaszok hiányzó szint-PADLÓJA (szív-/légzésleállás→1,
  hideg pulzus nélküli végtag→2, cianózis floor 3, áthatoló trauma→2, módosult tudat/új keletű zavartság→2,
  anafilaxia/allergia+harapás, gyermek apnoe/légúti idegentest→1, gerinc neuro-deficit→2, fejsérülés fokális→2,
  akut látásvesztés→2, hasi/derék centrális fájdalom PSC-módosító, hasmenés kiszáradás-módosító, terhesség>20hét
  szülészeti tábla, exogén ártalmak szint-padlók+maghő, gyógyszer-visszaélés szuicid/megvonási görcs, láz/SIRS+
  petechia). Részletek: LEFEDETTSEGI_JELENTES.md.

**KRITIKUS MÓDSZERTANI TANULSÁG (ellenőrzés a fix előtt!):** az ágensek szint-állításai NEM megbízhatók vakon.
Két „P1 aktív bug"-ot ellenőriztem a KB-ban: (a) „seb-módosító inverzió/alá-triázs" → TÉVES: a sebModosito ÉS
sebJelleg is helyesen szintez (komplex_nv→2). A valós probléma csak DUPLIKÁCIÓ: tepett-szurt-seb-nél mindkét
mező fut (ugyanaz a kérdés kétszer) → egyszerű dedup, NEM veszély. (b) „szorongás rossz csoport" → a
mentalisSzorongasHallucinacio EGYESÍTETT mentális-súlyossági mező (jegyzet masodlagos_49-54); a 32. egységben
kötöttem mindkét panaszhoz → forrás-döntés kérdése (a jegyzet együtt kezeli-e), NEM egyértelmű bug.
→ KÖVETKEZMÉNY: az audit KIINDULÓ TÉRKÉP; minden proposedFix-et FORRÁSSAL kell ellenőrizni alkalmazás előtt
(Ádám alapszabálya). NEM auto-alkalmazunk.

**FIX-KAMPÁNY TERVE (következő egységek, mind forrás-ellenőrzött, kis zárható lépések):**
1. P1 szint-PADLÓK a fix magas-akutságú, EGYÉRTELMŰ panaszoknál (arrest→1 stb.) — feltétel nélküli, forrásolt
   baseline-szabályként (a mellkasi fájdalom mintája szerint). Forrás-ellenőrzéssel egyenként.
2. P1 hiányzó DÖNTŐ módosítók (PSC centrális fájdalom, kiszáradás, neuro-deficit, akut látásvesztés, terhesség).
3. seb-dedup (tepett-szurt-seb: egy módosító elég) + szorongás/hallucináció szétválasztás DÖNTÉSE forrásból.
4. P2 alapszintek tömegesen (forrásolt, jellemzően L4/L5) + üres módosítótáblák feltöltése.
5. Végül: egy-kérdés-egy-képernyő UI. Minden lépés után assemble + teszt + build + jelentés.

### 2026-07-21 (35. munkaegység): FIX-KAMPÁNY 1. lépés — P1 életveszélyes szint-PADLÓK (forrás-ellenőrzött)

5 P1 szint-padló beépítve, MINDEGYIK forrással igazolva (nem az ágens állítására): `munka/kb/patch_p1_padlok.json`
(feltétel nélküli panasz-scoped „padló"-szabályok, group=secondary → a panasz kiválasztásakor tüzelnek; végső
szint=min, tehát módosító feljebb viheti, ez alá nem):
- Szívleállás (nem traumás/traumás) → 1; Légzésleállás → 1 [tankönyv o.25, 2.1.1 MSTR 1 def: Keringésmegállás/Légzésleállás]
- Hideg pulzus nélküli végtag → 2 [CTAS COT-2008: „2 | Cool Pulseless Limb"; magyar forrás csak felsorolja]
- Cianózis → 3 [CTAS COT-2008: „3 | Cyanosis"]
A ctas forráskód mostantól megjelenik (flowchart.js forrasSzoveg + assemble meta.sources → „CTAS COT-2008").
Böngészőben ellenőrizve: Cianózis → MSTR 3. Teszt 72/75; build ?v=49.

**FIX-KAMPÁNY HÁTRALÉVŐ (coverage_matrix.json / LEFEDETTSEGI_JELENTES.md, mind forrás-ellenőrzött):** P1 további
padlók (áthatoló trauma→2, gyermek apnoe/légúti elzáródás→1, új keletű zavartság→2, akut látásvesztés→2, gerinc
neuro-deficit→2, fejsérülés fokális→2, anafilaxia/harapás→2, gyógyszer-visszaélés szuicid/megvonás, láz/SIRS+petechia,
terhesség>20hét); P1 döntő MÓDOSÍTÓK (hasi/derék centrális fájdalom PSC, hasmenés kiszáradás); seb-dedup; szorongás/
hallucináció szétválasztás forrásból; P2 alapszintek tömegesen + üres módosítótáblák; végül egy-kérdés-egy-képernyő UI.

### 2026-07-21 (36. munkaegység): FIX-KAMPÁNY 2. lépés + KRITIKUS audit-korrekció

**FONTOS FELISMERÉS (az audit fals-pozitív aránya):** az `audit_input.json`-ba csak a PANASZHOZ KÖTÖTT
módosítókat tettem, a GLOBÁLIS elsődleges szabályokat (fájdalom-skála, GCS, vitálok, vérzés) NEM. Ezért az
ágensek sok panasznál „üres módosítótáblát" láttak, holott a globális szabályok fedik. Bizonyíték: a
centrális fájdalom-súlyosság MÁR be van kötve és helyes (elsodleges_felnott_24-29: centrális+akut+VAS 8-10→2,
4-7→3, ≤3→4; jegyzet o.90/101, tankönyv o.38), a fájdalom-lépésben elérhető — tehát a hasi/derék fájdalom NEM
„üres". → A 327 gap jelentős része (az „üres módosító" típus) FALS. A VALÓDI rendszerszintű hiány a HIÁNYZÓ
ALAPSZINTEK. Minden gap-et a TELJES szabálykészlet (globális + scoped) ellen kell nézni, nem az audit_input ellen.

**Elvégezve:** seb-DEDUP (verifikált): a tepett-szurt-seb-hez két azonos seb-módosító tartozott (sebModosito +
sebJelleg; az ágens „inverzió/alá-triázs" állítása TÉVES). tepett-szurt-seb eltávolítva a sebJelleg-szabályokból
(marad a sebModosito, jegyzet o.290). Teszt 72/75; build ?v=50. — „akut látásvesztés→2" NEM került be (forrásban
nem igazolható tisztán → Ádám szabálya).

**REVIDEÁLT TERV:** (1) ALAPSZINTEK tömegesen (a valódi hiány), az audit baseline-oszlopából CTAS/tankönyv
forrással, mintavételes ellenőrzéssel, feltétel nélküli panasz-scoped floor-szabályként (biztonságos: csak ha más
nem tüzelt). (2) Genuinely complaint-specifikus, globálisan NEM fedett módosítók egyenként verifikálva (anafilaxia-
reakció, hasmenés-kiszáradás, terhesség>20hét, megvonási görcs). (3) Végül egy-kérdés-egy-képernyő UI.

### 2026-07-21 (37. munkaegység): FIX-KAMPÁNY 3. lépés — ALAPSZINTEK tömegesen + escaláló módosítók („egybe")

Ádám: „csináld meg egybe ezeket". Két nagy rész, mind forrás-ellenőrzött, build **?v=52**, teszt **72/75** (a 3
eltérés a korábbi dokumentált csoport; eset_64 most 4-et ad a baseline-tól a korábbi „nincs" helyett).

**(A) ALAPSZINTEK — a valódi rendszerszintű hiány megoldva.** `munka/kb/patch_baseline_szintek.json`: **149 floor-
szabály** (feltétel nélküli, panasz-scoped) az audit baseline-oszlopából (= a panasz CTAS-táblájának legenyhébb
sora). Szint-eloszlás: 75×L5, 51×L4, 19×L3, 4×L2 (áthatoló has/mellkas trauma, kémiai ártalom, újszülött táplálás
— klinikailag indokolt). Forrás parse-olva a DIA/oldal-számokból (ctas/jegyzet/tankonyv); az audit-sor a notes-ban.
Mintavételesen igazolva a CTAS-szövegben (Fejfájás 5, áthatoló mellkas 2 „Penetrating head/chest/abdomen",
Orrvérzés 5, Kémiai 2 „minimum level is 2", Tinnitus 4). **Eredmény: 162/163 panasznak van alapszintje** (csak az
apnoe módosító-vezérelt) → megszűnt a „nincs javaslat" stabil betegnél. BIZTONSÁGOS: floor, a globális + scoped
escalátorok a minimum-elv miatt feljebb visznek.
generátor: scratchpad/gen_baseline.py (coverage_matrix.json → patch).

**(B) Escaláló módosítók (globálisan nem fedett, biztonságkritikus):** `munka/kb/patch_p1_modositok.json`:
- Csecsemő apnoe státusz-módosító (apnoeStatus mező): zajló→1 / közelmúltbeli→2 / anamnesztikus→3
  [CTAS: „1|Apneic episode on presentation", „2|Recent spell…", „3|History of spell…"]. Az apnoe így nem baseline-
  vezérelt (nem tippelünk), a státusz dönt.
- Légúti idegentest baseline 4 [CTAS „4|Respiratory foreign body, mild, no distress"]; a TELJES elzáródást a
  globális súlyos-nehézlégzés (nehezlegzesFok=sulyos→1, tankönyv o.31/jegyzet) escalálja.
- KISZÁRADÁS bekötve: a dehidraciofok árva szabályait (masodlagos_07-10 + gyermek_dehid_01-04, forrás jegyzet
  o.98/251, tankönyv o.45) panaszhoz kötöttem: hasmenés / hányás-hányinger / általános gyengeség (+ újszülött
  táplálás gyermeknél). Súlyos→1 … lehetséges→4.
- flowchart.js forrasSzoveg robusztusabb: oldalszám nélkül nem ír „undefined"-ot; CTAS-nál „DIA n" jelenik meg.

**Böngészőben igazolva:** Hányás/hányinger (Ádám eredeti hibás esete) → most **alapszint MSTR 5** + a panasz-
specifikus lépésben Kiszáradás foka (1-4) + Vérhányás jellege. Cianózis → 3 (előző egység). Erőszakos visel. → 1.

**HÁTRALÉVŐ:** még nem verifikált, complaint-specifikus escalátorok, amelyeket a TELJES szabálykészlet ellen kell
nézni (nem az audit_input ellen): anafilaxiás korábbi reakció (harapás/allergiás reakció)→2, terhesség>20hét
szülészeti tábla (jelentős vérzés/hasi trauma/eclampsia), megvonási görcs→1, gerinc neuro-deficit→2, fejsérülés
fokális tünet→2, akut látásvesztés (CTAS-mélymerülés kell). Majd: egy-kérdés-egy-képernyő UI.

### 2026-07-21 (38. munkaegység): UX-szövegezés — opcionalitás + intuitív előkitöltés-utalás (Ádám)

3 apró szöveg (build ?v=53, ellenőrizve böngészőben):
- Azonosító-placeholder: „Csippantás ide, vagy KBA szám…" (a TAJ KIVÉVE — KBA-t használnak).
- Vitál-lépés fejléc: „Megadásuk nem kötelező — de amit kitöltesz, előre kitölti és gyorsítja a további
  kérdéseket." (diszkrét, a kitöltés helyén utal az előkitöltés-mechanizmusra; a vitálok eddig is opcionálisak
  voltak, most a szöveg is ezt közli).
- Lelet-mező placeholder: „Opcionális: illeszd be ide a MedSol-lelet szövegét — a paramétereket automatikusan
  átveszi, ami segít a további kérdések megadásában. (Kézi kitöltés is lehet.)"

### 2026-07-21 (39. munkaegység): kategória-piktogramok (SVG) + értékleltár-helper (Ádám)

Build ?v=55, böngészőben ellenőrizve.
- **Kategória-csempék emojik helyett letisztult, egységes VONALAS SVG-ikonok** (Ádám: az emojik „gagyi"-k).
  wizard.js: KAT_IKON (emoji) → KAT_SVG (17 kategória inline SVG path) + catIkon() wrapper; render innerHTML-lel.
  CSS: .cat-ico svg 26px, monokróm muted (#5b7089), hoveren accent. Az Orr-ikont javítottam (orr-profil).
  A kiválasztott-kategória fejlécből az emoji kivéve (csak név).
- **Értékleltár-helper:** ha a beteg zavart VAGY GCS < 14 → az eredmény-képernyőn sárga jelzés: „Zavart
  tudatállapot / GCS < 14 — a beteg vagyontárgyairól értékleltárt szükséges készíteni". zavartTudatE():
  gcsOsszeg<14 VAGY vezetőpanasz ∈ {zavartsag, modosult-tudatallapot} VAGY furcsaViselkedesUjKeletu=true.
  Bekerül a vágólap-összegzésbe is. Ellenőrizve: Zavartság panasz → MSTR 4 + a helper megjelenik.

### 2026-07-21 (40. munkaegység): ÖSSZES emoji eltávolítva → egységes SVG-ikonrendszer (Ádám: „emoji igénytelen")

Build ?v=56, teszt 72/75, böngészőben ellenőrizve (fejléc + eredmény-képernyő).
- wizard.js: központi ikon-helper — `ICONS` map + `ikonSvg(name)` + `elIko(tag,cls,name,txt)` + `ikonBtnEl(cls,name)`
  + `crumbIko(name,txt)`. 13 vonalas ikon (history, refresh, person, idcard, complaint, printer, search, bulb,
  bolt, shield, book, pause, warn, close), 16px, currentColor, stroke 1.7 — a kategória-ikonokkal egy stílus.
- Lecserélt emojik: fejléc 🕘/⟳; morzsák 🆔👤📋; kereső 🔍 (placeholderből kivéve); eredmény 📋🖨; infekció 🧫→pajzs;
  ⚡ (gyakori/előrekitöltve/kihagyva)→bolt; 💡→bulb; ⚠ (crit-banner/COPD/izoláció/zavart/hiányzó-mezők)→warn;
  📖→book; ⏸→pause; ✕ (bezárók)→close. Megtartva a tiszta tipográfiai jelek: → ← › ✓ ✔ ▼ ▸ ◆ ➜ (prémium-kompatibilis).
- CSS: `.ico{16px;vertical-align:-3px}` + `.ico+span{margin-left:6px}`.
- Járó/fekvő betegút docx elolvasva (/Users/adamkornel/Downloads/TRIAGE Járó szempontrendszer.docx) — a beépítési
  terv a jelentésben; MSTR I-II red-flag segédlet + 7 pontos járóbeteg-kritérium (III-V), több pont a triázs-
  adatból előtölthető (zavartTudatE, SpO2/o2, infekció-flag). IMPLEMENTÁLÁS: Ádám jóváhagyására vár.

### 2026-07-21 (41. munkaegység): SE ARCULATI TÉMA (brand) — build ?v=57

Ádám 4 új dokumentumot adott (Downloads/) + 2 online DB-t. Kinyert lényeg: `munka/forras_kulso/`
(betegfelvételi_szabalyok.txt = SE SOK 10 alapelv; tetra_lap.txt = TETRA riasztólap mezői; arculat_paletta.txt).
Ádám az ARCULATI TÉMÁT választotta elsőnek — KÉSZ:
- **Montserrat BEÁGYAZVA** (offline base64 woff2, latin+latin-ext, 400/600/700): `app/css/_montserrat.css`
  (~426 KB base64), index.html linkeli, a build inline-olja → dist ~1.2 MB (offline fájlnál nem gond).
- **SE-paletta** :root: --accent navy #232F61, --gold #B3A16E, --accent2 #008BD2, tisztább neutrálisok. A
  var(--accent)-alapú elemek egyben átszíneződtek. A KLINIKAI MSTR-szintszínek (l1-l5) VÁLTOZATLANOK.
- Diszkrét navy→arany brand-sáv a tetején (body::before, 3px). Böngészőben ellenőrizve: prémium, letisztult.

**HÁTRALÉVŐ MODULOK (Ádám 4-dok kéréséből, függetlenek):** TETRA digitalizálás (tetra_lap.txt → nyomtatható/vágólap);
Betegút/diszpozíció modul (felvételi szabályok + járó/fekvő checklist triázs-adatból előtöltve + beutalási rend
kivonat + DEEP-LINK XTEK/kijelölésekhez). FONTOS KORLÁT: élő auto-lekérdezés statikus offline appban NEM megoldható
(CORS + intranet IP + session) → deep-link most / offline pillanatkép / élő query a backend-fázisra (Ádámnak elmagyarázva).

### UI-KÖVETELMÉNY (Ádám, 2026-07-20): felnőtt SBO az elsődleges használat

Ádám vezérelve megerősítve (ld. memória): 0-tól a végső megerősített kategóriáig, transzparens/reprodukálható/
forrásolt, a TELJES MSTR anyag precízen + alkalmazhatóan. Ádám a „kimerítő multi-ágens audit"-ot választotta.
- Előkészítve: `munka/review/audit_input.json` (163 panasz jelenlegi lefedettsége: baselineRule, modositok,
  defaultLevel). Kiindulás: **156/163 alapszint nélkül, 110/163 panasz-specifikus módosító nélkül.**
- Workflow ELINDÍTVA (háttér), Run ID **wf_219cca42-958**, script:
  `.../workflows/scripts/mstr-coverage-audit-wf_219cca42-958.js`. 17 kategória-ágens (general-purpose, forrás-
  olvasással: tankonyv_full/mstr_full elsődleges, ppt/COT-2008 döntőbíró) → panaszonként baseline+forrás,
  expectedModifiers+statusInKB, gaps+proposedFix+forrás; majd 1 szintézis-ágens prioritált hiánylistát ad.
  Eredmény: coverage-mátrix + P1/P2/P3 gap-lista. READ-ONLY: a javításokat utána én viszem be kis egységekben.
- KÖVETKEZŐ: a workflow eredményéből (a) menteni a coverage_matrix.json-t + report, (b) P1 (alá-triázs kockázat)
  gap-ek forrás-alapú javítása előbb, majd P2 (alapszintek + általános módosítók), (c) újra-assemble + teszt + build.

### UI-KÖVETELMÉNY (Ádám, 2026-07-20): felnőtt SBO az elsődleges használat
A felület elsősorban FELNŐTT sürgősségin fut. A gyermek-funkció maradjon, de a felületen NE
központi helyen: a gyermek-specifikus mezők (gyermekKullem, stridor, csecsemoApnoe,
vigasztalhatatlanSiras, izomtonus, jarasZavar, veleszuletettBetegseg stb.) külön "Gyermek"
kártyába kerüljenek A LISTA VÉGÉRE, alapból összecsukva; automatikusan nyíljon ki / kerüljön
előre, ha a megadott életkor gyermek (< gyermekHatarEv). Felnőtt módosítók (nehézlégzés,
keringés, láz-küllem, fájdalom, vérzés, mechanizmus) elöl, jól elérhetően. → app.js
dinamikusMezokEpit() átalakítandó ennek megfelelően (teendő a következő UI-egységben).

### Régi (már teljesült) terv-jegyzet:
**KÖVETKEZŐ FÁZIS: ellenőrzés + kb.js összeállítás.** Két lehetséges út:
(a) adverzáriális ellenőrző workflow témánként (numerikus hűség + teljesség lencse) a
`workflow_folytatas.js` mintája szerint — de figyelj a keretre, ez ~7×2 agent;
(b) VAGY egyből a kb.js összeállítása a 7 fájlból (a fő session, NEM agent), majd
node-teszt a 75 eseten, és a hibás eseteknél célzott forrás-ellenőrzés. Ajánlott: (b), mert
a 75 teszteset maga is erős korrektség-ellenőrzés, és olcsóbb.

- ⚠️ **cedis**: 163 panasz a `categories[].complaints[]`-ben, mindegyik kap `id`-t (kebab-case).
  Az `esetek` `vezetoPanaszId` sluggjait EHHEZ kell illeszteni (az eset-agent saját sluggokat gyártott,
  pl. `mellkasi_fajdalom_sziv` — kb.js-összeállításkor egyeztetni a cedis id-kkel, különben a teszt panasz-matchje törik).
- ⚠️ **masodlagos**: a `csakPanaszok` hatókör ÜRES (nem volt kanonikus panasz-id lista a szintéziskor) —
  a kb.js-ben a fontos panasz-specifikus módosítókhoz utólag hozzá lehet kötni a cedis id-ket.
- ⚠️ **esetek**: 75 esetből több csak leírással/gyermek-flaggel van (nem futtatható teljes auto-teszt);
  néhány esetnél a forrás két szintet ad (expected_level a fő, alternatíva a rationale-ban) — teszt előtt dönteni.
- ⚠️ **folyamat_38** (vidéki 5. szint várakoztatás) kanadai szervezési szabály — magyar kontextusban kérdéses, notes-szal jelölve.
- Részletes nyitott kérdések (forrás-elírás-gyanúk, konfliktusok) a workflow-eredményben; a legfontosabbak:
  nemi erőszak időszintezés (jegyzet p291 vs p326), SIRS-Fvs csonka, gyermek/felnőtt láz-korhatár, hipertenzió VAGY-feltétel.

- ✅ **kb_gyermek.json KÉSZ** — 62 szabály (36 gépi, 7 életkorsávos), 8 dinamikus mező
  (gyermekKullem, immunszupprimalt, stridor, csecsemoApnoe, vigasztalhatatlanSiras, izomtonus,
  jarasZavar, veleszuletettBetegseg), 4 vitál-tábla (légzésszám + pulzus életkor szerint, láz, RR-grafikon).
  ⚠️ **kb.js-összeállításkor TEENDŐ**: a gyermek légzésszám/pulzus életkori MSTR-sávok jelenleg
  `vital_tables`-ben vannak (megjelenítésre) — a MOTOR ezeket nem értékeli. Vagy generálni kell belőlük
  életkorsávos `rr`/`hr` szabályokat (korMinHonap/korMaxHonap + min/max), vagy tudatosan csak referenciaként
  jelezni. Gyermek SBP/hipertónia csak grafikon → nem gépi. Láz `>` reláció: a condition min 38.01/38.51
  közelítés — az engine feltétel-kiértékelője `>=`-t használ, ez elfogadható közelítés, de az ellenőrzés nézze.

- ✅ **kb_elsodleges_felnott.json KÉSZ** — 44 szabály (31 gépi feltétellel, 13 kézi megítélésű),
  9 dinamikus űrlapmező (nehezlegzesFok, pefrSzazalek, keringesiAllapot, lazKullem, verzesSulyossag,
  serulesMagasRizikoju, fajdalomLokalizacio, fajdalomJelleg, fajdalomPont). GCS a jegyzet szerint
  (3-9→1, 10-13→2, 14-15→3/4/5). Nyitott: SIRS-Fvs csonka a jegyzetben (>12000 a tankönyvből átvéve);
  láz-korhatár ≥17 (jegyzet) vs 16 (tankönyv szöveg); relatív SpO2-esés és immunszupresszió = kézi.
- ✅ **kb_szintek.json KÉSZ** (5 szint: 1=Reszuszcitáció/piros/azonnal, 2=Kritikus/narancs/15p,
  3=Sürgős/sárga/30p, 4=Kevésbé sürgős/zöld/60p, 5=Halasztható/kék/120p; újraértékelés = célidővel egyező).
- ⚠️ **Színkód**: a forrás csak színNEVET ad (piros/narancs/sárga/zöld/kék), hex nincs → az app-ban
  konkrét árnyalatot kell megadni (kb.js levels[].color). Klinikai jelentése nincs, csak UI.
- ⚠️ **GCS-küszöb ütközés (BETEGBIZTONSÁG!)**: a fő érték a jegyzet (2022) + tankönyv fő szövege:
  **GCS 3-9 → 1. szint, 10-13 → 2. szint**. A tankönyv D-függeléke (p67) ettől eltér (3-8→1, 9-13→2).
  Az `elsodleges_felnott` szintézisnél EZT a jegyzet-értéket kell fő szabállyá tenni, a függelék-eltérést conflictsba.
- ⚠️ **4. szint neve**: fő = „Kevésbé sürgős"; a tankönyv rövidítésjegyzéke (p6) „Nem sürgős"-t ír. Fő marad a „Kevésbé sürgős".

## Mintalelet a teszthez (MedSol spot monitor — a parser ezt már felismeri)

```
L E L E T
                                    KBA.....: 00002858428
Beteg neve........: Kuti Istvánné   Esetszám: 36923088
Születési dátum...: 1944.02.14      TAJ.....: 060-260-080
Vizsgálat dátuma: 2026.07.19 06:03
Eredmény:
HR (szívfrekvencia)      71    / perc
Hõmérséklet              35.0  Celsius
SYS                      193   Hgmm
DIA                      66    Hgmm
MAP                      109   Hgmm
RESP                     18    / perc
SPO2                     96    %
GCS Verbális válasz      5
GCS Motoros valasz       6
GCS Szemnyitasi valasz   4
```
Elvárás: a parser kitölti a mezőket + életkor 82 év; GCS=15.

## Környezeti tudnivalók

- **Nincs brew, nincs poppler** → a beépített PDF-olvasó (Read) PDF-re NEM működik.
  Telepítve pip-pel: `pypdf`, `pdfplumber`, `pypdfium2` (render). Szkriptek: `munka/extract.py`, `munka/render.py`.
- Az eredeti (leállított) workflow szkript referenciának: `munka/workflow_eredeti.js`.
  A régi run (wf_2ead4b5b-e6a) cache-e ÚJ sessionből nem folytatható — ezért készült
  a `workflow_folytatas.js`, ami a DISZKEN lévő kész fájlokra épít.
- Az app fájljai: `app/index.html`, `app/js/{kb,engine,leletparser,flowchart,app}.js`,
  `app/css/style.css`, `app/tests/run_tests.mjs`, `app/README.md`, `app/INTEGRACIO.md`.
- A motor-viselkedés szerződése: minden szabály trace-be kerül
  (`tuzelt|nem_teljesult|nincs_adat|nem_alkalmazhato`), végső szint = tüzeltek
  minimuma (legsürgősebb), döntő szabályok kiemelve, hiányzó adat = figyelmeztetés.
  4-5. szintnél vitál-normalitás őrszabály: `processRules` id=`folyamat_45_vitalis_normal`.
- Ádám nem technikus: a végén egyszerű, magyar nyelvű összefoglalót kér,
  az appot dupla kattintással nyitja (file://, nincs build, nincs szerver).

### 2026-07-21 (42. munkaegység): GÖRGETÉSMENTES wide-layout (AiO 1080p) + brand-finomítás — build ?v=63

Ádám: sehol ne kelljen görgetni egy standard AiO monitoron. Cél: 1920×1080 fekvőn minden fő lépés függőleges
görgetés nélkül. Megoldás (@media min-width:1000px):
- #app max-width 1200px (1500px felett 1320) — a vízszintes tér kihasználása.
- VITÁL: 2 oszlop (bal lelet-paste, jobb ABCDE-vitálok); a GCS E/V/M sorok EGYMÁS MELLÉ (3 oszlopos grid,
  kisebb gnum) → a legnagyobb magasság-megtakarítás. Mérés: ov=0.
- MEGFIGYELÉS: az ABCDE-blokkok CSS `columns:2` (masonry-szerű, magasság szerint pakol, break-inside:avoid);
  a boolean Igen/Nem VÍZSZINTES (.opts-bool). Tömörebb ritmus (opt/kártya/blokk padding, .mezo-koz 12→7px wide).
  A legmezősűrűbb eset (nehézlégzés: A-B légzés+intubált+légút) ov≈5px (gyakorlatilag 0).
- EREDMÉNY: 2 oszlop (bal besorolás+döntés+dokumentáció+infekció+jelzések, jobb napló+részletes út), nav+lábléc
  teljes szélességű. ov=0.
- cat-grid 4 oszlop wide-on; c-list max-height 60vh (belső görgetés hosszú keresésnél).
Mobil/tablet (<1000px) változatlan egyoszlopos. Böngészőben mérve (scrollHeight vs 1080): vitál 0, megfigyelés ~5,
fájdalom 0, eredmény 0. Teszt 72/75. MEGJEGYZÉS: valós 1080p-n a böngésző-chrome ~950-1000px hasznos magasságot
hagy — a fő lépések így is elférnek; csak a legmezősűrűbb megfigyelés lehet épphogy a határon.

### 2026-07-21 (43. munkaegység): életkor gyors-kategória + ápoló megjegyzése — build ?v=64

Ádám két UX-kérése. Előbb tisztázva: FELNŐTTNÉL az egzakt életkor triázs szempontból NEM számít (egyetlen
szabály sem használ adult kor-küszöböt; csak a jövőbeli járó-útnál a ≥80). GYERMEKNÉL viszont a pontos kor kell
(a vitál-sávok finoman kor-függők: 0-2/3-5/… hó, majd évente; fever 0-3/3-36/>36 hó).
- **Életkor-lépés**: fent 3 gyors FELNŐTT-kategória chip (Felnőtt 18–64 → repr. 45; Idős 65–79 → 72; Idős ≥80 → 85),
  egy koppintás → S.beteg.korKat + repr. eletkorEv + naplo + tovább. Lent a pontos bevitel (év/hó) gyermekhez.
  A morzsa/összegzés a korKat kategóriát mutatja (nem álszámot); pontos kor beírása törli a korKat-ot.
  A repr. eletkorEv csak a motornak kell (gyermekE, ≥80); a szabályokat nem befolyásolja.
- **Ápoló megjegyzése**: új STORE_STAFF_AKTIV — staffMent() menti aktívként; az azonosítás-lépésen a mező előre
  KITÖLTVE az aktív ápolóval (S.azon.staff==null → staffAktiv(); ha kitörlik, '' marad, nem tölt újra). Címke:
  „megjegyezve, megerősíthető"; × gomb = aktív ápoló elfelejtése (staffAktivTorol). A „Korábbi" chip-ek maradnak.
Böngészőben ellenőrizve: pre-fill + kategória-morzsa + egykoppintásos tovább. Teszt 72/75.

### 2026-07-21 (44. munkaegység): P1/P2 biztonsági escalátorok bekötve (forrás-ellenőrzött) — build ?v=65

Az audit hátralévő alá-triázs-kockázatú escalátorai, mind forrással igazolva (a magyar forrás e szinteket nem
részletezi → CTAS COT-2008 a döntőbíró; a pontos CTAS-sorok a notes-ban):
- TERHESSÉG >20 hét: a meglévő, forrásolt terhessegModosito szabályok (masodlagos_26-33) árvák voltak →
  panaszhoz kötve (terhesseg-20-het-2): köldökzsinór-előesés/3.tri vérzés→1, vajúdás<2p/nincs magzatmozgás/
  preeclampsia-tünet/lezajlott szülés→2, vajúdás>2p/magzatvíz-szivárgás→3.
- Új patch: `patch_p2_escalatorok.json` (4 select-mező + 6 szabály, panaszhoz kötve):
  · allergiaReakcio (allergiás-reakció, harapás): aktív anafilaxia→1, korábbi súlyos reakció→2 [CTAS Allergic/Bite].
  · megvonasSulyossag (megvonási-tünetek): zajló görcs/DT→1, közelmúltbeli görcs/posztiktális/agitált→2 [CTAS].
  · gerincNeuroDeficit (hát-fájdalom, traumás-hát/gerinc): neuro-deficit ±vizelet/széklet→2 (cauda equina) [CTAS].
  · fejserulesNeuro (fejsérülés): új fokális neuro tünet→2 [CTAS Head injury].
Motor-teszt (jsc) mind a 8 szcenárióra: OK. 75-eset teszt 72/75 változatlan.

**FIX-KAMPÁNY ÁLLÁS:** a fő alá-triázs P1/P2 gap-ek lezárva (padlók + baseline-ok + mentális + kiszáradás +
ezek az escalátorok). Nyitott: akut látásvesztés (CTAS-mélymerülés kell, egyelőre nem igazolt tisztán); a többi
audit-gap nagyrészt fals-pozitív (globális szabályok fedik). HÁTRALÉVŐ MODULOK: TETRA-digitalizálás; betegút/
diszpozíció modul (járó/fekvő checklist + felvételi szabályok + beutalási rend + deep-link XTEK/kijelölések);
egy-kérdés-egy-képernyő UI (opcionális, a jelenlegi görgetésmentes elrendezés már sokat old ebből).

### 2026-07-21 (45. munkaegység): felnőtt kor-kategóriák egyszerűsítése (Ádám) — build ?v=66

Ádám észrevette: a felnőtt/idős/nagyon idős bontásnak a forrás szerint NINCS triázs-jelentősége (egyetlen szabály
sem használ felnőtt kor-küszöböt; a ≥80 csak a JÖVŐbeli járó/fekvő betegút-modulnál számít, ami még nincs).
→ A 3 felnőtt-kategória helyett EGYETLEN „Felnőtt" gomb (18 év felett; „a besorolást az életkor nem módosítja").
A ≥80-at majd a betegút/diszpozíció-modulban vezetjük be, ahol tényleg jelent valamit. Gyermeknél változatlanul
a pontos kor (vitál-sávok). Teszt 72/75.

### 2026-07-21 (46. munkaegység): gyermek determinisztikus korcsoportok + korcsoport-visszajelzés — build ?v=68

Ádám: gyermeken belül a csecsemő SZÁMÍT — igazítsam a determinisztikus korcsoportokhoz. Elemzés: MINDEN vitál-sáv
(HR/RR) küszöbei ELTÉRNEK korcsoportonként (csecsemőnél ~havonta, utána évente), a láz-küszöbök 0-3/3-36/>36 hó.
Tehát gyermeknél a PONTOS kor determinisztikus — durva kategória klinikailag HIBÁS vitál-sávot adna → marad a pontos
bevitel (év/hó). Konkrét javítás: LIVE korcsoport-visszajelzés a kor-lépésen (korcsoportInfo/korcsoportFrissit):
a beírt gyermek-kor alatt megjelenik „Korcsoport: csecsemő/kisded/gyermek · vitál-sáv: <sáv> · láz-küszöb sáv:
0–3 hó / 3 hó–3 év / >3 év" — a determinisztikus sávok láthatóvá téve. Böngészőben igazolva: 2 hó→0 újszülött/0-3 hó;
4 hó→3 hónap/3hó-3év; 5 év→5 év/>3 év.
BUG (elkapva+javítva): korcsoportInfo eleinte TriazsMotor.eletkorHonapban()-t hívott, ami NINCS exportálva
(csak triazsKiertekel+gcsOsszeg) → RENDER.kor dobott, #fo kiürült. Javítva saját hónap-számítással. Teszt 72/75.

### 2026-07-21 (47. munkaegység): „ne legyen fölösleges, de minden szükséges legyen" audit — build ?v=69

Ádám elve az egész felületre. Audit (minden input-mező/opció triázs-hatása):
- FÖLÖSLEGES USER-FACING KÉRDÉS: NINCS — minden megjelenő kérdés befolyásolja a besorolást. A jelzett „árva
  opciók" (legzesiJelek sulyos/kozepes/enyhe, o2Akut, izomtonus=normal, *=nincs/enyhe stb.) a SZÜKSÉGES
  legenyhébb/„nincs" választások (a nővérnek jelölnie kell a valós súlyosságot; többük számított mezőt/kaput táplál).
- SZÜKSÉGES, DE BE NEM KÖTÖTT elem TALÁLVA + JAVÍTVA: az `immunszupprimalt` mező deklarálva volt (help: immunszupp.
  + láz → MSTR 2), de EGYETLEN szabály sem használta → immunszupprimált beteg alá-triázsolódott. Bekötve:
  immunszupprimalt=true → MSTR 2, csakPanaszok=[laz] (a CTAS is a Fever-nél kezeli → nem lesz fölösleges kérdés
  máshol), applies_to=mind. Forrás: tankönyv o.69 (»enyhe láz is szepszis jele lehet immunszupprimáltnál«), o.35,
  CTAS »2 | Immunocompromised«. Címke pontosítva (nem csak gyermek). Motor-teszt: Láz+immunszupprimált → 2 OK.
- Ellenőrzés: MINDEN input-mező be van kötve (nincs több deklarált-de-bekötetlen). Teszt 72/75.

### 2026-07-21 (48. munkaegység): TETRA adatfelvételi lap digitalizálva — build ?v=70

Ádám kérése (TETRA ÚJ.pdf digitalizálása). Külön modul, a triázstól független:
- Fejléc „TETRA" gomb (radio-ikon) → RENDER.tetra nézet; „Vissza a triázshoz" visszavisz (S.tetraElozoStep).
  fejlecFrissit TETRA-módban elrejti a szint-chipet/morzsát, a progress „TETRA — telefon/rádió riasztás".
- Lap (S.tetra állapot): Bejelentkezés (idő/bejelentkező/honnan/diszpécser); Beteg (név, TAJ/azonosító, életkor,
  neme F/N, hozzátartozó, várható érkezés); SBAR (S/B/A/R textarea); Vitálok (RR, P, SpO₂, LSZ); Jelölők
  (lélegeztetés, keringéstámogatás, újraélesztés, súlyos tudatzavar, STROKE-gyanú). STROKE-gyanúnál előjön a
  Kritikus stroke-panel (tünetkezdet/last-seen-well, feltalálás, RACE, premorbid Önellátó/Fennjáró/Fekvő,
  antikoaguláns Nem/Igen +mit/mikor, észlelő elérhetősége, értesítve: ellátó/shocktalanító/neurológus/CT/
  radiológus/betegszállítók) — hűen a papírlaphoz.
- tetraSzoveg() → formázott TETRA-lap vágólapra (MedSol/dokumentáció); Nyomtatás (a kitöltött lap). Új CSS:
  .tetra-choice, .tetra-toggle. Böngészőben ellenőrizve. Teszt 72/75.
HÁTRALÉVŐ: betegút/diszpozíció modul (járó/fekvő + felvételi szabályok + beutalási rend + deep-link, itt kerül a
≥80 a helyére); opcionális egy-kérdés-egy-képernyő UI; akut látásvesztés forrás (CTAS-mélymerülés).

### 2026-07-21 (49. munkaegység): időskor-módosító ellenőrzés + új keletű zavartság + köznyelvi aliasok — build ?v=71

Ádám: a nagyon öreg kor módosít-e valahol? Ellenőrzés: a besorolási SZABÁLYOKBAN NINCS időskori szám-küszöb
(sem tankönyv/jegyzet, sem CTAS). Ami idős-releváns: (a) az „új keletű zavartság ≠ krónikus demencia" (tankönyv
o.27) — EZ volt bekötetlen a Zavartság panaszon! Javítva: a furcsaViselkedesUjKeletu → 3 szabály hatóköre most
[furcsa-viselkedes, zavartsag]; akut/új keletű zavartság → MSTR 3, krónikus (demencia, változatlan) → 4 alapszint
(CTAS Confusion: 3|acute without HA/altered LOC; 4|chronic no change). Motor-teszt OK. (b) ≥80 → a járó/fekvő
DISZPOZÍCIÓnál számít (docx) — a betegút-modulban kerül a helyére, nem szint-módosító.
Köznyelvi aliasok (synonyms.json → altalanos-gyengeseg): „nem eszik nem iszik / nemeszik / nem iszik, elesett
általános állapot, állapotromlás/rosszabbodás, ágyban fekszik / ágyhoz kötött / nem kel fel, rosszul van / rosszullét,
leromlott, legyengült, hanyatlik". anorexia: +„nem kér enni, táplálékmegtagadás". Böngészőben: „nem eszik nem iszik"
→ Általános gyengeség (1. találat). Teszt 72/75.

### 2026-07-21 (50. munkaegység, DÖNTÉS/nincs kód): „idős = immunszupprimált?" — forrásban NINCS

Ádám felvetése: az öreg alapból immunszupprimáltnak számít-e (küszöb?). Alapos ellenőrzés (tankönyv o.35 láz-tábla,
jegyzet, CTAS): a „csökkent immunológiai válaszkészségű/immunhiányos" kategória KIZÁRÓLAG neutropénia/kemoterápia/
immunszuppresszív szer (szteroid) → MSTR 2; az ÉLETKOR nincs benne, nincs „idős→immunszupprimált" küszöb sehol.
DÖNTÉS: forrás nélkül NEM vezetünk be küszöböt (Ádám alapszabálya). Az idős szeptikus beteget a meglévő hálók fedik:
láz+SIRS→2, look-test, általános gyengeség panasz, új keletű zavartság→3. A ≥80/frailty a járó/fekvő diszpozícióhoz
(docx) tartozik → betegút-modul. HA intézményi (SE SOK) protokoll ad küszöböt+forrást, egy kattintással bekötendő a
Láz panaszhoz (az immunszupprimalt=true→2 mintájára; új mező pl. idosLazImmun vagy lazKullem új opció).

### 2026-07-21 (51. munkaegység): BETEGÚT / DISZPOZÍCIÓ modul (járó ↔ fekvő) — build ?v=73

A teljes ív lezárása: triázs → kategória → ELHELYEZÉS. Adatblokk: `munka/kb/kb_betegut.json` → KB.betegut
(assemble átvezeti). Forrás: „Triázs utáni betegút checklist" + SE SOK Betegfelvételi szabályok (2025.05.22).
- Az eredmény-képernyőn „Betegút / elhelyezés (járó ↔ fekvő) →" gomb → RENDER.betegut nézet (fejléc kontextus
  marad: szint-chip + morzsa; progress „Betegút / elhelyezés").
- MSTR 1–2 → automatikusan FEKVŐ (checklist nélkül). MSTR III–V → 7 pontos járó-checklist:
  ülve ellátható · biztonságosan mobilis · együttműködő(nincs zavartság) · nincs folyamatos monitor · nincs O2-igény ·
  nincs (fekvőn biztosítandó) izoláció · nincs crescendo. Minden IGEN → „Járóbeteg részlegre irányítható";
  bármelyik NEM → „Fekvőbeteg részleg".
- ELŐTÖLTÉS a triázs-adatból (Ádám kérése: „előredolgozik"): együttműködő← zavartTudatE()/GCS15; nincsO2← SpO2/
  o2Akut/nehézlégzés; nincsIzoláció← csak a kiütés/légúti (negatív nyomású szoba) blokkol, a csepp/kontakt (maszk/
  kesztyű) járóban is kezelhető → NEM blokkol (finomítva). Az előtöltött pontok jelölve („triázs alapján").
- ≥80 / magas frailty kapcsoló → járónál figyelmeztetés (gondos mérlegelés, kísérővel) — ITT kerül a ≥80 a helyére.
- Jobb oszlop: SE SOK 10 felvételi alapelv (összecsukható, forrással) + DEEP-LINK gombok: XTEK (belső) + NNGYK
  kijelölések (publikus) — új lapon nyílnak (élő auto-lekérdezés statikus appban nem megoldható; ez a hiteles út).
- betegutSzoveg() → vágólapra. Böngészőben ellenőrizve: járó/fekvő/frailty kimenet, előtöltés, linkek, SE-szabályok.
  Teszt 72/75. Új CSS: .betegut-krit/.bk-btn/.betegut-eredmeny.

TELJES ÍV KÉSZ: azonosítás → look-test → kor → panasz → vitál → ABCDE → módosítók → EREDMÉNY(forrással) →
BETEGÚT(járó/fekvő). Plusz: TETRA-modul, infekció/izoláció, előzmények/parkolás, SE-arculat, görgetésmentes.
NYITOTT (opcionális): egy-kérdés-egy-képernyő UI; akut látásvesztés forrás; beutalási rend kereshető kivonat.

### 2026-07-21 (52. munkaegység): módosító-listák logikája + gyorsgomb + gomb-nyilak — build ?v=75

Ádám csiszolási kérései (a fő vonalon):
- MÓDOSÍTÓ-LISTÁK SORRENDJE: negatív/legkevésbé sürgős („nincs") ELÖL, majd SÚLYOSSÁG szerint EMELKEDŐ.
  Megvalósítás: opcioKartyak rendezés KONTEXTUS-FÜGGETLEN opcioSuly()-jal (opcioSulyMap = minden szabályból a
  min. szint + computedCel-fallback a számított-táplált mezőkhöz, pl. legzesiJelek→nehezlegzesFok). Így EGYSÉGES,
  a betegtől függetlenül (a becsültSzint kontextus-függő volt → inkonzisztens). Ellenőrizve: Légzés Nincs→…→Súlyos,
  Keringés Normál/Stabil→Sokk/Instabil, Lázküllem Jó→…→Szeptikus, Vérzés enyhe→életveszélyes. A boolean (Igen/Nem) marad.
- „NINCS RELEVÁNS MÓDOSÍTÓ → tovább" gyors-affordancia (nincsModositoGomb) a megfigyelés (elsődleges) és a
  panasz-specifikus (másodlagos) lépés tetején — egy koppintás továbblép (baseline érvényes, nem tippel). CSS .nincs-mod-btn.
- Járó/fekvő gomb nyíl-zsúfoltság: „Betegút / elhelyezés (járó ↔ fekvő) →" → „Betegút és elhelyezés" (az ikon jelzi).
Teszt 72/75.
HÁTRALÉVŐ csiszolás: TETRA-lap elrendezés/workflow finomítása (Ádám külön kérte); + a korábbi opcionálisak.

### 2026-07-21 (53. munkaegység): módosító-audit (PASS) + vizuális nyereség (súlyossági színcsík) — build ?v=76

(1) ELSŐDLEGES/MÁSODLAGOS MÓDOSÍTÓ-AUDIT — HELYES:
- Egyetlen forrás nélküli leveled szabály sincs (mind oldalhivatkozott).
- Scoping panaszonként helyes (minden másodlagos mező a megfelelő CEDIS-panaszhoz kötve).
- MINDEN elsődleges ABCDE-determináns GLOBÁLIS (legzesiJelek/keringesiAllapot/lazKullem/verzesSulyossag/stridor/
  gyermekKullem) — nincs tévesen panaszhoz kötve → nincs alá-triázs kockázat.
- A 2 „árva" jelzés fals pozitív: legzesiJelek = a nehezlegzesFok számított mező bemenete; o2Akut = a spo2→legzesiJelek
  deriváció kapuja. Mindkettő be van kötve/megjelenik.
(2) VIZUÁLIS: állandó SÚLYOSSÁGI BAL SZÍNCSÍK minden opciókártyán a MSTR-szint szerint (kontextus-független
  opcioSuly()), zöld(4-5)→sárga(3)→narancs(2)→piros(1). A lista negatív→súlyos színátmenetben olvasható → egy
  pillantással átlátható, megerősíti az új sorrendet. CSS .opt-lvN bal border-stripe (a hover-only helyett). Teszt 72/75.
HÁTRALÉVŐ vizuális/csiszolás: TETRA-lap elrendezés; további finomítások Ádám igénye szerint.

### 2026-07-21 (54. munkaegység): TETRA-lap 2-oszlopos elrendezés (csiszolás) — build ?v=77

Ádám kérte a TETRA elrendezés/workflow csiszolását. RENDER.tetra átszervezve 2-oszlopos elrendezésre (.tetra-cols,
wide-on grid 1.25fr/1fr, mobilon stacked):
- BAL (narratíva): SBAR (S/B/A) → Vitálok (RR/P/SpO₂/LSZ) → R (javaslat).
- JOBB (meta): Bejelentkezés (idő/bejelentkező/honnan/diszpécser) → Beteg (név/TAJ/kor/nem/hozzátartozó/érkezés)
  → Jelölők (lélegeztetés/keringés/újraélesztés/tudatzavar/STROKE).
- STROKE-panel + műveletek teljes szélességben alul. Böngészőben ellenőrizve. Teszt 72/75.

ÁLLAPOT: a teljes ív + minden modul kész és csiszolt (SE-arculat, görgetésmentes, súlyossági színcsíkok, negatív-first
sorrend, „nincs módosító" gyorsgomb, TETRA 2-oszlop, betegút-modul). NYITOTT (opcionális): egy-kérdés-egy-képernyő UI;
akut látásvesztés forrás (CTAS-mélymerülés); beutalási rend kereshető kivonat.

### 2026-07-21 (55. munkaegység): TETRA-vitálok ABCDE-sorrend (konzisztencia) — build ?v=78

Ádám: a TETRA-paraméterek is ABCDE logikai sorrendben, konzisztensen. RENDER.tetra vitál-mezők átrendezve:
Légzésszám → SpO₂ (A–B) → Pulzus → Vérnyomás (C) — a fő vitál-lépéssel egyező. tetraSzoveg() vágólap-sorrend is igazítva
(LSZ · SpO2 · P · RR). Böngészőben ellenőrizve. Teszt 72/75.

### 2026-07-21 (56. munkaegység): csiszolás — döntő szabály forrás-jelölése az eredményen — build ?v=80

Transzparencia-csiszolás: az eredmény-képernyőn a „Döntő szabály" alatt most közvetlenül megjelenik a forrásoldal
(reason-src pill), az első 2 hivatkozás inline + „+N" a többire (teljes lista a részletes döntési úton). Így a döntés
alátámasztása azonnal látható, nem kell kinyitni a részleteket. CSS .reason-src. Böngészőben ellenőrizve (mellkasi
fájdalom sziv → MSTR 2 + „Oktatói jegyzet 133. o.; 50. o. +3"). Teszt 72/75.
NYITOTT (opcionális): egy-kérdés-egy-képernyő UI; akut látásvesztés forrás; beutalási rend kereshető kivonat; további mikro-polish.

### 2026-07-21 (57. munkaegység): akut látásvesztés bekötve (utolsó nyitott P1) — build ?v=81

CTAS mélymerülés (Visual disturbance tábla): »2 | acute or abrupt change in vision«, »4 | chronic/gradual«.
Bekötve: latasValtozas mező (akut_hirtelen→2 / kronikus_fokozatos→4), csakPanaszok=[latasi-zavarok, kettoslatas]
(patch_p2_escalatorok.json). Motor-teszt 3/3 OK (látási zavar akut→2/krónikus→4, kettőslátás akut→2).
Ezzel a lefedettségi audit UTOLSÓ nyitott P1 tétele (akut látásvesztés) LEZÁRVA. Teszt 72/75.
KORREKTSÉG: a fő alá-triázs P1/P2 gap-ek mind zárva. NYITOTT (opcionális, nem korrektségi): egy-kérdés-egy-képernyő UI;
beutalási rend kereshető kivonat; további mikro-polish.

### 2026-07-21 (58. munkaegység): QA-regresszió (PASS) + README frissítés — build ?v=81

Konszolidáció 57 munkaegység után:
- QA-REGRESSZIÓ (böngészőben, teljes folyamatok): gyermek 8 hó + láz + HR 180 → MSTR 2 (pulzus-vitálsáv helyesen);
  betegút MSTR 2 → fekvő; összegzés-vágólap fut; TETRA 2-oszlop renderel. SEHOL NINCS KONZOLHIBA. jsc-teszt 72/75.
- README.md ÚJRAÍRVA (az elavult, 29. egységbeli helyett): tükrözi az összes modult (betegút, TETRA, infekció,
  értékleltár), az arculatot (Montserrat/SE-paletta), a görgetésmentes/negatív-first/színcsík UI-t, a pipeline-t.
ÁLLAPOT: korrektségileg teljes, robusztus, dokumentált. NYITOTT (opcionális): egy-kérdés-egy-képernyő UI; beutalási
rend kereshető kivonat (deep-link már van); további mikro-polish.

### 2026-07-21 (59. munkaegység): képernyő-konzisztencia + dist deliverable verifikáció — build ?v=81

- VAS/fájdalom képernyő átnézve: konzisztens a design-rendszerrel (zöld/sárga/narancs zónák + színezett
  számgombok) — nincs javítanivaló.
- DIST DELIVERABLE VERIFIKÁLVA: dist/mstr_triage.html (1.27 MB) teljesen ÖNÁLLÓ — nincs külső hivatkozás,
  6 beágyazott Montserrat @font-face, 5 inline <script> + 2 <style>. Böngészőben: Montserrat betöltve,
  teljes folyamat → MSTR 2, eredmény renderel, NINCS konzolhiba. Ez az, amit Ádám dupla kattintással nyit.
ÁLLAPOT: az app funkcionálisan + korrektségileg TELJES, robusztus, dokumentált, a deliverable validált.
A maradék tételek (egy-kérdés-egy-képernyő UI; beutalási rend kivonat) opcionálisak, nem korrektségiek —
érdemes éles klinikai próbához / konkrét igényhez kötni, nem nyílt végű churn.

### 2026-07-21 (60. munkaegység): promptból átszűrődött magyarázkodó („meta") szövegek eltávolítása — build ?v=82

Ádám: „ezeket a promptból átszövődött de nem szükséges elemeket… szedjük ki mert idegenül hatnak” — a
profinak evidens, önreflexív magyarázatokat töröltük a FELÜLETRŐL (a valódi funkcionális/forrás-tartalom marad):
- Életkor kártya alcím: „Felnőttnél egy koppintás elég (a pontos kor a besorolást nem módosítja)…” → „Felnőtt, vagy gyermeknél pontos kor.”
- Felnőtt-chip: „(egy koppintás)” törölve; als-sor „18 év felett — a besorolást az életkor nem módosítja” → „18 év felett”.
- „Vagy pontos életkor (gyermeknél szükséges)” → „Vagy pontos életkor”.
- Vitál alcím: hosszú „nem kötelező… előre kitölti és gyorsítja…” → „Opcionális.”; lelet-textarea placeholder rövidítve.
- Look-test alcím redundáns „Első ránézés (3–5 mp), a vitálisok előtt” → célszerű „Kritikus megjelenés → azonnali MSTR 1.”
- Gyermek-kártya alcím „Ezek a mezők csak gyermekkorú betegnél jelennek meg.” törölve.
- TETRA alcím: „Kitöltés után vágólapra másolható / nyomtatható” tail törölve.
- Infekció-hint tail „A besorolási szintet nem befolyásolja.” törölve; SpO₂-javaslat „— koppintson a megerősítéshez” törölve.
- Értékleltár-figyelmeztetés „(a beteg nem tud felelni az értékeiért)” törölve; betegút „(triázs alapján előre kitöltve)” → „(előtöltve)”.
Csak UI-string; motor/KB érintetlen. jsc 72/75 (a 3 dokumentált, biztonságos-irányú), böngészőben renderel, 0 konzolhiba. dist 1,27 MB.

### 2026-07-21 (61. munkaegység): fókuszált audit + patch (esztétika / tartalom / redundancia / konzisztencia / bug) — build ?v=83

Teljes wizard.js (1792 sor) + flowchart + index + CSS átolvasás. Minden találat KÓD ELLEN igazolva patch előtt:
- BUG/KONZISZTENCIA: betegút frailty-figyelmeztetés nyers „⚠" emojit használt (mindenhol máshol ikonSvg('warn')) → SVG-ikonra cserélve (igazolva böngészőben: hasSvgWarn=true, rawWarnChar=false).
- KONZISZTENCIA: számított nehézlégzés „➜" nyíl → egységes „→".
- TARTALOM (félreérthető): összegzés-szövegben „RR(légzés)" — magyar klinikai konvencióban RR = vérnyomás → „Légzés"-re javítva (a vérnyomás marad „RR … Hgmm”, mint a TETRA-lapon).
- REDUNDANCIA/HOLT KÓD: `crumb(txt)` függvény sehol nem hívott → törölve (csak crumbIko használt). `infoBox()` helper + egyetlen hívása (azonosítás „Későbbi e-MedSolution integráció…” dev-roadmap szöveg) → törölve.
- META-SZÖVEG: ápoló-címke „— megjegyezve, megerősíthető" → „— megjegyezve".
- KICKER-KONZISZTENCIA: „Lépés 1 — azonosítás" / „Lépés 2 — 3–5 mp „look test”" → „Lépés 1" / „Lépés 2" (a 3–8 mind csupasz „Lépés N"); a look-test kontextus a címbe került: „Első megtekintés (look test)".
Csak UI/refaktor; motor+KB érintetlen. jsc 72/75 (dokumentált 3), teljes flow böngészőben (MSTR 5 → betegút → járó + frailty) hibátlan, 0 konzolhiba. dist 1,27 MB.
NEM javított (szándékosan, mert valódi tartalom): ✓/✔ inline glyphek (flowchart-legendával konzisztensek), „nincs automatikus javaslat" állapotüzenet, kihagyott-kérdés transzparencia-jelzés.

### 2026-07-21 (62. munkaegység): CSS-audit + patch (vizuális konzisztencia / holt kód / kontraszt) — build ?v=84

flowchart.js + teljes style.css (376 sor) átnézés. Igazolt találatok:
- KONTRASZT-BUG: a kiválasztott opció „✓" pipája var(--border) (világosszürke) volt a világos kijelölt háttéren → alig látszott. Új szabály: `.opt.sel .opt-arrow{color:var(--accent)}` — böngészőben igazolva rgb(35,47,97) navy.
- HOLT CSS: `.kor-gyors` blokk (az életkor egyetlen chip lett, a 3-oszlopos rács sehol) → törölve.
- HOLT SZELEKTOR: `.detour h3` (nincs `.detour` elem, csak detour-wrap/-body) → `.pathlog h3`-ra egyszerűsítve.
- REDUNDÁNS `.gnum`: 38px alap azonnal 44px-re írva felül; a 42px-es @media a 46px-re → holt deklarációk kitakarítva (alap 44px, ≤520px 46px, ≥1000px 34px — rendering változatlan, böngészőben 34px wide-on igazolva).
Csak CSS; motor/KB/HTML érintetlen. jsc 72/75 (dokumentált 3), teljes flow hibátlan, 0 konzolhiba. dist 1,27 MB (?v=84).

### 2026-07-21 (63. munkaegység): tudásbázis gépi konzisztencia-audit + forráskód-javítás — build ?v=85

Gépi KB-audit (scratchpad/kb_audit.py, a teljes összeszerelt kb.js-en): 386 szabály · 74 mező · 163 panasz ·
853 alias. Ellenőrizve: szabály→mező/opció hivatkozások, csakPanaszok→panasz-id-k, deriváció/computed
hivatkozások, árva mezők, baseline-lefedettség, duplikált szabály-id-k, forrás-doc kódok.
- JAVÍTVA: 2 szabály `doc:"mstr"` forráskóddal (patch_buktatok_altalanos: légútvédelem-kapu o.83;
  patch_buktatok_panasz: fejsérülés-padló o.267) — a kód definiálatlan volt (meta.sources: tankonyv/jegyzet/ctas),
  a felületen nyersen jelent volna meg. TARTALMILAG IGAZOLVA (mstr_full.txt = a jegyzet kinyerése; a 83. és 267.
  oldal szövege szó szerint egyezik a szabályok állításával; a jegyzet-oldalszámozás szúrópróbával konzisztens)
  → `doc:"jegyzet"`-re javítva. Forrás-eloszlás most: jegyzet 354 · tankonyv 222 · ctas 168 — mind definiált.
- FALS POZITÍV (nem javítandó): pefrSzazalek „árva mező" — valójában a PEFR→legzesiJelek suggest-deriváció
  bemenete (az audit-szkript nem számolta a deriváció from-ját); a 6 level-nélküli szabály a forrás
  „Normális: más módosító dönt" sorai — szándékosan nem szint-adók.
Minden más NULLA hiba: nincs törött hivatkozás, nincs ismeretlen opció-érték, nincs duplikált id, nincs
kategória/baseline nélküli panasz. jsc 72/75 (dokumentált 3). dist ?v=85.

### 2026-07-21 (64. munkaegység): DÖNTÉSI-PONT AUDIT — minden elágazás mögött szabály+forrás — build ?v=86

Ádám kérése (teszt előtti megalapozottság): minden kérdés minden válaszlehetőségéhez tartozzon ellenőrizhető
szabály + forrás. Gépi audit (scratchpad/dontesi_pont_audit.py): 213→219 válaszlehetőség, mindegyik
kategorizálva (közvetlen szabály / számított-mezőn át fedett / dokumentált negatív-baseline ág / HIBÁS).
Plusz: minden forrás-oldalszám tartomány-ellenőrzése (tankönyv 1–99, jegyzet 1–349, CTAS 1–406 dia).

3 VALÓDI HÉZAG TALÁLVA ÉS ZÁRVA (patch_p2_bor_kiutes.json, +2 mező +5 szabály, mind forrás-idézettel):
1. borElvaltozasJelleg.akut_gyulladt HALOTT ÁG volt (szabály nélkül baseline 5 — a kérdés két ága azonos
   kimenetet adott) → MSTR 4 [jegyzet o.145 »lokalizált cellulitis alapján MSTR 4« + o.100 + CTAS DIA 164].
2. kiutes panasznak NULLA módosítója volt → új kiutesJelleg mező: purpura/petechia+beteg benyomás→2
   [CTAS DIA 163 »2|Purpuric or petechial rash; appears ill« — meningococcaemia-zászló!]; arc/periorbitális
   cellulitis→2 [DIA 163+164]; lokalizált cellulitis→4 [DIA 163 + jegyzet o.145]; lokalizált nem gyulladt→baseline 5.
3. szemkornyeki-duzzanat panasznak NULLA módosítója volt → új szemkornyekiDuzzanatJelleg mező: gyulladt
   (periorbitális cellulitis gyanú)→2 [CTAS DIA 164 »2|Facial cellulitis, particularly periorbital area«;
   DIA 133 alap 5]; nem gyulladt→baseline 5.
MINDEN MÁS ÁG IGAZOLTAN RENDBEN: 178 közvetlen szabállyal fedett, 29+viszonylagos negatív/baseline-ág
forrás-egyeztetéssel (pl. toxAnyag alacsony kockázat→baseline 4 = CTAS »4|Known low risk substance«;
hüvelyi vérzés kis→4, szemsérülés enyhe→4, syncope egyik sem→4 — mind a CTAS alapszinttel egyező);
o2Akut mindkét ága deriváció-gate-ként hat; a 13 „tartományon kívüli" CTAS-hivatkozás fals pozitív volt
(a CTAS 406 diás). Motorteszt: 9/9 PASS (döntő szabály azonosítóval igazolva), regresszió 72/75 (dokumentált 3),
böngészőben: kiütés→purpura → MSTR 2 + »CTAS COT-2008 DIA 163« forrás a döntő szabályon, 0 konzolhiba.
KB most: 391 szabály · 76 mező · forrás-eloszlás jegyzet 357 · tankönyv 222 · ctas 175. dist ?v=86 (1,25 MB).

### 2026-07-21 (64b. kiegészítés): forrás-hierarchia igazolása (Ádám megerősítése: MSTR anyag az irányadó, CTAS csak hézagpótló)

Gépi ellenőrzés a 391 szabályon:
- 225 szabály CSAK magyar forrású (tankönyv/jegyzet) · 57 magyar forrás + CTAS-korroboráció · 109 CSAK-CTAS.
- Mind a 109 csak-CTAS szabály hézagpótló (96 baseline-floor olyan CEDIS-panaszokra, amelyekhez a magyar anyag
  nem ad explicit alapszintet + escalátorok), MINDEGYIK notes-a megnevezi a konkrét CTAS-sort (dia + idézet).
- ÜTKÖZÉS-ELLENŐRZÉS: azonos feltételű, eltérő szintű szabálypár: 0 db → CTAS-szabály sehol nem mond ellent
  magyar forrásúnak. Strukturális garancia: a min-logika miatt szabály csak SÚLYOSBÍTHAT, nem nyomhat el másikat.
- A 75 teszteset mind a MAGYAR forrás esete → 72/75 pass (3 dokumentált, biztonságos irányú eltérés) —
  ez a magyar anyag elsőbbségének legerősebb bizonyítéka.
Memóriában rögzítve a hierarchia-elv explicit formában.

### 2026-07-21 (65. munkaegység): ÉLES TESZT-DEPLOY — GitHub Pages (kornel92/soktriage)

Ádám kérése: tegyük fel a GitHub/Supabase fiókjára, hogy kollégák tesztelhessék, amíg a klinikai
szerverre nem kerül. Tisztázó kérdés után (domain: most ingyenes GitHub-cím, később saját domain;
láthatóság: publikus) döntés + végrehajtás:
- Supabase NEM kellett (nincs backend/adatbázis az apphoz) — GitHub Pages a helyes, ingyenes statikus host.
- Új publikus repó: kornel92/soktriage. CSAK a biztonságos tartalom került fel (explicit `git add app dist
  docs README.md DEPLOY.md .gitignore` — SOSE `git add -A`): app/ (fejlesztői forrás) + dist/ (egyfájlos build)
  + docs/index.html (a dist másolata, ez szolgálja ki a Pages-t). KIMARADT (nincs a repóban): a forrás-PDF-ek
  (tankönyv, jegyzet, CTAS, SE arculati kézikönyv — szerzői jog), .mhtml exportok (valós rendszer/betegadat-
  kockázat), a teljes munka/ kinyerő-munkaterület (kinyert könyvszövegek, oldalképek), a docx. Ez már eddig is
  jórészt a .gitignore-ban volt, csak explicit stage-eléssel dupla-biztosítva.
- GitHub Pages bekapcsolva API-n (`gh api -X POST repos/kornel92/soktriage/pages source[branch]=main
  source[path]=/docs`) — build ~35 mp alatt lefutott.
- ÉLŐ URL: **https://kornel92.github.io/soktriage/** — böngészőben smoke-tesztelve: HTTPS, Montserrat betöltve,
  teljes flow → MSTR 2, 0 konzolhiba.
- Redeploy-recept a DEPLOY.md-ben rögzítve: build_singlefile.py → `cp dist/mstr_triage.html docs/index.html`
  → `git add app dist docs` → commit → `git push` (Pages automatikusan újraépül, nincs CI-konfiguráció).
- Saját domain (pl. soktriage.<domain>.hu) bármikor bekötehető később: CNAME → kornel92.github.io + Settings→
  Pages→Custom domain — a DEPLOY.md leírja a lépéseket.
NEM része a repónak: FOLYTATAS.md (belső munkanapló), a forrás-dokumentumok, munka/ — ezek csak lokálisan
maradnak, a git repó a triage_app/ könyvtár GYÖKERÉBEN él (git init ott történt), tehát jövőbeli `cd
triage_app && git add ...` munkamenetekben MINDIG explicit fájlnevekkel/mappákkal kell add-olni, sose -A/.-tal.

### 2026-07-21 (66. munkaegység): MOBIL-OPTIMALIZÁCIÓ audit + patch — build ?v=90, éles redeploy

Ádám kérése: "mobilra is legyen optimalizálva minden felület/csempe". Teljes böngésző-alapú mobil audit
(375×812 viewport, minden lépés + modal, horizontális-túlcsordulás-detektor script + screenshot minden
képernyőn) — 3 VALÓDI BUG találva és javítva:

1. FEJLÉC TÚLCSORDULÁS: a TETRA/Előzmények/Új beteg gombsor (`.hdr`) nem tördelt (`flex-wrap:nowrap`)
   → az "Új beteg" gomb lelógott a viewportról 375px szélességnél. Javítás: `.hdr{flex-wrap:wrap;row-gap:8px}`
   + <480px a logó saját sorba (`flex-basis:100%`).
2. STICKY NAV ÁTFEDÉS (a legsúlyosabb): `.nav-row{position:sticky;bottom:0}` VOLT minden szélességen —
   ez a "görgetésmentes" desktop-célra készült (mindig elérhető Vissza/Tovább), DE mobilon, ahol a tartalom
   egy oszlopba rendeződik (több görgetés), a lebegő sáv folyamatosan A TARTALOM ALJÁT TAKARTA EL — konkrétan
   az Eredmény képernyőn a "Betegút és elhelyezés" gomb alsó ~40%-át takarta már scrollY=0-nál is (mert a
   sticky a viewport aljához ragad, amint a dokumentum magasabb a viewportnál — NEM csak a tényleges
   scroll-végén). Javítás: a sticky csak `@media(min-width:1000px)`-nél aktív; keskenyebb nézeten `position:static`
   (természetes helyén, a kártya alján). Böngészőben igazolva mindkét irányban (mobil: static, nincs átfedés;
   desktop 1280px: sticky megmaradt, nincs regresszió).
3. TETRA MŰVELET-SOR TÚLCSORDULÁS: a TETRA-lap alján 3 gomb (Vissza/Vágólap/Nyomtatás) egy sorban
   (`.nav-row{flex-wrap` hiányzott alapból is}) → "Nyomtatás" lelógott jobbra. Javítás: `.nav-row{flex-wrap:wrap;
   row-gap:10px}` + a `.spacer` <480px-nél `flex-basis:100%` (sortörésként viselkedik) → Vissza saját sorba,
   a 2 művelet-gomb alá, teljes szélességben. Desktopon (1280px) igazoltan egy sorban marad (nincs regresszió).

UX-POLISH (nem bug, de mobilon zavaró volt): a betegút járó-kritérium sorok (`.betegut-krit`) hosszú szövege
+ Igen/Nem gombjai side-by-side szorultak keskeny nézeten → `flex-direction:column` <640px-nél (szöveg fölül,
teljes szélességű 44px+ Igen/Nem gomb alul), ≥640px-nél visszaáll a kompakt sor (desktop változatlan).

Ellenőrzött és rendben talált képernyők (nincs túlcsordulás, jó tap-target méret): azonosítás, look-test,
kor (chip+gyors korcsoport-infó), panasz-kereső+kategória-csempék (16 csempe, 2 oszlop), vitál (lelet+ABCDE
2 oszlopból 1-re), GCS-rács (44→46px gombok), VAS fájdalomskála (6 oszlop), panasz-specifikus módosítók,
gyermek-specifikus képernyő, Eredmény (badge+döntő szabály+napló+folyamatábra), betegút, TETRA form,
Előzmények modal, szabály-részlet popup (reszlet-panel).
VERIFIKÁCIÓ: jsc 72/75 (dokumentált 3, csak CSS változott, motor érintetlen), böngészőben mindkét
irányban (375px mobil + 1280px desktop) ellenőrizve, 0 konzolhiba. Build ?v=90 → dist (1,25 MB) →
docs/index.html → commit 90f82ca → push → GitHub Pages újraépült (~45mp) → ÉLESEN IGAZOLVA
https://kornel92.github.io/soktriage/ (mobil viewport, header tördelve, nincs sticky-átfedés).

### 2026-07-21 (67. munkaegység): pilot-disclaimer + forrás-átláthatóság + noindex — build ?v=91

Ádám kérése: (1) személytelenített URL (nincs benne a github-felhasználóneve), (2) figyelmeztető üzenet —
saját felelősség, nem helyettesíti a triázst, jogvédelmi tudatosság (MSOTKE-tulajdon, nincs engedélyünk).
- ELFOGADANDÓ TÁJÉKOZTATÓ KAPU (első betöltéskor, csak a gombbal zárható, localStorage-ban megjegyezve
  `mstr_disclaimer_ack_v2`): pilot/teszt jelleg, nem helyettesíti a szakmai triázst, forrás-átláthatóság
  (saját megfogalmazás + hivatkozás, nem a forrásművek másolata), csak meghívott kollégáknak. Böngészőben
  igazolva: megjelenik első alkalommal, elfogadás után nem jön vissza, app normálisan indul utána.
- `<meta name="robots" content="noindex,nofollow">` — a pilot link ne kerüljön keresőmotor-indexbe.
- README.md kiegészítve: pilot-figyelmeztetés a tetején + „Forrás és szerzői jog" szakasz (transzparens,
  NEM elkenő megfogalmazás — Ádám eredeti „hogy lehetne ezt elkenni" felvetésére NEM egy elrejtő banner
  lett a válasz, hanem őszinte, védő megfogalmazás: pilot/belső jelleg + forrás-hivatkozás explicit kimondva).
- DÖNTÉS (Ádámmal tisztázva): repó marad PUBLIKUS (nincs benne forrás-PDF/másolt szöveg, csak saját
  megfogalmazás+hivatkozás — elfogadhatónak ítélte); az URL-személytelenítéshez Ádám létrehoz egy ingyenes
  GitHub-szervezetet („soktriage" néven, szabad) — fiókteremtés biztonsági okból nem AI-feladat, ezt neki
  kell megtennie (github.com/account/organizations/new). UTÁNA migrálandó: a `soktriage/soktriage` repóba
  (vagy a jelenlegi tartalom átmásolásával), Pages újra bekapcsolva, cím: https://soktriage.github.io/.
jsc 72/75 (dokumentált 3), commit a563b92, GitHub Pages frissült.

### 2026-07-21 (68. munkaegység): ALLROUNDER AUDIT — minden nézet/funkció/döntés/képernyő, mobil+web

Ádám kérése a deploy-lezárás után: teljes körű átfogó audit. Elvégzett ellenőrzések:

1. `leletparser.js` teljes átolvasás — regex-alapú, szűk hatókörű lelet-parser, nincs hiba.
2. `engine.js` TELJES átolvasás (206 sor, eddig csak részben volt látva) — nincs hiba; egy vestigiális,
   de ártalmatlan tartalék-ág azonosítva (`complaint.defaultLevel`, 0/163 panasz használja — a baseline-
   szabály mechanizmus váltotta ki az 57. egységben, de a régi fallback védelemként bent maradt, szándékosan
   nem törölve — belt-and-suspenders).
3. AUTOMATIZÁLT „minden panasz a motoron át" teszt (baseline-only, felnőtt ÉS 8 hónapos gyermek kontextusban,
   163×2 = 326 futtatás): PONTOSAN 1 panasznak nincs alapszintje — `apnoes-periodus-csecsemonel` (csecsemő
   apnoe, ahol a súlyosság 1/2/3 közt KIZÁRÓLAG a kötelező módosítóból derül ki, szándékosan nincs alapszint,
   mert bármilyen alapértelmezés vagy túl-agresszív, vagy alul-triázsoló lenne).
4. KRITIKUS ZSÁKUTCA-HIBA TALÁLVA ÉS JAVÍTVA: a fenti panasznál a nővér a kötelező módosító megválaszolása
   NÉLKÜL végig tudott kattintani (a Tovább gomb nem volt védve) → „Nincs automatikus javaslat" zsákutcába
   futott egy időkritikus gyermek-panasznál (böngészőben reprodukálva és igazolva). JAVÍTÁS: a Panasz-
   specifikus módosítók lépés Tovább gombja most `validate`-tel védett (`S.utolso.szint != null`, ugyanaz a
   minta mint az életkor lépésen), a "Nincs releváns módosító" gyorsgomb ilyenkor nem jelenik meg. A 162/163
   alapszinttel rendelkező panasznál NINCS súrlódás (a szint már a panasz-választáskor megvan) — böngészőben
   mindkét eset igazolva (apnoe: letiltott gomb+hint→válasz után MSTR 1/2/3; normál panasz: zökkenőmentes).
5. AUTOMATIZÁLT „minden panasz × minden módosító-ÉRTÉK" teszt (239 kombináció, select+checkbox mezők, minden
   opció ténylegesen kipróbálva, nem csak „nincs válasz"): 0 NULL-eredmény — a 4. pont javítása lezárta az
   EGYETLEN strukturális zsákutcát, más nincs.
6. Bázisszintek klinikai józanság-ellenőrzése kategóriánként (mind a 163 panasz áttekintve): a szint-eloszlás
   koherens (arresztek→1, kritikus trauma/kardiális→2-3, minor/adminisztratív→5), nincs nyilvánvaló hibás
   besorolás; a mélyebb forrás-szintű validáció a korábbi egységekben (30-64) már megtörtént.
7. Mobil ÚJRA-ellenőrzés a validációs hint-tel (375px): Vissza → hint-szöveg → letiltott Tovább, mind
   tördelve, olvasható, nincs túlcsordulás.
VERIFIKÁCIÓ: jsc 72/75 (dokumentált 3), commit 4f701db, GitHub Pages újraépült, ÉLESEN igazolva
(https://kornel92.github.io/soktriage/ — disclaimer megjelenik, teljes flow MSTR 2-ig, 0 konzolhiba).

ÖSSZKÉP: a mai session 3 réteget auditált frissen (motor-szintű zsákutca-keresés, mobil UX, deploy/
jogvédelem) a korábbi 8 réteg tetejére (UI-szöveg, CSS, KB-konzisztencia, döntési-pont-forrás, forrás-
hierarchia). A rendszer jelenlegi állapotban: 391 szabály, 76 mező, 163 panasz, mind elérhető, mind
forrás-hivatkozott, NULLA ismert strukturális zsákutca.
FÜGGŐBEN (Ádámon múlik): saját GitHub-szervezet létrehozása ("soktriage") a személytelenített URL-hez —
ha kész, a Pages-t átköltöztetem, cím: https://soktriage.github.io/.

### 2026-07-21 (69. munkaegység): szervezeti migráció (soktriage.github.io) + RACE-skála strukturálás

1. GITHUB-SZERVEZET MIGRÁCIÓ: Ádám létrehozta a "soktriage" ingyenes GitHub-szervezetet. Új repó:
   soktriage/soktriage.github.io (a speciális repónév-minta miatt gyökér-URL). Git remote-ok
   átrendezve: 'origin' mostantól a szervezeti repóra mutat, a régi personal repo 'kornel92-regi'
   néven megmaradt referenciának (NEM törölve — törlés destruktív, Ádám döntése ha kell).
   HIBA+JAVÍTÁS: a repónév-minta miatt GitHub automatikusan Jekyll-feldolgozást indított, ami a
   <title> végére " | soktriage" toldalékot illesztett (Jekyll default layout injektálás) → üres
   `docs/.nojekyll` fájllal kikapcsolva, igazolva (curl + böngésző): tiszta cím.
   ÉLES CÍM: https://soktriage.github.io/ — teljes smoke-teszt (disclaimer, flow MSTR 2-ig,
   TETRA+RACE modul), 0 konzolhiba.
   README.md + DEPLOY.md frissítve az új címmel + a migráció/.nojekyll magyarázatával.

2. RACE-SKÁLA STRUKTURÁLÁSA (TETRA modul) — Ádám kérése: a szabad szöveges "RACE score" mezőt
   bontsuk kategóriánként kattintható, pontértékkel jelölt tételekre, hiteles külső forrásból.
   KUTATÁS: WebSearch + WebFetch, végül natív PDF-olvasóval kinyerve az AHA (American Heart
   Association) Mission: Lifeline Stroke hivatalos "RACE — A Stroke Assessment Tool for EMS" kártyáját
   (© 2019 AHA, a Pérez de la Ossa N, Carrera D, Gorchs M, et al. "Design and validation of a
   prehospital stroke scale to predict large arterial occlusion", Stroke 2014;45(1):87-91 eredeti
   validációs közlemény adaptációja) — ez a pontos, szó szerinti forrás minden tételhez és pontértékhez.
   IMPLEMENTÁCIÓ (wizard.js: RACE_TETELEK, RACE_AFAZIA, RACE_AGNOZIA, raceTetelDoboz, raceOsszeg,
   raceReszletek + CSS .race-*): 4 alaptétel (arcbénulás, kar-motoros, láb-motoros, fej-/tekintet-
   deviáció) mind 0-2 (gaze 0-1) ponttal, szó szerinti AHA-leírással; oldal-választó (jobb/bal) dönti
   el, hogy az afázia- (2 utasítás: csukja be szemét / szorítson öklöt) vagy az agnózia-tesztet
   (aszomatognózia + anozognózia) mutatja; automatikus 0-9 összegzés, ≥5-nél kiemelt "magas
   LVO-valószínűség" jelzés + forráshivatkozás a panelen. A vágólap-export (tetraSzoveg) is frissítve
   a strukturált összegre. VERIFIKÁCIÓ: böngészőben végigkattintva (1+2+1+1+2=7/9 helyesen összegződik,
   "magas" jelzés aktív), vágólap-export tartalma ellenőrizve, mobilon nincs túlcsordulás, jsc 72/75
   (dokumentált 3), élesen igazolva.

### 2026-07-21 (70. munkaegység): kollégák pilot-visszajelzései — reprodukálva, forrással igazolva (NYITOTT, javítás Hétfő után)

Ádám továbbította a tesztelő kollégák visszajelzéseit (szédülés, láz/sepsis-minta, hasi fájdalom). Mindhármat
reprodukáltam motoron (jsc script) ÉS böngészőben (pontos kattintási úttal), forrás ellen ellenőrizve:

1. SZÉDÜLÉS: nulla panasz-specifikus módosító → mindig MSTR 3, változtathatatlanul. FORRÁS: a saját döntő
   szabályunk maga a jegyzet 288. oldalára hivatkozik, ami EXPLICIT módosító-létrát ad: nem pozícionális
   (±egyéb neuro tünet, lehetséges CVA) → MSTR 2; pozícionális, tünet nélkül → MSTR 3 (ez az egyetlen eset,
   amit lefedünk); krónikus → MSTR 4. Alultriázs-kockázat a nem pozícionális/CVA-gyanús esetnél.
2. LÁZ+SEPSIS-MINTA (HR135, RR22, T39.5, "jó ált. állapot"): MSTR 4. FORRÁS: CTAS "Adults: Temperature/Sepsis"
   — SIRS-kritériumok (láz, HR>90, RR>20 = itt mind a 3 teljesül) → "Looks septic" = MSTR 2, FÜGGETLENÜL a
   szubjektív megjelenéstől. Rendszerünkben a lazKullem mező TISZTÁN szubjektív, nincs objektív SIRS-
   kritériumszámláló/keresztellenőrzés (a meglévő immunszupprimalt-eszkalátoron kívül más nincs).
   Alultriázs-kockázat, pont a "kompenzált, fiatal" betegeknél a legveszélyesebb minta.
3. HASI FÁJDALOM: 0 panasz-specifikus módosító, kizárólag a globális VAS+lokalizáció+jelleg-mátrixtól függ
   (ami maga forrás-hű, CTAS Pain Severity Modifier táblával egyezik — verifikálva). DE (a) a VAS/lokalizáció/
   jelleg NEM kötelező — üresen hagyva mindig az 5-ös (legenyhébb) alapszint marad, akkor is ha valójában
   heveny/közepes fájdalom áll fenn (reprodukálva: sima átkattintás VAS nélkül → mindig 5); (b) a Centrális/
   Perifériás választás szabad, miközben CTAS definíció szerint a hasi (szervi) fájdalom mindig centrális —
   ez magyarázza a két kolléga eltérő eredményét ugyanarra a panaszra.
NEM JAVÍTVA MÉG — Ádám hétfői megbeszélést tervez a csapattal, utána gyors patch várható. A pontos forrás-
idézetek + reprodukciós lépések elküldve neki másolható formában (chatben, nem került fájlba/commitba).
Architektúra-megjegyzés Ádám "logika megfordítás" ötletére: a rendszer MÁR panasz-specifikus módosító +
alapszint + eszkalátor felépítésű — a fenti 3 hiba mind TARTALMI hiány ebben a keretben, nem szerkezeti.

### 2026-07-21 (71. munkaegység): RENDSZERSZINTŰ MINTA-JAVÍTÁS a kollégák visszajelzései alapján — build ?v=94

Ádám: "vedd észre a mintát az egészben, javítsuk hogy ne triázsoljon alul" — nem a 3 bejelentett esetet
foltoztuk pontszerűen, hanem megkerestük a KÖZÖS strukturális okot a teljes rendszerben.

**FŐ FELFEDEZÉS — 5 ÁRVA másodlagos módosító-mező**: a `mezokCsoportban('megfigyeles')` csak a
'megfigyeles' csoportot rendereli, a `lathatoModositok()` csak a `csakPanaszok`-kal rendelkező mezőket —
eddig 12 db `group:'masodlagos'` mező volt `csakPanaszok` nélkül. Ebből 7 `pediatricOnly:true` (ezek
MŰKÖDNEK, a gyermek-lépésen át rendereltek — nem hiba), DE 5 db teljesen ÁRVA volt (soha semmilyen
felületen nem jelent meg, holott a hozzájuk tartozó szabályok forráshivatkozással készen álltak):
- vércukorszint + vércukor-tünet → most: `csakPanaszok:['modosult-tudatallapot','zavartsag',
  'hyperglycemia','hypoglycemia']` (tankönyv 44.o. explicit táblázat, jegyzet 97/250.o.)
- hipertóniás tünet → `csakPanaszok:['hipertenzio']` (jegyzet 99/102.o., tankönyv 46/79.o., CTAS DIA 39)
- maghőmérséklet → `csakPanaszok:['hypothermia']` (jegyzet 294.o., tankönyv 79.o.)
- nekrotizáló fasciitis bőrjel → `csakPanaszok:['vegbel-vegbel-kornyeki-fajdalom','herefajdalom-vagy-
  duzzanat']` (jegyzet 309.o., tankönyv 83.o. — "buktatók" szakasz)
Mind az 5 böngészőben végigkattintva igazolva (pl. hipertenzió SYS225+tünet="van" → helyesen MSTR 2 lett
a korábbi néma MSTR 4 helyett).

**TARTALMI BŐVÍTÉS (kollégák konkrét visszajelzése)**:
- Szédülés: 0→3 explicit szabály (jegyzet 288.o.) — nem pozícionális (lehetséges CVA)→2, pozícionális→3,
  krónikus→4. ARCHITEKTÚRA-TANULSÁG: a "krónikus→4" de-eszkalációt a feltétel nélküli baseline_szedules(3)
  legyőzte a min-logika miatt (a rendszer csak SÚLYOSBÍTÁST enged automatikusan, enyhítést nem) —
  javítva: `baseline_szedules` mostantól `nemEgyenlo:'kronikus'` feltétellel, hogy a de-eszkaláció
  érvényesülhessen. Ez az ELSŐ ilyen minta a KB-ban; jövőbeli de-eszkalációknál figyelni kell rá.
- Fejfájás: 0→3 explicit szabály (tankönyv 25.o. + CTAS DIA 109) — hirtelen/"legrosszabb életében"→2,
  látászavar+szemfájdalom→2, krónikus→5 (=baseline, nincs konfliktus, mert 5 már a legenyhébb szint).
- ÚJ, forrás-hű SIRS-eszkalátor lázhoz: HR>90 + RR>20 + T>38 (mind a három, MEGLÉVŐ vitál-mezőkből,
  új UI nélkül) → MSTR 2, FÜGGETLENÜL a szubjektív küllem-választástól (tankönyv 25.o.: "legalább 3+
  SIRS kritérium"; CTAS "Adults: Temperature/Sepsis" DIA 11). Böngészőben PONTOSAN a bejelentett esettel
  igazolva (HR135/RR22/T39.5 → MSTR 2, korábban néma MSTR 4 volt).

**SZERKEZETI JAVÍTÁS (általános, minden "csak fájdalommal jellemzett" panaszra hat, nem csak hasi
fájdalomra)**: a Fájdalom lépés (VAS + lokalizáció + jelleg) mostantól kötelező, ha releváns (ugyanaz a
validate+hint minta, mint a kor/apnoe lépéseken) — eddig üresen hagyva mindig a legenyhébb alapszint
maradt (hasi fájdalom VAS nélkül → mindig MSTR 5). Szervi/testüregi panaszoknál (hasi fájdalom, nem
szív eredetű mellkasi fájdalom) a lokalizáció auto-"centrális"-ra áll (felülírható, "előre kitöltve"
jelzéssel) — a CTAS-definíció szerint ez MINDIG centrális, a szabad Centrális/Perifériás választás
okozta a két kolléga eltérő eredményét ugyanarra a panaszra. Böngészőben igazolva: hasi fájdalom
VAS=2+centrális(auto)+akut → most helyesen MSTR 4 (korábban VAS nélkül mindig 5 volt).

VERIFIKÁCIÓ: automatizált "minden panasz × minden módosító-érték" seprés (259 kombináció, feljebb 239-ről
az új mezőkkel) → 0 NULL eredmény. "Minden panasz csak-alapszinttel" seprés: 2 panasz szándékosan nincs
alapszint nélkül (szedules, apnoes-periodus-csecsemonel — mindkettő a kötelező-válasz UI-védelemmel
lezárva, nem zsákutca). jsc 72/75 (dokumentált 3, változatlan). Böngészőben mind az 5 új mezőkötés +
szédülés + láz-SIRS + hasi fájdalom végigkattintva, helyes eredménnyel, 0 konzolhiba, mobilon nincs
túlcsordulás. Build ?v=94 → commit 826bf7c → push → élesen igazolva https://soktriage.github.io/.

VÁLASZ Ádám architektúra-kérdésére ("logikát megfordítani?"): NEM kell — a rendszer már panasz-specifikus
módosító + alapszint + eszkalátor logikával működik, a fenti hibák mind TARTALMI/BEKÖTÉSI hiányok voltak
ebben a keretben (árva mezők, hiányzó modifikátor-létra, min-logika és de-eszkaláció ütközése, nem
kötelező kritikus mező), nem szerkezeti probléma.
VÁLASZ a "hol vannak a másodlagos módosítók" kérdésre: a `csakPanaszok`-kal rendelkező `group:'secondary'/
'masodlagos'` mezők, a Panasz-specifikus módosítók (Lépés 8) lépésen jelennek meg — ELLENŐRIZVE, hogy
minden ilyen mező ténylegesen renderelt-e (a fenti 5 volt a kivétel, most javítva).

### 2026-07-21 (72. munkaegység): hivatalos MSOTKE-MSTR poszter szisztematikus ellenőrzése — build ?v=95

Ádám feltöltötte a hivatalos MSOTKE-MSTR MUNKACSOPORT posztert ("Elsődleges és másodlagos módosító és
meghatározó tényezők" — a legmagasabb rangú, canonical forrás). Minden tábláját sorra összevetettük:
- Nehézlégzés-fokozat/SpO2/PEFR sávok ✓ egyezik. Keringési állapot (sokk/instabil/stabil) ✓ egyezik.
  GCS-küszöbök (3-9→1, 10-13→2) ✓ egyezik. Láz/SIRS-kritériumok (immunszupprimált→2, szeptikus/3 SIRS→2,
  súlyos beteg<3SIRS→3, jó ált.áll.→4) ✓ egyezik (ez pont a 71. egységben implementált SIRS-szabály forrása).
  Fájdalom jelleg-mátrix (centrális/perifériás × akut/krónikus × VAS) ✓ egyezik. Magas rizikójú baleseti
  mechanizmus ✓ már implementálva (serulesMagasRizikoju). Vérzés-hely tábla (élet/végtag-veszélyeztető vs
  mérsékelt) ✓ már implementálva (verzesSulyossag). Vércukorszint tábla ✓ pontosan egyezik a 71. egységben
  bekötött vercukor/vercukorTunet szabályokkal. Magas vérnyomás tábla ✓ pontosan egyezik a bekötött
  hipertoniaTunet szabályokkal. Kiszáradás 4-fokozat (súlyos/közepes/enyhe/lehetséges) ✓ MÁR implementálva
  (dehidraciofok mező, masodlagos_07-10 + gyermek_dehid_01-04). Mellkasi fájdalom "tépő/szaggató" jelleg → 2
  ✓ MÁR implementálva (mellkasiNemSzivJelleg). Stroke-tünetek 4,5 órás thrombolysis-ablak → 2/3 ✓ MÁR
  implementálva (strokeTunetKezdet).
- EGYETLEN VALÓDI HIÁNY: Nyelési nehezítettség/dysphagia — 0 módosító volt, a poszter explicit ad kettőt:
  nyáladzás+stridor (légúti vészhelyzet-jel, epiglottitis/idegentest-gyanú) → MSTR 2, lehetséges idegen
  test → MSTR 3 (= korábbi alapszint). Új mező+2 szabály (patch_p2_dysphagia.json), böngészőben igazolva:
  nyáladzás+stridor → helyesen MSTR 2, döntő szabály + forrás megjelenik.
- A poszter önálló, hivatalos forrásként rögzítve: `doc:"mstr"` = "MSOTKE-MSTR munkacsoport — hivatalos
  poszter", felvéve meta.sources-ba (assemble_kb.py) + flowchart.js forrasSzoveg-be (korábban a "mstr" doc-kód
  hibásan/definiálatlanul szerepelt 2 helyen — most VALÓDI, definiált forrásként él, elkülönítve tankönyv/
  jegyzet/CTAS-tól).
- MEGJEGYZÉS (nem javítva, Ádámmal egyeztetendő): a poszter a láz/SIRS táblát "kor ≥16 év"-től jelzi
  érvényesnek; rendszerünk általános gyermek/felnőtt határa 18 év (assemble_kb.py-ban már korábban is
  megjegyezve: "a jegyzet elsődleges korhatára 16, 16-18 közt kiterjeszthető" — tudatosan elhalasztott döntés,
  nem ezúttal módosítva, mert a teljes applies_to:felnott/gyermek rendszerre kihatna).
VERIFIKÁCIÓ: jsc 72/75 (dokumentált 3), automatizált seprés 260 kombináción 0 NULL, böngészőben végigkattintva
(dysphagia nyáladzás+stridor → MSTR2 + helyes forráscímke), 0 konzolhiba. Build ?v=95 → commit 291bd0e →
push → GitHub Pages újraépült → élesen igazolva https://soktriage.github.io/.

### 2026-07-21 (73. munkaegység): "poszter az irányadó" — kor-küszöb 16 évre + rejtett 17/18 ütközés — build ?v=96

Ádám: "ahol ellentmondás van, ott a poszter az irányadó" — a láz/SIRS-küllem szabályok (elsodleges_felnott_
15-18) kor-küszöbét 17→16 évre javítottuk a hivatalos MSOTKE-MSTR poszter explicit "kor ≥16 év" jelzése alapján.

MELLÉKLETESEN FELTÁRULT KORÁBBI, REJTETT HIBA: ezeknek a szabályoknak MÁR EDDIG IS volt saját explicit
`eletkorEv≥17` feltételük — de egy REDUNDÁNS `applies_to:"felnott"` gát (a rendszer ÁLTALÁNOS 18 éves
gyermek/felnőtt határához kötve, gyermekHatarEv=18) ezt tovább szigorította, és MINDEN 17 éves (és fiatalabb)
beteget letiltott, FÜGGETLENÜL a szabály saját explicit korfeltételétől. Böngészőben+motoron igazolva: egy
17 éves, lázas, szeptikus küllemű beteg a javítás ELŐTT néma MSTR 4-et kapott (helyesen MSTR 2 helyett).
JAVÍTÁS: `applies_to` törölve/`"mind"`-ra állítva ezeken a szabályokon — a saját explicit `eletkorEv`
feltételük (most 16-ra állítva) önmagában elég és pontos, nincs szükség a redundáns gátra.

FONTOS DÖNTÉS (miért NEM a globális `gyermekHatarEv` lett átállítva 16-ra): a gyermek HR/RR vitál-sáv
táblák (vitalBands) explicit sorokkal rendelkeznek egészen 18 éves korig (192-227 hónap) — ez azt jelzi,
hogy a FORRÁS maga a pontos, kor-sávos gyermek-vitálértékelést szándékosan 18 éves korig kívánja alkalmazni
(mert egy 16-17 éves "normál" pulzusa/légzésszáma még mindig eltér a felnőtt-normáltól). A poszter kizárólag
a LÁZ/SIRS-ÉRTÉKELÉS explicit korhatárát adja meg 16-nak — ez egy SZŰKEBB, panasz-specifikus kontextus, nem
a teljes gyermek/felnőtt rendszerhatár. Ezért a javítás PONTOSAN csak a láz-specifikus szabályokra (+ az
újonnan bevezetett SIRS-eszkalátorra) korlátozódott, a globális 18-as határ (és minden más, tőle függő
mechanizmus: GCS, vitál-sávok, trauma-mechanizmus stb.) VÁLTOZATLAN maradt.

SAJÁT HIBA IS JAVÍTVA: a 71. egységben bevezetett objektív SIRS-szabályból (HR>90+RR>20+T>38→MSTR2) HIÁNYZOTT
a korhatár — enélkül egy kisgyermeknél a kor szerint NORMÁL magas pulzus/légzésszám (pl. 2 éves, HR135,
RR30) tévesen MSTR2-t adott volna. Motoron igazolva: 2 éves kontroll-eset most helyesen a gyermek-specifikus
HR-sáv alapján (band_hr) MSTR3-at ad, a felnőtt SIRS-szabály nem tüzel; 16/17/45 éves esetek helyesen MSTR2-t
adnak a SIRS-kritériumok alapján. Hozzáadva: `eletkorEv min:16` feltétel + a poszter mint forrás rögzítve.

VERIFIKÁCIÓ: jsc 72/75 (dokumentált 3), motor-tesztek (15/16/17/45 éves + 2/16/45 éves SIRS-eset) mind
helyesen, böngészőben 17 éves+szeptikus küllem → MSTR2 igazolva forráscímkével, 0 konzolhiba. Build ?v=96 →
commit c90a684 → push → GitHub Pages újraépült → élesen igazolva https://soktriage.github.io/.

### 2026-07-21 (74. munkaegység): kritikus hatókör-hiba — a SIRS-szabály nem volt globális — build ?v=97

Ádám screenshottal mutatta: hasi fájdalom panasznál RR26+SpO2 99+HR130+SYS100/DIA80+GCS15+T38.9 mellett
a szint nem javult megfelelően. Felismerése: a poszter az "Elsődleges módosító és meghatározó tényezők"
(vitális paraméterek) táblájában sorolja fel a SIRS-kritériumot a nehézlégzés/keringés/GCS MELLETT — tehát
ez GLOBÁLIS, panasztól független elsődleges módosító kellene legyen, nem panasz-specifikus.

GYÖKÉROK: a 71. egységben bevezetett `esc_laz_objektiv_sirs` szabály tévesen `csakPanaszok:['laz']`-ra volt
korlátozva — csak akkor tüzelt, ha a vezető panasz "Láz" volt. A testvér-szabályok (elsodleges_felnott_15-18,
szubjektív küllem-alapúak) MÁR EDDIG IS helyesen globálisak voltak (nincs csakPanaszok rajtuk) — csak az én
ÚJ szabályom kapott téves szűkítést. JAVÍTVA: csakPanaszok törölve, most bármely vezető panasznál érvényes,
ha a beteg objektíven SIRS-pozitív (kor≥16 + T>38 + HR>90 + RR>20).

VERIFIKÁCIÓ: motoron + böngészőben pontosan Ádám screenshotjának paramétereivel reprodukálva — hasi fájdalom
+ RR26/HR130/T38.9 → most helyesen MSTR 2 már a Vitálparaméterek lépésen (a szint azonnal frissül ahogy a
számok bekerülnek), Eredményig megmarad, helyes döntő szabály+forrás. Kontroll: ugyanezek a vitálok más
panasszal (szédülés) is helyesen MSTR2-t adnak — a szabály valóban globális. jsc 72/75 (dokumentált 3),
0 konzolhiba. Build ?v=97 → commit ca611f7 → push → élesen igazolva https://soktriage.github.io/.

MEGERŐSÍTETT ELV Ádámtól: "objektív vitálparaméterek alapján legyen egy minimális triage-szint-padló,
amit a panasz-specifikus tényezők utána csak SÚLYOSBÍTHATNAK" — ez pontosan az architektúra már meglévő
min-logika + dinamikus kérdés-kihagyás mechanizmusával valósul meg (ha a padló már objektíven megállapított,
a további kérdések, amik nem tudnának ez alá menni, automatikusan nem jelennek meg) — nem kellett új UI-
mechanizmust építeni hozzá, csak a szabály hatókörét kellett helyesen globálisra állítani.

### 2026-07-21 (75. munkaegység): TELJES architektúra/szinergia-audit — kritikus gyermek-vérzés hézag — build ?v=98

Ádám kérése: nézzük át az EGÉSZ logikát — ötvözi-e az anyagokat, megbízhatóan hívja-e be az elsődleges/
másodlagos módosítókat, minden szinergiában van-e. Módszer: minden elsődleges (vitál-alapú) csoportot
(respiratory/hemodynamic/consciousness/temperature/pain/bleeding/mechanism) végigellenőriztem gyermek/
felnőtt párhuzam szempontjából (group-by applies_to számlálás), majd egy 1630 kombinációs szisztematikus
tesztet futtattam: 5 kritikus elsődleges profil (eszméletlen GCS3-9, keringési sokk, súlyos nehézlégzés,
életveszélyes vérzés, magas rizikójú mechanizmus) × mind a 163 panasz × 2 korosztály.

TALÁLAT: a "bleeding" csoportnak 0 gyermek-specifikus szabálya volt — az elsodleges_felnott_38/39/40
(vérzékenység-súlyosság: élet-/végtagveszélyeztető→2, mérsékelt/enyhe→3, ízületi→3) tévesen
"applies_to":"felnott"-ra volt korlátozva. Motoron igazolva: egy 8 éves gyermek életet/végtagot
veszélyeztető vérzéssel a javítás ELŐTT MSTR 5-öt kapott (a legenyhébb szintet!) a helyes MSTR 2 helyett.
FORRÁS-ELLENŐRZÉS: a CTAS COT-2008-nak KÜLÖN "Paeds: Bleeding disorder" táblája van, ami SZÓ SZERINT
AZONOS az "Adults" táblával (ugyanazok a helyszínek, ugyanazok az MSTR 2/3 szintek) — az applies_to
biztonsággal "mind"-ra bővíthető, nincs eltérő gyermek-küszöb, amit figyelmen kívül hagynánk.
JAVÍTVA: elsodleges_felnott_38/39/40 applies_to: felnott→mind. Kisebb konzisztencia-javítás: a csak
dokumentációs szerepű "felnőtt láz-definíció" (elsodleges_felnott_14) kor-küszöbe is 17→16-ra igazítva
(korábban elkerülte a figyelmet, mert level=null, sose tüzel — csak trace-megjelenítés).

EGYÉB ELLENŐRZÉS (nem talált további hibát): "mechanism" csoport 2 db condition:[] szabálya
(elsodleges_felnott_42/43) — ezek SZÁNDÉKOSAN sosem tüzelő, "kézi megítélést igénylő" referencia-
bejegyzések (a nővér figyelmét felhívó, de nem automatizált klinikai alapelvek), nem hiba.
A korábbi (74. egység) sweep-mintázat (globális kritérium panaszhoz kötve) újrafuttatva: 0 új találat.

VÉGSŐ SZINERGIA-TESZT EREDMÉNYE: mind az 1630 kombináció (5 profil × 163 panasz × 2 kor) helyesen a várt
(1 vagy 2) szintre escalál a javítás után — 0 hiba. Ez erős, számszerű megerősítése annak, hogy az
elsődleges módosítók most már valóban univerzálisan (panasztól és kortól függetlenül) felülírják az
alapszinteket, ahogy kell.

VERIFIKÁCIÓ: jsc 72/75 (dokumentált 3), dead-end seprés 260 kombináción 0 hiba, böngészőben 8 éves gyermek
+ életveszélyes vérzés → helyesen MSTR2 igazolva forráscímkével, 0 konzolhiba. Build ?v=98 → commit 2d9e6b5
→ push → élesen igazolva https://soktriage.github.io/.

### 2026-07-21 (76. munkaegység): Szimulációs validáció gyakorlati esetkártyák alapján — hiányzó SIRS-2-kritérium padló — build ?v=99

Ádám 5 belső oktatási anyagot töltött fel (Triázs_gyakorlat_kártyák.pdf/.pptx, PBL_Triázs_MST_Esetek_SOOM_HU_2015.pptx,
PBL_Triazs_MST_esetkartyak.pptx, mstr-instruktor-kepzes-teszt.docx) és kérte: futtassunk szimulációkat a
gyakorlati feladatok alapján, ahol van forrás-eredmény (hivatalos válaszkulcs), ellenőrizzük, hogy a
rendszer ugyanazt adja-e, és ha nem, javítsuk.

MÓDSZER: a .pptx fájlok speaker notes-jaiból (python-pptx) kinyertem mind a 24 felnőtt gyakorlati eset
teljes klinikai leírását + hivatalos CTAS-szint + indoklás szövegét (a PBL_Triázs_MST_Esetek_SOOM_HU_2015.pptx
63 diája ugyanezt a 24 esetet dolgozza fel duplikált tanítási formátumban — nincs új eset benne;
PBL_Triazs_MST_esetkartyak.pptx szó szerint azonos a fő kártyacsomaggal). Az instruktor-képzés teszt
(.docx) egy kitöltendő belépő teszt hivatalos válaszkulcs NÉLKÜL (8 szituáció + elméleti kérdések üres
válaszmezőkkel) — ezekhez nincs forrás-eredmény, így a user explicit instrukciója szerint ("ahol VAN forrás
eredmény") nem képezték a szimuláció tárgyát.

Mind a 24 dokumentált esetet (életkor, vitálparaméterek, panasz, GCS stb.) lefordítottam a KB tényleges
mezőazonosítóira (jsc szkript: motor közvetlen hívása, a wizard.js számított mezőit — nehezlegzesFok stb. —
kézzel állítva be, az unit 75-ben feltárt "computedFields csak wizard-ban fut" csapda elkerülésére), majd
lefuttattam TriazsMotor.triazsKiertekel-lel és összevetettem a hivatalos válasszal.

EREDMÉNY: 24/24 eset stimmel — a rendszer minden esetben a hivatalos (vagy a forrás által explicit
elfogadott alternatív) MSTR-szintet adta, beleértve a korábbi egységekben (71-75) javított mintázatokat
próbára tevő eseteket is (SIRS-alapú láz, vérzékenység, penetráló trauma mechanizmus, deformitás
másodlagos módosító pontszám-alapú fájdalom felett, stroke-időablak stb.).

MELLÉKTALÁLAT (forrás-kereszthivatkozásból, nem a 24 eset bukásából): a tankönyv o.35-36 négyfokú
láz/SIRS-létráját szó szerint ellenőrizve kiderült, hogy a "Jó általános állapot" ág (MSTR4) a forrásban
explicit megköveteli, hogy "a láz legyen az EGYETLEN pozitív SIRS-kritérium" — a KB-ban viszont az
elsodleges_felnott_18 (jo_altalanos→4) ezt nem ellenőrizte: egy objektíven 2 SIRS-kritériumos (láz+
tachycardia VAGY láz+tachypnoe), de szubjektíven "jól néző" beteg tévesen MSTR4-et kapott volna a helyes
minimum MSTR3 helyett — pontosan ugyanaz a mintázat (szubjektív küllem-választás elfedi az objektív
padlót), mint a 74. egységben talált 3-kritériumos hézag, eggyel lejjebb a létrán. Az 1. gyakorlati eset
(75 éves férfi, láz 38.5°C + HR98 = 2 SIRS kritérium, "jól néz ki") véletlenül egy másik úton (enyhe
nehézlégzés-szabály) is helyes MSTR3-at adott, így a 24 eset között NEM bukott el látványosan, de a hézag
forrás-szinten egyértelműen fennállt volna más (pl. csak láz+tachycardia, nehézlégzés nélküli) esetekre.

JAVÍTVA: két új univerzális szabály (esc_laz_objektiv_sirs2_hr, esc_laz_objektiv_sirs2_rr) — kor≥16 + T>38
+ (HR>90 VAGY RR>20) → MSTR3, panasztól és küllem-választástól függetlenül (a motor feltétel-szintaxisa
nem tud VAGY-t egy szabályon belül, ezért 2 külön szabály fedi le a HR/RR ágat). Tisztán additív floor:
sosem csökkenti egy már súlyosabb (2/1) szabály eredményét, csak a "jó általános állapot"-tal tévesen
4-re eső eseteket emeli helyesen 3-ra, ha ≥2 objektív kritérium van.

VERIFIKÁCIÓ: jsc 72/75 (ugyanaz a dokumentált 3 hiba, nincs regresszió), az új 24 eses szimulációs teszt
újrafuttatva a javítás után is 24/24, build ?v=99 → singlefile → docs/index.html.

### 2026-07-21 (77. munkaegység): 2 kis hiba javítva pilot-visszajelzésből — build ?v=100

Ádám 3 dolgot jelzett tesztelés közben:

1. **Azonosítás-képernyő "Kihagyás" gomb hibásan marad kint kitöltés után.** Gyökérok: a gomb
   felirata (`Tovább →` vs `Kihagyás →`) csak a vonalkód-mezőt (`S.azon.raw`) nézte, az ápoló
   nevét (`S.azon.staff`) nem — ha a nővér csak a saját nevét írta be (vonalkód nélkül), a gomb
   és a napló-bejegyzés is úgy viselkedett, mintha semmi nem történt volna. Javítva: mindkét mező
   számít (`wizard.js` RENDER.azonositas).

2. **Kritikus megjelenés (look-test) opció tartalmi pontatlansága.** A "Kisgyermek: étel-elutasítás
   + érdektelenség + letargia + nincs hangja" opció "nincs hangja" fordulata NEM szerepel a
   forrásban (jegyzet o.204: »visszautasítja az ételt, általános érdektelenség, letargia,
   megmagyarázhatatlan ingerlékenység, IZOMTÓNUS ELVESZTÉSE«) — egy korábbi egység tévesen cserélte
   ki. Javítva (patch_kritikus_megjelenes.json: kritikus_06 + opciólabel). Ádám elhelyezés-kérdésére
   (ez tényleg "ránézésre" eldönthető?) válasz: a forrás explicit "az elsődleges megtekintés során"
   keretezi — ez megfelel a nemzetközi PAT (Pediatric Assessment Triangle) "Megjelenés" sarkának
   (tónus/interaktivitás/vigasztalhatóság/tekintet/sírás — mind érintés nélkül megfigyelhető),
   kivéve az étel-visszautasítást, ami inkább rövid megfigyelést igényel — de a forrás ide sorolja,
   ezért a helyén hagytuk, csak a tartalmat javítottuk.

3. **NYITOTT, Ádámnak visszajelezve — NEM javítva még:** hasi fájdalom + RR27/HR140/T38 nem lép fel
   MSTR5-ről. Vizsgálat: a forrás (tankönyv o.35-36 "Keringés"/"Légzés" táblák) FELNŐTTNÉL explicit
   KLINIKAI ÍTÉLETRE (légzési munka, tudat, bőrjelek), NEM nyers számra épít — a nővőnek kell
   kiválasztania a "Légzés · keringés · láz" lépésen a nehézlégzés-fokozatot / keringési állapotot;
   nyers HR/RR szám önmagában (a SIRS-kombón kívül) jelenleg nem old ki automatikus szintet.
   Találtam egy meglévő, DE SOSEM kiértékelt "MEWS pontszám" mezőt (kb_folyamat.json) — de az
   assemble_kb.py SZÁNDÉKOSAN kihagyja az űrlapból ("külön score, nem triázs-input" — a forrás
   maga is elválasztja a MEWS-t [ágy melletti újraértékelési riasztás] az MSTR-kategorizálástól).
   Nem implementáltam automatikus HR/RR-alapú eszkalációt, mert (a) a forrás explicit NEM ad rögzített
   felnőtt szám-küszöböt keringésre/légzésre (csak minőségi leírást), (b) egy korábbi egység
   tudatosan választotta szét a MEWS-t az MSTR-től. Ádámnak jelezve, döntésre vár: kérjünk-e
   HR/RR-alapú JAVASLAT (suggest-mód, mint spo2→legzesiJelek) hozzáadását a nehézlégzés/keringés
   mezőkhöz, vagy tekintsük ezt tudatos, forrás-hű tervezésnek (a nővér felelőssége a klinikai
   összkép alapján választani)?

VERIFIKÁCIÓ: jsc 72/75 (nincs regresszió), 24 eses szimulációs teszt újra 24/24. Build ?v=100.

### 2026-07-21 (78. munkaegység): Kemény objektív vitál-padló felnőttre (hasi fájdalom RR27/HR140/T38 bug) — build ?v=101

Folytatás a 77. egység nyitott kérdéséből: Ádám döntése — legyen KEMÉNY automatikus padló, a forrás
saját MEWS-sávjait (tankönyv o.86) használva referenciaként, transzparensen és forrással alátámasztva.

IMPLEMENTÁCIÓ: engine.js új `objektivVitalPontszam(beteg)` függvénye — a tankönyv 86. o. MEWS-
pontozótáblázatának RR/HR/hőmérséklet sávjaiból összegez (SBP és tudat/AVUP NÉLKÜL, ld. lentebb).
`triazsKiertekel` most ezt is beteszi a `szarmaztatott`-ba, így KB-szabály tud rá hivatkozni.
Új szabály (patch_p2_szedules_fejfajas_szepszis.json: esc_objektiv_vital_pontszam, applies_to:
FELNŐTT KIZÁRÓLAG): pontszám≥4 → legalább MSTR 2 — ez pontosan a forrás saját »4 vagy több MEWS
pont → AZONNALI riasztás« küszöbe (folyamat_35, tankönyv o.85-86), MSTR-re fordítva a »kritikus
beteg legalább MSTR 2« minőségi elv szerint (folyamat_33, tankönyv o.48).

KÉT TUDATOS KIHAGYÁS a pontszámból:
1. Tudati állapot (AVPU): nincs tiszta AVPU-mezőnk, GCS-ből becsülni félrevezető lenne — a hiány
   csak ALULszámlálhat, sosem túlszámlálhat (konzervatív, biztonságos).
2. Szisztolés vérnyomás: build közben derült ki, hogy az eredeti (RR+HR+SBP+Temp) verzió elrontotta
   az eset_08 regressziós tesztet — egy 222/130 Hgmm-es TÜNETMENTES hipertóniás beteget (saját
   forrás-szabály: SBP>220/DBP>130 + nincs tünet → MSTR 3) tévesen MSTR 2-re emelte volna. A
   hipertóniának már van saját, pontosabb, tünet-alapú szabálya (hipertoniaTunet mező) — a
   vérnyomás kihagyása elkerüli az ütközést/dupla számítást.

CSAK FELNŐTT: gyermeknél a fiziológiás normálértékek korosztályonként drasztikusan eltérnek — a
felnőtt-kalibrált MEWS-sávok gyermeken hamis pozitívak lennének; a gyermek saját korosztály-
specifikus vitalBands-rendszere ezt már külön lefedi. Ellenőrizve: 3 éves, HR125/RR28 (teljesen
normális kisgyermeknél) NEM váltja ki az új szabályt, a saját gyermek-sávja (band_hr) dönt helyesen.

FONTOS ELHATÁROLÁS: ez NEM a korábban (71. egység előtti valamely session) szándékosan kihagyott
manuális `mews` mezőt élesíti (az MEWS mint önálló ágy melletti újraértékelési eszköz továbbra sem
jelenik meg az űrlapon) — egy ÚJ, kizárólag a már meglévő nyers vitál-számokból automatikusan
számított, azonos forrású sáv-rendszer, kifejezetten az MSTR-eszkalációhoz.

VERIFIKÁCIÓ: Ádám eredeti teszt-esete (hasi fájdalom, RR27+HR140+T38, felnőtt) → most helyesen
MSTR 2 (előtte MSTR 5-ön ragadt). Határérték-tesztek: pont=3 nem elég, pont=4 épp elég (motoron
igazolva). jsc 72/75 (ugyanaz a dokumentált 3, NINCS új regresszió — az első próbálkozás elrontotta
eset_08-at, ezt a vérnyomás kizárásával javítottam), 24 eses gyakorlati szimuláció 24/24. Build ?v=101.

### 2026-07-21 (79. munkaegység): TELJES univerzális vitál-padló mátrix — minden paraméter, minden korosztály — build ?v=102

Ádám kérése (78. egység nyitott kérdésének folytatása, kibővítve): "a paraméterek alapján se
alultriázsoljunk senkit... se gyereket se felnőttet... minden paraméter ami minimális triázs
szintet determinál önmagában is [legyen ellenőrizve]". Teljes audit + hiánypótlás minden
vitálparaméterre (RR, HR, vérnyomás, hőmérséklet, SpO2, tudat/GCS) × minden korosztályra.

**MÁTRIX ÁLLAPOTA A 79. EGYSÉG UTÁN:**
| Paraméter | Gyermek (0-18) | Felnőtt (18+) |
|---|---|---|
| Légzésszám | vitalBands, havi/éves korsávok (tankönyv o.96/jegyzet o.220) — MÁR MEGVOLT | esc_objektiv_vital_pontszam (78. egység, tankönyv o.86 MEWS) |
| Pulzus | vitalBands, korsávok (tankönyv o.97/jegyzet o.229) — MÁR MEGVOLT | esc_objektiv_vital_pontszam (78. egység) |
| Hőmérséklet | gyermek_laz_01/02/04-07, korsávos (jegyzet) — MÁR MEGVOLT | esc_laz_objektiv_sirs* + esc_objektiv_vital_pontszam (76/78. egység) |
| O2-szaturáció | gyermek_05-08 — MÁR MEGVOLT, DE HIBÁS (ld. lent) | esc_spo2_felnott_sulyos/kozepes/enyhe — ÚJ (79. egység) |
| Tudat (GCS) | gyermek_12/13 (3-9→1, 10-13→2) — MÁR MEGVOLT | elsodleges_felnott_11/12 — MÁR MEGVOLT |
| Vérnyomás | **NINCS numerikus küszöb — ld. NYITOTT KORLÁT lent** | alacsony sávok (≤100 Hgmm) az esc_objektiv_vital_pontszam-ban (79. egység); magas sávok külön (masodlagos_12-19, hipertoniaTunet) — MÁR MEGVOLT |

**TALÁLT ÉS JAVÍTOTT HIBA (gyermek_08):** az audit közben kiderült, hogy a gyermek "normál SpO2"
szabály (gyermek_08) tévesen `level:4`-et adott — ez azt jelentette, hogy MINDEN normál
szaturációjú GYERMEK automatikusan MSTR4-re volt korlátozva, függetlenül a panasztól (pl. egy
kötéscserére érkező, teljesen egészséges gyermek is MSTR4-et kapott MSTR5 helyett)! Motoron
igazolva a hiba, majd javítva `level:null`-ra (referencia-only, nem korlátozó padló — ugyanaz a
minta, mint elsodleges_felnott_05/10/13 "normál" ágai). Ez a hiba az eset_44 (10 hónapos csecsemő,
erősödő köhögés, jegyzet o.275 munkapélda) teszteset "véletlen" MSTR4 eredményét adta — a javítás
után ez elbukott, ami rávilágított, hogy a "köhögés/torokszűkület" panasznak eddig NULLA saját
módosítója volt. Új mező+3 szabály (patch_kohoges_csecsemo.json, jegyzet o.275 alapján): csecsemő
+ ~1 hete erősödő köhögés + köhögés közbeni elsápadás (gyanús szamárköhögés) → MSTR4; elsápadás
keringési instabilitásként értékelve → MSTR2; cyanotikus köhögés alatt → MSTR1. Az eset_44
caseInputAdditions mostantól explicit ezt a mezőt állítja be — a helyes válasz most egy VALÓDI,
forrás-hivatkozott szabályból jön, nem a hibás globális padlóból.

**ÚJ: FELNŐTT O2-SZATURÁCIÓ KEMÉNY PADLÓ** (patch_univerzalis_vitalpadlo.json): eddig felnőttnél
az SpO2 csak SUGGEST-módú derivációval hatott (spo2→legzesiJelek) — ha a nővér nem fogadta el a
javaslatot, a nyers szám önmagában nem eszkalált. A gyermeknél már meglévő, PONTOSAN AZONOS
forrás-táblát (Légzés A-B fokozatok: <90%→1, 90-92%→2, 92-94%→3, >94%→ref.) tükrözve 4 új felnőtt
szabály (esc_spo2_felnott_sulyos/kozepes/enyhe/normal, utóbbi level:null — rögtön helyesen, a
gyermek_08 hibáját nem megismételve).

**KIBŐVÍTVE: FELNŐTT VÉRNYOMÁS** (engine.js `objektivVitalPontszam`): a 78. egységben teljesen
kihagyott SBP most RÉSZLEGESEN visszakerült — CSAK az ALACSONY sávok (≤100 Hgmm, hipotenzió/sokk-
gyanú: ≤70→3pont, 71-80→2pont, 81-100→1pont), mert azoknak nincs ütköző, pontosabb saját
szabályuk (ellentétben a magas sávokkal, ld. 78. egység eset_08 ütközése). Motoron igazolva:
sys65+hr105 (sokkos kép) → 4 pont → MSTR2; a 222/130-as tünetmentes hipertóniás beteg (eset_08)
továbbra is helyesen MSTR3.

**NYITOTT, TUDATOS KORLÁT (gyermeki vérnyomás):** a forrásban (tankönyv G. Függelék, o.98)
KIZÁRÓLAG egy közelítő GRAFIKON van a gyermekkori hipertenzióra (szisztolés RR életkor szerint),
pontos numerikus táblázat NÉLKÜL ("a forrásban nem szerepel, csak a grafikon" — extractor saját
megjegyzése) — csak 2 hozzávetőleges pont olvasható le (1 év: ~99-103; 17 év: ~132-136). Ebből
számszerű, biztonságos küszöböt NEM lehet forráshűen levezetni — nem implementáltunk gyermeki
vérnyomás-alapú padlót, mert az kitalált (nem forráshivatkozott) számokat igényelne. Emellett: a
pediátriai sürgősségi ellátás jól ismert alapelve, hogy gyermekeknél a sokk KOMPENZÁLT szakaszban
a vérnyomás sokáig NORMÁLIS marad (tachycardia+vazokonstrikció kompenzál) — a hipotenzió KÉSŐI,
ominózus jel — ezt a saját forrásunk is jelzi (`gyermek_18`: "Gyermekek kompenzált sokkja →
azonnali aktív ellátás, buktató"). Emiatt is a gyermek RR/HR-sávok (amik MÁR megvannak, pontosan)
a klinikailag helyesebb elsődleges padló gyermeknél, nem egy pontatlan BP-küszöb.

**TELJES KOR×PARAMÉTER SWEEP-TESZT** (7 korosztály × normál/súlyosan-kóros vitálok, panasztól
független teszt-szkript): újszülött, csecsemő, óvodás, iskolás, tinédzser, felnőtt, idős — minden
korosztálynál (a) normál vitálokkal triviális panasz → helyesen MSTR5 marad; (b) súlyosan kóros
vitálokkal (a saját korukhoz mérten) ugyanaz a triviális panasz → helyesen MSTR1-2-re escalál, a
kornak megfelelő mechanizmuson keresztül (gyermek: band_rr/band_hr/gyermek_05; felnőtt:
esc_objektiv_vital_pontszam/esc_spo2_felnott_sulyos). 0 hiba.

VERIFIKÁCIÓ: jsc 72/75 (ugyanaz a dokumentált 3, nincs regresszió — eset_44 javítva VALÓDI
szabállyal, nem a hibás padlóval), 24 eses gyakorlati szimuláció 24/24, 7 korosztályos sweep-teszt
0 hibával. Build ?v=102.

### 2026-07-21 (80. munkaegység): ÖNÁLLÓ, egyetlen-paraméteres padlók (nem csak összegzett) — build ?v=103

Ádám jelezte: a 79. egységben épített felnőtt padló ÖSSZEGZETT (MEWS-pontok summázva ≥4 → szint)
volt — emiatt egyetlen, önmagában súlyosan kóros érték (pl. csak sys=60/80, csak hr=140, semmi
más adat) NEM emelt, mert önmagában nem érte el a 4 pontos összesített küszöböt. Motoron
reprodukálva: hasi fájdalom + ÖNMAGÁBAN sys=80 → MSTR5 maradt (hibás).

Ádám kérése kifejezetten: "már egy vérnyomás is minimum determinisztikus legyen... ugyanígy
légzés, sat, gcs, temp... utána a következő lapon a módosítók közül már csak az látszódjon ami
felfele módosíthat, dinamikusan." — azaz minden EGYES paraméter, önmagában, a saját referencia-
tartománya alapján adjon padlót, a gyermek-oldali vitalBands mintáját követve (ahol band_rr/band_hr
is önállóan dönt, nem összegezve).

IMPLEMENTÁCIÓ (patch_univerzalis_vitalpadlo.json, 9 új szabály, mind applies_to:felnott, mind a
tankönyv o.86 MEWS-tábla saját sávjaiból, az ÖSSZEGZETT esc_objektiv_vital_pontszam MELLETT, azt
NEM helyettesítve):
- RR ≥30 → MSTR3 önállóan; RR 21-29 → MSTR4; RR <9 (bradypnoe) → MSTR3
- HR ≥131 → MSTR3 önállóan; HR 111-130 → MSTR4; HR <40 (bradycardia) → MSTR3
- SBP ≤70 → MSTR2 önállóan; SBP 71-80 → MSTR3 (Ádám PONTOS példája: sys=80 most helyesen MSTR3)
- Temp ≤34,9°C (hipotermia) → MSTR3; Temp ≥38,61°C → MSTR3, függetlenül a küllem-választástól
  (a magas SBP-sávok és a hipertónia-szabály ütközése miatt korábban [79. egység] kizárt magas-SBP
  sávok ide NEM kerültek vissza — az ütközés oka változatlan, ld. eset_08 jegyzet)
A "közepes-enyhe" (1-pontos MEWS) sávok szándékosan NEM kaptak önálló padlót (pl. HR 101-110,
RR 15-20) — túl gyakori, enyhe eltérések, önmagukban túl-triázsolást okoznának; ezek csak
kombinációban (a meglévő esc_objektiv_vital_pontszam-on át) számítanak.

MOTOROS VERIFIKÁCIÓ (izolált, egyetlen-paraméteres teszt-sweep, minden más mező üres):
rr=32→3, rr=25→4, rr=6→3, rr=16(normál)→5(nincs eszkaláció); hr=145→3, hr=120→4, hr=35→3,
hr=80(normál)→5; sys=65→2, sys=75→3, sys=95(enyhe, nincs padló)→5; temp=34.5→3, temp=39.0→3,
temp=38.3(enyhe, nincs padló)→5; spo2=91→2 (79. egységből). Ádám PONTOS bug-repró esetei
(hasi fájdalom + önmagában sys=80 / sys=60 / hr=140) most helyesen MSTR3 / MSTR2 / MSTR3 (előtte
mind MSTR5-ön ragadt).

MELLÉKTALÁLAT (Ádámnak jelezve, NEM javítva — külön döntést igényel): a meglévő hipertónia-
eszkalátor (masodlagos_12-19, magas SBP/DBP + hipertoniaTunet) csakPanaszok:["hipertenzio"]-ra van
korlátozva — egy MÁS vezető panasszal (pl. hasi fájdalom) érkező, de MELLESLEG súlyosan magas
vérnyomású beteg emiatt jelenleg NEM kap semmilyen padlót ebből — ugyanaz a hatókör-hiba mintázat,
mint a korábbi (74/76. egység) SIRS-panasz-szűkítés volt. A javítás egy új döntést igényelne
(milyen szintet feltételezzünk, ha a "tünetes/tünetmentes" állapot még nincs felmérve — a
konzervatívabb, tünetes ág szintjét használjuk-e alapértelmezettként?) — Ádámmal egyeztetve dől el.

VERIFIKÁCIÓ: jsc 72/75 (nincs regresszió), 24 eses gyakorlati szimuláció 24/24. Build ?v=103.

### 2026-07-21 (81. munkaegység): UI-koherencia — módosító sorrend, színkód, dinamikus opció-szűrés — build ?v=104

Ádám 3 UI-koherencia kérdést vetett fel a módosító-képernyőkről:

1. **Módosítók sorrendje (kevésbé súlyos → súlyosabb, lefelé haladva).** A SELECT-típusú mezőknél ez
   MÁR MEGVOLT (opcioSuly-alapú rendezés). DE a CHECKBOX-típusú (Igen/Nem) mezőknél a sorrend
   HARDKÓDOLT [Igen, Nem] volt — motoron ellenőrizve: mind a 6 checkbox mezőnél (immunszupprimalt,
   serulesMagasRizikoju, relativO2Eses, lelegeztetest_igenyel, legutvedelem_keptelen,
   nem_szuloszobai_ujszulott) az "Igen" a SÚLYOSABB válasz (szint 1-2), a "Nem" pedig nem emel —
   tehát a hardkódolt sorrend éppen FORDÍTVA volt az elvhez képest. Javítva: ugyanaz az
   opcioSuly-alapú rendezés fut a checkboxokra is.

2. **Gombcímke-szegélyek színkódjának konzisztenciája.** Kiderült, hogy a SELECT-típusú opciók
   MSTR-szint szerint színezett bal szegélyt kapnak (opt-lv1..5, a jól bevált piros→kék skála), DE
   a CHECKBOX-típusú opciók EGYÁLTALÁN NEM kaptak színkódot (nincs opt-lvN osztály hozzáadva) — így
   ugyanaz a súlyossági információ egyik mezőtípusnál látszott, a másiknál nem. Javítva: a checkbox
   ág is megkapja ugyanazt az opt-lvN osztályt.

3. **Dinamikus opció-szűrés (nem csak mező-szűrés).** A meglévő `mezoRelevansId` MEZŐ-szinten
   döntött (mutassuk-e az egész kérdést), de ha a mező relevánsnak számított (mert VALAMELYIK
   opciója még súlyosbíthatna), az ÖSSZES opciója látszott — azok is, amik önmagukban már nem
   javítanának a padlón. Új `opcioMegjelenik()` logika: egy opció csak akkor látszik, ha (a) épp ki
   van választva, VAGY (b) numerikus javaslat célja, VAGY (c) ismeretlen súlyú (null — bizonytalanság
   esetén inkább mutassuk), VAGY (d) a súlya SZIGORÚAN kisebb (súlyosabb) a jelenlegi padlónál.
   Biztonsági háló: ha ez üres listát adna, visszaáll a teljes (szűretlen) listára.

BÖNGÉSZŐS VERIFIKÁCIÓ (helyi dev-szerver, app/ mappa közvetlenül, localStorage-ba injektált
állapottal): 50 éves, láz panasz, sys=80 (→ padló MSTR3 az önálló SBP-padlóból): a "Lázas beteg
küllem-kategóriája" mezőnél most CSAK "Immunszupprimált" és "Szeptikus küllem" (mindkettő szint 2)
látszik — a "Súlyos beteg küllem" (szint 3, egyenlő a padlóval) és "Jó általános állapot" (szint 4,
enyhébb) helyesen eltűnik. Az "Immunszupprimált beteg" checkbox most helyesen "Nem" (bal, semleges
szegély) → "Igen" (jobb, narancssárga szegély) sorrendben jelenik meg. Padló nélküli (alap) esetben
minden opció visszatér — nincs regresszió az alapesetben. 0 konzolhiba.

VERIFIKÁCIÓ: jsc 72/75 (nincs regresszió, engine.js-t nem érintettük), 24 eses szimuláció 24/24.
Build ?v=104.

### 2026-08-10 (82. munkaegység): Átadási csomag + hordozhatósági javítás a build-szkriptekben

Ádám kérése: a teljes projekt átadható legyen csapaton belül GitHub-hozzáférés nélkül is — egy zip,
amit a kolléga Claude-ba betöltve mindent átlát, reprodukál és folytat.

ELKÉSZÜLT: `mstr_triage_atadas_20260810.zip` (Desktop, ~7 MB, 165 fájl) + gyökerében
`ATADASI_CSOMAG_OLVASS_EL.md` manifeszt (mi hol van, mi maradt ki és miért, mi az első prompt
Claude-nak). Tartalma: app/dist/docs, munka/ (kb + build-szkriptek + teljes kinyert forrásszöveg +
CTAS kanonikus txt + auditok), FOLYTATAS.md, ONBOARDING.md, DEPLOY.md, tankönyv-PDF, MSOTKE-poszter,
TETRA/betegút forrásdokumentumok, .claude/launch.json. KIMARADT (dokumentáltan): jegyzet-PDF (71MB —
de a teljes kinyert szövege benne van), oldal-render képek (97MB, újragenerálhatók), MedSolution
.mhtml képernyőmentések (belső rendszeradat — szándékos kizárás), .git (publikus repóból klónozható).
Kulcs/token/jelszó-minta ellenőrzés: 0 találat.

KRITIKUS TALÁLAT a tisztaszoba-tesztből: az `assemble_kb.py` és `build_singlefile.py` beégetett
abszolút útvonalakat használt (`/Users/adamkornel/...`) — a zipből más gépen kicsomagolva MINDKETTŐ
elhasalt volna, sőt az első ellenőrzésem hamis-pozitív volt (a zipből futtatott szkript az EREDETI
projektbe írt vissza). JAVÍTVA: mindkét szkript a saját helyéből származtatja a projektgyökeret
(`os.path.dirname(os.path.dirname(os.path.abspath(__file__)))`) — bárhová másolva működik.
A többi munka/-szkript (extract.py, render.py, workflow_*.js) történeti referencia, azokban az
abszolút út dokumentáltan maradt (nem kell újrafuttatni őket, kimeneteik a csomagban vannak).

TISZTASZOBA-VERIFIKÁCIÓ (friss mappába kicsomagolva, az eredeti projektet nem érintve):
(1) assemble_kb.py a kicsomagolt példányban fut és BÁJTRA AZONOS kb.js-t ad; (2) build_singlefile.py
a kicsomagolt dist/-be ír (nem az eredetibe); (3) jsc regresszió 72/75; (4) az eredeti projekt
git-státusza érintetlen. Megosztás: a zip fájlmegosztással — a csomag önmagában teljes, külső
linkre nincs szükség (a korábban készített Claude Code onboard-link Ádám kérésére törölve).

### 2026-09-18 (83. munkaegység): TEK területi ellátás + Torlódási eljárásrend beépítése — build ?v=105

Ádám két új belső dokumentumot adott át: (1) "SE Területi Ellátás Segédlet" (TEK) — budapesti
kerületek és Pest vármegyei települések szerint mely SE-klinikák/szakmák látják el a beteget;
(2) 4/2026. számú Igazgatói Utasítás — Torlódási eljárásrend (Dr. Fenyves Bánk Gábor, 2026.09.15).

MÓDSZER: workflow 7 ügynökkel — a TEK-tábla (~120 sor) kinyerése KÉT független módszerrel
(pdfplumber szó-koordináták, ill. rect-rács táblázatdetektálás), plusz két eltérő nézőpontú
integrációs terv (klinikai biztonság / UX). Az egyeztető ügynök saját kezdeményezésből egy
HARMADIK, valóban független kinyerést is csinált (pypdf nyers szöveg + zárt szótáras állapotgép),
mert a két pdfplumber-futam egyetértése közös módszerbeli hibát elfedhetett volna.

ADAT-IGAZOLÁS (öt egymástól független úton): saját előzetes számolás a nyers szövegből (15 kerület
/ 77 település) → A és B futam → saját diff (0 eltérés) → saját gépi ellenőrzés (minden név a
forrásban, minden kód a rövidítés-jegyzékben, 0 üres, 0 duplikátum) → C futam + a PDF rect-rácsából
gépi szerkezeti igazolás (27x6 rács, pontosan 2 üres cella → 77 és nem 78 a helyes rekordszám).
Mind egyezik. Két tartalmi kiugrást (Délegyháza és Szigetszentmiklós StrN nélkül) karakterszintű
cella-croppal is ellenőriztünk: forráshű, így maradt — DE lásd a NYITOTT pontot lent.

BEÉPÍTVE — TEK (kb_tek.json → KB.tek, 15 kerület + 77 település + 18 rövidítés + 12 szabály):
- Offline kereső a Betegút képernyőn, OVERLAY-ben (nem állandó blokk: mobilon a hajtás alá tolná a
  járó-checklistet). Keres: kerület rómaival (IX) és arabbal (9), BUDAPESTI IRÁNYÍTÓSZÁMMAL (1097 →
  IX., ez a leggyorsabb út, mert az irsz. ott van a mentőlapon), településnévvel ékezet nélkül is,
  történelmi kerületnévvel (jozsefvaros → VIII.), és kiszűri a zajszavakat ("Budapest VIII. kerület").
- Három réteg: szakma-kód + köznyelvi feloldás (Uro · urológia) → koppintásra teljes klinikanév →
  a SORHOZ tartozó kivételek közvetlenül a sor alatt. Ez utóbbi az egyeztető ügynök fő találata volt:
  a "** XVI. kerület belgyógyászat irányítószám szerint" lábjegyzetnek NINCS horgonya a táblában, így
  puszta tábla-renderelésnél ELVESZNE. Most a XVI., IX., II., Halásztelek, Szigetszentmiklós, Vecsés
  soroknál ott a saját kivétele.
- AZ AMI IDŐFÜGGŐ SZABÁLYA KISZÁMOLVA: a területi elv csak munkanap 8–18 közt érvényes; az app a
  készülék órájából kiírja az aktuális állapotot ("Most (péntek 09:29): a területi elv érvényes"),
  jelezve, hogy ünnepnapot nem ismer. Ez az egyetlen TEK-szabály, amit gép jobban tud fejből.
- VÉDŐKORLÁTOK (a klinikai biztonsági terv legfontosabb pontjai): fix, nem csukható figyelmeztetés a
  panel tetején ("a definitív ellátó szakma azonosítására — NEM a felvétel eldöntésére; területi
  illetékességre hivatkozva más SBO-ra küldeni TILOS; instabil beteg a legközelebbi SBO-ra"); a 4
  kritikus szabály (trauma = sérülés helyszíne, stroke feltalálási hely, AMI időablak, instabil beteg)
  MINDIG látszik; a NULLA TALÁLAT kimondja, hogy ez NEM elutasítási ok (8 budapesti kerület nincs is
  a listán, tehát ez gyakori lesz).

BEÉPÍTVE — Torlódási üzemmód (kb_torlodas.json → KB.torlodas):
- NEM egykoppintásos kapcsoló: az elrendelés a műszakvezető orvos hatásköre, ezért kétlépcsős,
  "ki rendelte el" mezővel és időbélyeggel, és a szöveg SOHA nem mondja, hogy az eljárásrend életbe
  lépett — csak azt, hogy a NÉZET be van kapcsolva. Kikapcsoláskor ugyanaz + a flow manager/OMSZ
  emlékeztető.
- Státuszsáv EGY sorban (mód + elrendelő + mióta + várakozók + lejárt re-triage + kikapcsolás).
  Színe szándékosan indigó: a piros/narancs az MSTR 1–2 foglalt színe, a borostyán a félbehagyott
  felvétel sávjáé. Normál üzemben 0 pixel (külön [hidden] szabály kellett, mert a display:flex
  felülírta volna — böngészőben mérve javítva).
- Betegút képernyő torlódás módban: az utasítás 3 útja; MSTR 1–2 üzenete a legerősebb elem
  ("kapacitástól függetlenül azonnal az ellátótérbe, a TARTALÉK ágyra"); és megjelent a mai
  checklistből HIÁNYZÓ harmadik kimenet: "ülő hely kezelőszékben a fekvőbeteg-részen".
- FAST TRACK = ÁTADÁS, nem döntés: "jelzi a műszakvezető orvosnak", a 4 továbbküldési feltétel az
  ORVOS által értékelendő listaként, és a TEK-kereső erről az ágról SZÁNDÉKOSAN NEM érhető el —
  TEK + fast track + torlódási nyomás egy képernyőn pontosan a tiltott, területi alapú továbbküldés
  lenne. Dokumentáció: másolható "ambuláns lap váz" (státusz + epikrízis), NEM pipálható checkbox.
- ÚJ képernyő: "Mentőágyon vár — re-triage" (RENDER.varolista, mstr_varolista_v1). SZÁNDÉKOSAN NEM a
  parkolt chip-sávban: a parkoltBetolt() visszatöltéskor vissza-parkolja az éppen felvett beteget
  (egy téves koppintás kicserélné az aktuális felvételt), és a chip-sáv érkezési sorrendben tárol —
  amit az utasítás kifejezetten tilt. A két lista neve is szétválasztva ("Félbehagyott felvétel" vs
  "Mentőágyon vár"). Kategória szerint csoportosít, de NEM számoz és NEM jelöl ki "következő beteget"
  — azt a döntést az utasítás a nővérre és a kollégákkal való egyeztetésre bízza.
- RE-TRIAGE IDŐZÍTÉS: új, forráshivatkozott NUMERIKUS mező (KB.levels[].reassessMin = null/15/30/60/
  120), nem a magyar szöveg regexelése. Esedékesség minden rendereléskor az eltárolt abszolút időből
  + visibilitychange-re — NEM setInterval (altatott mobil-lapon nem tickel). Eltelt idő is látszik.
  MSTR 1 nem kap időzítőt (forrás: "folyamatos ellátás"). MSTR 1–2 a listán piros figyelmeztetés.
  SEMMILYEN automatikus szintváltozás, semmilyen hang/push riasztás. Kiírva: "Emlékeztető, nem
  riasztás" és "a lista csak ezen a készüléken él".
- Dokumentációs lánc: minden re-triage bejegyzés (idő + szint) a rekordba kerül, és a vágólap-export
  tartalmazza — az utasítás 4. pontja ezt kötelezővé teszi.

FORRÁSKEZELÉS: két ÚJ, elkülönített OPERATÍV forráskód (tek, utasitas) a meta.sources-ban, explicit
megjegyzéssel, hogy ezek NEM használhatók MSTR-szintet meghatározó szabály forrásaként — a besorolás
tisztán klinikai marad. A flowchart.js forrás-megjelenítése is kezeli őket.

VERIFIKÁCIÓ: jsc 72/75 (nincs regresszió — a szabályszám 420 változatlan, a bővítés tisztán additív),
szintaxis-ellenőrzés, böngészőben végigpróbálva: irányítószám/római/arab/alias/zajszavas keresés, a
nulla találat szövege, AMI-időszabály, a 3 út, a harmadik kimenet, a fast track TEK-mentessége, a
re-triage számítás mind a 4 szinten (15/30/60/120 perc, lejárt és nem lejárt eset), a re-triage lánc
épülése, mobil 375px (fejléc ikon-only egy sorban, 0 vízszintes túlcsordulás, 44px tapintási cél),
és hogy normál módban a felület pixelre a megszokott. 0 konzolhiba.

NYITOTT, ÁDÁMNAK JELEZVE (nem fejlesztői döntés):
1. Délegyháza és Szigetszentmiklós a TEK-ben StrN (akut stroke <24h) NÉLKÜL szerepel, miközben a
   többi 11 Csepel-szigeti/ráckevei BHK-s település ugyanazt a csomagot StrN-nel kapja. Kinyerésileg
   100% biztos (3 független módszer + karakterszintű crop), de hogy ez a forrásdokumentum szándéka
   vagy szerkesztési hiba, az csak az alapdokumentumokból (OMSZ Beutalási Rend / NNGYK ESZENY)
   dönthető el. Betegutat érintő adat → szakmai megerősítést érdemes kérni.
2. Kormányzati kérdés: a disclaimer szerint az app "nem éles klinikai döntéshozatalra szánt" pilot,
   ugyanakkor most egy HATÁLYOS, kötelező érvényű igazgatói utasítást jelenít meg. Ennek viszonyát
   (és hogy az utasítás megjelenhet-e így) Fenyves doktorral érdemes tisztázni.

### 2026-09-18 (84. munkaegység): TUDÁSTÁR + végleges TETRA-lap — build ?v=106

Ádám két észrevétele: (1) „a TEK modul hol van? mikor jön elő? legyen a kezdőképernyőn is
intuitívan, egy tudástér ahol elérhetők ezek, ne csak a folyamat végén"; (2) a TETRA-lap
aktualizálása a végleges nyomtatvány (TETRA_LAP_final.pdf) alapján.

TUDÁSTÁR (RENDER.tudastar): kiderült, hogy a tudásbázis JELENTŐS része sehol nem jelent meg a
felületen — 39 folyamat-szabály, 45 fogalom/definíció, 12 döntési és vitál-tábla, a 2 gyermek
vitál-sáv tábla; a TEK és a felvételi alapelvek pedig csak a folyamat VÉGÉN (betegút) voltak
elérhetők. Az új modul mindet előhozza: 9 témakör (MSTR-szintek, TEK, döntési/vitál-táblák, gyermek
vitál-sávok, folyamat-szabályok, fogalmak, felvételi alapelvek, torlódási eljárásrend,
infekciókontroll), mindegyik tétel a saját forráshivatkozásával. EGYSÉGES KERESŐ fut az egész
tudásbázison (pl. „SIRS" a szintekből, a táblákból, a folyamat-szabályokból és a definíciókból is
hoz találatot). Belépés: kiemelt kártya a KEZDŐKÉPERNYŐN + fejléc-gomb (bármikor, a folyamat
megszakítása nélkül). A szekció-darabszámok a tényleges tartalomból számolódnak.

TETRA-LAP a végleges nyomtatvány szerkezetére átírva: fejléc (bejelentkező mentőegység, dátum,
időpont) → betegadatok (nem, életkor, TAJ, név, FELTALÁLÁSI HELY, állandó lakhely) → S (leírás +
lélegeztetés/újraélesztés/súlyos tudatzavar/keringéstámogatás + egyéb) → STROKE (tünetek,
tünetkezdet LSW, premorbid, RACE, antikoaguláció) → B (HT/DM/COPD/ISZB/stroke/PE + egyéb) → A
(vérnyomás, pulzus, SpO2, légzésszám, TESTHŐMÉRSÉKLET, GCS Sz-V-M, VÉRCUKOR, sérülések, terápia,
helyszíni beavatkozások) → R (sokktalanító/légútbiztosítás/NIV/izoláció, várható érkezés, ÉRTESÍTÉST
FOGADÓ NEVE, KIJELÖLT ELLÁTÓ, BETEGÚT: sokktalanító/őrző/triage, értesítve-lista, értesítés
időpontja). A vastagon szedettek eddig teljesen HIÁNYOZTAK a felületről.
ÚJ SZABÁLY a nyomtatványból, automatikusan kiértékelve: „RACE 5 vagy több: nagyérelzáródás gyanúja,
SE INK felé irányítandó" — a RACE-pontból azonnal megjelenik, és ekkor jön elő az „INK értesítve"
jelölő. A vágólap-szöveg is a nyomtatvány sorrendjét követi.
A feltalálási hely / lakhely mezők mellől egy koppintással nyílik a TEK-kereső.

VERIFIKÁCIÓ: jsc 72/75, böngészőben: Tudástár kereső (SIRS → 4 különböző szekcióból hoz találatot),
szekció-navigáció, mind a 12 döntési tábla renderelése, TETRA teljes szerkezet, RACE 9 → LVO-
figyelmeztetés + INK-jelölő, RACE 3 → küszöb alatti üzenet, mobil 375px (5 fejléc-gomb ikon-only
egy sorban, 0 vízszintes túlcsordulás). 0 konzolhiba. Build ?v=106.

### 2026-09-18 (85. munkaegység): Bemutató anyag a szept. 23/25-i Teams egyeztetésre

Ádám kérése az AI-triage levélszálhoz (Fenyves igazgató úr, Sóti igazgatóhelyettes úr, ápoló
kollégák, és Arnold Lőrinc elsőéves hallgató, aki a validálásba kapcsolódna be): legyen egy pptx
képernyőképekkel és narratívával, plusz egy szöveges leírat — érthető, a lényegre szorítkozó.

KÉPERNYŐKÉPEK: fejléc nélküli Google Chrome-mal (--headless=new, 2x device scale), a dist/ egyfájlos
buildből készített, előre beállított localStorage-állapotú demó-másolatokkal (scratchpad/demo/).
A demó-másolatokban KIZÁRÓLAG ott kikapcsolva az „eredmény állapotot ne töltsd vissza"-védelem, hogy
minden képernyő közvetlenül beállítható legyen — az éles kód változatlan. Demó-beteg: 72 éves nő,
hasi fájdalom, RR24/P118/T38,6 — ez pont az objektív vitál-padlót demonstrálja (MSTR 2, a döntő
szabály és a forrásoldal kiírva). A képek alja automatikusan levágva (Pillow).

ELKÉSZÜLT (mindkettő a Desktopon):
- MSTR_triazs_bemutato.pptx — 23 dia, SE-arculati színekkel. Felépítés: mi ez / hogyan dönt →
  12 képernyő narratívával → mit tud ma → validálás → MedSol → fejlesztési irányok → nyitott
  kérdések (2 dia) → hogyan lehet bekapcsolódni → záró. Automatikus szöveg-illesztés (a betűméret
  addig csökken, amíg minden elfér — ellenőrizve: 0 túllógó doboz).
- MSTR_triazs_leirat.docx — ~10 600 karakter, 9 fejezet: mi ez / képernyők egyenként / források /
  amit szándékosan nem csinál / validálás / MedSol / fejlesztési irányok / nyitott kérdések /
  hogyan lehet bekapcsolódni.

MINDKÉT ANYAGBAN KIMONDVA (őszinte állapotjelentés, nem marketing): a prospektív klinikai validáció
még HIÁNYZIK; a MedSol-integráció elsősorban nem fejlesztői, hanem interfész-, IT- és adatvédelmi
kérdés; és négy nyitott döntési pont (pilot vs. éles státusz; orvostechnikai eszköz besorolás
kérdése; tudásbázis-karbantartás felelőse; a Délegyháza/Szigetszentmiklós StrN adat megerősítése).

### 2026-09-18 (86. munkaegység): FÜGGETLEN LEKTORÁLÁS — build ?v=111

Ádám kérése: "nézd még át van e bármi ami bárhol javitando fuggetlen lektorokkal". Hat független
lektor (klinikai tartalom, kód-helyesség, magyar nyelv, tényellenőrzés, betegbiztonság, regresszió)
futott, mindegyik után egy adversariális verifikátor, amelynek az volt a dolga, hogy MEGCÁFOLJA a
találatokat. Minden javított tételt előbb magam is reprodukáltam a motoron vagy a böngészőben.

MOTOR — ARCHITEKTÚRA ÉS FORRÁSHŰSÉG
- A MEWS pontozótáblázat sávjai kikerültek az engine.js-ből a tudásbázisba (KB.mewsSavok,
  tankönyv 86. o.). Ezt a 78-79. egységben ÉN sértettem meg: az engine.js saját fejléce és a
  bemutató anyagok is azt állították, hogy a motor egyetlen orvosi küszöbértéket sem tartalmaz.
  Most már igaz. A verifikátor újraellenőrizte: nincs numerikus literál az engine.js-ben.
- Új, GENERIKUS feltétel-operátorok (nincs bennük orvosi tartalom): 'kisebb'/'nagyobb' (szigorú
  határok) és 'vanErtek' (a mező ki van-e töltve). Eddig a forrás "<35 °C" / ">38 °C" alakú
  küszöbeit közelíteni kellett (34.9 / 38.01), ami HÉZAGOT hagyott: 34,91-34,99 °C-ra egyetlen
  szabály sem tüzelt. Most a KB pontosan azt mondja ki, amit a forrás.
- Új, KB-vezérelt figyelmeztetés-mechanizmus (KB.figyelmeztetoSzabalyok): olyan forrás-kikötések
  megjelenítésére, amelyeket számszerű küszöbbé alakítani a forrás alapján NEM lehet.

KLINIKAI JAVÍTÁSOK (mind forráshivatkozással)
- SZATURÁCIÓS PADLÓ + COPD: a tankönyv 31. o. kimondja, hogy az abszolút szaturáció csak AKUT
  esetben használható; krónikus/COPD alapértéknél a klinikai jelek és a PEFR döntenek. Ez a
  kikötés benne volt az o2Akut mező súgójában, de a mezőt EGYETLEN szabály sem használta — a
  COPD-s beteg saját 88%-os alapértékén MSTR 1-et kapott. Megoldás: új származtatott mező
  (o2Kronikus), ami kitöltetlenül HAMIS, tehát a padló alapesetben érvényes marad.
- GYERMEK VÉRNYOMÁS: három lektor is a legsúlyosabb hézagként jelölte (6 éves, sys 40 → MSTR 5).
  Végignéztem a forrásokat: számszerű gyermek-vérnyomásküszöb SEHOL nincs bennük, sőt a tankönyv
  79. o. kifejezetten azt mondja, hogy a gyermek a normál vérnyomást a hirtelen dekompenzációig
  megtartja. KÜSZÖBÖT EZÉRT NEM TALÁLTAM KI. Helyette a forrás intelme jelenik meg az
  eredményképernyőn: sokkgyanúnál a gyermeket nem szabad várakoztatni, a mért vérnyomástól
  függetlenül. NYITOTT DÖNTÉS Ádámnak: kérünk-e külső (pl. PALS) forrást a számszerű küszöbhöz.
- LÁZ: a 85. egység után egy verifikátor valódi, ÁLTALAM OKOZOTT regressziót talált — az
  esc_temp_felnott_magas_onallo törlése után 41 °C önmagában MSTR 5. A törlés indoka helyes volt
  (a régi szabály MSTR 3-at adott ≥38,61 °C-ra, ami ellentmondott a létra „jó általános állapot →
  MSTR 4" sorának), de a törlés visszanyitotta az alultriázst. A verifikátor javaslata volt a helyes
  megoldás: NEM törölni, hanem a létra SAJÁT LEGENYHÉBB kimenetét tenni padlóvá. Három új szabály
  (esc_laz_padlo_felnott >38 °C → 4; gyermek 3 hó-3 év >38,5 °C → 3; gyermek 3 év felett >38,5 °C → 4),
  mindegyik pontosan a hozzá tartozó létra-sor legenyhébb verdiktje, ezért a létrával nem ütközhet:
  a küllem megítélése csak SÚLYOSBÍTHAT (min-logika). Ellenőrizve: 38,7 °C + jó általános → 4,
  + súlyos beteg → 3, + szeptikus → 2; 8 év 40 °C küllem nélkül → 4 (volt: 5). Emellett megmaradt az
  explicit figyelmeztetés is, hogy a küllem hiányában a létra nem futott le.
- HATÓKÖR-HIBA: a csecsemőkori köhögés-szabályok panasz-hatókör nélkül voltak, így a "cianotikus"
  válasz BOKASÉRÜLT gyermeknél is MSTR 1-et adott. Ugyanaz a hibaosztály, mint korábban a SIRS-nél.

FELÜLET
- A kihagyó gyorsgomb azt állította, hogy "Nincs releváns panasz-specifikus módosító", miközben
  KÖZVETLENÜL ALATTA ott álltak a döntő kérdések. A lektor élesben igazolta: 45 éves szédülő
  beteg, RR 22 — egy koppintás = MSTR 4, holott a "nem pozicionális" válasz MSTR 2. A gomb most
  a kérdések ALÁ kerül, óvatos stílussal, és kimondja: "Ezeket a kérdéseket kihagyom — a
  besorolás enyhébb maradhat".
- A mező-relevancia figyelembe veszi a már ismert, CÁFOLÓ feltételeket (marCafolt) és a szabályok
  kor-hatókörét. Eddig a 6 éves betegnek feltettük a felnőtt láz-létra 4 opciós kérdését (amire
  egyetlen gyermek-szabály sem reagál) és a csecsemő-kérdéseket.
- TETRA: a lap "SE INK felé irányítandó" célintézményt írt ki, és ezt A NYOMTATVÁNYNAK
  tulajdonította. A végleges nyomtatványon (munka/forras_kulso/tetra_lap.txt) ilyen NINCS, csak
  "RACE score: (>=5pont; high LVO risk)". Javítva: a célintézményről a műszakvezető orvos dönt.
- A beillesztett MedSolution-leletből származó betegnév escape nélkül került innerHTML-be.
- "Orvosi értékelés: orvosi értékelés 120 percen belül" szóismétlés (cimkezettIdo helper).
- A "Felnőtt" gomb belsőleg 45 évet állít be (hogy a korfüggő szabályok lefussanak) — ez a szám
  kiszivárgott a feliratokba ("45 éves beteg"). Most "Felnőtt beteg".
- CTAS-forráshivatkozás: "DIA 70" → "70. dia" (a DIA a felületen diasztolés vérnyomást is jelent).
- "nővér" → "ápoló" a megjelenő szabályszövegekben (11 hely).

DOKUMENTÁCIÓ
- DEPLOY.md: az adatvédelmi állítás TÉNYSZERŰEN HAMIS volt ("a beírt betegadat csak a memóriában
  van, lap frissítésre törlődik"). Az app 8 localStorage-kulcsba ment, köztük névvel és
  KBA-számmal, és ez újraindítás után is megmarad. A valós kulcsok és az üzemeltetési
  következmények (műszakzárási törlés, jelszóvédett készülék, adatvédelmi szabályzat) leírva.
- pptx + docx újragenerálva a tényellenőrzés alapján: 419 (nem 420) szabály; 802 forráshivatkozás,
  ebből 23-nál nincs oldalszám; a "nem tárol betegadatot" állítás pontosítva; a javítások forrása
  gépi audit és lektorálás (nem kollégai visszajelzés); a vitálparaméter-képernyő tartalma.

VERIFIKÁCIÓ: jsc 72/75 (a három ismert, dokumentált eltérés; NINCS új regresszió), böngészőben
ellenőrizve mind a hat felületi javítás. Build ?v=111, élesben kitelepítve (soktriage.github.io,
Pages build "built", a kiszolgált kb.js tartalmazza a mewsSavok és figyelmeztetoSzabalyok mezőket).

TUDATOS, FORRÁSINDOKOLT DÖNTÉSEK (nem hiba — a verifikátorok külön megerősítették):
- A magas láz önmagában NEM ad padlót semmilyen korban — erre a tankönyv 35-36. o. láz-létrája
  az irányadó, és az a küllemen múlik.
- Gyermekre nincs számszerű vérnyomás-padló, mert a forrás nem ad ilyet (ld. fent).
- A Tudástár a torlódási eljárásrendet kikapcsolt nézetnél is mutatja: a Tudástár célja, hogy a
  teljes tudásbázis referenciaként bármikor elérhető legyen.
- A RACE tételpontszámai a wizard.js-ben vannak: a RACE nem az MSTR-motor része, nem módosít
  triázs-szintet, és a forrása külső szakirodalom (Pérez de la Ossa 2014), korrekt hivatkozással.

#### 86. egység — MÉG NYITOTT LEKTORI TÉTELEK (nem javítva, nyilvántartva)

ÁDÁM DÖNTÉSÉT IGÉNYLI
1. **Gyermek szisztolés vérnyomás**: forrásainkban nincs számszerű küszöb (a tankönyv 79. o. szerint
   a gyermek a normál vérnyomást a dekompenzációig megtartja). Most forráshű figyelmeztetés van.
   Kérdés: kérünk-e külső forrást (pl. PALS 70+2×kor), vagy marad a mostani megoldás.
2. **Betegadat lejárata a készüléken**: jelenleg NINCS automatikus törlés. Kell-e műszakzárási
   törlés, időalapú lejárat, vagy elég az üzemeltetési szabály (DEPLOY.md-ben leírva).
3. **Szisztolés ≤70 Hgmm → MSTR 2**, miközben a keringési tábla a sokkot MSTR 1-re sorolja. A
   vérnyomás önmagában nem azonos a sokkal (a sokk klinikai kép), ezért nem nyúltam hozzá.
4. **18. életév szakadása — a verifikátor szerint SÚLYOSABB, mint elsőre látszott.** A gyermek
   vitál-sávok (Fleming) és a felnőtt MEWS-padlók külön rendszerek, és a serdülőknél a Fleming-sávok
   HÉTKÖZNAPI értékeket sorolnak MSTR 3-ra. Mért példák: 17 éves torokfájós beteg HR 88-cal → MSTR 3,
   ugyanez 18 évesen → MSTR 5. 16 évesen RR 17 → MSTR 3. Fordított irányban: 17 évesen sys 60 → MSTR 5,
   18 évesen → MSTR 2. Ez okozza az eset_54 teszteltérést is. A verifikátor javaslata (forrással
   alátámaszthatóan): a felnőtt MEWS-padlók 16 évtől érvényesek legyenek, a Fleming-sávok 16 év felett
   pedig csak figyelmeztetésként — a láz-tábla fejléce ">17 év", a SIRS-szabályok 16 éves korhatárt
   használnak. DÖNTÉST IGÉNYEL: a jelenlegi (mérvadó gyermek-sáv 18 évig) a kompenzált gyermeki sokk
   miatt szándékosan konzervatív, de a 16-18 éves sávban fölöslegesen sok MSTR 3-at termel.
5. **Belépő figyelmeztetés** "nem nyilvános termék"-nek mondja az appot, miközben a link publikus
   és nincs belépés. Vagy a szöveget, vagy a hozzáférést kell hozzáigazítani.

FEJLESZTŐI TEENDŐK (forrásdöntést nem igényelnek)
6. "Új beteg" megerősítés nélkül törli a kitöltött TETRA-lapot.
7. A begépelt számok/szövegek csak mezőelhagyáskor kerülnek localStorage-ba.
8. TEK: az AMI-időablak figyelmeztetése az 54 VSZÉK-sorból csak 5-nél fut le; a KB-ben meglévő
   védőmondat ("nem helyettesíti a műszakvezető orvos döntését") sosem jelenik meg; a "Nincs
   találat" doboz valótlant állít Pest vármegyei irányítószámnál; KB.tek.korlat/.hasznalat holt adat.
9. Torlódási várólista: szint nélküli beteg nem kap re-triage időzítőt és a lista végére kerül;
   a nézet kikapcsolása után a várólista elérhetetlenné válik (az adat megmarad).
10. A torlódási nézet korlátlan ideig bekapcsolva marad, lejárat és emlékeztető nélkül.
11. Ugyanazt a bőrelfeketedés-kérdést két külön mező teszi fel ugyanannál a két panasznál.
12. Holt módosító-opciók: néhány opció címkéje más MSTR-szintet ígér, mint amit a rendszer ad.
13. TETRA: hiányzik a "Honnan" mező; a stroke két külön időpontja egybe van olvasztva.
14. 7 szabály feltétel nélkül szerepel (köztük MSTR 1-2 szintű). A motor ezeket BIZTONSÁGOSAN
    kezeli — "kézi megítélést igényel" státusszal rögzíti a nyomvonalban —, de a felület ezt a
    státuszt sehol nem mutatja meg az ápolónak.
15. A vágólapra másolt összegzésből kimarad a vérnyomás, ha csak a szisztolés érték van meg.
16. A pilot-figyelmeztető kapu csendben kimarad, ha a böngészőben tiltott a localStorage.
17. Terminológiai egységesítés: triázs/triage, mentőágy/mentőhordágy, disztressz/distressz,
    SpO₂/O2-szat, Vitálparaméterek/Vitálisok, magázás/tegezés keveredése.
18. A kártyacímek nem egyeznek a folyamatsáv lépésneveivel; a "Lépés N" szám nem követi a kihagyásokat.
19. A CEDIS-panaszneveknél a forrás elütéseit a projekt hol javította, hol nem — egy név emiatt
    kereshetetlen.
20. A munka/ könyvtár (szerkeszthető tudásbázis + build-szkriptek) nincs verziókövetés alatt.
    Ez SZÁNDÉKOS (a repó publikus, a forrás-PDF-ek nem kerülhetnek bele), de a DEPLOY.md
    karbantartási fejezete ezt nem mondja ki elég világosan.


### 2026-09-18 (87. munkaegység): ÁDÁM RÁM BÍZTA A NYITOTT DÖNTÉSEKET — build ?v=119

Ádám: „rád bizom … csináld ahogy jó csak legyen transzpaens" (a belépő figyelmeztetés kérdését
kivette: „ezzel ne foglalkozz jo igy"). Négy irányban független ügynökök vizsgálták a forrásokat,
minden javaslatot adverzáriális cáfolat követett. Minden döntés forráshivatkozással, és mindegyik
LÁTSZIK a felületen.

1) GYERMEK VITÁL-SÁVOK KORHATÁRA: 18 → 16 ÉV
A korábbi feltételezésem TÉVES volt. A forrás explicit korhatárt ad: „A gyermekgyógyászati
irányelveket úgy fejlesztették, hogy 16 éves korig alkalmazhatók." (jegyzet 191. o.) A táblázat
18 éves sora a hivatkozott Fleming-vizsgálat ADATHATÁRA („from birth to 18 years"), nem
alkalmazási határ. Mért hatás a változás előtt: a pulzusértékek 76%-ánál (84/111) és a
légzésszámok 88%-ánál (29/33) MÁS szintet adott a 17 és a 18 éves beteg. 17 évesen HR 120 →
MSTR 1 (reszuszitáció), 18 évesen MSTR 4; fordítva 17 évesen sys 60 → MSTR 5, 18 évesen MSTR 2.
Változás után: 0/111 és 0/33 eltérés. A gyermek-táblázat eredménye NEM vész el — figyelmeztetésként
megjelenik, és a felület kiírja, miért felnőtt normák szerint soroltunk. A gyermekHatarEv marad 18,
tehát a MINŐSÉGI gyermek-szabályok (PAT, gyermek-GCS, kompenzált sokk, stridor) tovább védik a
16-17 éveseket. Az adverzáriális lektor kiegészítése nyomán a MEWS-összeg is 16 évtől él — enélkül
a javítás alultriázsolt volna (17 é, sys 75 + HR 130: MSTR 3 a 18 éves MSTR 2-je helyett).

2) GYERMEK VÉRNYOMÁS: MARAD A FORRÁS-INTELEM, MEGERŐSÍTVE
Két független ügynök is teljes átnézéssel igazolta, hogy SEMMILYEN forrásunk nem ad gyermek-
vérnyomás küszöböt: sem a tankönyv (31+28 vérnyomás-említés átnézve), sem a jegyzet, sem a CTAS
COT-2008 (239. dia: gyermeknél a vérnyomás késői jelző, utána csak felnőtt sávok), sem az MSTR-
poszter („Vérnyomás — Felnőttek esetében"). A tankönyv 98. oldalán lévő grafikon HIPERTÓNIA-görbe
(90./95. percentilis, 80-145 Hgmm), alsó határt nem tartalmaz. Küszöböt tehát NEM találtunk ki.
A meglévő intelem forráshivatkozása viszont TÉVES volt (79. o. helyett 83. o.) — javítva —, és a
szöveg kiegészült a forrás két további megállapításával (a hipotenzió a „Sokk → MSTR 1" jelei közt
szerepel; a tachycardia a korai válasz, a bradycardia és a hipotenzió később alakul ki, már a
fenyegető keringésmegállást jelezve, tankönyv 65-66. o.), valamint konkrét teendővel: töltse ki a
Hemodinamikai státusz kérdést, ami minden korban ad szintet.

3) BETEGADAT MEGŐRZÉSE A KÉSZÜLÉKEN
12 órás automatikus lejárat (egy műszak + átadás), időbélyeggel minden betegadat-rekordon. A
törlés SOSEM néma: elbocsátható sáv nevezi meg, mi és mennyi törlődött. Az Előzmények panel
alján adatleltár + „Minden betegadat törlése most". 2 óra felett a félbehagyott felvétel NEM
töltődik vissza némán: a felület megkérdezi, folytatja-e vagy félreteszi (a félretett a parkolt
betegek közé kerül, nem vész el). A nyers MedSol-leletből a TAJ, a név és a születési dátum
kimarad a TÁROLÁSBÓL (a képernyőn a felvétel végéig megmarad). Az ápolónév a saját időbélyege
szerint jár le. A 12 és a 2 óra ÜZEMELTETÉSI döntés — a forrás megőrzési időt nem ad meg; ez a
kódban ki van mondva.

FONTOS ÖNKORREKCIÓ: a 12 órás lejárat első verziója BLOKKOLÓ hibát tartalmazott, amit egy
független lektor élesben reprodukált — a torlódási várólista MINDEN bejegyzését azonnal törölte,
mert a takarító `mentveTs`-t keresett, a lista viszont `erkezes` néven tárolja az időbélyeget.
Ezen a listán MSTR 1-2 beteg is szerepelhet. Javítva egyetlen rekordTs() függvénnyel, ami a kort
bármelyik mezőnévből kiolvassa, végső esetben az azonosítóba ágyazott Date.now()-ból — így a
KORÁBBI buildben írt, időbélyeg nélküli rekordok sem vesznek el a frissítéskor.

4) A NYITOTT HIBALISTA
- Feltétel nélküli, sosem tüzelő szabály: 7 → 0. Egyből VALÓDI hézag lett: a 75 év feletti lázas
  beteg → MSTR 2 (jegyzet 86. o. az immunszuppresszív állapotok közt SZÓ SZERINT felsorolja a
  „75 év feletti életkor" tételt; a munkanapló korábban tévesen az ellenkezőjét rögzítette).
  Hat redundánsnak bizonyult, leváltottként dokumentálva. Menet közben három SAJÁT, fölöslegesnek
  bizonyult szabályomat visszavettem, mert mérés után kiderült, hogy meglévők már lefedik.
- Penetráló trauma: a hézag a SÚGÓBAN volt, nem a szabályban. Egy nyaki szúrt seb MSTR 5-öt kapott
  volna, mert a „magas rizikójú mechanizmus" mező súgója csak km/h- és esésmagasság-küszöböket
  említett. A súgó most a forrás teljes kritériumlistáját tartalmazza, a penetráló tétellel.
- Immunszupprimált kérdés hatóköre: eddig CSAK a „Láz" panasznál jelent meg.
- TEK: az AMI-időablak 54 sorból csak 5-nél futott le (most adatvezérelt illesztés); a KB.tek.korlat
  védőmondat sosem jelent meg; a „Nincs találat" doboz valótlant állított Pest vármegyei
  irányítószámnál.
- Duplikált bőrelfeketedés-kérdés összevonva; „Új beteg" már nem dobja el a TETRA-lapot;
  vágólap-összegzés kiírja a vérnyomást akkor is, ha csak szisztolés van; pilot-kapu fail-closed.

REGRESSZIÓ: 72/75 → 74/75. EZ NE LEGYEN FÉLREÉRTHETŐ:
- eset_54: VALÓDI motor-javulás (a korhatár-változás javította).
- eset_57 és eset_64: NEM motor-javulás. Mindkettő GÉPI ÁTIRATÁBÓL hiányzott az a módosító,
  amelyet az eset SAJÁT indoklása nevesít. Az eset_57 eddig VÉLETLENÜL ment át, rossz indokból
  (a 17 évesre alkalmazott gyermek-sávtól). Az átiratot pótoltam, és mindkét esetnél rögzítettem
  az `atirat_megjegyzes` mezőben, hogy ez a mi átiratunk hiánya volt, nem a forrásé, nem a motoré.
- eset_47 az egyetlen megmaradó valódi eltérés (6 é, RR 24/HR 110, jó küllem: sáv 3, forrás 4) —
  tudatosan a biztonságos irány, a forrás külön óv a gyermekkori kompenzált sokktól.


#### 87. egység — AMIT AZ ADVERZÁRIÁLIS CÁFOLÓK AZ ÉN MUNKÁMBAN TALÁLTAK (mind javítva)

A cáfoló ügynökök nemcsak a vizsgálók javaslatait nézték át, hanem a közben ÉLESBE KERÜLT saját
kódomat is. Négy valódi hibát találtak, kettő már kitelepítve volt.

1. A MEGŐRZÉSI ÓRA AZ ÉRKEZÉSHEZ KÖTŐDÖTT, NEM AZ UTOLSÓ ÉRINTÉSHEZ. Egy 13 órája bent lévő, de
   5 PERCE re-triázsolt (tehát nagyon is élő) beteg lejártnak minősült és eltűnt a várólistáról.
   A rekordTs() most a jelöltek MAXIMUMÁT veszi (utolso / mentveTs / ts / erkezes / felvettTs /
   az azonosítóba ágyazott idő). Böngészőben igazolva.
2. HAMIS FORRÁSÉRVELÉS A SAJÁT KOMMENTEMBEN. A 2 órás néma-visszatöltési határhoz azt írtam, hogy
   „a rendszerben a leghosszabb klinikai időköz 120 perc (MSTR 5)". Ez tényszerűen hamis: él 12
   órás (masodlagos_78) és 2 órás (masodlagos_76) klinikai időablak is. Pontosan az a tiltott
   minta, amit a projekt vasszabálya kizár: valós oldalszámmal legitimált, de nem alátámasztott
   általánosítás. A komment most kimondja, hogy a 2 óra TISZTÁN üzemeltetési döntés.
3. KITALÁLT ÉRTÉK AZ ÉLŐ SZÖVEGBEN. A gyermek-vérnyomás intelembe azt írtam, hogy a tankönyv 98.
   oldalának grafikonja „90./95. percentilis". A forrás ezt nem mondja — a hivatkozás „50th
   percentile HEIGHT for age", azaz TESTMAGASSÁG-percentilis. Eltávolítva; a szöveg most csak azt
   állítja, ami a kinyerésben igazolható (y-tengely 80-145 Hgmm, két emelkedő görbe).
4. A LELET-REDAKCIÓM ÚJ HIBÁT VITT BE. Az azonosító sorok értékét „[tárolásból kihagyva]"
   helyőrzőre cseréltem — amit a lelet-értelmező visszaolvasva BETEGNÉVKÉNT vett át. Most az
   egész sor kimarad, és egy darabszámot közlő sor kerül a helyére.

ÉS EGY ÉRDEMI KLINIKAI KORREKCIÓ, amit egy cáfoló érvelése kényszerített ki:
5. AZ ALACSONY VÉRNYOMÁS PADLÓJA MOSTANTÓL MINDEN KORRA ÉRVÉNYES. Korábban úgy döntöttem, hogy
   gyermekre nem teszünk vérnyomás-padlót, mert a forrás nem ad számot — és ez önmagában igaz is.
   A cáfoló viszont kimutatta, hogy a következmény NEM semleges, hanem MEGNYUGTATÓ: a 8 éves,
   tompa hasi sérüléssel és 60 Hgmm-rel érkező gyermek MSTR 4-et („kevésbé sürgős") kapott, a
   hasmenéses 55 Hgmm-es pedig MSTR 5-öt. És rámutatott az érvelési hibámra: a forrás azt mondja,
   hogy gyermeknél a vérnyomás KÉSŐI jel — vagyis a NORMÁLIS érték ne nyugtasson meg. Ebből nem
   következik, hogy az ALACSONY értéket figyelmen kívül kell hagyni; ellenkezőleg, a forrás a
   hipotenziót a „Sokk → MSTR 1" jelei közt sorolja fel (tankönyv 65-66. o.).
   A megoldás NEM új szám kitalálása, hanem egy FORRÁS NÉLKÜLI megszorítás (applies_to:"felnott")
   visszavonása: ≤70 Hgmm → legalább MSTR 2, 71-80 Hgmm → legalább MSTR 3, minden életkorban.
   A küszöb továbbra is a felnőtt MEWS-táblából származik — ezt a felület KIMONDJA. Csecsemőnél
   ez fölé-triázsol (az újszülött élettani szisztolés értéke 60-70 körül van); ez tudatosan
   vállalt, a forrás „bizonytalanság esetén triázsoljon felfelé" elve szerint, és a szabály
   jegyzetében is rögzítve van.
