// Stroke-időablak regresszió: a FORRÁS szerinti szabály (jegyzet 154. o.).
// 2026-10-19: a 10-18-i SE SOK házszabály visszavonva — ez a teszt őrzi, hogy a forrás szerinti viselkedés maradjon.
// Futtatás a projekt gyökeréből:  jsc app/tests/stroke_hazszabaly_jsc.js
load('./app/js/kb.js'); load('./app/js/engine.js');
var K = this.MSTR_KB, M = this.TriazsMotor, ok = 0, hiba = 0;
var ALAP = { eletkorEv: 68, kritikusMegjelenes: 'nincs', vezetoPanaszId: 'vegtaggyengeseg-cva-tunetek',
             rr: 16, spo2: 97, hr: 84, sys: 150, dia: 85, temp: 36.7, gcsE: 4, gcsV: 5, gcsM: 6 };
var ESETEK = [
  ['negy_es_fel_oran_belul', 2, 'panasz_kardio_neuro_04'],
  ['tul_negy_es_fel_oran_vagy_megszunt', 3, 'panasz_kardio_neuro_05'],
  [null, 3, 'baseline_vegtaggyengeseg_cva_tunetek'],
];
ESETEK.forEach(function (e) {
  var b = JSON.parse(JSON.stringify(ALAP)); if (e[0]) b.strokeTunetKezdet = e[0];
  var er = M.triazsKiertekel(b, K);
  var donto = er.dontoSzabalyok.map(function (d) { return d.szabalyId; });
  if (er.szint === e[1] && donto.indexOf(e[2]) !== -1) ok++;
  else { hiba++; print('✗ ' + (e[0] || '(nincs válasz)') + ': várt MSTR ' + e[1] + ' / ' + e[2] + ', kapott MSTR ' + er.szint + ' / ' + donto.join(',')); }
});
var hazszabaly = K.rules.filter(function (r) { return /hazszabaly/.test(r.id) || (r.source || []).some(function (s) { return s.doc === 'hazszabaly'; }); });
if (hazszabaly.length) { hiba++; print('✗ házszabály-szabály maradt a tudásbázisban: ' + hazszabaly.map(function (r) { return r.id; }).join(', ')); } else ok++;
print('Stroke (forrás szerint): ' + ok + '/' + (ESETEK.length + 1) + ' rendben' + (hiba ? ', ' + hiba + ' HIBA' : ''));
if (hiba) quit(1);
