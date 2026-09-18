/*
 * Automatikus tesztfuttató (Node): a tudásbázis "cases" listáján — a
 * forrásdokumentumok esettanulmányain — futtatja a szabálymotort, és
 * összeveti az elvárt MSTR-szinttel. Futtatás:
 *    node app/tests/run_tests.mjs
 */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const KB = require('../js/kb.js');
const { triazsKiertekel } = require('../js/engine.js');

let ok = 0, hiba = 0, kihagyva = 0;
const hibak = [];

for (const eset of (KB.cases || [])) {
  if (!eset.inputs || eset.expected_level == null) { kihagyva++; continue; }
  const er = triazsKiertekel(eset.inputs, KB);
  if (er.szint === eset.expected_level) { ok++; }
  else {
    hiba++;
    hibak.push({
      id: eset.id,
      leiras: eset.desc,
      elvart: eset.expected_level,
      kapott: er.szint,
      donto: (er.dontoSzabalyok || []).map(d => d.szabalyId).join(', ') || '(egy szabály sem tüzelt)',
      forras: JSON.stringify(eset.source || []),
    });
  }
}

console.log(`Esettanulmány-tesztek: ${ok} OK, ${hiba} HIBA, ${kihagyva} kihagyva (hiányos teszteset), összesen ${(KB.cases || []).length}`);
for (const h of hibak) {
  console.log(`\n✗ ${h.id} — elvárt: MSTR ${h.elvart}, kapott: ${h.kapott == null ? 'nincs javaslat' : 'MSTR ' + h.kapott}`);
  console.log(`   ${h.leiras}`);
  console.log(`   Döntő szabály: ${h.donto}`);
  console.log(`   Forrás: ${h.forras}`);
}
process.exit(hiba ? 1 : 0);
