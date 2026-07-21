# e-MedSolution (SOTE) — integráció-előkészítő dokumentáció a triázs döntéstámogató apphoz

**Készült:** 2026-07-19 | **Források:** 3 db MHTML pillanatfelvétel (`e-MedSolution.mhtml`, `2e-MedSolution.mhtml`, `3e-MedSolution.mhtml`) + 1 db MedSol-generált lelet-PDF (`9a3f2c71-…​.pdf`), mind a `/Users/adamkornel/Claude/Projects/triage_app` könyvtárból.
**Környezet:** `https://emedsol2.sote.hu:9444/sote/` — ISH e-MedSolution webes kliens, Semmelweis Egyetem, Sürgősségi Betegellátó Osztály (osztálykód: **KSBA**), bejelentkezett felhasználó: `ada09`.

Fontos módszertani megjegyzés: a Chrome MHTML-mentés a `<script>` tartalmakat eltávolítja, ezért a dokumentum a **statikus DOM-ot** írja le; a futásidejű (JS/dojo) viselkedést élő rendszeren kell majd ellenőrizni.

---

## 1. A MedSol webfelület felépítése

### 1.1 Frame-szerkezet (mindhárom mentésben azonos)

Belépési pont: `GET /sote/Startup` → klasszikus **HTML 4.01 frameset** (nem iframe!):

```html
<frameset id="_mwfs" rows="60,*,0">
  <frame name="mainwindowheader" src=".../0.do">   <!-- felső menüsor, 60 px -->
  <frame name="FH0"              src=".../<akció>.do?dummypar=FH0...">  <!-- fő munkaterület -->
  <frame name="KeepAlive"        src=".../secure/sys/KeepAlive.jsp">    <!-- 0 px, session-életben-tartó -->
</frameset>
```

- A fő munkaterület frame neve **`FH0`** — a fejléc-menü űrlapja is `target="FH0"`-val küld. (A névkonvencióból következően több munkaablaknál FH1, FH2… is előfordulhat — élőben ellenőrizendő.)
- Minden képernyő egy **akciószámra végződő URL**: `/sote/<akciószám>.do?dummypar=FH0<hosszú numerikus token>`. A `dummypar` session-/ablak-kötött token, **nem hardcode-olható**.
- Minden `.do` oldal elején beszédes HTML-komment van, ami gépi képernyő-azonosításra kiváló:

```
<!--
action=101307
frame=100713
root-object=Application
frame input datas=[[Dept, KSBA]]
-->
```

- Kódolás mindenhol **UTF-8** (`<meta charset=UTF-8>`), a fejléc `X-UA-Compatible: IE=EmulateIE8`-at kér (örökölt IE-korszakos felület).

### 1.2 Fejléc-frame (`0.do`, mainwindowheader)

- Főmenü ikonok + rejtett feliratok (`a.menuitem_*`): **Beteg nyilvántartás, Munkahelyeim, Lázlap munkahelyek, Riportok, Levelezés, Újdonságok**.
- Jobb oldalt: gyorsgombok (`AH1_btn_<actbind>`), session-visszaszámláló (`#_timeout`), bejelentkezett user (`td.user > span` = `ada09`), kijelentkezés (`ibm_security_logout` POST — WebSphere).

### 1.3 Képernyő A — „Triage WorkList" (1. mentés)

`101307.do`, `action=101307`, `frame=100713`, `<title>Triage WorkList</title>`, bemenő adat: `Dept=KSBA`. Ez a **triázs várólista** (aznap felvett, még osztályozás alatti / folyamatban lévő betegek).

Felső gombsor: Járóbeteg felvétel | Folyamatban lévő esetek | Ágynyilvántartás riport | Kritikus labor értékek | Modulok (EESZT hibalista, Ágyfoglaltság).

**Szűrőblokk** (`form name="dataform"`, mezőnevek stabilnak tűnő `Q1_0_n` sémával):

| Mezőnév | Címke | Megjegyzés |
|---|---|---|
| `Q1_0_0` | Osztály kód | readonly, `KSBA` |
| `Q1_0_1` | Felvételi dátum | `2026.07.19` formátum, naptár-widget |
| `Q1_0_2` / `Q1_0_3` | Felvétel ideje –tól/–ig | `00:00` / `23:59` |
| `Q1_0_7` | Elbocsátott | checkbox |
| `Q1_0_4` | Triage kategória | select: `I` életveszélyes, `II` kritikus, `III` sürgős, `IV` kevéssé sürgős, `V` halasztható, + `SET`/`NOTSET` |
| `Q1_0_10` | Ált. betegadat | szabad szöveg |
| `Q1_0_9` | Kezelőorvos | |
| `Q1_0_11` | Alapellátási kezelés | Y/N |
| `Q1_0_12` | Kategória | `FEKVO` / `JARO` / `ORZO` (Őrző) |
| `Q1_0_5` | Beteg neve | „advanced" szűrőben |
| `Q1_0_6` | **TAJ** | `maxlength=9` → kötőjel nélküli 9 számjegy! |

Extra: `#uniSearchId_F` / `#uniSearchId_B` gyorskereső inputok; `#READ_NPI_FROM_EID_CARD` gomb (chipkártyás/eSzemélyi TAJ-beolvasás — tehát kártyaolvasós azonosítás már létezik a felületen); mentett szűrőnézetek (`TriageWorkList_Application_SelectField`: „Kornél", „KSBA Triage lista", „KSBA Bővített"); „Szűrés" gomb (`#filterbutton`).

**Adattábla:** fejléc a `table.clabel`-ben (`th#A1_H0`…`A1_H12`), adatsorok a **`table#A1_4` → `tbody#A1_4_body`** alatt. Oszlopok:

`MSTR` (triázs kategória, pl. „III. sürgős") | `Triage` (triázsoló kód, pl. `ros13`) | `Vár.` (várakozási idő, sárga háttér = küszöb felett) | `Felv. i` | `RT` | `Beteg neve` | `K` (kritikus adat jelző: `*`, cella `class="datalCRITICDATA" id="CRD_<sor>_<oszlop>"`) | `TAJ` (9 jegy, kötőjel nélkül) | `Triage megjegyzés` (többsoros szabad szöveg) | `Szakorvos/Mv.` | `Ellátó` | `Vizsg.` (FEKVO/JARO/ORZO) | `Műveletek` (ikonrács: regisztráció, lázlap, PDF, EESZT, labor stb.).

Lista alján: `div#ROWINFO` — „Megjelenített elemek száma: N". A sorokban **nincs** kiírva sem KBA, sem esetszám; a sor-művelet ikonok JS-eseményekkel navigálnak (a mentésből a handler hiányzik).

### 1.4 Képernyő B — „Triage DeptList" (2. mentés)

`101315.do`, `action=101315`, `frame=100714`, `<title>Triage DeptList</title>`, bemenet: `Dept=KSBA`, `AdmitDate=2026.07.19`. Ez az **osztályos betegek táblája** (a teljes aznapi osztálylista, vizsgálati státuszokkal).

Felső gombsor: Járóbeteg felvétel | Napi zárás | Kritikus labor értékek | Modulok (Ágynyilvántartás riport, Gyógyszerkiadás, Jogviszony ellenőrző lista, EESZT hibalista).

Szűrők hasonlóak (`Q1_0_0` osztály, `Q1_0_1`–`Q1_0_3` dátum/idő, `Q1_0_6` TAJ maxlength=9 stb.).

**Adattábla** (szintén `table#A1_4` / `tbody#A1_4_body`), 14 oszlop: `MSTR | Triage | RT | Beteg neve | K | TAJ | Felv. d. | Felv. i. | Triage megjegyzés | Szakorvos/Mv. | Ellátó(k) | Vizsg. | Vizsgálatok | Műveletek`.

A **„Vizsgálatok"** oszlop a kirendelt vizsgálatok kód-chipjeit tartalmazza kis beágyazott táblákként: `<td bgcolor="green">POCT</td>` + eredménynyomtató ikon. Látott kódok: `POCT, KPLA, MUSE, RAAR, RAAU, VER, URS, FGA, KSPS, KSBA`. A `bgcolor` a státuszt kódolja (zöld = kész eredmény, rózsaszín = folyamatban — élőben megerősítendő). Az időcellán `sortkey` attribútum is van (`<td sortkey="000000">00:00</td>`).

### 1.5 Képernyő C — „Eset alapú riport 7" (3. mentés) — az eset-munkaterület

`1502.do`, `action=1502`, `frame=1044`, **`root-object=Cbasic`**, bemenet: `RDHTYPE=HTML`, `TRIAGE=Y`. `<title>Eset alapú riport 7: Kuti Istvánné</title>`. Ez már **Dojo/Dijit** (claro téma) alapú felület, nem a régi form-renderer!

Szerkezete:
- **Betegfejléc-toolbar** (dijit widgetek, disabled inputok — értéküket futásidőben JS tölti, a mentésben `value=""`):
  - `#FH0_patname` (title="Beteg"), `#FH0_birthdate` (Születési dátum), **`#FH0_npi` (title="TAJ")**, `#FH0_npistate` (Érvényes TAJ, biztosított — `npistatus_G` osztály = zöld státusz), `#FH0_critdata` (kritikus adat). Mellettük `ToolbarLabel`-ek: „Beteg:", „Születési dátum:", „TAJ:", „KSBA", „Osztály:".
- **Bal oldali accordion** (dijit AccordionContainer) funkciócsoportokkal: Gyakran használt funkciók, Kedvencek, Általános, Előző eset, Felvétel, Ellátás, Finanszírozás, Riportok, EESZT és JIR funkciók, Külső hivatkozások. Minden menüpont `div.ikmenu` **`actbindid` attribútummal** (funkció-azonosító) és `title`-lel — pl. `actbindid=2081` Rendelés bevitel, `2090` Vizsgálatok, `102571` Vizsgálati eredmények bevitele, `105156` Sürgősségi adatlap.
- **Nyomtatási/vonalkódos akciók** (ugyanebben a menüben — a KBA-vonalkód-nyomtatás innen érhető el):
  - `2872` „barkód esetszámmal", **`103340` „KBA vonalkód két részes"**, `103341` „TRIAGE xls", **`103342` „KBA vonalkód"**, `103343`/`103345` „Etikett vonalkód 5-5 / 4-5 EMS", **`103346` „Esetszám vonalkód"**, **`103347` „KBA vonalkód ÚJ"**, `106255` „Labor táblázat-fejléccel".
- **Riporttörzs**: a teljes eset-dokumentáció egyetlen hosszú, colspan-rácsos táblázat-fa. Összecsukható szekciók mintája:

```html
<a id="TREE<véletlen szám>show"><img title="Megjelenít" src=".../i_plus.gif"></a>
<a id="TREE<ugyanaz>hide"><img title="Elrejt" src=".../i_minus.gif"></a>
... <tr id="TREE<ugyanaz>div" style="display:none"> ... tartalom ... </tr>
```

  A TREE-azonosítók **véletlenszerűek** (pl. `TREE3.485311107669526E8div`) → nem horgonyozhatók, a szekciót a **címkeszöveg** alapján kell megtalálni.
- Szekciók sorrendben (a mentett esetnél): betegfejléc-blokk (név, TAJ kötőjelesen `060-260-080`, Biztosított, Anyja neve, Kezelőorvos kód, Lakcím, **Esetszám: 36923088**, Beküldő: `01H714601`) → **Triage-sor** („Triage II. kritikus 2026-07-19 06:04 … vin20") → **Eredmények / Vizsgálatok** (Labor jellegű: Központi Labor Sürgős [Szerkesztés alatt], **POCT Vérgáz** teljes paraméterlistával `név–érték–egység–N/H flag` sorokban, EKG (MUSE); Egyéb jellegű: konzílium) → Anamnézis → Jelen panaszok → Státusz (ABCDE) → **Űrlapok / Vizsgálatok / Labor jellegű / „KSBA Welch – 2026.07.19 06:03"** (= a spot monitoros vitálparaméter-rekord, lásd 3. fejezet) → Egyéb vizsgálatok → Dekurzus → Therápia → Epikrízis → Javaslat → Diagnózisok → Beavatkozások (OENO-kódok) → Felírt Gyógyszerek.
- Lap alján rejtett render-statisztika `Log key(s): [1502_ada09_…]` formátumú naplókulccsal.

---

## 2. Betegazonosítók: hol, milyen formátumban

| Azonosító | Formátum | Hol látható | Példa |
|---|---|---|---|
| **KBA** (kórházi betegazonosító) | **11 számjegy, balról nullázva** | Csak a lelet/etikett nyomtatványokon („KBA.....:") és a vonalkód-nyomtatási akciókban; a lista- és riportképernyők DOM-jában **nem** jelenik meg | `00002858428` |
| **Esetszám** | **8 számjegy** | Eset alapú riport fejléce („Esetszám 36923088"), lelet-PDF, „Esetszám vonalkód" akció | `36923088` |
| **Telj. AZ** (teljesítés-azonosító) | 8 számjegy | Csak a lelet-PDF-en („Telj. AZ: …", és az élőfejben „Kuti Istvánné - Telj. AZ.: …") — az adott vizsgálati rekordot azonosítja | `38450241` |
| **TAJ** | 9 számjegy; listákban **kötőjel nélkül**, riportban/leleten **XXX-XXX-XXX** | WorkList/DeptList „TAJ" oszlop; riport-fejléc; `#FH0_npi` widget; szűrőmező `Q1_0_6` (maxlength=9!) | `060260080` / `060-260-080` |
| Beteg neve | vezetéknév+utónév, magyar sorrend | lista „Beteg neve" oszlop, riportcím, `#FH0_patname` | `Kuti Istvánné` |
| Beküldő / vizsgálatkérő | 9 karakter alfanumerikus (ÁNTSZ/NEAK kód) | riport „Beküldő", lelet „Vizsgálatkérő: KSBA 01H714601 …" | `01H714601` |
| Naplósorszám | 8 számjegy, nullázva | lelet alja („Naplósorszám szakrendelésen") | `00033834` |

**Vonalkódos beolvasáshoz ebből az következik:**

1. A MedSol maga nyomtat **KBA-vonalkódot** (3 változat: „két részes", sima, „ÚJ") és **esetszám-vonalkódot** → a karszalagon/etiketten szkennelt tartalom várhatóan a fenti numerikus stringek egyike. Élőben ellenőrizendő, hogy a kód (Code128 gyanús) pontosan a 11 jegyű KBA-t tartalmazza-e prefix/suffix nélkül.
2. Felismerési heurisztika a bővítményben: `^\d{11}$` → KBA; `^\d{8}$` → esetszám (ütközés a Telj. AZ-zal — az is 8 jegyű! a karszalagon viszont esetszám-vonalkód van); `^\d{9}$` + TAJ-CDV-ellenőrzés → TAJ. TAJ-ellenőrzőszám: az első 8 számjegy páratlan pozícióit 3-mal, párosokat 7-tel szorozva összegezzük, mod 10 = 9. számjegy.
3. A triázslistákon a beteg sorát **TAJ alapján** lehet megtalálni (az az egyetlen erős azonosító a lista-DOM-ban), tehát KBA→TAJ leképezéshez vagy az eset alapú riport megnyitása, vagy saját, szkenneléskor épített hozzárendelési tábla kell.

---

## 3. A spot monitoros vitálparaméter-lelet szerkezete és parsolási terv

### 3.1 A forrás

A mellékelt PDF (`Producer: ISH Medsolution report generator.`) a **„KSBA Welch"** (Welch Allyn spot monitor) rekord nyomtatott lelete. Ugyanez a rekord a képernyőn az Eset alapú riport „Űrlapok → Vizsgálatok → Labor jellegű → *KSBA Welch – ÉÉÉÉ.HH.NN ÓÓ:PP*" szekciójában jelenik meg, azonos címkékkel — tehát **egyetlen parser** kiszolgálhatja a PDF-szöveget és a DOM-szöveget is.

### 3.2 Pontos szöveges szerkezet (a PDF-ből)

```
Semmelweis Egyetem / Sürgősségi Orvostani Klinika / ... / Sürgősségi Betegellátó Osztály
                              L E L E T
KBA.....:            00002858428
Beteg neve........:  Kuti Istvánné        Esetszám:  36923088
Születési dátum...:  1944.02.14           Telj. AZ:  38450241
Anyja neve........:  Kiss Magdolna        TAJ.....:  060-260-080
Lakcím............:  2030 Érd Erzsébet u. 2/b.
Vizsgálatkérő.....:  KSBA 01H714601 Sürgősségi Betegellátó Osztály
                     szu67
Vizsgálat dátuma:    2026.07.19   06:03
__________________________________________________________________
Eredmény:
HR (szívfrekvencia)          71      / perc     X       F
Hőmérséklet                  35.0    Celsius    X       F
SYS                          193     Hgmm       X       F
DIA                          66      Hgmm       X       F
MAP                          109     Hgmm       X       F
RESP                         18      / perc     X       F
SPO2                         96      %          X       F
GCS Verbális válasz          5       NULL               F
GCS Motoros valasz           6       NULL               F
GCS Szemnyitasi valasz       4       NULL               F
Naplósorszám szakrendelésen  00033834
```

Sorstruktúra: `paraméternév | érték | mértékegység | [X] | [megjegyzés] | F`. Az `X` és `F` oszlopjelzők pontos szemantikája (validált? végleges/final?) nyitott kérdés — élőben tisztázandó. A DOM-ban ugyanez colspan-rácsban: `td[colspan=31]` név, `td[colspan=12]` érték, `td[colspan=10]` egység, `td[colspan=4]` X, `td[colspan=18]` megjegyzés, `td[colspan=1]` F.

**Karakterkódolási csapda:** a PDF WinAnsi kódolású, az `ő/ű` helyett `õ/û` jelenik meg („Hõmérséklet"). A DOM UTF-8, helyes ékezetekkel. A GCS-címkék vegyesen ékezetesek: „GCS Verbális **válasz**", de „GCS Motoros **valasz**", „GCS **Szemnyitasi** valasz" (sic!). A parsernek **ékezet-normalizálás után** kell illesztenie.

### 3.3 Parsolási terv (Python-stílusú regexek)

Előfeldolgozás: `text.replace('õ','ő').replace('û','ű')`, majd ékezettelenítés + lowercase az illesztéshez; whitespace-tömörítés soronként.

**Fejléc-azonosítók** (többsoros, `re.MULTILINE`):

```python
RE_KBA   = re.compile(r'KBA\.*\s*:\s*(\d{11})')
RE_CASE  = re.compile(r'Esetsz[aá]m\s*:?\s*(\d{8})')
RE_TELJ  = re.compile(r'Telj\.?\s*AZ\.?\s*:?\s*(\d{8})')
RE_TAJ   = re.compile(r'TAJ\.*\s*:\s*(\d{3})-?(\d{3})-?(\d{3})')
RE_NAME  = re.compile(r'Beteg neve\.*\s*:\s*(.+?)(?:\s{2,}|$)')
RE_BORN  = re.compile(r'Sz[uü]let[eé]si d[aá]tum\.*\s*:\s*(\d{4})\.(\d{2})\.(\d{2})')
RE_WHEN  = re.compile(r'Vizsg[aá]lat d[aá]tuma\s*:?\s*(\d{4}\.\d{2}\.\d{2})\s+(\d{1,2}:\d{2})')
```

**Eredményblokk**: a `^Eredmény:` sortól a `Naplósorszám` sorig terjedő szakaszon paraméterenként. Mivel a név–érték–egység akár külön sorokra is törhet (DOM-ból kinyert szövegnél soronként jönnek), a legrobusztusabb a **kulcsszó-vezérelt** illesztés a teljes blokkon:

```python
VITAL_PATTERNS = {                      # ékezettelenített, kisbetűs szövegen
  'hr':    r'hr\s*\(sz[i]vfrekvencia\)\D*?(\d{1,3})',
  'temp':  r'homerseklet\D*?(\d{2}(?:\.\d)?)',
  'sys':   r'\bsys\b\D*?(\d{2,3})',
  'dia':   r'\bdia\b\D*?(\d{2,3})',
  'map':   r'\bmap\b\D*?(\d{2,3})',
  'resp':  r'\bresp\b\D*?(\d{1,2})',
  'spo2':  r'\bspo2\b\D*?(\d{1,3})',
  'gcs_v': r'gcs verbalis valasz\D*?([1-5])',
  'gcs_m': r'gcs motoros valasz\D*?([1-6])',
  'gcs_e': r'gcs szemnyitasi valasz\D*?([1-4])',
}
```

Megjegyzések:
- A `\D*?` áthidalja a köztes egység/`X`/`F` tokeneket és sortöréseket, de a blokkot előbb paraméterenként érdemes szeletelni (a következő ismert kulcsszóig), nehogy egy hiányzó érték a következő paraméter számát fogja be. Javasolt: a blokkot a 10 ismert címke pozíciói mentén szegmentálni, és minden szegmensben az **első számot** venni értéknek, a szegmensben talált egység-tokent (`/ perc`, `Celsius`, `Hgmm`, `%`, `NULL`) pedig validációra használni.
- **Értéktartomány-validáció** (elgépelés/rossz illesztés ellen): HR 10–300 /perc; Temp 25.0–45.0 °C; SYS 40–300, DIA 20–200, MAP 30–250 Hgmm; RESP 4–80 /perc; SpO2 40–100 %; MAP konzisztencia-ellenőrzés: `MAP ≈ (SYS + 2·DIA)/3 ± 15`.
- Tizedesjel: a mintában pont (`35.0`) — de magyar lokalizációjú mezőkben vessző is előfordulhat, ezért `(\d+[.,]\d)` → `float(x.replace(',','.'))`.
- Hiányzó paraméter (pl. nem mértek hőt) → a kulcs egyszerűen nem illeszkedik; a parser minden mezőt opcionálisként kezeljen és jelezze a hiányt.

**GCS-összeg számítás:**

```python
gcs_total = gcs_e + gcs_v + gcs_m          # 3..15
# validáció: E∈[1,4], V∈[1,5], M∈[1,6]; ha bármelyik hiányzik → total = None
# kimenet: "GCS 15 (E4 V5 M6)" formában is
```

Figyelem: a mentett esetnél a Welch-rekord E4-V5-M6 (=15), míg az orvosi státusz-szövegben „GCS: 4(E)-4(V)-6(M)" szerepel — a két forrás **eltérhet**; a triázs app a monitor-rekordot vegye elsődlegesnek, de időbélyeggel együtt.

---

## 4. Chrome-bővítmény integrációs terv

### 4.1 Manifest / illesztési alapok

```json
{
  "manifest_version": 3,
  "host_permissions": ["https://emedsol2.sote.hu:9444/*"],
  "content_scripts": [{
    "matches": ["https://emedsol2.sote.hu:9444/sote/*"],
    "all_frames": true,           // KÖTELEZŐ: frameset-alapú a felület!
    "run_at": "document_idle",
    "js": ["medsol-cs.js"]
  }]
}
```

- A content script minden frame-be beinjektálódik; a **fő munkaterületet** `window.name === "FH0"` (ill. `FH\d+` minta) vagy a jellemző DOM-elemek alapján ismerjük fel; a `mainwindowheader` és `KeepAlive` frame-eket ignoráljuk.
- **Képernyő-felismerés** (megbízhatósági sorrendben):
  1. `document.title`: `"Triage WorkList"`, `"Triage DeptList"`, `/^Eset alapú riport/`
  2. a dokumentum eleji HTML-komment `action=<szám>` sora (`document.childNodes` közt Comment node): `101307`, `101315`, `1502`
  3. jellemző elemek: `#A1_4_body` + `#A1_H0..H12` fejlécszövegek; ill. `#FH0_npi` (riport).

### 4.2 DOM-horgonyok képernyőnként

**Triage WorkList / DeptList (lista-képernyők):**
- Adatsorok: `document.querySelectorAll('#A1_4_body > tr')` — az oszlopindexeket **ne** drótozzuk be, hanem futásidőben a `th#A1_H*` fejlécszövegekből építsünk `oszlopnév → index` térképet (a két lista oszlopsorrendje eltér!).
- Betegsor-adatok: TAJ (`\d{9}`), név, MSTR-kategória, triage-megjegyzés, várakozási idő; kritikus adat jelző: `td.datalCRITICDATA`.
- Sorszám-összegzés: `#ROWINFO` szövege.
- Frissülés-figyelés: a lista teljes oldal-újratöltéssel frissül (form POST ugyanarra a `.do`-ra) → a content script minden betöltéskor újrafut; oldalon belüli DOM-cserékhez `MutationObserver` a `#A1_4_body`-n.

**Eset alapú riport (1502.do):**
- Betegfejléc: `#FH0_patname`, `#FH0_birthdate`, `#FH0_npi` — dijit-inputok, az értéket a `.value` **property**-ből kell olvasni (attribútumban üres!), és mivel dojo tölti késleltetve, `MutationObserver`/polling szükséges, amíg nem üres.
- Esetszám: a riporttörzsben az „Esetszám" címkét követő cella (`//div[normalize-space()="Esetszám"]/following::div[normalize-space()!=""][1]` jellegű kereséssel; a `AH2_btn_102609` id nem egyedi, ne arra horgonyozzunk).
- Triage-sor: az „Triage" kezdetű sor szövegéből kategória + időpont + triázsoló kód regex-szel: `Triage\s+(I{1,3}V?|IV|V)\.\s*\S+\s+(\d{4}-\d{2}-\d{2} \d{2}:\d{2})`.
- **Welch-vitálblokk**: szövegkereséssel — az a `div`, amelynek szövege `^KSBA Welch - \d{4}\.\d{2}\.\d{2} \d{2}:\d{2}$` mintára illeszkedik; a hozzá tartozó tartalom a testvér `tr[id^="TREE"][id$="div"]` sor (alapból `display:none`, azaz **összecsukva is a DOM-ban van** → nem kell kinyitni a parsoláshoz!). A blokk `innerText`-jén fut a 3.3 szerinti parser.
- Vonalkód-nyomtató akciók: `div.ikmenu[actbindid="103342"]` stb. — az `actbindid` a legstabilabb funkcióhorgony az akkordion-menüben (a `ish_IKItem_N` sorszámok elrendezésfüggők).

### 4.3 Vonalkód-beolvasás (KBA)

- A tipikus vonalkódolvasó **billentyűzet-emulációs** (keyboard wedge): a content script `keydown`-burst detektorral ismerje fel (>8 számjegy <100 ms alatt, Enter-rel zárva), akkor is, ha épp nincs fókuszban input. Alternatíva: WebHID/WebSerial a bővítmény oldalán (dedikált olvasóhoz).
- Beolvasott string osztályozása a 2. fejezet heurisztikájával (11 jegy → KBA, 8 jegy → esetszám, 9 jegy + CDV → TAJ).
- A KBA-hoz tartozó beteg lista-sorát a MedSol lista önmagában nem adja ki (nincs KBA a DOM-ban) → a bővítmény tartson **session-szintű hozzárendelési gyorsítótárat**: amikor a felhasználó megnyit egy eset alapú riportot, mentse el a (KBA ha leletből ismert / esetszám / TAJ / név) rekordot, és szkenneléskor ebből oldjon fel.

### 4.4 Adatátvitel a triázs app felé

Csatorna-javaslat: content script → `chrome.runtime.sendMessage` → service worker → a triázs app felé `chrome.runtime.sendMessage(externalAppId,…)` (ha az is bővítmény/PWA), vagy `WebSocket`/`fetch` a triázs app helyi/backend végpontjára. Kerülendő a betegadat URL-paraméterben!

**JSON-séma javaslat (`triage.vitals/1.0`):**

```json
{
  "schema": "triage.vitals/1.0",
  "source": {
    "system": "e-MedSolution",
    "host": "emedsol2.sote.hu",
    "screen": "1502.do (Eset alapú riport 7)",
    "captured_at": "2026-07-19T09:31:00+02:00",
    "operator": "ada09"
  },
  "patient": {
    "kba": "00002858428",
    "case_id": "36923088",
    "record_id": "38450241",
    "taj": "060260080",
    "name": "Kuti Istvánné",
    "birth_date": "1944-02-14"
  },
  "encounter": {
    "dept_code": "KSBA",
    "requester": "01H714601",
    "triage_category": "II",
    "triage_at": "2026-07-19T06:04:00+02:00",
    "triage_nurse": "vin20",
    "care_type": "FEKVO"
  },
  "vitals": {
    "observed_at": "2026-07-19T06:03:00+02:00",
    "device": "KSBA Welch",
    "hr_bpm": 71,
    "temp_c": 35.0,
    "nibp_sys_mmhg": 193,
    "nibp_dia_mmhg": 66,
    "map_mmhg": 109,
    "resp_per_min": 18,
    "spo2_pct": 96,
    "gcs": { "eye": 4, "verbal": 5, "motor": 6, "total": 15 }
  },
  "quality": {
    "missing_fields": [],
    "validation_warnings": [],
    "raw_text_hash": "sha256:…"
  }
}
```

Minden mező opcionális (kivéve `schema`, `source`, legalább egy azonosító és `vitals.observed_at`); a hiányzó vitálérték `null` helyett **maradjon ki**, a `quality.missing_fields` listázza. TAJ-t normalizáltan (kötőjel nélkül) küldjük.

---

## 5. Kockázatok, nyitott kérdések

1. **A mentésekből hiányzik a JS** (az MHTML kidobta a scripteket): a sor-kattintás → eset-megnyitás mechanizmusa, az AJAX-végpontok, a dojo-események és a `dummypar`-generálás élő rendszeren vizsgálandó (DevTools + Network).
2. **Frameset**: a `all_frames:true` kötelező; ellenőrizendő, hogy több munkaablak (FH1, FH2…) nyitásakor melyik frame-ben mi fut, és hogy a `window.name` konvenció tartja-e magát.
3. **Verzió- és testreszabás-függés**: az akciószámok (101307, 101315, 1502) és `actbindid`-k a SOTE-s testreszabás részei („Customization Master User" a leleten, „TriageWorkList_Application" nézetnevek) — MedSol-frissítés vagy másik intézmény ezeket megváltoztathatja. A bővítmény konfigurálhatóan tárolja őket.
4. **Elem-id stabilitás**: `A1_4`, `A1_H*`, `Q1_0_*` generált nevek — a három mentésben konzisztensek, de a mezőindexek képernyőnként eltérnek (pl. TAJ = `Q1_0_6` mindkét listán, viszont más fhlp-kód). Fejléc-szöveg-alapú oszloptérkép használandó, ne fix index.
5. **KBA nem érhető el a lista-DOM-ban**: a lista→KBA feloldás csak riport-megnyitással vagy szkenneléssel lehetséges (2.3 pont); tisztázandó, nyomtatnak-e minden betegnek KBA-s karszalagot a KSBA-n, és hogy a vonalkód nyers tartalma tényleg a 11 jegyű szám-e.
6. **8 jegyű ütközés**: esetszám és Telj. AZ egyaránt 8 számjegy — szkennelt 8 jegyű kódnál kontextus kell (esetszám-vonalkód akcióból származik → esetszám).
7. **Karakterkódolás**: DOM UTF-8, lelet-PDF WinAnsi (`õ→ő`, `û→ű` hibával), címkékben vegyes ékezethasználat („valasz", „Szemnyitasi") — normalizáló réteg nélkül a parser törékeny.
8. **X/F oszlopflagek szemantikája** a leletben nem dokumentált (validált/végleges?) — élőben tisztázandó; ugyanígy a DeptList vizsgálat-chip `bgcolor` státuszkódjai.
9. **Adatkonzisztencia**: a Welch-GCS és az orvosi státusz GCS-e eltérhet (látott példa: 15 vs 14) — a triázs appban forrás- és időbélyeg-megjelölés kötelező.
10. **Session-kezelés**: `dummypar` tokenes URL-ek + KeepAlive frame + timeout-óra; a bővítmény ne tároljon URL-t, és számítson session-lejáratra (a `#_timeout` figyelhető). Kijelentkezés: `ibm_security_logout` (WebSphere).
11. **Jog/biztonság**: betegadat (TAJ, név, vitálparaméterek) bővítményen keresztüli továbbítása intézményi adatvédelmi/IT-engedélyt igényel (GDPR, EESZT-környezet); a kommunikáció maradjon lokális vagy titkosított, betegadat URL-be/naplóba ne kerüljön.
12. **Pozitív lehetőség**: a felületen már létezik eSzemélyi/kártya-alapú TAJ-beolvasás (`#READ_NPI_FROM_EID_CARD`) és TRIAGE-xls export (`actbindid=103341`) — érdemes élőben megnézni, ez utóbbi milyen adatokat ad, hátha kiváltja a DOM-scrapinget.
