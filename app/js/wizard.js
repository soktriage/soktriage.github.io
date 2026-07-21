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
    { id: 'megfigyeles', cim: 'Légzés · keringés · láz' },
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
    var padlo = S.utolso ? S.utolso.szint : null;
    if (padlo == null) return true;                 // nincs még szint → mindent kérdezünk
    var best = mezoLegjobbSzint(fieldId);
    if (best == null) return false;                 // nem tud szintet adni → nem befolyásol
    return best < padlo;                            // csak ha súlyosbíthat (kisebb szám)
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
  function gyermekMezok() { return (KB.inputFields || []).filter(function (f) { return f.pediatricOnly; }); }

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
  function sMentheto() {
    return { step: S.step, beteg: S.beteg, azon: S.azon, catKey: S.catKey, pathLog: S.pathLog, keziMezo: S.keziMezo, panaszKereso: S.panaszKereso, leletRaw: S.leletRaw, leletMsg: S.leletMsg };
  }
  function sVisszaallit(o) {
    S = { step: o.step || 'azonositas', history: [], beteg: o.beteg || {}, azon: o.azon || {}, catKey: o.catKey || null, pathLog: o.pathLog || [], utolso: null, autoMezo: {}, keziMezo: o.keziMezo || {}, panaszKereso: o.panaszKereso || '', leletRaw: o.leletRaw || '', leletMsg: o.leletMsg || '' };
    ertekel();
  }
  function perzisztal() { try { localStorage.setItem(STORE_AKTIV, JSON.stringify(sMentheto())); } catch (e) {} }
  function aktivTorol() { try { localStorage.removeItem(STORE_AKTIV); } catch (e) {} }
  function vanErdemiKitoltes() { return (S.beteg && Object.keys(S.beteg).length > 0) || (S.azon && S.azon.raw) || !!S.beteg.vezetoPanaszId; }
  function parkoltak() { try { return JSON.parse(localStorage.getItem(STORE_PARK) || '[]'); } catch (e) { return []; } }
  function parkoltakMent(arr) { try { localStorage.setItem(STORE_PARK, JSON.stringify(arr)); } catch (e) {} }
  function ujId() { return 'p' + Date.now() + Math.floor(Math.random() * 1000); }
  function betegCimke() {
    if (S.azon && (S.azon.nev || S.azon.id)) return S.azon.nev || S.azon.id;
    var p = (KB.complaints || []).filter(function (x) { return x.id === S.beteg.vezetoPanaszId; })[0];
    if (p) return p.name;
    if (S.beteg.eletkorEv != null) return S.beteg.eletkorEv + ' éves beteg';
    return 'Névtelen beteg';
  }
  function parkol() {
    if (!vanErdemiKitoltes()) return false;
    var arr = parkoltak();
    arr.push({ id: ujId(), cimke: betegCimke(), lepesCim: (LEPESEK[lepesIndex(S.step)] || {}).cim || '', szint: (S.utolso && S.utolso.szint) || null, S: sMentheto() });
    parkoltakMent(arr); return true;
  }
  function parkoltBetolt(id) {
    var arr = parkoltak(), idx = -1;
    for (var i = 0; i < arr.length; i++) if (arr[i].id === id) { idx = i; break; }
    if (idx < 0) return;
    var cel = arr[idx]; arr.splice(idx, 1);
    if (vanErdemiKitoltes() && S.step !== 'eredmeny') arr.push({ id: ujId(), cimke: betegCimke(), lepesCim: (LEPESEK[lepesIndex(S.step)] || {}).cim || '', szint: (S.utolso && S.utolso.szint) || null, S: sMentheto() });
    parkoltakMent(arr);
    sVisszaallit(cel.S); render();
  }
  function parkoltTorol(id) {
    var arr = parkoltak().filter(function (x) { return x.id !== id; });
    parkoltakMent(arr); render();
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
  function staffAktiv() { try { return localStorage.getItem(STORE_STAFF_AKTIV) || ''; } catch (e) { return ''; } }
  function staffAktivMent(nev) { try { if (nev) localStorage.setItem(STORE_STAFF_AKTIV, nev); } catch (e) {} }
  function staffAktivTorol() { try { localStorage.removeItem(STORE_STAFF_AKTIV); } catch (e) {} }

  // ---- Pilot/teszt figyelmeztető kapu (első betöltéskor, amíg el nem fogadja) ------
  // Csak a gombbal zárható (háttérre kattintás szándékosan nem dobja el).
  var STORE_DISCLAIMER = 'mstr_disclaimer_ack_v2';
  function disclaimerElfogadva() { try { return localStorage.getItem(STORE_DISCLAIMER) === '1'; } catch (e) { return true; } }
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
    panel.appendChild(elIko('h3', null, 'history', 'Korábbi betegek (' + arr.length + ')'));
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
    $('kb-verzio').textContent = KB.meta ? ('Tudásbázis v' + KB.meta.version) : 'Döntéstámogató';
    if (S.step === 'tetra') {
      $('lv-chip').hidden = true;
      $('prog-step').textContent = 'TETRA — telefon/rádió riasztás';
      $('prog-pct').textContent = '';
      $('prog-fill').style.width = '100%';
      $('crumbs').innerHTML = '';
      return;
    }
    if (S.step === 'betegut') {
      $('prog-step').textContent = 'Betegút / elhelyezés (diszpozíció)';
      $('prog-pct').textContent = '';
      $('prog-fill').style.width = '100%';
      // a szint-chip + morzsa marad kontextusnak (nem térünk vissza korán)
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
      var korTxt = S.beteg.korKat ? S.beteg.korKat : (S.beteg.eletkorEv != null ? (S.beteg.eletkorEv + ' év') : (S.beteg.eletkorHonap + ' hó'));
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
      var bsp = el('span'); bsp.innerHTML = ikonSvg('warn') + '<span>MSTR 1 — ' + nevSzint(1) + ': azonnali életmentő ellátás! További kitöltés nem szükséges.</span>'; ban.appendChild(bsp);
      var g = el('button', 'btn', 'Ugrás az eredményhez →'); g.type = 'button';
      g.onclick = function () { megy('eredmeny'); };
      ban.appendChild(g);
      b.appendChild(ban);
    }
  }

  // ---- kártya-építő segédek ---------------------------------------------------
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
    if (field.type === 'checkbox') {
      var box2 = el('div', 'opts opts-bool');
      [['Igen', true], ['Nem', false]].forEach(function (par) {
        var kivalasztott = S.beteg[field.id] === par[1];   // igen→true, nem→false (a nem-válasz külön: undefined/null)
        var b2 = el('button', 'opt' + (kivalasztott ? ' sel' : ''), par[0]); b2.type = 'button';
        var body2 = el('div', 'opt-body'); body2.appendChild(el('div', 'opt-text', par[0])); b2.textContent = '';
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
    rendezett.forEach(function (op) {
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
    (RENDER[S.step] || RENDER.kritikus)(fo);
    fejlecFrissit();
    kritikusBanner();
    parkoltSavRajzol();
    perzisztal();
  }

  // Parkolt (függő) betegek sora — egy koppintás a visszatöltéshez.
  function parkoltSavRajzol() {
    var sav = $('parkolt-sav'); if (!sav) return;
    var arr = parkoltak();
    sav.innerHTML = '';
    if (!arr.length) { sav.hidden = true; return; }
    sav.hidden = false;
    var pcimke = el('span', 'parkolt-cimke'); pcimke.innerHTML = ikonSvg('pause') + '<span>Függő betegek (' + arr.length + '):</span>'; sav.appendChild(pcimke);
    arr.forEach(function (pk) {
      var chip = el('span', 'parkolt-chip');
      var b = el('button', null, pk.cimke + ' · ' + (pk.lepesCim || '')); b.type = 'button';
      b.title = 'Visszatöltés'; b.onclick = function () { parkoltBetolt(pk.id); };
      if (pk.szint) { var bd = el('span', 'opt-badge', pk.szint); bd.style.background = szinSzint(pk.szint); b.appendChild(bd); }
      chip.appendChild(b);
      var x = ikonBtnEl('parkolt-x', 'close'); x.title = 'Elvetés'; x.onclick = function () { parkoltTorol(pk.id); };
      chip.appendChild(x);
      sav.appendChild(chip);
    });
  }

  var RENDER = {};

  RENDER.azonositas = function (fo) {
    var c = kartya('Lépés 1', 'Ápoló és beteg', 'Vonalkód-scanner vagy kézi bevitel. Kihagyható.');

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
    staff.oninput = function () { S.azon.staff = this.value; };
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
    g2.appendChild(elLabel('Beteg azonosító — KBA / vonalkód'));
    var bc = el('input'); bc.type = 'text'; bc.id = 'bc-input';
    bc.style.cssText = 'border:2px solid var(--accent);border-radius:9px;padding:12px 10px;font-size:16px;font-family:\'SF Mono\',Consolas,monospace;width:100%';
    bc.value = S.azon.raw || ''; bc.placeholder = 'Csippantás ide, vagy KBA szám…';
    // scanner Entert küld → feldolgozás ÉS továbblépés (gyors felvétel)
    bc.onkeydown = function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); feldolgozBc(bc.value); if (S.azon.raw) { staffMent(S.azon.staff); naplo('Azonosítás', (S.azon.nev || '') + (S.azon.id ? ' · ' + S.azon.id : '')); megy('kritikus'); } } };
    bc.onchange = function () { feldolgozBc(bc.value); };
    g2.appendChild(bc);
    c.appendChild(g2);
    var infoAzon = el('div', 'lelet-msg'); infoAzon.id = 'azon-msg';
    if (S.azon.id || S.azon.nev) infoAzon.innerHTML = '<span class="ok">Beteg: ' + (S.azon.nev || '') + (S.azon.id ? ' · azonosító ' + S.azon.id : '') + '</span>';
    c.appendChild(infoAzon);

    function feldolgozBc(v) {
      var p = parseAzonosito(v);
      S.azon.id = p.id; S.azon.nev = p.nev; S.azon.szul = p.szul; S.azon.raw = p.raw;
      $('azon-msg').innerHTML = (p.id || p.nev) ? ('<span class="ok">Rögzítve: ' + (p.nev || '') + (p.id ? ' · azonosító ' + p.id : '') + '</span>') : '';
    }

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
      : osszeg >= 5 ? 'Magas LVO-valószínűség — megfontolandó direkt szállítás thrombectomiás centrumba (Komprehenzív Stroke Center)'
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
    var c = kartya('Lépés 2', 'Első megtekintés (look test)', 'Kritikus megjelenés → azonnali MSTR 1.');
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
    var c = kartya('Lépés 3', 'A beteg életkora', 'Felnőtt, vagy gyermeknél pontos kor.');
    // A felnőtt életkornak a forrás szerint NINCS triázs-jelentősége (egyetlen szabály sem használ felnőtt
    // kor-küszöböt); csak a felnőtt/gyermek határ (18 év) számít. Ezért egyetlen „Felnőtt" gomb. (A ≥80 majd
    // a betegút/diszpozíció-modulban kap jelentőséget — ott vezetjük be.)
    c.appendChild(el('div', 'card-eye', 'Felnőtt'));
    var felnottBtn = el('button', 'kor-chip kor-chip-full' + (S.beteg.korKat === 'Felnőtt' ? ' sel' : '')); felnottBtn.type = 'button';
    felnottBtn.innerHTML = '<span class="kor-chip-fo">Felnőtt</span><span class="kor-chip-al">18 év felett</span>';
    felnottBtn.onclick = function () { S.beteg.eletkorEv = 45; S.beteg.eletkorHonap = null; S.beteg.korKat = 'Felnőtt'; ertekel(); naplo('Életkor', 'Felnőtt (≥18 év)'); megy('panaszKat'); };
    c.appendChild(felnottBtn);
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
    var c = kartya('Lépés 4', 'Vezető panasz', 'Keresés (köznyelvi szó is jó) vagy böngészés szervrendszer szerint.');
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
    var c = kartya('Lépés 5', 'Vitálparaméterek', 'Opcionális.');
    // Széles képernyőn két oszlop: bal = lelet-beillesztés, jobb = ABCDE-vitálok (nincs görgetés).
    var wrap = el('div', 'vital-cols');
    var colL = el('div'); var colR = el('div');
    // lelet-beillesztés (bal)
    var ta = el('textarea', 'lelet'); ta.id = 'lelet-ta'; ta.placeholder = 'MedSol-lelet szövege ide illeszthető — a paramétereket átveszi. Kézi kitöltés is lehet.';
    if (S.leletRaw) ta.value = S.leletRaw;
    ta.oninput = function () { S.leletRaw = this.value; };
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
      ['hr', 'Pulzus (HR)', '/perc', 0, 350, 1],
      ['sys', 'Vérnyomás SYS', 'Hgmm', 0, 350, 1],
      ['dia', 'Vérnyomás DIA', 'Hgmm', 0, 250, 1],
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
    if (S.beteg[kulcs] != null) inp.value = S.beteg[kulcs];
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
      ertekel(); fejlecFrissit(); kritikusBanner(); frissitNav();
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
    inp.oninput = function () { S.beteg[kulcs] = this.value === '' ? null : parseFloat(this.value); S.keziMezo[kulcs] = true; ertekel(); fejlecFrissit(); kritikusBanner(); };
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
    var c = kartya('Lépés 6', 'Elsődleges meghatározók (A–B, C) és módosítók', 'ABCDE szerint.');
    c.appendChild(nincsModositoGomb('Nincs eltérés az elsődleges meghatározókban', function () { megy(kovetkezo('megfigyeles', 1)); }));
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
    var c = kartya('Lépés 7', 'Fájdalom', 'VAS 0–10; fájdalomnál lokalizáció + jelleg.');
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
      hint: 'A fájdalom pontszáma (és 0-nál nagyobb pontszám esetén a helye + jellege) kötelező — enélkül a besorolás alultriázsolhat.'
    }));
    fo.appendChild(c);
  };

  RENDER.modosito = function (fo) {
    var p = (KB.complaints || []).filter(function (x) { return x.id === S.beteg.vezetoPanaszId; })[0];
    var c = kartya('Lépés 8', 'Panasz-specifikus módosítók', 'A vezető panaszhoz tartozó kérdések.');
    // Ha a panasznak NINCS alapszintje (pl. csecsemő-apnoe: a súlyosság 1/2/3 közt csak a
    // módosítóból derül ki), a módosító megadása KÖTELEZŐ — enélkül a rendszer "nincs
    // javaslat" zsákutcába futna. Ilyenkor a gyors-kihagyás gomb nem jelenik meg, a Tovább védett.
    var kotelezo = !(S.utolso && S.utolso.szint != null);
    if (!kotelezo) {
      c.appendChild(nincsModositoGomb('Nincs releváns panasz-specifikus módosító', function () { megy(kovetkezo('modosito', 1)); }));
    }
    relevansMezok(lathatoModositok()).forEach(function (f) {
      c.appendChild(el('div', 'card-eye', f.label));
      c.appendChild(opcioKartyak(f, function () { render(); }));
      var sp = el('div'); sp.style.height = '14px'; c.appendChild(sp);
    });
    c.appendChild(navSor({
      tovabb: function () { megy(kovetkezo('modosito', 1)); },
      validate: function () { return !!(S.utolso && S.utolso.szint != null); },
      hint: 'Ehhez a panaszhoz kötelező megadni egy választ — enélkül nem adható triázs-szint.'
    }));
    fo.appendChild(c);
  };
  // Gyors-affordancia: „nincs releváns módosító" → egy koppintás továbblép (baseline érvényes; nem tippel).
  function nincsModositoGomb(cimke, tovabbFn) {
    var b = el('button', 'nincs-mod-btn'); b.type = 'button';
    b.innerHTML = cimke + ' <span class="nm-arrow">→</span>';
    b.onclick = tovabbFn;
    return b;
  }

  RENDER.gyermek = function (fo) {
    var c = kartya('Gyermek', 'Gyermek-specifikus megfigyelések', '');
    relevansMezok(gyermekMezok()).forEach(function (f) {
      c.appendChild(el('div', 'card-eye', f.label));
      c.appendChild(opcioKartyak(f, function () { render(); }));
      var sp = el('div'); sp.style.height = '14px'; c.appendChild(sp);
    });
    c.appendChild(navSor({ tovabb: function () { megy('eredmeny'); } }));
    fo.appendChild(c);
  };

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
    if (S.beteg.korKat) azon.push(S.beteg.korKat);
    else if (S.beteg.eletkorEv != null) azon.push(S.beteg.eletkorEv + ' év');
    else if (S.beteg.eletkorHonap != null) azon.push(S.beteg.eletkorHonap + ' hónapos');
    if (azon.length) so.push('Beteg: ' + azon.join(' · '));
    if (S.azon.staff) so.push('Triázs ápoló: ' + S.azon.staff);
    var pn = panaszNeve(); if (pn) so.push('Vezető panasz: ' + pn);
    var vit = [];
    if (S.beteg.hr != null) vit.push('HR ' + S.beteg.hr + '/min');
    if (S.beteg.rr != null) vit.push('Légzés ' + S.beteg.rr + '/min');
    if (S.beteg.spo2 != null) vit.push('SpO2 ' + S.beteg.spo2 + '%');
    if (S.beteg.sys != null && S.beteg.dia != null) vit.push('RR ' + S.beteg.sys + '/' + S.beteg.dia + ' Hgmm');
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
      badge.appendChild(el('div', 'result-wait', 'Orvosi értékelés: ' + (lvDef.targetTime || '') + ' · Újraértékelés: ' + (lvDef.reassess || '')));
      colA.appendChild(badge);
      var reason = el('div', 'reason');
      reason.innerHTML = '<b>Döntő szabály:</b> ' + (er.dontoSzabalyok || []).map(function (d) {
        var f = d.forras || [];
        var src = f.length ? ' <span class="reason-src">' + Folyamatabra.forrasSzoveg(f.slice(0, 2)) + (f.length > 2 ? ' +' + (f.length - 2) : '') + '</span>' : '';
        return d.nev + src;
      }).join('; ');
      colA.appendChild(reason);
      // dokumentáció: összegzés vágólapra (MedSolba illeszthető) + nyomtatás
      var dok = el('div', 'nav-row'); dok.style.marginTop = '4px'; dok.classList.add('no-print');
      var cp = elIko('button', 'btn btn-ghost', 'complaint', 'Összegzés vágólapra'); cp.type = 'button';
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

    // figyelmeztetések (összevont, hiányzó mezők)
    var w = warnSor(er);
    if (w) colA.appendChild(w);

    // dinamikus kihagyás átlátható jelzése
    var kih = kihagyottKerdesek();
    if (kih > 0 && er.szint != null) {
      var note = el('div', 'reason');
      note.style.background = '#EAFAF1'; note.style.color = 'var(--l4t)';
      note.innerHTML = ikonSvg('bolt') + ' ' + kih + ' kérdés kihagyva — az <b>MSTR ' + er.szint + '</b> padlót nem befolyásolják.';
      colA.appendChild(note);
    }

    // döntési napló (ápolói lépések) — jobb oszlop
    if (S.pathLog.length) {
      var pl = el('div', 'pathlog');
      pl.appendChild(el('h3', null, 'Kitöltési napló'));
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

  function warnSor(er) {
    // Kritikus, döntő szintnél (MSTR 1-2) ne nyaggassunk opcionális mezőkért.
    if (er && er.szint != null && er.szint <= 2) return null;
    var mezoCimke = {}; (KB.inputFields || []).forEach(function (f) { mezoCimke[f.id] = f.label; });
    var FIX = { hr: 'Pulzus', rr: 'Légzésszám', sys: 'Vérnyomás SYS', dia: 'Vérnyomás DIA', spo2: 'SpO₂', temp: 'Testhő', gcs: 'GCS', fajdalomPont: 'Fájdalom (0–10)' };
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
    var nev = { hr: 'HR', rr: 'RESP', map: 'MAP', spo2: 'SpO₂', sys: 'SYS', dia: 'DIA', temp: 'Testhő', gcsE: 'GCS-szem', gcsV: 'GCS-verb.', gcsM: 'GCS-mot.' };
    Object.keys(e.parameterek).forEach(function (k) { if (k !== 'map') S.beteg[k] = e.parameterek[k]; });
    if (e.azonositok.eletkorEv != null) S.beteg.eletkorEv = e.azonositok.eletkorEv;
    if (e.azonositok.eletkorHonap != null) S.beteg.eletkorHonap = e.azonositok.eletkorHonap;
    ertekel();
    var html = '<span class="ok">Átvéve: ' + e.talalatok.filter(function (k) { return k !== 'map'; }).map(function (k) { return nev[k] || k; }).join(', ') + '.</span>';
    if (e.azonositok.nev) html += ' Beteg: <b>' + e.azonositok.nev + '</b>';
    if (e.azonositok.eletkorEv != null) html += ' (' + e.azonositok.eletkorEv + ' év)';
    if (e.azonositok.kba) html += ' · KBA: ' + e.azonositok.kba;
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
        if (v == null) td.innerHTML = '<span class="hianyzo-ertek">nincs megadva</span>'; else td.textContent = String(v);
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
    var c = kartya('Betegút', 'Elhelyezés / diszpozíció', BU.megjegyzes || '');

    var ered = el('div', 'eredmeny-cols');
    var colA = el('div'); var colB = el('div');
    ered.appendChild(colA); ered.appendChild(colB); c.appendChild(ered);

    if (szint === 1 || szint === 2) {
      var fb = el('div', 'warn'); fb.style.background = '#FDECEA'; fb.style.borderColor = 'var(--l1s)'; fb.style.color = 'var(--l1t)';
      fb.innerHTML = ikonSvg('warn') + ' <b>MSTR ' + szint + '</b> — <b>fekvőbeteg részleg</b> (azonnali/kritikus ellátás). A járóbeteg-checklist kizárólag MSTR III–V betegnél alkalmazható.';
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
        if (S.betegut._auto[f.id]) { var au = el('span', 'betegut-auto'); au.textContent = ' (előtöltve)'; t.appendChild(au); }
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
      var fr = el('button', 'tetra-toggle' + (S.betegut.frailty ? ' on' : '')); fr.type = 'button'; fr.textContent = '≥ 80 év vagy magas frailty';
      fr.style.marginTop = '10px';
      fr.onclick = function () { S.betegut.frailty = !S.betegut.frailty; render(); };
      colA.appendChild(fr);

      // — eredmény —
      var felt = BU.jaroFeltetelek || [];
      var vanNem = false, hianyzo = 0;
      felt.forEach(function (f) { var v = S.betegut[f.id]; if (v === 'nem') vanNem = true; else if (v !== 'igen') hianyzo++; });
      var out = el('div', 'betegut-eredmeny');
      if (vanNem) { out.className += ' fekvo'; out.innerHTML = '<b>Fekvőbeteg részleg</b><br>Legalább egy járó-kritérium nem teljesül.'; }
      else if (hianyzo > 0) { out.className += ' pending'; out.innerHTML = 'Válaszolj még ' + hianyzo + ' kérdésre a döntéshez.'; }
      else {
        out.className += ' jaro';
        out.innerHTML = '<b>Járóbeteg részlegre irányítható</b> — minden kritérium teljesül.' + (S.betegut.frailty ? '<br>' + ikonSvg('warn') + ' ' + (BU.eletkorMegjegyzes || '') : '');
      }
      colA.appendChild(out);
    }

    // — SE SOK felvételi szabályok (referencia) + linkek — jobb oszlop —
    var fsz = BU.felvetelSzabalyok || {};
    if (fsz.pontok) {
      var det = el('details', 'detour-wrap');
      det.appendChild(el('summary', null, (fsz.cim || 'SE SOK felvételi szabályok')));
      var body = el('div', 'detour-body');
      fsz.pontok.forEach(function (p) { var d = el('div'); d.style.cssText = 'font-size:12.5px;line-height:1.5;margin-bottom:6px;color:var(--text)'; d.textContent = p; body.appendChild(d); });
      if (fsz.forras) { var fr2 = el('div', 'reszlet-forras'); fr2.innerHTML = ikonSvg('book') + '<span>' + fsz.forras + '</span>'; body.appendChild(fr2); }
      det.appendChild(body); colB.appendChild(det);
    }
    if (BU.linkek && BU.linkek.length) {
      colB.appendChild(el('div', 'card-eye', 'Ellátási terület lekérdezése (külső)'));
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
    var cp2 = elIko('button', 'btn btn-ghost', 'complaint', 'Összegzés vágólapra'); cp2.type = 'button';
    cp2.onclick = function () { vagolapra(betegutSzoveg(), cp2); };
    row2.appendChild(cp2);
    c.appendChild(row2);
    fo.appendChild(c);
  };

  function betegutSzoveg() {
    var BU = KB.betegut || {}, er = S.utolso || {}, L = [];
    L.push('BETEGÚT / ELHELYEZÉS — MSTR ' + (er.szint != null ? er.szint : '?'));
    if (er.szint === 1 || er.szint === 2) { L.push('→ Fekvőbeteg részleg (MSTR ' + er.szint + ').'); return L.join('\n'); }
    (BU.jaroFeltetelek || []).forEach(function (f) { L.push((S.betegut[f.id] === 'igen' ? '[IGEN] ' : S.betegut[f.id] === 'nem' ? '[NEM]  ' : '[ ? ]  ') + f.szoveg); });
    if (S.betegut && S.betegut.frailty) L.push('≥80 év / magas frailty: IGEN — gondos mérlegelés, lehetőleg kísérővel.');
    var vanNem = (BU.jaroFeltetelek || []).some(function (f) { return S.betegut[f.id] === 'nem'; });
    var teljes = (BU.jaroFeltetelek || []).every(function (f) { return S.betegut[f.id] === 'igen'; });
    L.push('DISZPOZÍCIÓ: ' + (vanNem ? 'Fekvőbeteg részleg' : teljes ? 'Járóbeteg részlegre irányítható' : 'Hiányos — kézi döntés'));
    return L.join('\n');
  }

  // ===== TETRA / telefon riasztás adatfelvételi lap (a triázstól független modul) =====
  RENDER.tetra = function (fo) {
    S.tetra = S.tetra || {};
    var T = S.tetra;
    var c = kartya('TETRA', 'Adatfelvételi lap — TETRA / telefon riasztás', 'Prehospitális riasztás rögzítése (SBAR).');

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
    function fejlec(txt) { return el('div', 'klin-fejlec', txt); }

    // Széles képernyőn 2 oszlop: bal = klinikai narratíva (SBAR + vitál + javaslat), jobb = meta (bejelentkezés,
    // beteg, jelölők). A stroke-panel + műveletek teljes szélességben alul.
    var cols = el('div', 'tetra-cols'); var colL = el('div'); var colR = el('div');
    cols.appendChild(colL); cols.appendChild(colR); c.appendChild(cols);

    // — colL: SBAR + vitálok + javaslat —
    colL.appendChild(fejlec('SBAR'));
    colL.appendChild(tArea('s', 'S — Helyzet (situation)'));
    colL.appendChild(tArea('b', 'B — Háttér (background)'));
    colL.appendChild(tArea('a', 'A — Állapotfelmérés (assessment)'));
    colL.appendChild(fejlec('Vitálparaméterek (ABCDE)'));
    var gv = el('div', 'param-grid');
    // A–B (légzés) → C (keringés) — konzisztens a fő vitál-lépéssel
    gv.appendChild(tInput('lsz', 'Légzésszám (/min)', '', true));
    gv.appendChild(tInput('spo2', 'SpO₂ (%)', '', true));
    gv.appendChild(tInput('p', 'Pulzus (P /min)', '', true));
    gv.appendChild(tInput('bp', 'Vérnyomás (RR)', 'pl. 130/80', true));
    colL.appendChild(gv);
    colL.appendChild(tArea('r', 'R — Javaslat / teendő (recommendation)'));

    // — colR: bejelentkezés + beteg + jelölők —
    colR.appendChild(fejlec('Bejelentkezés'));
    var g0 = el('div', 'param-grid');
    g0.appendChild(tInput('ido', 'Idő (óó:pp)', 'pl. 14:05'));
    g0.appendChild(tInput('bejelentkezo', 'Bejelentkező'));
    g0.appendChild(tInput('honnan', 'Honnan'));
    g0.appendChild(tInput('diszpecser', 'Diszpécser'));
    colR.appendChild(g0);
    colR.appendChild(fejlec('Beteg'));
    var g1 = el('div', 'param-grid');
    g1.appendChild(tInput('nev', 'Beteg neve'));
    g1.appendChild(tInput('taj', 'TAJ / azonosító', '', true));
    g1.appendChild(tInput('eletkor', 'Életkor (év)'));
    colR.appendChild(g1);
    colR.appendChild(tChoice('nem', 'Neme', ['Férfi', 'Nő']));
    var g1b = el('div', 'param-grid');
    g1b.appendChild(tInput('hozzatartozo', 'Hozzátartozó elérhetősége'));
    g1b.appendChild(tInput('erkezes', 'Várható érkezés (óó:pp)', 'pl. 14:25'));
    colR.appendChild(g1b);
    colR.appendChild(fejlec('Jelölők'));
    var jel = el('div'); jel.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap';
    jel.appendChild(tToggle('jLelegeztetes', 'Lélegeztetés'));
    jel.appendChild(tToggle('jKeringes', 'Keringéstámogatás'));
    jel.appendChild(tToggle('jUjraeleszt', 'Újraélesztés'));
    jel.appendChild(tToggle('jTudatzavar', 'Súlyos tudatzavar'));
    jel.appendChild(tToggle('jStroke', 'Stroke gyanú (24 h)'));
    colR.appendChild(jel);

    // — Kritikus stroke adatok (feltételes, teljes szélességben) —
    if (T.jStroke) {
      var sc = el('div', 'klin-blokk'); sc.style.marginTop = '14px';
      sc.appendChild(fejlec('Kritikus stroke adatok (24 h-n belüli gyanú)'));
      var gs = el('div', 'param-grid');
      gs.appendChild(tInput('stTunetkezdet', 'Tünetkezdet / „last seen well" (óó:pp)'));
      gs.appendChild(tInput('stFeltalalas', 'Feltalálás ideje (óó:pp)'));
      sc.appendChild(gs);
      var raceSp = el('div'); raceSp.style.height = '10px'; sc.appendChild(raceSp);
      sc.appendChild(raceReszletek(T, function () { render(); }));
      var pmr = tChoice('stPremorbid', 'Premorbid állapot', ['Önellátó', 'Fennjáró', 'Fekvő']); sc.appendChild(pmr);
      var ant = tChoice('stAntikoag', 'Antikoaguláns?', ['Nem', 'Igen']); sc.appendChild(ant);
      if (T.stAntikoag === 'Igen') sc.appendChild(tInput('stAntikoagMit', 'Mit és utoljára mikor?'));
      sc.appendChild(tInput('stEszlelo', 'Észlelő személy elérhetősége'));
      sc.appendChild(fejlec('Értesítve'));
      var ert = el('div'); ert.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap';
      [['nEllato', 'Ellátó'], ['nShock', 'Shocktalanító'], ['nNeuro', 'Neurológus'], ['nCT', 'CT operátor'], ['nRadiol', 'Radiológus'], ['nBetegszallito', 'Betegszállítók']].forEach(function (k) { ert.appendChild(tToggle(k[0], k[1])); });
      sc.appendChild(ert);
      c.appendChild(sc);
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

  function tetraSzoveg() {
    var T = S.tetra || {}, L = [];
    function add(lbl, v) { if (v != null && v !== '' && v !== false) L.push(lbl + ': ' + (v === true ? 'IGEN' : v)); }
    L.push('TETRA / TELEFON RIASZTÁS — ADATFELVÉTELI LAP');
    add('Idő', T.ido); add('Bejelentkező', T.bejelentkezo); add('Honnan', T.honnan); add('Diszpécser', T.diszpecser);
    L.push('— Beteg —');
    add('Név', T.nev); add('TAJ/azonosító', T.taj); add('Életkor', T.eletkor); add('Neme', T.nem);
    add('Hozzátartozó', T.hozzatartozo); add('Várható érkezés', T.erkezes);
    L.push('— SBAR —');
    add('S (helyzet)', T.s); add('B (háttér)', T.b); add('A (állapot)', T.a);
    var vit = [];
    if (T.lsz) vit.push('LSZ ' + T.lsz + '/min'); if (T.spo2) vit.push('SpO2 ' + T.spo2 + '%'); if (T.p) vit.push('P ' + T.p + '/min'); if (T.bp) vit.push('RR ' + T.bp);
    if (vit.length) L.push('Vitálisok: ' + vit.join(' · '));
    add('R (javaslat)', T.r);
    var jel = [];
    if (T.jLelegeztetes) jel.push('lélegeztetés'); if (T.jKeringes) jel.push('keringéstámogatás'); if (T.jUjraeleszt) jel.push('újraélesztés');
    if (T.jTudatzavar) jel.push('súlyos tudatzavar'); if (T.jStroke) jel.push('STROKE-gyanú (24 h)');
    if (jel.length) L.push('Jelölők: ' + jel.join(', '));
    if (T.jStroke) {
      L.push('— KRITIKUS STROKE ADATOK —');
      add('Tünetkezdet / last seen well', T.stTunetkezdet); add('Feltalálás ideje', T.stFeltalalas);
      var raceOssz = raceOsszeg(T);
      if (raceOssz != null) add('RACE score', raceOssz + '/9' + (raceOssz >= 5 ? ' (magas LVO-valószínűség)' : ''));
      add('Premorbid', T.stPremorbid); add('Antikoaguláns', T.stAntikoag); add('  (mit/mikor)', T.stAntikoagMit);
      add('Észlelő elérhetősége', T.stEszlelo);
      var ert = [];
      [['nEllato', 'ellátó'], ['nShock', 'shocktalanító'], ['nNeuro', 'neurológus'], ['nCT', 'CT operátor'], ['nRadiol', 'radiológus'], ['nBetegszallito', 'betegszállítók']].forEach(function (k) { if (T[k[0]]) ert.push(k[1]); });
      if (ert.length) L.push('Értesítve: ' + ert.join(', '));
    }
    return L.join('\n');
  }

  // ---- busy-ED gyorsítók: fejléc „Új beteg" + billentyűzet ---------------------
  function fejlecGombok() {
    var hdr = document.querySelector('.hdr');
    if (!hdr || document.getElementById('uj-beteg-hdr')) return;
    var tetraBtn = elIko('button', 'btn btn-ghost', 'radio', 'TETRA'); tetraBtn.id = 'tetra-hdr'; tetraBtn.type = 'button';
    tetraBtn.title = 'TETRA / telefon riasztás adatfelvételi lap (a triázstól független)';
    tetraBtn.style.cssText = 'padding:10px 12px;font-size:13px';
    tetraBtn.onclick = function () { if (S.step !== 'tetra') { S.tetraElozoStep = S.step; S.step = 'tetra'; render(); } };
    hdr.appendChild(tetraBtn);
    var tort = elIko('button', 'btn btn-ghost', 'history', 'Előzmények'); tort.id = 'tort-hdr'; tort.type = 'button';
    tort.style.cssText = 'padding:10px 12px;font-size:13px';
    tort.onclick = elozmenyekMutat;
    hdr.appendChild(tort);
    var b = elIko('button', 'btn btn-ghost', 'refresh', 'Új beteg'); b.id = 'uj-beteg-hdr'; b.type = 'button';
    b.title = 'Befejezett beteg → Előzményekbe; folyamatban lévő → Függő betegek közé (nem vész el); majd üres lap.';
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
    // Adatvesztés-védelem: ha egy félbehagyott (nem lezárt) triázs volt mentve, visszatöltjük.
    try {
      var mentett = localStorage.getItem(STORE_AKTIV);
      if (mentett) {
        var o = JSON.parse(mentett);
        if (o && o.step && o.step !== 'eredmeny' && ((o.beteg && Object.keys(o.beteg).length) || (o.azon && o.azon.raw))) {
          sVisszaallit(o); render(); return;
        }
      }
    } catch (e) {}
    ertekel(); render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', indit);
  else indit();
})();
