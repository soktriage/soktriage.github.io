/*
 * Döntési folyamatábra-megjelenítő.
 * A szabálymotor trace-éből épít függőleges folyamatábrát:
 *   minden lépés (módosítócsoport) egy csomópont, benne az egyes szabályok
 *   státusz szerint színezve; a tüzelt szabályok mellett a javasolt szint;
 *   a döntő szabály kiemelve; alul a végső MSTR-szint.
 * Minden szabályra kattintva látszik a feltétel, a felhasznált adatok és a
 * FORRÁSOLDAL (tankönyv/jegyzet + oldalszám) — így a döntés ellenőrizhető
 * és a tudásbázis javítható.
 */

(function (global) {
  'use strict';

  const STATUSZ_IKON = {
    tuzelt: '✔',
    nem_teljesult: '—',
    nincs_adat: '?',
    nem_alkalmazhato: '∅',
  };
  const STATUSZ_CIM = {
    tuzelt: 'Teljesült — szintjavaslatot adott',
    nem_teljesult: 'Kiértékelve, nem teljesült',
    nincs_adat: 'Hiányzó adat miatt nem értékelhető',
    nem_alkalmazhato: 'Erre a betegre nem vonatkozik',
  };

  function forrasSzoveg(forras) {
    if (!forras || !forras.length) return 'nincs forráshivatkozás';
    return forras.map(function (f) {
      const nev = f.doc === 'tankonyv' ? 'Tankönyv' : f.doc === 'jegyzet' ? 'Oktatói jegyzet (2022)' : f.doc === 'ctas' ? 'CTAS COT-2008' : f.doc === 'mstr' ? 'MSOTKE-MSTR munkacsoport poszter' : f.doc;
      if (f.page == null) return nev;
      return f.doc === 'ctas' ? (nev + ' DIA ' + f.page) : (nev + ' ' + f.page + '. o.');
    }).join('; ');
  }

  function el(tag, cls, szoveg) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (szoveg != null) e.textContent = szoveg;
    return e;
  }

  function szintSzin(kb, szint) {
    const l = (kb.levels || []).find(function (x) { return x.level === szint; });
    return l ? l.color : '#888';
  }
  function szintNev(kb, szint) {
    const l = (kb.levels || []).find(function (x) { return x.level === szint; });
    return l ? ('MSTR ' + szint + ' — ' + l.name) : ('MSTR ' + szint);
  }

  /**
   * @param {HTMLElement} cel — konténer, amibe rajzolunk (kiürítjük)
   * @param {object} eredmeny — a motor kimenete (trace, szint, dontoSzabalyok, …)
   * @param {object} kb — tudásbázis (szintszínekhez)
   * @param {function} reszletCb — kattintáskor hívjuk a trace-bejegyzéssel
   */
  function folyamatabraRajzol(cel, eredmeny, kb, reszletCb) {
    cel.innerHTML = '';
    if (!eredmeny || !eredmeny.trace || !eredmeny.trace.length) {
      cel.appendChild(el('p', 'fa-ures', 'Még nincs kiértékelés — adja meg a beteg adatait.'));
      return;
    }

    // Lépések szerinti csoportosítás, a trace sorrendjét megőrizve.
    const lepesek = [];
    const lepesMap = {};
    eredmeny.trace.forEach(function (t, idx) {
      if (!lepesMap[t.lepes]) {
        lepesMap[t.lepes] = { nev: t.lepes, elemek: [] };
        lepesek.push(lepesMap[t.lepes]);
      }
      lepesMap[t.lepes].elemek.push({ t: t, idx: idx });
    });

    const dontoIds = {};
    (eredmeny.dontoSzabalyok || []).forEach(function (d) { dontoIds[d.szabalyId] = true; });

    const wrap = el('div', 'fa-wrap');

    // Kezdő csomópont
    const start = el('div', 'fa-node fa-start');
    start.appendChild(el('div', 'fa-node-cim', 'Beteg érkezése — kiértékelés indul'));
    wrap.appendChild(start);
    wrap.appendChild(el('div', 'fa-nyil', '▼'));

    lepesek.forEach(function (lepes) {
      const node = el('div', 'fa-node');
      const cim = el('div', 'fa-node-cim', lepes.nev);
      node.appendChild(cim);

      const lista = el('div', 'fa-szabalyok');
      let vanTuzelt = false;
      // Olvashatóság: csak a TÜZELT szabályok látszanak alapból; minden más
      // (nem teljesült / hiányzó adat / nem alkalmazható) a "+N további" gomb
      // mögött — a hiányzó adatokat a besorolás melletti összevont figyelmeztetés
      // sorolja fel. Így a folyamatábra a tényleges döntési utat mutatja.
      const fontos = [], osszecsukhato = [];
      lepes.elemek.forEach(function (e) {
        if (e.t.statusz === 'tuzelt') fontos.push(e);
        else osszecsukhato.push(e);
      });
      const rendezett = fontos.concat(osszecsukhato);
      rendezett.forEach(function (e, sorszam) {
        const t = e.t;
        const chip = el('button', 'fa-chip fa-' + t.statusz);
        if (sorszam >= fontos.length) chip.classList.add('fa-rejtett');
        chip.type = 'button';
        chip.title = STATUSZ_CIM[t.statusz] + ' • Forrás: ' + forrasSzoveg(t.forras);
        chip.setAttribute('data-trace-idx', e.idx);

        const ikon = el('span', 'fa-ikon', STATUSZ_IKON[t.statusz]);
        chip.appendChild(ikon);
        chip.appendChild(el('span', 'fa-chip-nev', t.nev));
        if (t.statusz === 'tuzelt' && t.javasoltSzint != null) {
          vanTuzelt = true;
          const badge = el('span', 'fa-mini-szint', String(t.javasoltSzint));
          badge.style.background = szintSzin(kb, t.javasoltSzint);
          chip.appendChild(badge);
        }
        if (dontoIds[t.szabalyId]) chip.classList.add('fa-donto');
        chip.addEventListener('click', function () { reszletCb && reszletCb(t); });
        lista.appendChild(chip);
      });
      if (osszecsukhato.length) {
        const hianyzoDb = osszecsukhato.filter(function (e) { return e.t.statusz === 'nincs_adat'; }).length;
        const felirat = '+' + osszecsukhato.length + ' további szabály' + (hianyzoDb ? ' (' + hianyzoDb + ' hiányzó adatú)' : '');
        const tobbi = el('button', 'fa-chip fa-tobbi', felirat);
        tobbi.type = 'button';
        tobbi.addEventListener('click', function () {
          const nyitva = node.classList.toggle('fa-nyitva');
          tobbi.textContent = nyitva ? '– kevesebb' : felirat;
        });
        lista.appendChild(tobbi);
      }
      node.appendChild(lista);
      if (vanTuzelt) node.classList.add('fa-node-aktiv');
      wrap.appendChild(node);
      wrap.appendChild(el('div', 'fa-nyil', '▼'));
    });

    // Végső szint
    const veg = el('div', 'fa-node fa-veg');
    if (eredmeny.szint != null) {
      const badge = el('div', 'fa-veg-badge', String(eredmeny.szint));
      badge.style.background = szintSzin(kb, eredmeny.szint);
      veg.appendChild(badge);
      veg.appendChild(el('div', 'fa-veg-nev', szintNev(kb, eredmeny.szint)));
      const dontok = el('div', 'fa-veg-dontok');
      (eredmeny.dontoSzabalyok || []).forEach(function (d) {
        dontok.appendChild(el('div', 'fa-veg-donto', '◆ Döntő szabály: ' + d.nev + ' (' + forrasSzoveg(d.forras) + ')'));
      });
      veg.appendChild(dontok);
    } else {
      veg.appendChild(el('div', 'fa-veg-nincs', 'Nincs automatikus javaslat — egyetlen szabály sem teljesült. Töltse ki a hiányzó adatokat, vagy döntsön a folyamat alapján kézzel.'));
    }
    wrap.appendChild(veg);
    cel.appendChild(wrap);
  }

  const api = { folyamatabraRajzol: folyamatabraRajzol, forrasSzoveg: forrasSzoveg };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else global.Folyamatabra = api;
})(typeof window !== 'undefined' ? window : globalThis);
