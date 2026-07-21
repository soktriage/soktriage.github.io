# MSTR Triázs Döntéstámogató

Transzparens, **forráshivatkozott** triázs-besorolás a Magyar Sürgősségi Triázs
Rendszer (MSTR) szabályai szerint, sürgősségi osztályos munkafolyamatra optimalizálva.

**Élő teszt-verzió (böngészőben, telepítés nélkül):**
👉 https://kornel92.github.io/soktriage/

Ez egy **statikus, offline-képes** app — nincs backend, nincs adatbázis, nincs
szerverhívás. Minden a böngészőben fut; a beírt betegadat nem hagyja el a gépet.

## Fontos

Ez az eszköz **döntéstámogató, béta / teszt állapotban** — a triázs-besorolás
szakmai felelőssége a triázs ápolóé. Éles klinikai használat előtt intézményi
szakmai validálás szükséges.

## Fejlesztőknek

- `dist/mstr_triage.html` — egyfájlos, önálló build (ez fut a `docs/`-ban is,
  ez szolgálja ki a fenti élő linket)
- `app/` — a fejlesztői forma (index.html + css/ + js/), innen generálódik a build
- Telepítés / patch-frissítés menete: lásd [DEPLOY.md](DEPLOY.md)
