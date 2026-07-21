# Telepítés / megosztás — MSTR Triázs Döntéstámogató

Az app **teljesen statikus**: nincs backend, nincs adatbázis, nincs build-lépés futásidőben,
nincs külső hálózati hívás. Csak HTML/CSS/JS, minden a böngészőben fut. Ezért bárhová
felrakható, ahol statikus fájlt ki lehet szolgálni — és offline is működik.

## A két becsomagolt forma

| Forma | Hol | Mikor |
|---|---|---|
| **Egyfájlos** `dist/mstr_triage.html` | egyetlen 520 KB-os HTML, minden beágyazva | megosztás, demó, gyors feltöltés bármelyik szerverre, e-mail |
| **Mappás** `app/` (index.html + js/ + css/) | fejlesztői/karbantartott forma | ha a tudásbázist frissíteni akarjuk |

Az egyfájlos újragenerálása bármikor: `python3 munka/build_singlefile.py`
(a `app/js/kb.js` frissítése után — azt a `python3 munka/assemble_kb.py` állítja elő).

## Megosztási lehetőségek (a legegyszerűbbtől)

### 1) Dupla kattintás (nulla infrastruktúra)
A `dist/mstr_triage.html` fájlt elküldöd a kollégának, ő dupla kattintással megnyitja
a böngészőben. Semmilyen szerver nem kell. Demóra és kipróbálásra tökéletes.

### 2) Bármely lokál/local webszerver (a kolléga béta szerveréhez is ez kell)
Másold a fájlt (vagy a teljes `app/` mappát) a szerver webgyökerébe:
- **Apache / nginx**: tedd a `DocumentRoot`/`root` alá — pl. `.../mstr/mstr_triage.html`,
  és elérhető lesz `http(s)://<szerver>/mstr/mstr_triage.html` címen. Semmilyen külön
  konfiguráció nem kell (statikus fájl).
- **Gyors teszt bármely gépen** (Python jelen van a legtöbb rendszeren):
  `cd dist && python3 -m http.server 8080` → böngészőben `http://localhost:8080/mstr_triage.html`
- A Semmelweis-domain saját szerverére (amikor kész a béta): ugyanez — a fájl(oka)t a
  webkiszolgáló könyvtárába kell másolni. Nincs szükség adatbázisra vagy futtatókörnyezetre.

### 3) GitHub (verziózás + GitHub Pages a többieknek)
- Új repó (privát is lehet), a projekt tartalma feltöltve. A `app/` és a `dist/` a lényeg.
- **GitHub Pages**: Settings → Pages → Deploy from branch (pl. `main`, `/root`). Utána az app
  elérhető `https://<felhasznalo>.github.io/<repo>/app/` vagy a `dist/mstr_triage.html` címen.
  Ingyenes, HTTPS-es, link-megosztható a kollégáknak. (Figyelem: a Pages nyilvános repónál
  publikus — érzékeny tartalom nincs a kódban, de betegadat sose kerüljön a repóba.)
- Javasolt `.gitignore`: a `munka/pages_mstr/`, `munka/pages_tk/` (nagy oldalképek, ~97 MB) és
  a forrás-PDF-ek kimaradhatnak a repóból — a kód és a `kb/` JSON-ok elegendők.

## Fontos telepítési tudnivalók
- **HTTPS ajánlott** éles használatnál (különösen ha később KBA-vonalkód / kamera / MedSol-
  integráció jön — ezek gyakran csak biztonságos eredetről működnek).
- **Semmi adat nem hagyja el a böngészőt** jelenleg: nincs szerverhívás, a beírt betegadat
  csak a memóriában van, lap frissítésre törlődik. (Ha később triázs-napló mentés kell tartósan,
  az külön döntés/lépés — pl. localStorage vagy a MedSol felé küldés.)
- **Nincs npm/node függőség** a futtatáshoz. A fejlesztői segédszkriptek Python3-at használnak
  (assemble_kb.py, build_singlefile.py); a teszt JavaScriptCore-ral fut (`jsc`), node nem kell.

## Frissítési folyamat (ha a tudásbázis változik)
1. `munka/kb/kb_*.json` szerkesztése (forráshivatkozással!)
2. `python3 munka/assemble_kb.py` → újragenerálja `app/js/kb.js`
3. `"/System/Library/.../jsc" app/tests/run_tests_jsc.js` → tesztek (elvárt: 72/75, ld. FOLYTATAS.md)
4. `python3 munka/build_singlefile.py` → új `dist/mstr_triage.html`
5. feltöltés a szerverre / commit GitHubra

## Élő teszt-verzió: GitHub Pages (kornel92/soktriage)

A `https://kornel92.github.io/soktriage/` cím a `docs/index.html`-t szolgálja ki
(ez a GitHub Pages két elfogadott forrás-mappájának egyike — a repó gyökere marad
tiszta). A `docs/index.html` MINDIG a `dist/mstr_triage.html` egy másolata.

**Patch + redeploy (a legtöbb változtatás után ennyi kell):**
```bash
cd /Users/adamkornel/Claude/Projects/triage_app
# (ha a tudásbázis is változott: python3 munka/assemble_kb.py)
python3 munka/build_singlefile.py
cp dist/mstr_triage.html docs/index.html
git add app dist docs
git commit -m "leírás a változásról"
git push
```
A GitHub Pages ~30–60 másodperc alatt automatikusan újraépíti magát push után —
nincs külön "deploy" gomb, nincs CI-konfiguráció.

**Mi NEM kerül fel a repóba** (`.gitignore` zárja ki): forrás-PDF-ek (tankönyv,
jegyzet, CTAS, SE arculati kézikönyv — szerzői jogi anyagok), `.mhtml` exportok
(valós beteg-/rendszeradatot tartalmazhatnak), a `munka/` teljes kinyerő-munkaterület
(oldalképek, kinyert szövegek). Csak az `app/`, a `dist/` és a `docs/` (build)
kerül fel — tiszta kód + a mi saját, oldalhivatkozásokkal ellátott tudásbázisunk.

**Saját domain bekötése később** (pl. `soktriage.<sajátdomain>.hu`): a domain
szolgáltatójánál egy CNAME-rekordot kell felvenni a domain-re mutatva
`kornel92.github.io`-ra, majd a repó Settings → Pages → Custom domain mezőbe be
kell írni ugyanezt a domaint. Percek kérdése, bármikor megtehető.
