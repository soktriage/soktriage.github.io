# MSTR Triázs Döntéstámogató

Transzparens, **forráshivatkozott** triázs-besorolás a Magyar Sürgősségi Triázs
Rendszer (MSTR) szabályai szerint, busy-ED munkafolyamatra optimalizálva.
**Megnyitás: `index.html` (vagy a `dist/mstr_triage.html` egyfájlos változat)** —
nem kell internet, minden helyben, a böngészőben fut (dupla kattintás is elég).

Cél: a triázs ápoló 0-ról a **végső, megerősített, pontos MSTR-kategóriáig** jusson —
transzparensen, reprodukálhatóan, alátámasztva —, a teljes MSTR anyag precíz és
alkalmazható integrálásával. Minden döntés mögött ellenőrzés, forrás és kimenet van.

## A folyamat (kártya-wizard, a triázs sorrendjében)

1. **Azonosítás** — triázs ápoló (utoljára használt ápoló **megjegyezve**, megerősíthető/
   törölhető; korábbi ápolók gyors-chipjei) + beteg **KBA/vonalkód** (scanner-kompatibilis).
2. **Első megtekintés** (look test) — kritikus megjelenés → azonnali MSTR 1 rövidzár.
3. **Életkor** — **felnőtt: egy koppintás** (a besorolást az életkor nem módosítja);
   **gyermek: pontos kor** (a vitál-sávok és láz-küszöbök kor-függők) + élő korcsoport-visszajelzés.
4. **Vezető panasz** — gyakori panaszok gyorsgombjai · **köznyelvi szinonima-kereső**
   („infarktus", „nem kap levegőt", „nem eszik-iszik"…) · 163 CEDIS-panasz kategóriánként
   (letisztult vonalas piktogramokkal).
5. **Vitálparaméterek** — nem kötelező; MedSol-lelet **beillesztésre automatikus átvétel**,
   vagy kézi bevitel. **ABCDE sorrendben** (A–B légzés → C keringés → D GCS → E testhő).
   A megadott adat előre kitölti/gyorsítja a további kérdéseket.
6. **Elsődleges meghatározók (ABCDE-blokkok)** — a numerikusokat nem kérdezi újra; az SpO₂
   nem dönt önmagában; dinamikus kérdés-kihagyás. **„Nincs eltérés → tovább" gyorsgomb.**
7. **Fájdalom** (VAS), **panasz-specifikus (másodlagos) módosítók** — „Nincs releváns módosító"
   gyorsgombbal. Az opciók **negatív-first, súlyosság szerint emelkedő** sorrendben, állandó
   **súlyossági bal színcsíkkal** (zöld→piros). **Gyermek-lépés** csak gyermeknél.
8. **Eredmény** — MSTR-szint + célidők, **döntő szabály forrásoldallal** (közvetlenül látható),
   kitöltési napló, részletes döntési út (minden szabály kattintható → forrás), **összegzés
   vágólapra** (MedSol-dokumentációhoz) + nyomtatás.

## Kiegészítő modulok

- **Infekciókontroll / izolációs igény** — a vezető panaszból auto-előjelölt, szerkeszthető;
  párhuzamos PPE/elhelyezés-jelzés (nem módosítja az MSTR-szintet).
- **Értékleltár-jelzés** — zavart tudat / GCS < 14 esetén.
- **Betegút / elhelyezés (diszpozíció)** — az eredményből: MSTR I–II → fekvő; III–V → 7 pontos
  járó-checklist (a triázs-adatból **előtöltve**), ≥80/frailty megfontolás, SE SOK felvételi
  alapelvek, és **deep-link** az XTEK / NNGYK kijelölésekhez (élő lekérdezés a külső oldalon).
- **TETRA / telefon riasztás** — külön adatfelvételi lap (SBAR + ABCDE-vitálok + jelölők +
  kritikus stroke-panel), nyomtatható / vágólapra másolható.

**Busy-ED funkciók:** „Új beteg" (a folyamatban lévő a Függő betegek sávba parkolódik) ·
Előzmények · lapfrissítés-biztos perzisztálás · Enter=Tovább · 44px tap-targetek ·
**görgetésmentes elrendezés** standard AiO monitoron (több oszlop széles képernyőn).

## Arculat

Semmelweis Egyetem arculat: **Montserrat** betűtípus (offline beágyazva), SE navy + arany
paletta, diszkrét brand-sáv; egységes vonalas SVG-ikonok (nincs emoji). A klinikai
MSTR-szintszínek (1 piros … 5 kék) szemantikusak, változatlanok.

## Felépítés

| Fájl | Szerep |
|---|---|
| `index.html` | váz (fejléc, progress, konténerek); a `css/_montserrat.css`-t is linkeli |
| `js/kb.js` | **tudásbázis** (AUTOGENERÁLT — ld. lent): szabályok, 163 panasz + szinonimák, számított mezők, derivációk, infekciókontroll, betegút, esetek; minden forrásoldal-hivatkozással |
| `js/engine.js` | szabálymotor — tiszta függvény, minden kiértékelés trace-be; végső szint = tüzelt szabályok minimuma; panasz-alapszint fallback |
| `js/wizard.js` | kártya-wizard felület-vezérlő (lépések, parkolás, előzmények, infekció, betegút, TETRA, összegzés) |
| `js/leletparser.js` | MedSol spot-monitor lelet feldolgozása |
| `js/flowchart.js` | döntési út megjelenítése (kattintható szabályok forrásoldallal) |
| `tests/run_tests_jsc.js` | 75 forrás-eset teszt (futtatás: `jsc`, ld. ../FOLYTATAS.md) |

## Tudásbázis-pipeline (a kb.js SOHA nem szerkesztendő kézzel)

Források: **Triázs tankönyv 2.0 (MSOTKE, 2016)** + **MSTR oktatói jegyzet (2022)**; kétes
pontokon döntőbíró a kanonikus **CTAS COT-2008**. A szabályok a `munka/kb/kb_*.json` +
`patch_*.json` fájlokban élnek (forrásoldal-hivatkozással); összeszerelés:
`python3 munka/assemble_kb.py` → `js/kb.js`; egyfájlos build:
`python3 munka/build_singlefile.py` → `dist/mstr_triage.html`.

Validáció: 75 forrás-eset (72/75 — a 3 eltérés dokumentáltan a biztonságos irány) + adverzáriális
forrás-ellenőrzés + CTAS-korroboráció + teljes lefedettségi audit (minden panasz besorolható,
minden P1/P2 alá-triázs gap forrással lezárva).

## Telepítés

Ld. `../DEPLOY.md` — statikus fájl, bárhová (dupla katt / http.server / Apache-nginx /
GitHub Pages / Semmelweis-szerver).

## Fontos

Ez az eszköz **döntéstámogató** — a besorolás szakmai felelőssége a triázs ápolóé.
Éles klinikai használat előtt intézményi szakmai validálás szükséges.
