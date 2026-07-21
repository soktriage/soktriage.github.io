# MSTR Triázs Döntéstámogató — belső pilot

> **PILOT / TESZT verzió.** Nem nyilvános termék — kizárólag meghívott
> kollégák tesztelésére szánt, megosztott link. A tartalom nem indexelt
> (`noindex`), kérünk, ne osszd meg szélesebb körben, amíg az intézményi
> validáció le nem zajlik.

Transzparens, **forráshivatkozott** triázs-besorolás a Magyar Sürgősségi Triázs
Rendszer (MSTR) szabályai szerint, sürgősségi osztályos munkafolyamatra optimalizálva.

**Élő teszt-verzió (böngészőben, telepítés nélkül):**
👉 https://kornel92.github.io/soktriage/

Ez egy **statikus, offline-képes** app — nincs backend, nincs adatbázis, nincs
szerverhívás. Minden a böngészőben fut; a beírt betegadat nem hagyja el a gépet.

## Fontos — olvasd el használat előtt

Ez az eszköz **döntéstámogató, pilot/béta állapotban** — **nem helyettesíti** a
triázs ápoló szakmai megítélését és a hivatalos MSTR-protokollt. A végső
besorolás és annak szakmai felelőssége minden esetben az ellátó személyzeté.
Kizárólag saját felelősségre, tesztelési célra használható; éles klinikai
döntéshozatalra nem alkalmas, amíg az intézményi szakmai validáció le nem zajlik.

## Forrás és szerzői jog

A tudásbázis tartalma a **Triázs tankönyv 2.0** (MSOTKE, 2016), az **MSTR
oktatói jegyzet** (2022) és a **CTAS COT-2008** alapján, oktatási/pilot céllal,
**saját megfogalmazásban, forráshivatkozással** (oldalszám szerint) készült.
A repó **nem tartalmazza** a forrás-PDF-eket, sem azok kinyert szövegét — csak
a saját szabályleírásainkat és a hozzájuk tartozó hivatkozásokat. Ez **nem a
forrásművek hivatalos kiadása vagy másolata**, és nem helyettesíti azokat; a
forrásművek jogtulajdonosaitól (MSOTKE és a mű egyéb jogosultjai) külön
engedélyt igényel bármilyen szélesebb körű vagy éles felhasználás.

## Fejlesztőknek

- `dist/mstr_triage.html` — egyfájlos, önálló build (ez fut a `docs/`-ban is,
  ez szolgálja ki a fenti élő linket)
- `app/` — a fejlesztői forma (index.html + css/ + js/), innen generálódik a build
- Telepítés / patch-frissítés menete: lásd [DEPLOY.md](DEPLOY.md)
