// Stroke-időablak regresszió (SE SOK házszabály, 2026-10-18).
// Futtatás a projekt gyökeréből:  jsc app/tests/stroke_hazszabaly_jsc.js
load('./app/js/kb.js'); load('./app/js/engine.js');
var K = this.MSTR_KB, M = this.TriazsMotor, ok = 0, hiba = 0;
var ALAP = { eletkorEv: 68, kritikusMegjelenes: 'nincs', vezetoPanaszId: 'vegtaggyengeseg-cva-tunetek',
             rr: 16, spo2: 97, hr: 84, sys: 150, dia: 85, temp: 36.7, gcsE: 4, gcsV: 5, gcsM: 6 };
var ESETEK = [
  ['negy_es_fel_oran_belul', 1, 'hazszabaly_stroke_9ora_negy_es_fel_oran_belul'],
  ['negy_es_fel_kilenc_ora', 1, 'hazszabaly_stroke_9ora_negy_es_fel_kilenc_ora'],
  ['kilenc_huszonnegy_ora', 2, 'stroke_24ora_trombektomia_kilenc_huszonnegy_ora'],
  ['tia_24_oran_belul', 2, 'hazszabaly_tia_24ora'],
  ['tul_negy_es_fel_oran_vagy_megszunt', 3, 'panasz_kardio_neuro_05'],
  [null, 3, 'baseline_vegtaggyengeseg_cva_tunetek'],
];
ESETEK.forEach(function (e) {
  var b = JSON.parse(JSON.stringify(ALAP)); if (e[0]) b.strokeTunetKezdet = e[0];
  var er = M.triazsKiertekel(b, K);
  var donto = er.dontoSzabalyok.map(function (d) { return d.szabalyId; });
  var jo = er.szint === e[1] && donto.indexOf(e[2]) !== -1;
  // a forrás szerinti szabály a házszabály mellett is látszódjon a nyomvonalban
  if (e[0] === 'negy_es_fel_oran_belul') {
    var forras = er.trace.filter(function (t) { return t.szabalyId === 'panasz_kardio_neuro_04'; })[0];
    jo = jo && forras && forras.statusz === 'tuzelt' && forras.javasoltSzint === 2;
  }
  if (jo) ok++; else { hiba++; print('✗ ' + (e[0] || '(nincs válasz)') + ': várt MSTR ' + e[1] + ' / ' + e[2] + ', kapott MSTR ' + er.szint + ' / ' + donto.join(',')); }
});
print('Stroke-házszabály: ' + ok + '/' + ESETEK.length + ' rendben' + (hiba ? ', ' + hiba + ' HIBA' : ''));
if (hiba) quit(1);
