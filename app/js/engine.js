/*
 * MSTR triázs döntéstámogató — szabálymotor (v2, adatvezérelt)
 * ============================================================
 * Alapelvek:
 *  - TISZTA függvény: (beteg, tudásbázis) → eredmény. Nincs rejtett állapot.
 *  - MINDEN szabálykiértékelés bekerül a nyomvonalba (trace), akkor is, ha nem
 *    teljesült / nem volt adat / nem alkalmazható — a döntés teljesen auditálható.
 *  - A motor SOHA nem tartalmaz orvosi küszöbértéket: minden szám a tudásbázisból
 *    (kb.js) jön, forrásoldal-hivatkozással.
 *  - A szabályok sík listában vannak (kb.rules), mindegyik `group` címkével; a
 *    kiértékelés a kb.stepOrder sorrendjében, csoportonként történik (ez adja a
 *    folyamatábra lépéseit is).
 *  - A gyermek életkor-specifikus HR/RR besorolás a kb.vitalBands táblákból
 *    kikereséssel történik (a számok a KB-ban maradnak) — csoportonként 1 lépés.
 *  - Végső szint = a tüzelt szabályok legmagasabb sürgőssége (legkisebb szám).
 *
 * Trace-státuszok: 'tuzelt' | 'nem_teljesult' | 'nincs_adat' | 'nem_alkalmazhato'
 */

(function (global) {
  'use strict';

  function gcsOsszeg(beteg) {
    if (beteg.gcsE != null && beteg.gcsV != null && beteg.gcsM != null) {
      return beteg.gcsE + beteg.gcsV + beteg.gcsM;
    }
    if (beteg.gcs != null) return beteg.gcs; // közvetlenül megadott összeg (pl. teszteset)
    return null;
  }

  function eletkorHonapban(beteg) {
    if (beteg.eletkorHonap != null) return beteg.eletkorHonap;
    if (beteg.eletkorEv != null) return beteg.eletkorEv * 12;
    return null;
  }

  function gyermekE(beteg, kb) {
    var hatarEv = (kb.meta && kb.meta.gyermekHatarEv != null) ? kb.meta.gyermekHatarEv : 18;
    if (beteg.gyermek === true) return true;   // teszteset explicit flag
    var kh = eletkorHonapban(beteg);           // EGYSÉGES korprecedencia (hónap-elsőbbség)
    if (kh == null) return null;
    return (kh / 12) < hatarEv;
  }

  // Egy feltétel-tömb kiértékelése (ÉS-kapcsolat). Visszatérés: {ok:true|false|null, hasznalt}
  function feltetelKiertekel(feltetelek, beteg, szarmaztatott) {
    var hasznalt = {}, vanHianyzo = false, hianyzoMezok = [];
    for (var i = 0; i < feltetelek.length; i++) {
      var f = feltetelek[i];
      var ertek = Object.prototype.hasOwnProperty.call(szarmaztatott, f.mezo) ? szarmaztatott[f.mezo] : beteg[f.mezo];
      hasznalt[f.mezo] = ertek == null ? null : ertek;
      if (ertek == null) { vanHianyzo = true; hianyzoMezok.push(f.mezo); continue; }
      if (f.min != null && !(ertek >= f.min)) return { ok: false, hasznalt: hasznalt };
      if (f.max != null && !(ertek <= f.max)) return { ok: false, hasznalt: hasznalt };
      if (f.egyenlo !== undefined && ertek !== f.egyenlo) return { ok: false, hasznalt: hasznalt };
      if (f.benne && f.benne.indexOf(ertek) === -1) return { ok: false, hasznalt: hasznalt };
      if (f.nemEgyenlo !== undefined && ertek === f.nemEgyenlo) return { ok: false, hasznalt: hasznalt };
    }
    if (vanHianyzo) return { ok: null, hasznalt: hasznalt, hianyzoMezok: hianyzoMezok };
    return { ok: true, hasznalt: hasznalt };
  }

  // Objektív felnőtt vitál-riasztási pontszám (tankönyv o.86, MEWS pontozótáblázat sávjai) —
  // a nyers számokból (RR/HR/alacsony-SBP/Temp) számolt résszel, a tudati-állapot (AVPU) komponens
  // NÉLKÜL (nincs tiszta AVPU-mezőnk; a GCS-alapú becslés félrevezető lenne) — ez a hiány KIZÁRÓLAG
  // alulszámlálhat, sosem túlszámlálhat, tehát az eredmény biztonságosan konzervatív alsó becslés.
  // A MAGAS SBP-sávok (>200) szándékosan kimaradnak: azoknak saját, tünet-alapú, pontosabb
  // forrás-szabályuk van (hipertoniaTunet), amivel ez ütközne (ld. lentebb + eset_08).
  // Csak FELNŐTTNÉL alkalmazandó (a gyermek élettani normálértékek teljesen mások — ld. vitalBands).
  function vitalSav(ertek, savok) {
    for (var i = 0; i < savok.length; i++) {
      var s = savok[i];
      if (s.min != null && ertek < s.min) continue;
      if (s.max != null && ertek > s.max) continue;
      return s.pont;
    }
    return 0;
  }
  function objektivVitalPontszam(beteg) {
    var pont = 0;
    if (beteg.rr != null) pont += vitalSav(beteg.rr, [
      { max: 8, pont: 2 }, { min: 9, max: 14, pont: 0 }, { min: 15, max: 20, pont: 1 },
      { min: 21, max: 29, pont: 2 }, { min: 30, pont: 3 },
    ]);
    if (beteg.hr != null) pont += vitalSav(beteg.hr, [
      { max: 39, pont: 2 }, { min: 40, max: 50, pont: 1 }, { min: 51, max: 100, pont: 0 },
      { min: 101, max: 110, pont: 1 }, { min: 111, max: 130, pont: 2 }, { min: 131, pont: 3 },
    ]);
    // Szisztolés vérnyomás: CSAK az ALACSONY (hipotenzió/sokk-gyanú) sávokat számítjuk be
    // (<=100 Hgmm) — a MAGAS sávokat (>200) szándékosan kihagyjuk, mert azoknak saját,
    // pontosabb, tünet-alapú forrás-szabályuk van (masodlagos_12-19: hipertoniaTunet
    // van→2/3, nincs→3/4), ami KIFEJEZETTEN megengedi, hogy önmagában magas vérnyomás,
    // kísérő tünet NÉLKÜL, csak MSTR 3-4 legyen — ha a magas sávok is beleszámítanának, ez
    // ütközne azzal (eset_08 regresszió volt: 222/130 Hgmm tünetmentes hipertóniás beteget
    // tévesen MSTR 2-re emelte volna MSTR 3 helyett). Az alacsony vérnyomásnak nincs ilyen
    // saját, ütköző szabálya — az önmagában a sokk egyik objektív jele, forrás szerint is.
    if (beteg.sys != null) pont += vitalSav(beteg.sys, [
      { max: 70, pont: 3 }, { min: 71, max: 80, pont: 2 }, { min: 81, max: 100, pont: 1 },
    ]);
    if (beteg.temp != null) pont += vitalSav(beteg.temp, [
      { max: 34.9, pont: 2 }, { min: 35, max: 36, pont: 1 }, { min: 36.01, max: 38, pont: 0 },
      { min: 38.01, max: 38.6, pont: 1 }, { min: 38.61, pont: 2 },
    ]);
    return pont;
  }

  // Gyermek HR/RR sáv → szint a kb.vitalBands "kiertekeles" logikája szerint:
  //  <b1→1, b1..b2-1→2, b2..b3-1→3, b3..b4→normál(null), b4+1..b5→3, b5+1..b6→2, >b6→1
  function savSzint(ertek, row) {
    if (ertek < row.b1) return 1;
    if (ertek < row.b2) return 2;
    if (ertek < row.b3) return 3;
    if (ertek <= row.b4) return null;   // normál (4-5, más módosító dönt)
    if (ertek <= row.b5) return 3;
    if (ertek <= row.b6) return 2;
    return 1;
  }

  function triazsKiertekel(beteg, kb) {
    var trace = [], figyelmeztetesek = [], jeloltek = [];
    var szarmaztatott = {
      gcs: gcsOsszeg(beteg),
      eletkorHonap: eletkorHonapban(beteg),
      gyermek: gyermekE(beteg, kb),
      objektivVitalPontszam: objektivVitalPontszam(beteg),
    };

    function rogzit(lepes, szabaly, statusz, hasznalt, javasoltSzint, megjegyzes, hianyzoMezok) {
      trace.push({
        lepes: lepes, szabalyId: szabaly.id, nev: szabaly.name,
        feltetelSzoveg: szabaly.condition_text || '',
        statusz: statusz, hasznaltAdatok: hasznalt || {},
        javasoltSzint: javasoltSzint != null ? javasoltSzint : null,
        forras: szabaly.source || [], megjegyzes: megjegyzes || '',
        hianyzoMezok: hianyzoMezok || [],
      });
      if (statusz === 'tuzelt' && javasoltSzint != null) {
        jeloltek.push({ szabalyId: szabaly.id, nev: szabaly.name, szint: javasoltSzint, forras: szabaly.source || [], lepes: lepes });
      }
      if (statusz === 'nincs_adat') {
        figyelmeztetesek.push({ tipus: 'hianyzo_adat', szabalyId: szabaly.id, szoveg: 'Hiányzó adat miatt nem értékelhető: ' + szabaly.name, hianyzoMezok: hianyzoMezok || [] });
      }
    }

    // hatókör-ellenőrzés (applies_to, életkorsáv, panasz-hatókör). Ha nem alkalmazható,
    // rögzít és true-t ad vissza (a hívó továbblép); egyébként false.
    function nemAlkalmazhato(lepes, sz) {
      if (sz.applies_to && sz.applies_to !== 'mind' && szarmaztatott.gyermek != null) {
        if (sz.applies_to === 'gyermek' && !szarmaztatott.gyermek) { rogzit(lepes, sz, 'nem_alkalmazhato', {}, null, 'Csak gyermekre vonatkozik'); return true; }
        if (sz.applies_to === 'felnott' && szarmaztatott.gyermek) { rogzit(lepes, sz, 'nem_alkalmazhato', {}, null, 'Csak felnőttre vonatkozik'); return true; }
      }
      if (sz.korMinHonap != null || sz.korMaxHonap != null) {
        var kh = szarmaztatott.eletkorHonap;
        if (kh == null) { rogzit(lepes, sz, 'nincs_adat', { eletkorHonap: null }, null, 'Életkor nélkül nem értékelhető'); return true; }
        if (sz.korMinHonap != null && kh < sz.korMinHonap) { rogzit(lepes, sz, 'nem_alkalmazhato', { eletkorHonap: kh }, null, 'Életkoron kívül'); return true; }
        if (sz.korMaxHonap != null && kh > sz.korMaxHonap) { rogzit(lepes, sz, 'nem_alkalmazhato', { eletkorHonap: kh }, null, 'Életkoron kívül'); return true; }
      }
      if (sz.csakPanaszok && sz.csakPanaszok.length) {
        if (!beteg.vezetoPanaszId || sz.csakPanaszok.indexOf(beteg.vezetoPanaszId) === -1) {
          rogzit(lepes, sz, 'nem_alkalmazhato', { vezetoPanaszId: beteg.vezetoPanaszId || null }, null, 'Nem ehhez a vezető panaszhoz tartozik');
          return true;
        }
      }
      return false;
    }

    var rulesByGroup = {};
    (kb.rules || []).forEach(function (r) {
      (rulesByGroup[r.group] = rulesByGroup[r.group] || []).push(r);
    });
    var bandsByGroup = {};
    (kb.vitalBands || []).forEach(function (b) {
      (bandsByGroup[b.group] = bandsByGroup[b.group] || []).push(b);
    });

    (kb.stepOrder || []).forEach(function (step) {
      var lepes = step.label;
      // 1) csoport szabályai
      (rulesByGroup[step.group] || []).forEach(function (sz) {
        if (nemAlkalmazhato(lepes, sz)) return;
        if (!sz.condition || !sz.condition.length) {
          // Tisztán panasz-alapú szabály: ha a hatókör a vezető panasz (csakPanaszok)
          // és a szabály szintet ad, a panasz kiválasztása maga a feltétel — tüzel.
          if (sz.csakPanaszok && sz.csakPanaszok.length && sz.level != null) {
            rogzit(lepes, sz, 'tuzelt', { vezetoPanaszId: beteg.vezetoPanaszId }, sz.level, 'A vezető panasz alapján (a forrás e panaszhoz kötött szintje)');
            return;
          }
          rogzit(lepes, sz, 'nem_teljesult', {}, null, 'Nincs gépi feltétel — kézi megítélést igényel' + (sz.level != null ? ' (a forrás szerint MSTR ' + sz.level + ')' : ''));
          return;
        }
        var ki = feltetelKiertekel(sz.condition, beteg, szarmaztatott);
        if (ki.ok === true) rogzit(lepes, sz, 'tuzelt', ki.hasznalt, sz.level);
        else if (ki.ok === false) rogzit(lepes, sz, 'nem_teljesult', ki.hasznalt, null);
        else rogzit(lepes, sz, 'nincs_adat', ki.hasznalt, null, '', ki.hianyzoMezok);
      });
      // 2) csoport vitál-sávtáblái (gyermek HR/RR)
      (bandsByGroup[step.group] || []).forEach(function (band) {
        var szabaly = { id: 'band_' + band.param, name: band.name, condition_text: band.kiertekeles || '', source: band.source || [] };
        if (band.applies_to === 'gyermek' && szarmaztatott.gyermek === false) {
          rogzit(lepes, szabaly, 'nem_alkalmazhato', {}, null, 'Csak gyermekre vonatkozik'); return;
        }
        var kh = szarmaztatott.eletkorHonap, val = beteg[band.param];
        if (kh == null || val == null) {
          rogzit(lepes, szabaly, 'nincs_adat', { eletkorHonap: kh, ertek: val == null ? null : val }, null, 'Életkor és ' + band.param.toUpperCase() + ' szükséges'); return;
        }
        var row = null;
        for (var i = 0; i < band.rows.length; i++) {
          if (kh >= band.rows[i].korMinHonap && kh <= band.rows[i].korMaxHonap) { row = band.rows[i]; break; }
        }
        if (!row) { rogzit(lepes, szabaly, 'nem_alkalmazhato', { eletkorHonap: kh }, null, 'Nincs korcsoport a táblában'); return; }
        var lvl = savSzint(val, row);
        var hasznalt = { eletkor: row.eletkor, ertek: val, savhatarok: [row.b1, row.b2, row.b3, row.b4, row.b5, row.b6] };
        if (lvl == null) rogzit(lepes, szabaly, 'tuzelt', hasznalt, null, 'Normál tartomány (' + row.b3 + '–' + row.b4 + ') → 4-5, más módosító dönt');
        else rogzit(lepes, szabaly, 'tuzelt', hasznalt, lvl, band.param.toUpperCase() + '=' + val + ' a(z) ' + row.eletkor + ' korcsoport sávjai szerint → MSTR ' + lvl);
      });
    });

    // ---- végeredmény ----
    var szint = null, dontoSzabalyok = [];
    var ertekelheto = jeloltek.filter(function (j) { return j.szint != null; });
    if (ertekelheto.length) {
      szint = Math.min.apply(null, ertekelheto.map(function (j) { return j.szint; }));
      dontoSzabalyok = ertekelheto.filter(function (j) { return j.szint === szint; });
    } else {
      var panasz = (kb.complaints || []).filter(function (p) { return p.id === beteg.vezetoPanaszId; })[0];
      if (panasz && panasz.defaultLevel != null) {
        szint = panasz.defaultLevel;
        dontoSzabalyok = [{ szabalyId: 'panasz_alapszint', nev: 'Vezető panasz alapszintje: ' + panasz.name, szint: szint, forras: panasz.source || [] }];
        trace.push({ lepes: '1. Kritikus megjelenés / azonnali besorolás', szabalyId: 'panasz_alapszint', nev: 'Vezető panasz alapszintje', feltetelSzoveg: 'Egyetlen módosító sem tüzelt — a panasz alapszintje érvényes', statusz: 'tuzelt', hasznaltAdatok: { vezetoPanaszId: beteg.vezetoPanaszId }, javasoltSzint: szint, forras: panasz.source || [], megjegyzes: '' });
      }
    }

    // 4-5. szint őrfeltétel (folyamat_45_vitalis_normal)
    if (szint != null && szint >= 4 && kb.processRules) {
      var guard = (kb.processRules).filter(function (r) { return r.id === 'folyamat_45_vitalis_normal'; })[0];
      var hianyzikVital = trace.some(function (t) { return t.statusz === 'nincs_adat' && /^2/.test(t.lepes); });
      if (guard && hianyzikVital) {
        figyelmeztetesek.push({ tipus: 'orfeltetel', szabalyId: guard.id, szoveg: (guard.condition_text || 'A 4-5. szinthez a vitális paramétereknek normálisnak kell lenniük') + ' — hiányzó vitális adatok mellett ez nem igazolt.', forras: guard.source || [] });
      }
    }

    return {
      szint: szint, dontoSzabalyok: dontoSzabalyok, jeloltek: jeloltek,
      trace: trace, figyelmeztetesek: figyelmeztetesek, szarmaztatott: szarmaztatott,
    };
  }

  var api = { triazsKiertekel: triazsKiertekel, gcsOsszeg: gcsOsszeg };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else global.TriazsMotor = api;
})(typeof window !== 'undefined' ? window : globalThis);
