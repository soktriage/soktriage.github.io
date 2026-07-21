/*
 * e-MedSolution spot monitoros vitálparaméter-lelet szövegének feldolgozása.
 * A felhasználó a MedSolból kimásolt lelet-szöveget beilleszti, és a mezők
 * automatikusan kitöltődnek — nem kell kézzel átgépelni semmit.
 *
 * A minta lelet "Eredmény:" blokkja soronként (név, érték, mértékegység):
 *   HR (szívfrekvencia)        71    / perc
 *   Hõmérséklet                35.0  Celsius
 *   SYS                        193   Hgmm
 *   DIA                        66    Hgmm
 *   MAP                        109   Hgmm
 *   RESP                       18    / perc
 *   SPO2                       96    %
 *   GCS Verbális válasz        5
 *   GCS Motoros valasz         6
 *   GCS Szemnyitasi valasz     4
 * Fejléc-azonosítók: KBA (11 számjegy), Esetszám, TAJ, Beteg neve, Születési dátum.
 */

(function (global) {
  'use strict';

  // Ékezet-toleráns minta: a MedSol régi kódolása miatt õ/ő, û/ű keveredhet.
  function szam(s) {
    if (s == null) return null;
    const n = parseFloat(String(s).replace(',', '.'));
    return isNaN(n) ? null : n;
  }

  const MEZOK = [
    { kulcs: 'hr',   minta: /HR\s*\(sz[ií]vfrekvencia\)\s+([\d.,]+)/i },
    { kulcs: 'temp', minta: /H[őõo]m[ée]rs[ée]klet\s+([\d.,]+)/i },
    { kulcs: 'sys',  minta: /\bSYS\s+([\d.,]+)/i },
    { kulcs: 'dia',  minta: /\bDIA\s+([\d.,]+)/i },
    { kulcs: 'map',  minta: /\bMAP\s+([\d.,]+)/i },
    { kulcs: 'rr',   minta: /\bRESP\s+([\d.,]+)/i },
    { kulcs: 'spo2', minta: /\bSPO2\s+([\d.,]+)/i },
    { kulcs: 'gcsV', minta: /GCS\s+Verb[áa]lis\s+v[áa]lasz\s+([\d]+)/i },
    { kulcs: 'gcsM', minta: /GCS\s+Motoros\s+valas?z?\s+([\d]+)/i },
    { kulcs: 'gcsE', minta: /GCS\s+Szemnyitas?i?\s+valas?z?\s+([\d]+)/i },
  ];

  const AZONOSITOK = [
    { kulcs: 'kba',      minta: /KBA\.*\s*:?\s*(\d{8,12})/i },
    { kulcs: 'esetszam', minta: /Esetsz[áa]m\s*:?\s*(\d+)/i },
    { kulcs: 'taj',      minta: /TAJ\.*\s*:?\s*([\d-]{9,12})/i },
    { kulcs: 'nev',      minta: /Beteg neve\.*\s*:?\s*(.+?)(?:\s{2,}|$)/im },
    { kulcs: 'szulDatum', minta: /Sz[üu]let[ée]si d[áa]tum\.*\s*:?\s*(\d{4}\.\d{2}\.\d{2})/i },
    { kulcs: 'vizsgalatDatum', minta: /Vizsg[áa]lat d[áa]tuma\s*:?\s*(\d{4}\.\d{2}\.\d{2}\.?\s*\d{2}:\d{2})/i },
  ];

  /**
   * @param {string} szoveg — a beillesztett lelet-szöveg
   * @returns {{parameterek: object, azonositok: object, talalatok: string[], hianyzok: string[]}}
   */
  function leletFeldolgoz(szoveg) {
    const parameterek = {};
    const azonositok = {};
    const talalatok = [];
    const hianyzok = [];

    for (const m of MEZOK) {
      const t = szoveg.match(m.minta);
      if (t) { parameterek[m.kulcs] = szam(t[1]); talalatok.push(m.kulcs); }
      else hianyzok.push(m.kulcs);
    }
    for (const a of AZONOSITOK) {
      const t = szoveg.match(a.minta);
      if (t) azonositok[a.kulcs] = t[1].trim();
    }
    // Életkor a születési dátumból, ha van vizsgálati dátum is (különben mai nap).
    if (azonositok.szulDatum) {
      const sz = azonositok.szulDatum.split('.').map(Number); // [éééé, hh, nn]
      let ref = new Date();
      if (azonositok.vizsgalatDatum) {
        const v = azonositok.vizsgalatDatum.match(/(\d{4})\.(\d{2})\.(\d{2})/);
        if (v) ref = new Date(+v[1], +v[2] - 1, +v[3]);
      }
      if (sz.length >= 3 && !isNaN(sz[0])) {
        let kor = ref.getFullYear() - sz[0];
        const szulNapja = new Date(sz[0], sz[1] - 1, sz[2]);
        const iden = new Date(ref.getFullYear(), sz[1] - 1, sz[2]);
        if (ref < iden) kor -= 1;
        if (kor >= 0 && kor < 130) azonositok.eletkorEv = kor;
        // csecsemőknél hónap pontosság
        if (kor < 2) {
          let honap = (ref.getFullYear() - szulNapja.getFullYear()) * 12 + (ref.getMonth() - szulNapja.getMonth());
          if (ref.getDate() < szulNapja.getDate()) honap -= 1;
          azonositok.eletkorHonap = Math.max(0, honap);
        }
      }
    }
    return { parameterek: parameterek, azonositok: azonositok, talalatok: talalatok, hianyzok: hianyzok };
  }

  const api = { leletFeldolgoz: leletFeldolgoz };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else global.LeletParser = api;
})(typeof window !== 'undefined' ? window : globalThis);
