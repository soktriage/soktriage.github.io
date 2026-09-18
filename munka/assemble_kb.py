#!/usr/bin/env python3
"""
Összeszereli a 7 témánkénti kb_*.json fájlt EGYETLEN kanonikus kb.js tudásbázissá,
amit az app motorja (engine.js v2) betölt. A számok mind a forrás-JSON-okból jönnek;
ez a szkript CSAK átrendez és csoportosít, orvosi értéket NEM talál ki.

Kimenet: app/js/kb.js
"""
import json, os, re, sys

# A projektgyökérhez képest relatív utak (a szkript saját helyéből számolva) —
# így a projekt bárhová másolva/kicsomagolva is buildel, nem csak az eredeti gépen.
_GYOKER = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KB = os.path.join(_GYOKER, 'munka', 'kb')
OUT = os.path.join(_GYOKER, 'app', 'js', 'kb.js')

def load(name):
    with open(os.path.join(KB, f'kb_{name}.json'), encoding='utf-8') as f:
        return json.load(f)

szintek = load('szintek')
elsodleges = load('elsodleges_felnott')
gyermek = load('gyermek')
masodlagos = load('masodlagos')
cedis = load('cedis')
folyamat = load('folyamat')
esetek = load('esetek')
infekcio = load('infekciokontroll')
betegut = load('betegut')
tek = load('tek')             # területi ellátás (TEK) — operatív, NEM szint-módosító
torlodas = load('torlodas')   # torlódási eljárásrend — operatív, NEM szint-módosító

# ---- 1. SZINTEK -> levels ----
# MSTR-kategóriák hivatalos színkódjai (a forrás színnevei: 1=piros, 2=narancs,
# 3=sárga, 4=zöld, 5=kék). A hexek egyeznek a felület (style.css) palettájával,
# hogy a badge-ek és a folyamatábra színei konzisztensek legyenek.
SZIN_HEX = {1: '#C0392B', 2: '#D35400', 3: '#B7950B', 4: '#1E8449', 5: '#1A5276'}
# Újraértékelési időköz PERCBEN — a kb_szintek.json 'reassessment' szövegmezőinek
# ("15 percenként", "30 percenként", …) numerikus párja, ugyanabból a forrásból
# (tankönyv 22./24. o., jegyzet 44./114./256. o. — ld. a szintek source-listáját).
# MSTR 1 = None: a forrás szerint „folyamatos ellátás, nincs időszakos újraértékelés”.
REASSESS_PERC = {1: None, 2: 15, 3: 30, 4: 60, 5: 120}
levels = []
for l in szintek.get('levels', []):
    levels.append({
        'level': l['level'],
        'name': l.get('name', ''),
        'color': SZIN_HEX.get(l['level'], '#888'),
        'colorName': l.get('color', ''),
        'targetTime': l.get('target_time', ''),
        'nurseTime': l.get('nurse_time', ''),
        'reassess': l.get('reassessment', ''),
        # Az újraértékelési időköz PERCBEN, a fenti forrás-szöveg numerikus párja.
        # A felület NEM parse-olhatja a magyar szöveget — orvosi időköz csak a KB-ből jöhet.
        # MSTR 1: None — a forrás szerint „folyamatos ellátás, nincs időszakos újraértékelés”.
        'reassessMin': REASSESS_PERC.get(l['level']),
        'description': l.get('description', ''),
        'typical': l.get('typical', []),
        'source': l.get('source', []),
    })
levels.sort(key=lambda x: x['level'])

# ---- 2. CEDIS -> complaints (lapítva, kategóriával + kereső-aliasok) ----
# Az aliasok (köznyelvi/szinonima kifejezések) CSAK a szabad-szavas keresést segítik
# (a nővér a valódi CEDIS-panaszt választja ki); a triázs-logikát NEM befolyásolják.
syn_path = os.path.join(KB, 'synonyms.json')
synonyms = {}
if os.path.exists(syn_path):
    with open(syn_path, encoding='utf-8') as f:
        synonyms = json.load(f)
complaints = []
for cat in cedis.get('categories', []):
    for cp in cat.get('complaints', []):
        complaints.append({
            'id': cp['id'],
            'name': cp['name'],
            'category': cat['name'],
            'defaultLevel': cp.get('defaultLevel'),
            'notes': cp.get('notes', ''),
            'aliases': synonyms.get(cp['id'], []),
            'source': cp.get('source', []),
        })

# ---- 3. Szabályok csoportosítása (group-címke a motor lépéseihez) ----
def group_of(name):
    n = name.lower()
    if 'légz' in n or 'stridor' in n or 'apnoe' in n or 'apnoé' in n or 'pefr' in n:
        return 'respiratory'
    if 'kering' in n or 'sokk' in n or 'hemodinamik' in n or 'volumenhi' in n or 'kiszárad' in n or 'dehid' in n:
        return 'hemodynamic'
    if 'tudat' in n or 'gcs' in n or 'eszmélet' in n or 'eszmélet' in n or n.startswith('pat') or 'pat (' in n:
        return 'consciousness'
    if 'láz' in n or 'hőmérs' in n or 'hipotermia' in n or 'szepszis' in n or 'sirs' in n or 'hőmé' in n:
        return 'temperature'
    if 'fájdalom' in n:
        return 'pain'
    if 'vérz' in n:
        return 'bleeding'
    if 'mechanizmus' in n or 'trauma' in n or 'penetr' in n:
        return 'mechanism'
    return None

rules = []
reference = []   # nem kiértékelt definíciók/fejlécek (kattintásra megjeleníthető)

# A patch-szabályok által LEVÁLTOTT régi, panasz-hatókör nélküli szabályok — a
# szűkített (csakPanaszok-os) új verzió lép a helyükre (ld. patch conflicts mezők).
SUPERSEDED = {
    'masodlagos_80': 'panasz_kardio_neuro_09 váltja (palpitáció, csakPanaszok-szűkített)',
    'masodlagos_81': 'panasz_kardio_neuro_10 váltja (palpitáció, csakPanaszok-szűkített)',
    'masodlagos_82': 'panasz_kardio_neuro_02 váltja (tépő-szaggató, csakPanaszok-szűkített)',
    'masodlagos_11': 'panasz_minor_gyermek_gasztro_12 váltja (kávézacc-hányás, mező+panasz-hatókörrel)',
    # A két bőrelfeketedés-szabály UGYANAZT a klinikai kérdést tette fel (ugyanaz a forrás,
    # tankönyv 83. o., ugyanaz az MSTR 2), két KÜLÖN mezővel — így a végbél- és a
    # herefájdalom panasznál az ápoló kétszer kapta meg ugyanazt a kérdést. A buktato_*
    # verzió hatóköre bővebb (7 panasz a 2 helyett), ezért az marad. (Nyelvi lektor, 2026-09-18)
    'masodlagos_83': 'buktato_perinealis_borelfeketedes váltja (azonos forrás és szint, bővebb panasz-hatókör)',
    # Feltétel nélküli (sosem tüzelő) szabályok, amelyeket gépiesíthető megfelelőjük vált ki.
    # Ld. patch_univerzalis_vitalpadlo.json — mindegyik ugyanazt a forrást viszi tovább.
    'gyermek_16': 'buktato_nem_szuloszobai_ujszulott váltja (azonos forrás és szint, a mezőhöz kötve)',
    'gyermek_laz_08': 'buktato_nem_szuloszobai_ujszulott + gyermek_laz_01 együtt lefedi (újszülött, T>38 → 2)',
    'elsodleges_felnott_19': 'elsodleges_felnott_03 (közepes nehézlégzés→2) + _08 (instabilitás→2) már lefedi',
    'elsodleges_felnott_20': 'esc_immunszupprimalt_laz + esc_idos_lazas_immunszupprimalt váltja',
    # A kritikus vitál önmagában is MSTR 1-et ad (sokk, GCS, légzési elégtelenség), és a
    # végső szint a tüzelő szabályok MINIMUMA — a mechanizmus tehát nem tudja "visszafogni".
    # A szabály célja (ne soroljuk 2-re a kritikus mechanizmusos beteget) strukturálisan teljesül.
    'elsodleges_felnott_42': 'a min-logika strukturálisan biztosítja (kritikus vitál → 1 mindenképp felülírja a 2-t)',
    # Az áthatoló (penetráló) proximális sérülés a forrásban a MAGAS RIZIKÓJÚ MECHANIZMUS tábla
    # egyik tétele — azt pedig az elsodleges_felnott_41 már MSTR 2-re sorolja a serulesMagasRizikoju
    # mező alapján. A hézag nem a szabályban, hanem a mező SÚGÓJÁBAN volt: az csak km/h- és
    # esésmagasság-küszöböket említett, ezért szúrt sebnél az ápolónak eszébe sem jutott bejelölni.
    # A súgó most a forrás teljes kritériumlistáját tartalmazza, a penetráló tétellel együtt.
    'elsodleges_felnott_43': 'elsodleges_felnott_41 váltja (a penetráló sérülés a magas rizikójú mechanizmus tábla tétele)',
    'gyermek_laz_03': 'esc_immunszupprimalt_laz váltja (hatóköre minden panaszra és korra bővítve, lázhoz kötve)',
    'gyermek_09': 'elsodleges_felnott_07 (sokk→1) váltja, hatóköre mind-re bővítve (jegyzet 226-228)',
    'gyermek_10': 'elsodleges_felnott_08 (instabilitás→2) váltja, hatóköre mind-re bővítve (jegyzet 226-228)',
    'gyermek_11': 'elsodleges_felnott_09 (stabil-de-potenciálisan→3) váltja, hatóköre mind-re bővítve (jegyzet 226-228)',
}

def add_rules(topic_key, topic_obj, default_group):
    for r in topic_obj.get('rules', []):
        if r['id'] in SUPERSEDED:
            continue  # leváltott szabály — ld. SUPERSEDED
        level = r.get('level')
        cond = r.get('condition') or []
        actionable = (level is not None) or (len(cond) > 0)
        base = {
            'id': r['id'],
            'name': r.get('name', ''),
            'applies_to': r.get('applies_to', 'mind'),
            'condition_text': r.get('condition_text', ''),
            'condition': cond,
            'level': level,
            'source': r.get('source', []),
            'notes': r.get('notes', ''),
            'conflicts': r.get('conflicts', []),
        }
        for opt in ('korMinHonap', 'korMaxHonap', 'csakPanaszok'):
            if r.get(opt) is not None:
                base[opt] = r[opt]
        if r.get('group'):
            g = r['group']                      # a szabály explicit csoportja (pl. 'immediate')
        elif default_group == 'secondary':
            g = 'secondary'
        else:
            g = group_of(base['name']) or default_group
        base['group'] = g
        if actionable:
            rules.append(base)
        else:
            reference.append({'topic': topic_key, **base})

add_rules('elsodleges_felnott', elsodleges, 'egyeb_elsodleges')
add_rules('gyermek', gyermek, 'pediatric')
add_rules('masodlagos', masodlagos, 'secondary')

# ---- 3b. Panasz-specifikus patch-fájlok (workflow_panasz_szabalyok.js kimenete) ----
import glob as _glob
patch_inputfields = []
patch_case_additions = []
patch_derivations = []
for pf in sorted(_glob.glob(os.path.join(KB, 'patch_*.json'))):
    with open(pf, encoding='utf-8') as f:
        patch = json.load(f)
    add_rules('patch_' + patch.get('domain', os.path.basename(pf)), patch, 'secondary')
    patch_inputfields.extend(patch.get('inputFields', []))
    patch_case_additions.extend(patch.get('caseInputAdditions', []))
    patch_derivations.extend(patch.get('derivations', []))

# folyamat: referencia + a 4-5 őrszabály külön (processRules)
processRules = []
for r in folyamat.get('rules', []):
    processRules.append({
        'id': r['id'], 'name': r.get('name', ''),
        'condition_text': r.get('condition_text', ''),
        'source': r.get('source', []), 'notes': r.get('notes', ''),
    })

# szintek.rules: definíciók -> reference
for r in szintek.get('rules', []):
    reference.append({'topic': 'szintek', 'id': r['id'], 'name': r.get('name', ''),
                      'condition_text': r.get('condition_text', ''), 'source': r.get('source', [])})

# ---- 4. Gyermek HR/RR életkori sáv-táblák -> vitalBands (a motor számolja) ----
vitalBands = []
def find_table(obj, needle):
    for t in obj.get('vital_tables', []):
        if needle in t.get('name', '').lower():
            return t
    return None

rr_tbl = find_table(gyermek, 'légzésszám')
hr_tbl = find_table(gyermek, 'pulzus')
def band_rows(t):
    out = []
    for row in t.get('rows', []):
        if all(k in row for k in ('korMinHonap', 'korMaxHonap', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6')):
            out.append({k: row[k] for k in ('eletkor', 'korMinHonap', 'korMaxHonap', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6')})
    return out
if rr_tbl:
    vitalBands.append({'param': 'rr', 'group': 'respiratory', 'applies_to': 'gyermek',
                       'name': rr_tbl['name'], 'kiertekeles': rr_tbl.get('kiertekeles', ''),
                       'rows': band_rows(rr_tbl), 'source': rr_tbl.get('source', []),
                       'mervadoMaxHonap': rr_tbl.get('mervadoMaxHonap'), 'mervadoMegjegyzes': rr_tbl.get('mervadoMegjegyzes', '')})
if hr_tbl:
    vitalBands.append({'param': 'hr', 'group': 'hemodynamic', 'applies_to': 'gyermek',
                       'name': hr_tbl['name'], 'kiertekeles': hr_tbl.get('kiertekeles', ''),
                       'rows': band_rows(hr_tbl), 'source': hr_tbl.get('source', []),
                       'mervadoMaxHonap': hr_tbl.get('mervadoMaxHonap'), 'mervadoMegjegyzes': hr_tbl.get('mervadoMegjegyzes', '')})

# ---- 5. inputFields: minden témából, id szerint deduplikálva ----
# A leváltott szabályokhoz tartozó, máshol nem használt mezők kihagyandók: különben
# a felület olyan kérdést tenne fel, amire egyetlen szabály sem reagál (néma kérdés).
ELHAGYOTT_MEZOK = {
    'necrotizaloFasciitisBoreflektedes': 'a masodlagos_83 leváltásával feleslegessé vált; '
                                         'ugyanazt kérdezi, mint a borelfeketedes mező',
}
seen_if = {}
inputFields = []
for topic in (elsodleges, gyermek, masodlagos, folyamat, cedis, esetek, {'inputFields': patch_inputfields}):
    for f in topic.get('inputFields', []):
        if f['id'] in ELHAGYOTT_MEZOK:
            continue          # leváltott szabályhoz tartozó mező — ne legyen néma kérdés
        if f['id'] in seen_if:
            continue
        seen_if[f['id']] = True
        inputFields.append(f)
# a 'mews' folyamat-mezőt kihagyjuk az űrlapból (külön score, nem triázs-input)
inputFields = [f for f in inputFields if f['id'] != 'mews']
# az első megtekintés (kritikus megjelenés) mező kerüljön legelőre az űrlapon
inputFields.sort(key=lambda f: 0 if f['id'] == 'kritikusMegjelenes' else 1)

# ---- 5b. mező-annotáció a felülethez (adatvezérelt, a szabályokból számolva) ----
# pediatricOnly: a mezőt kizárólag gyermek-hatókörű szabály használja → a felületen a
#   lista végi, összecsukott "Gyermek" kártyába kerül (felnőtt SBO az elsődleges használat).
# csakPanaszok: ha a mezőt használó MINDEN szabály panasz-hatókörös, a mező csak az
#   érintett vezető panasz kiválasztásakor jelenik meg (adaptív űrlap).
_field_rules = {}
for _r in rules:
    for _c in (_r.get('condition') or []):
        _field_rules.setdefault(_c['mezo'], []).append(_r)
for _f in inputFields:
    _rs = _field_rules.get(_f['id'], [])
    _f['pediatricOnly'] = bool(_rs) and all(_r.get('applies_to') == 'gyermek' for _r in _rs)
    _scopes = [_r.get('csakPanaszok') for _r in _rs]
    if _rs and all(_scopes):
        _pan = set()
        for _s in _scopes:
            _pan.update(_s)
        _f['csakPanaszok'] = sorted(_pan)

# ---- 6. Megjelenítő vitál-referenciatáblák (felnőtt + gyermek láz/RR-grafikon) ----
vitalsReference = []
for t in elsodleges.get('vital_tables', []):
    vitalsReference.append({'name': t.get('name', ''), 'source': t.get('source', []), 'data': t})
for t in gyermek.get('vital_tables', []):
    if 'légzésszám' in t.get('name', '').lower() or 'pulzus' in t.get('name', '').lower():
        continue  # ezek már vitalBands-ként gépiek
    vitalsReference.append({'name': t.get('name', ''), 'source': t.get('source', []), 'data': t})

# ---- 7. Esetek -> cases (motor-kompatibilis inputs; a gcs marad, engine kezeli) ----
# patch-ekből érkező eset-kiegészítések (csak ha a vignetta alátámasztja — az agent felelt érte)
case_add = {}
for ca in patch_case_additions:
    case_add.setdefault(ca['id'], {}).update(ca.get('add', {}))
cases = []
for c in esetek.get('cases', []):
    if c['id'] in case_add:
        c = dict(c)
        c['inputs'] = {**c.get('inputs', {}), **case_add[c['id']]}
    cases.append({
        'id': c['id'], 'desc': c.get('desc', ''),
        'inputs': c.get('inputs', {}),
        'expected_level': c.get('expected_level'),
        'rationale': c.get('rationale', ''),
        'source': c.get('source', []),
    })

# ---- 8. Lépéssorrend a motorhoz és a folyamatábrához ----
stepOrder = [
    {'group': 'immediate',        'label': '1. Kritikus megjelenés / azonnali besorolás'},
    {'group': 'respiratory',      'label': '2a. Légzés (A–B)'},
    {'group': 'hemodynamic',      'label': '2b. Keringés (C)'},
    {'group': 'consciousness',    'label': '2c. Tudat (D – GCS)'},
    {'group': 'temperature',      'label': '2d. Testhőmérséklet / láz (E)'},
    {'group': 'pain',             'label': '2e. Fájdalom'},
    {'group': 'bleeding',         'label': '2f. Vérzés / vérzékenység'},
    {'group': 'mechanism',        'label': '2g. Sérülési mechanizmus'},
    {'group': 'egyeb_elsodleges', 'label': '2h. Egyéb elsődleges módosító'},
    {'group': 'pediatric',        'label': '3. Gyermek-specifikus tényezők'},
    {'group': 'secondary',        'label': '4. Másodlagos módosítók'},
]

# ---- DERIVÁCIÓK: kemény numerikus paraméterből előre kitöltött módosító ----
# Ahol a forrás egy jól körülírt HATÁRÉRTÉKKEL köt egy numerikus paramétert egy
# select-módosítóhoz, ott a numerikus érték beírásakor a módosító ELŐRE kitölthető.
# confirm=true → a felület "megerősítendő"-ként jelöli (a végső megítélés — pl.
# légzési munka — klinikai). A felhasználó felülírhatja (akkor a deriv"áció eldobódik).
# A küszöbök a KB-ban már meglévő, forráshivatkozott értékekből származnak.
# 'valueOrder': a legsúlyosabbtól a legenyhébbig — ütközéskor a súlyosabb nyer.
# FONTOS: a légzés SÚLYOSSÁGA a forrás szerint elsősorban KLINIKAI (légzési munka,
# cyanosis, beszéd), az O2-szat/PEFR csak KÍSÉRŐ jel; ráadásul COPD/krónikus hipoxiánál
# az abszolút szám félrevezető (a beteg saját alapértéke a viszonyítás — ld. rule_06).
# Ezért az O2/PEFR NEM tölti ki magától a fokozatot (nem visz automatikusan MSTR 1-re):
# csak JAVASLATOT ad (mode:'suggest'), amit a nővér a klinikai kép alapján erősít meg.
# SZÁMÍTOTT MEZŐK: a numerikusból NEM kérdezünk újra — a tool kiszámolja, amit tud,
# és a bemenetek közül a LEGSÚLYOSABBAT veszi. A nehézlégzés fokozata = a klinikai
# jelek (legzesiJelek) ÉS — csak AKUT esésnél — a SpO₂-sáv ÉS a PEFR-sáv közül a
# legsúlyosabb (forrás: tankönyv 31-32, jegyzet 80/109). Krónikus/COPD esetén a SpO₂
# kimarad (a kapu miatt), így a klinikai jel + PEFR + relatív esés dönt.
# A nehézlégzés FOKOZATA = a KLINIKAI jelek (legzesiJelek). Az SpO₂/PEFR önmagában
# NEM állítja be a fokozatot és NEM eredményez automatikusan MSTR 1-et — a forrás
# szerint a súlyosság elsősorban klinikai (a szaturáció csak egy lehetséges kísérő
# jel; nehézlégzés normál szat mellett is lehet). Az SpO₂/PEFR csak NEM KÖTELEZŐ
# JAVASLATOT ad a klinikai-jel kérdéshez (akut esésnél), lásd derivations lentebb.
computed_fields = [
    {
        'field': 'nehezlegzesFok',
        'order': ['sulyos', 'kozepes', 'enyhe', 'nincs'],
        'note': 'A nehézlégzés fokozata a klinikai jelek (légzési munka) alapján.',
        'source': [{'doc': 'jegyzet', 'page': 80}, {'doc': 'jegyzet', 'page': 109}, {'doc': 'tankonyv', 'page': 31}],
        'inputs': [
            {'from': 'legzesiJelek', 'label': 'klinikai jelek'},  # a select értéke maga a fokozat
        ],
    },
]
# NEM KÖTELEZŐ javaslat a klinikai-jel kérdéshez a numerikusból (nem tölti ki, csak
# kiemeli az opciót). SpO₂ csak AKUT esésnél (o2Akut=akut). A nővér erősíti meg.
deriv_buktato = list(patch_derivations)
derivations = [
    {
        'from': 'spo2', 'to': 'legzesiJelek', 'mode': 'suggest',
        'gate': {'field': 'o2Akut', 'equals': 'akut'},
        'note': 'Az SpO₂ önmagában NEM dönt: a nehézlégzés fokozatát a klinikai jelek adják. Akut esésnél az SpO₂ ehhez ad támpontot.',
        'source': [{'doc': 'jegyzet', 'page': 80}, {'doc': 'tankonyv', 'page': 31}, {'doc': 'tankonyv', 'page': 32}],
        'map': [{'max': 89, 'value': 'sulyos'}, {'min': 90, 'max': 92, 'value': 'kozepes'},
                {'min': 93, 'max': 94, 'value': 'enyhe'}, {'min': 95, 'value': 'nincs'}],
    },
    {
        'from': 'pefrSzazalek', 'to': 'legzesiJelek', 'mode': 'suggest',
        'note': 'PEFR-alapú támpont a klinikai-jel megítéléshez (a klinikai kép dönt).',
        'source': [{'doc': 'jegyzet', 'page': 80}, {'doc': 'tankonyv', 'page': 32}],
        'map': [{'max': 39, 'value': 'sulyos'}, {'min': 40, 'max': 60, 'value': 'kozepes'}, {'min': 61, 'value': 'nincs'}],
    },
] + deriv_buktato
deriv_value_order = {'nehezlegzesFok': ['sulyos', 'kozepes', 'enyhe', 'nincs'], 'legzesiJelek': ['sulyos', 'kozepes', 'enyhe', 'nincs']}

# ---- meta ----
meta = {
    'version': '1.0',
    'generated': '2026-07-20',
    'gyermekHatarEv': 18,   # a gyermek vitáltáblák 18 évig terjednek; a jegyzet elsődleges korhatára 16 (16-18 közt kiterjeszthető) — ld. FOLYTATAS.md
    'sources': {
        'tankonyv': 'Triázs tankönyv 2.0 (MSOTKE, 2016)',
        'jegyzet': 'MSTR oktatói jegyzet (2022)',
        'ctas': 'CTAS COT-2008 (kanonikus, döntőbíró)',
        'mstr': 'MSOTKE-MSTR munkacsoport — Elsődleges és másodlagos módosító és meghatározó tényezők (hivatalos poszter)',
        # OPERATÍV (helyi) források: a betegút/elhelyezés/ütemezés döntést szabályozzák.
        # NEM használhatók MSTR-szintet meghatározó szabály forrásaként — a besorolás tisztán klinikai marad.
        'tek': 'SE Területi Ellátás Segédlet — OMSZ Beutalási Rend (2025.12.03.) + NNGYK ESZENY TEK (2026.08.04.)',
        'utasitas': '4/2026. számú Igazgatói Utasítás — Torlódási eljárásrend (SE SOK, 2026.09.15.)',
    },
    'counts': {},
}

KBOUT = {
    'meta': meta,
    'levels': levels,
    'complaints': complaints,
    'stepOrder': stepOrder,
    'rules': rules,
    'vitalBands': vitalBands,
    'secondOrderNote': 'A másodlagos módosítók panasz-hatóköre (csakPanaszok) a v1-ben nincs bekötve — minden másodlagos szabály minden panasznál kiértékelődik. Ld. FOLYTATAS.md.',
    'processRules': processRules,
    'reference': reference,
    'vitalsReference': vitalsReference,
    'inputFields': inputFields,
    'derivations': derivations,
    'computedFields': computed_fields,
    'derivValueOrder': deriv_value_order,
    'cases': cases,
    'infekciokontroll': infekcio.get('infekciokontroll', {}),
    'betegut': betegut.get('betegut', {}),
    'mewsSavok': folyamat.get('mewsSavok', {}),
    'figyelmeztetoSzabalyok': folyamat.get('figyelmeztetoSzabalyok', []),
    'tek': tek.get('tek', {}),
    'torlodas': torlodas.get('torlodas', {}),
}
meta['counts'] = {
    'levels': len(levels), 'complaints': len(complaints), 'rules': len(rules),
    'vitalBands': len(vitalBands), 'processRules': len(processRules),
    'reference': len(reference), 'inputFields': len(inputFields), 'cases': len(cases),
}

body = json.dumps(KBOUT, ensure_ascii=False, indent=2)
js = (
    "/* AUTOGENERÁLT tudásbázis — ne szerkeszd kézzel!\n"
    " * Forrás: munka/kb/kb_*.json (7 téma), összeszerelő: munka/assemble_kb.py\n"
    " * Újragenerálás: python3 munka/assemble_kb.py\n"
    " * Minden szabály forráshivatkozott (Triázs tankönyv 2.0 / MSTR oktatói jegyzet 2022).\n"
    " */\n"
    "(function (global) {\n  'use strict';\n  var KB = " + body + ";\n"
    "  if (typeof module !== 'undefined' && module.exports) module.exports = KB;\n"
    "  else global.MSTR_KB = KB;\n"
    "})(typeof window !== 'undefined' ? window : globalThis);\n"
)
with open(OUT, 'w', encoding='utf-8') as f:
    f.write(js)

# ---- GÉPI ENUM-ÉRTÉKEK PILLANATKÉPE (védelem szöveg-cserék ellen) ----
# A 88. munkaegységben egy globális helyesírás-javítás („distressz"→„disztressz") tévesen
# egy ENUM ADATÉRTÉKET is átnevezett (kritikusMegjelenes: vitalis_distressz). Ezek az
# értékek a localStorage-ba MENTVE vannak, ezért az átnevezés némán MSTR 1-ről MSTR 5-re
# ejtette a már tárolt beteget. Ez a pillanatkép hangosan jelzi, ha egy gépi érték ELTŰNIK.
_enum = set()
for _f in inputFields:
    for _o in (_f.get('options') or []):
        if isinstance(_o.get('value'), str):
            _enum.add(_f['id'] + '=' + _o['value'])
for _r in rules:
    for _c in (_r.get('condition') or []):
        if isinstance(_c.get('egyenlo'), str):
            _enum.add(_c['mezo'] + '=' + _c['egyenlo'])
_snap = os.path.join(KB, '_enum_ertekek.json')
_uj = sorted(_enum)
if os.path.exists(_snap):
    with open(_snap, encoding='utf-8') as _fh:
        _regi = set(json.load(_fh))
    _eltunt = sorted(_regi - _enum)
    if _eltunt:
        print('\n!!! FIGYELEM: eltűnt gépi enum-érték (tárolt betegadat törhet el) !!!')
        for _e in _eltunt:
            print('    -', _e)
        print('    Ha ez SZÁNDÉKOS, migráció kell a localStorage-ban lévő rekordokhoz.\n')
with open(_snap, 'w', encoding='utf-8') as _fh:
    json.dump(_uj, _fh, ensure_ascii=False, indent=1)
    _fh.write('\n')

print('kb.js kész:', OUT)
print('  ', json.dumps(meta['counts'], ensure_ascii=False))
# csoport-eloszlas
from collections import Counter
gc = Counter(r['group'] for r in rules)
print('   szabály/csoport:', dict(gc))
print('   reference (nem kiértékelt):', len(reference))
# ellenorzes: van-e olyan rule aminek a group-ja nincs a stepOrder-ben
groups_in_order = {s['group'] for s in stepOrder}
orphan = [r['id'] for r in rules if r['group'] not in groups_in_order]
if orphan:
    print('   FIGYELEM, árva csoportú szabályok:', orphan)
