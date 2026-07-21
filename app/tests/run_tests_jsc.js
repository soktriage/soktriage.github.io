// Tesztfuttató JavaScriptCore-hoz (jsc). A VALÓDI kb.js + engine.js fájlokat tölti be
// (ugyanaz, amit a böngésző használ), és lefuttatja a kb.cases eseteit.
// Futtatás:  jsc app/tests/run_tests_jsc.js  (a projekt gyökeréből: app/... relatív)
var BASE = './app/js/';
var g = this;
load(BASE + 'kb.js');
load(BASE + 'engine.js');

var KB = g.MSTR_KB;
var motor = g.TriazsMotor;
if (!KB || !motor) { print('HIBA: kb.js vagy engine.js nem töltődött be'); quit(1); }

var ok = 0, hiba = 0, kihagy = 0;
var reszek = { auto: [], vignetta: [], multi: [] };
var hibalista = [];

function hasVital(inp) {
  var k = ['rr','hr','sys','dia','spo2','temp','gcs','gcsE','fajdalomPont'];
  for (var i=0;i<k.length;i++) if (inp[k[i]] != null) return true;
  // dinamikus mezők
  for (var m in inp) if (['nehezlegzesFok','keringesiAllapot','lazKullem','verzesSulyossag','fajdalomLokalizacio','gyermekKullem','stridor','csecsemoApnoe'].indexOf(m) >= 0) return true;
  return false;
}

for (var i = 0; i < KB.cases.length; i++) {
  var c = KB.cases[i];
  if (c.expected_level == null || !c.inputs) { kihagy++; continue; }
  var er = motor.triazsKiertekel(c.inputs, KB);
  var vignetta = !hasVital(c.inputs); // csak panasz, nincs mérhető adat
  var sor = { id: c.id, elvart: c.expected_level, kapott: er.szint,
              donto: (er.dontoSzabalyok||[]).map(function(d){return d.szabalyId;}).join(',') || '(nincs)',
              vignetta: vignetta, desc: c.desc };
  if (er.szint === c.expected_level) { ok++; }
  else {
    hiba++;
    sor.rationale = c.rationale;
    hibalista.push(sor);
    if (vignetta) reszek.vignetta.push(sor); else reszek.auto.push(sor);
  }
}

print('=== MSTR teszteredmény ===');
print('Összes eset: ' + KB.cases.length + ' | OK: ' + ok + ' | HIBA: ' + hiba + ' | kihagyva: ' + kihagy);
print('Hibák — vitális adat NÉLKÜLI vignetták (várható limitáció): ' + reszek.vignetta.length);
print('Hibák — mérhető adatot tartalmazó esetek (ezek fontosak!): ' + reszek.auto.length);
print('');
function dump(cim, arr) {
  if (!arr.length) return;
  print('----- ' + cim + ' -----');
  for (var j = 0; j < arr.length; j++) {
    var s = arr[j];
    print('✗ ' + s.id + ' | elvárt MSTR ' + s.elvart + ' → kapott ' + (s.kapott==null?'nincs':('MSTR '+s.kapott)) + ' | döntő: ' + s.donto);
    print('   ' + (s.desc||'').substring(0,110));
  }
  print('');
}
dump('MÉRHETŐ ADATOS HIBÁK (prioritás)', reszek.auto);
dump('VIGNETTA-HIBÁK (csak panasz, nincs adat)', reszek.vignetta);
