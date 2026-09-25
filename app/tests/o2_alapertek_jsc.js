// Regressziós ellenőrzés (jsc): az „akut vagy krónikus szaturáció?” kérdés elérhetősége.
// Hiba volt (2026-09-25): felnőtt, SpO2 88, kitöltetlen akut/krónikus → MSTR 1 a szaturációs
// padlóból, és a felület emiatt az egész megfigyelés-lépést átugrotta, így a forrás szerinti
// krónikus/COPD-enyhítés (tankönyv 31. o.) elérhetetlen volt. A motor most megnevezi, mely
// padlók függnek ettől a választól (o2AlapertekFuggo); a felület ezt használja a kihagyásnál.
// Futtatás a projekt gyökeréből:  jsc app/tests/o2_alapertek_jsc.js
var g = this;
load('./app/js/kb.js');
load('./app/js/engine.js');
var KB = g.MSTR_KB, M = g.TriazsMotor, ok = 0, hiba = 0;
function ell(nev, felt) { if (felt) ok++; else { hiba++; print('HIBA: ' + nev); } }
function ert(b) { return M.triazsKiertekel(b, KB); }

var a = ert({ eletkorEv: 60, spo2: 88 });
ell('kitöltetlen = akut → MSTR 1 (biztonságos alapeset)', a.szint === 1);
ell('a súlyos szaturációs padló függ a választól', a.o2AlapertekFuggo.indexOf('esc_spo2_felnott_sulyos') !== -1);

var k = ert({ eletkorEv: 60, spo2: 88, o2Akut: 'kronikus' });
ell('krónikus válasz → a szaturációs padló nem tüzel', k.szint !== 1 && k.dontoSzabalyok.every(function (d) { return d.szabalyId.indexOf('esc_spo2_felnott') !== 0; }));
ell('krónikus válasz után is releváns marad (visszaállítható)', k.o2AlapertekFuggo.length > 0);

var ak = ert({ eletkorEv: 60, spo2: 88, o2Akut: 'akut' });
ell('akut válasz → MSTR 1', ak.szint === 1);

ell('SpO2 91 / 94 → közepes / enyhe padló is függ', ert({ eletkorEv: 60, spo2: 91 }).o2AlapertekFuggo.length === 1 && ert({ eletkorEv: 60, spo2: 94 }).o2AlapertekFuggo.length === 1);
ell('normál SpO2 (96) → nincs függő padló', ert({ eletkorEv: 60, spo2: 96 }).o2AlapertekFuggo.length === 0);
ell('gyermek (8 év, SpO2 88) → a felnőtt padló nem érintett', ert({ eletkorEv: 8, spo2: 88 }).o2AlapertekFuggo.length === 0);

print('o2-alapérték regresszió: ' + ok + ' OK, ' + hiba + ' HIBA');
if (hiba) quit(1);
