/*
 * MSTR triázs — kártya-wizard vezérlő.
 * A felület esztétikája/mechanizmusa az mstr_triage_v3 munkából inspirált
 * (panasz-vezérelt flow, nagy tap-targetek, döntési napló), DE a döntést a mi
 * adatvezérelt motorunk (engine.js) hozza a forráshivatkozott tudásbázisból
 * (kb.js). A wizard csak összegyűjti a bemenetet és megjeleníti — a szint és a
 * döntési út a motorból jön, így a transzparencia és a forráshűség megmarad.
 */
(function () {
  'use strict';
  var KB = window.MSTR_KB || {};
  var $ = function (id) { return document.getElementById(id); };
  var el = function (t, c, txt) { var e = document.createElement(t); if (c) e.className = c; if (txt != null) e.textContent = txt; return e; };

  // ---- Ikonkészlet (letisztult, egységes vonalas SVG — nincs emoji) ----------
  var ICONS = {
    history: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.2 2"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-13.7-4.9L4 8"/><path d="M4 4v4h4"/><path d="M4 13a8 8 0 0 0 13.7 4.9L20 16"/><path d="M20 20v-4h-4"/>',
    person: '<circle cx="12" cy="8" r="3.4"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/>',
    idcard: '<rect x="3" y="5" width="18" height="14" rx="2.2"/><circle cx="8.5" cy="11" r="2"/><path d="M6 15.5a3 3 0 0 1 5 0"/><path d="M14 10h4M14 13.5h4"/>',
    complaint: '<rect x="8.5" y="3" width="7" height="4" rx="1.2"/><path d="M9 5H6.2A1.7 1.7 0 0 0 4.5 6.7v12.6A1.7 1.7 0 0 0 6.2 21h11.6a1.7 1.7 0 0 0 1.7-1.7V6.7A1.7 1.7 0 0 0 17.8 5H15"/>',
    printer: '<path d="M6.5 9V3.5h11V9"/><rect x="4" y="9" width="16" height="7.5" rx="1.6"/><path d="M7 16.5h10V21H7z"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    bulb: '<path d="M9.5 18h5M10.5 21h3"/><path d="M12 3a5.5 5.5 0 0 0-3.6 9.6c.6.6.9 1.2 1 2.4h5.2c.1-1.2.4-1.8 1-2.4A5.5 5.5 0 0 0 12 3Z"/>',
    bolt: '<path d="M13 3 5.5 13H11l-1 8 8.5-11H13z"/>',
    shield: '<path d="M12 3.5 5.5 6v5.2c0 4.3 2.8 7.2 6.5 8.6 3.7-1.4 6.5-4.3 6.5-8.6V6z"/>',
    book: '<path d="M12 6.5C12 5 10.5 4 8.5 4S4 5 4 6.5v11C4 16 5.5 15.2 8.5 15.2S12 16 12 17.5"/><path d="M12 6.5C12 5 13.5 4 15.5 4S20 5 20 6.5v11C20 16 18.5 15.2 15.5 15.2S12 16 12 17.5"/>',
    pause: '<rect x="7" y="5" width="3.4" height="14" rx="1.1"/><rect x="13.6" y="5" width="3.4" height="14" rx="1.1"/>',
    warn: '<path d="M10.3 4.2 3.2 16.9A2 2 0 0 0 5 20h14a2 2 0 0 0 1.8-3.1L13.7 4.2a2 2 0 0 0-3.4 0Z"/><path d="M12 9.5v4.2M12 17h.01"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    radio: '<circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M6 6a9 9 0 0 0 0 12M18 6a9 9 0 0 1 0 12"/>',
    utvonal: '<path d="M6 21V7a3 3 0 0 1 3-3h6l3 3-3 3H9"/><circle cx="6" cy="21" r="0.6"/><path d="M6 14v7"/>'
  };
  function ikonSvg(name) {
    var inner = ICONS[name] || '';
    return '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>';
  }
  // ikonos gomb/elem: vezető SVG-ikon + szöveg (a szöveg statikus, nem user-input)
  function elIko(tag, cls, name, txt) {
    var e = el(tag, cls); e.innerHTML = ikonSvg(name) + '<span>' + txt + '</span>'; return e;
  }
  // Beillesztett (nem megbízható) szöveg HTML-be ágyazás előtt — a lelet-import
  // a MedSolution-ból másolt nyers szöveget vesz át, amiben lehet < > & karakter.
  function htmlBiztos(sz) {
    var d = document.createElement('div'); d.textContent = String(sz == null ? '' : sz); return d.innerHTML;
  }
  // A KB idő-szövegei hol tartalmazzák a címkét ("orvosi értékelés 30 percen belül"),
  // hol nem ("azonnal") — így nem lesz belőle "Orvosi értékelés: orvosi értékelés …".
  function cimkezettIdo(cimke, ertek) {
    var v = String(ertek || '').trim();
    if (!v) return cimke + ': —';
    if (v.toLowerCase().indexOf(cimke.toLowerCase()) === 0) return v.charAt(0).toUpperCase() + v.slice(1);
    return cimke + ': ' + v;
  }
  function ikonBtnEl(cls, name) { var b = el('button', cls); b.type = 'button'; b.innerHTML = ikonSvg(name); return b; }

  // ---- állapot --------------------------------------------------------------
  var S = { step: 'azonositas', history: [], beteg: {}, azon: {}, catKey: null, pathLog: [], utolso: null, autoMezo: {}, keziMezo: {} };

  // Derivációk: kemény numerikus paraméterből előre kitöltött módosító (forráshű).
  // A legsúlyosabb nyer, ha több paraméter is ugyanarra a mezőre mutat. Kézzel
  // beállított mezőt (keziMezo) SOHA nem ír felül. Ha a numerikus adat eltűnik,
  // az általa auto-kitöltött mező visszaáll (üres).
  function ertekMap(map, ertek) {
    for (var i = 0; i < map.length; i++) {
      var m = map[i];
      if (m.min != null && ertek < m.min) continue;
      if (m.max != null && ertek > m.max) continue;
      return m.value;
    }
    return null;
  }
  function alkalmazDerivaciok() {
    // 1) célértékek — a kapu-feltétel (gate) DERIVÁCIÓNKÉNT érvényesül, MIELŐTT a
    //    célértékbe kerülne (különben egy kapu nélküli deriváció átvehetné más
    //    deriváció értékét). Ütközéskor a súlyosabb nyer.
    var celErtek = {}; // to -> {value, note, source, from, mode}
    (KB.derivations || []).forEach(function (d) {
      var ertek = S.beteg[d.from];
      if (ertek == null) return;
      if (d.gate && S.beteg[d.gate.field] !== d.gate.equals) return; // kapu nem teljesült
      var val = ertekMap(d.map, ertek);
      if (val == null) return;
      var jelenlegi = celErtek[d.to];
      if (jelenlegi) {
        var sorrend = (KB.derivValueOrder && KB.derivValueOrder[d.to]) || [];
        if (sorrend.indexOf(val) > sorrend.indexOf(jelenlegi.value)) return; // meglévő súlyosabb marad
      }
      celErtek[d.to] = { value: val, note: d.note, source: d.source, from: d.from, mode: d.mode || 'auto' };
    });
    // 2) alkalmazás célonként
    S.javaslat = {}; // to -> {value, note, source} (suggest-mód: NEM tölti ki, csak javasol)
    Object.keys(celErtek).forEach(function (to) {
      var cel = celErtek[to];
      if (cel.mode === 'suggest') {
        if (S.beteg[to] == null && !S.keziMezo[to]) S.javaslat[to] = cel;
      } else { // 'auto'
        if (S.keziMezo[to]) { delete S.autoMezo[to]; }
        else { S.beteg[to] = cel.value; S.autoMezo[to] = cel; }
      }
    });
    // 3) auto-mezők visszavonása, ha a kiváltó adat/kapu megszűnt
    (KB.derivations || []).forEach(function (d) {
      if ((d.mode || 'auto') !== 'auto') return;
      if (!celErtek[d.to] && S.autoMezo[d.to] && !S.keziMezo[d.to]) { delete S.beteg[d.to]; delete S.autoMezo[d.to]; }
    });
  }

  // SZÁMÍTOTT MEZŐK: a bemenetek (klinikai select + numerikus sávok) közül a
  // legsúlyosabbat rendeli a cél-mezőhöz (pl. nehezlegzesFok). A nővér a
  // bemeneteket állítja, a numerikust NEM kell újra megadni. S.szamitott őrzi a
  // provenienciát a kijelzéshez.
  function alkalmazSzamitottak() {
    S.szamitott = {};
    (KB.computedFields || []).forEach(function (cf) {
      var order = cf.order || [];
      var jeloltek = [];
      (cf.inputs || []).forEach(function (inp) {
        var ertek = S.beteg[inp.from];
        if (ertek == null) return;
        if (inp.gate && S.beteg[inp.gate.field] !== inp.gate.equals) return;
        var sev = inp.map ? ertekMap(inp.map, ertek) : ertek; // térkép nélkül a select-érték maga a fokozat
        if (sev == null) return;
        jeloltek.push({ sev: sev, from: inp.from, label: inp.label, ertek: ertek });
      });
      if (jeloltek.length) {
        var best = jeloltek[0];
        jeloltek.forEach(function (j) { if (order.indexOf(j.sev) < order.indexOf(best.sev)) best = j; });
        S.beteg[cf.field] = best.sev;
        S.szamitott[cf.field] = { value: best.sev, jeloltek: jeloltek, best: best, note: cf.note, source: cf.source };
      } else {
        delete S.beteg[cf.field];
      }
    });
  }

  function ertekel() {
    alkalmazDerivaciok();
    alkalmazSzamitottak();
    S.utolso = TriazsMotor.triazsKiertekel(S.beteg, KB);
    return S.utolso;
  }

  // ---- lépéssorrend (dinamikus) ----------------------------------------------
  var LEPESEK = [
    { id: 'azonositas', cim: 'Azonosítás' },
    { id: 'kritikus', cim: 'Első megtekintés' },
    { id: 'kor', cim: 'Beteg kora' },
    { id: 'panaszKat', cim: 'Vezető panasz' },
    { id: 'vital', cim: 'Vitálparaméterek' },
    { id: 'megfigyeles', cim: 'Légzés · keringés · láz · módosítók' },
    { id: 'fajdalom', cim: 'Fájdalom' },
    { id: 'modosito', cim: 'Panasz-specifikus' },
    { id: 'gyermek', cim: 'Gyermek' },
    { id: 'eredmeny', cim: 'Eredmény' },
  ];
  function lepesIndex(id) { for (var i = 0; i < LEPESEK.length; i++) if (LEPESEK[i].id === id) return i; return 0; }

  function kihagyando(id) {
    if (id === 'megfigyeles') return relevansMezok(mezokCsoportban('megfigyeles')).length === 0;
    if (id === 'fajdalom') return !mezoRelevansId('fajdalomPont');
    if (id === 'modosito') return relevansMezok(lathatoModositok()).length === 0;
    if (id === 'gyermek') {
      if (!(S.utolso && S.utolso.szarmaztatott && S.utolso.szarmaztatott.gyermek === true)) return true;
      return relevansMezok(gyermekMezok()).length === 0;
    }
    return false;
  }

  // ---- DINAMIKUS KÉRDÉS-KIHAGYÁS (biztonságos) --------------------------------
  // A triázs a LEGSÚLYOSABB elem szerint sorol (végső szint = a tüzelt szabályok
  // minimuma). Ha már van egy "padló" (pl. min. MSTR 2), akkor egy olyan kérdést,
  // amelynek MINDEN lehetséges kimenete >= a padló (tehát csak enyhébb szintet
  // adhatna), felesleges feltenni — a besorolást nem változtathatja. Amelyik
  // viszont súlyosbíthat (kisebb szám felé), azt továbbra is kérdezzük.
  // SOHA nem hagyunk ki olyan kérdést, ami a szintet csökkenthetné (súlyosbíthatná).
  // Ha egy mező egy SZÁMÍTOTT mező bemenete (pl. legzesiJelek → nehezlegzesFok),
  // örökölje a CÉLMEZŐ szabályai szerinti legjobb szintet — így az indirekt (számított
  // mezőn át ható) kérdés sem maradhat ki tévedésből a dinamikus kihagyáskor.
  function computedCel(fieldId) {
    var cel = null;
    (KB.computedFields || []).forEach(function (cf) {
      (cf.inputs || []).forEach(function (inp) { if (inp.from === fieldId) cel = cf.field; });
    });
    return cel;
  }
  // KONTEXTUS-FÜGGETLEN opció-súly (minden szabályból a min. szint, + számított-mező fallback) —
  // a megjelenítési sorrendhez (negatív/enyhe elöl → súlyos hátul), a betegtől függetlenül, egységesen.
  var _opcioSulyCache = null;
  function opcioSulyMap() {
    if (_opcioSulyCache) return _opcioSulyCache;
    var m = {};
    (KB.rules || []).forEach(function (r) {
      if (r.level == null) return;
      (r.condition || []).forEach(function (c) {
        if (c.egyenlo == null) return;
        var k = c.mezo + '|' + c.egyenlo;
        if (m[k] == null || r.level < m[k]) m[k] = r.level;
      });
    });
    _opcioSulyCache = m; return m;
  }
  function opcioSuly(fieldId, value) {
    var m = opcioSulyMap();
    var d = m[fieldId + '|' + value];
    if (d != null) return d;
    var cf = computedCel(fieldId);
    if (cf && cf !== fieldId && m[cf + '|' + value] != null) return m[cf + '|' + value];
    return null;
  }
  // Igaz, ha a szabály valamelyik MÁSIK feltétele a MÁR ISMERT adatokból nézve
  // biztosan hamis — ilyenkor a szabály e betegnél nem tüzelhet, tehát a kérdést
  // fölösleges feltenni. (Pl. a felnőtt láz-létra feltétele eletkorEv>=16; enélkül
  // a 6 éves betegnél is megjelent a 4 opciós "lázas küllem" kérdés, amire viszont
  // egyetlen gyermek-szabály sem reagál — néma, félrevezető kérdés volt.)
  function marCafolt(r, fieldId) {
    var d = (S.utolso && S.utolso.szarmaztatott) || {};
    var kh = d.eletkorHonap;
    if (kh != null) {
      if (r.korMinHonap != null && kh < r.korMinHonap) return true;
      if (r.korMaxHonap != null && kh > r.korMaxHonap) return true;
    }
    return (r.condition || []).some(function (c) {
      if (c.mezo === fieldId) return false;
      var v = Object.prototype.hasOwnProperty.call(d, c.mezo) ? d[c.mezo] : S.beteg[c.mezo];
      if (v == null) return false;                       // nem ismert → nem cáfolt
      if (c.min != null && !(v >= c.min)) return true;
      if (c.max != null && !(v <= c.max)) return true;
      if (c.kisebb != null && !(v < c.kisebb)) return true;
      if (c.nagyobb != null && !(v > c.nagyobb)) return true;
      if (c.egyenlo !== undefined && v !== c.egyenlo) return true;
      if (c.benne && c.benne.indexOf(v) === -1) return true;
      if (c.nemEgyenlo !== undefined && v === c.nemEgyenlo) return true;
      return false;
    });
  }
  function mezoLegjobbSzint(fieldId, _melyseg) {
    var cel = computedCel(fieldId);
    if (cel && cel !== fieldId && (_melyseg || 0) < 3) return mezoLegjobbSzint(cel, (_melyseg || 0) + 1);
    var best = null;
    (KB.rules || []).forEach(function (r) {
      if (r.level == null) return;
      var hasznalja = (r.condition || []).some(function (c) { return c.mezo === fieldId; });
      if (!hasznalja) return;
      // hatókör-szűrés: alkalmazható-e erre a betegre / panaszra
      if (r.applies_to === 'gyermek' && !(S.utolso && S.utolso.szarmaztatott.gyermek === true)) return;
      if (r.applies_to === 'felnott' && (S.utolso && S.utolso.szarmaztatott.gyermek === true)) return;
      if (r.csakPanaszok && r.csakPanaszok.length) {
        if (!S.beteg.vezetoPanaszId || r.csakPanaszok.indexOf(S.beteg.vezetoPanaszId) === -1) return;
      }
      if (marCafolt(r, fieldId)) return;   // egyéb feltétele a már ismert adatból hamis
      if (best == null || r.level < best) best = r.level;
    });
    return best; // null = nincs szintet adó szabály ehhez a mezőhöz
  }
  function mezoRelevansId(fieldId) {
    // Előre kitöltött (derivált), még meg nem erősített mezőt MINDIG mutatunk,
    // hogy a felhasználó ellenőrizhesse — akkor is, ha a padló miatt egyébként
    // kihagynánk (pl. az O₂ alapján súlyosnak jelölt nehézlégzés adta a padlót).
    if (S.keziMezo[fieldId]) return true;                                     // amit a nővér már megadott, MINDIG átállítható (reverzibilis)
    if (S.autoMezo[fieldId] && !S.keziMezo[fieldId]) return true;
    if ((S.javaslat || {})[fieldId] && S.beteg[fieldId] == null) return true; // van rá numerikus alapú javaslat → mutassuk
    // Az akut/krónikus szaturáció-kérdés ENYHÍTHET is (krónikus/COPD alapértéknél a szaturációs
    // padló nem érvényes, tankönyv 31. o.) — ezért amíg valamely szaturációs padló ettől függ,
    // a kérdés (és a saját alapértékhez mért esés) releváns, a lépés nem maradhat ki.
    if ((fieldId === 'o2Akut' || fieldId === 'relativO2Eses') && o2AlapertekDonthet()) return true;
    var padlo = S.utolso ? S.utolso.szint : null;
    if (padlo == null) return true;                 // nincs még szint → mindent kérdezünk
    var best = mezoLegjobbSzint(fieldId);
    if (best == null) return false;                 // nem tud szintet adni → nem befolyásol
    return best < padlo;                            // csak ha súlyosbíthat (kisebb szám)
  }
  function o2AlapertekDonthet() {
    return !!(S.utolso && S.utolso.o2AlapertekFuggo && S.utolso.o2AlapertekFuggo.length);
  }
  // Igaz, ha a mostani MSTR 1-et KIZÁRÓLAG olyan szaturációs padló adja, amelyet egy
  // „krónikus / COPD” válasz feloldana, és a kérdés még nincs megválaszolva.
  function mstr1CsakSzaturaciobol() {
    var er = S.utolso;
    if (!er || er.szint !== 1 || S.beteg.o2Akut || !o2AlapertekDonthet()) return false;
    return (er.dontoSzabalyok || []).every(function (d) { return er.o2AlapertekFuggo.indexOf(d.szabalyId) !== -1; });
  }
  function mezoRelevans(f) { return mezoRelevansId(f.id); }
  function relevansMezok(lista) { return lista.filter(mezoRelevans); }

  // Hány releváns-hatókörű kérdést hagytunk ki a padló miatt (átláthatósághoz).
  function kihagyottKerdesek() {
    var padlo = S.utolso ? S.utolso.szint : null;
    if (padlo == null) return 0;
    var jeloltek = mezokCsoportban('megfigyeles').concat(lathatoModositok());
    jeloltek.push({ id: 'fajdalomPont' });
    if (S.utolso.szarmaztatott.gyermek === true) jeloltek = jeloltek.concat(gyermekMezok());
    var db = 0;
    jeloltek.forEach(function (f) {
      var best = mezoLegjobbSzint(f.id);
      if (best != null && best >= padlo) db++;
    });
    return db;
  }
  function kovetkezo(id, irany) {
    var i = lepesIndex(id);
    do { i += irany; } while (i > 0 && i < LEPESEK.length - 1 && kihagyando(LEPESEK[i].id));
    return LEPESEK[Math.max(0, Math.min(LEPESEK.length - 1, i))].id;
  }

  // ---- mezőválogatás a KB-ból -------------------------------------------------
  // "Hasznos" mező: valamely szabály feltétele hivatkozik rá, VAGY egy számított
  // mező bemenete/kapuja. A sehol nem használt (holt) mezőket nem kérdezzük.
  var _hasznosCache = null;
  function hasznosMezok() {
    if (_hasznosCache) return _hasznosCache;
    var s = {};
    (KB.rules || []).forEach(function (r) { (r.condition || []).forEach(function (c) { s[c.mezo] = true; }); });
    (KB.computedFields || []).forEach(function (cf) {
      s[cf.field] = true;
      (cf.inputs || []).forEach(function (inp) { s[inp.from] = true; if (inp.gate) s[inp.gate.field] = true; });
    });
    (KB.derivations || []).forEach(function (d) {   // deriváció kapuja/célja is "hasznos"
      if (d.gate) s[d.gate.field] = true;
      if (d.to) s[d.to] = true;
    });
    _hasznosCache = s; return s;
  }
  function mezoHasznos(f) { return !!hasznosMezok()[f.id]; }

  function mezokCsoportban(group) {
    return (KB.inputFields || []).filter(function (f) {
      if (f.id === 'kritikusMegjelenes') return false;
      if (f.computed) return false;                 // számított mező — nem kérdés
      if (f.pediatricOnly) return false;
      if (f.csakPanaszok) return false;
      if (f.id === 'fajdalomLokalizacio' || f.id === 'fajdalomJelleg' || f.id === 'fajdalomPont') return false;
      if (!mezoHasznos(f)) return false;            // holt mező — nem kérdezzük
      return f.group === group;
    });
  }
  function lathatoModositok() {
    return (KB.inputFields || []).filter(function (f) {
      if (f.pediatricOnly) return false;
      if (!f.csakPanaszok) return false;
      return S.beteg.vezetoPanaszId && f.csakPanaszok.indexOf(S.beteg.vezetoPanaszId) !== -1;
    });
  }
  function gyermekMezok() {
    return (KB.inputFields || []).filter(function (f) {
      if (!f.pediatricOnly) return false;
      // Panasz-hatókör: a lathatoModositok()-kal AZONOS szűrés. Enélkül a panaszhoz
      // kötött gyermek-kérdések minden gyermek-panasznál előjöttek (pl. a csecsemő-
      // köhögés kérdése bokasérülésnél is), és a válaszuk téves eszkalációt adott.
      if (f.csakPanaszok && f.csakPanaszok.length) {
        return !!S.beteg.vezetoPanaszId && f.csakPanaszok.indexOf(S.beteg.vezetoPanaszId) !== -1;
      }
      return true;
    });
  }

  // ---- navigáció --------------------------------------------------------------
  function megy(id) { S.history.push(S.step); S.step = id; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function vissza() { if (S.history.length) { S.step = S.history.pop(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }
  function ujra() {
    S = { step: 'azonositas', history: [], beteg: {}, azon: {}, catKey: null, pathLog: [], utolso: null, autoMezo: {}, keziMezo: {} };
    aktivTorol(); ertekel(); render();
  }

  // ---- PERZISZTÁLÁS + BETEG-PARKOLÁS (localStorage) ---------------------------
  // Adatvesztés-védelem (lapfrissítés/összeomlás) + párhuzamos függő betegek.
  var STORE_AKTIV = 'mstr_aktiv_v1', STORE_PARK = 'mstr_parkolt_v1';
  // A beillesztett nyers MedSol-lelet a TAJ-számot, a nevet és a születési dátumot is
  // tartalmazza. A feldolgozás után erre a nyers szövegre már nincs funkcionális szükség,
  // ezért a TÁROLÁSBÓL kimetsszük az azonosító sorokat. A képernyőn (S.leletRaw) változatlan
  // marad, amíg a felvétel tart — csak a lemezre írt másolat redaktált.
  function leletRedakt(t) {
    if (!t) return '';
    var sorok = String(t).split('\n');
    var kihagyott = 0;
    var maradt = sorok.filter(function (sor) {
      var azonosito = /^\s*(TAJ|Beteg\s*neve|Sz[uü]let[eé]si|Anyja\s*neve|Lakc[ií]m)\b/i.test(sor);
      if (azonosito) kihagyott++;
      return !azonosito;
    });
    // Az azonosító sorokat EGÉSZBEN elhagyjuk. (Korábban csak az értéket cseréltük
    // helyőrzőre — abból viszont a lelet-értelmező a helyőrzőt olvasta ki BETEGNÉVKÉNT,
    // ha valaki a visszatöltött szöveget újra átvette.)
    if (kihagyott) maradt.push('[' + kihagyott + ' azonosító sor a tárolásból kihagyva]');
    return maradt.join('\n');
  }
  function sMentheto() {
    // A tetra és a betegut is IDE tartozik: a TETRA-lapot élő rádiós riasztás közben töltik,
    // a betegút-checklistet pedig a triázs után — mindkettő elveszett lapfrissítéskor, és
    // beteg-parkoláskor sem ment a beteggel. (A history csak összefoglalót tárol, azt nem érinti.)
    return { step: S.step, beteg: S.beteg, azon: S.azon, catKey: S.catKey, pathLog: S.pathLog, keziMezo: S.keziMezo, panaszKereso: S.panaszKereso, leletRaw: leletRedakt(S.leletRaw), leletMsg: S.leletMsg, tetra: S.tetra, betegut: S.betegut };
  }
  function sVisszaallit(o) {
    S = { step: o.step || 'azonositas', history: [], beteg: o.beteg || {}, azon: o.azon || {}, catKey: o.catKey || null, pathLog: o.pathLog || [], utolso: null, autoMezo: {}, keziMezo: o.keziMezo || {}, panaszKereso: o.panaszKereso || '', leletRaw: o.leletRaw || '', leletMsg: o.leletMsg || '', tetra: o.tetra || {}, betegut: o.betegut || {} };
    ertekel();
  }
  function perzisztal() { try { localStorage.setItem(STORE_AKTIV, JSON.stringify(idobelyeggel(sMentheto()))); } catch (e) {} }
  function aktivTorol() { try { localStorage.removeItem(STORE_AKTIV); } catch (e) {} }
  function vanErdemiKitoltes() {
    // A TETRA-lap is érdemi tartalom: élő rádiós riasztás közben töltik, és eddig az
    // "Új beteg" gomb megerősítés és parkolás nélkül eldobta (betegbiztonsági lektor).
    var vanTetra = S.tetra && Object.keys(S.tetra).some(function (k) {
      var v = S.tetra[k]; return v !== '' && v != null && v !== false;
    });
    return (S.beteg && Object.keys(S.beteg).length > 0) || (S.azon && S.azon.raw) || !!S.beteg.vezetoPanaszId || vanTetra;
  }
  function parkoltak() { try { return JSON.parse(localStorage.getItem(STORE_PARK) || '[]'); } catch (e) { return []; } }
  function parkoltakMent(arr) { try { localStorage.setItem(STORE_PARK, JSON.stringify(arr)); } catch (e) {} }
  function ujId() { return 'p' + Date.now() + Math.floor(Math.random() * 1000); }
  // Gyors (pontos kor nélküli) felnőtt kor-kategóriák. Az 'ev' belső helyettesítő érték, SOHA nem jelenik meg.
  // 76 > 75, így a 75 év feletti lázas beteg MSTR 2 szabálya (esc_idos_lazas_immunszupprimalt) tüzel;
  // 45 minden felnőtt küszöb (≥16, <18, >75) szempontjából a 18–75 éves sávba esik.
  var KOR_KATOK = {
    'Felnőtt': { ev: 45, gomb: '18–75 év', al: 'pontos kor nélkül', felirat: 'Felnőtt (18–75 év)' },
    'Idős75': { ev: 76, gomb: '75 év felett', al: 'pontos kor nélkül', felirat: '75 év feletti' }
  };
  function korKatFelirat(k) { return KOR_KATOK[k] ? KOR_KATOK[k].felirat : k; }
  function betegCimke() {
    if (S.azon && (S.azon.nev || S.azon.id)) return S.azon.nev || S.azon.id;
    var p = (KB.complaints || []).filter(function (x) { return x.id === S.beteg.vezetoPanaszId; })[0];
    if (p) return p.name;
    if (S.beteg.korKat) return korKatFelirat(S.beteg.korKat) + ' beteg';   // pl. "75 év feletti beteg" — a szám csak belső helyettesítő érték
    if (S.beteg.eletkorEv != null) return S.beteg.eletkorEv + ' éves beteg';
    return 'Névtelen beteg';
  }
  function parkol() {
    if (!vanErdemiKitoltes()) return false;
    var arr = parkoltak();
    arr.push({ id: ujId(), mentveTs: Date.now(), cimke: betegCimke(), lepesCim: (LEPESEK[lepesIndex(S.step)] || {}).cim || '', szint: (S.utolso && S.utolso.szint) || null, S: sMentheto() });
    parkoltakMent(arr); return true;
  }
  function parkoltBetolt(id) {
    var arr = parkoltak(), idx = -1;
    for (var i = 0; i < arr.length; i++) if (arr[i].id === id) { idx = i; break; }
    if (idx < 0) return;
    var cel = arr[idx]; arr.splice(idx, 1);
    if (vanErdemiKitoltes() && S.step !== 'eredmeny') arr.push({ id: ujId(), mentveTs: Date.now(), cimke: betegCimke(), lepesCim: (LEPESEK[lepesIndex(S.step)] || {}).cim || '', szint: (S.utolso && S.utolso.szint) || null, S: sMentheto() });
    parkoltakMent(arr);
    sVisszaallit(cel.S); render();
  }
  function parkoltTorol(id) {
    var arr = parkoltak().filter(function (x) { return x.id !== id; });
    parkoltakMent(arr); render();
  }

  // ---- ADATMEGŐRZÉS: automatikus lejárat + átlátható törlés ---------------------
  // A készüléken tárolt betegadat (név, KBA, életkor, panasz, vitálértékek) eddig
  // KORLÁTLAN ideig megmaradt: lapfrissítés, böngészőzárás és a tablet újraindítása
  // után is. A mentés célja a munkavédelem (a félbehagyott felvétel ne vesszen el),
  // ezért kikapcsolni nem lehet — de a megőrzésnek van funkcionális határa: a műszak.
  // MEGOLDÁS: minden betegadatot tartalmazó rekord időbélyeget kap, és a megőrzési
  // időn túli rekordok betöltéskor automatikusan törlődnek. A törlés SOSEM csendes:
  // az ápoló értesítést kap róla, és bármikor meg tudja nézni és törölni az egészet.
  var MEGORZES_ORA = 12;                       // egy műszak + átadás
  // Néma visszatöltés csak eddig: ennél régebbi felvételnél a felület MEGKÉRDEZI, hogy
  // folytatja-e. Ok: egy órákkal korábbi beteg neve és vitálértékei egyébként úgy
  // jelennének meg, mintha épp most vették volna fel őket — ez rosszabb, mint az
  // adatvesztés. A 2 óra TISZTÁN ÜZEMELTETÉSI döntés: a forrás megőrzési időt sehol
  // nem ad meg, és ezt a számot SEMMILYEN forráshely nem támasztja alá. (Korábban itt
  // egy forrásra hivatkozó indoklás állt — az MSTR 5 120 perces újraértékelési időköze —,
  // de az állítás, hogy ez a rendszer leghosszabb klinikai időköze, tényszerűen hamis:
  // él 12 órás és 2 órás klinikai időablak is a másodlagos módosítók között.)
  var NEMA_VISSZATOLTES_ORA = 2;
  // A torlódási nézet „régóta bekapcsolva" emlékeztetőjének küszöbe. SZÁNDÉKOSAN külön
  // konstans a megőrzési időtől, még ha most azonos is az értékük: két különböző dologról
  // van szó, és nem szerencsés, hogy ugyanabban a percben kérdezzen rá az érvényességre,
  // amikor a leghosszabban váró beteg lekerül a listáról.
  var TORLODAS_EMLEKEZTETO_ORA = 12;
  var MEGORZES_MS = MEGORZES_ORA * 60 * 60 * 1000;
  var STORE_TISZTITVA = 'mstr_utolso_tisztitas_v1';
  var lejartJelentes = null;                   // {kulcsok: [...], db: n} — egyszer megjelenítendő

  function most() { return Date.now(); }
  // Az ujId() a Date.now()-ot ágyazza be ("p" + 13 számjegy), ezért a korábbi buildben
  // írt, mentveTs nélküli rekordok kora pontosan visszafejthető. Enélkül a frissítés
  // utáni ELSŐ megnyitás minden régi rekordot lejártnak hinne és eldobna.
  function tsAzonositobol(id) { var m = /^p(\d{13})/.exec(String(id || '')); return m ? +m[1] : null; }
  // Egy rekord kora: a saját időbélyege, bármelyik néven szerepel is. A várólista
  // 'erkezes' néven tárolja — ez a mező kimaradt, és emiatt a takarítás MINDEN
  // várólistás beteget azonnal törölt, köztük esetleg MSTR 1-2 szintűeket is.
  function rekordTs(x) {
    if (!x) return null;
    // A LEGFRISSEBB időbélyeg számít, nem az első megtalált. A várólistán az `erkezes`
    // az érkezés, az `utolso` viszont az utolsó újraértékelés ideje — ha az érkezésből
    // számolnánk, egy 13 órája bent lévő, de 5 perce re-triázsolt (tehát nagyon is élő)
    // beteg lejártnak minősülne és eltűnne a listáról.
    // A mezőnév-lánc SZÁNDÉKOS visszafelé-kompatibilitás a korábbi buildek rekordjaihoz —
    // ne legyen „kitisztítva". A tsAzonositobol() az ujId()-be ágyazott Date.now()-ot olvassa.
    var jeloltek = [x.utolso, x.mentveTs, x.ts, x.erkezes, x.felvettTs, tsAzonositobol(x.id)];
    var max = 0;
    for (var i = 0; i < jeloltek.length; i++) { var v = +jeloltek[i]; if (v > max) max = v; }
    return max || null;
  }
  function idobelyeggel(o) { o = o || {}; o.mentveTs = most(); return o; }
  function lejart(ts) { return ts == null || (most() - ts) > MEGORZES_MS; }

  // Betöltéskor egyszer lefut: minden betegadatot tartalmazó tárolót megtisztít.
  // A jelenleg NYITOTT felvételt is csak akkor dobja el, ha az időbélyege lejárt —
  // a kéz alatt lévő munka soha nem tűnhet el.
  function lejartAdatTisztitas() {
    var torolt = [], db = 0;
    function biztos(fn) { try { return fn(); } catch (e) { return null; } }
    // 1) folyamatban lévő felvétel
    biztos(function () {
      var raw = localStorage.getItem(STORE_AKTIV); if (!raw) return;
      var o = JSON.parse(raw);
      // Ha a rekordnak NINCS levezethető időbélyege (a frissítés ELŐTTI build mentette, és
      // az aktív felvételnek azonosítója sincs, amiből a kor visszafejthető lenne), akkor
      // MEGTARTJUK: egy folyamatban lévő felvételt nem szabad eldobni pusztán azért, mert
      // nem tudjuk, mikor kezdték. A következő mentés már időbélyeget ad neki.
      var oTs = rekordTs(o);
      if (oTs != null && lejart(oTs)) { localStorage.removeItem(STORE_AKTIV); torolt.push('félbehagyott felvétel'); db++; }
    });
    // 2) parkolt (félbehagyott) betegek
    biztos(function () {
      var a = JSON.parse(localStorage.getItem(STORE_PARK) || '[]');
      var maradt = a.filter(function (x) { return !lejart(rekordTs(x)); });
      if (maradt.length !== a.length) { db += a.length - maradt.length; torolt.push('parkolt beteg'); localStorage.setItem(STORE_PARK, JSON.stringify(maradt)); }
    });
    // 3) lezárt betegek előzménylistája
    biztos(function () {
      var a = JSON.parse(localStorage.getItem(STORE_HISTORY) || '[]');
      var maradt = a.filter(function (x) { return !lejart(rekordTs(x)); });
      if (maradt.length !== a.length) { db += a.length - maradt.length; torolt.push('lezárt beteg az előzményekben'); localStorage.setItem(STORE_HISTORY, JSON.stringify(maradt)); }
    });
    // 4) torlódási várólista — SZÁNDÉKOSAN NEM TÖRLÜNK.
    //    A megőrzési idő a többi tárolóra adatvédelmi szabály, itt viszont épp azokat a
    //    betegeket törölné, akiket 12 óránál régebben nem re-triázsoltak — tehát akiket a
    //    legnagyobb eséllyel elfelejtettek, MSTR 2-est is. A várólista aktív munkalista:
    //    innen a beteget az ápoló veszi le („Ágyra került”). A régi bejegyzést ezért
    //    MEGJELÖLJÜK és feltűnően kiírjuk, nem tüntetjük el. (Adverzáriális lektor, 2026-09-18.)
    biztos(function () {
      var a = JSON.parse(localStorage.getItem(STORE_VARO) || '[]');
      var valt = false;
      a.forEach(function (x) {
        var elavult = lejart(rekordTs(x));
        if (!!x.elavult !== elavult) { x.elavult = elavult; valt = true; }
      });
      if (valt) localStorage.setItem(STORE_VARO, JSON.stringify(a));
    });
    // 5) az aktív ápoló neve is műszakhoz kötött — a SAJÁT időbélyege alapján
    biztos(function () {
      var raw = localStorage.getItem(STORE_STAFF_AKTIV); if (!raw) return;
      if (raw.charAt(0) !== '{') {
        // A frissítés ELŐTTI build csak a nevet tárolta, időbélyeg nélkül. Ezt nem
        // töröljük (nem tudjuk, mikor rögzítették), hanem átírjuk az új formátumra
        // mostani időbélyeggel — innentől a saját órája szerint jár le.
        staffAktivMent(raw); return;
      }
      var ts = (JSON.parse(raw) || {}).ts;
      if (ts != null && lejart(ts)) { localStorage.removeItem(STORE_STAFF_AKTIV); torolt.push('aktív ápoló neve'); db++; }
    });
    biztos(function () { localStorage.setItem(STORE_TISZTITVA, String(most())); });
    if (db > 0) lejartJelentes = { db: db, mik: torolt };
  }

  // Leltár a felhasználónak: mi van most a készüléken tárolva.
  function adatLeltar() {
    function n(kulcs, fallback) { try { var v = JSON.parse(localStorage.getItem(kulcs) || fallback); return v; } catch (e) { return JSON.parse(fallback); } }
    var akt = null; try { akt = JSON.parse(localStorage.getItem(STORE_AKTIV) || 'null'); } catch (e) {}
    return [
      { cimke: 'Folyamatban lévő felvétel', db: akt ? 1 : 0, szemelyes: true, ts: akt && akt.mentveTs },
      { cimke: 'Félbehagyott felvételek', db: n(STORE_PARK, '[]').length, szemelyes: true },
      { cimke: 'Lezárt betegek az Előzményekben', db: n(STORE_HISTORY, '[]').length, szemelyes: true },
      { cimke: 'Torlódási várólista', db: n(STORE_VARO, '[]').length, szemelyes: true },
      { cimke: 'Korábbi ápolónevek (gyorsválasztó)', db: n(STORE_STAFF, '[]').length, szemelyes: false },
      // A torlódási állapot az ELRENDELŐ ORVOS nevét is tárolja — ez személyes adat,
      // ezért a leltárban is látszik. Automatikus lejárata szándékosan NINCS: az
      // eljárásrend a műszakvezető orvos döntéséig hatályban marad, és egy csendes
      // lejárat azt a látszatot keltené, hogy visszaálltunk normál üzemre.
      { cimke: 'Torlódási nézet (elrendelő orvos neve)', db: torlodasAktiv() ? 1 : 0, szemelyes: true }
    ];
  }

  // Mindent töröl, ami beteg- vagy személyazonosító adat. A pilot-tájékoztató
  // elfogadását és a torlódási nézet állapotát szándékosan MEGHAGYJA: ezek nem
  // személyes adatok, és a törlésük csak zavart okozna a műszak közepén.
  function osszesAdatTorles() {
    // A torlódási nézet (STORE_TORL) SZÁNDÉKOSAN nem szerepel: az eljárásrend hatályát
    // a műszakvezető orvos rendeli el és szünteti meg, nem egy adattörlő gomb. A benne
    // tárolt orvosnév a leltárban látszik, és a torlódási nézet kikapcsolásával törlődik.
    [STORE_AKTIV, STORE_PARK, STORE_HISTORY, STORE_VARO, STORE_STAFF, STORE_STAFF_AKTIV].forEach(function (k) {
      try { localStorage.removeItem(k); } catch (e) {}
    });
  }

  // ---- ELŐZMÉNYEK (befejezett triázsok) + ÁPOLÓ-lista ------------------------
  var STORE_HISTORY = 'mstr_history_v1', STORE_STAFF = 'mstr_staff_v1';
  function elozmenyek() { try { return JSON.parse(localStorage.getItem(STORE_HISTORY) || '[]'); } catch (e) { return []; } }
  function elozmenyekMent(a) { try { localStorage.setItem(STORE_HISTORY, JSON.stringify(a.slice(0, 40))); } catch (e) {} }
  function panaszNeve() { var p = (KB.complaints || []).filter(function (x) { return x.id === S.beteg.vezetoPanaszId; })[0]; return p ? p.name : ''; }
  function archival() {
    if (S.step !== 'eredmeny' || !(S.utolso && S.utolso.szint != null)) return;
    var a = elozmenyek();
    a.unshift({ ts: Date.now(), cimke: betegCimke(), szint: S.utolso.szint, panasz: panaszNeve(), staff: (S.azon && S.azon.staff) || '', azonId: (S.azon && S.azon.id) || '' });
    elozmenyekMent(a);
  }
  function staffLista() { try { return JSON.parse(localStorage.getItem(STORE_STAFF) || '[]'); } catch (e) { return []; } }
  function staffMent(nev) { nev = (nev || '').trim(); if (!nev) return; var a = staffLista().filter(function (x) { return x !== nev; }); a.unshift(nev); try { localStorage.setItem(STORE_STAFF, JSON.stringify(a.slice(0, 8))); } catch (e) {} staffAktivMent(nev); }
  // Aktív (aktuális műszakos) ápoló: az új beteg felvételekor előre kitöltve, megerősíthető/módosítható/törölhető.
  var STORE_STAFF_AKTIV = 'mstr_staff_aktiv_v1';
  function staffAktiv() {
    try {
      var raw = localStorage.getItem(STORE_STAFF_AKTIV); if (!raw) return '';
      if (raw.charAt(0) !== '{') return raw;                 // régi build: csak a név
      var o = JSON.parse(raw);
      if (lejart(o && o.ts)) { localStorage.removeItem(STORE_STAFF_AKTIV); return ''; }
      return o.nev || '';
    } catch (e) { return ''; }
  }
  // Az ápoló neve a SAJÁT rögzítési idejével együtt tárolódik, hogy a megőrzési idő
  // valóban rá vonatkozzon (korábban a takarítás idejéhez volt kötve, ezért forgalmas
  // tableten gyakorlatilag soha nem járt le, és új műszakban rossz nevet töltött elő).
  function staffAktivMent(nev) {
    try { if (nev) localStorage.setItem(STORE_STAFF_AKTIV, JSON.stringify({ nev: nev, ts: Date.now() })); } catch (e) {}
  }
  function staffAktivTorol() { try { localStorage.removeItem(STORE_STAFF_AKTIV); } catch (e) {} }

  // ---- Pilot/teszt figyelmeztető kapu (első betöltéskor, amíg el nem fogadja) ------
  // Csak a gombbal zárható (háttérre kattintás szándékosan nem dobja el).
  var STORE_DISCLAIMER = 'mstr_disclaimer_ack_v2';
  function disclaimerElfogadva() {
    // FAIL-CLOSED: ha a tároló nem elérhető (privát ablak, tiltott sütik), inkább
    // MINDIG mutassuk a pilot-tájékoztatót, mint hogy csendben kimaradjon. Korábban
    // itt 'true' állt, ami pont a figyelmeztetést kapcsolta ki ott, ahol nem tudjuk,
    // hogy a felhasználó látta-e már.
    try { return localStorage.getItem(STORE_DISCLAIMER) === '1'; } catch (e) { return false; }
  }
  function disclaimerKapu() {
    if (disclaimerElfogadva()) return;
    var tarto = $('reszlet-tarto');
    var hatter = el('div', 'reszlet-hatter');
    var panel = el('div', 'reszlet-panel');
    panel.appendChild(el('h3', null, 'Fontos tudnivaló a használat előtt'));
    var body = el('div'); body.style.cssText = 'font-size:13.5px;line-height:1.6;color:var(--text)';
    body.innerHTML =
      '<p style="margin-bottom:10px"><b>PILOT / TESZT verzió</b> — a Semmelweis Egyetem Sürgősségi Orvostani ' +
      'Klinikáján belső kipróbálásra készülő klinikai döntéstámogató eszköz.</p>' +
      '<p style="margin-bottom:10px"><b>Nem helyettesíti</b> a triázs ápoló szakmai megítélését és a hivatalos ' +
      'MSTR-protokollt — a végső besorolás és annak szakmai felelőssége minden esetben az ellátó személyzeté.</p>' +
      '<p style="margin-bottom:10px">A tartalom a <i>Triázs tankönyv 2.0</i> (MSOTKE, 2016), az <i>MSTR oktatói ' +
      'jegyzet</i> (2022) és a <i>CTAS COT-2008</i> alapján, oktatási/pilot céllal, saját megfogalmazásban és ' +
      'forráshivatkozással készült — nem e művek hivatalos kiadása vagy másolata, és nem helyettesíti azokat.</p>' +
      '<p>Kizárólag saját felelősségre, tesztelési célra, meghívott munkatársak számára — nem éles klinikai ' +
      'döntéshozatalra szánt, nem nyilvános termék.</p>';
    panel.appendChild(body);
    var btn = el('button', 'btn btn-full', 'Megértettem, tesztelek tovább'); btn.type = 'button';
    btn.style.marginTop = '16px';
    btn.onclick = function () { try { localStorage.setItem(STORE_DISCLAIMER, '1'); } catch (e) {} tarto.innerHTML = ''; };
    panel.appendChild(btn);
    hatter.appendChild(panel);
    tarto.innerHTML = ''; tarto.appendChild(hatter);
  }

  // „Új beteg": ha befejezett → ELŐZMÉNYEKBE archiválja; ha folyamatban → PARKOLJA; majd üres állapot.
  function ujBeteg() {
    if (S.step === 'eredmeny') archival();
    else if (vanErdemiKitoltes()) parkol();
    ujra();
  }
  function idoStr(ts) { try { var d = new Date(ts); return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); } catch (e) { return ''; } }

  // Előzmények modal (read-only áttekintés a korábbi befejezett betegekről).
  function elozmenyekMutat() {
    var arr = elozmenyek();
    var tarto = $('reszlet-tarto');
    var hatter = el('div', 'reszlet-hatter');
    hatter.onclick = function (ev) { if (ev.target === hatter) tarto.innerHTML = ''; };
    var panel = el('div', 'reszlet-panel');
    var bz = ikonBtnEl('reszlet-bezar', 'close'); bz.onclick = function () { tarto.innerHTML = ''; }; panel.appendChild(bz);
    panel.appendChild(elIko('h3', null, 'history', 'Előzmények — korábbi betegek (' + arr.length + ')'));
    if (!arr.length) panel.appendChild(el('div', 'skip-hint', 'Még nincs befejezett triázs ebben a böngészőben.'));
    arr.forEach(function (h) {
      var row = el('div', 'tort-sor');
      var bd = el('span', 'opt-badge', h.szint != null ? h.szint : '–'); bd.style.background = h.szint != null ? szinSzint(h.szint) : 'var(--muted)';
      row.appendChild(bd);
      var b = el('div'); b.style.flex = '1';
      b.appendChild(el('div', 'tort-cimke', h.cimke + (h.azonId ? ' · ' + h.azonId : '')));
      b.appendChild(el('div', 'tort-meta', idoStr(h.ts) + (h.panasz ? ' · ' + h.panasz : '') + (h.staff ? ' · ' + h.staff : '')));
      row.appendChild(b);
      panel.appendChild(row);
    });
    if (arr.length) {
      var torol = el('button', 'btn btn-ghost', 'Előzmények törlése'); torol.type = 'button'; torol.style.marginTop = '12px';
      torol.onclick = function () { if (confirm('Az összes tárolt előzmény törlése?')) { elozmenyekMent([]); tarto.innerHTML = ''; } };
      panel.appendChild(torol);
    }

    // ---- Átláthatóság: mi van ebben a böngészőben tárolva, és meddig ----
    var ad = el('div', 'adat-doboz');
    ad.appendChild(elIko('h4', 'adat-cim', 'shield', 'Ezen a készüléken tárolt adatok'));
    ad.appendChild(el('div', 'adat-magyarazat',
      'A felület a félbehagyott munka védelmére a böngészőben tárol adatokat. Szerverre semmi nem megy. ' +
      'A betegadatot tartalmazó tételek ' + MEGORZES_ORA + ' óra után a következő megnyitáskor automatikusan törlődnek.'));
    var vanSzemelyes = false;
    adatLeltar().forEach(function (t) {
      if (t.szemelyes && t.db > 0) vanSzemelyes = true;
      var sor = el('div', 'adat-sor');
      sor.appendChild(el('span', 'adat-sor-cimke', t.cimke + (t.szemelyes ? '' : ' (nem betegadat)')));
      sor.appendChild(el('span', 'adat-sor-db', String(t.db)));
      ad.appendChild(sor);
    });
    if (vanSzemelyes) {
      ad.appendChild(el('div', 'adat-figyelem',
        'Közös (megosztott) gépen műszak végén érdemes törölni — a lenti gombbal azonnal megteheti.'));
    }
    var mindTorol = elIko('button', 'btn btn-ghost adat-torol', 'close', 'Minden betegadat törlése most');
    mindTorol.type = 'button';
    mindTorol.onclick = function () {
      if (!confirm('Törli a készüléken tárolt ÖSSZES betegadatot?\n\nEz a folyamatban lévő felvételt, a parkolt betegeket, az előzményeket és a várólistát is törli. A művelet nem vonható vissza.')) return;
      osszesAdatTorles();
      tarto.innerHTML = '';
      ujra();
    };
    ad.appendChild(mindTorol);
    panel.appendChild(ad);

    hatter.appendChild(panel); tarto.innerHTML = ''; tarto.appendChild(hatter);
  }

  // Vonalkód/kézi azonosító feldolgozása (a scanner billentyűleütésként küld + Enter).
  function parseAzonosito(raw) {
    var str = (raw || '').trim();
    var seps = ['|', '^', ';', '\t', ','];
    for (var i = 0; i < seps.length; i++) {
      if (str.indexOf(seps[i]) >= 0) { var p = str.split(seps[i]).map(function (s) { return s.trim(); }); return { id: p[0] || '', nev: p[1] || '', szul: p[2] || '', raw: str }; }
    }
    if (/^\d{6,}$/.test(str)) return { id: str, nev: '', szul: '', raw: str }; // csak számjegy → azonosító (pl. KBA)
    return { id: '', nev: str, szul: '', raw: str };
  }
  function naplo(lepesCim, valasztas) {
    // ugyanahhoz a lépéshez/mezőhöz tartozó korábbi bejegyzést FELÜLÍRJUK (nem duplikálunk),
    // hogy az ismételt kattintás/átválasztás után a napló a VÉGSŐ választást mutassa.
    for (var i = S.pathLog.length - 1; i >= 0; i--) {
      if (S.pathLog[i].lepes === lepesCim) { S.pathLog[i].valasztas = valasztas; return; }
    }
    S.pathLog.push({ lepes: lepesCim, valasztas: valasztas });
  }

  // ---- fejléc / progress / breadcrumb ----------------------------------------
  function fejlecFrissit() {
    $('kb-verzio').textContent = 'Döntéstámogató' + (KB.meta ? ' · tudásbázis v' + KB.meta.version : '');
    if (S.step === 'tetra') {
      $('lv-chip').hidden = true;
      $('prog-step').textContent = 'TETRA — telefon/rádió riasztás';
      $('prog-pct').textContent = '';
      $('prog-fill').style.width = '100%';
      $('crumbs').innerHTML = '';
      return;
    }
    if (S.step === 'betegut') {
      $('prog-step').textContent = 'Betegút (elhelyezés)';
      $('prog-pct').textContent = '';
      $('prog-fill').style.width = '100%';
      // a szint-chip + morzsa marad kontextusnak (nem térünk vissza korán)
    }
    if (S.step === 'tudastar') {
      $('lv-chip').hidden = true;
      $('prog-step').textContent = 'Tudástár';
      $('prog-pct').textContent = '';
      $('prog-fill').style.width = '100%';
      $('crumbs').innerHTML = '';
      return;
    }
    if (S.step === 'varolista') {
      $('lv-chip').hidden = true;
      $('prog-step').textContent = 'Torlódás — re-triage várólista';
      $('prog-pct').textContent = '';
      $('prog-fill').style.width = '100%';
      $('crumbs').innerHTML = '';
      return;
    }
    var er = S.utolso;
    var chip = $('lv-chip'), dot = $('lv-chip-dot');
    if (er && er.szint != null) {
      chip.hidden = false;
      dot.textContent = er.szint;
      dot.style.background = szinSzint(er.szint);
    } else { chip.hidden = true; }

    if (S.step !== 'betegut') {
      var idx = lepesIndex(S.step);
      var osszes = LEPESEK.filter(function (l) { return !kihagyando(l.id); }).length;
      var akt = LEPESEK.slice(0, idx + 1).filter(function (l) { return !kihagyando(l.id); }).length;
      var pct = Math.round((akt / osszes) * 100);
      $('prog-fill').style.width = pct + '%';
      $('prog-pct').textContent = pct + '%';
      $('prog-step').textContent = (LEPESEK[idx] ? LEPESEK[idx].cim : '');
    }

    var cr = $('crumbs'); cr.innerHTML = '';
    if (S.azon && (S.azon.id || S.azon.nev)) cr.appendChild(crumbIko('idcard', (S.azon.nev || S.azon.id)));
    if (S.beteg.korKat || S.beteg.eletkorEv != null || S.beteg.eletkorHonap != null) {
      var korTxt = S.beteg.korKat ? korKatFelirat(S.beteg.korKat) : (S.beteg.eletkorEv != null ? (S.beteg.eletkorEv + ' év') : (S.beteg.eletkorHonap + ' hó'));
      cr.appendChild(crumbIko('person', korTxt + (!S.beteg.korKat && er && er.szarmaztatott.gyermek ? ' · gyermek' : '')));
    }
    if (S.beteg.vezetoPanaszId) {
      var p = (KB.complaints || []).filter(function (x) { return x.id === S.beteg.vezetoPanaszId; })[0];
      if (p) cr.appendChild(crumbIko('complaint', p.name));
    }
  }
  function crumbIko(name, txt) { var c = el('span', 'crumb'); c.innerHTML = ikonSvg(name) + '<span>' + txt + '</span>'; return c; }

  function szinSzint(l) { var x = (KB.levels || []).filter(function (o) { return o.level === l; })[0]; return x ? x.color : '#718096'; }
  function nevSzint(l) { var x = (KB.levels || []).filter(function (o) { return o.level === l; })[0]; return x ? x.name : ''; }

  // ---- kritikus rövidzár ------------------------------------------------------
  function kritikusBanner() {
    var b = $('crit-banner'); b.innerHTML = '';
    var er = S.utolso;
    // Csak MSTR 1-nél kínálunk teljes rövidzárat: ennél súlyosabb nincs, minden
    // további kérdés felesleges. MSTR 2-nél NEM, mert a légzés/keringés még 1-re
    // súlyosbíthat — ott a dinamikus kihagyás csak a 3+ kérdéseket veszi ki.
    if (er && er.szint === 1 && S.step !== 'eredmeny') {
      var ban = el('div', 'crit-banner');
      ban.style.background = szinSzint(er.szint);
      var csakSzat = mstr1CsakSzaturaciobol();
      var bsp = el('span'); bsp.innerHTML = ikonSvg('warn') + '<span>MSTR 1 — ' + nevSzint(1) + ': azonnali életmentő ellátás! ' +
        (csakSzat ? 'Az MSTR 1 csak az alacsony szaturációból adódik: ha a betegnél krónikus / COPD alapérték ismert, azt a „Légzés” lépésben még rögzítheti.'
                  : 'További kitöltés nem szükséges.') + '</span>'; ban.appendChild(bsp);
      if (csakSzat && S.step !== 'megfigyeles') {
        var g2 = el('button', 'btn', 'Akut vagy krónikus? →'); g2.type = 'button';
        g2.onclick = function () { megy('megfigyeles'); };
        ban.appendChild(g2);
      }
      var g = el('button', 'btn', 'Ugrás az eredményhez →'); g.type = 'button';
      g.onclick = function () { megy('eredmeny'); };
      ban.appendChild(g);
      b.appendChild(ban);
    }
  }

  // ---- kártya-építő segédek ---------------------------------------------------
  // A lépés-felirat sorszáma a TÉNYLEGESEN megjelenő lépéseket követi (a kihagyottakat
  // nem számolja), a neve pedig azonos a folyamatsáv nevével. Korábban mindkettő be volt
  // égetve: a szám átugrott (5-ről 7-re), a kártyacím pedig eltért a sáv nevétől.
  function lepesFelirat(id) {
    var idx = lepesIndex(id), n = 0;
    for (var i = 0; i <= idx; i++) {
      if (LEPESEK[i].id === 'eredmeny') break;
      if (i === idx || !kihagyando(LEPESEK[i].id)) n++;
    }
    return n + '. lépés · ' + (LEPESEK[idx] || {}).cim;
  }
  function kartya(eye, title, sub) {
    var c = el('div', 'card');
    if (eye) c.appendChild(el('div', 'card-eye', eye));
    if (title) c.appendChild(el('div', 'card-title', title));
    if (sub) c.appendChild(el('div', 'card-sub', sub));
    return c;
  }
  var aktTovabbBtn = null, aktValidator = null, aktHintEl = null;
  function frissitNav() {
    if (!aktTovabbBtn) return;
    var ok = aktValidator ? aktValidator() : true;
    aktTovabbBtn.disabled = !ok;
    if (aktHintEl) aktHintEl.textContent = ok ? '' : (aktHintEl.getAttribute('data-hint') || '');
  }
  function navSor(opts) {
    opts = opts || {};
    aktTovabbBtn = null; aktValidator = null; aktHintEl = null;
    var row = el('div', 'nav-row');
    var back = el('button', 'btn btn-ghost', '← Vissza'); back.type = 'button';
    back.disabled = S.history.length === 0; back.onclick = vissza;
    row.appendChild(back);
    row.appendChild(el('span', 'spacer'));
    var hintEl = el('span', 'skip-hint');
    if (opts.hint) hintEl.setAttribute('data-hint', opts.hint);
    row.appendChild(hintEl);
    aktHintEl = hintEl;
    if (opts.tovabb) {
      var t = el('button', 'btn', opts.tovabbCimke || 'Tovább →'); t.type = 'button';
      t.onclick = opts.tovabb;
      row.appendChild(t);
      aktTovabbBtn = t; aktValidator = opts.validate || null;
      frissitNav();
    }
    return row;
  }

  // szintszínes választókártyák egy select-mezőhöz; opcionális szintbecslés.
  // Ha a mező DERIVÁLT (numerikus paraméterből előre kitöltött), azt jelezzük.
  function opcioKartyak(field, utanCb) {
    // szám / jelölőnégyzet típusú mező: megfelelő beviteli elem (nem opciókártya)
    if (field.type === 'number') {
      var wrap = el('div', 'param-grid');
      wrap.appendChild(paramMezoAlt(field.id, field.label + (field.unit ? ' (' + field.unit + ')' : ''), field.help || '', field.min, field.max, field.step || 1, utanCb));
      return wrap;
    }
    // Padló, ami alatt egy opció már nem súlyosbíthatna — csak ISMERT (nem null) súlyú
    // opciót rejtünk el vele; bizonytalan (null súlyú) vagy épp kiválasztott opció mindig látszik.
    var padloOpcioSzures = S.utolso ? S.utolso.szint : null;
    function opcioMegjelenik(lv, kivalasztott, javasolt) {
      if (kivalasztott || javasolt) return true;
      if (padloOpcioSzures == null || lv == null) return true;
      return lv < padloOpcioSzures;
    }
    // A LEGENYHÉBB opció (a legnagyobb szintszámú, vagy a szintet nem adó) akkor is látszik,
    // ha a padló miatt nem változtatna — különben egy kérdésre nem lehet „nem"-et mondani,
    // csak a kihagyó gombbal továbblépni (lektori észrevétel: a nem szív eredetű mellkasi
    // fájdalomnál egyetlen opció maradt, a „tépő-szaggató", és nem volt hova koppintani).
    function legenyhebbErtek(opciok) {
      var best = null, bestLv = -1;
      opciok.forEach(function (o) {
        var lv = opcioSuly(field.id, o.value); lv = (lv == null ? 99 : lv);
        if (lv > bestLv) { bestLv = lv; best = o.value; }
      });
      return best;
    }
    if (field.type === 'checkbox') {
      var box2 = el('div', 'opts opts-bool');
      // Sorrend + színkód: UGYANAZ a súlyosság-alapú logika, mint a select-típusú opcióknál —
      // korábban ez [Igen,Nem] sorrendben, színkód nélkül volt hardkódolva, holott a 6 checkbox
      // mező MINDEGYIKÉNÉL az "Igen" a súlyosabb (level 1-2), a "Nem" pedig nem emel — tehát a
      // hardkódolt sorrend éppen FORDÍTVA volt a "kevésbé súlyos elöl" elvhez képest.
      var parok = [['Igen', true], ['Nem', false]].slice().sort(function (x, y) {
        var lx = opcioSuly(field.id, x[1]), ly = opcioSuly(field.id, y[1]);
        lx = (lx == null ? 99 : lx); ly = (ly == null ? 99 : ly);
        return ly - lx;
      });
      var megjelenoBox2 = [];
      parok.forEach(function (par) {
        var lv2 = opcioSuly(field.id, par[1]);
        var kivalasztott2 = S.beteg[field.id] === par[1];
        if (!opcioMegjelenik(lv2, kivalasztott2, false)) return;
        megjelenoBox2.push({ par: par, lv: lv2, kivalasztott: kivalasztott2 });
      });
      if (!megjelenoBox2.length) parok.forEach(function (par) { megjelenoBox2.push({ par: par, lv: opcioSuly(field.id, par[1]), kivalasztott: S.beteg[field.id] === par[1] }); });
      megjelenoBox2.forEach(function (item) {
        var par = item.par, lv = item.lv, kivalasztott = item.kivalasztott;
        var b2 = el('button', 'opt' + (lv ? ' opt-lv' + lv : '') + (kivalasztott ? ' sel' : '')); b2.type = 'button';
        var body2 = el('div', 'opt-body'); body2.appendChild(el('div', 'opt-text', par[0]));
        b2.appendChild(body2); b2.appendChild(el('span', 'opt-arrow', kivalasztott ? '✓' : '›'));
        b2.onclick = function () { S.beteg[field.id] = par[1]; S.keziMezo[field.id] = true; ertekel(); naplo(field.label, par[1] ? 'igen' : 'nem'); if (utanCb) utanCb(); else render(); };
        box2.appendChild(b2);
      });
      return box2;
    }
    var box = el('div', 'opts');
    var auto = S.autoMezo[field.id];
    var jav = (S.javaslat || {})[field.id];
    // suggest-mód: figyelmeztető sáv a mező fölött (pl. COPD/klinikai megítélés)
    if (jav && S.beteg[field.id] == null) {
      var javLabel = ((field.options || []).filter(function (o) { return o.value === jav.value; })[0] || {}).label || jav.value;
      var h = el('div', 'warn'); h.style.background = '#EBF5FB'; h.style.borderColor = 'var(--l5s)'; h.style.color = '#1A5276';
      h.innerHTML = ikonSvg('bulb') + ' SpO₂-alapú javaslat: <b>' + (javLabel.split(':')[0]) + '</b>';
      box.appendChild(h);
    }
    // Megjelenítési sorrend: NEGATÍV/legkevésbé sürgős („nincs") elöl, majd SÚLYOSSÁG szerint emelkedő.
    // (A motor a sorrendtől független — ez csak a lista logikáját teszi átláthatóbbá.)
    var rendezett = (field.options || []).slice().sort(function (x, y) {
      var lx = opcioSuly(field.id, x.value), ly = opcioSuly(field.id, y.value);
      lx = (lx == null ? 99 : lx); ly = (ly == null ? 99 : ly);
      return ly - lx;   // magasabb MSTR-szám (enyhébb / nincs) előrébb → 5,4,3,2,1
    });
    // Dinamikus opció-szűrés: a paraméterek alapján már megállapított padlónál KEVÉSBÉ súlyos
    // (vagy azzal egyenlő) opciókat elrejtjük — csak azok maradnak, amik TÉNYLEGESEN súlyosbíthatnák
    // a besorolást, plusz a jelenleg kiválasztott/javasolt opció (hogy a választás sose tűnjön el).
    var _legenyhebb = legenyhebbErtek(rendezett);
    var megjelenoOpciok = rendezett.filter(function (op) {
      var lv0 = opcioSuly(field.id, op.value);
      var kiv0 = S.beteg[field.id] === op.value;
      var jav0 = jav && jav.value === op.value && S.beteg[field.id] == null;
      if (op.value === _legenyhebb) return true;
      return opcioMegjelenik(lv0, kiv0, jav0);
    });
    if (!megjelenoOpciok.length) megjelenoOpciok = rendezett; // biztonsági háló: sose maradjon üres lista
    // Az elrejtett opciókat MEGNEVEZZÜK — különben a lista „lyukasnak" látszik, és az ápoló
    // azt hiheti, hogy a beteg csak a két véglet lehet.
    var rejtettek = rendezett.filter(function (op) { return megjelenoOpciok.indexOf(op) === -1; });
    megjelenoOpciok.forEach(function (op) {
      var lv = opcioSuly(field.id, op.value);   // kontextus-független súlyosság → állandó színcsík
      var kivalasztott = S.beteg[field.id] === op.value;
      var javasolt = jav && jav.value === op.value && S.beteg[field.id] == null;
      var b = el('button', 'opt' + (lv ? ' opt-lv' + lv : '') + (kivalasztott ? ' sel' : '') + (javasolt ? ' javasolt' : ''));
      b.type = 'button';
      var body = el('div', 'opt-body');
      body.appendChild(el('div', 'opt-text', op.label + (javasolt ? '  · javasolt' : '')));
      if (kivalasztott && auto) { var odt = el('div', 'opt-detail'); odt.innerHTML = ikonSvg('bolt') + '<span>' + auto.note + '</span>'; body.appendChild(odt); }
      b.appendChild(body);
      b.appendChild(el('span', 'opt-arrow', kivalasztott ? '✓' : '›'));
      b.onclick = function () {
        S.beteg[field.id] = op.value;
        S.keziMezo[field.id] = true;          // kézi választás felülírja a derivációt
        delete S.autoMezo[field.id];
        ertekel();
        naplo(field.label, op.label);
        if (utanCb) utanCb(); else render();
      };
      box.appendChild(b);
    });
    if (rejtettek.length) {
      var rj = el('div', 'skip-hint'); rj.style.marginTop = '4px';
      rj.textContent = 'Nem jelenik meg: ' + rejtettek.map(function (op) { return (op.label || '').split(/[—(:]/)[0].trim(); }).join(', ') +
        ' — az eddigi MSTR ' + padloOpcioSzures + '-t nem változtatná.';
      box.appendChild(rj);
    }
    return box;
  }
  // egy adott mezőérték becsült szintje (a KB szabályaiból) — csak vizuális segítség
  function becsultSzint(mezo, ertek) {
    var best = null;
    (KB.rules || []).forEach(function (r) {
      if (r.level == null || !r.condition || r.condition.length !== 1) return;
      var c = r.condition[0];
      if (c.mezo === mezo && c.egyenlo === ertek) { if (best == null || r.level < best) best = r.level; }
    });
    return best;
  }

  // ---- egyes lépések ----------------------------------------------------------
  function render() {
    var fo = $('fo'); fo.innerHTML = '';
    lejaratSavRajzol();
    (RENDER[S.step] || RENDER.kritikus)(fo);
    fejlecFrissit();
    kritikusBanner();
    torlodasSavRajzol();
    parkoltSavRajzol();
    perzisztal();
  }

  // A megőrzési időn belüli, de már RÉGI félbehagyott felvétel: megkérdezzük, hogy
  // folytatja-e, vagy új beteget kezd. Így egy órákkal korábbi beteg adatai nem
  // jelenhetnek meg úgy, mintha épp most vették volna fel őket.
  function regiFelvetelKerdes(o, korMs) {
    var oraTxt = korMs < 3600000
      ? Math.round(korMs / 60000) + ' perce'
      : Math.floor(korMs / 3600000) + ' óra ' + Math.round((korMs % 3600000) / 60000) + ' perce';
    overlayMutat('Félbehagyott felvétel található', function (panel, bezar) {
      var cimke = (o.azon && (o.azon.nev || o.azon.id)) || '(azonosító nélkül)';
      panel.appendChild(el('div', 'adat-magyarazat',
        'Ezen a készüléken egy be nem fejezett triázs-felvétel maradt, amelyet ' + oraTxt +
        ' mentett el a rendszer. Mivel régebbi, nem töltjük vissza automatikusan — így nem ' +
        'fordulhat elő, hogy egy korábbi beteg adatai az éppen érkezett betegének látszanak.'));
      var box = el('div', 'adat-doboz');
      box.appendChild(el('div', 'adat-sor-cimke', 'Beteg: ' + cimke));
      box.appendChild(el('div', 'adat-sor-cimke', 'Utoljára mentve: ' + oraTxt));
      panel.appendChild(box);
      var foly = elIko('button', 'btn btn-full', 'refresh', 'Folytatom ezt a felvételt');
      foly.type = 'button';
      foly.onclick = function () { bezar(); sVisszaallit(o); render(); };
      panel.appendChild(foly);
      var uj = elIko('button', 'btn btn-ghost btn-full', 'pause', 'Félreteszem és új beteget kezdek');
      uj.type = 'button';
      uj.style.marginTop = '8px';
      uj.onclick = function () {
        // NEM dobjuk el: átrakjuk a parkolt (félbehagyott) betegek közé, hogy meglegyen.
        try {
          var arr = parkoltak();
          arr.push({ id: ujId(), mentveTs: rekordTs(o) || Date.now(), cimke: (o.azon && (o.azon.nev || o.azon.id)) || 'Félbehagyott felvétel',
                     lepesCim: '', szint: null, S: o });
          parkoltakMent(arr);
        } catch (e) {}
        aktivTorol(); bezar(); ujra();
      };
      panel.appendChild(uj);
    });
  }

  // Lejárati értesítés — az automatikus adattörlés SOSEM történhet csendben.
  // Egyszer jelenik meg, a felhasználó elbocsáthatja; a következő megnyitásig nem tér vissza.
  function lejaratSavRajzol() {
    var tarto = $('lejarat-sav'); if (!tarto) return;
    if (!lejartJelentes) { tarto.hidden = true; tarto.innerHTML = ''; return; }
    tarto.hidden = false; tarto.innerHTML = '';
    var sz = el('span', '', lejartJelentes.db + ' tárolt tétel törlődött a ' + MEGORZES_ORA +
      ' órás megőrzési idő lejárta miatt (' + lejartJelentes.mik.join(', ') + ').');
    var ikon = el('span'); ikon.innerHTML = ikonSvg('shield');
    tarto.appendChild(ikon); tarto.appendChild(sz);
    var bez = ikonBtnEl('lejarat-bezar', 'close');
    bez.onclick = function () { lejartJelentes = null; lejaratSavRajzol(); };
    tarto.appendChild(bez);
  }

  // Torlódási státuszsáv — EGY sor: mód + ki rendelte el + mióta + várakozók + lejárt re-triage.
  // Normál üzemben egyáltalán nem renderelődik (0 pixel), hogy a megszokott felület ne változzon.
  // Színe szándékosan NEM piros/narancs (MSTR 1–2 foglalt) és nem borostyán (parkolt sáv).
  function torlodasSavRajzol() {
    var sav = $('torlodas-sav'); if (!sav) return;
    sav.innerHTML = '';
    var t = torlodas();
    var lista = varolista();
    if (!t || !t.aktiv) {
      // Normál üzemben 0 pixel — KIVÉVE, ha maradtak betegek a re-triage listán. Korábban
      // a nézet kikapcsolása után a lista teljesen elérhetetlen lett, miközben a betegek
      // benne maradtak a tárolóban (lektori észrevétel).
      if (!lista.length) { sav.hidden = true; return; }
      sav.hidden = false;
      sav.classList.add('torl-maradek');
      var mcim = el('span', 'torl-cimke');
      mcim.innerHTML = ikonSvg('warn') + '<span>A TORLÓDÁSI NÉZET KI VAN KAPCSOLVA</span>';
      sav.appendChild(mcim);
      var mlejart = lista.filter(function (v) { var r = retriageAllapot(v); return r && r.lejart; }).length;
      var minfo = el('span', 'torl-info');
      minfo.textContent = lista.length + ' beteg maradt a re-triage listán' +
        (mlejart ? ', ebből ' + mlejart + '-nél lejárt az újraértékelés' : '') + '.';
      sav.appendChild(minfo);
      var mbtn = el('button', 'torl-btn'); mbtn.type = 'button';
      // A LEJÁRT-szám a kikapcsolt nézeten is látszik: a kikapcsolás nem veheti el
      // csendben az egyetlen mindig látható klinikai jelzést.
      if (mlejart) mbtn.classList.add('lejart');
      mbtn.textContent = 'Lista megnyitása' + (mlejart ? ' · ' + mlejart + ' lejárt re-triage' : '') + ' →';
      mbtn.onclick = function () { if (S.step !== 'varolista') { S.varolistaElozoStep = S.step; S.step = 'varolista'; render(); } };
      sav.appendChild(mbtn);
      return;
    }
    sav.classList.remove('torl-maradek');
    sav.hidden = false;
    var lejart = lista.filter(function (v) { var r = retriageAllapot(v); return r && r.lejart; }).length;
    var cimke = el('span', 'torl-cimke');
    cimke.innerHTML = ikonSvg('bolt') + '<span>TORLÓDÁSI ELJÁRÁSREND — NÉZET</span>';
    sav.appendChild(cimke);
    var info = el('span', 'torl-info');
    info.textContent = (t.elrendelo ? 'elrendelte: ' + t.elrendelo + ' · ' : '') + oraPerc(t.ido) + ' óta (' + idoSzoveg(percTol(t.ido)) + ')';
    sav.appendChild(info);
    // HOSSZAN BEKAPCSOLVA — emlékeztető, NEM automatikus kikapcsolás. Az eljárásrend
    // elrendelése ÉS megszüntetése a műszakvezető orvos hatásköre (4/2026. Ig. Utasítás),
    // ezért az app nem kapcsolhatja ki magától, és nem is állíthatja, hogy már nem hatályos.
    // Csak megkérdezi. A küszöb ugyanaz a MEGORZES_ORA (egy műszak + átadás), amit az
    // adatmegőrzésnél is használunk — üzemeltetési érték, a forrás időközt nem ad meg.
    if (percTol(t.ido) >= TORLODAS_EMLEKEZTETO_ORA * 60) {
      var emlek = el('span', 'torl-emlekezteto');
      // A mondat VÉGIG a nézetről szól: az eljárásrend hatályáról az app nem nyilatkozik.
      emlek.innerHTML = ikonSvg('warn') + '<span>Több mint ' + TORLODAS_EMLEKEZTETO_ORA +
        ' órája van bekapcsolva ez a nézet. Még tart a torlódási eljárásrend? A megszüntetését a ' +
        'műszakvezető orvos rendeli el; a forrás szerint ilyenkor ugyanúgy kell eljárni, mint az ' +
        'elrendelésekor: a flow manager dokumentálja és tájékoztatja az OMSZ mentésirányítását.</span>';
      sav.appendChild(emlek);
    }
    var varoBtn = el('button', 'torl-btn'); varoBtn.type = 'button';
    varoBtn.textContent = 'Várólista: ' + lista.length + ' beteg' + (lejart ? ' · ' + lejart + ' lejárt re-triage' : '') + ' →';
    if (lejart) varoBtn.classList.add('lejart');
    varoBtn.onclick = function () { if (S.step !== 'varolista') { S.varolistaElozoStep = S.step; S.step = 'varolista'; render(); } };
    sav.appendChild(varoBtn);
    var ki = el('button', 'torl-ki', 'Nézet kikapcsolása'); ki.type = 'button';
    ki.onclick = torlodasKapcsolo;
    sav.appendChild(ki);
  }

  // Parkolt (függő) betegek sora — egy koppintás a visszatöltéshez.
  function parkoltSavRajzol() {
    var sav = $('parkolt-sav'); if (!sav) return;
    var arr = parkoltak();
    sav.innerHTML = '';
    if (!arr.length) { sav.hidden = true; return; }
    sav.hidden = false;
    var pcimke = el('span', 'parkolt-cimke'); pcimke.innerHTML = ikonSvg('pause') + '<span>Félbehagyott felvétel (' + arr.length + '):</span>'; sav.appendChild(pcimke);
    arr.forEach(function (pk) {
      var chip = el('span', 'parkolt-chip');
      var b = el('button', null, pk.cimke + ' · ' + (pk.lepesCim || '')); b.type = 'button';
      b.title = 'Visszatöltés'; b.onclick = function () { parkoltBetolt(pk.id); };
      if (pk.szint) { var bd = el('span', 'opt-badge', pk.szint); bd.style.background = szinSzint(pk.szint); b.appendChild(bd); }
      chip.appendChild(b);
      var x = ikonBtnEl('parkolt-x', 'close'); x.title = 'Félbehagyott felvétel törlése';
      x.setAttribute('aria-label', 'Félbehagyott felvétel törlése');
      x.onclick = function () {
        // egy koppintás eddig megerősítés nélkül, visszavonhatatlanul törölt egy félbehagyott felvételt
        if (!confirm('Törli a félbehagyott felvételt: ' + pk.cimke + '?\n\nA művelet nem vonható vissza.')) return;
        parkoltTorol(pk.id);
      };
      chip.appendChild(x);
      sav.appendChild(chip);
    });
  }

  var RENDER = {};

  RENDER.azonositas = function (fo) {
    var c = kartya(lepesFelirat('azonositas'), 'Ápoló és beteg', 'Vonalkód-scanner vagy kézi bevitel. Kihagyható.');

    var g1 = el('div', 'pfield'); g1.style.marginBottom = '12px';
    // Aktív ápoló előre kitöltése (egy műszakban ne kelljen újra beírni): undefined → aktív ápoló;
    // ha a nővér kitörli, üres marad (nem tölti újra). Módosítható és törölhető.
    if (S.azon.staff == null) S.azon.staff = staffAktiv();
    var staffAkt = staffAktiv();
    g1.appendChild(elLabel('Triázs ápoló neve (opcionális)' + (S.azon.staff && S.azon.staff === staffAkt ? ' — megjegyezve' : '')));
    var staffSor = el('div'); staffSor.style.cssText = 'display:flex;gap:8px;align-items:center';
    var staff = el('input'); staff.type = 'text'; staff.id = 'staff-input'; staff.setAttribute('list', 'staff-lista');
    staff.style.cssText = 'flex:1;border:2px solid ' + (S.azon.staff ? 'var(--accent)' : 'var(--border)') + ';border-radius:9px;padding:11px 10px;font-size:15px';
    staff.value = S.azon.staff || ''; staff.placeholder = 'pl. Kovács Mária';
    staff.oninput = function () { S.azon.staff = this.value; perzisztal(); };
    staffSor.appendChild(staff);
    if (S.azon.staff) {
      var stX = ikonBtnEl('btn btn-ghost', 'close'); stX.title = 'Ápoló törlése (aktív ápoló elfelejtése)';
      stX.style.cssText = 'padding:9px 11px;flex:none';
      stX.onclick = function () { S.azon.staff = ''; staffAktivTorol(); render(); };
      staffSor.appendChild(stX);
    }
    g1.appendChild(staffSor);
    // korábbi ápolók: autocomplete + gyors-választó chipek
    var korabbiak = staffLista();
    if (korabbiak.length) {
      var dl = el('datalist'); dl.id = 'staff-lista';
      korabbiak.forEach(function (nv) { var o = document.createElement('option'); o.value = nv; dl.appendChild(o); });
      g1.appendChild(dl);
      var chipsor = el('div', 'staff-chipsor');
      chipsor.appendChild(el('span', 'staff-cimke', 'Korábbi:'));
      korabbiak.forEach(function (nv) {
        var ch = el('button', 'staff-chip', nv); ch.type = 'button';
        ch.onclick = function () { S.azon.staff = nv; staff.value = nv; };
        chipsor.appendChild(ch);
      });
      g1.appendChild(chipsor);
    }
    c.appendChild(g1);

    var g2 = el('div', 'pfield');
    g2.appendChild(elLabel('Beteg azonosító — KBA (kórházi betegazonosító) / vonalkód'));
    var bc = el('input'); bc.type = 'text'; bc.id = 'bc-input';
    bc.style.cssText = 'border:2px solid var(--accent);border-radius:9px;padding:12px 10px;font-size:16px;font-family:\'SF Mono\',Consolas,monospace;width:100%';
    bc.value = S.azon.raw || ''; bc.placeholder = 'Csippantás ide, vagy KBA szám…';
    // scanner Entert küld → feldolgozás ÉS továbblépés (gyors felvétel)
    bc.onkeydown = function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); feldolgozBc(bc.value); if (S.azon.raw) { staffMent(S.azon.staff); naplo('Azonosítás', (S.azon.nev || '') + (S.azon.id ? ' · ' + S.azon.id : '')); megy('kritikus'); } } };
    bc.onchange = function () { feldolgozBc(bc.value); };
    g2.appendChild(bc);
    c.appendChild(g2);
    var infoAzon = el('div', 'lelet-msg'); infoAzon.id = 'azon-msg';
    if (S.azon.id || S.azon.nev) infoAzon.innerHTML = '<span class="ok">Beteg: ' + [S.azon.nev, S.azon.id ? 'azonosító ' + S.azon.id : ''].filter(Boolean).join(' · ') + '</span>';
    c.appendChild(infoAzon);

    function feldolgozBc(v) {
      var p = parseAzonosito(v);
      S.azon.id = p.id; S.azon.nev = p.nev; S.azon.szul = p.szul; S.azon.raw = p.raw;
      $('azon-msg').innerHTML = (p.id || p.nev) ? ('<span class="ok">Rögzítve: ' + (p.nev || '') + (p.id ? ' · azonosító ' + p.id : '') + '</span>') : '';
    }

    // Tudástár a KEZDŐKÉPERNYŐN is: a háttéranyag (TEK, döntési táblák, folyamat-
    // szabályok) eddig csak a folyamat VÉGÉN volt elérhető — pedig a kérdés jellemzően
    // a triázs KÖZBEN vagy előtte merül fel.
    var tudK = el('button', 'tudastar-belepo'); tudK.type = 'button';
    tudK.innerHTML = ikonSvg('book') +
      '<span><b>Tudástár</b><br><span class="tb-sub">MSTR-szintek · döntési és vitál-táblák · területi ellátás (TEK) · folyamat-szabályok · fogalmak — kereshetően</span></span>' +
      '<span class="tb-arrow">›</span>';
    tudK.onclick = function () { S.tudastarElozoStep = 'azonositas'; S.step = 'tudastar'; render(); };
    c.appendChild(tudK);

    var azonKitoltve = !!(S.azon.raw || S.azon.staff);
    c.appendChild(navSor({ tovabb: function () { staffMent(S.azon.staff); if (azonKitoltve) naplo('Azonosítás', (S.azon.nev || '') + (S.azon.id ? ' · ' + S.azon.id : '') + (S.azon.staff ? ' · ápoló: ' + S.azon.staff : '')); megy('kritikus'); }, tovabbCimke: (azonKitoltve ? 'Tovább →' : 'Kihagyás →') }));
    fo.appendChild(c);
    setTimeout(function () { bc.focus(); }, 50);
  };
  function elLabel(txt) { var l = el('label', null, txt); l.style.cssText = 'font-size:12px;font-weight:650;color:var(--muted);display:block;margin-bottom:4px'; return l; }

  // ---- RACE-skála (stroke, LVO-szűrés) — AHA Mission: Lifeline Stroke kártya alapján ----
  // Forrás: Pérez de la Ossa N, Carrera D, Gorchs M, et al. "Design and validation of a
  // prehospital stroke scale to predict large arterial occlusion." Stroke 2014;45(1):87-91.
  // (AHA "RACE — A Stroke Assessment Tool for EMS" kártya, © 2019 American Heart Association.)
  var RACE_TETELEK = [
    { kulcs: 'raceArc', cim: 'Arcbénulás', instr: 'Kérje meg a beteget, mutassa meg a fogait.', opciok: [
      [0, 'Tünetmentes (szimmetrikus mozgás)'], [1, 'Enyhe (kissé aszimmetrikus)'], [2, 'Közepes–súlyos (teljesen aszimmetrikus)'] ] },
    { kulcs: 'raceKar', cim: 'Kar motoros funkciója', instr: 'A kart emelje 90°-ra (ülve) vagy 45°-ra (fekve).', opciok: [
      [0, 'Normál–enyhe (10 másodpercnél tovább tartja)'], [1, 'Közepes (10 másodpercnél rövidebb ideig tartja)'], [2, 'Súlyos (gravitáció ellenében sem emeli)'] ] },
    { kulcs: 'raceLab', cim: 'Láb motoros funkciója', instr: 'A lábat emelje 30°-ra (fekve).', opciok: [
      [0, 'Normál–enyhe (5 másodpercnél tovább tartja)'], [1, 'Közepes (5 másodpercnél rövidebb ideig tartja)'], [2, 'Súlyos (gravitáció ellenében sem emeli)'] ] },
    { kulcs: 'raceTekintet', cim: 'Fej- és tekintetdeviáció', instr: 'Figyelje a szemmozgást és a fej elfordulását.', opciok: [
      [0, 'Nincs (mindkét irányba lehetséges a szemmozgás, nincs fejfordulás)'], [1, 'Van (a szem és a fej egy irányba deviál)'] ] },
  ];
  var RACE_AFAZIA = { kulcs: 'raceAfazia', cim: 'Afázia (jobb oldali gyengeségnél)', instr: 'Kérjen két utasítást: „csukja be a szemét” — „szorítson öklöt”.', opciok: [
    [0, 'Normál (mindkét feladatot helyesen végzi)'], [1, 'Közepes (egy feladatot végez el helyesen)'], [2, 'Súlyos (egyiket sem végzi el)'] ] };
  var RACE_AGNOZIA = { kulcs: 'raceAgnozia', cim: 'Agnózia (bal oldali gyengeségnél)', instr: 'Kérdezze: „Kié ez a kar?” (a paretikus kart mutatva — aszomatognózia); „Meg tudja mozgatni a karját?” (anozognózia).', opciok: [
    [0, 'Normál (nincs aszomatognózia és nincs anozognózia)'], [1, 'Közepes (aszomatognózia VAGY anozognózia)'], [2, 'Súlyos (mindkettő fennáll)'] ] };

  function raceTetelDoboz(T, tetel, renderCb) {
    var w = el('div', 'race-blokk');
    w.appendChild(elLabel(tetel.cim));
    w.appendChild(el('div', 'race-instr', tetel.instr));
    var opts = el('div', 'race-opts');
    tetel.opciok.forEach(function (o) {
      var val = o[0], szoveg = o[1];
      var b = el('button', 'race-opt' + (T[tetel.kulcs] === val ? ' sel' : '')); b.type = 'button';
      b.innerHTML = '<span class="race-val">' + val + '</span><span>' + szoveg + '</span>';
      b.onclick = function () { T[tetel.kulcs] = val; renderCb(); };
      opts.appendChild(b);
    });
    w.appendChild(opts);
    return w;
  }
  function raceOsszeg(T) {
    var alap = ['raceArc', 'raceKar', 'raceLab', 'raceTekintet'];
    if (alap.some(function (k) { return T[k] == null; })) return null;
    var afaziaAgnozia = T.raceOldal === 'jobb' ? T.raceAfazia : (T.raceOldal === 'bal' ? T.raceAgnozia : null);
    if (afaziaAgnozia == null) return null;
    return T.raceArc + T.raceKar + T.raceLab + T.raceTekintet + afaziaAgnozia;
  }
  function raceReszletek(T, renderCb) {
    var wrap = el('div');
    wrap.appendChild(elLabel('RACE-skála (Rapid Arterial oCclusion Evaluation) — LVO-szűrés'));
    RACE_TETELEK.forEach(function (t) { wrap.appendChild(raceTetelDoboz(T, t, renderCb)); });
    // oldal-választó dönti el, hogy afázia vagy agnózia tesztet mutatunk
    var oldalW = el('div', 'race-blokk');
    oldalW.appendChild(elLabel('Melyik oldalon gyengébb a beteg?'));
    var oldalRow = el('div'); oldalRow.style.cssText = 'display:flex;gap:8px';
    [['jobb', 'Jobb oldali gyengeség → afázia-teszt'], ['bal', 'Bal oldali gyengeség → agnózia-teszt']].forEach(function (o) {
      var b = el('button', 'tetra-choice' + (T.raceOldal === o[0] ? ' sel' : ''), o[1]); b.type = 'button'; b.style.flex = '1';
      b.onclick = function () { T.raceOldal = o[0]; renderCb(); };
      oldalRow.appendChild(b);
    });
    oldalW.appendChild(oldalRow);
    wrap.appendChild(oldalW);
    if (T.raceOldal === 'jobb') wrap.appendChild(raceTetelDoboz(T, RACE_AFAZIA, renderCb));
    else if (T.raceOldal === 'bal') wrap.appendChild(raceTetelDoboz(T, RACE_AGNOZIA, renderCb));
    var osszeg = raceOsszeg(T);
    var tot = el('div', 'race-total' + (osszeg != null && osszeg >= 5 ? ' magas' : ''));
    tot.appendChild(el('div', 'race-total-num', osszeg == null ? '–' : (osszeg + ' / 9')));
    var desc = osszeg == null ? 'RACE összeg (töltse ki mindegyik tételt, és válasszon oldalt)'
      : osszeg >= 5 ? 'RACE ≥ 5 — magas nagyérelzáródás- (LVO-) kockázat a nyomtatvány szerint. A célintézményről a műszakvezető orvos dönt.'
      : osszeg > 0 ? 'Stroke-gyanú fennáll, alacsonyabb LVO-valószínűség'
      : 'RACE 0 — tünetmentes vizsgálat ezen a skálán';
    tot.appendChild(el('div', 'race-total-desc', desc));
    wrap.appendChild(tot);
    var forr = el('div', 'reszlet-forras'); forr.style.marginTop = '8px';
    forr.innerHTML = ikonSvg('book') + '<span>AHA Mission: Lifeline Stroke — RACE Scale; Pérez de la Ossa N, et al., Stroke 2014;45(1):87-91. ≥5 pont → magas LVO-valószínűség.</span>';
    wrap.appendChild(forr);
    return wrap;
  }

  // Gyermek korcsoport-visszajelzés: a determinisztikus sávok (láz-küszöb + vitál-sáv) láthatóvá tétele.
  function korcsoportInfo() {
    var kh = S.beteg.eletkorHonap != null ? S.beteg.eletkorHonap : (S.beteg.eletkorEv != null ? S.beteg.eletkorEv * 12 : null);
    if (kh == null) return null;
    var hatar = ((KB.meta && KB.meta.gyermekHatarEv) || 18) * 12;
    if (kh >= hatar) return null;   // felnőtt — nincs kor-függő determináns
    var laz = kh < 3 ? '0–3 hó' : (kh < 36 ? '3 hó–3 év' : '>3 év');
    var band = null, bands = KB.vitalBands || [];
    for (var i = 0; i < bands.length && !band; i++) {
      (bands[i].rows || []).forEach(function (r) { if (band == null && kh >= r.korMinHonap && kh <= r.korMaxHonap) band = r.eletkor; });
    }
    return { csecs: (kh < 24 ? 'csecsemő / kisded' : 'gyermek'), laz: laz, band: band };
  }
  function korcsoportFrissit() {
    var elm = document.getElementById('korcsoport-info'); if (!elm) return;
    var info = korcsoportInfo();
    if (!info) { elm.style.display = 'none'; elm.innerHTML = ''; return; }
    elm.style.display = '';
    elm.innerHTML = ikonSvg('person') + ' <b>Korcsoport:</b> ' + info.csecs +
      (info.band ? ' · vitál-sáv: <b>' + info.band + '</b>' : '') + ' · láz-küszöb sáv: <b>' + info.laz + '</b>';
  }

  RENDER.kritikus = function (fo) {
    var c = kartya(lepesFelirat('kritikus'), 'Első megtekintés (look test)', 'Kritikus megjelenés → azonnali MSTR 1.');
    var f = (KB.inputFields || []).filter(function (x) { return x.id === 'kritikusMegjelenes'; })[0];
    if (f) c.appendChild(opcioKartyak(f, function () {
      // CSAK MSTR 1-nél ugrunk azonnal az eredményhez (ennél súlyosabb nincs, a
      // teljes felmérés felesleges). MSTR 2-nél TOVÁBB megyünk a felmérésre, mert a
      // légzés/keringés még 1-re súlyosbíthat (alultriázs elkerülése).
      if (S.utolso && S.utolso.szint === 1) megy('eredmeny');
      else megy('kor');
    }));
    c.appendChild(navSor({}));
    fo.appendChild(c);
  };

  RENDER.kor = function (fo) {
    var c = kartya(lepesFelirat('kor'), 'A beteg életkora', 'Felnőttnél elég a korcsoport (75 év alatt vagy felett), gyermeknél pontos kor kell.');
    // A felnőtt életkornak EGY triázs-küszöbe van: a forrás (jegyzet 86. o.) az immunszuppresszív
    // állapotok között nevesíti a 75 év feletti életkort (szabály: esc_idos_lazas_immunszupprimalt,
    // eletkorEv > 75 + láz → MSTR 2). Ezért a gyors választás KÉT gomb: 18–75 év és 75 év felett.
    // A többi felnőtt kor-feltétel (eletkorEv ≥ 16, < 18; eletkorHonap ≥ 36) mindkét gombra
    // azonosan dől el. HA ÚJ felnőtt kor-küszöb kerül a KB-ba, ezt a felosztást bővíteni kell!
    c.appendChild(el('div', 'card-eye', 'Felnőtt'));
    var kgrid = el('div', 'param-grid');
    Object.keys(KOR_KATOK).forEach(function (kulcs) {
      var kk = KOR_KATOK[kulcs];
      var b = el('button', 'kor-chip kor-chip-full' + (S.beteg.korKat === kulcs ? ' sel' : '')); b.type = 'button';
      b.innerHTML = '<span class="kor-chip-fo">' + kk.gomb + '</span><span class="kor-chip-al">' + kk.al + '</span>';
      // FIGYELEM: az eletkorEv itt NEM a beteg életkora, hanem belső helyettesítő érték (45 ill. 76),
      // hogy a korfüggő felnőtt szabályok le tudjanak futni. A korKat jelzi, hogy pontos életkor
      // NINCS megadva — minden megjelenítés a korKatFelirat()-ot használja, a számot soha.
      b.onclick = function () { S.beteg.eletkorEv = kk.ev; S.beteg.eletkorHonap = null; S.beteg.korKat = kulcs; ertekel(); naplo('Életkor', kk.felirat); megy('panaszKat'); };
      kgrid.appendChild(b);
    });
    c.appendChild(kgrid);
    var sp = el('div'); sp.style.height = '16px'; c.appendChild(sp);
    c.appendChild(el('div', 'card-eye', 'Vagy pontos életkor'));
    var grid = el('div', 'param-grid');
    grid.appendChild(paramMezo('eletkorEv', 'Életkor (év)', 'év', 0, 120, 1));
    grid.appendChild(paramMezo('eletkorHonap', 'Csecsemőkor (hónap)', '2 év alatt', 0, 24, 1));
    c.appendChild(grid);
    // determinisztikus korcsoport-visszajelzés (gyermeknél): melyik vitál-sávba / láz-küszöbbe esik
    var kcs = el('div', 'info-box'); kcs.id = 'korcsoport-info'; kcs.style.marginTop = '12px';
    var kinf = korcsoportInfo();
    if (kinf) kcs.innerHTML = ikonSvg('person') + ' <b>Korcsoport:</b> ' + kinf.csecs + (kinf.band ? ' · vitál-sáv: <b>' + kinf.band + '</b>' : '') + ' · láz-küszöb sáv: <b>' + kinf.laz + '</b>';
    else kcs.style.display = 'none';
    c.appendChild(kcs);
    c.appendChild(navSor({ tovabb: function () { megy('panaszKat'); }, validate: function () { return S.beteg.eletkorEv != null || S.beteg.eletkorHonap != null; }, hint: 'Az életkor kötelező.' }));
    fo.appendChild(c);
  };

  // Letisztult, egységes vonalas piktogramok (nem emoji). 24×24, currentColor, stroke.
  var KAT_SVG = {
    'Szív- és érrendszeri': '<path d="M12 20C6.5 16 3.5 12.6 3.5 9A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 8.5 2c0 3.6-3 7-8.5 11Z"/><path d="M3.8 12h4l1.5-3 2 6 1.5-3h7"/>',
    'Légzőrendszeri': '<path d="M12 4v8"/><path d="M9 12c0-1-1.4-1.6-2.5-1C5 11.8 5 14 5 16.5S5.7 20 7.2 20 9 18.4 9 16.5Z"/><path d="M15 12c0-1 1.4-1.6 2.5-1C19 11.8 19 14 19 16.5S18.3 20 16.8 20 15 18.4 15 16.5Z"/>',
    'Neurológiai': '<path d="M9 4.5A2.5 2.5 0 0 0 6.5 7 2.5 2.5 0 0 0 5 11.5 2.5 2.5 0 0 0 6.5 16 2.6 2.6 0 0 0 9 19.5 2.5 2.5 0 0 0 12 18V5.5A2.2 2.2 0 0 0 9 4.5Z"/><path d="M15 4.5A2.5 2.5 0 0 1 17.5 7 2.5 2.5 0 0 1 19 11.5 2.5 2.5 0 0 1 17.5 16 2.6 2.6 0 0 1 15 19.5 2.5 2.5 0 0 1 12 18"/>',
    'Mentális egészség': '<path d="M4 21a8 8 0 1 1 16 0"/><circle cx="12" cy="9" r="5"/><path d="M10 9a2 2 0 0 1 4 0c0 1.3-2 1.6-2 3"/>',
    'Gastrointestinalis': '<path d="M9 4v5a4 4 0 0 0 4 4 3 3 0 0 1 0 6h-2.5"/><path d="M9 8H6"/>',
    'Genito-urinaris': '<path d="M12 3.2 6.7 9a7.5 7.5 0 1 0 10.6 0Z"/>',
    'Nőgyógyászat': '<circle cx="12" cy="9" r="5"/><path d="M12 14v7M9 18h6"/>',
    'Ophthalmológia': '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.6"/>',
    'Fül': '<path d="M8 9a4 4 0 0 1 8 0c0 2.2-2 3-2 5a2.6 2.6 0 0 1-5 .4"/><path d="M10.5 9.2a1.6 1.6 0 0 1 3 .3"/>',
    'Orr': '<path d="M14.5 4.5c-.5 3.4-1.2 5.2-2.8 7.2-.8 1-.2 2.4 1.1 2.5"/><path d="M9.8 13.6c1.7 1.1 3.6 1 5.2-.2"/>',
    'Fül-orr-gége': '<path d="M15 4a7 7 0 0 0-7 7c0 2-1 3-1 4.5S8 18 9.5 18H11v2.5h4"/><path d="M12 11.5a1.6 1.6 0 0 1 2.8.5"/>',
    'Ortopédiai': '<path d="m8.5 15.5 7-7"/><path d="M8.6 15.4a1.9 1.9 0 1 1-2.7-.5 1.9 1.9 0 1 1 .5-2.7"/><path d="M15.4 8.6a1.9 1.9 0 1 1 2.7.5 1.9 1.9 0 1 1-.5 2.7"/>',
    'Bőrgyógyászati': '<rect x="3.5" y="8.5" width="17" height="7" rx="3.5" transform="rotate(-45 12 12)"/><path d="M10 10.5v3M14 10.5v3M12 9.5v5"/>',
    'Trauma': '<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8v8M8 12h8"/>',
    'Gyógyszerrel történő visszaélések': '<rect x="3.5" y="8" width="17" height="8" rx="4" transform="rotate(-45 12 12)"/><path d="m9 9 6 6"/>',
    'Exogén ártalmak': '<path d="M10.3 4 3 17a2 2 0 0 0 1.7 3h14.6a2 2 0 0 0 1.7-3L13.7 4a2 2 0 0 0-3.4 0Z"/><path d="M12 9.5v4M12 17h.01"/>',
    'Általános és minor tünetek': '<rect x="8" y="3" width="8" height="4" rx="1.3"/><path d="M16 5h2.5A1.5 1.5 0 0 1 20 6.5v13A1.5 1.5 0 0 1 18.5 21h-13A1.5 1.5 0 0 1 4 19.5v-13A1.5 1.5 0 0 1 5.5 5H8"/><path d="M12 11v5M9.5 13.5h5"/>'
  };
  function catIkon(kat) {
    var inner = KAT_SVG[kat] || '<circle cx="12" cy="12" r="8"/>';
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>';
  }
  function kategoriak() {
    var map = {};
    (KB.complaints || []).forEach(function (p) { (map[p.category] = map[p.category] || []).push(p); });
    return map;
  }
  // egy panasz "beépített" (módosító nélküli) MSTR-szintje, ha a forrás ilyet ad
  // (pl. szívleállás → 1, szív eredetű mellkasi fájdalom → 2). Vizuális jelzés.
  function panaszSzint(complaintId) {
    var best = null;
    (KB.rules || []).forEach(function (r) {
      if (r.level == null || !r.csakPanaszok || r.csakPanaszok.indexOf(complaintId) === -1) return;
      if (r.condition && r.condition.length) return; // csak a tisztán panasz-alapú (feltétel nélküli) szabály
      if (best == null || r.level < best) best = r.level;
    });
    return best;
  }
  // ékezet-érzéketlen normalizálás + több-szavas, alias-tudatos, rangsorolt keresés.
  // Az aliasok (köznyelvi/szinonima kifejezések) csak a KERESÉST segítik — a nővér a
  // valódi CEDIS-panaszt választja ki; a triázs-logikát nem befolyásolják.
  function normSzo(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function panaszKereses(query) {
    var tokens = normSzo(query).split(/\s+/).filter(Boolean);
    if (!tokens.length) return [];
    var q = normSzo(query), res = [];
    (KB.complaints || []).forEach(function (p) {
      var nn = normSzo(p.name), kk = normSzo(p.category), aa = normSzo((p.aliases || []).join(' '));
      var hay = nn + ' ' + kk + ' ' + aa;
      if (!tokens.every(function (t) { return hay.indexOf(t) >= 0; })) return;
      var score = 0;
      if (nn.indexOf(q) >= 0) score += 100;           // teljes kifejezés a névben
      if (nn.indexOf(tokens[0]) === 0) score += 25;   // névkezdet
      tokens.forEach(function (t) { if (nn.indexOf(t) >= 0) score += 10; else if (aa.indexOf(t) >= 0) score += 4; });
      res.push({ p: p, score: score });
    });
    res.sort(function (a, b) { return b.score - a.score; });
    return res.map(function (r) { return r.p; });
  }
  function panaszTetel(p, mutasdKat) {
    var it = el('button', 'c-item'); it.type = 'button';
    var nm = el('span', 'ci-name', p.name); it.appendChild(nm);
    // Szint-badge SZÁNDÉKOSAN nincs a panasz-gombon: a legtöbb panasznál a szintet a
    // módosítók döntik el (nem lenne konzisztens). A szint a döntési úton/eredményen látszik.
    if (mutasdKat) it.appendChild(el('span', 'ci-cat', p.category));
    it.onclick = function () {
      S.beteg.vezetoPanaszId = p.id; ertekel();
      naplo('Vezető panasz', p.name + ' (' + p.category + ')');
      megy('vital');
    };
    return it;
  }
  RENDER.panaszKat = function (fo) {
    var c = kartya(lepesFelirat('panaszKat'), 'Mi a beteg fő panasza?', 'Keresés (köznyelvi szó is jó) vagy böngészés szervrendszer szerint.');
    var kereso = el('input', 'search-box'); kereso.type = 'text';
    kereso.placeholder = 'Keresés az összes panasz közt… (pl. mellkas, láz, fejfájás)';
    kereso.value = S.panaszKereso || '';
    c.appendChild(kereso);

    var tarto = el('div'); c.appendChild(tarto);
    var map = kategoriak();

    function rajzol() {
      tarto.innerHTML = '';
      var sz = (S.panaszKereso || '').trim();
      if (sz) {
        var lista = el('div', 'c-list');
        var talalatok = panaszKereses(sz);
        talalatok.forEach(function (p) { lista.appendChild(panaszTetel(p, true)); });
        if (!talalatok.length) lista.appendChild(el('div', 'skip-hint', 'Nincs találat — próbáljon más kifejezést (köznyelvi szó is jó), vagy böngésszen a kategóriákban.'));
        tarto.appendChild(lista);
      } else if (S.catKey) {
        var vissza = el('button', 'crumb', '← Összes kategória'); vissza.type = 'button';
        vissza.style.cssText += ';cursor:pointer;margin-bottom:10px';
        vissza.onclick = function () { S.catKey = null; rajzol(); };
        tarto.appendChild(vissza);
        tarto.appendChild(el('div', 'card-eye', S.catKey));
        var l2 = el('div', 'c-list');
        (map[S.catKey] || []).forEach(function (p) { l2.appendChild(panaszTetel(p, false)); });
        tarto.appendChild(l2);
      } else {
        // GYAKORI panaszok gyorsgombjai (busy-ED: egy koppintás a leggyakoribb ED-bemondásokra)
        var gyakoriIds = ['mellkasi-fajdalom-sziv-eredetu', 'hasi-fajdalom', 'legszomj', 'fejfajas', 'laz', 'szedules', 'hanyas-hanyinger', 'ajulas-ajulaskozeli-allapot', 'vegtaggyengeseg-cva-tunetek', 'alsovegtagi-serules'];
        var gyakori = gyakoriIds.map(function (id) { return (KB.complaints || []).filter(function (p) { return p.id === id; })[0]; }).filter(Boolean);
        if (gyakori.length) {
          var gyf = el('div', 'card-eye'); gyf.innerHTML = ikonSvg('bolt') + '<span>Gyakori panaszok</span>'; tarto.appendChild(gyf);
          var gy = el('div', 'gyakori-sor');
          gyakori.forEach(function (p) {
            var b = el('button', 'gyakori-chip'); b.type = 'button';
            b.appendChild(el('span', null, p.name));
            b.onclick = function () { S.beteg.vezetoPanaszId = p.id; ertekel(); naplo('Vezető panasz', p.name + ' (' + p.category + ')'); megy('vital'); };
            gy.appendChild(b);
          });
          tarto.appendChild(gy);
          tarto.appendChild(el('div', 'card-eye', 'Vagy böngésszen szervrendszer szerint'));
        }
        var grid = el('div', 'cat-grid');
        Object.keys(map).forEach(function (kat) {
          var b = el('button', 'cat-btn'); b.type = 'button';
          var ico = el('div', 'cat-ico'); ico.innerHTML = catIkon(kat); b.appendChild(ico);
          b.appendChild(el('div', 'cat-name', kat));
          // A CEDIS latinos kategórianevei forráshűek; magyar alcím segíti az új ápolót.
          var KAT_MAGYAR = { 'Gastrointestinalis': 'emésztőrendszeri', 'Genito-urinaris': 'vizelet- és nemi szervi',
            'Ophthalmológia': 'szemészeti', 'Exogén ártalmak': 'vegyi, elektromos, hő, víz', 'Ortopédiai': 'mozgásszervi',
            'Neurológiai': 'idegrendszeri', 'Légzőrendszeri': 'légúti, tüdő', 'Szív- és érrendszeri': 'kardiológiai',
            'Bőrgyógyászati': 'bőr', 'Mentális egészség': 'pszichiátriai', 'Nőgyógyászat': 'nőgyógyászati, terhesség',
            'Gyógyszerrel történő visszaélések': 'mérgezés, túladagolás, megvonás' };
          if (KAT_MAGYAR[kat]) b.appendChild(el('div', 'cat-hu', KAT_MAGYAR[kat]));
          b.appendChild(el('div', 'cat-cnt', map[kat].length + ' panasz'));
          b.onclick = function () { S.catKey = kat; rajzol(); };
          grid.appendChild(b);
        });
        tarto.appendChild(grid);
      }
    }
    kereso.oninput = function () { S.panaszKereso = this.value; rajzol(); };
    kereso.onkeydown = function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); var first = tarto.querySelector('.c-item'); if (first) first.click(); } };
    rajzol();
    c.appendChild(navSor({}));
    fo.appendChild(c);
    setTimeout(function () { kereso.focus(); }, 40);
  };

  RENDER.vital = function (fo) {
    var c = kartya(lepesFelirat('vital'), 'Mért értékek', 'Minden mező opcionális — ami megvan, az számít.');
    // Széles képernyőn két oszlop: bal = lelet-beillesztés, jobb = ABCDE-vitálok (nincs görgetés).
    var wrap = el('div', 'vital-cols');
    var colL = el('div'); var colR = el('div');
    // lelet-beillesztés (bal)
    var ta = el('textarea', 'lelet'); ta.id = 'lelet-ta'; ta.placeholder = 'MedSol-lelet szövege ide illeszthető — a paramétereket átveszi. Kézi kitöltés is lehet.';
    if (S.leletRaw) ta.value = S.leletRaw;
    ta.oninput = function () { S.leletRaw = this.value; perzisztal(); };
    ta.addEventListener('paste', function () { setTimeout(function () { S.leletRaw = ta.value; leletAtvesz(ta.value, document.getElementById('lelet-msg')); render(); }, 0); });
    colL.appendChild(ta);
    var msg = el('div', 'lelet-msg'); msg.id = 'lelet-msg';
    if (S.leletMsg) msg.innerHTML = S.leletMsg;
    var gomb = el('button', 'btn btn-full', 'Paraméterek átvétele a leletből'); gomb.type = 'button';
    gomb.onclick = function () { S.leletRaw = ta.value; leletAtvesz(ta.value, msg); render(); };
    colL.appendChild(gomb); colL.appendChild(msg);
    // A vitálparaméterek ABCDE logikai sorrendben (jobb): A–B légzés, C keringés, D tudat, E testhő.
    function vitalCsoport(cim, mezok, elso) {
      var f = el('div', 'klin-fejlec', cim); if (!elso) f.style.marginTop = '14px'; colR.appendChild(f);
      var g = el('div', 'param-grid');
      mezok.forEach(function (m) { g.appendChild(paramMezo(m[0], m[1], m[2], m[3], m[4], m[5])); });
      colR.appendChild(g);
    }
    vitalCsoport('A–B · Légzés', [
      ['rr', 'Légzésszám', '/perc', 0, 150, 1],
      ['spo2', 'SpO₂', '%', 0, 100, 1],
    ], true);
    vitalCsoport('C · Keringés', [
      ['hr', 'Pulzus', '/perc', 0, 350, 1],
      ['sys', 'Vérnyomás — szisztolés (felső)', 'Hgmm', 0, 350, 1],
      ['dia', 'Vérnyomás — diasztolés (alsó)', 'Hgmm', 0, 250, 1],
    ]);
    colR.appendChild((function () { var f = el('div', 'klin-fejlec', 'D · Tudat (GCS)'); f.style.marginTop = '14px'; return f; })());
    colR.appendChild(gcsRacs());
    vitalCsoport('E · Testhőmérséklet', [
      ['temp', 'Testhő', '°C', 20, 45, 0.1],
    ]);
    wrap.appendChild(colL); wrap.appendChild(colR);
    c.appendChild(wrap);
    c.appendChild(navSor({ tovabb: function () { megy(kovetkezo('vital', 1)); } }));
    fo.appendChild(c);
  };

  function paramMezo(kulcs, cimke, egyseg, min, max, step) {
    var w = el('div', 'pfield');
    var lab = el('label', null, cimke); lab.htmlFor = 'p-' + kulcs; w.appendChild(lab);
    var inp = el('input'); inp.type = 'number'; inp.id = 'p-' + kulcs; inp.min = min; inp.max = max; inp.step = step;
    inp.setAttribute('inputmode', 'decimal');   // mobil/tablet: numerikus billentyűzet
    // gyors kor-kategóriánál az eletkorEv csak helyettesítő érték — nem írjuk be pontos korként
    if (S.beteg[kulcs] != null && !((kulcs === 'eletkorEv' || kulcs === 'eletkorHonap') && S.beteg.korKat)) inp.value = S.beteg[kulcs];
    function plauzibilisJelzes() {
      var v = inp.value, ki = v !== '' && ((min != null && +v < min) || (max != null && +v > max));
      inp.style.borderColor = ki ? 'var(--l1)' : ''; inp.style.background = ki ? 'var(--l1b)' : '';
    }
    plauzibilisJelzes();
    inp.oninput = function () {
      plauzibilisJelzes();
      S.beteg[kulcs] = this.value === '' ? null : parseFloat(this.value);
      // pontos kor megadása felülírja a gyors kor-kategóriát
      if ((kulcs === 'eletkorEv' || kulcs === 'eletkorHonap') && this.value !== '') S.beteg.korKat = null;
      // Kor-mezők KÖLCSÖNÖSEN KIZÁRÓAK: az egyik kitöltése törli a másikat, hogy ne
      // legyen ellentmondó életkor (ami rossz korspecifikus vitál-sávot adhatna).
      if (this.value !== '') {
        if (kulcs === 'eletkorEv' && S.beteg.eletkorHonap != null) { S.beteg.eletkorHonap = null; var mh = document.getElementById('p-eletkorHonap'); if (mh) mh.value = ''; }
        if (kulcs === 'eletkorHonap' && S.beteg.eletkorEv != null) { S.beteg.eletkorEv = null; var me = document.getElementById('p-eletkorEv'); if (me) me.value = ''; }
      }
      ertekel(); fejlecFrissit(); kritikusBanner(); frissitNav(); perzisztal();
      if (kulcs === 'eletkorEv' || kulcs === 'eletkorHonap') korcsoportFrissit();
    };
    w.appendChild(inp);
    w.appendChild(el('div', 'u', egyseg));
    return w;
  }
  // dinamikus (KB-ből jövő) szám-mező, opcionális call, teljes újrarajzolással
  function paramMezoAlt(kulcs, cimke, help, min, max, step, utanCb) {
    var w = el('div', 'pfield');
    w.appendChild(el('label', null, cimke));
    var inp = el('input'); inp.type = 'number'; inp.id = 'din-' + kulcs;
    if (min != null) inp.min = min; if (max != null) inp.max = max; if (step != null) inp.step = step;
    if (S.beteg[kulcs] != null) inp.value = S.beteg[kulcs];
    inp.oninput = function () { S.beteg[kulcs] = this.value === '' ? null : parseFloat(this.value); S.keziMezo[kulcs] = true; ertekel(); fejlecFrissit(); kritikusBanner(); perzisztal(); };
    w.appendChild(inp);
    if (help) w.appendChild(el('div', 'u', help));
    return w;
  }

  function gcsRacs() {
    var wrap = el('div');
    // Gyorsgomb a leggyakoribb esetre: éber beteg (GCS 15 = E4 V5 M6) egy koppintással.
    var gyorssor = el('div', 'gcs-gyors');
    var g15 = el('button', 'gcs-gyors-btn', '✓ Éber — GCS 15 (E4 V5 M6)'); g15.type = 'button';
    var mind15 = S.beteg.gcsE === 4 && S.beteg.gcsV === 5 && S.beteg.gcsM === 6;
    if (mind15) g15.classList.add('sel');
    g15.onclick = function () {
      if (S.beteg.gcsE === 4 && S.beteg.gcsV === 5 && S.beteg.gcsM === 6) { S.beteg.gcsE = null; S.beteg.gcsV = null; S.beteg.gcsM = null; }
      else { S.beteg.gcsE = 4; S.beteg.gcsV = 5; S.beteg.gcsM = 6; }
      ertekel(); render();
    };
    gyorssor.appendChild(g15);
    wrap.appendChild(gyorssor);
    var sorok = [{ k: 'gcsE', lbl: 'Szemnyitás (E)', max: 4 }, { k: 'gcsV', lbl: 'Verbális (V)', max: 5 }, { k: 'gcsM', lbl: 'Motoros (M)', max: 6 }];
    var secwrap = el('div', 'gcs-secwrap');
    sorok.forEach(function (s) {
      var sec = el('div', 'gcs-sec');
      sec.appendChild(el('div', 'gcs-lbl', 'GCS — ' + s.lbl));
      var nums = el('div', 'gcs-nums');
      for (var v = s.max; v >= 1; v--) (function (val) {
        var g = el('button', 'gnum' + (S.beteg[s.k] === val ? ' sel' : ''), String(val)); g.type = 'button';
        g.onclick = function () { S.beteg[s.k] = val; ertekel(); render(); };
        nums.appendChild(g);
      })(v);
      sec.appendChild(nums);
      secwrap.appendChild(sec);
    });
    wrap.appendChild(secwrap);
    var total = TriazsMotor.gcsOsszeg(S.beteg);
    var tot = el('div', 'gcs-total');
    tot.appendChild(el('div', 'gcs-total-num', total == null ? '–' : String(total)));
    tot.appendChild(el('div', 'gcs-total-desc', total == null ? 'GCS összeg (töltse ki mindhármat)' : 'GCS összeg / 15'));
    wrap.appendChild(tot);
    return wrap;
  }

  // Forrás-alapú KLINIKAI (ABCDE) besorolás a felületi csoportosításhoz.
  // Forrás: jegyzet 740-742 (A-B légzés/légút, C keringés, D eszmélet); a súlyos
  // nehézlégzés (A-B) sorában: intubált/asszisztált lélegeztetés + védtelen légút
  // (tankönyv 32, COT-2008 DIA 8/1999); ≥10% relatív O2-esés = Légzés (A-B) rule_06;
  // a "légútját védeni képtelen" a forrásban az eszméletlen (D) definícióhoz is kötődik
  // (CTAS LOC DIA 68), de a lelet légúti (A) — ezért A-B alá soroljuk, a D-kapcsolatot a súgó jelzi.
  var KLIN_CSOPORT = {
    legzesiJelek: 'AB', o2Akut: 'AB', relativO2Eses: 'AB', pefrSzazalek: 'AB',
    lelegeztetest_igenyel: 'AB', legutvedelem_keptelen: 'AB',
    keringesiAllapot: 'C', lazKullem: 'E',
    verzesSulyossag: 'MOD', serulesMagasRizikoju: 'MOD',
  };
  var KLIN_SORREND = [
    { k: 'AB', cim: 'A–B · Légzés és légút' },
    { k: 'C', cim: 'C · Keringés' },
    { k: 'E', cim: 'E · Láz / hőmérséklet' },
    { k: 'MOD', cim: 'Módosítók · vérzés, sérülési mechanizmus' },
    { k: 'egyeb', cim: 'Egyéb' },
  ];
  var AB_SORREND = { o2Akut: 0, legzesiJelek: 1, relativO2Eses: 2, pefrSzazalek: 3, lelegeztetest_igenyel: 4, legutvedelem_keptelen: 5 };

  RENDER.megfigyeles = function (fo) {
    var c = kartya(lepesFelirat('megfigyeles'), 'Elsődleges meghatározók (A–B, C, láz) és módosítók', 'ABCDE szerint — csak az jelenik meg, ami még változtathat a besoroláson.');
    var _kihagyoAlul = kihagyoGomb(c, 'Nincs eltérés az elsődleges meghatározókban', relevansMezok(mezokCsoportban('megfigyeles')), function () { megy(kovetkezo('megfigyeles', 1)); });
    var spo2Alacsony = S.beteg.spo2 != null && S.beteg.spo2 < 95;
    var lista = mezokCsoportban('megfigyeles').filter(function (f) {
      if (f.id === 'legzesiJelek') return true;
      if (f.id === 'o2Akut' || f.id === 'relativO2Eses') return spo2Alacsony;
      return mezoRelevans(f);
    });

    // már beírt numerikus adatok kontextusként (NEM kérdezzük újra)
    if (S.beteg.spo2 != null || S.beteg.rr != null) {
      var parts = [];
      if (S.beteg.spo2 != null) parts.push('SpO₂ ' + S.beteg.spo2 + '%');
      if (S.beteg.rr != null) parts.push('légzésszám ' + S.beteg.rr + '/perc');
      if (S.beteg.pefrSzazalek != null) parts.push('PEFR ' + S.beteg.pefrSzazalek + '%');
      c.appendChild(el('div', 'info-box', 'Rögzítve: ' + parts.join(' · ')));
    }

    function mezotRajzol(f, cel) {
      cel.appendChild(el('div', 'card-eye', f.label));
      cel.appendChild(opcioKartyak(f, function () { render(); }));
      if (f.id === 'legzesiJelek') cel.appendChild(szamitottNehezlegzes());
      var sp = el('div', 'mezo-koz'); cel.appendChild(sp);
    }

    var vanMezo = false;
    var blokkTarto = el('div', 'abcde-wrap');
    KLIN_SORREND.forEach(function (grp) {
      var mezok = lista.filter(function (f) { return (KLIN_CSOPORT[f.id] || 'egyeb') === grp.k; });
      if (grp.k === 'AB') mezok.sort(function (a, b) { return (AB_SORREND[a.id] != null ? AB_SORREND[a.id] : 9) - (AB_SORREND[b.id] != null ? AB_SORREND[b.id] : 9); });
      if (!mezok.length) return;
      vanMezo = true;
      var blokk = el('div', 'klin-blokk');
      blokk.appendChild(el('div', 'klin-fejlec', grp.cim));
      // A-B blokk elején a krónikus/COPD figyelmeztetés (ha releváns)
      if (grp.k === 'AB' && spo2Alacsony && S.beteg.o2Akut && S.beteg.o2Akut !== 'akut') {
        var w = el('div', 'warn');
        w.innerHTML = ikonSvg('warn') + ' Krónikus/ismeretlen alapérték: fokozat klinikai jel + PEFR alapján; ≥10% relatív esés → MSTR 1.';
        blokk.appendChild(w);
      }
      mezok.forEach(function (f) { mezotRajzol(f, blokk); });
      blokkTarto.appendChild(blokk);
    });
    c.appendChild(blokkTarto);
    if (!vanMezo) c.appendChild(el('div', 'skip-hint', 'Nincs további kérdés — a megadott adatok alapján továbbléphet.'));
    if (_kihagyoAlul) _kihagyoAlul();       // kihagyó gomb a döntő kérdések ALÁ

    c.appendChild(navSor({ tovabb: function () { megy(kovetkezo('megfigyeles', 1)); } }));
    fo.appendChild(c);
  };

  // A nehézlégzés-fokozat számított eredménye + honnan (proveniencia), forrással.
  function szamitottNehezlegzes() {
    var sz = (S.szamitott || {}).nehezlegzesFok;
    var box = el('div');
    if (!sz) return box;
    var FOK = { sulyos: 'Súlyos', kozepes: 'Közepes', enyhe: 'Enyhe', nincs: 'Nincs' };
    var lv = becsultSzint('nehezlegzesFok', sz.value);
    var d = el('div', 'reason'); d.style.marginTop = '8px';
    d.innerHTML = '<b>Nehézlégzés: ' + (FOK[sz.value] || sz.value) + '</b>' + (lv ? ' → MSTR ' + lv : '');
    box.appendChild(d);
    return box;
  }

  // Szervi/testüregi eredetű panaszok, ahol a fájdalom CTAS-definíció szerint mindig
  // centrális ("originates within a body cavity or organ") — a szabad Centrális/Perifériás
  // választás itt csak szórást okozna (két kolléga eltérő eredménye ugyanarra a panaszra,
  // 2026-07-21-i pilot-visszajelzés). Előre kitöltve (auto), de felülírható.
  var PANASZ_CENTRALIS_ALAPERTELMEZETT = ['hasi-fajdalom', 'mellkasi-fajdalom-nem-sziv-eredetu'];

  RENDER.fajdalom = function (fo) {
    var c = kartya(lepesFelirat('fajdalom'), 'Mennyire fáj?', 'VAS 0–10; fájdalom esetén a helye és a jellege is.');
    // VAS
    var zones = el('div', 'vas-zones');
    zones.appendChild(el('div', 'vas-zone vas-z0', 'Nincs / enyhe (0–3)'));
    zones.appendChild(el('div', 'vas-zone vas-z1', 'Közepes (4–7)'));
    zones.appendChild(el('div', 'vas-zone vas-z2', 'Súlyos (8–10)'));
    c.appendChild(zones);
    var nums = el('div', 'vas-nums');
    for (var v = 0; v <= 10; v++) (function (val) {
      var cls = val <= 3 ? 'vn0' : (val <= 7 ? 'vn1' : 'vn2');
      var b = el('button', 'vnum ' + cls + (S.beteg.fajdalomPont === val ? ' sel' : ''), String(val)); b.type = 'button';
      b.onclick = function () { S.beteg.fajdalomPont = val; S.keziMezo.fajdalomPont = true; ertekel(); naplo('Fájdalom (VAS)', val + '/10'); render(); };
      nums.appendChild(b);
    })(v);
    c.appendChild(nums);

    var lokKotelezo = false, jelKotelezo = false;
    if (S.beteg.fajdalomPont != null && S.beteg.fajdalomPont > 0) {
      // szervi/testüregi panasznál a centrális auto-kitöltés (felülírható)
      if (S.beteg.fajdalomLokalizacio == null && !S.keziMezo.fajdalomLokalizacio &&
        PANASZ_CENTRALIS_ALAPERTELMEZETT.indexOf(S.beteg.vezetoPanaszId) !== -1) {
        S.beteg.fajdalomLokalizacio = 'centralis';
        S.autoMezo.fajdalomLokalizacio = { value: 'centralis', note: 'Szervi/testüregi eredetű panasz — CTAS-definíció szerint centrális.' };
      }
      var lok = (KB.inputFields || []).filter(function (f) { return f.id === 'fajdalomLokalizacio'; })[0];
      var jel = (KB.inputFields || []).filter(function (f) { return f.id === 'fajdalomJelleg'; })[0];
      lokKotelezo = !!lok; jelKotelezo = !!jel;
      if (lok) { var sp1 = el('div'); sp1.style.height = '14px'; c.appendChild(sp1); c.appendChild(el('div', 'card-eye', 'Fájdalom helye')); c.appendChild(opcioKartyak(lok, function () { render(); })); }
      if (jel) { var sp2 = el('div'); sp2.style.height = '14px'; c.appendChild(sp2); c.appendChild(el('div', 'card-eye', 'Fájdalom jellege')); c.appendChild(opcioKartyak(jel, function () { render(); })); }
    }
    c.appendChild(navSor({
      tovabb: function () { megy(kovetkezo('fajdalom', 1)); },
      validate: function () {
        if (S.beteg.fajdalomPont == null) return false;
        if (lokKotelezo && S.beteg.fajdalomLokalizacio == null) return false;
        if (jelKotelezo && S.beteg.fajdalomJelleg == null) return false;
        return true;
      },
      hint: 'Kötelező: pontszám, majd 0 felett a hely és a jelleg.'
    }));
    fo.appendChild(c);
  };

  RENDER.modosito = function (fo) {
    var p = (KB.complaints || []).filter(function (x) { return x.id === S.beteg.vezetoPanaszId; })[0];
    var c = kartya(lepesFelirat('modosito'), 'Panasz-specifikus módosítók', 'A vezető panaszhoz tartozó kérdések.');
    // Ha a panasznak NINCS alapszintje (pl. csecsemő-apnoe: a súlyosság 1/2/3 közt csak a
    // módosítóból derül ki), a módosító megadása KÖTELEZŐ — enélkül a rendszer "nincs
    // javaslat" zsákutcába futna. Ilyenkor a gyors-kihagyás gomb nem jelenik meg, a Tovább védett.
    var kotelezo = !(S.utolso && S.utolso.szint != null);
    var _kihagyoAlul2 = null;
    if (!kotelezo) {
      _kihagyoAlul2 = kihagyoGomb(c, 'Nincs releváns panasz-specifikus módosító', relevansMezok(lathatoModositok()), function () { megy(kovetkezo('modosito', 1)); });
    }
    relevansMezok(lathatoModositok()).forEach(function (f) {
      c.appendChild(el('div', 'card-eye', f.label));
      c.appendChild(opcioKartyak(f, function () { render(); }));
      var sp = el('div'); sp.style.height = '14px'; c.appendChild(sp);
    });
    if (_kihagyoAlul2) _kihagyoAlul2();     // kihagyó gomb a döntő kérdések ALÁ
    c.appendChild(navSor({
      tovabb: function () { megy(kovetkezo('modosito', 1)); },
      validate: function () { return !!(S.utolso && S.utolso.szint != null); },
      hint: 'Ehhez a panaszhoz kötelező megadni egy választ — enélkül nem adható triázs-szint.'
    }));
    fo.appendChild(c);
  };
  // Gyors-affordancia: „nincs releváns módosító" → egy koppintás továbblép (baseline érvényes; nem tippel).
  // Igaz, ha a képernyőn ténylegesen megjelenő mezők közül bármelyik SÚLYOSABB
  // (kisebb számú) szintet tudna adni a jelenleginél. Ilyenkor a "nincs releváns…"
  // gyorsgomb valótlant állítana: közvetlenül alatta ott állnak a döntő kérdések.
  function vanSulyosbitoMezo(mezok) {
    var padlo = S.utolso ? S.utolso.szint : null;
    return mezok.some(function (f) {
      var b = mezoLegjobbSzint(f.id);
      return b != null && (padlo == null || b < padlo);
    });
  }
  // Kihagyó gomb. Ha van a lapon súlyosbítani képes, megválaszolatlan kérdés, akkor
  // NEM állíthatjuk, hogy "nincs releváns" — a gomb ilyenkor a lap ALJÁRA kerül, és
  // kimondja, mit vállal az ápoló. (Lektori észrevétel: 45 éves szédülő betegnél a
  // gomb a "Szédülés jellege (MSTR 2/3)" kérdés FÖLÖTT állt, egy koppintás = MSTR 4.)
  function kihagyoGomb(c, cimke, mezok, tovabbFn) {
    if (vanSulyosbitoMezo(mezok)) {
      return function () {
        var b = el('button', 'nincs-mod-btn nincs-mod-btn-ovatos'); b.type = 'button';
        b.innerHTML = ikonSvg('warn') + ' <span>Ezeket a kérdéseket kihagyom — a besorolás enyhébb maradhat</span>' +
          ' <span class="nm-arrow">→</span>';
        b.onclick = tovabbFn;
        c.appendChild(b);
      };
    }
    c.appendChild(nincsModositoGomb(cimke, tovabbFn));
    return null;
  }
  function nincsModositoGomb(cimke, tovabbFn) {
    var b = el('button', 'nincs-mod-btn'); b.type = 'button';
    b.innerHTML = cimke + ' <span class="nm-arrow">→</span>';
    b.onclick = tovabbFn;
    return b;
  }

  RENDER.gyermek = function (fo) {
    var c = kartya(lepesFelirat('gyermek'), 'Gyermek-specifikus megfigyelések', 'Csak gyermeknél értelmezett módosítók.');
    relevansMezok(gyermekMezok()).forEach(function (f) {
      c.appendChild(el('div', 'card-eye', f.label));
      c.appendChild(opcioKartyak(f, function () { render(); }));
      var sp = el('div'); sp.style.height = '14px'; c.appendChild(sp);
    });
    c.appendChild(navSor({ tovabb: function () { megy('eredmeny'); } }));
    fo.appendChild(c);
  };

  // A mért értékek olvasható, magyar címkés listája (eredmény-napló és összegzés használja).
  function mertErtekekSorok() {
    var v = [], b = S.beteg;
    if (b.hr != null) v.push('pulzus ' + b.hr + '/perc');
    if (b.rr != null) v.push('légzésszám ' + b.rr + '/perc');
    if (b.spo2 != null) v.push('SpO₂ ' + b.spo2 + '%');
    if (b.sys != null || b.dia != null) v.push('vérnyomás ' + (b.sys != null ? b.sys : '?') + '/' + (b.dia != null ? b.dia : '?') + ' Hgmm');
    if (b.temp != null) v.push('testhő ' + b.temp + ' °C');
    var g = (S.utolso && S.utolso.szarmaztatott && S.utolso.szarmaztatott.gcs);
    if (g != null) v.push('GCS ' + g);
    return v;
  }
  // Szöveges triázs-összegzés (a kötelező triázs-dokumentációhoz; MedSolba beilleszthető).
  // ---- Infekciókontroll / izolációs igény (nem szint-módosító, párhuzamos jelzés) ---
  function infekcioCfg() { return KB.infekciokontroll || { kerdesek: [], autoPanasz: {} }; }
  function infekcioKerdes(id) { return (infekcioCfg().kerdesek || []).filter(function (k) { return k.id === id; })[0] || null; }
  // A vezető panaszból automatikusan javasolt izolációs jelzés(ek).
  function infekcioAuto() {
    var m = infekcioCfg().autoPanasz || {};
    var id = m[S.beteg.vezetoPanaszId];
    return id ? [id] : [];
  }
  // Aktív jelzések: kézi kiválasztás, ha még nincs, a panaszból származó javaslattal seed-elve.
  function infekcioAktiv() {
    if (!Array.isArray(S.beteg.infekcio)) S.beteg.infekcio = infekcioAuto();
    return S.beteg.infekcio;
  }
  function infekcioToggle(id) {
    var a = infekcioAktiv();
    var i = a.indexOf(id);
    if (i >= 0) a.splice(i, 1); else a.push(id);
    var k = infekcioKerdes(id);
    naplo('Infekciókontroll', (i >= 0 ? 'levéve: ' : 'jelölve: ') + (k ? k.cimke : id));
  }
  // Az aktív jelzések összegzése: típusok + PPE (deduplikálva).
  function infekcioOsszegzes() {
    var a = (S.beteg.infekcio && S.beteg.infekcio.length) ? S.beteg.infekcio : infekcioAktiv();
    if (!a.length) return null;
    var tipus = [], ppe = [];
    a.forEach(function (id) {
      var k = infekcioKerdes(id); if (!k) return;
      if (tipus.indexOf(k.tipus) < 0) tipus.push(k.tipus);
      if (ppe.indexOf(k.ppe) < 0) ppe.push(k.ppe);
    });
    return { tipus: tipus, ppe: ppe };
  }
  // A result-képernyő szerkeszthető infekció-vezérlője (mindig látszik: a kiszűrés kötelező).
  function infekcioVezerlo() {
    var cfg = infekcioCfg();
    var aktiv = infekcioAktiv();
    var wrap = el('div', 'klin-blokk'); wrap.style.marginTop = '10px';
    var ifj = el('div', 'klin-fejlec'); ifj.innerHTML = ikonSvg('shield') + '<span>' + (cfg.cim || 'Infekciókontroll — izolációs igény') + '</span>'; wrap.appendChild(ifj);
    // A chipek gombnak látszanak, de nem volt kérdés hozzájuk — az ápoló nem tudta, hogy jelölnie kell.
    wrap.appendChild(el('div', 'skip-hint', 'Jelölje, ami a betegre igaz (több is lehet):'));
    var hint = el('div', 'skip-hint', (cfg.megjegyzes || ''));
    wrap.appendChild(hint);
    var chips = el('div', 'inf-chips');
    (cfg.kerdesek || []).forEach(function (k) {
      var on = aktiv.indexOf(k.id) >= 0;
      var b = el('button', 'inf-chip' + (on ? ' on' : ''), (on ? '✓ ' : '') + k.cimke);
      b.type = 'button';
      b.onclick = function () { infekcioToggle(k.id); render(); };
      chips.appendChild(b);
    });
    wrap.appendChild(chips);
    var o = infekcioOsszegzes();
    if (o) {
      var ban = el('div', 'warn'); ban.style.background = '#FEF9E7'; ban.style.borderColor = '#B7950B'; ban.style.color = '#7D6608';
      ban.innerHTML = ikonSvg('warn') + ' <b>Izolációs igény:</b> ' + o.tipus.join(' + ') + '<br>PPE / elhelyezés: ' + o.ppe.join(' · ');
      wrap.appendChild(ban);
    }
    return wrap;
  }

  // Zavart tudatállapot vagy GCS < 14 → értékleltár (vagyontárgy-lista) szükséges.
  function zavartTudatE() {
    var gcs = TriazsMotor.gcsOsszeg(S.beteg);
    if (gcs != null && gcs < 14) return true;
    if (S.beteg.vezetoPanaszId === 'zavartsag' || S.beteg.vezetoPanaszId === 'modosult-tudatallapot') return true;
    if (S.beteg.furcsaViselkedesUjKeletu === true) return true;
    return false;
  }

  function osszegzoSzoveg(er) {
    var so = [];
    var d = new Date();
    function p2(n) { return ('0' + n).slice(-2); }
    so.push('MSTR TRIÁZS — ' + d.getFullYear() + '.' + p2(d.getMonth() + 1) + '.' + p2(d.getDate()) + ' ' + p2(d.getHours()) + ':' + p2(d.getMinutes()));
    var azon = [];
    if (S.azon.nev) azon.push(S.azon.nev);
    if (S.azon.id) azon.push('azonosító: ' + S.azon.id);
    if (S.beteg.korKat) azon.push(korKatFelirat(S.beteg.korKat));
    else if (S.beteg.eletkorEv != null) azon.push(S.beteg.eletkorEv + ' év');
    else if (S.beteg.eletkorHonap != null) azon.push(S.beteg.eletkorHonap + ' hónapos');
    if (azon.length) so.push('Beteg: ' + azon.join(' · '));
    if (S.azon.staff) so.push('Triázs ápoló: ' + S.azon.staff);
    var pn = panaszNeve(); if (pn) so.push('Vezető panasz: ' + pn);
    var vit = [];
    if (S.beteg.hr != null) vit.push('HR ' + S.beteg.hr + '/min');
    if (S.beteg.rr != null) vit.push('Légzés ' + S.beteg.rr + '/min');
    if (S.beteg.spo2 != null) vit.push('SpO₂ ' + S.beteg.spo2 + '%');
    if (S.beteg.sys != null || S.beteg.dia != null) {
      // Ha csak az egyik érték van meg, azt is ki kell írni — a triázs-döntést a
      // szisztolés érték hordozza, és eddig kimaradt az összegzésből, ha nem volt diasztolés.
      vit.push('RR ' + (S.beteg.sys != null ? S.beteg.sys : '?') + '/' +
               (S.beteg.dia != null ? S.beteg.dia : '?') + ' Hgmm');
    }
    if (S.beteg.temp != null) vit.push('T ' + S.beteg.temp + '°C');
    var gcs = TriazsMotor.gcsOsszeg(S.beteg); if (gcs != null) vit.push('GCS ' + gcs);
    if (S.beteg.fajdalomPont != null) vit.push('VAS ' + S.beteg.fajdalomPont + '/10');
    if (vit.length) so.push('Vitálisok: ' + vit.join(' · '));
    (S.pathLog || []).forEach(function (r) { so.push('- ' + r.lepes + ': ' + r.valasztas); });
    if (er.szint != null) {
      var lvDef = (KB.levels || []).filter(function (l) { return l.level === er.szint; })[0] || {};
      so.push('BESOROLÁS: MSTR ' + er.szint + ' — ' + (lvDef.name || '') + ' (' + (lvDef.targetTime || '') + '; újraértékelés: ' + (lvDef.reassess || '') + ')');
      (er.dontoSzabalyok || []).forEach(function (dsz) {
        so.push('Döntő szabály: ' + dsz.nev + ' [' + Folyamatabra.forrasSzoveg(dsz.forras) + ']');
      });
    } else {
      so.push('BESOROLÁS: nincs automatikus javaslat — kézi döntés szükséges.');
    }
    var inf = infekcioOsszegzes();
    if (inf) so.push('IZOLÁCIÓS IGÉNY: ' + inf.tipus.join(' + ') + ' — PPE/elhelyezés: ' + inf.ppe.join(' · '));
    if (zavartTudatE()) so.push('ÉRTÉKLELTÁR SZÜKSÉGES: zavart tudatállapot / GCS < 14 — a beteg vagyontárgyainak listázása.');
    return so.join('\n');
  }
  function vagolapra(szoveg, gomb) {
    function kesz() { var r = gomb.textContent; gomb.textContent = '✓ Másolva'; setTimeout(function () { gomb.textContent = r; }, 1500); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(szoveg).then(kesz, function () { fallback(); });
    } else fallback();
    function fallback() {
      var ta = document.createElement('textarea'); ta.value = szoveg; ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); kesz(); } catch (e) {}
      document.body.removeChild(ta);
    }
  }

  RENDER.eredmeny = function (fo) {
    var er = ertekel();
    var c = el('div', 'card');
    c.appendChild(el('div', 'card-eye', 'Eredmény'));
    // Széles képernyőn két oszlop: bal = besorolás + döntés + jelzések, jobb = napló + részletes út.
    var ered = el('div', 'eredmeny-cols');
    var colA = el('div'); var colB = el('div');
    ered.appendChild(colA); ered.appendChild(colB); c.appendChild(ered);
    if (er.szint != null) {
      var badge = el('div', 'result-badge'); badge.style.background = szinSzint(er.szint);
      badge.appendChild(el('div', 'result-lv', String(er.szint)));
      badge.appendChild(el('div', 'result-name', 'MSTR ' + er.szint + ' — ' + nevSzint(er.szint)));
      var lvDef = (KB.levels || []).filter(function (l) { return l.level === er.szint; })[0] || {};
      badge.appendChild(el('div', 'result-wait', cimkezettIdo('Orvosi értékelés', lvDef.targetTime) + ' · Újraértékelés: ' + (lvDef.reassess || '')));
      colA.appendChild(badge);
      var reason = el('div', 'reason');
      reason.innerHTML = '<b>Döntő szabály:</b> ' + (er.dontoSzabalyok || []).map(function (d) {
        var f = d.forras || [];
        var src = f.length ? ' <span class="reason-src">' + Folyamatabra.forrasSzoveg(f.slice(0, 2)) + (f.length > 2 ? ' + ' + (f.length - 2) + ' további forrás' : '') + '</span>' : '';
        return d.nev + src;
      }).join('; ');
      colA.appendChild(reason);
      // dokumentáció: összegzés vágólapra (MedSolba illeszthető) + nyomtatás
      var dok = el('div', 'nav-row'); dok.style.marginTop = '4px'; dok.classList.add('no-print');
      var cp = elIko('button', 'btn btn-ghost', 'complaint', 'Összegzés vágólapra (MedSolba illeszthető)'); cp.type = 'button';
      cp.onclick = function () { vagolapra(osszegzoSzoveg(er), cp); };
      dok.appendChild(cp);
      var pr = elIko('button', 'btn btn-ghost', 'printer', 'Nyomtatás'); pr.type = 'button';
      pr.onclick = function () { window.print(); };
      dok.appendChild(pr);
      colA.appendChild(dok);
      // Betegút / elhelyezés (diszpozíció) — a triázs után
      var buBtn = elIko('button', 'btn btn-full', 'utvonal', 'Betegút és elhelyezés'); buBtn.type = 'button';
      buBtn.classList.add('no-print'); buBtn.style.marginTop = '4px';
      buBtn.onclick = function () { S.betegutElozoStep = 'eredmeny'; S.step = 'betegut'; render(); };
      colA.appendChild(buBtn);
    } else {
      colA.appendChild(el('div', 'result-none', 'Nincs automatikus javaslat — egyetlen szabály sem teljesült. Ellenőrizze a kitöltést, vagy döntsön a folyamat alapján kézzel.'));
      // ZSÁKUTCA-JAVÍTÁS: eddig a Betegút kizárólag akkor volt elérhető, ha a motor adott szintet —
      // pedig épp az atipikus, nehezen besorolható betegnél kell leginkább az elhelyezési út
      // (és torlódás alatt a három betegút). A szint ilyenkor KÉZI, ezt jelezzük is.
      var buBtn2 = elIko('button', 'btn btn-ghost btn-full', 'utvonal', 'Betegút és elhelyezés (kézi besorolással)');
      buBtn2.type = 'button'; buBtn2.classList.add('no-print'); buBtn2.style.marginTop = '8px';
      buBtn2.onclick = function () { S.betegutElozoStep = 'eredmeny'; S.step = 'betegut'; render(); };
      colA.appendChild(buBtn2);
    }

    // előre kitöltött, megerősítésre váró (derivált) mezők jelzése
    var autoNyitott = Object.keys(S.autoMezo).filter(function (id) { return !S.keziMezo[id] && S.autoMezo[id].confirm; });
    if (autoNyitott.length) {
      var cimkeMap = {}; (KB.inputFields || []).forEach(function (f) { cimkeMap[f.id] = f.label; });
      var da = el('div', 'warn'); da.style.background = '#EBF5FB'; da.style.borderColor = 'var(--l5s)'; da.style.color = '#1A5276';
      da.innerHTML = ikonSvg('bolt') + ' <b>Előre kitöltve (megerősítendő):</b> ' + autoNyitott.map(function (id) {
        var op = ((KB.inputFields || []).filter(function (f) { return f.id === id; })[0] || {}).options || [];
        var val = (op.filter(function (o) { return o.value === S.beteg[id]; })[0] || {}).label || S.beteg[id];
        return (cimkeMap[id] || id) + ' → ' + val;
      }).join(' · ') + '. Ellenőrizze a klinikai kép alapján.';
      colA.appendChild(da);
    }

    // infekciókontroll / izolációs igény (szerkeszthető, mindig látszik — a kiszűrés kötelező)
    colA.appendChild(infekcioVezerlo());

    // zavart tudat / GCS < 14 → értékleltár szükséges
    if (zavartTudatE()) {
      var lz = el('div', 'warn'); lz.style.background = '#FEF9E7'; lz.style.borderColor = '#B7950B'; lz.style.color = '#7D6608';
      lz.innerHTML = ikonSvg('warn') + ' <b>Zavart tudatállapot / GCS &lt; 14</b> — <b>értékleltár szükséges</b>.';
      colA.appendChild(lz);
    }

    // forrás-intelmek (KB.figyelmeztetoSzabalyok) — olyan forrás-kikötések, amelyeket
    // számszerű küszöbbé alakítani nem lehet, de a besorolásnál tudni KELL róluk.
    intelemSorok(er).forEach(function (d) { colA.appendChild(d); });

    // figyelmeztetések (összevont, hiányzó mezők)
    var w = warnSor(er);
    if (w) colA.appendChild(w);

    // dinamikus kihagyás átlátható jelzése
    var kih = kihagyottKerdesek();
    if (kih > 0 && er.szint != null) {
      var note = el('div', 'reason');
      note.style.background = '#EAFAF1'; note.style.color = 'var(--l4t)';
      note.innerHTML = ikonSvg('bolt') + ' ' + kih + ' kérdés kihagyva — a már elért <b>MSTR ' + er.szint + '</b>-nél csak enyhébb szintet adhatnának, ezért nem változtatnának az eredményen.';
      colA.appendChild(note);
    }

    // döntési napló (ápolói lépések) — jobb oszlop
    if (S.pathLog.length) {
      var pl = el('div', 'pathlog');
      pl.appendChild(el('h3', null, 'Kitöltési napló'));
      // A döntés ALAPJA — a mért értékek — eddig csak a lenyitható részletes útban látszott.
      var mert = mertErtekekSorok();
      if (mert.length) {
        var mrow = el('div', 'plrow');
        mrow.appendChild(el('div', 'pl-n', '⌁'));
        var mb = el('div'); mb.style.flex = '1';
        mb.appendChild(el('div', 'pl-step', 'Mért értékek'));
        mb.appendChild(el('div', 'pl-choice', mert.join(' · ')));
        mrow.appendChild(mb); pl.appendChild(mrow);
      }
      S.pathLog.forEach(function (r, i) {
        var row = el('div', 'plrow');
        row.appendChild(el('div', 'pl-n', String(i + 1)));
        var b = el('div'); b.style.flex = '1';
        b.appendChild(el('div', 'pl-step', r.lepes));
        b.appendChild(el('div', 'pl-choice', r.valasztas));
        row.appendChild(b);
        pl.appendChild(row);
      });
      colB.appendChild(pl);
    }

    // részletes döntési út (flowchart, forráshivatkozásokkal) — összecsukható — jobb oszlop
    var det = el('details', 'detour-wrap');
    var sum = el('summary', null, 'Részletes döntési út és forráshivatkozások');
    det.appendChild(sum);
    var body = el('div', 'detour-body');
    var fchart = el('div'); body.appendChild(fchart);
    var jm = el('div', 'jelmagyarazat');
    jm.innerHTML = '<span>✔ teljesült</span><span>+N további: nem teljesült / hiányzó adat</span><span>kattintható szabály → forrásoldal</span>';
    body.appendChild(jm);
    det.appendChild(body);
    colB.appendChild(det);
    Folyamatabra.folyamatabraRajzol(fchart, er, KB, reszletMutat);

    // navigáció
    var row = el('div', 'nav-row');
    var back = el('button', 'btn btn-ghost', '← Vissza'); back.type = 'button'; back.onclick = vissza;
    row.appendChild(back);
    row.appendChild(el('span', 'spacer'));
    var uj = elIko('button', 'btn', 'refresh', 'Új beteg'); uj.type = 'button'; uj.onclick = ujBeteg;  // archiválja az elkészültet az Előzményekbe
    row.appendChild(uj);
    c.appendChild(row);

    c.appendChild(el('div', 'footnote', 'Döntéstámogató eszköz — a triázs-besorolás szakmai felelőssége a triázs ápolóé. Minden szabály forrása a Triázs tankönyv 2.0 (2016) és az MSTR oktatói jegyzet (2022), oldalszám szerint.'));
    fo.appendChild(c);
  };

  // A tudásbázisból jövő forrás-intelmek dobozai (szint-módosítás NÉLKÜL).
  function intelemSorok(er) {
    return ((er && er.figyelmeztetesek) || [])
      .filter(function (f) { return f.tipus === 'forras_intelem' || f.tipus === 'sav_tanacsado'; })
      .map(function (f) {
        var d = el('div', 'warn');
        var fej = el('div', ''); fej.innerHTML = ikonSvg('warn');
        fej.appendChild(el('span', '', f.szoveg));      // textContent — nem HTML
        d.appendChild(fej);
        var fsz = Folyamatabra.forrasSzoveg(f.forras || []);
        if (fsz) d.appendChild(el('div', 'footnote', 'Forrás: ' + fsz));
        return d;
      });
  }
  function warnSor(er) {
    // Kritikus, döntő szintnél (MSTR 1-2) ne nyaggassunk opcionális mezőkért.
    if (er && er.szint != null && er.szint <= 2) return null;
    var mezoCimke = {}; (KB.inputFields || []).forEach(function (f) { mezoCimke[f.id] = f.label; });
    var FIX = { hr: 'Pulzus', rr: 'Légzésszám', sys: 'Vérnyomás (szisztolés)', dia: 'Vérnyomás (diasztolés)', spo2: 'SpO₂', temp: 'Testhő', gcs: 'GCS', fajdalomPont: 'Fájdalom (0–10)' };
    // Csak a betegre TÉNYLEGESEN releváns mezőket ajánljuk: vitálok, megfigyelés,
    // fájdalom, és a vezető panaszhoz kötött (scoped) módosítók — a szűkítetlen
    // másodlagos szabályok mezőit NEM (különben irreleváns panaszok is felbukkannak).
    var rel = {};
    ['hr', 'rr', 'sys', 'dia', 'spo2', 'temp', 'gcs', 'fajdalomPont', 'fajdalomLokalizacio', 'fajdalomJelleg'].forEach(function (k) { rel[k] = 1; });
    mezokCsoportban('megfigyeles').forEach(function (f) { rel[f.id] = 1; });
    lathatoModositok().forEach(function (f) { rel[f.id] = 1; });
    if (er && er.szarmaztatott && er.szarmaztatott.gyermek === true) gyermekMezok().forEach(function (f) { rel[f.id] = 1; });
    var db = {};
    (er.figyelmeztetesek || []).forEach(function (f) {
      if (f.tipus === 'hianyzo_adat' && f.hianyzoMezok) f.hianyzoMezok.forEach(function (m) { if (rel[m]) db[m] = (db[m] || 0) + 1; });
    });
    var mezok = Object.keys(db).sort(function (a, b) { return db[b] - db[a]; });
    if (!mezok.length) return null;
    var d = el('div', 'warn');
    d.innerHTML = ikonSvg('warn') + ' Pontosabb besoroláshoz kitölthető még: ' + mezok.slice(0, 6).map(function (m) { return mezoCimke[m] || FIX[m] || m; }).join(' · ') + (mezok.length > 6 ? ' …' : '');
    return d;
  }

  // ---- lelet-beillesztés ------------------------------------------------------
  function leletAtvesz(szoveg, msgEl) {
    if (!szoveg || !szoveg.trim()) { msgEl.innerHTML = '<span class="hiba">Nincs beillesztett szöveg.</span>'; return; }
    var e = LeletParser.leletFeldolgoz(szoveg);
    var nev = { hr: 'Pulzus', rr: 'Légzésszám', map: 'MAP', spo2: 'SpO₂', sys: 'Vérnyomás (szisztolés)', dia: 'Vérnyomás (diasztolés)', temp: 'Testhő', gcsE: 'GCS-szem', gcsV: 'GCS-verb.', gcsM: 'GCS-mot.' };
    Object.keys(e.parameterek).forEach(function (k) { if (k !== 'map') S.beteg[k] = e.parameterek[k]; });
    // a leletben talált pontos kor felülírja a gyors kor-kategóriát (és annak helyettesítő értékét)
    if (e.azonositok.eletkorEv != null) { S.beteg.eletkorEv = e.azonositok.eletkorEv; S.beteg.eletkorHonap = null; S.beteg.korKat = null; }
    if (e.azonositok.eletkorHonap != null) { S.beteg.eletkorHonap = e.azonositok.eletkorHonap; S.beteg.eletkorEv = null; S.beteg.korKat = null; }
    ertekel();
    var html = '<span class="ok">Átvéve: ' + e.talalatok.filter(function (k) { return k !== 'map'; }).map(function (k) { return nev[k] || k; }).join(', ') + '.</span>';
    if (e.azonositok.nev) html += ' Beteg: <b>' + htmlBiztos(e.azonositok.nev) + '</b>';
    if (e.azonositok.eletkorEv != null) html += ' (' + e.azonositok.eletkorEv + ' év)';
    if (e.azonositok.kba) html += ' · KBA: ' + htmlBiztos(e.azonositok.kba);
    naplo('Lelet átvétele', (e.azonositok.nev || '') + (e.azonositok.kba ? ' · KBA ' + e.azonositok.kba : ''));
    S.leletMsg = html;
    msgEl.innerHTML = html;
  }

  // ---- részletpanel (szabály + forrás) ---------------------------------------
  function reszletMutat(t) {
    var tarto = $('reszlet-tarto');
    var hatter = el('div', 'reszlet-hatter');
    hatter.onclick = function (ev) { if (ev.target === hatter) tarto.innerHTML = ''; };
    var panel = el('div', 'reszlet-panel');
    var bz = ikonBtnEl('reszlet-bezar', 'close'); bz.onclick = function () { tarto.innerHTML = ''; };
    panel.appendChild(bz);
    var st = { tuzelt: 'TELJESÜLT', nem_teljesult: 'Nem teljesült', nincs_adat: 'Hiányzó adat', nem_alkalmazhato: 'Nem alkalmazható' };
    panel.appendChild(el('h3', null, t.nev));
    panel.appendChild(el('div', 'reszlet-statusz', st[t.statusz] + (t.javasoltSzint != null ? ' → MSTR ' + t.javasoltSzint : '')));
    function blokk(cim, tart) {
      var b = el('div', 'reszlet-blokk'); b.appendChild(el('div', 'cimke', cim));
      if (typeof tart === 'string') b.appendChild(el('div', 'ertek', tart)); else b.appendChild(tart);
      panel.appendChild(b);
    }
    if (t.feltetelSzoveg) blokk('A szabály feltétele (forrás szerint)', t.feltetelSzoveg);
    var kulcsok = Object.keys(t.hasznaltAdatok || {});
    if (kulcsok.length) {
      var tabla = el('table', 'adat-tabla');
      kulcsok.forEach(function (k) {
        var tr = el('tr'); tr.appendChild(el('td', null, k));
        var td = el('td'); var v = t.hasznaltAdatok[k];
        if (v == null) td.innerHTML = '<span class="hianyzo-ertek">nincs megadva</span>';
        else if ((k === 'eletkorEv' || k === 'eletkorHonap') && S.beteg.korKat) td.textContent = korKatFelirat(S.beteg.korKat) + ' (pontos kor nincs megadva)';
        else td.textContent = String(v);
        tr.appendChild(td); tabla.appendChild(tr);
      });
      blokk('Felhasznált adatok', tabla);
    }
    var fr = el('div', 'reszlet-forras'); fr.innerHTML = ikonSvg('book') + '<span>' + Folyamatabra.forrasSzoveg(t.forras) + '</span>';
    blokk('Ellenőrizhetőség', fr);
    if (t.megjegyzes) blokk('Megjegyzés', t.megjegyzes);
    hatter.appendChild(panel);
    tarto.innerHTML = ''; tarto.appendChild(hatter);
  }

  // ===== Betegút / diszpozíció (járó vs fekvő) — a triázs UTÁN, MSTR III–V-nél =====
  RENDER.betegut = function (fo) {
    var BU = KB.betegut || {};
    S.betegut = S.betegut || {};
    var er = S.utolso || {};
    var szint = er.szint;
    var c = kartya('Betegút', 'Betegút — elhelyezés / diszpozíció', BU.megjegyzes || '');

    var ered = el('div', 'eredmeny-cols');
    var colA = el('div'); var colB = el('div');
    ered.appendChild(colA); ered.appendChild(colB); c.appendChild(ered);

    var TO = KB.torlodas || {}, torlAktiv = torlodasAktiv();
    if (szint == null) {
      var nincsSzint = el('div', 'warn');
      nincsSzint.classList.add('warn-info');
      nincsSzint.innerHTML = ikonSvg('warn') + ' <b>Nincs automatikus triázs-szint</b> — a besorolás itt KÉZI. ' +
        'A járóbeteg-ellenőrzőlista csak MSTR 3–5 betegnél alkalmazható: ha a kézi besorolás MSTR 1–2, a beteg a fekvőbeteg részlegre kerül.';
      colA.appendChild(nincsSzint);
    }
    if (szint === 1 || szint === 2) {
      var fb = el('div', 'warn'); fb.style.background = '#FDECEA'; fb.style.borderColor = 'var(--l1s)'; fb.style.color = 'var(--l1t)';
      if (torlAktiv) {
        // Torlódás alatt ez a legerősebb üzenet a képernyőn: a globális „megtelt" sáv
        // önmagában fékezne, ezért ki KELL mondani, hogy erre a betegre nem vonatkozik.
        fb.style.fontWeight = '700';
        fb.innerHTML = ikonSvg('warn') + ' <b>MSTR ' + szint + ' — ' + ((TO.kritikus || {}).szoveg || '') + '</b><br>' + ((TO.kritikus || {}).kiemelt || '');
      } else {
        fb.innerHTML = ikonSvg('warn') + ' <b>MSTR ' + szint + '</b> — <b>fekvőbeteg részleg</b> (azonnali/kritikus ellátás). A járóbeteg-ellenőrzőlista kizárólag MSTR 3–5 betegnél alkalmazható.';
      }
      colA.appendChild(fb);
    } else {
      // — auto-származtatás a triázs-adatból —
      var confusion = zavartTudatE();
      var nfok = (S.szamitott || {}).nehezlegzesFok && S.szamitott.nehezlegzesFok.value;
      var o2Igeny = (S.beteg.spo2 != null && S.beteg.spo2 < 92) || S.beteg.o2Akut === 'akut' || nfok === 'sulyos' || nfok === 'kozepes';
      var o2Ok = (S.beteg.spo2 != null && S.beteg.spo2 >= 95 && !o2Igeny);
      // Izoláció: csak a fekvőn biztosítható (kiütés/légúti → negatív nyomású szoba) blokkol;
      // a cseppfertőzés/kontakt (maszk/kesztyű) járóban is kezelhető → nem blokkol.
      var izolacioFekvo = (S.beteg.infekcio || []).indexOf('inf_kiutes') >= 0;
      var gcs15 = TriazsMotor.gcsOsszeg(S.beteg) === 15;
      S.betegut._auto = S.betegut._auto || {};
      function pre(id, val) { if (S.betegut[id] === undefined) { S.betegut[id] = val; S.betegut._auto[id] = true; } }
      if (confusion) pre('egyuttmukodo', 'nem'); else if (gcs15) pre('egyuttmukodo', 'igen');
      if (o2Igeny) pre('nincsO2', 'nem'); else if (o2Ok) pre('nincsO2', 'igen');
      pre('nincsIzolacio', izolacioFekvo ? 'nem' : 'igen');

      colA.appendChild(el('div', 'card-eye', 'Járóbeteg-irányíthatóság (minden pont IGEN)'));
      (BU.jaroFeltetelek || []).forEach(function (f) {
        var row = el('div', 'betegut-krit');
        var t = el('div', 'betegut-krit-txt'); t.textContent = f.szoveg;
        if (S.betegut._auto[f.id]) { var au = el('span', 'betegut-auto'); au.textContent = ' (a triázs-adatokból előre kitöltve — ellenőrizze)'; t.appendChild(au); }
        row.appendChild(t);
        var vsor = el('div', 'betegut-valasz');
        [['igen', 'Igen'], ['nem', 'Nem']].forEach(function (o) {
          var b = el('button', 'bk-btn' + (S.betegut[f.id] === o[0] ? ' sel-' + o[0] : '')); b.type = 'button'; b.textContent = o[1];
          b.onclick = function () { S.betegut[f.id] = o[0]; delete S.betegut._auto[f.id]; render(); };
          vsor.appendChild(b);
        });
        row.appendChild(vsor);
        colA.appendChild(row);
      });
      // életkor/frailty megfontolás
      var fr = el('button', 'tetra-toggle' + (S.betegut.frailty ? ' on' : '')); fr.type = 'button'; fr.textContent = '≥ 80 év vagy törékeny (frail) idős beteg';
      fr.style.marginTop = '10px';
      fr.onclick = function () { S.betegut.frailty = !S.betegut.frailty; render(); };
      colA.appendChild(fr);

      // — eredmény —
      var felt = BU.jaroFeltetelek || [];
      var vanNem = false, hianyzo = 0;
      felt.forEach(function (f) { var v = S.betegut[f.id]; if (v === 'nem') vanNem = true; else if (v !== 'igen') hianyzo++; });
      var out = el('div', 'betegut-eredmeny');
      if (vanNem) { out.className += ' fekvo'; out.innerHTML = '<b>Fekvőbeteg részleg</b><br>Legalább egy járó-kritérium nem teljesül.'; }
      else if (hianyzo > 0) { out.className += ' pending'; out.innerHTML = 'Még ' + hianyzo + ' kérdés megválaszolása szükséges a döntéshez.'; }
      else {
        out.className += ' jaro';
        out.innerHTML = '<b>Járóbeteg részlegre irányítható</b> — minden kritérium teljesül.' + (S.betegut.frailty ? '<br>' + ikonSvg('warn') + ' ' + (BU.eletkorMegjegyzes || '') : '');
      }
      colA.appendChild(out);

      // — TORLÓDÁS: az utasítás 3 útja. Csak torlódás módban, mert ezek a betegutak
      //   (mentőhordágyon várakozás, ülő hely kezelőszékben) torlódáson kívül nem léteznek.
      if (torlAktiv) {
        colA.appendChild(el('div', 'card-eye', 'Torlódás — elhelyezés (4/2026. utasítás)'));
        var bev = el('div', 'skip-hint'); bev.textContent = TO.utakBevezeto || ''; colA.appendChild(bev);

        // 3. kimenet, ami a mai checklistből hiányzik: „ülő hely kezelőszékben"
        var ulveOk = S.betegut['ulve'] === 'igen';
        if (vanNem && ulveOk) {
          var ulo = el('div', 'betegut-eredmeny ulo');
          ulo.innerHTML = '<b>Ülő hely kezelőszékben</b> — a fekvőbeteg-részen.<br>' +
            'Járóbeteg részlegre nem irányítható, de ágyat sem igényel (az „ülve ellátható" pont IGEN).';
          colA.appendChild(ulo);
        }

        var utBox = el('div', 'torl-utak');
        (TO.utak || []).forEach(function (u) {
          var d = el('details', 'detour-wrap');
          // A cím jelezze, ha a lenyitás mögött cselekvés (várólistára tétel) is van —
          // különben az ápoló nem tudja, hogy oda kell nyitnia.
          var akcio = (u.id === 'ut_agyat_igenyel' || u.sorszam === 3) ? ' → itt: várólistára tétel (mentőhordágy)'
                    : (u.id === 'ut_agyat_nem_igenyel' || u.sorszam === 1) ? ' → itt: ülő hely felvétele' : '';
          d.appendChild(el('summary', null, u.sorszam + '. ' + u.cim + akcio));
          var b = el('div', 'detour-body');
          var sz = el('div'); sz.style.cssText = 'font-size:12.5px;line-height:1.5;margin-bottom:7px'; sz.textContent = u.szoveg;
          b.appendChild(sz);
          if (u.dontesHozo) {
            var dh = el('div', 'torl-dontes'); dh.innerHTML = ikonSvg('shield') + '<span><b>Döntéshozó:</b> ' + u.dontesHozo + '</span>';
            b.appendChild(dh);
          }
          if (u.id === 'ut_fast_track') {
            // A fast track ÁTADÁS, nem döntés — és a TEK szándékosan NEM érhető el innen:
            // TEK + fast track + torlódási nyomás egy képernyőn = a tiltott, területi alapú továbbküldés.
            var til = el('div', 'tek-vedokorlat');
            til.innerHTML = ikonSvg('warn') + '<span>' + (u.tilalom || '') + ' Instabil beteg mindig a legközelebbi SBO-ra kerül.</span>';
            b.appendChild(til);
            var ft = el('div'); ft.style.cssText = 'font-size:12.5px;font-weight:700;margin:8px 0 4px'; ft.textContent = u.feltetelekCim || '';
            b.appendChild(ft);
            (u.feltetelek || []).forEach(function (f) {
              var li = el('div', 'torl-felt'); li.textContent = '• ' + f.szoveg; b.appendChild(li);
            });
            var amb = el('button', 'btn btn-ghost btn-full', 'Ambuláns lap váza vágólapra'); amb.type = 'button';
            amb.style.marginTop = '8px';
            amb.onclick = function () { vagolapra(ambulansLapVaz(), amb); };
            b.appendChild(amb);
          }
          if (u.id === 'ut_agyat_igenyel') {
            var rt = el('div', 'torl-dontes'); rt.innerHTML = ikonSvg('history') + '<span><b>Re-triage:</b> ' + (u.retriage || '') + '</span>';
            b.appendChild(rt);
            var vb = el('button', 'btn btn-full', 'Várólistára — mentőhordágyon vár'); vb.type = 'button';
            vb.style.marginTop = '8px';
            vb.onclick = function () { varolistaraTesz('fekvo_var'); S.varolistaElozoStep = 'betegut'; S.step = 'varolista'; render(); };
            b.appendChild(vb);
          }
          if (u.id === 'ut_nem_igenyel_agyat' && vanNem && ulveOk) {
            var ub = el('button', 'btn btn-ghost btn-full', 'Várólistára — ülő hely kezelőszékben'); ub.type = 'button';
            ub.style.marginTop = '8px';
            ub.onclick = function () { varolistaraTesz('ulo'); S.varolistaElozoStep = 'betegut'; S.step = 'varolista'; render(); };
            b.appendChild(ub);
          }
          d.appendChild(b); utBox.appendChild(d);
        });
        colA.appendChild(utBox);

        if (TO.orzo) {
          var orz = el('div', 'skip-hint'); orz.style.marginTop = '8px';
          orz.textContent = TO.orzo.cim + ': ' + TO.orzo.szoveg;
          colA.appendChild(orz);
        }
        var dok2 = el('div', 'warn warn-info warn-mt');
        dok2.innerHTML = ikonSvg('bulb') + ' <b>' + ((TO.dokumentacio || {}).cim || 'Kötelező dokumentáció') + ':</b> ' + ((TO.dokumentacio || {}).pontok || []).join(' ');
        colA.appendChild(dok2);
      }
    }

    // — Területi ellátás (TEK) offline lekérdezés + SE SOK felvételi szabályok + linkek — jobb oszlop —
    // A TEK csak KÉRÉSRE nyílik (overlay): állandó blokként mobilon a hajtás alá tolná a
    // járó-checklistet, és fontosabbnak látszana, mint maga a diszpozíciós döntés.
    if ((KB.tek || {}).telepulesek) {
      colB.appendChild(el('div', 'card-eye', 'Területi ellátás (tájékoztató)'));
      var tekBtn = elIko('button', 'btn btn-ghost btn-full', 'search', 'Területi ellátási kötelezettség (TEK) — kerület / település');
      tekBtn.type = 'button'; tekBtn.style.cssText = 'margin-bottom:6px;text-align:left';
      tekBtn.onclick = function () { tekOverlay(); };
      colB.appendChild(tekBtn);
      var tekH = el('div', 'skip-hint');
      tekH.textContent = 'Offline, a segédlet alapján. A definitív ellátó szakma azonosítására — nem a felvétel eldöntésére.';
      tekH.style.marginBottom = '14px';
      colB.appendChild(tekH);
    }
    var fsz = BU.felvetelSzabalyok || {};
    if (fsz.pontok) {
      var det = el('details', 'detour-wrap');
      det.appendChild(el('summary', null, (fsz.cim || 'SE SOK felvételi szabályok') + ' (' + (fsz.pontok || []).length + ') — pl. területi alapon más SBO-ra küldeni tilos'));
      var body = el('div', 'detour-body');
      fsz.pontok.forEach(function (p, i) {
        // sorszám + rövid, tartalmat jelző cím félkövéren, alatta a forrás teljes szövege
        var d = el('div'); d.style.cssText = 'font-size:12.5px;line-height:1.5;margin-bottom:8px;color:var(--text)';
        var rc = (fsz.cimek || [])[i];
        if (rc) { var b = el('b'); b.textContent = (i + 1) + '. ' + rc; d.appendChild(b); d.appendChild(el('br')); }
        d.appendChild(document.createTextNode(rc ? p.replace(/^\s*\d+\.\s*/, '') : p));
        body.appendChild(d);
      });
      if (fsz.forras) { var fr2 = el('div', 'reszlet-forras'); fr2.innerHTML = ikonSvg('book') + '<span>' + fsz.forras + '</span>'; body.appendChild(fr2); }
      det.appendChild(body); colB.appendChild(det);
    }
    if (BU.linkek && BU.linkek.length) {
      colB.appendChild(el('div', 'card-eye', 'Hivatalos forrás ellenőrzése (külső, hálózat kell)'));
      BU.linkek.forEach(function (lk) {
        var b = elIko('button', 'btn btn-ghost btn-full', 'utvonal', lk.cim + (lk.megjegyzes ? ' — ' + lk.megjegyzes : '')); b.type = 'button';
        b.style.marginBottom = '8px'; b.style.textAlign = 'left';
        b.onclick = function () { window.open(lk.url, '_blank'); };
        colB.appendChild(b);
      });
      var hint = el('div', 'skip-hint'); hint.textContent = 'A lekérdezés az adott adatbázisban, új lapon nyílik (a lakcím/szakma alapján).';
      colB.appendChild(hint);
    }

    var row2 = el('div', 'nav-row');
    var back = el('button', 'btn btn-ghost', '← Vissza az eredményhez'); back.type = 'button';
    back.onclick = function () { S.step = 'eredmeny'; render(); };
    row2.appendChild(back);
    row2.appendChild(el('span', 'spacer'));
    var cp2 = elIko('button', 'btn btn-ghost', 'complaint', 'Összegzés vágólapra (MedSolba illeszthető)'); cp2.type = 'button';
    cp2.onclick = function () { vagolapra(betegutSzoveg(), cp2); };
    row2.appendChild(cp2);
    c.appendChild(row2);
    fo.appendChild(c);
  };

  // ===== TERÜLETI ELLÁTÁS (TEK) — offline lekérdezés =========================
  // Az XTEK-link csak a kórházi belső hálózaton él; a segédlet táblája offline is kell.
  // VÉDŐKORLÁT: ez az adat NEM a felvétel eldöntésére való. A betegfelvételi alapelv 6.
  // szerint területi illetékességre hivatkozva más SBO-ra beteget küldeni TILOS, instabil
  // beteg pedig mindig a legközelebbi SBO-ra kerül. Ezért a modul SOHA nem ad „elküldhető"
  // típusú következtetést, és a fast track ágról szándékosan NEM érhető el.
  function overlayMutat(cim, epito) {
    var tarto = $('reszlet-tarto');
    var hatter = el('div', 'reszlet-hatter');
    hatter.onclick = function (ev) { if (ev.target === hatter) tarto.innerHTML = ''; };
    var panel = el('div', 'reszlet-panel');
    var bz = ikonBtnEl('reszlet-bezar', 'close'); bz.onclick = function () { tarto.innerHTML = ''; };
    panel.appendChild(bz);
    panel.appendChild(el('h3', null, cim));
    epito(panel, function () { tarto.innerHTML = ''; });
    hatter.appendChild(panel);
    tarto.innerHTML = ''; tarto.appendChild(hatter);
    return panel;
  }

  var ROMAI = { i: 1, v: 5, x: 10, l: 50, c: 100 };
  function romaiSzam(s) {
    s = normSzo(s).replace(/[^ivxlc]/g, '');
    if (!s) return null;
    var ossz = 0;
    for (var i = 0; i < s.length; i++) {
      var e = ROMAI[s[i]], k = ROMAI[s[i + 1]];
      if (e == null) return null;
      ossz += (k != null && k > e) ? -e : e;
    }
    return ossz || null;
  }
  var _tekCache = null;
  function tekTetelek() {
    if (_tekCache) return _tekCache;
    var T = KB.tek || {}, out = [];
    (T.keruletek || []).forEach(function (r) {
      var arab = romaiSzam(r.ker);
      var kulcsszavak = [normSzo(r.ker).replace(/\./g, '')];
      if (arab != null) { kulcsszavak.push(String(arab), ('0' + arab).slice(-2), '1' + ('0' + arab).slice(-2)); }
      out.push({
        tipus: 'kerulet', nev: r.ker + ' kerület', kulcs: r.ker,
        tagok: kulcsszavak, alias: normSzo(r.aliasok || ''),
        ellatas: r.ellatas, megjegyzesek: r.megjegyzesek || [],
      });
    });
    (T.telepulesek || []).forEach(function (r) {
      out.push({
        tipus: 'telepules', nev: r.telepules, kulcs: r.telepules,
        tagok: [normSzo(r.telepules)], alias: '',
        ellatas: r.ellatas, megjegyzesek: r.megjegyzesek || [],
      });
    });
    _tekCache = out; return out;
  }
  // Zajszavak: a nővér a mentőlapról másol, ahol „Budapest XIII. kerület" formátum van.
  var TEK_ZAJ = /\b(budapest|bp|kerulet|ker|utca|ut|u|ter|korut|krt|hrsz)\b/g;
  function tekKereses(query) {
    var q = normSzo(query).replace(/\./g, ' ').replace(TEK_ZAJ, ' ').replace(/\s+/g, ' ').trim();
    if (!q) return [];
    // Budapesti irányítószám (1XYZ) → kerületszám. Ez a leggyorsabb út: a mentőlapon ott az irsz.
    var irsz = q.match(/\b1(\d{2})\d\b/);
    var irszKer = irsz ? String(parseInt(irsz[1], 10)) : null;
    var res = [];
    tekTetelek().forEach(function (t) {
      var score = 0;
      if (t.tipus === 'kerulet') {
        if (irszKer && t.tagok.indexOf(irszKer) >= 0) score = 120;
        else if (t.tagok.indexOf(q) >= 0) score = 100;                       // pontos tag: „ix", „9", „09"
        else if (t.alias && t.alias.indexOf(q) >= 0 && q.length >= 3) score = 60;
      } else {
        if (t.tagok[0] === q) score = 110;
        else if (t.tagok[0].indexOf(q) === 0) score = 80;
        else if (q.length >= 3 && t.tagok[0].indexOf(q) >= 0) score = 30;
      }
      if (score) res.push({ t: t, score: score });
    });
    res.sort(function (a, b) { return b.score - a.score || a.t.nev.localeCompare(b.t.nev, 'hu'); });
    return res.slice(0, 12).map(function (r) { return r.t; });
  }
  function tekRovidites(kod) {
    var alap = String(kod).split('(')[0].trim();
    return (KB.tek && KB.tek.rovidites || []).filter(function (x) { return x.kod === alap; })[0] || null;
  }
  // Az AMI területi elve CSAK munkanap 8–18 közt érvényes — ezt a készülék órájából
  // kiszámoljuk, mert pont ügyeleti időben (amikor a torlódás jellemző) NEM érvényes.
  function tekAmiAllapot() {
    var A = (KB.tek || {}).amiIdoablak; if (!A) return null;
    var d = new Date(), nap = d.getDay(), ora = d.getHours();
    var munkanap = nap >= 1 && nap <= 5;
    var ervenyes = munkanap && ora >= A.munkanapKezd && ora < A.munkanapVeg;
    var napNev = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'][nap];
    return {
      ervenyes: ervenyes,
      szoveg: 'Most (' + napNev + ' ' + ('0' + ora).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2) + '): ' +
        (ervenyes ? A.ervenyes : A.nemErvenyes),
      figyelem: A.figyelem,
    };
  }
  function tekTalalatDoboz(t) {
    var T = KB.tek || {};
    var box = el('div', 'tek-talalat');
    var fej = el('div', 'tek-talalat-fej');
    fej.appendChild(el('span', 'tek-talalat-nev', t.nev));
    fej.appendChild(el('span', 'tek-talalat-tip', t.tipus === 'kerulet' ? 'budapesti kerület' : 'Pest vármegye'));
    box.appendChild(fej);
    t.ellatas.forEach(function (kod) {
      var r = tekRovidites(kod);
      var sor = el('button', 'tek-sor'); sor.type = 'button';
      sor.appendChild(el('span', 'tek-kod', kod));
      sor.appendChild(el('span', 'tek-nev', r ? r.rovid : '—'));
      // 2. réteg: koppintásra a teljes klinikanév + útvonal-megjegyzés
      var reszl = el('div', 'tek-reszlet'); reszl.hidden = true;
      reszl.textContent = r ? (r.nev + (r.megjegyzes ? ' — ' + r.megjegyzes : '')) : '';
      sor.onclick = function () { reszl.hidden = !reszl.hidden; };
      box.appendChild(sor); box.appendChild(reszl);
      // AMI időfüggés közvetlenül az érintett sornál
      // Az érintett kódot a TUDÁSBÁZIS mondja meg (amiIdoablak.erintettKodok = ["VSZÉK"]),
      // nem a felület. Korábban itt egy beégetett /VSZÉK/ ÉS /AMI/ minta állt, ami csak az
      // "(AMI)" utótagú 5 sorra illeszkedett — a 49 sima "VSZÉK" soron az időablak
      // figyelmeztetése sosem jelent meg, pedig a KB szerint azokra is vonatkozik.
      var ami = tekAmiAllapot();
      var amiErintett = ((KB.tek || {}).amiIdoablak || {}).erintettKodok || [];
      if (ami && amiErintett.some(function (k) { return kod.indexOf(k) !== -1; })) {
        var a = el('div', 'tek-ido' + (ami.ervenyes ? ' ok' : ' nem'));
        a.textContent = ami.szoveg + ' (' + ami.figyelem + ')';
        box.appendChild(a);
      }
    });
    // 3. réteg: a SORHOZ tartozó kivételek közvetlenül itt, nem külön blokkban
    (t.megjegyzesek || []).forEach(function (m) {
      var d = el('div', 'tek-sor-megj'); d.innerHTML = ikonSvg('warn') + '<span>' + m + '</span>';
      box.appendChild(d);
    });
    return box;
  }
  function tekOverlay() {
    var T = KB.tek || {};
    overlayMutat(T.cim || 'Területi ellátás (TEK)', function (panel) {
      // FIX védőkorlát — nem csukható, nem görgethető el a találat elől
      var vk = el('div', 'tek-vedokorlat');
      vk.innerHTML = ikonSvg('warn') + '<span>' + (T.vedokorlat || '') + '</span>';
      panel.appendChild(vk);

      var inp = el('input', 'search-box'); inp.type = 'text';
      inp.placeholder = 'Kerület, irányítószám vagy település — pl. IX, 1097, Dunaharaszti';
      inp.value = S.tekQuery || '';
      panel.appendChild(inp);
      var cimke = el('div', 'skip-hint');
      // A szöveg a TUDÁSBÁZISBÓL jön (KB.tek.korlat), nem a felületről — eddig ez a mező
      // sehol nem jelent meg, így a "nem helyettesíti a műszakvezető orvos döntését"
      // kikötés is láthatatlan maradt.
      cimke.textContent = T.korlat || 'Traumánál a SÉRÜLÉS HELYSZÍNE, stroke-nál a feltalálási hely dönt — nem a lakcím.';
      panel.appendChild(cimke);
      var lista = el('div'); lista.style.marginTop = '8px'; panel.appendChild(lista);

      function rajzol() {
        lista.innerHTML = '';
        var q = (S.tekQuery || '').trim();
        if (!q) {
          var tipp = el('div', 'skip-hint'); tipp.style.marginTop = '10px';
          tipp.textContent = (T.hasznalat ? T.hasznalat + ' ' : '') +
            'A kerület római (IX) és arab (9) számmal, valamint BUDAPESTI irányítószámmal (1097) is kereshető; ' +
            'Pest vármegyei irányítószámra a kereső nem tud keresni — ott a település nevét írja be.';
          lista.appendChild(tipp); return;
        }
        var tal = tekKereses(q);
        if (!tal.length) {
          // Nem budapesti (nem 1-gyel kezdődő) négyjegyű irányítószám: a kereső ilyet NEM
          // ismer, tehát a találat hiánya NEM jelenti, hogy a település nincs a segédletben.
          // Korábban ilyenkor is a "nincs SE-kötelezettség" szöveg jelent meg, ami valótlan.
          var videkiIrsz = /^[2-9]\d{3}$/.test(q.replace(/\s+/g, ''));
          var nincs = el('div', 'warn');
          if (videkiIrsz) {
            nincs.classList.add('warn-amber');
            nincs.innerHTML = ikonSvg('warn') +
              ' <b>Ez nem budapesti irányítószám.</b> A kereső csak a budapesti irányítószámokat ismeri ' +
              '(1xxx). Ez NEM jelenti, hogy a település hiányzik a segédletből — kérjük, a település ' +
              'NEVÉT írja be (pl. „Dunaharaszti”).';
          } else {
            nincs.classList.add('warn-danger'); nincs.style.fontWeight = '500';
            nincs.innerHTML = ikonSvg('warn') + ' ' + (T.nincsTalalat || 'Nincs találat.');
          }
          lista.appendChild(nincs); return;
        }
        if (tal.length === 1) { lista.appendChild(tekTalalatDoboz(tal[0])); return; }
        tal.forEach(function (t) {
          var b = el('button', 'c-item'); b.type = 'button';
          b.appendChild(el('span', 'ci-name', t.nev));
          b.appendChild(el('span', 'ci-cat', t.ellatas.length + ' szakma'));
          b.onclick = function () { S.tekQuery = t.kulcs; inp.value = t.kulcs; rajzol(); };
          lista.appendChild(b);
        });
      }
      inp.oninput = function () { S.tekQuery = this.value; rajzol(); };
      rajzol();

      // Általános, minden találatra érvényes szabályok (a 4 kiemelt mindig látszik)
      (T.szabalyok || []).filter(function (s) { return s.kiemelt; }).forEach(function (s) {
        var d = el('div', 'tek-kiemelt'); d.textContent = s.szoveg; panel.appendChild(d);
      });
      var egyeb = (T.szabalyok || []).filter(function (s) { return !s.kiemelt; });
      if (egyeb.length) {
        var det = el('details', 'detour-wrap'); det.style.marginTop = '8px';
        det.appendChild(el('summary', null, 'További területi szabályok és kivételek (' + egyeb.length + ')'));
        var body = el('div', 'detour-body');
        egyeb.forEach(function (s) {
          var d2 = el('div'); d2.style.cssText = 'font-size:12.5px;line-height:1.5;margin-bottom:7px';
          d2.textContent = s.szoveg; body.appendChild(d2);
        });
        det.appendChild(body); panel.appendChild(det);
      }
      var detR = el('details', 'detour-wrap'); detR.style.marginTop = '6px';
      detR.appendChild(el('summary', null, 'Rövidítések feloldása (' + (T.rovidites || []).length + ')'));
      var bodyR = el('div', 'detour-body');
      (T.rovidites || []).forEach(function (r) {
        var s2 = el('div', 'tek-sor');
        s2.appendChild(el('span', 'tek-kod', r.kod));
        s2.appendChild(el('span', 'tek-nev', r.nev + (r.megjegyzes ? ' — ' + r.megjegyzes : '')));
        bodyR.appendChild(s2);
      });
      detR.appendChild(bodyR); panel.appendChild(detR);

      var fr = el('div', 'reszlet-forras');
      fr.innerHTML = ikonSvg('book') + '<span>' + (T.forras || '') + '<br>' + (T.felulvizsgalat || '') + '</span>';
      panel.appendChild(fr);
      setTimeout(function () { inp.focus(); }, 60);
    });
  }
  // ===== TORLÓDÁSI ÜZEMMÓD (4/2026. Igazgatói Utasítás) ======================
  // HATÓKÖR: a mód SOHA nem nyúl az MSTR-besoroláshoz és nem lazít semmilyen küszöböt —
  // kizárólag a besorolás UTÁNI elhelyezést, az újraértékelés ütemezését és a dokumentációs
  // emlékeztetőket írja át. Az eljárásrend ÉLETBE LÉPÉSÉT a műszakvezető orvos rendeli el;
  // az app csak azt jelzi, hogy a nézet be van kapcsolva — az elrendelés nem itt történik.
  var STORE_TORL = 'mstr_torlodas_v1', STORE_VARO = 'mstr_varolista_v1';
  function torlodas() {
    try { return JSON.parse(localStorage.getItem(STORE_TORL) || 'null') || null; } catch (e) { return null; }
  }
  function torlodasAktiv() { var t = torlodas(); return !!(t && t.aktiv); }
  function torlodasMent(o) { try { o ? localStorage.setItem(STORE_TORL, JSON.stringify(o)) : localStorage.removeItem(STORE_TORL); } catch (e) {} }
  function percTol(ts) { return ts ? Math.floor((Date.now() - ts) / 60000) : null; }
  function idoSzoveg(perc) {
    if (perc == null) return '—';
    if (perc < 60) return perc + ' perce';
    return Math.floor(perc / 60) + ' óra ' + (perc % 60) + ' perce';
  }
  function oraPerc(ts) { var d = new Date(ts); return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); }

  function torlodasKapcsolo() {
    var T = KB.torlodas || {};
    var be = !torlodasAktiv();
    overlayMutat(be ? 'Torlódási eljárásrend — nézet bekapcsolása' : 'Torlódási eljárásrend — nézet kikapcsolása', function (panel, bezar) {
      var fig = el('div', 'tek-vedokorlat');
      fig.innerHTML = ikonSvg('warn') + '<span><b>' + ((T.hatalybaLepes || {}).kiRendeliEl || 'Az életbe lépést a műszakvezető orvos rendeli el.') +
        '</b> Ez a kapcsoló csak az alkalmazás nézetét állítja át — nem rendeli el és nem szünteti meg az eljárásrendet.</span>';
      panel.appendChild(fig);
      var mikor = el('div'); mikor.style.cssText = 'font-size:12.5px;line-height:1.5;color:var(--text);margin-bottom:10px';
      mikor.textContent = (T.hatalybaLepes || {}).mikor || '';
      panel.appendChild(mikor);

      var nevInp = null;
      if (be) {
        panel.appendChild(elLabel('Ki rendelte el? (műszakvezető orvos — opcionális)'));
        nevInp = el('input', 'search-box'); nevInp.type = 'text'; nevInp.placeholder = 'pl. Dr. Kovács Péter';
        panel.appendChild(nevInp);
      }
      var teendo = el('div', 'warn warn-info');
      teendo.innerHTML = ikonSvg('bulb') + ' <b>Emlékeztető:</b> ' + ((T.hatalybaLepes || {}).teendok || []).join(' ') +
        (be ? '' : ' ' + ((T.hatalybaLepes || {}).megszunes || ''));
      panel.appendChild(teendo);

      // Kikapcsoláskor MEG KELL MONDANI, ha maradtak betegek a re-triage listán —
      // korábban a párbeszéd nem említette őket, és a lista utána elérhetetlen lett.
      if (!be) {
        var maradok = varolista();
        if (maradok.length) {
          var m = el('div', 'warn');
          m.classList.add('warn-amber');
          m.innerHTML = ikonSvg('warn') + ' <b>' + maradok.length + ' beteg van még a re-triage listán.</b> ' +
            'Ők a kikapcsolás után is megmaradnak, és a felület tetején továbbra is elérhetők lesznek — ' +
            'de a re-triage emlékeztetőt innentől nem a torlódási nézet tartja szem előtt.';
          panel.appendChild(m);
        }
      }

      var sor = el('div', 'nav-row'); sor.style.marginTop = '12px';
      var megse = el('button', 'btn btn-ghost', 'Mégse'); megse.type = 'button'; megse.onclick = bezar;
      sor.appendChild(megse); sor.appendChild(el('span', 'spacer'));
      var ok = el('button', 'btn', be ? 'Nézet bekapcsolása' : 'Nézet kikapcsolása'); ok.type = 'button';
      ok.onclick = function () {
        if (be) torlodasMent({ aktiv: true, elrendelo: (nevInp && nevInp.value.trim()) || '', ido: Date.now() });
        else torlodasMent(null);
        naplo('Torlódási eljárásrend', be ? ('nézet bekapcsolva' + (nevInp && nevInp.value.trim() ? ' — elrendelte: ' + nevInp.value.trim() : '')) : 'nézet kikapcsolva');
        bezar(); render();
      };
      sor.appendChild(ok); panel.appendChild(sor);
    });
  }

  // ---- re-triage várólista (KÜLÖN a „függő betegek" sávtól!) -----------------
  // Szándékosan NEM a parkolt chip-sáv: a parkoltBetolt() visszatöltéskor vissza-parkolja
  // az éppen felvett beteget (egy téves koppintás kicserélné az aktuális felvételt), a
  // chip-sáv pedig érkezési sorrendben tárol — amit az utasítás kifejezetten tilt.
  function varolista() { try { return JSON.parse(localStorage.getItem(STORE_VARO) || '[]'); } catch (e) { return []; } }
  function varolistaMent(a) { try { localStorage.setItem(STORE_VARO, JSON.stringify(a)); } catch (e) {} }
  function varolistaraTesz(ut) {
    var er = S.utolso || {};
    var most = Date.now();
    var a = varolista();
    a.push({
      id: ujId(), cimke: betegCimke(), szint: er.szint != null ? er.szint : null,
      panasz: panaszNeve() || '', ut: ut || 'fekvo_var',
      erkezes: most, utolso: most, lanc: [{ ido: most, szint: er.szint != null ? er.szint : null, tipus: 'alaptriázs' }],
    });
    varolistaMent(a);
    naplo('Torlódás', 'várólistára helyezve (' + (ut === 'ulo' ? 'ülő hely kezelőszékben' : 'mentőhordágyon vár') + ')');
  }
  function varolistaSzint(v) { return v.szint == null ? 9 : v.szint; }
  // A csoportsorrend EGY helyen: a szint nélküli beteg (9) a kritikus (1-2) csoportok
  // után, de a rutin (3-5) elé kerül. A képernyő ÉS a vágólapra másolt lista is ezt
  // használja — korábban a javítás csak a képernyőre jutott el, és szétcsúsztak.
  var VARO_CSOPORT_SORREND = [1, 2, 9, 3, 4, 5];
  function retriagePerc(szint) {
    var l = (KB.levels || []).filter(function (x) { return x.level === szint; })[0];
    return l ? l.reassessMin : null;   // orvosi időköz KIZÁRÓLAG a KB-ből
  }
  function retriageAllapot(v) {
    var p = retriagePerc(v.szint);
    if (p == null) return null;                       // MSTR 1: folyamatos ellátás, nincs időszakos újraértékelés
    var eltelt = percTol(v.utolso);
    return { intervallum: p, eltelt: eltelt, hatra: p - eltelt, lejart: eltelt >= p };
  }

  RENDER.varolista = function (fo) {
    var T = KB.torlodas || {};
    var c = kartya('Torlódás', 'Re-triage várólista', (T.sorrend || {}).kiemelt || '');
    var lista = varolista();

    var info = el('div', 'warn warn-info');
    info.innerHTML = ikonSvg('bulb') + ' <b>Emlékeztető, nem riasztás</b> — az app nem figyeli a beteget, és nem ad hangjelzést. A lista <b>csak ezen a készüléken</b> él, a másik triázs-állomás nem látja.';
    c.appendChild(info);

    if (!lista.length) {
      c.appendChild(el('div', 'result-none', 'A várólista üres. A Betegút képernyőn, torlódási nézetben lehet ide beteget felvenni.'));
    } else {
      var kritikus = lista.filter(function (v) { return v.szint === 1 || v.szint === 2; });
      if (kritikus.length) {
        var kr = el('div', 'warn');
        kr.classList.add('warn-danger');
        kr.innerHTML = ikonSvg('warn') + ' <b>MSTR 1–2 nem várakozhat</b> — kapacitástól függetlenül azonnal az ellátótérbe, a tartalék ágyra. (' + kritikus.length + ' beteg a listán.)';
        c.appendChild(kr);
      }
      // Kategória szerint CSOPORTOSÍTVA — de sem számozás, sem „következő beteg" kijelölés:
      // a sorrendet az utasítás a nővérre és a kollégákkal való egyeztetésre bízza.
      // A 9 = „nincs automatikus szint". SZÁNDÉKOSAN a kritikus (1-2) csoportok UTÁN, de a
      // rutin (3-5) csoportok ELÉ kerül: az ismeretlen sürgősség nem azonos az alacsonnyal,
      // egy befejezetlen besorolású beteget nem szabad rutinként a lista aljára tenni.
      // (Korábban legutolsó volt, az MSTR 5 után is — lektori észrevétel.)
      var szintek = VARO_CSOPORT_SORREND.slice();
      // Biztonsági háló: ha bármely beteg szintje nem szerepel a listában, ne tűnjön el
      // nyomtalanul a képernyőről (a gomb és a vágólap ugyanis továbbra is számolná).
      lista.forEach(function (v) {
        var sz = varolistaSzint(v);
        if (szintek.indexOf(sz) < 0) szintek.push(sz);
      });
      szintek.forEach(function (sz) {
        var cs = lista.filter(function (v) { return varolistaSzint(v) === sz; });
        if (!cs.length) return;
        cs.sort(function (a, b) { return a.erkezes - b.erkezes; });
        var fej = el('div', 'varo-csoport');
        var bd = el('span', 'varo-badge'); bd.textContent = sz === 9 ? '?' : sz;
        if (sz !== 9) bd.style.background = szinSzint(sz);
        fej.appendChild(bd);
        fej.appendChild(el('span', null, sz === 9
          ? 'Nincs triázs-szint — befejezetlen besorolás (' + cs.length + ' beteg)'
          : 'MSTR ' + sz + ' — ' + cs.length + ' beteg'));
        c.appendChild(fej);
        cs.forEach(function (v) {
          var sor = el('div', 'varo-sor');
          var bal = el('div', 'varo-bal');
          bal.appendChild(el('div', 'varo-nev', v.cimke + (v.panasz ? ' · ' + v.panasz : '')));
          var meta = el('div', 'varo-meta');
          meta.textContent = 'érkezett ' + oraPerc(v.erkezes) + ' (' + idoSzoveg(percTol(v.erkezes)) + ')' +
            ' · ' + (v.ut === 'ulo' ? 'ülő hely kezelőszékben' : 'mentőhordágyon vár') +
            (v.lanc && v.lanc.length > 1 ? ' · ' + (v.lanc.length - 1) + 'x re-triage' : '');
          bal.appendChild(meta);
          if (v.elavult) {
            var ev = el('div', 'varo-retri lejart');
            ev.textContent = 'TÖBB MINT ' + MEGORZES_ORA + ' ÓRÁJA A LISTÁN, re-triage nélkül — ' +
              'ellenőrizze, hogy a beteg még itt van-e, és zárja le a bejegyzést („Ágyra került”). ' +
              'A rendszer szándékosan NEM törli automatikusan.';
            bal.appendChild(ev);
          }
          var ra = retriageAllapot(v);
          if (ra) {
            var r = el('div', 'varo-retri' + (ra.lejart ? ' lejart' : ''));
            r.textContent = ra.lejart
              ? ('ÚJRAÉRTÉKELÉS ESEDÉKES — ' + ra.eltelt + ' perc telt el az utolsó óta (előírás: ' + ra.intervallum + ' percenként)')
              : ('következő újraértékelés ' + ra.hatra + ' perc múlva (előírás: ' + ra.intervallum + ' percenként)');
            bal.appendChild(r);
          } else if (v.szint === 1) {
            var r1 = el('div', 'varo-retri lejart'); r1.textContent = 'MSTR 1 — folyamatos ellátás, nem várakoztatható';
            bal.appendChild(r1);
          } else if (v.szint == null) {
            // Nincs szint → nincs forrásból számolható re-triage időköz. Ezt kimondjuk,
            // nem hallgatjuk el, és nem is találunk ki helyette időközt.
            var rn = el('div', 'varo-retri lejart');
            rn.textContent = 'NINCS TRIÁZS-SZINT — ' + idoSzoveg(percTol(v.erkezes)) + ' vár. ' +
              'Re-triage időköz csak szinttel számolható, ezért ennél a betegnél a rendszer nem ' +
              'tud emlékeztetni. Új felvétellel pótolja a besorolást, addig kézzel tartsa szemmel.';
            bal.appendChild(rn);
          }
          sor.appendChild(bal);
          var jobb = el('div', 'varo-akciok');
          var rt = el('button', 'btn btn-ghost', 'Re-triage kész'); rt.type = 'button';
          rt.onclick = function () {
            var a = varolista();
            a.forEach(function (x) {
              if (x.id !== v.id) return;
              x.utolso = Date.now();
              x.lanc = (x.lanc || []).concat([{ ido: x.utolso, szint: x.szint, tipus: 're-triage' }]);
            });
            varolistaMent(a); render();
          };
          jobb.appendChild(rt);
          var le = el('button', 'btn btn-ghost', 'Ágyra került'); le.type = 'button';
          le.onclick = function () {
            // Megerősítés: a gomb közvetlenül a „Re-triage kész" mellett áll, és a törlés
            // visszavonhatatlan. A tömeges törlés is megerősítést kér — legyen egységes.
            if (!confirm('Leveszi a listáról: ' + v.cimke + '?\n\nEz azt jelenti, hogy a beteg ágyra került, és a re-triage emlékeztető megszűnik. A művelet nem vonható vissza.')) return;
            varolistaMent(varolista().filter(function (x) { return x.id !== v.id; })); render();
          };
          jobb.appendChild(le);
          sor.appendChild(jobb);
          c.appendChild(sor);
        });
      });
      var dok = el('div', 'nav-row'); dok.style.marginTop = '10px';
      var cp = elIko('button', 'btn btn-ghost', 'complaint', 'Várólista vágólapra'); cp.type = 'button';
      cp.onclick = function () { vagolapra(varolistaSzoveg(), cp); };
      dok.appendChild(cp);
      var ur = el('button', 'btn btn-ghost', 'Műszak zárása — lista ürítése'); ur.type = 'button';
      ur.onclick = function () {
        overlayMutat('Várólista ürítése', function (p2, bz) {
          p2.appendChild(el('div', null, 'Biztosan törli mind a ' + varolista().length + ' tételt? Ez nem vonható vissza.'));
          var s2 = el('div', 'nav-row'); s2.style.marginTop = '12px';
          var m2 = el('button', 'btn btn-ghost', 'Mégse'); m2.type = 'button'; m2.onclick = bz; s2.appendChild(m2);
          s2.appendChild(el('span', 'spacer'));
          var o2 = el('button', 'btn', 'Ürítés'); o2.type = 'button';
          o2.onclick = function () { varolistaMent([]); bz(); render(); };
          s2.appendChild(o2); p2.appendChild(s2);
        });
      };
      dok.appendChild(ur);
      c.appendChild(dok);
    }

    var row = el('div', 'nav-row');
    var back = el('button', 'btn btn-ghost', '← Vissza'); back.type = 'button';
    back.onclick = function () { S.step = S.varolistaElozoStep || 'eredmeny'; render(); };
    row.appendChild(back);
    c.appendChild(row);
    fo.appendChild(c);
  };

  // Az utasítás 4. pontja fast tracknél ambuláns lapot ír elő, MINIMUM státusszal és
  // epikrízissel. Szándékosan MÁSOLHATÓ VÁZ, nem pipálható checkbox: az app nem könyvelheti
  // el „elkészültnek" azt a dokumentációt, ami a MedSolban készül.
  function ambulansLapVaz() {
    var er = S.utolso || {}, L = [];
    L.push('AMBULÁNS LAP (fast track) — ' + oraPerc(Date.now()));
    L.push('Forrás: 4/2026. Igazgatói Utasítás 4. pont — minimálisan státusz és epikrízis.');
    L.push('');
    L.push(osszegzoSzoveg(er));
    L.push('');
    L.push('STÁTUSZ:');
    L.push('');
    L.push('EPIKRÍZIS:');
    L.push('');
    L.push('Továbbküldés (a műszakvezető orvos döntése): célintézmény ................  (NEM lehet másik SBO)');
    L.push('MedSolban rögzítve: ....');
    return L.join('\n');
  }

  // A KÉPERNYŐVEL AZONOS rendezés: a szint nélküli beteg a kritikus (1-2) csoportok után,
  // de a rutin (3-5) elé kerül. Egy helyen definiálva, hogy a képernyő és a vágólapra
  // másolt lista ne tudjon szétcsúszni (korábban a javítás csak a képernyőre jutott el).
  function varoRendezoKulcs(v) {
    var i = VARO_CSOPORT_SORREND.indexOf(varolistaSzint(v));
    return i < 0 ? VARO_CSOPORT_SORREND.length : i;   // ismeretlen szint: a végére, de nem vész el
  }
  function varolistaSzoveg() {
    var L = ['RE-TRIAGE VÁRÓLISTA (' + oraPerc(Date.now()) + ')'];
    var t = torlodas();
    if (t) L.push('Torlódási nézet bekapcsolva: ' + oraPerc(t.ido) + (t.elrendelo ? ' · elrendelte: ' + t.elrendelo : ''));
    L.push('FIGYELEM: a sorrendet a beteg állapota és triázs-kategóriája dönti el, NEM az érkezési idő.');
    varolista().slice().sort(function (a, b) { return varoRendezoKulcs(a) - varoRendezoKulcs(b) || a.erkezes - b.erkezes; })
      .forEach(function (v) {
        var ra = retriageAllapot(v);
        L.push('- MSTR ' + (v.szint == null ? '? (NINCS TRIÁZS-SZINT — befejezetlen besorolás)' : v.szint) +
          ' · ' + v.cimke + (v.panasz ? ' (' + v.panasz + ')' : '') +
          ' · érkezett ' + oraPerc(v.erkezes) +
          ' · ' + (v.ut === 'ulo' ? 'ülő hely kezelőszékben' : 'mentőhordágyon vár') +
          (ra ? (ra.lejart ? ' · RE-TRIAGE ESEDÉKES' : ' · re-triage ' + ra.hatra + ' perc múlva')
              : (v.szint == null ? ' · re-triage időköz csak szinttel számolható' : '')));
        (v.lanc || []).forEach(function (e) { L.push('    ' + oraPerc(e.ido) + ' ' + e.tipus + (e.szint != null ? ' — MSTR ' + e.szint : '')); });
      });
    return L.join('\n');
  }

  function betegutSzoveg() {
    var BU = KB.betegut || {}, er = S.utolso || {}, L = [];
    L.push('BETEGÚT / ELHELYEZÉS — MSTR ' + (er.szint != null ? er.szint : '?'));
    if (er.szint === 1 || er.szint === 2) { L.push('→ Fekvőbeteg részleg (MSTR ' + er.szint + ').'); return L.join('\n'); }
    (BU.jaroFeltetelek || []).forEach(function (f) { L.push((S.betegut[f.id] === 'igen' ? '[IGEN] ' : S.betegut[f.id] === 'nem' ? '[NEM]  ' : '[ ? ]  ') + f.szoveg); });
    if (S.betegut && S.betegut.frailty) L.push('≥80 év / törékeny idős beteg: IGEN — gondos mérlegelés, lehetőleg kísérővel.');
    var vanNem = (BU.jaroFeltetelek || []).some(function (f) { return S.betegut[f.id] === 'nem'; });
    var teljes = (BU.jaroFeltetelek || []).every(function (f) { return S.betegut[f.id] === 'igen'; });
    L.push('DISZPOZÍCIÓ: ' + (vanNem ? 'Fekvőbeteg részleg' : teljes ? 'Járóbeteg részlegre irányítható' : 'Hiányos — kézi döntés'));
    return L.join('\n');
  }

  // ===== TETRA / telefon riasztás adatfelvételi lap (a triázstól független modul) =====
  // ===== TUDÁSTÁR — a tudásbázis böngészhető, kereshető felülete ============
  // Eddig a KB jelentős része (39 folyamat-szabály, 45 fogalom/definíció, 12 döntési
  // tábla, a gyermek vitál-sávok) SEHOL nem jelent meg a felületen, a TEK és a
  // felvételi alapelvek pedig csak a folyamat VÉGÉN, a betegút képernyőn voltak
  // elérhetők. Ez a modul mindegyiket előhozza a kezdőképernyőről is.
  function tudastarSzekciok() {
    var K = KB, ki = [];
    ki.push({ id: 'szintek', cim: 'MSTR-szintek', leiras: 'Az 5 kategória célideje, újraértékelési időköze és tipikus esetei.', db: (K.levels || []).length });
    if ((K.tek || {}).telepulesek) ki.push({ id: 'tek', cim: 'Területi ellátás (TEK) — kereső', leiras: 'Kerület / település → mely SE-klinikák látják el. Offline kereső.', db: (K.tek.keruletek || []).length + (K.tek.telepulesek || []).length, overlay: true });
    ki.push({ id: 'tablak', cim: 'Döntési és vitál-táblák', leiras: 'Légzés, keringés, GCS, láz/SIRS, fájdalom, vérzékenység, baleseti mechanizmus.', db: (K.vitalsReference || []).length });
    ki.push({ id: 'gyermek', cim: 'Gyermek vitál-sávok', leiras: 'Életkor szerinti légzésszám- és pulzus-táblák (0–18 év), MSTR-sávokkal.', db: (K.vitalBands || []).length });
    ki.push({ id: 'folyamat', cim: 'A triázs folyamata és szabályai', leiras: 'Lépéssor, időkeretek, újraértékelés, buktatók, felül-triázsolás elve.', db: (K.processRules || []).length });
    ki.push({ id: 'fogalmak', cim: 'Fogalmak és definíciók', leiras: 'SIRS, szepszis, fájdalom-típusok, gyermek-specifikus fogalmak.', db: (K.reference || []).length });
    if ((K.betegut || {}).felvetelSzabalyok) ki.push({ id: 'felvetel', cim: 'SE SOK betegfelvételi alapelvek', leiras: 'A Sürgősségi Orvostani Klinika (SOK) 10 felvételi alapelve — pl. területi alapon más SBO-ra (sürgősségi betegellátó osztályra) küldeni tilos.', db: ((K.betegut.felvetelSzabalyok || {}).pontok || []).length });
    if ((K.torlodas || {}).utak) ki.push({ id: 'torlodas', cim: 'Torlódási eljárásrend', leiras: '4/2026. Igazgatói Utasítás — a 3 betegút, re-triage, dokumentáció.', db: (K.torlodas.utak || []).length });
    if ((K.infekciokontroll || {}).kerdesek) ki.push({ id: 'infekcio', cim: 'Infekciókontroll / izoláció', leiras: 'Izolációs igény és egyéni védőeszköz.', db: (K.infekciokontroll.kerdesek || []).length });
    // A kiírt darabszám EGYEZZEN azzal, amit megnyitva kap a felhasználó (a TEK kivétel:
    // az overlay saját kereső, ott a kerület+település szám a beszédes).
    var tet = tudastarTetelek();
    ki.forEach(function (s) {
      if (s.overlay) return;
      s.db = tet.filter(function (x) { return x.szekcio === s.id; }).length;
    });
    return ki;
  }
  function tudastarTetelek() {
    // Egységes, kereshető tételsor MINDEN szekcióból (cím + szöveg + forrás).
    if (_tudastarCache) return _tudastarCache;
    var K = KB, t = [];
    (K.levels || []).forEach(function (l) {
      t.push({ szekcio: 'szintek', cim: 'MSTR ' + l.level + ' — ' + l.name,
        szoveg: l.description + '\n\n' + cimkezettIdo('Orvosi értékelés', l.targetTime) + ' · Ápolói: ' + l.nurseTime + ' · Újraértékelés: ' + l.reassess +
          (l.typical && l.typical.length ? '\n\nTipikus: ' + l.typical.join('; ') : ''),
        forras: l.source, szint: l.level });
    });
    (K.vitalsReference || []).forEach(function (v) {
      t.push({ szekcio: 'tablak', cim: v.name, tabla: v.data, forras: v.source });
    });
    (K.vitalBands || []).forEach(function (b) {
      t.push({ szekcio: 'gyermek', cim: b.name, szoveg: 'Az értéket a korcsoport sorában kell megkeresni: a normál tartománytól távolodva a szint 3 → 2 → 1 felé súlyosbodik.' + (b.mervadoMegjegyzes ? ' ' + b.mervadoMegjegyzes : ''), savok: b.rows, forras: b.source });
    });
    (K.processRules || []).forEach(function (p) {
      t.push({ szekcio: 'folyamat', cim: p.name, szoveg: p.condition_text || '', megjegyzes: p.notes, forras: p.source });
    });
    (K.reference || []).forEach(function (r) {
      t.push({ szekcio: 'fogalmak', cim: r.name, szoveg: r.condition_text || '', megjegyzes: r.notes, forras: r.source });
    });
    var fsz = (K.betegut || {}).felvetelSzabalyok;
    if (fsz) (fsz.pontok || []).forEach(function (p, i) {
      // A cím elárulja a tartalmat — a puszta sorszám („Felvételi alapelv 3.") miatt minden pontot le
      // kellett nyitni, hogy kiderüljön, miről szól. A rövid címek a KB-ből jönnek (fsz.cimek).
      var rc = (fsz.cimek || [])[i];
      t.push({ szekcio: 'felvetel', cim: (i + 1) + '. ' + (rc || 'Felvételi alapelv'), szoveg: p.replace(/^\s*\d+\.\s*/, ''), forrasSzoveg: fsz.forras });
    });
    var TO = K.torlodas || {};
    if (TO.utak) {
      // Az utasítás NYITÓ ALAPELVE és a triázs helyszíne eddig bent volt a tudásbázisban,
      // de sehol nem jelent meg a felületen. Az alapelv a legfontosabb mondat az ápolónak:
      // amíg van szabad ágy, a beszállított beteget át KELL venni.
      if (TO.alapelv) t.push({ szekcio: 'torlodas', cim: 'Alapelv — mikor NEM kell az eljárásrend', szoveg: TO.alapelv, forrasSzoveg: TO.forras });
      if (TO.triazsHely) t.push({ szekcio: 'torlodas', cim: 'Hol történik a triázs torlódás idején', szoveg: TO.triazsHely, forrasSzoveg: TO.forras });
      t.push({ szekcio: 'torlodas', cim: 'Hatálybalépés — mikor és ki rendeli el', szoveg: (TO.hatalybaLepes || {}).mikor + ' ' + (TO.hatalybaLepes || {}).kiRendeliEl, forrasSzoveg: TO.forras });
      t.push({ szekcio: 'torlodas', cim: 'MSTR 1–2 torlódás alatt', szoveg: (TO.kritikus || {}).szoveg, forrasSzoveg: TO.forras });
      (TO.utak || []).forEach(function (u) { t.push({ szekcio: 'torlodas', cim: u.sorszam + '. ' + u.cim, szoveg: u.szoveg, megjegyzes: 'Döntéshozó: ' + u.dontesHozo, forrasSzoveg: TO.forras }); });
      t.push({ szekcio: 'torlodas', cim: (TO.sorrend || {}).cim, szoveg: (TO.sorrend || {}).szoveg, forrasSzoveg: TO.forras });
      t.push({ szekcio: 'torlodas', cim: (TO.dokumentacio || {}).cim, szoveg: ((TO.dokumentacio || {}).pontok || []).join(' '), forrasSzoveg: TO.forras });
      if (TO.orzo) t.push({ szekcio: 'torlodas', cim: TO.orzo.cim, szoveg: TO.orzo.szoveg, forrasSzoveg: TO.forras });
    }
    var IK = K.infekciokontroll || {};
    (IK.kerdesek || []).forEach(function (q) {
      t.push({ szekcio: 'infekcio', cim: q.cimke + (q.tipus ? ' → ' + q.tipus : ''), szoveg: 'Védőeszköz (PPE) / elhelyezés: ' + (q.ppe || ''), forrasSzoveg: IK.megjegyzes });
    });
    // A TEK helységei is kereshetők legyenek: a kereső súgója településnevet is ígér, ezért
    // a találatnak meg kell lennie. Ezek a tételek a TEK-keresőt nyitják meg (ott van a
    // teljes kontextus: védőkorlát, kivételek, AMI-időablak) — nem duplikáljuk a tartalmat.
    var TK = K.tek || {};
    (TK.keruletek || []).forEach(function (r) {
      t.push({ szekcio: 'tek', cim: r.ker + ' kerület', szoveg: 'Területi ellátás: ' + (r.ellatas || []).join(', '), tekKulcs: r.ker, forrasSzoveg: TK.forras });
    });
    (TK.telepulesek || []).forEach(function (r) {
      t.push({ szekcio: 'tek', cim: r.telepules, szoveg: 'Területi ellátás: ' + (r.ellatas || []).join(', '), tekKulcs: r.telepules, forrasSzoveg: TK.forras });
    });
    _tudastarCache = t; return t;
  }
  var _tudastarCache = null;

  // A döntési táblák sorai a KB-ből nyers kulcsokkal jönnek (pl. „o2_szaturacio", „sulyos_8_10").
  // Ezek programozói nevek — a felületen olvasható oszlopcímmé alakítjuk. Ismeretlen kulcsnál
  // aláhúzás → szóköz, nagy kezdőbetű (így új tábla sem tud nyers kulcsot mutatni).
  var OSZLOP_CIM = {
    mstr: 'MSTR', MSTR: 'MSTR', o2_szaturacio: 'SpO₂', becsult_pefr: 'PEFR (becsült)', leiras: 'Leírás',
    sulyos_8_10: 'Súlyos (8–10)', kozepes_4_7: 'Közepes (4–7)', enyhe_alatt_4: 'Enyhe (<4)',
    kozepes_enyhe_alatt_8: 'Közepes / enyhe (<8)', also_gorbe: 'Alsó görbe', felso_gorbe: 'Felső görbe',
    eletkor: 'Életkor', ertek: 'Érték', fokozat: 'Fokozat', gcs: 'GCS', helyek: 'Helyek', jelentes: 'Jelentés',
    jelleg: 'Jelleg', kategoria: 'Kategória', kriterium: 'Kritérium', kullem: 'Küllem', kuszob: 'Küszöb',
    lokalizacio: 'Lokalizáció', pont: 'Pont', tudat: 'Tudat', allapot: 'Állapot', T: 'Hőmérséklet'
  };
  function oszlopCim(k) {
    if (OSZLOP_CIM[k]) return OSZLOP_CIM[k];
    var t = String(k).replace(/_/g, ' ');
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  function tudastarTetelDoboz(x) {
    var d = el('details', 'detour-wrap');
    var sum = el('summary', null, x.cim);
    if (x.szint != null) { var bd = el('span', 'opt-badge', String(x.szint)); bd.style.cssText += ';background:' + szinSzint(x.szint) + ';margin-left:8px'; sum.appendChild(bd); }
    d.appendChild(sum);
    var b = el('div', 'detour-body');
    if (x.szoveg) { var sz = el('div'); sz.style.cssText = 'font-size:12.5px;line-height:1.55;white-space:pre-wrap'; sz.textContent = x.szoveg; b.appendChild(sz); }
    if (x.tabla) {
      var pre = el('div'); pre.style.cssText = 'font-size:12px;line-height:1.5;margin-top:6px';
      (x.tabla.rows || []).forEach(function (r) {
        var sor = el('div', 'tek-sor');
        var kulcsok = Object.keys(r);
        // A cellák egy része tömb (pl. a vérzékenység-tábla "helyek" mezője), és a bennük
        // lévő tételek maguk is tartalmaznak vesszőt — ezért ' · '-tal fűzzük össze, különben
        // olvashatatlan vesszőlevessé folyna össze.
        function cella(v) { return Array.isArray(v) ? v.join(' · ') : String(v); }
        sor.appendChild(el('span', 'tek-kod', cella(r[kulcsok[0]])));
        sor.appendChild(el('span', 'tek-nev', kulcsok.slice(1).map(function (k) { return oszlopCim(k) + ': ' + cella(r[k]); }).join(' — ')));
        pre.appendChild(sor);
      });
      if (x.tabla.megjegyzes) { var mj = el('div', 'skip-hint'); mj.style.marginTop = '6px'; mj.textContent = x.tabla.megjegyzes; pre.appendChild(mj); }
      b.appendChild(pre);
    }
    if (x.savok) {
      var tb = el('div'); tb.style.cssText = 'font-size:11.5px;line-height:1.5;margin-top:6px;max-height:280px;overflow:auto';
      x.savok.forEach(function (r) {
        var sor = el('div', 'tek-sor');
        sor.appendChild(el('span', 'tek-kod', r.eletkor));
        sor.appendChild(el('span', 'tek-nev', 'MSTR1 <' + r.b1 + ' · MSTR2 ' + r.b1 + '-' + (r.b2 - 1) + ' · MSTR3 ' + r.b2 + '-' + (r.b3 - 1) + ' · normál ' + r.b3 + '-' + r.b4 + ' · MSTR3 ' + (r.b4 + 1) + '-' + r.b5 + ' · MSTR2 ' + (r.b5 + 1) + '-' + r.b6 + ' · MSTR1 >' + r.b6));
        tb.appendChild(sor);
      });
      b.appendChild(tb);
    }
    if (x.megjegyzes) { var m = el('div', 'skip-hint'); m.style.marginTop = '6px'; m.textContent = x.megjegyzes; b.appendChild(m); }
    if (x.tekKulcs) {
      var tb = elIko('button', 'btn btn-ghost btn-full', 'search', 'Megnyitás a területi keresőben (kivételekkel együtt)');
      tb.type = 'button'; tb.style.cssText = 'margin-top:8px;text-align:left;font-size:12.5px';
      tb.onclick = function () { S.tekQuery = x.tekKulcs; tekOverlay(); };
      b.appendChild(tb);
    }
    var fs = x.forrasSzoveg || (x.forras && x.forras.length ? Folyamatabra.forrasSzoveg(x.forras) : null);
    if (fs) { var fr = el('div', 'reszlet-forras'); fr.innerHTML = ikonSvg('book') + '<span>' + fs + '</span>'; b.appendChild(fr); }
    d.appendChild(b); return d;
  }

  RENDER.tudastar = function (fo) {
    var c = kartya('Tudástár', 'Tudástár — a triázs teljes háttéranyaga',
      'Minden itt látható tétel a forrásdokumentumokból származik, forrásoldal-hivatkozással. Kereshető.');
    var szek = tudastarSzekciok();

    var inp = el('input', 'search-box'); inp.type = 'text';
    inp.placeholder = 'Keresés az egész tudásbázisban — pl. SIRS, GCS, fájdalom, izoláció, Dunaharaszti';
    inp.value = S.tudQuery || '';
    c.appendChild(inp);

    var chipSor = el('div'); chipSor.style.cssText = 'display:flex;gap:7px;flex-wrap:wrap;margin-bottom:12px';
    c.appendChild(chipSor);
    var tart = el('div'); c.appendChild(tart);

    function rajzol() {
      chipSor.innerHTML = ''; tart.innerHTML = '';
      var q = normSzo(S.tudQuery || '').trim();

      // szekció-választó chipek (kereséskor elrejtve)
      if (!q) {
        szek.forEach(function (s) {
          var b = el('button', 'gyakori-chip' + (S.tudSzekcio === s.id ? ' sel' : ''));
          b.type = 'button'; b.textContent = s.cim + ' (' + s.db + ')';
          b.onclick = function () {
            if (s.overlay) { tekOverlay(); return; }
            S.tudSzekcio = (S.tudSzekcio === s.id ? null : s.id); rajzol();
          };
          chipSor.appendChild(b);
        });
      }

      var tetelek = tudastarTetelek();
      if (q) {
        var tal = tetelek.filter(function (x) {
          return normSzo((x.cim || '') + ' ' + (x.szoveg || '') + ' ' + (x.megjegyzes || '')).indexOf(q) >= 0;
        });
        var fej = el('div', 'card-eye', tal.length + ' találat');
        tart.appendChild(fej);
        if (!tal.length) {
          var n = el('div', 'skip-hint'); n.textContent = 'Nincs találat. Próbálja más szóval, vagy törölje a keresést a szekciók megjelenítéséhez.';
          tart.appendChild(n);
        }
        tal.slice(0, 40).forEach(function (x) { tart.appendChild(tudastarTetelDoboz(x)); });
        if (tal.length > 40) { var tb = el('div', 'skip-hint'); tb.textContent = '… és további ' + (tal.length - 40) + ' találat — pontosítsa a keresést.'; tart.appendChild(tb); }
        return;
      }
      if (!S.tudSzekcio) {
        szek.forEach(function (s) {
          var b = el('button', 'c-item'); b.type = 'button';
          var w = el('div'); w.style.flex = '1';
          w.appendChild(el('div', 'ci-name', s.cim));
          var l = el('div', 'skip-hint'); l.textContent = s.leiras; w.appendChild(l);
          b.appendChild(w);
          b.appendChild(el('span', 'ci-cat', s.db + ' tétel'));
          b.onclick = function () {
            if (s.overlay) { tekOverlay(); return; }
            S.tudSzekcio = s.id; rajzol();
          };
          tart.appendChild(b);
        });
        return;
      }
      var akt = szek.filter(function (s) { return s.id === S.tudSzekcio; })[0] || {};
      var vissza = el('button', 'btn btn-ghost', '← Minden témakör'); vissza.type = 'button';
      vissza.style.cssText = 'margin-bottom:10px;font-size:12.5px;padding:8px 12px';
      vissza.onclick = function () { S.tudSzekcio = null; rajzol(); };
      tart.appendChild(vissza);
      tart.appendChild(el('div', 'card-eye', akt.cim || ''));
      tetelek.filter(function (x) { return x.szekcio === S.tudSzekcio; })
        .forEach(function (x) { tart.appendChild(tudastarTetelDoboz(x)); });
    }
    inp.oninput = function () { S.tudQuery = this.value; rajzol(); };
    rajzol();

    var row = el('div', 'nav-row');
    var back = el('button', 'btn btn-ghost', '← Vissza'); back.type = 'button';
    back.onclick = function () { S.step = S.tudastarElozoStep || 'azonositas'; render(); };
    row.appendChild(back);
    c.appendChild(row);
    fo.appendChild(c);
  };

  // ===== TETRA / telefon riasztás adatfelvételi lap ==========================
  // A felület a VÉGLEGES nyomtatvány szerkezetét követi (SE SOK — Adatfelvételi lap,
  // TETRA_LAP_final): fejléc → betegadatok → S → STROKE → B → A → R, ugyanabban a
  // sorrendben és ugyanazokkal a mezőkkel, hogy a papír és a digitális lap 1:1 legyen.
  RENDER.tetra = function (fo) {
    S.tetra = S.tetra || {};
    var T = S.tetra;
    var c = kartya('TETRA', 'Adatfelvételi lap — TETRA / telefon riasztás', 'Prehospitális riasztás rögzítése SBAR-sorrendben (helyzet – előzmény – állapot – javaslat) — a hivatalos nyomtatvány szerint.');

    function tInput(key, label, ph, mono) {
      var w = el('div', 'pfield');
      w.appendChild(elLabel(label));
      var i = el('input'); i.type = 'text'; i.value = T[key] || ''; i.placeholder = ph || '';
      i.style.cssText = 'border:2px solid var(--border);border-radius:9px;padding:10px;font-size:14px;width:100%' + (mono ? ";font-family:'SF Mono',Consolas,monospace" : '');
      i.oninput = function () { T[key] = this.value; };
      w.appendChild(i); return w;
    }
    function tArea(key, label, ph) {
      var w = el('div', 'pfield'); w.appendChild(elLabel(label));
      var a = el('textarea'); a.value = T[key] || ''; a.placeholder = ph || '';
      a.style.cssText = 'border:2px solid var(--border);border-radius:9px;padding:10px;font-size:14px;width:100%;min-height:52px;resize:vertical;font-family:inherit';
      a.oninput = function () { T[key] = this.value; };
      w.appendChild(a); return w;
    }
    function tChoice(key, label, opts) {
      var w = el('div', 'pfield'); w.appendChild(elLabel(label));
      var row = el('div'); row.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap';
      opts.forEach(function (o) {
        var b = el('button', 'tetra-choice' + (T[key] === o ? ' sel' : ''), o); b.type = 'button';
        b.onclick = function () { T[key] = (T[key] === o ? null : o); render(); };
        row.appendChild(b);
      });
      w.appendChild(row); return w;
    }
    function tToggle(key, label) {
      var b = el('button', 'tetra-toggle' + (T[key] ? ' on' : ''), label); b.type = 'button';
      b.onclick = function () { T[key] = !T[key]; render(); };
      return b;
    }
    function tToggleSor(lista) {
      var row = el('div'); row.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;margin-bottom:4px';
      lista.forEach(function (k) { row.appendChild(tToggle(k[0], k[1])); });
      return row;
    }
    function fejlec(txt) { return el('div', 'klin-fejlec', txt); }

    var cols = el('div', 'tetra-cols'); var colL = el('div'); var colR = el('div');
    cols.appendChild(colL); cols.appendChild(colR); c.appendChild(cols);

    // — Fejléc: bejelentkező mentőegység + idő —
    colR.appendChild(fejlec('Bejelentkezés'));
    var g0 = el('div', 'param-grid');
    g0.appendChild(tInput('mentoegyseg', 'Bejelentkező mentőegység'));
    g0.appendChild(tInput('honnan', 'Honnan'));      // a nyomtatvány fejlécsorának második mezője
    g0.appendChild(tInput('datum', 'Dátum', 'éééé.hh.nn.'));
    g0.appendChild(tInput('ido', 'Bejelentkezés időpontja', 'óó:pp'));
    colR.appendChild(g0);

    // — Betegadatok —
    colR.appendChild(fejlec('Betegadatok'));
    colR.appendChild(tChoice('nem', 'Neme', ['Nő', 'Férfi']));
    var g1 = el('div', 'param-grid');
    g1.appendChild(tInput('eletkor', 'Életkor (év)'));
    g1.appendChild(tInput('taj', 'TAJ-szám', '', true));
    colR.appendChild(g1);
    colR.appendChild(tInput('nev', 'Beteg neve'));
    colR.appendChild(tInput('feltalalasiHely', 'Feltalálási hely'));
    colR.appendChild(tInput('lakhely', 'Állandó lakhely / tartózkodási hely'));
    // A feltalálási hely / lakhely a területi ellátás (TEK) bemenete — egy koppintás oda.
    if ((KB.tek || {}).telepulesek) {
      var tekB = elIko('button', 'btn btn-ghost btn-full', 'search', 'Területi ellátás (TEK) megnézése');
      tekB.type = 'button'; tekB.style.cssText = 'margin-top:6px;text-align:left;font-size:12.5px';
      tekB.onclick = function () { tekOverlay(); };
      colR.appendChild(tekB);
    }
    colR.appendChild(tInput('hozzatartozo', 'Hozzátartozó elérhetősége'));

    // — S: jelenlegi helyzet —
    colL.appendChild(fejlec('S — Jelenlegi helyzet, mi történt?'));
    colL.appendChild(tArea('s', 'Leírás'));
    colL.appendChild(tToggleSor([['jLelegeztetes', 'Lélegeztetés'], ['jUjraeleszt', 'Újraélesztés'],
      ['jTudatzavar', 'Súlyos tudatzavar'], ['jKeringes', 'Keringéstámogatás']]));
    colL.appendChild(tInput('sEgyeb', 'Egyéb'));

    // — B: előzmények —
    colL.appendChild(fejlec('B — Előzmények, anamnézis'));
    colL.appendChild(tToggleSor([['bHT', 'HT'], ['bDM', 'DM'], ['bCOPD', 'COPD'],
      ['bISZB', 'ISZB'], ['bStroke', 'stroke'], ['bPE', 'PE']]));
    colL.appendChild(tInput('bEgyeb', 'Egyéb előzmény'));

    // — A: állapotértékelés, vitálok —
    colL.appendChild(fejlec('A — Állapotértékelés, vitális paraméterek'));
    var gv = el('div', 'param-grid');
    gv.appendChild(tInput('bp', 'Vérnyomás (Hgmm)', 'pl. 130/80', true));
    gv.appendChild(tInput('p', 'Pulzus (/min)', '', true));
    gv.appendChild(tInput('spo2', 'SpO₂ (%)', '', true));
    gv.appendChild(tInput('lsz', 'Légzésszám (/min)', '', true));
    gv.appendChild(tInput('temp', 'Testhőmérséklet (°C)', '', true));
    gv.appendChild(tInput('gcs', 'GCS (E–V–M)', 'pl. 4-5-6', true));
    gv.appendChild(tInput('vcukor', 'Vércukor (mmol/l)', '', true));
    colL.appendChild(gv);
    colL.appendChild(tInput('serulesek', 'Sérülések / egyéb fizikai eltérések'));
    colL.appendChild(tInput('terapia', 'Terápia'));
    colL.appendChild(tInput('beavatkozasok', 'A helyszínen elvégzett beavatkozások'));

    // — R: javaslat, kért előkészítés —
    colL.appendChild(fejlec('R — Javaslat, kért előkészítés'));
    colL.appendChild(tToggleSor([['rSokktalanito', 'Sokktalanító'], ['rLegut', 'Légútbiztosítási készenlét'],
      ['rNIV', 'NIV'], ['rIzolacio', 'Izoláció']]));
    var gr = el('div', 'param-grid');
    gr.appendChild(tInput('erkezes', 'Várható érkezés', 'óó:pp'));
    gr.appendChild(tInput('diszpecser', 'Diszpécser'));   // a nyomtatványon a Várható érkezés mellett
    gr.appendChild(tInput('fogado', 'Az értesítést fogadó neve'));
    gr.appendChild(tInput('kijeloltEllato', 'Kijelölt ellátó'));
    colL.appendChild(gr);
    // A „Betegút" és a „Kijelölt ellátó" NEM szerepel a TETRA-nyomtatványon: ezek a
    // 4/2026. Igazgatói Utasítás három betegútjából származó kiegészítések. Megjelöljük,
    // hogy az ápoló tudja, mit fog viszontlátni a papíron és mit nem.
    colL.appendChild(el('div', 'skip-hint',
      'A „Kijelölt ellátó” és a „Betegút” mező a 4/2026. Igazgatói Utasításból származó kiegészítés — a TETRA-nyomtatványon nem szerepel.'));
    colL.appendChild(tChoice('betegut', 'Betegút', ['Sokktalanító', 'Őrző', 'Triázs']));
    colL.appendChild(elLabel('Értesítve'));
    colL.appendChild(tToggleSor([['nEllato', 'Ellátó'], ['nNeuro', 'Neurológus'], ['nRadiol', 'Radiológus'],
      ['nBetegszallito', 'Betegszállítók'], ['nShock', 'Sokktalanító team'], ['nCT', 'CT operátor']]));
    colL.appendChild(tInput('ertesitesIdo', 'Értesítés időpontja', 'óó:pp'));

    // — STROKE panel (a nyomtatvány külön blokkja) —
    colR.appendChild(fejlec('STROKE'));
    var strokeKapcs = tToggle('jStroke', 'Stroke gyanú — panel megnyitása');
    colR.appendChild(strokeKapcs);
    if (T.jStroke) {
      var sc = el('div', 'klin-blokk'); sc.style.marginTop = '10px';
      sc.appendChild(tArea('stTunetek', 'Tünetek'));
      // A nyomtatványon KÉT KÜLÖN időpont van — korábban egybeolvasztva szerepeltek.
      // A nyomtatványon HÁROM külön időrubrika van („Tünetkezdet" / „Last seen well" /
      // „és feltalálás ideje"), nem kettő — a PDF szó-koordinátáiból igazolva.
      var gIdo = el('div', 'param-grid');
      gIdo.appendChild(tInput('stTunetkezdet', 'Tünetkezdet', 'óó:pp'));
      gIdo.appendChild(tInput('stLastSeenWell', 'Utoljára tünetmentesen látták („last seen well”)', 'óó:pp'));
      gIdo.appendChild(tInput('stFeltalalasIdo', 'Feltalálás ideje', 'óó:pp'));
      sc.appendChild(gIdo);
      sc.appendChild(tInput('stEszleloElerhetoseg', 'Észlelő személy elérhetősége'));
      // A nyomtatvány HÁROM premorbid állapotot sorol fel: Önellátó / Fennjáró / Fekvő.
      sc.appendChild(tChoice('stPremorbid', 'Premorbid állapot', ['Önellátó', 'Fennjáró', 'Fekvő']));
      var raceSp = el('div'); raceSp.style.height = '8px'; sc.appendChild(raceSp);
      sc.appendChild(raceReszletek(T, function () { render(); }));
      // A nyomtatvány saját döntési szabálya — a RACE-pontból automatikusan kiértékelve.
      var rp = raceOsszeg(T);
      if (rp != null) {
        var lvo = el('div', 'warn');
        if (rp >= 5) {
          lvo.classList.add('warn-danger');
          lvo.innerHTML = ikonSvg('warn') + ' <b>RACE ' + rp + ' — nagyérelzáródás (LVO) gyanúja.</b> A nyomtatvány ennyit mond ki: „RACE score ≥ 5 pont; high LVO risk". A célintézmény kijelölése NEM ezen a lapon dől el — arról a műszakvezető orvos dönt.';
        } else {
          lvo.classList.add('warn-ok');
          lvo.innerHTML = ikonSvg('bulb') + ' RACE ' + rp + ' — a nyomtatvány LVO-küszöbe (5) alatt.';
        }
        sc.appendChild(lvo);
        if (rp >= 5) sc.appendChild(tToggle('stINKertesitve', 'INK (Idegsebészet / neurointervenció) értesítve'));
      }
      sc.appendChild(tChoice('stAntikoag', 'Antikoaguláció', ['Nem', 'Igen']));
      if (T.stAntikoag === 'Igen') sc.appendChild(tInput('stAntikoagMit', 'Szer és utolsó bevétel ideje'));
      colR.appendChild(sc);
    }

    // — Műveletek —
    var row = el('div', 'nav-row'); row.classList.add('no-print');
    var vissza = el('button', 'btn btn-ghost', '← Vissza a triázshoz'); vissza.type = 'button';
    vissza.onclick = function () { S.step = S.tetraElozoStep || 'azonositas'; render(); };
    row.appendChild(vissza);
    row.appendChild(el('span', 'spacer'));
    var cp = elIko('button', 'btn btn-ghost', 'complaint', 'TETRA-lap vágólapra'); cp.type = 'button';
    cp.onclick = function () { vagolapra(tetraSzoveg(), cp); };
    row.appendChild(cp);
    var pr = elIko('button', 'btn', 'printer', 'Nyomtatás'); pr.type = 'button';
    pr.onclick = function () { window.print(); };
    row.appendChild(pr);
    c.appendChild(row);
    fo.appendChild(c);
  };
  // A vágólap-szöveg a VÉGLEGES nyomtatvány sorrendjét követi, hogy a MedSolba
  // illesztett szöveg és a papírlap ugyanaz legyen.
  function tetraSzoveg() {
    var T = S.tetra || {}, L = [];
    function add(lbl, v) { if (v != null && v !== '' && v !== false) L.push(lbl + ': ' + (v === true ? 'IGEN' : v)); }
    function jelek(lista) { var o = []; lista.forEach(function (k) { if (T[k[0]]) o.push(k[1]); }); return o; }
    L.push('SE SÜRGŐSSÉGI ORVOSTANI KLINIKA — ADATFELVÉTELI LAP (TETRA / telefon riasztás)');
    add('Bejelentkező mentőegység', T.mentoegyseg); add('Honnan', T.honnan);
    add('Dátum', T.datum); add('Bejelentkezés időpontja', T.ido);
    L.push('— BETEGADATOK —');
    add('Neme', T.nem); add('Életkor', T.eletkor); add('TAJ-szám', T.taj); add('Beteg neve', T.nev);
    add('Feltalálási hely', T.feltalalasiHely); add('Állandó lakhely / tartózkodási hely', T.lakhely);
    add('Hozzátartozó elérhetősége', T.hozzatartozo);
    L.push('— S: JELENLEGI HELYZET —');
    add('Leírás', T.s);
    var sj = jelek([['jLelegeztetes', 'lélegeztetés'], ['jUjraeleszt', 'újraélesztés'], ['jTudatzavar', 'súlyos tudatzavar'], ['jKeringes', 'keringéstámogatás']]);
    if (sj.length) L.push('Jelölők: ' + sj.join(', '));
    add('Egyéb', T.sEgyeb);
    if (T.jStroke) {
      L.push('— STROKE —');
      add('Tünetek', T.stTunetek);
      add('Tünetkezdet', T.stTunetkezdet);
      add('„Last seen well”', T.stLastSeenWell);
      add('Feltalálás ideje', T.stFeltalalasIdo);
      add('Észlelő személy elérhetősége', T.stEszleloElerhetoseg);
      add('Premorbid állapot', T.stPremorbid);
      var raceOssz = raceOsszeg(T);
      if (raceOssz != null) {
        L.push('RACE score: ' + raceOssz + '/9' + (raceOssz >= 5 ? ' — NAGYÉRELZÁRÓDÁS (LVO) GYANÚJA (a nyomtatvány szerint high LVO risk; célintézmény: a műszakvezető orvos dönt)' : ' (LVO-küszöb alatt)'));
        if (T.stINKertesitve) L.push('INK értesítve: IGEN');
      }
      add('Antikoaguláció', T.stAntikoag); add('  szer és utolsó bevétel', T.stAntikoagMit);
    }
    L.push('— B: ELŐZMÉNYEK, ANAMNÉZIS —');
    var bj = jelek([['bHT', 'HT'], ['bDM', 'DM'], ['bCOPD', 'COPD'], ['bISZB', 'ISZB'], ['bStroke', 'stroke'], ['bPE', 'PE']]);
    if (bj.length) L.push(bj.join(', '));
    add('Egyéb', T.bEgyeb);
    L.push('— A: ÁLLAPOTÉRTÉKELÉS, VITÁLIS PARAMÉTEREK —');
    var vit = [];
    if (T.bp) vit.push('RR ' + T.bp + ' Hgmm'); if (T.p) vit.push('P ' + T.p + '/min');
    if (T.spo2) vit.push('SpO₂ ' + T.spo2 + '%'); if (T.lsz) vit.push('LSZ ' + T.lsz + '/min');
    if (T.temp) vit.push('T ' + T.temp + ' °C'); if (T.gcs) vit.push('GCS ' + T.gcs);
    if (T.vcukor) vit.push('vércukor ' + T.vcukor + ' mmol/l');
    if (vit.length) L.push(vit.join(' · '));
    add('Sérülések / egyéb fizikai eltérések', T.serulesek);
    add('Terápia', T.terapia); add('Helyszíni beavatkozások', T.beavatkozasok);
    L.push('— R: JAVASLAT, KÉRT ELŐKÉSZÍTÉS —');
    var rj = jelek([['rSokktalanito', 'sokktalanító'], ['rLegut', 'légútbiztosítási készenlét'], ['rNIV', 'NIV'], ['rIzolacio', 'izoláció']]);
    if (rj.length) L.push('Kért előkészítés: ' + rj.join(', '));
    add('Várható érkezés', T.erkezes); add('Diszpécser', T.diszpecser); add('Az értesítést fogadó neve', T.fogado);
    add('Kijelölt ellátó', T.kijeloltEllato); add('Betegút', T.betegut);
    var ert = jelek([['nEllato', 'ellátó'], ['nNeuro', 'neurológus'], ['nRadiol', 'radiológus'], ['nBetegszallito', 'betegszállítók'], ['nShock', 'sokktalanító team'], ['nCT', 'CT operátor']]);
    if (ert.length) L.push('Értesítve: ' + ert.join(', '));
    add('Értesítés időpontja', T.ertesitesIdo);
    return L.join('\n');
  }

  // ---- busy-ED gyorsítók: fejléc „Új beteg" + billentyűzet ---------------------
  function fejlecGombok() {
    var hdr = document.querySelector('.hdr');
    if (!hdr || document.getElementById('uj-beteg-hdr')) return;
    var tetraBtn = elIko('button', 'btn btn-ghost', 'radio', 'TETRA'); tetraBtn.id = 'tetra-hdr'; tetraBtn.type = 'button';
    tetraBtn.title = 'TETRA / telefon riasztás adatfelvételi lap (a triázstól független)';
    tetraBtn.classList.add('btn-hdr');
    tetraBtn.onclick = function () { if (S.step !== 'tetra') { S.tetraElozoStep = S.step; S.step = 'tetra'; render(); } };
    hdr.appendChild(tetraBtn);
    var tudBtn = elIko('button', 'btn btn-ghost', 'book', 'Tudástár'); tudBtn.id = 'tud-hdr'; tudBtn.type = 'button';
    tudBtn.title = 'Tudástár — MSTR-szintek, döntési táblák, területi ellátás (TEK), folyamat-szabályok, fogalmak. Bármikor elérhető.';
    tudBtn.classList.add('btn-hdr');
    tudBtn.onclick = function () { if (S.step !== 'tudastar') { S.tudastarElozoStep = S.step; S.step = 'tudastar'; render(); } };
    hdr.appendChild(tudBtn);
    var torlBtn = elIko('button', 'btn btn-ghost', 'bolt', 'Torlódási nézet'); torlBtn.id = 'torl-hdr'; torlBtn.type = 'button';
    torlBtn.title = 'Torlódási eljárásrend (4/2026. Igazgatói Utasítás) — a nézet be-/kikapcsolása. Az elrendelés a műszakvezető orvos hatásköre.';
    torlBtn.classList.add('btn-hdr');
    torlBtn.onclick = torlodasKapcsolo;
    hdr.appendChild(torlBtn);
    var tort = elIko('button', 'btn btn-ghost', 'history', 'Előzmények'); tort.id = 'tort-hdr'; tort.type = 'button';
    tort.classList.add('btn-hdr');
    tort.onclick = elozmenyekMutat;
    hdr.appendChild(tort);
    var b = elIko('button', 'btn btn-ghost', 'refresh', 'Új beteg'); b.id = 'uj-beteg-hdr'; b.type = 'button';
    b.title = 'Befejezett beteg → Előzményekbe; folyamatban lévő → Félbehagyott felvétel közé (nem vész el); majd üres lap.';
    b.onclick = function () {
      if (S.step === 'azonositas' && !vanErdemiKitoltes()) return; // már üres
      ujBeteg();
    };
    hdr.appendChild(b);
  }

  // Enter = Tovább (ha engedélyezett); scanner Entert küld a barcode-mezőben (ott
  // saját kezelés van). Szám/választó fókuszban is működik, textarea-ban nem.
  function billentyuk() {
    document.addEventListener('keydown', function (ev) {
      if (ev.key !== 'Enter') return;
      var a = document.activeElement;
      if (a && (a.tagName === 'TEXTAREA')) return;                // lelet-beillesztés: hagyjuk
      if (a && a.id === 'bc-input') return;                        // barcode: saját kezelés
      if (a && a.classList && a.classList.contains('search-box')) return; // kereső: saját kezelés
      if (aktTovabbBtn && !aktTovabbBtn.disabled) { ev.preventDefault(); aktTovabbBtn.click(); }
    });
  }

  // ---- indítás ----------------------------------------------------------------
  function indit() {
    fejlecGombok(); billentyuk(); disclaimerKapu();
    // A re-triage esedékesség MINDEN rendereléskor az eltárolt abszolút időből számolódik,
    // nem setInterval-ból: altatott mobil-lapon a timer nem tickel, hónapokig nyitva tartott
    // AiO-fülön pedig elcsúszna. Visszatéréskor újrarajzolunk, hogy az idők frissek legyenek.
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden && torlodasAktiv()) render();
    });
    lejartAdatTisztitas();   // a lejárt betegadat törlése MÉG a visszatöltés előtt
    // Adatvesztés-védelem: ha egy félbehagyott (nem lezárt) triázs volt mentve, visszatöltjük.
    try {
      var mentett = localStorage.getItem(STORE_AKTIV);
      if (mentett) {
        var o = JSON.parse(mentett);
        // Egy megkezdett TETRA-lap önmagában is érdemi tartalom (élő riasztás közben töltik),
        // akkor is, ha triázs-adat még nincs mellette — ezért az is visszatöltendő.
        var vanTetra = o && o.tetra && Object.keys(o.tetra).length > 0;
        if (o && o.step && o.step !== 'eredmeny' && ((o.beteg && Object.keys(o.beteg).length) || (o.azon && o.azon.raw) || vanTetra)) {
          var kor = rekordTs(o) == null ? null : (most() - rekordTs(o));
          if (kor != null && kor > NEMA_VISSZATOLTES_ORA * 3600 * 1000) {
            // RÉGI felvétel: nem töltjük vissza némán, mert az úgy látszana, mintha
            // ez a beteg épp most érkezett volna. Megkérdezzük.
            ertekel(); render();
            regiFelvetelKerdes(o, kor);
            return;
          }
          sVisszaallit(o); render(); return;
        }
      }
    } catch (e) {}
    ertekel(); render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', indit);
  else indit();
})();
