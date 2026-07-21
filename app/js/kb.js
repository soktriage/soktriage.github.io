/* AUTOGENERÁLT tudásbázis — ne szerkeszd kézzel!
 * Forrás: munka/kb/kb_*.json (7 téma), összeszerelő: munka/assemble_kb.py
 * Újragenerálás: python3 munka/assemble_kb.py
 * Minden szabály forráshivatkozott (Triázs tankönyv 2.0 / MSTR oktatói jegyzet 2022).
 */
(function (global) {
  'use strict';
  var KB = {
  "meta": {
    "version": "1.0",
    "generated": "2026-07-20",
    "gyermekHatarEv": 18,
    "sources": {
      "tankonyv": "Triázs tankönyv 2.0 (MSOTKE, 2016)",
      "jegyzet": "MSTR oktatói jegyzet (2022)",
      "ctas": "CTAS COT-2008 (kanonikus, döntőbíró)",
      "mstr": "MSOTKE-MSTR munkacsoport — Elsődleges és másodlagos módosító és meghatározó tényezők (hivatalos poszter)"
    },
    "counts": {
      "levels": 5,
      "complaints": 163,
      "rules": 400,
      "vitalBands": 2,
      "processRules": 39,
      "reference": 45,
      "inputFields": 79,
      "cases": 75
    }
  },
  "levels": [
    {
      "level": 1,
      "name": "Reszuszcitáció / azonnali",
      "color": "#C0392B",
      "colorName": "piros",
      "targetTime": "azonnal",
      "nurseTime": "azonnal",
      "reassess": "folyamatos ellátás, nincs időszakos újraértékelés",
      "description": "Az élet vagy a végtag elvesztésének veszélyével járó állapotok. Halaszthatatlan, invazív beavatkozások szükségesek; az állapotromlás veszélye azonnali. A betegek nyilvánvaló vitális disztresszben és instabilitásban vannak, azonnali és agresszív beavatkozásra szorulnak. Ilyenkor a triázsnál nem kell időt vesztegetni a vitális paraméterekre és az anamnézisre, további triázs értékelésre nincs szükség.",
      "typical": [
        "keringésmegállás",
        "légzésleállás",
        "súlyos sérült (pl. sokkos állapot)",
        "légzési elégtelenség, súlyos fokú nehézlégzés",
        "eszméletlenség vagy módosult tudati állapot (GCS 3-9)"
      ],
      "source": [
        {
          "doc": "jegyzet",
          "page": 44
        },
        {
          "doc": "jegyzet",
          "page": 45
        },
        {
          "doc": "jegyzet",
          "page": 114
        },
        {
          "doc": "jegyzet",
          "page": 256
        },
        {
          "doc": "tankonyv",
          "page": 24
        },
        {
          "doc": "tankonyv",
          "page": 25
        },
        {
          "doc": "tankonyv",
          "page": 22
        }
      ]
    },
    {
      "level": 2,
      "name": "Kritikus",
      "color": "#D35400",
      "colorName": "narancs",
      "targetTime": "orvosi értékelés 15 percen belül",
      "nurseTime": "azonnal",
      "reassess": "15 percenként",
      "description": "A beteg állapota potenciálisan életveszélyes, vagy a végtag potenciálisan veszélyben van. Orvos által vagy orvos irányításával végzett gyors beavatkozás(ok) szükséges(ek). Gyors orvosi értékelés kell, mert a beteg állapota a reszuszcitáció/azonnali kategóriába súlyosbodhat. A vitális paraméterek általában abnormálisak.",
      "typical": [
        "közepes fokú nehézlégzés",
        "vérhányás (ülő helyzetben szédül)",
        "tünetes magas vérnyomás (szisztolés RR >220 vagy diasztolés RR >130 Hgmm)",
        "módosult tudati állapot (GCS 10-13)",
        "láz >38°C szeptikus küllemmel és tünetekkel (legalább 3+ SIRS kritérium)",
        "szív eredetű mellkasi fájdalom",
        "nem szív eredetűnek tűnő, de jelentős mellkasi fájdalom",
        "súlyos hasi fájdalom (8-10/10)",
        "súlyos, hirtelen fellépő fejfájás",
        "nagy energiájú sérülés (pl. gyalogos gázolás), akkor is, ha sérülés nem nyilvánvaló"
      ],
      "source": [
        {
          "doc": "jegyzet",
          "page": 44
        },
        {
          "doc": "jegyzet",
          "page": 48
        },
        {
          "doc": "jegyzet",
          "page": 114
        },
        {
          "doc": "jegyzet",
          "page": 256
        },
        {
          "doc": "tankonyv",
          "page": 24
        },
        {
          "doc": "tankonyv",
          "page": 25
        },
        {
          "doc": "tankonyv",
          "page": 22
        }
      ]
    },
    {
      "level": 3,
      "name": "Sürgős",
      "color": "#B7950B",
      "colorName": "sárga",
      "targetTime": "orvosi értékelés 30 percen belül",
      "nurseTime": "30 percen belül",
      "reassess": "30 percenként",
      "description": "Az állapot sürgősségi beavatkozást igénylő, súlyos egészségügyi probléma irányába haladhat. Jelentős tünetekkel járhat, ami a munkavégzést vagy a mindennapi élettevékenységhez szükséges képességeket befolyásolhatja. A vitális paraméterek rendszerint normálisak, vagy a normális alsó vagy felső határán vannak. Egyértelmű az állapotromlás lehetősége, a túlzsúfoltság miatt e betegek mégis gyakran várakozni kényszerülnek.",
      "typical": [
        "enyhe fokú nehézlégzés",
        "tünetmentes magas vérnyomás (szisztolés RR >220 vagy diasztolés RR >130 Hgmm, tünetek nélkül)",
        "hányás és/vagy hányinger enyhe kiszáradás jeleivel",
        "hasi fájdalom (mérsékelt, 4-7/10)",
        "fejfájás (közepes fokú, 4-7/10)",
        "nagy mennyiségű vagy véres hasmenés"
      ],
      "source": [
        {
          "doc": "jegyzet",
          "page": 44
        },
        {
          "doc": "jegyzet",
          "page": 52
        },
        {
          "doc": "jegyzet",
          "page": 114
        },
        {
          "doc": "jegyzet",
          "page": 256
        },
        {
          "doc": "tankonyv",
          "page": 24
        },
        {
          "doc": "tankonyv",
          "page": 26
        },
        {
          "doc": "jegyzet",
          "page": 32
        },
        {
          "doc": "tankonyv",
          "page": 22
        }
      ]
    },
    {
      "level": 4,
      "name": "Kevésbé sürgős",
      "color": "#1E8449",
      "colorName": "zöld",
      "targetTime": "orvosi értékelés 60 percen belül",
      "nurseTime": "60 percen belül",
      "reassess": "60 percenként",
      "description": "A panaszok visszavezethetőek a beteg előrehaladott életkorára vagy állapotára; a lehetséges állapotromlás várhatóan megelőzhető 1 vagy 2 órán belüli beavatkozással.",
      "typical": [
        "időskori demenciához társuló zavartság (krónikus, a szokásos tudatállapottól el nem tér)",
        "húgyúti fertőzések és panaszok (enyhe vizelési zavar)",
        "székrekedés (enyhe fájdalom <4/10)"
      ],
      "source": [
        {
          "doc": "jegyzet",
          "page": 44
        },
        {
          "doc": "jegyzet",
          "page": 55
        },
        {
          "doc": "jegyzet",
          "page": 114
        },
        {
          "doc": "jegyzet",
          "page": 256
        },
        {
          "doc": "tankonyv",
          "page": 24
        },
        {
          "doc": "tankonyv",
          "page": 27
        },
        {
          "doc": "jegyzet",
          "page": 32
        },
        {
          "doc": "tankonyv",
          "page": 22
        }
      ]
    },
    {
      "level": 5,
      "name": "Halasztható",
      "color": "#1A5276",
      "colorName": "kék",
      "targetTime": "orvosi értékelés 120 percen belül",
      "nurseTime": "120 percen belül",
      "reassess": "120 percenként",
      "description": "A panaszok akutak, de nem sürgősek, vagy egy krónikus állapot részei lehetnek (bizonytalan állapotromlással vagy anélkül). A betegség vagy sérülés vizsgálata halasztható, vagy a triázst követő elsődleges orvosi megítélés alapján a kórház/egészségügyi intézmény más területére átirányítható.",
      "typical": [
        "enyhe hasmenés jelentős folyadékvesztés/kiszáradás nélkül",
        "kisebb rovarcsípések (+/- enyhe akut perifériás fájdalom)",
        "komplikációmentes seben kötéscsere igénye",
        "szokásos (nem tüneti) gyógyszerek felírásának kérése"
      ],
      "source": [
        {
          "doc": "jegyzet",
          "page": 44
        },
        {
          "doc": "jegyzet",
          "page": 58
        },
        {
          "doc": "jegyzet",
          "page": 114
        },
        {
          "doc": "jegyzet",
          "page": 256
        },
        {
          "doc": "tankonyv",
          "page": 24
        },
        {
          "doc": "tankonyv",
          "page": 27
        },
        {
          "doc": "jegyzet",
          "page": 32
        },
        {
          "doc": "tankonyv",
          "page": 22
        }
      ]
    }
  ],
  "complaints": [
    {
      "id": "ketoldali-lab-duzzanat-odema",
      "name": "Kétoldali láb duzzanat / ödéma",
      "category": "Szív- és érrendszeri",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "dagadt a lába",
        "vizesedik a lába",
        "feldagadt boka",
        "mindkét lába duzzadt",
        "vizes a lába",
        "puffadt láb"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "szivleallas-nem-traumas-eredetu",
      "name": "Szívleállás (nem traumás eredetű)",
      "category": "Szív- és érrendszeri",
      "defaultLevel": null,
      "notes": "Jegyzet-változat (2022): \"Keringésmegállás (nem trauma miatt)\".",
      "aliases": [
        "nem lélegzik nincs pulzus",
        "keringésleállás",
        "újraélesztés",
        "reanimáció",
        "leállt a szíve",
        "nem ver a szíve",
        "klinikai halál",
        "cardiac arrest",
        "resuscitatio"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "szivleallas-traumas-eredetu",
      "name": "Szívleállás (traumás eredetű)",
      "category": "Szív- és érrendszeri",
      "defaultLevel": null,
      "notes": "Jegyzet-változat (2022): \"Keringésmegállás (trauma miatt)\".",
      "aliases": [
        "baleset után nincs pulzus",
        "sérülés utáni szívleállás",
        "traumás reanimáció",
        "baleset után nem lélegzik"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "mellkasi-fajdalom-sziv-eredetu",
      "name": "Mellkasi fájdalom (szív eredetű)",
      "category": "Szív- és érrendszeri",
      "defaultLevel": null,
      "notes": "Jegyzet-változat (2022): \"Mellkasi fájdalom (típusos angina)\".",
      "aliases": [
        "infarktus",
        "szívinfarktus",
        "szívroham",
        "mellkas szorít",
        "szorító mellkasi fájdalom",
        "nyomja a mellkasát",
        "fáj a szíve",
        "bal karba sugárzó fájdalom",
        "angina",
        "ami",
        "acs",
        "szívtáji fájdalom"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "mellkasi-fajdalom-nem-sziv-eredetu",
      "name": "Mellkasi fájdalom (nem szív eredetű)",
      "category": "Szív- és érrendszeri",
      "defaultLevel": null,
      "notes": "Jegyzet-változat (2022): \"Mellkasi fájdalom (nem típusos angina)\".",
      "aliases": [
        "szúró mellkasi fájdalom",
        "fáj ha lélegzik",
        "bordafájás",
        "mellkasfal fájdalom",
        "légzésre fokozódó mellkasi fájdalom"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "hideg-pulzus-nelkuli-vegtag",
      "name": "Hideg pulzus nélküli végtag",
      "category": "Szív- és érrendszeri",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "hideg a lába nincs pulzus",
        "elzáródott ér",
        "fehér hideg végtag",
        "nem tapintható pulzus",
        "verőér elzáródás",
        "ischaemiás végtag"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "generalizalt-odema",
      "name": "Generalizált ödéma",
      "category": "Szív- és érrendszeri",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "egész teste duzzadt",
        "vizesedés",
        "általános vizenyő",
        "mindenhol dagadt",
        "vizretenció"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "altalanos-gyengeseg",
      "name": "Általános gyengeség",
      "category": "Szív- és érrendszeri",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "gyenge",
        "erőtlen",
        "levert",
        "elesett állapotú",
        "nincs ereje",
        "bágyadt",
        "kimerült",
        "rossz általános állapot",
        "nem eszik nem iszik",
        "nem eszik-iszik",
        "nemeszik",
        "nem iszik",
        "elesett általános állapot",
        "elesett",
        "állapotromlás",
        "állapotrosszabbodás",
        "állapota rosszabbodott",
        "leromlott",
        "legyengült",
        "ágyban fekszik",
        "ágyhoz kötött",
        "nem kel fel",
        "rosszul van",
        "rosszullét",
        "hanyatlik",
        "elerőtlenedett"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "hipertenzio",
      "name": "Hipertenzió",
      "category": "Szív- és érrendszeri",
      "defaultLevel": null,
      "notes": "Jegyzet-változat (2022): \"Magas vérnyomás\".",
      "aliases": [
        "magas vérnyomás",
        "magas a vérnyomása",
        "felment a vérnyomása",
        "vérnyomás magas",
        "vérnyomás kiugrás",
        "hipertónia",
        "rr magas"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "szivdobogas-erzes-rendszertelen-szivdobbanasok",
      "name": "Szívdobogás érzés / rendszertelen szívdobbanások",
      "category": "Szív- és érrendszeri",
      "defaultLevel": null,
      "notes": "Jegyzet-változat (2022): \"Rendetlen szívverés / Palpitatio\".",
      "aliases": [
        "szívdobogás",
        "kihagy a szíve",
        "szapora szívverés",
        "kalimpál a szíve",
        "rendszertelen szívverés",
        "ritmuszavar",
        "palpitáció",
        "gyors pulzus",
        "szívritmuszavar"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "ajulas-ajulaskozeli-allapot",
      "name": "Ájulás / ájulásközeli állapot",
      "category": "Szív- és érrendszeri",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "elájult",
        "ájulás",
        "összeesett",
        "elszédült és elesett",
        "elvesztette az eszméletét rövid időre",
        "rosszul lett elájult",
        "syncope",
        "collapsus",
        "eszméletvesztés rövid"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "egyoldali-voros-es-forro-vegtag",
      "name": "Egyoldali vörös és forró végtag",
      "category": "Szív- és érrendszeri",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "egyik lába piros és meleg",
        "vörös meleg láb",
        "trombózis gyanú",
        "mélyvénás trombózis",
        "duzzadt piros láb",
        "dvt",
        "vérrög a lábban"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "fulfajas",
      "name": "Fülfájás",
      "category": "Fül",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fáj a füle",
        "fülfájdalom",
        "gyerek füle fáj",
        "középfülgyulladás",
        "otalgia"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "fulvaladekozas",
      "name": "Fülváladékozás",
      "category": "Fül",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "folyik a füle",
        "váladékozik a füle",
        "gennyes fül",
        "genny a fülből"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "fulserules",
      "name": "Fülsérülés",
      "category": "Fül",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "megütötte a fülét",
        "sérült fül",
        "fülkagyló sérülés",
        "dobhártya sérülés"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "idegen-test-a-fulben",
      "name": "Idegen test a fülben",
      "category": "Fül",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "valami a fülében",
        "beragadt tárgy a fülben",
        "gyöngy a fülben",
        "rovar a fülben",
        "bogár a fülben"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "hallasvesztes",
      "name": "Hallásvesztés",
      "category": "Fül",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "nem hall",
        "elment a hallása",
        "rosszul hall",
        "süket lett",
        "hirtelen halláscsökkenés",
        "eldugult a füle nem hall"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "tinnitus-fulzugas",
      "name": "Tinnitus, fülzúgás",
      "category": "Fül",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "zúg a füle",
        "fülzúgás",
        "cseng a füle",
        "sípol a füle",
        "búg a füle"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "fogaszati-iny-problemak",
      "name": "Fogászati / íny problémák",
      "category": "Fül-orr-gége",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fáj a foga",
        "fogfájás",
        "íny fáj",
        "duzzadt íny",
        "tályog a szájban",
        "fogtályog",
        "vérzik az ínye"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "nyelesi-nehezitettseg-dysphagia",
      "name": "Nyelési nehezítettség / dysphagia",
      "category": "Fül-orr-gége",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "nem tud nyelni",
        "fáj a nyelés",
        "nehezen nyel",
        "akadozik a nyelés",
        "elakad a falat",
        "dysphagia"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "arc-fajdalom-nem-traumas-nem-fog-eredetu",
      "name": "Arc fájdalom (nem traumás / nem fog eredetű)",
      "category": "Fül-orr-gége",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fáj az arca",
        "arcfájdalom",
        "arcüreggyulladás fájdalom",
        "trigeminus fájdalom"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "arc-trauma",
      "name": "Arc trauma",
      "category": "Fül-orr-gége",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "arcára esett",
        "arcsérülés",
        "megütötte az arcát",
        "arccsonttörés",
        "arcon ütötték"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "nyak-duzzanat-fajdalom",
      "name": "Nyak duzzanat / fájdalom",
      "category": "Fül-orr-gége",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fáj a nyaka",
        "duzzadt nyak",
        "csomó a nyakon",
        "nyaki nyirokcsomó",
        "dagadt nyak"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "nyaki-trauma",
      "name": "Nyaki trauma",
      "category": "Fül-orr-gége",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "nyakára esett",
        "nyaksérülés",
        "megütötte a nyakát",
        "nyakon ütötték"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "torokfajas",
      "name": "Torokfájás",
      "category": "Fül-orr-gége",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fáj a torka",
        "torokgyulladás",
        "kaparja a torkát",
        "nyelésre fáj a torka",
        "gennyes mandula",
        "mandulagyulladás",
        "pharyngitis"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "orrverzes",
      "name": "Orrvérzés",
      "category": "Orr",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "vérzik az orra",
        "folyik a vér az orrából",
        "orrból vérzés",
        "epistaxis"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "idegen-test-az-orrban",
      "name": "Idegen test az orrban",
      "category": "Orr",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "valami az orrában",
        "beragadt tárgy az orrban",
        "gyöngy az orrban",
        "gyerek orrába dugott valamit"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "orrdugulas-szenanatha",
      "name": "Orrdugulás / szénanátha",
      "category": "Orr",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "bedugult az orra",
        "dugult orr",
        "folyik az orra",
        "orrfolyás",
        "szénanátha",
        "allergiás nátha",
        "tüsszög"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "orr-serules",
      "name": "Orr sérülés",
      "category": "Orr",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "orrára esett",
        "megütötte az orrát",
        "orrtörés",
        "eltört az orra",
        "orron ütötték"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "urti-felso-leguti-fertozes",
      "name": "URTI (felső légúti fertőzés)",
      "category": "Orr",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "megfázás",
        "nátha",
        "meg van fázva",
        "felső légúti hurut",
        "orrfolyás és torokfájás",
        "megfázott"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "kemiai-artalmak",
      "name": "Kémiai ártalmak",
      "category": "Exogén ártalmak",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "vegyszer érte",
        "sav ömlött rá",
        "lúg érte",
        "vegyi sérülés",
        "maró anyag",
        "vegyszermarás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "elektromos-serulesek",
      "name": "Elektromos sérülések",
      "category": "Exogén ártalmak",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "áramütés",
        "megrázta az áram",
        "villámcsapás",
        "áram alá került"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "fagyas",
      "name": "Fagyás",
      "category": "Exogén ártalmak",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "megfagyott a lába",
        "fagyási sérülés",
        "elfagyott ujjak",
        "fagyott bőr"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "hypothermia",
      "name": "Hypothermia",
      "category": "Exogén ártalmak",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "kihűlt",
        "lehűlt a teste",
        "átfázott súlyosan",
        "kihűlés",
        "alacsony testhőmérséklet"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "gazmergezes",
      "name": "Gázmérgezés",
      "category": "Exogén ártalmak",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "szén-monoxid mérgezés",
        "gázt szívott be",
        "füstmérgezés",
        "co mérgezés",
        "füstöt lélegzett be"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "fulladaskozeli-allapot",
      "name": "Fulladásközeli állapot",
      "category": "Exogén ártalmak",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "majdnem megfulladt vízben",
        "vízbefúlás közeli",
        "vízből mentették ki",
        "kis híján megfulladt"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "hasi-terime-feszules",
      "name": "Hasi terime / feszülés",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "Jegyzet-változat (2022): \"Hasi terime / Puffadás\".",
      "aliases": [
        "feszül a hasa",
        "kemény has",
        "puffadt kemény has",
        "hasi csomó",
        "dagadt has"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "hasi-fajdalom",
      "name": "Hasi fájdalom",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "hasfájás",
        "fáj a hasa",
        "gyomorfájás",
        "görcsöl a hasa",
        "hasgörcs",
        "gyomorgörcs",
        "fáj a gyomra",
        "hascsikarás",
        "epegörcs",
        "vakbélgyulladás gyanú"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "vegbelserules",
      "name": "Végbélsérülés",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "Jegyzet-változat (2022): \"Anus / végbél trauma\".",
      "aliases": [
        "végbél sérülés",
        "sérült végbél",
        "végbéltáji sérülés"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "anorexia",
      "name": "Anorexia",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "nem eszik",
        "étvágytalan",
        "nincs étvágya",
        "elment az étvágya",
        "táplálékvisszautasítás",
        "nem kér enni",
        "táplálékmegtagadás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "veres-szeklet-melena",
      "name": "Véres széklet / melena",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "véres széklet",
        "vér a székletben",
        "fekete széklet",
        "vérzik ha székel",
        "kátrányszéklet",
        "melena",
        "véres kakálás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "szekrekedes",
      "name": "Székrekedés",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "nem tud székelni",
        "nincs széklete",
        "keményszék",
        "napok óta nem kakál",
        "elakadt széklet",
        "obstipáció"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "hasmenes",
      "name": "Hasmenés",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "hasmenés",
        "híg széklet",
        "sokat kakál",
        "gyakori híg széklet",
        "hasmars",
        "diarrhoea",
        "folyós széklet"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 107
        }
      ]
    },
    {
      "id": "taplalasi-nehezsegek-ujszulotteknel",
      "name": "Táplálási nehézségek újszülötteknél",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "Gyermek/újszülött panasz.",
      "aliases": [
        "nem eszik a baba",
        "nem szopik",
        "csecsemő táplálási gond",
        "baba nem iszik",
        "visszautasítja a mellet"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 209
        }
      ]
    },
    {
      "id": "idegen-test-a-vegbelben",
      "name": "Idegen test a végbélben",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "valami a végbélben",
        "tárgy a végbélben",
        "beragadt tárgy a végbélbe"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "lagyeki-fajdalom-terime",
      "name": "Lágyéki fájdalom / terime",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fáj a lágyéka",
        "csomó a lágyékban",
        "lágyéksérv",
        "duzzanat a lágyékban",
        "sérv"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "csuklas",
      "name": "Csuklás",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "csuklik",
        "csuklás nem múlik",
        "állandó csuklás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "sargasag",
      "name": "Sárgaság",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "sárga a bőre",
        "sárgul a szeme",
        "sárgás bőr",
        "icterus"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "neonatalis-sargasag",
      "name": "Neonatális sárgaság",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "Gyermek/újszülött panasz. Jegyzet: \"Újszülöttkori sárgaság\".",
      "aliases": [
        "sárga a baba",
        "újszülött sárgaság",
        "sárgul a csecsemő",
        "sárga a baba bőre"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 209
        }
      ]
    },
    {
      "id": "nyelocsovi-szajuregi-idegen-test",
      "name": "Nyelőcsövi / szájüregi idegen test",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "Jegyzet-változat (2022): \"Idegentest a szájban / nyelőcsőben\".",
      "aliases": [
        "lenyelt valamit",
        "beragadt a falat",
        "gyerek lenyelt egy tárgyat",
        "elakadt a nyelőcsőben",
        "lenyelt érme"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "vegbel-vegbel-kornyeki-fajdalom",
      "name": "Végbél / végbél környéki fájdalom",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fáj a végbele",
        "fáj a fenéke",
        "aranyér fájdalom",
        "aranyér",
        "végbélfájás",
        "haemorrhoid"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "hanyas-hanyinger",
      "name": "Hányás / hányinger",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "hány",
        "okádik",
        "hányingere van",
        "rosszul van hány",
        "émelyeg",
        "hányinger",
        "kell hánynia",
        "öklendezik"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "verhanyas",
      "name": "Vérhányás",
      "category": "Gastrointestinalis",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "vért hány",
        "véreset hány",
        "vér a hányásban",
        "haematemesis",
        "kávézacc hányás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "derektaji-fajdalom",
      "name": "Deréktáji fájdalom",
      "category": "Genito-urinaris",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fáj a dereka",
        "veséje táján fáj",
        "vesetáji fájdalom",
        "vesekő gyanú",
        "vesegörcs",
        "oldalfájás",
        "derékfájás vese"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "genitalis-elvaltozasok",
      "name": "Genitális elváltozások",
      "category": "Genito-urinaris",
      "defaultLevel": null,
      "notes": "Jegyzet-változat (2022): \"Nemi szervek váladékozása / sérülése\".",
      "aliases": [
        "elváltozás a nemi szerven",
        "kiütés a nemi szerven",
        "genitális kinövés",
        "szemölcs a nemi szerven"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 125
        }
      ]
    },
    {
      "id": "genitalis-trauma",
      "name": "Genitalis trauma",
      "category": "Genito-urinaris",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "nemi szerv sérülés",
        "ágyékon rúgták",
        "here sérülés",
        "sérült nemi szerv"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "vervizeles",
      "name": "Vérvizelés",
      "category": "Genito-urinaris",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "véres vizelet",
        "vérzik pisiléskor",
        "vér a vizeletben",
        "véres pisi",
        "haematuria",
        "piros a vizelete"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "oliguria",
      "name": "Oliguria",
      "category": "Genito-urinaris",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "kevés vizelet",
        "alig pisil",
        "keveset vizel",
        "nem termel vizeletet"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "penisz-duzzanat",
      "name": "Pénisz duzzanat",
      "category": "Genito-urinaris",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "duzzadt pénisz",
        "dagadt hímvessző",
        "pénisz duzzanata",
        "priapismus"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 107
        }
      ]
    },
    {
      "id": "polyuria",
      "name": "Polyuria",
      "category": "Genito-urinaris",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "sokat pisil",
        "gyakori vizelés",
        "sok vizelet",
        "állandóan vizel"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "herefajdalom-vagy-duzzanat",
      "name": "Herefájdalom vagy duzzanat",
      "category": "Genito-urinaris",
      "defaultLevel": null,
      "notes": "Jegyzet-változat (2022): \"Herezacskó fájdalom / duzzanat\".",
      "aliases": [
        "fáj a heréje",
        "dagadt here",
        "herefájás",
        "duzzadt herék",
        "herefájdalom"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "vizelet-retencio",
      "name": "Vizelet retenció",
      "category": "Genito-urinaris",
      "defaultLevel": null,
      "notes": "Jegyzet-változat (2022): \"Vizeletrekedés\".",
      "aliases": [
        "nem tud vizelni",
        "nem tud pisilni",
        "vizeletvisszatartás",
        "nem jön a vizelet",
        "telt hólyag nem ürül"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "hugyuti-fertozeses-panaszok",
      "name": "Húgyúti fertőzéses panaszok",
      "category": "Genito-urinaris",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "csíp mikor pisil",
        "égő vizelés",
        "gyakran pisil és csíp",
        "hólyaghurut",
        "húgyúti fertőzés",
        "fáj a vizelés",
        "cystitis"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "szorongas-krizishelyzet",
      "name": "Szorongás / krízishelyzet",
      "category": "Mentális egészség",
      "defaultLevel": null,
      "notes": "Jegyzet-változat (2022): \"Nyugtalanság / Krízisállapot\".",
      "aliases": [
        "szorong",
        "pánikroham",
        "pánik",
        "idegösszeomlás",
        "krízis",
        "erős szorongás",
        "félelemroham"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "furcsa-viselkedes",
      "name": "Furcsa viselkedés",
      "category": "Mentális egészség",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "furcsán viselkedik",
        "össze-vissza beszél",
        "zavartan viselkedik",
        "szokatlan viselkedés"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "a-beteg-szocialis-helyzetebol-adodo-panasz",
      "name": "A beteg szociális helyzetéből adódó panasz",
      "category": "Mentális egészség",
      "defaultLevel": null,
      "notes": "Felnőttnél is: nemi erőszak, idősek bántalmazása, elhanyagolás stb. (jegyzet lábjegyzet).",
      "aliases": [],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 209
        }
      ]
    },
    {
      "id": "depresszio-ongyilkossagi-szandek-onveszelyesseg",
      "name": "Depresszió / öngyilkossági szándék / önveszélyesség",
      "category": "Mentális egészség",
      "defaultLevel": null,
      "notes": "Jegyzet-változat (2022): \"Depresszió / Öngyilkosság / Önsértés\".",
      "aliases": [
        "öngyilkos akar lenni",
        "meg akarja ölni magát",
        "depressziós",
        "önveszélyes",
        "öngyilkossági gondolatok",
        "bántaná magát",
        "levágta magát",
        "szuicid"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "hallucinaciok-teveszmek",
      "name": "Hallucinációk / téveszmék",
      "category": "Mentális egészség",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "hangokat hall",
        "látomásai vannak",
        "üldözik érzés",
        "téveszmék",
        "hallucinál",
        "paranoid"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "almatlansag",
      "name": "Álmatlanság",
      "category": "Mentális egészség",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "nem tud aludni",
        "álmatlanság",
        "napok óta nem alszik",
        "alvászavar"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "szocialis-problemak",
      "name": "Szociális problémák",
      "category": "Mentális egészség",
      "defaultLevel": null,
      "notes": "",
      "aliases": [],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "eroszakos-kozveszelyes-viselkedes",
      "name": "Erőszakos / közveszélyes viselkedés",
      "category": "Mentális egészség",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "agresszív",
        "erőszakos beteg",
        "veszélyes viselkedés",
        "mást bántana",
        "agresszió",
        "dühöng"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 88
        }
      ]
    },
    {
      "id": "a-gyermek-aggaszto-viselkedese",
      "name": "A gyermek aggasztó viselkedése",
      "category": "Mentális egészség",
      "defaultLevel": null,
      "notes": "Gyermek panasz. Jegyzet-változatok: \"A gyermek antiszociális viselkedése\", \"Zavaró, bomlasztó magatartás\".",
      "aliases": [
        "gyerek furcsán viselkedik",
        "aggasztó gyerek viselkedés",
        "visszahúzódó gyerek",
        "viselkedészavar gyermek"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 82
        },
        {
          "doc": "jegyzet",
          "page": 107
        },
        {
          "doc": "jegyzet",
          "page": 209
        }
      ]
    },
    {
      "id": "modosult-tudatallapot",
      "name": "Módosult tudatállapot",
      "category": "Neurológiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "nem reagál",
        "aluszékony",
        "nehezen ébreszthető",
        "kába",
        "tudatzavar",
        "somnolens",
        "bódult",
        "csökkent tudat"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 107
        }
      ]
    },
    {
      "id": "zavartsag",
      "name": "Zavartság",
      "category": "Neurológiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "zavart",
        "összezavarodott",
        "dezorientált",
        "nem tudja hol van",
        "megzavarodott",
        "konfúzus"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 107
        }
      ]
    },
    {
      "id": "vegtaggyengeseg-cva-tunetek",
      "name": "Végtaggyengeség / CVA tünetek",
      "category": "Neurológiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "stroke",
        "szélütés",
        "agyvérzés gyanú",
        "lebénult a fél oldala",
        "félrehúzódik a szája",
        "nem tudja mozgatni a karját",
        "elakadt a beszéde",
        "féloldali gyengeség",
        "cva",
        "agyi történés"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "tartas-nelkuli-gyermek",
      "name": "Tartás nélküli gyermek",
      "category": "Neurológiai",
      "defaultLevel": null,
      "notes": "Gyermek panasz. Jegyzet-változat: \"Tónustalan gyermek\".",
      "aliases": [
        "ernyedt baba",
        "petyhüdt csecsemő",
        "nem tartja a fejét",
        "lebernyedt gyermek"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 209
        }
      ]
    },
    {
      "id": "jaraszavar-ataxia",
      "name": "Járászavar / ataxia",
      "category": "Neurológiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "bizonytalan járás",
        "tántorog",
        "dülöngél",
        "nem tud egyenesen menni",
        "ataxia",
        "egyensúlyzavar járás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "fejserules",
      "name": "Fejsérülés",
      "category": "Neurológiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fejére esett",
        "beütötte a fejét",
        "fejsérülés",
        "fejét ütötte",
        "koponyasérülés"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "fejfajas",
      "name": "Fejfájás",
      "category": "Neurológiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fáj a feje",
        "fejfájás",
        "migrén",
        "feji fájás",
        "erős fejfájás",
        "hasogató fejfájás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "gorcsroham",
      "name": "Görcsroham",
      "category": "Neurológiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "görcsölt",
        "rángógörcs",
        "epilepsziás roham",
        "rángatózik",
        "görcsrohama volt",
        "seizure",
        "epileptic",
        "eszméletlen és rángott",
        "elektrosokkszerű rángás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "erzeskieses-paraesthezia",
      "name": "Érzéskiesés / paraesthézia",
      "category": "Neurológiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "zsibbad a keze",
        "zsibbadás",
        "elzsibbadt a lába",
        "bizsergés",
        "nem érzi a végtagját",
        "paraesthesia"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "remeges",
      "name": "Remegés",
      "category": "Neurológiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "remeg a keze",
        "reszket",
        "remegés",
        "kézremegés",
        "tremor"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "szedules",
      "name": "Szédülés",
      "category": "Neurológiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "szédül",
        "forog vele a világ",
        "szédülés",
        "kóválygás",
        "forgó szédülés",
        "vertigo",
        "egyensúlyvesztés"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "idegen-test-a-vaginaban",
      "name": "Idegen test a vaginában",
      "category": "Nőgyógyászat",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "valami a hüvelyben",
        "beragadt tampon",
        "tárgy a hüvelyben",
        "elakadt tampon"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "nagyajkak-duzzanata",
      "name": "Nagyajkak duzzanata",
      "category": "Nőgyógyászat",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "duzzadt szeméremajkak",
        "dagadt szeméremajak",
        "duzzanat a hüvelynél",
        "bartholin ciszta"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "menstruacios-problemak",
      "name": "Menstruációs problémák",
      "category": "Nőgyógyászat",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "erős menstruáció",
        "elmaradt menstruáció",
        "fájdalmas menzesz",
        "menstruációs görcs",
        "rendszertelen menstruáció",
        "erős vérzés menstruáció"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "terhesseg-20-het",
      "name": "Terhesség < 20 hét",
      "category": "Nőgyógyászat",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "terhes korai",
        "kismama korai terhesség",
        "várandós fájdalom korai",
        "vetélés gyanú",
        "korai terhességi panasz"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "terhesseg-20-het-2",
      "name": "Terhesség > 20 hét",
      "category": "Nőgyógyászat",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "terhes késői",
        "kismama fájdalmak",
        "várandós vérzés késői",
        "szülés közeleg",
        "megindult a szülés",
        "elfolyt a magzatvíz"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "nemi-eroszak",
      "name": "Nemi erőszak",
      "category": "Nőgyógyászat",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "megerőszakolták",
        "szexuális bántalmazás",
        "nemi erőszak áldozata",
        "megtámadták szexuálisan"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "huvelyi-verzes",
      "name": "Hüvelyi vérzés",
      "category": "Nőgyógyászat",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "vérzik a hüvelye",
        "hüvelyi vérzés",
        "nem menstruációs vérzés",
        "vérzik odalent",
        "hüvelyből vérzés"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "huvelyvaladekozas",
      "name": "Hüvelyváladékozás",
      "category": "Nőgyógyászat",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "folyás",
        "hüvelyfolyás",
        "váladékozik a hüvelye",
        "erős folyás",
        "büdös folyás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "huvelyfajdalom-viszketes",
      "name": "Hüvelyfájdalom / viszketés",
      "category": "Nőgyógyászat",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "viszket a hüvelye",
        "fáj a hüvelye",
        "hüvelyi viszketés",
        "gombás fertőzés hüvely",
        "csíp odalent"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "kemiai-szemartalom",
      "name": "Kémiai szemártalom",
      "category": "Ophthalmológia",
      "defaultLevel": null,
      "notes": "Jegyzet-változat: \"Kémiai szemsérülés\".",
      "aliases": [
        "vegyszer ment a szemébe",
        "sav a szemben",
        "lúg a szemben",
        "maró anyag a szemben"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 107
        }
      ]
    },
    {
      "id": "kettoslatas",
      "name": "Kettőslátás",
      "category": "Ophthalmológia",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "duplán lát",
        "kettőt lát",
        "kettős látás",
        "diplopia"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "szem-fajdalom",
      "name": "Szem fájdalom",
      "category": "Ophthalmológia",
      "defaultLevel": null,
      "notes": "Jegyzet: \"Szemfájdalom\".",
      "aliases": [
        "fáj a szeme",
        "szemfájdalom",
        "szúró szemfájás",
        "nyomó szemfájdalom"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 107
        }
      ]
    },
    {
      "id": "szemserules",
      "name": "Szemsérülés",
      "category": "Ophthalmológia",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "megütötte a szemét",
        "szemsérülés",
        "beleütött a szemébe",
        "labda a szemébe"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "idegen-test-a-szemben",
      "name": "Idegen test a szemben",
      "category": "Ophthalmológia",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "valami a szemében",
        "szálka a szemben",
        "fémdarab a szemben",
        "porszem a szemben",
        "beleesett valami a szemébe"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 107
        }
      ]
    },
    {
      "id": "voros-szem-valadekozas",
      "name": "Vörös szem / váladékozás",
      "category": "Ophthalmológia",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "vörös szem",
        "csipás szem",
        "kötőhártya gyulladás",
        "piros a szeme",
        "váladékozik a szeme",
        "conjunctivitis"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "szemkornyeki-duzzanat",
      "name": "Szemkörnyéki duzzanat",
      "category": "Ophthalmológia",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "dagadt szem",
        "duzzadt szemhéj",
        "bedagadt a szeme",
        "árpa a szemen"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "fenykerules",
      "name": "Fénykerülés",
      "category": "Ophthalmológia",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "zavarja a fény",
        "fényérzékeny",
        "fényre fáj a szeme",
        "photophobia"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "latasi-zavarok",
      "name": "Látási zavarok",
      "category": "Ophthalmológia",
      "defaultLevel": null,
      "notes": "Jegyzet: \"Látászavar\".",
      "aliases": [
        "homályosan lát",
        "elmosódott látás",
        "nem lát jól",
        "fátyolos látás",
        "látásromlás",
        "vakfolt",
        "hirtelen látásvesztés"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 107
        }
      ]
    },
    {
      "id": "amputacio",
      "name": "Amputáció",
      "category": "Ortopédiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "leszakadt ujj",
        "levágott végtag",
        "amputált ujj",
        "leszakadt kéz",
        "levágott ujj"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "hat-fajdalom",
      "name": "Hát fájdalom",
      "category": "Ortopédiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fáj a háta",
        "hátfájás",
        "derékfájás",
        "megrándult a háta",
        "lumbágó"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "izuleti-duzzanat",
      "name": "Izületi duzzanat",
      "category": "Ortopédiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "dagadt ízület",
        "duzzadt térd",
        "bedagadt boka",
        "vizes térd",
        "gyulladt ízület"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "alsovegtagi-serules",
      "name": "Alsóvégtagi sérülés",
      "category": "Ortopédiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "megsérült a lába",
        "lábsérülés",
        "kificamodott a bokája",
        "eltört a lába",
        "elesett és fáj a lába",
        "bokaficam"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "alsovegtagi-fajdalom",
      "name": "Alsóvégtagi fájdalom",
      "category": "Ortopédiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fáj a lába",
        "lábfájdalom",
        "fáj a térde",
        "fáj a bokája",
        "combfájás",
        "vádli fájás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "gyermekgyogyaszati-jaras-es-testtartasi-zavar",
      "name": "Gyermekgyógyászati járás és testtartási zavar",
      "category": "Ortopédiai",
      "defaultLevel": null,
      "notes": "Gyermek panasz. Jegyzet: \"Gyermekgyógyászati testtartási problémák, fájdalmas járás\".",
      "aliases": [
        "gyerek sántít",
        "gyerek nem lép a lábára",
        "gyerek járászavar",
        "gyerek húzza a lábát"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 209
        }
      ]
    },
    {
      "id": "traumas-hat-gerinc-serules",
      "name": "Traumás hát / gerinc sérülés",
      "category": "Ortopédiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "hátára esett",
        "gerincsérülés",
        "hátsérülés baleset",
        "gerincére esett",
        "esés utáni hátfájás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "felsovegtagi-serules",
      "name": "Felsővégtagi sérülés",
      "category": "Ortopédiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "megsérült a keze",
        "kézsérülés",
        "eltört a karja",
        "kificamodott a válla",
        "karsérülés",
        "elesett és fáj a karja"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "felsovegtagi-fajdalom",
      "name": "Felsővégtagi fájdalom",
      "category": "Ortopédiai",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fáj a karja",
        "karfájdalom",
        "fáj a válla",
        "fáj a könyöke",
        "csuklófájás",
        "vállfájás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 107
        }
      ]
    },
    {
      "id": "allergias-reakcio",
      "name": "Allergiás reakció",
      "category": "Légzőrendszeri",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "allergiás reakció",
        "csalánkiütés",
        "felfújódott az arca",
        "allergiás lett",
        "dagadt ajak allergia",
        "anafilaxia",
        "allergiás duzzanat"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "apnoes-periodus-csecsemonel",
      "name": "Apnoés periódus csecsemőnél",
      "category": "Légzőrendszeri",
      "defaultLevel": null,
      "notes": "Gyermek/csecsemő panasz. Jegyzet: \"Csecsemőkori apnoés időszakok\".",
      "aliases": [
        "baba nem lélegzett",
        "csecsemő légzéskimaradás",
        "elkékült a baba légzéskimaradás",
        "apnoe csecsemő"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 209
        }
      ]
    },
    {
      "id": "kohoges-torokszukulet",
      "name": "Köhögés / torokszűkület",
      "category": "Légzőrendszeri",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "köhög",
        "köhögés",
        "ugató köhögés",
        "krupp",
        "köhögési roham"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "verkopes",
      "name": "Vérköpés",
      "category": "Légzőrendszeri",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "vért köp",
        "véreset köp",
        "vér a köpetben",
        "haemoptysis",
        "köhög és vért lát"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "hyperventillacio",
      "name": "Hyperventilláció",
      "category": "Légzőrendszeri",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "kapkodva lélegzik",
        "hiperventilál",
        "túllélegzés",
        "gyors felszínes légzés szorongás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "legzesleallas",
      "name": "Légzésleállás",
      "category": "Légzőrendszeri",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "nem lélegzik",
        "abbahagyta a légzést",
        "leállt a légzése",
        "légzésleállás",
        "nem vesz levegőt"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "leguti-idegentest",
      "name": "Légúti idegentest",
      "category": "Légzőrendszeri",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "félrenyelt",
        "megakadt a torkán",
        "fuldoklik falattól",
        "idegen test a légútban",
        "megakadt étel a torkán"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "legszomj",
      "name": "Légszomj",
      "category": "Légzőrendszeri",
      "defaultLevel": null,
      "notes": "Jegyzet: \"Nehézlégzés\".",
      "aliases": [
        "nem kap levegőt",
        "fullad",
        "levegőért kapkod",
        "nehezen lélegzik",
        "légszomj",
        "fojtogató érzés",
        "dyspnoe",
        "kapkodja a levegőt",
        "nehéz a légzés"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 107
        }
      ]
    },
    {
      "id": "sztridor",
      "name": "Sztridor",
      "category": "Légzőrendszeri",
      "defaultLevel": null,
      "notes": "Gyermeknél is: jegyzet \"Stridor\".",
      "aliases": [
        "sípoló légzés",
        "zajos légzés",
        "hörgő légzés belégzés",
        "stridor"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 209
        }
      ]
    },
    {
      "id": "nehezlegzes-egyeb-panaszok-nelkul",
      "name": "Nehézlégzés egyéb panaszok nélkül",
      "category": "Légzőrendszeri",
      "defaultLevel": null,
      "notes": "Jegyzet (gyermek): \"Sípoló légzés – zihálás (más panasz nélkül)\".",
      "aliases": [
        "nehezen lélegzik",
        "elnehezült légzés",
        "fárad a légzéstől"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 209
        }
      ]
    },
    {
      "id": "horzsolas",
      "name": "Horzsolás",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "lehorzsolta",
        "horzsolás",
        "lehorzsolt bőr",
        "felhorzsolta a térdét"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "harapas",
      "name": "Harapás",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "megharapta a kutya",
        "kutyaharapás",
        "állatharapás",
        "harapás",
        "macska megharapta",
        "emberi harapás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "erintkezes-verrel-vagy-testvaladekokkal",
      "name": "Érintkezés vérrel vagy testváladékokkal",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "tűszúrás sérülés",
        "vérrel érintkezett",
        "más vére érte",
        "fertőző anyaggal érintkezés"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "eges",
      "name": "Égés",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "megégette magát",
        "égési sérülés",
        "leforrázta magát",
        "forró víz égés",
        "égett bőr",
        "megégett"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "cianozis",
      "name": "Cianózis",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "elkékült",
        "kék az ajka",
        "kékes bőr",
        "elkékültek az ujjai",
        "cyanosis"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "idegen-test-a-borben",
      "name": "Idegen test a bőrben",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "szálka a bőrben",
        "beletört tüske",
        "üvegszilánk a bőrben",
        "fémdarab a bőrben"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "tepett-szurt-seb",
      "name": "Tépett / szúrt seb",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "vágás",
        "vágott seb",
        "szúrt seb",
        "elvágta magát",
        "késsel megvágta",
        "mély vágás",
        "vérző seb"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "lokalizalt-duzzanat-borpir",
      "name": "Lokalizált duzzanat / bőrpír",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "piros duzzadt folt",
        "gyulladt bőrterület",
        "bőrpír és duzzanat",
        "cellulitis gyanú"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "duzzanat-daganat-borkemenyedes",
      "name": "Duzzanat, daganat, bőrkeményedés",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "csomó a bőr alatt",
        "göb a bőrben",
        "kemény csomó",
        "kinövés a bőrön"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "egyeb-bor-tunetek",
      "name": "Egyéb bőr tünetek",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "bőrelváltozás",
        "furcsa folt a bőrön",
        "bőrtünet"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "viszketes",
      "name": "Viszketés",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "viszket a bőre",
        "viszketés",
        "vakarja magát",
        "erős viszketés"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "kiutes",
      "name": "Kiütés",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "kiütés",
        "pattanás",
        "csalánkiütés",
        "piros foltok a bőrön",
        "kiütéses",
        "pörsenés",
        "kiütött a bőre"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "a-mellbimbo-kipirosodasa-es-erzekenysege",
      "name": "A mellbimbó kipirosodása és érzékenysége",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fáj a mellbimbó",
        "kipirosodott mellbimbó",
        "repedt mellbimbó szoptatás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "kapocs-es-varratszedes",
      "name": "Kapocs- és varratszedés",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "varratszedés",
        "kapocs kiszedés",
        "öltés kivétel",
        "kivarrás eltávolítás"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "fertozes-kizarasa",
      "name": "Fertőzés kizárása",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "spontan-beverzesek",
      "name": "Spontán bevérzések",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "kék foltok",
        "véraláfutás ok nélkül",
        "spontán zúzódás",
        "vérzik az ínye és kék foltok",
        "haematoma spontán"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "csipes",
      "name": "Csípés",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "megcsípte a méh",
        "darázscsípés",
        "rovarcsípés",
        "kullancscsípés",
        "csípés",
        "méhcsípés"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "sebellenorzes",
      "name": "Sebellenőrzés",
      "category": "Bőrgyógyászati",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "seb kontroll",
        "seb ellenőrzés",
        "gyógyul-e a seb"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "szajon-at-torteno-tuladagolas",
      "name": "Szájon át történő túladagolás",
      "category": "Gyógyszerrel történő visszaélések",
      "defaultLevel": null,
      "notes": "Jegyzet-változat: \"Túladagolás\".",
      "aliases": [
        "bevett sok gyógyszert",
        "gyógyszert nyelt",
        "túladagolta magát",
        "sok tablettát vett be",
        "gyógyszer túladagolás szájon át"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "gyogyszerrel-torteno-visszaeles-mergezes",
      "name": "Gyógyszerrel történő visszaélés / mérgezés",
      "category": "Gyógyszerrel történő visszaélések",
      "defaultLevel": null,
      "notes": "Jegyzet-változat: \"Káros anyag használata / Mérgezés\".",
      "aliases": [
        "mérgezés",
        "drogtúladagolás",
        "megmérgezte magát",
        "gyógyszermérgezés",
        "drog túladagolás",
        "intoxikáció"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "megvonasi-tunetek",
      "name": "Megvonási tünetek",
      "category": "Gyógyszerrel történő visszaélések",
      "defaultLevel": null,
      "notes": "Jegyzet-változat: \"Drog / gyógyszer megvonás\".",
      "aliases": [
        "elvonási tünetek",
        "megvonás",
        "alkoholmegvonás",
        "delírium tremens",
        "leszokás tünetei"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "izolalt-hasi-serules-tompa",
      "name": "Izolált hasi sérülés – tompa",
      "category": "Trauma",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "hasba rúgták",
        "hasi zúzódás",
        "hasát ütötte",
        "tompa hasi sérülés"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "izolalt-hasi-serules-athatolo",
      "name": "Izolált hasi sérülés – áthatoló",
      "category": "Trauma",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "hasba szúrták",
        "hasi lőtt seb",
        "áthatoló hasi sérülés",
        "késsel hasba szúrták"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "izolalt-mellkasi-serules-tompa",
      "name": "Izolált mellkasi sérülés – tompa",
      "category": "Trauma",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "mellkasát ütötte",
        "bordatörés gyanú",
        "mellkasi zúzódás",
        "mellkasba rúgták"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "izolalt-mellkasi-serules-athatolo",
      "name": "Izolált mellkasi sérülés – áthatoló",
      "category": "Trauma",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "mellkasba szúrták",
        "mellkasi lőtt seb",
        "áthatoló mellkasi sérülés",
        "késsel mellkasba szúrták"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        }
      ]
    },
    {
      "id": "sulyos-trauma-tompa",
      "name": "Súlyos trauma – tompa",
      "category": "Trauma",
      "defaultLevel": null,
      "notes": "Jegyzet-változat: \"Major trauma – tompa\".",
      "aliases": [
        "súlyos baleset",
        "autóbaleset többszörös sérülés",
        "magasból esés",
        "elgázolták",
        "politrauma tompa"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "sulyos-trauma-athatolo",
      "name": "Súlyos trauma – áthatoló",
      "category": "Trauma",
      "defaultLevel": null,
      "notes": "Jegyzet-változat: \"Major trauma – áthatoló\".",
      "aliases": [
        "lőtt seb",
        "többszörös szúrt seb",
        "áthatoló súlyos sérülés",
        "lelőtték",
        "leszúrták súlyos"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 67
        }
      ]
    },
    {
      "id": "abnormal-labor-eredmenyek",
      "name": "Abnormál labor eredmények",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "Jegyzet: \"Kóros laboratóriumi értékek\".",
      "aliases": [
        "kóros labor",
        "rossz vérkép",
        "eltérő laboreredmény",
        "abnormális vérvétel"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 89
        },
        {
          "doc": "jegyzet",
          "page": 125
        }
      ]
    },
    {
      "id": "veleszuletett-rendellenesseg-gyermekeknel",
      "name": "Veleszületett rendellenesség gyermekeknél",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "Gyermek panasz. Jegyzet: \"Veleszületett elváltozások gyermekek esetében\".",
      "aliases": [
        "fejlődési rendellenesség",
        "veleszületett hiba",
        "születési rendellenesség gyermek"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 209
        }
      ]
    },
    {
      "id": "konzultacio",
      "name": "Konzultáció",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "",
      "aliases": [],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        }
      ]
    },
    {
      "id": "kotescsere",
      "name": "Kötéscsere",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "kötözés",
        "kötéscsere",
        "sebkötés csere",
        "új kötés"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        }
      ]
    },
    {
      "id": "fertozo-beteggel-torteno-erintkezes",
      "name": "Fertőző beteggel történő érintkezés",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "fertőző beteggel találkozott",
        "covid kontakt",
        "tbc kontakt",
        "fertőző kontakt"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        }
      ]
    },
    {
      "id": "laz",
      "name": "Láz",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "lázas",
        "magas láz",
        "felment a láza",
        "hőemelkedés",
        "forró a teste láz",
        "gyerek lázas"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 107
        }
      ]
    },
    {
      "id": "hyperglycemia",
      "name": "Hyperglycemia",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "magas cukor",
        "cukor",
        "elszállt a cukra",
        "magas vércukor",
        "cukorbeteg magas cukor",
        "magas a vércukra"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        }
      ]
    },
    {
      "id": "hypoglycemia",
      "name": "Hypoglycemia",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "leesett a cukra",
        "lecukrozott",
        "alacsony vércukor",
        "alacsony cukor",
        "cukra lement",
        "elment a cukra"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        }
      ]
    },
    {
      "id": "kepalkoto-vizsgalatok",
      "name": "Képalkotó vizsgálatok",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "röntgen kérés",
        "ct vizsgálat",
        "képalkotás",
        "ultrahang vizsgálat"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 125
        }
      ]
    },
    {
      "id": "vigasztalhatatlanul-siro-csecsemo",
      "name": "Vigasztalhatatlanul síró csecsemő",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "Gyermek/csecsemő panasz.",
      "aliases": [
        "folyton síró baba",
        "megnyugtathatatlan csecsemő",
        "baba nem hagyja abba a sírást",
        "állandóan sír a baba"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        }
      ]
    },
    {
      "id": "orvosi-berendezes-es-eszkozhiba",
      "name": "Orvosi berendezés- és eszközhiba",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "Jegyzet: \"Orvosi berendezés hibája\".",
      "aliases": [
        "katéter probléma",
        "eszközhiba",
        "leesett a katéter",
        "peg szonda gond",
        "stóma probléma"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 125
        }
      ]
    },
    {
      "id": "minor-panaszok",
      "name": "Minor panaszok",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "apró panasz",
        "kisebb panasz",
        "kis probléma"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        }
      ]
    },
    {
      "id": "sapadtsag-anemia",
      "name": "Sápadtság / anémia",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "sápadt",
        "fehér az arca",
        "vérszegény",
        "anémia",
        "elsápadt"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        }
      ]
    },
    {
      "id": "posztoperativ-szovodmenyek",
      "name": "Posztoperatív szövődmények",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "Jegyzet: \"Műtét utáni komplikációk\".",
      "aliases": [
        "műtét utáni panasz",
        "műtéti seb gond",
        "operáció után rosszul",
        "posztoperatív szövődmény",
        "műtét utáni láz"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 125
        }
      ]
    },
    {
      "id": "gyogyszerfeliras",
      "name": "Gyógyszerfelírás",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "Jegyzet: \"Gyógyszer felírása\".",
      "aliases": [
        "recept kérés",
        "gyógyszer felírás",
        "recept felírás",
        "gyógyszer recept"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 125
        }
      ]
    },
    {
      "id": "gyuru-eltavolitas",
      "name": "Gyűrű eltávolítás",
      "category": "Általános és minor tünetek",
      "defaultLevel": null,
      "notes": "",
      "aliases": [
        "beszorult gyűrű",
        "nem jön le a gyűrű",
        "gyűrű levágás",
        "szoros gyűrű ujjon"
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        }
      ]
    }
  ],
  "stepOrder": [
    {
      "group": "immediate",
      "label": "1. Kritikus megjelenés / azonnali besorolás"
    },
    {
      "group": "respiratory",
      "label": "2a. Légzés (A–B)"
    },
    {
      "group": "hemodynamic",
      "label": "2b. Keringés (C)"
    },
    {
      "group": "consciousness",
      "label": "2c. Tudat (D – GCS)"
    },
    {
      "group": "temperature",
      "label": "2d. Testhőmérséklet / láz (E)"
    },
    {
      "group": "pain",
      "label": "2e. Fájdalom"
    },
    {
      "group": "bleeding",
      "label": "2f. Vérzés / vérzékenység"
    },
    {
      "group": "mechanism",
      "label": "2g. Sérülési mechanizmus"
    },
    {
      "group": "egyeb_elsodleges",
      "label": "2h. Egyéb elsődleges módosító"
    },
    {
      "group": "pediatric",
      "label": "3. Gyermek-specifikus tényezők"
    },
    {
      "group": "secondary",
      "label": "4. Másodlagos módosítók"
    }
  ],
  "rules": [
    {
      "id": "elsodleges_felnott_02",
      "name": "Légzés (A-B) – súlyos nehézlégzés → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Súlyos nehézlégzés: fáradtság a fokozott légzési munka miatt, cyanosis, egyszavas beszéd/beszédképtelenség, felső légúti elzáródás, letargikus vagy zavart, lélegeztetést igényel. O2-szaturáció <90%; becsült kilégzési csúcsáramlás (PEFR): nem értékelhető.",
      "condition": [
        {
          "mezo": "nehezlegzesFok",
          "egyenlo": "sulyos"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 80
        },
        {
          "doc": "jegyzet",
          "page": 109
        },
        {
          "doc": "tankonyv",
          "page": 32
        },
        {
          "doc": "jegyzet",
          "page": 217
        },
        {
          "doc": "jegyzet",
          "page": 218
        },
        {
          "doc": "jegyzet",
          "page": 219
        }
      ],
      "notes": "A szint klinikai megítélésen (légzési munka) + O2-szat <90% alapján. A spo2 numerikus küszöböket a légzés vitál-tábla tartalmazza. | Hatókör mind-re bővítve: a jegyzet gyermek-modulja ugyanezt a fok-alapú leképezést adja (nehézlégzés: 217-219. o.; hemodinamika: 226-228. o.).",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "elsodleges_felnott_03",
      "name": "Légzés (A-B) – közepes (mérsékelt) nehézlégzés → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Közepes fokú nehézlégzés: fokozott légzési munka, néhány szavas kifejezések/részmondatok, kifejezett vagy romló stridor védett légutak mellett. O2-szaturáció 90-92%; becsült PEFR <40%.",
      "condition": [
        {
          "mezo": "nehezlegzesFok",
          "egyenlo": "kozepes"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 80
        },
        {
          "doc": "jegyzet",
          "page": 109
        },
        {
          "doc": "tankonyv",
          "page": 32
        },
        {
          "doc": "jegyzet",
          "page": 217
        },
        {
          "doc": "jegyzet",
          "page": 218
        },
        {
          "doc": "jegyzet",
          "page": 219
        }
      ],
      "notes": "O2-szat 90-92%, PEFR <40% a vitál-táblában. | Hatókör mind-re bővítve: a jegyzet gyermek-modulja ugyanezt a fok-alapú leképezést adja (nehézlégzés: 217-219. o.; hemodinamika: 226-228. o.).",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "elsodleges_felnott_04",
      "name": "Légzés (A-B) – enyhe nehézlégzés → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Enyhe nehézlégzés: dyspnoe/tachypnoe/terhelési dyspnoe láthatóan fokozott légzési munka NÉLKÜL, mondatokat képes mondani, stridor/légúti szűkület tünetei nélkül. O2-szaturáció 92-94%; becsült PEFR 40-60%.",
      "condition": [
        {
          "mezo": "nehezlegzesFok",
          "egyenlo": "enyhe"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 80
        },
        {
          "doc": "jegyzet",
          "page": 109
        },
        {
          "doc": "tankonyv",
          "page": 32
        },
        {
          "doc": "jegyzet",
          "page": 217
        },
        {
          "doc": "jegyzet",
          "page": 218
        },
        {
          "doc": "jegyzet",
          "page": 219
        }
      ],
      "notes": "O2-szat 92-94%, PEFR 40-60% a vitál-táblában. A 92% határérték mindkét (közepes és enyhe) sávban szerepel a forrásban. | Hatókör mind-re bővítve: a jegyzet gyermek-modulja ugyanezt a fok-alapú leképezést adja (nehézlégzés: 217-219. o.; hemodinamika: 226-228. o.).",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "elsodleges_felnott_05",
      "name": "Légzés (A-B) – nincs nehézlégzés → MSTR 4 vagy 5",
      "applies_to": "felnott",
      "condition_text": "Nincs nehézlégzés: O2-szaturáció >94%, becsült PEFR >60%. MSTR 4 vagy 5 a további módosítóktól függően.",
      "condition": [
        {
          "mezo": "nehezlegzesFok",
          "egyenlo": "nincs"
        }
      ],
      "level": null,
      "source": [
        {
          "doc": "tankonyv",
          "page": 32
        }
      ],
      "notes": "A 'nincs nehézlégzés → 4/5' sor a tankönyvi (2016) légzés-táblából származik; a jegyzet légzés-táblája csak az 1-3 szintet sorolja fel.",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "elsodleges_felnott_06",
      "name": "Légzés (A-B) – relatív O2-szaturáció esés → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Ha a beteg saját megszokott (normál) szaturációjához képest a szaturáció 10%-ot csökken, MSTR 1 szintre kell triázsolni. COPD-s betegnél a megszokott saját érték a viszonyítási alap.",
      "condition": [
        {
          "mezo": "relativO2Eses",
          "egyenlo": true
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 80
        },
        {
          "doc": "jegyzet",
          "page": 109
        },
        {
          "doc": "tankonyv",
          "page": 31
        }
      ],
      "notes": "Nem fejezhető ki fix számmal a beteg egyéni alapértéke nélkül; kézi megítélés. | Kézi jelölés: a nővér állapítja meg a beteg saját alapértékéhez képesti ≥10% esést (COPD/krónikus hipoxiánál a saját alapérték a viszonyítás).",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "elsodleges_felnott_07",
      "name": "Keringés (C) – sokk → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Sokk: célszervelégtelenség/hypoperfusio egyértelmű jelei, jelentős sápadtság, hűvös izzadt bőr, gyenge vagy elnyomható pulzus, hypotonia, syncope felálláskor, jelentős tachycardia vagy bradycardia, elégtelen légzés/oxigenizáció, módosult tudati állapot; szeptikus sokkban flush, láz, toxikus küllem is megjelenhet.",
      "condition": [
        {
          "mezo": "keringesiAllapot",
          "egyenlo": "sokk"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 82
        },
        {
          "doc": "jegyzet",
          "page": 110
        },
        {
          "doc": "jegyzet",
          "page": 136
        },
        {
          "doc": "tankonyv",
          "page": 33
        },
        {
          "doc": "jegyzet",
          "page": 226
        },
        {
          "doc": "jegyzet",
          "page": 227
        },
        {
          "doc": "jegyzet",
          "page": 228
        }
      ],
      "notes": "Hatókör mind-re bővítve: a jegyzet gyermek-modulja ugyanezt a fok-alapú leképezést adja (nehézlégzés: 217-219. o.; hemodinamika: 226-228. o.).",
      "conflicts": [],
      "group": "hemodynamic"
    },
    {
      "id": "elsodleges_felnott_08",
      "name": "Keringés (C) – hemodinamikai instabilitás → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Hemodinamikai instabilitás: csökkent keringés jelei, sápadt, leizzadt, mással nem magyarázható tachycardia, felálláskor hypotonia (anamnézis!), ájulásérzés ülve/állva, vagy gyanított hypotonia (a betegnél a normál/elvárt vérnyomásnál alacsonyabb).",
      "condition": [
        {
          "mezo": "keringesiAllapot",
          "egyenlo": "instabil"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 82
        },
        {
          "doc": "jegyzet",
          "page": 110
        },
        {
          "doc": "jegyzet",
          "page": 136
        },
        {
          "doc": "tankonyv",
          "page": 33
        },
        {
          "doc": "jegyzet",
          "page": 226
        },
        {
          "doc": "jegyzet",
          "page": 227
        },
        {
          "doc": "jegyzet",
          "page": 228
        }
      ],
      "notes": "Hatókör mind-re bővítve: a jegyzet gyermek-modulja ugyanezt a fok-alapú leképezést adja (nehézlégzés: 217-219. o.; hemodinamika: 226-228. o.).",
      "conflicts": [],
      "group": "hemodynamic"
    },
    {
      "id": "elsodleges_felnott_09",
      "name": "Keringés (C) – stabil, de potenciálisan instabil → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Vitális paraméterek a normál határértékek között, melyek megfelelnek a jelenlegi panasznak, de eltérnek a betegnél megszokott értékektől: stabil keringési állapot, amely potenciálisan instabillá válhat.",
      "condition": [
        {
          "mezo": "keringesiAllapot",
          "egyenlo": "stabil_potencialisan"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 82
        },
        {
          "doc": "jegyzet",
          "page": 110
        },
        {
          "doc": "jegyzet",
          "page": 131
        },
        {
          "doc": "tankonyv",
          "page": 33
        },
        {
          "doc": "jegyzet",
          "page": 226
        },
        {
          "doc": "jegyzet",
          "page": 227
        },
        {
          "doc": "jegyzet",
          "page": 228
        }
      ],
      "notes": "Hatókör mind-re bővítve: a jegyzet gyermek-modulja ugyanezt a fok-alapú leképezést adja (nehézlégzés: 217-219. o.; hemodinamika: 226-228. o.).",
      "conflicts": [],
      "group": "hemodynamic"
    },
    {
      "id": "elsodleges_felnott_10",
      "name": "Keringés (C) – normál vitális paraméterek → MSTR 4 vagy 5",
      "applies_to": "felnott",
      "condition_text": "A beteg pulzusa és vérnyomása a korának megfelelő normál tartományban, nyilvánvaló hemodinamikai instabilitás jelei nélkül: MSTR 4 vagy 5 a további módosítóktól függően.",
      "condition": [
        {
          "mezo": "keringesiAllapot",
          "egyenlo": "normal"
        }
      ],
      "level": null,
      "source": [
        {
          "doc": "tankonyv",
          "page": 33
        }
      ],
      "notes": "A 'normál vitál → 4/5' sor a tankönyvi keringés-táblából; a jegyzet keringés-táblája az 1-3 szintet részletezi.",
      "conflicts": [],
      "group": "hemodynamic"
    },
    {
      "id": "elsodleges_felnott_11",
      "name": "Tudat (D) – GCS 3-9 (eszméletlen) → MSTR 1",
      "applies_to": "felnott",
      "condition_text": "GCS 3-9: eszméletlen, vagy képtelen a légutak védelmére, cél nélküli válasz fájdalomra/hangos zajra, folyamatos görcsök vagy folyamatosan romló tudati állapot. GCS 3-9 automatikusan reszuszcitációs (1.) szint.",
      "condition": [
        {
          "mezo": "gcs",
          "min": 3,
          "max": 9
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 83
        },
        {
          "doc": "jegyzet",
          "page": 111
        },
        {
          "doc": "tankonyv",
          "page": 34
        },
        {
          "doc": "tankonyv",
          "page": 90
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "consciousness"
    },
    {
      "id": "elsodleges_felnott_12",
      "name": "Tudat (D) – GCS 10-13 (módosult tudat) → MSTR 2",
      "applies_to": "felnott",
      "condition_text": "GCS 10-13: módosult tudati állapot – nem megfelelő válasz megszólításkor, tájékozatlanság térben/időben, újkeletű memóriazavar, jelentősen megváltozott viselkedés, zavartság, agitáció.",
      "condition": [
        {
          "mezo": "gcs",
          "min": 10,
          "max": 13
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 83
        },
        {
          "doc": "jegyzet",
          "page": 111
        },
        {
          "doc": "tankonyv",
          "page": 34
        },
        {
          "doc": "tankonyv",
          "page": 90
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "consciousness"
    },
    {
      "id": "elsodleges_felnott_13",
      "name": "Tudat (D) – GCS 14-15 (normál tudat) → MSTR 3/4/5",
      "applies_to": "felnott",
      "condition_text": "GCS 14-15: normál tudati állapot. A tankönyv szerint MSTR 3, 4 vagy 5; a jegyzet szerint normál tudatnál más módosítókat (vitális jelek, sérülési mechanizmus, fájdalom, másodlagos módosítók) kell használni az MSTR szint meghatározásához.",
      "condition": [
        {
          "mezo": "gcs",
          "min": 14,
          "max": 15
        }
      ],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 83
        },
        {
          "doc": "jegyzet",
          "page": 111
        },
        {
          "doc": "tankonyv",
          "page": 34
        }
      ],
      "notes": "A GCS elsősorban fejsérülteknél validált; demens/krónikus neurológiai/kognitív károsodott betegnél a beteg saját megszokott alapértékéhez viszonyított eltérést kell értékelni.",
      "conflicts": [],
      "group": "consciousness"
    },
    {
      "id": "elsodleges_felnott_14",
      "name": "Láz (E) – felnőtt láz definíció",
      "applies_to": "felnott",
      "condition_text": "Felnőttnél (kor ≥17 év) a láz definíciója testhőmérséklet ≥38°C. A megemelkedett testhőmérsékletet a vezető panasszal összefüggésben kell értékelni; lázas betegnél mindig keresni kell a szepszis jeleit.",
      "condition": [
        {
          "mezo": "temp",
          "min": 38
        },
        {
          "mezo": "eletkorEv",
          "min": 17
        }
      ],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 84
        },
        {
          "doc": "jegyzet",
          "page": 112
        },
        {
          "doc": "tankonyv",
          "page": 35
        }
      ],
      "notes": "Definíciós szabály, önmagában nem ad szintet; a szintet a küllem-kategóriák adják.",
      "conflicts": [
        {
          "forras": "tankonyv",
          "ertek": "A tankönyv szövege '16 éves kortól' említi a 38°C láz-definíciót, míg a láz-módosító táblázat fejléce 'életkor >17 év'. A jegyzet egységesen ≥17 évet használ."
        }
      ],
      "group": "temperature"
    },
    {
      "id": "elsodleges_felnott_15",
      "name": "Láz (E) – immunszupprimált küllem → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Lázas felnőtt (≥38°C, kor ≥17 év) immunszupprimált állapotban (neutropenia vagy gyanúja, kemoterápia vagy immunszuppresszív gyógyszerek és/vagy szteroidok, transzplantált): MSTR 2.",
      "condition": [
        {
          "mezo": "temp",
          "min": 38
        },
        {
          "mezo": "eletkorEv",
          "min": 16
        },
        {
          "mezo": "lazKullem",
          "egyenlo": "immunszupprimalt"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 85
        },
        {
          "doc": "jegyzet",
          "page": 112
        },
        {
          "doc": "tankonyv",
          "page": 35
        }
      ],
      "notes": " [2026-07-21: MSOTKE-MSTR hivatalos poszter alapján kor-küszöb 17->16 évre javítva; az \"applies_to\":\"felnott\" redundáns/hibás gát törölve (a rendszer általános gyermek/felnőtt határa 18, ez feleslegesen blokkolta a 16-17 éveseket a szabály saját explicit eletkorEv-feltétele ellenére — pl. egy 17 éves lázas, szeptikus küllemű beteg korábban tévesen csak a baseline(4) szintet kapta a valós MSTR2 helyett).",
      "conflicts": [],
      "group": "temperature"
    },
    {
      "id": "elsodleges_felnott_16",
      "name": "Láz (E) – szeptikus küllem → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Lázas felnőtt szeptikus küllemmel: 3 pozitív SIRS kritérium VAGY hemodinamikai instabilitás VAGY közepes fokú nehézlégzés VAGY módosult tudati állapot: MSTR 2.",
      "condition": [
        {
          "mezo": "temp",
          "min": 38
        },
        {
          "mezo": "eletkorEv",
          "min": 16
        },
        {
          "mezo": "lazKullem",
          "egyenlo": "szeptikus"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 85
        },
        {
          "doc": "jegyzet",
          "page": 112
        },
        {
          "doc": "tankonyv",
          "page": 35
        }
      ],
      "notes": " [2026-07-21: MSOTKE-MSTR hivatalos poszter alapján kor-küszöb 17->16 évre javítva; az \"applies_to\":\"felnott\" redundáns/hibás gát törölve (a rendszer általános gyermek/felnőtt határa 18, ez feleslegesen blokkolta a 16-17 éveseket a szabály saját explicit eletkorEv-feltétele ellenére — pl. egy 17 éves lázas, szeptikus küllemű beteg korábban tévesen csak a baseline(4) szintet kapta a valós MSTR2 helyett).",
      "conflicts": [],
      "group": "temperature"
    },
    {
      "id": "elsodleges_felnott_17",
      "name": "Láz (E) – súlyos beteg küllem → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Lázas felnőtt súlyos beteg ('nem jól néz ki') küllemmel: <3 pozitív SIRS kritérium, de kinézetre beteg (flush vagy sápadt, elesett állapotú, hiperdinám szakasz, izgatott/agitált/zavart): MSTR 3.",
      "condition": [
        {
          "mezo": "temp",
          "min": 38
        },
        {
          "mezo": "eletkorEv",
          "min": 16
        },
        {
          "mezo": "lazKullem",
          "egyenlo": "sulyos_beteg"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 85
        },
        {
          "doc": "jegyzet",
          "page": 112
        },
        {
          "doc": "tankonyv",
          "page": 35
        },
        {
          "doc": "tankonyv",
          "page": 36
        }
      ],
      "notes": " [2026-07-21: MSOTKE-MSTR hivatalos poszter alapján kor-küszöb 17->16 évre javítva; az \"applies_to\":\"felnott\" redundáns/hibás gát törölve (a rendszer általános gyermek/felnőtt határa 18, ez feleslegesen blokkolta a 16-17 éveseket a szabály saját explicit eletkorEv-feltétele ellenére — pl. egy 17 éves lázas, szeptikus küllemű beteg korábban tévesen csak a baseline(4) szintet kapta a valós MSTR2 helyett).",
      "conflicts": [],
      "group": "temperature"
    },
    {
      "id": "elsodleges_felnott_18",
      "name": "Láz (E) – jó általános állapot → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Lázas felnőtt jó általános állapotban ('jól néz ki'): a láz az egyetlen pozitív SIRS kritérium, egészséges küllem, nincs nehézlégzés/keringési eltérés/módosult tudat: MSTR 4.",
      "condition": [
        {
          "mezo": "temp",
          "min": 38
        },
        {
          "mezo": "eletkorEv",
          "min": 16
        },
        {
          "mezo": "lazKullem",
          "egyenlo": "jo_altalanos"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 85
        },
        {
          "doc": "jegyzet",
          "page": 112
        },
        {
          "doc": "tankonyv",
          "page": 35
        },
        {
          "doc": "tankonyv",
          "page": 36
        }
      ],
      "notes": " [2026-07-21: MSOTKE-MSTR hivatalos poszter alapján kor-küszöb 17->16 évre javítva; az \"applies_to\":\"felnott\" redundáns/hibás gát törölve (a rendszer általános gyermek/felnőtt határa 18, ez feleslegesen blokkolta a 16-17 éveseket a szabály saját explicit eletkorEv-feltétele ellenére — pl. egy 17 éves lázas, szeptikus küllemű beteg korábban tévesen csak a baseline(4) szintet kapta a valós MSTR2 helyett).",
      "conflicts": [],
      "group": "temperature"
    },
    {
      "id": "elsodleges_felnott_19",
      "name": "Láz – automatikus MSTR 2 fertőzésgyanús betegnél",
      "applies_to": "felnott",
      "condition_text": "Feltételezett fertőzéses állapotban érkező lázas beteg, akinél mérsékelt nehézlégzés VAGY hemodinamikai instabilitás VAGY módosult tudatállapot észlelhető, automatikusan MSTR 2 (kritikus). Bizonyított központi idegrendszeri/keringési/légzési zavar esetén súlyos szepszisként, késedelem nélkül kell kezelni.",
      "condition": [],
      "level": 2,
      "source": [
        {
          "doc": "tankonyv",
          "page": 36
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "temperature"
    },
    {
      "id": "elsodleges_felnott_20",
      "name": "Immunszupprimált lázas beteg → MSTR 2",
      "applies_to": "felnott",
      "condition_text": "Ha a beteg lázas ÉS fennáll immunszuppresszív állapot (daganatos beteg; ISU/szteroid kezelés; radio-/kemoterápia; 75 év feletti életkor; súlyos alapbetegség pl. COPD/KVE/szívelégtelenség; veleszületett vagy szerzett immunhiány pl. HIV; szisztémás autoimmun betegség pl. SLE/RA; általános leromlott állapot): MSTR 2.",
      "condition": [],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 86
        }
      ],
      "notes": "Az immunszuppresszív állapotok listája kézi megítélést igényel; összekapcsolható a lazKullem=immunszupprimalt kategóriával.",
      "conflicts": [],
      "group": "temperature"
    },
    {
      "id": "elsodleges_felnott_24",
      "name": "Fájdalom (E) – centrális / heveny (akut) / súlyos (8-10) → MSTR 2",
      "applies_to": "felnott",
      "condition_text": "Fájdalom – centrális, heveny (akut), súlyos (8-10) → MSTR 2.",
      "condition": [
        {
          "mezo": "fajdalomLokalizacio",
          "egyenlo": "centralis"
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "akut"
        },
        {
          "mezo": "fajdalomPont",
          "min": 8,
          "max": 10
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 101
        },
        {
          "doc": "tankonyv",
          "page": 38
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "elsodleges_felnott_25",
      "name": "Fájdalom (E) – centrális / heveny (akut) / közepes (4-7) → MSTR 3",
      "applies_to": "felnott",
      "condition_text": "Fájdalom – centrális, heveny (akut), közepes (4-7) → MSTR 3.",
      "condition": [
        {
          "mezo": "fajdalomLokalizacio",
          "egyenlo": "centralis"
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "akut"
        },
        {
          "mezo": "fajdalomPont",
          "min": 4,
          "max": 7
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 101
        },
        {
          "doc": "tankonyv",
          "page": 38
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "elsodleges_felnott_26",
      "name": "Fájdalom (E) – centrális / heveny (akut) / enyhe (<4) → MSTR 4",
      "applies_to": "felnott",
      "condition_text": "Fájdalom – centrális, heveny (akut), enyhe (<4) → MSTR 4.",
      "condition": [
        {
          "mezo": "fajdalomLokalizacio",
          "egyenlo": "centralis"
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "akut"
        },
        {
          "mezo": "fajdalomPont",
          "max": 3
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 101
        },
        {
          "doc": "tankonyv",
          "page": 38
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "elsodleges_felnott_27",
      "name": "Fájdalom (E) – centrális / krónikus / súlyos (8-10) → MSTR 3",
      "applies_to": "felnott",
      "condition_text": "Fájdalom – centrális, krónikus, súlyos (8-10) → MSTR 3.",
      "condition": [
        {
          "mezo": "fajdalomLokalizacio",
          "egyenlo": "centralis"
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "kronikus"
        },
        {
          "mezo": "fajdalomPont",
          "min": 8,
          "max": 10
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 101
        },
        {
          "doc": "tankonyv",
          "page": 38
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "elsodleges_felnott_28",
      "name": "Fájdalom (E) – centrális / krónikus / közepes (4-7) → MSTR 4",
      "applies_to": "felnott",
      "condition_text": "Fájdalom – centrális, krónikus, közepes (4-7) → MSTR 4.",
      "condition": [
        {
          "mezo": "fajdalomLokalizacio",
          "egyenlo": "centralis"
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "kronikus"
        },
        {
          "mezo": "fajdalomPont",
          "min": 4,
          "max": 7
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 101
        },
        {
          "doc": "tankonyv",
          "page": 38
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "elsodleges_felnott_29",
      "name": "Fájdalom (E) – centrális / krónikus / enyhe (<4) → MSTR 5",
      "applies_to": "felnott",
      "condition_text": "Fájdalom – centrális, krónikus, enyhe (<4) → MSTR 5.",
      "condition": [
        {
          "mezo": "fajdalomLokalizacio",
          "egyenlo": "centralis"
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "kronikus"
        },
        {
          "mezo": "fajdalomPont",
          "max": 3
        }
      ],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 101
        },
        {
          "doc": "tankonyv",
          "page": 38
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "elsodleges_felnott_30",
      "name": "Fájdalom (E) – perifériás / heveny (akut) / súlyos (8-10) → MSTR 3",
      "applies_to": "felnott",
      "condition_text": "Fájdalom – perifériás, heveny (akut), súlyos (8-10) → MSTR 3.",
      "condition": [
        {
          "mezo": "fajdalomLokalizacio",
          "egyenlo": "periferias"
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "akut"
        },
        {
          "mezo": "fajdalomPont",
          "min": 8,
          "max": 10
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 101
        },
        {
          "doc": "tankonyv",
          "page": 38
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "elsodleges_felnott_31",
      "name": "Fájdalom (E) – perifériás / heveny (akut) / közepes (4-7) → MSTR 4",
      "applies_to": "felnott",
      "condition_text": "Fájdalom – perifériás, heveny (akut), közepes (4-7) → MSTR 4.",
      "condition": [
        {
          "mezo": "fajdalomLokalizacio",
          "egyenlo": "periferias"
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "akut"
        },
        {
          "mezo": "fajdalomPont",
          "min": 4,
          "max": 7
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 101
        },
        {
          "doc": "tankonyv",
          "page": 38
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "elsodleges_felnott_32",
      "name": "Fájdalom (E) – perifériás / heveny (akut) / enyhe (<4) → MSTR 5",
      "applies_to": "felnott",
      "condition_text": "Fájdalom – perifériás, heveny (akut), enyhe (<4) → MSTR 5.",
      "condition": [
        {
          "mezo": "fajdalomLokalizacio",
          "egyenlo": "periferias"
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "akut"
        },
        {
          "mezo": "fajdalomPont",
          "max": 3
        }
      ],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 101
        },
        {
          "doc": "tankonyv",
          "page": 38
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "elsodleges_felnott_33",
      "name": "Fájdalom (E) – perifériás / krónikus / súlyos (8-10) → MSTR 4",
      "applies_to": "felnott",
      "condition_text": "Fájdalom – perifériás, krónikus, súlyos (8-10) → MSTR 4.",
      "condition": [
        {
          "mezo": "fajdalomLokalizacio",
          "egyenlo": "periferias"
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "kronikus"
        },
        {
          "mezo": "fajdalomPont",
          "min": 8,
          "max": 10
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 101
        },
        {
          "doc": "tankonyv",
          "page": 38
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "elsodleges_felnott_34",
      "name": "Fájdalom (E) – perifériás / krónikus / közepes/enyhe (<8) → MSTR 5",
      "applies_to": "felnott",
      "condition_text": "Fájdalom – perifériás, krónikus, közepes/enyhe (<8) → MSTR 5.",
      "condition": [
        {
          "mezo": "fajdalomLokalizacio",
          "egyenlo": "periferias"
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "kronikus"
        },
        {
          "mezo": "fajdalomPont",
          "max": 7
        }
      ],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 101
        },
        {
          "doc": "tankonyv",
          "page": 38
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "elsodleges_felnott_38",
      "name": "Vérzékenység – életet vagy végtagot veszélyeztető vérzés → MSTR 2",
      "applies_to": "felnott",
      "condition_text": "Öröklött vagy szerzett vérzékenységnél életet/végtagot veszélyeztető vérzés → MSTR 2. Helyszínek: fej (koponyán belüli) és nyak; mellkas, has, medence, gerinc; masszív hüvelyi vérzés; csípőtáji/medenceizmok; végtagizom-kompartment; törések és ficamok; mély lágyrész-sérülések; bármely csillapíthatatlan vérzés.",
      "condition": [
        {
          "mezo": "verzesSulyossag",
          "egyenlo": "eletet_vegtagot_veszelyezteto"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 91
        },
        {
          "doc": "jegyzet",
          "page": 153
        },
        {
          "doc": "tankonyv",
          "page": 39
        }
      ],
      "notes": "Major vérzéssel érkező hemofíliás beteg azonnali faktorpótlást igényelhet (helyi protokoll, hematológus konzultáció).",
      "conflicts": [],
      "group": "bleeding"
    },
    {
      "id": "elsodleges_felnott_39",
      "name": "Vérzékenység – mérsékelt/enyhe vérzés → MSTR 3",
      "applies_to": "felnott",
      "condition_text": "Öröklött vagy szerzett vérzékenységnél mérsékelt/enyhe vérzés → MSTR 3. Helyszínek: orr (epistaxis); száj/íny; ízületek (haemarthros); menstruációs vérzés; horzsolások; felszínes sérülések.",
      "condition": [
        {
          "mezo": "verzesSulyossag",
          "egyenlo": "mersekelt_enyhe"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 91
        },
        {
          "doc": "jegyzet",
          "page": 153
        },
        {
          "doc": "tankonyv",
          "page": 39
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "bleeding"
    },
    {
      "id": "elsodleges_felnott_40",
      "name": "Vérzékenység – gyanított enyhe/közepes ízületi vérzés → MSTR 3",
      "applies_to": "felnott",
      "condition_text": "Nyilvánvaló vagy gyanított veleszületett/szerzett vérzékenységű betegnél gyanított enyhe vagy közepes ízületi vérzés (haemarthros) → MSTR 3 (Sürgős). Az érintett betegcsoportok: veleszületett vérzészavar/jelentős faktorhiány, véralvadásgátlót szedők, súlyos májbetegség (megnyúlt PT/PTT).",
      "condition": [
        {
          "mezo": "verzesSulyossag",
          "egyenlo": "izuleti_haemarthros"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 118
        },
        {
          "doc": "jegyzet",
          "page": 91
        },
        {
          "doc": "tankonyv",
          "page": 39
        },
        {
          "doc": "tankonyv",
          "page": 40
        }
      ],
      "notes": "Vérzékenységnél a gyors faktorpótlás fontosabb lehet a vizsgálatoknál; ajánlott az alvadási faktor azonnali megrendelését biztosító helyi protokoll.",
      "conflicts": [],
      "group": "bleeding"
    },
    {
      "id": "elsodleges_felnott_41",
      "name": "Sérülési mechanizmus – magas rizikójú → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Magas rizikójú (nagy energiájú) baleseti mechanizmus önmagában MSTR 2, akkor is, ha egyéb módosító nem indokolja. Küszöbök – Általános trauma: gépjármű járműből kiesés/átfordulás, kimentési idő >20 perc, motor/műszerfal az utastérben, halott az utastérben, ütközés >40 km/h biztonsági öv nélkül vagy baleset >60 km/h bekötött övvel; motoros ütközés autóval >30 km/h (főleg ha a vezető leesett); gyalogos/kerékpáros gázolás >10 km/h felett; esés >3 m magasból vagy 5 lépcsőfokról; áthatoló sérülés fej/nyak/törzs/végtag könyök- és térd feletti proximális része. Fejsérülés: esés >1 m vagy 5 lépcsőfok; bekötetlen utas szélvédőnek ütődő fejsérülése; tompa tárggyal bántalmazás (ököl/láb kivételével). Nyaki trauma: gépjárműből kizuhanás/felborulás/nagy sebességű ütközés bekötetlen övvel; motorbaleset; zuhanás >1 m vagy 5 lépcső; fejre irányuló axiális terhelés.",
      "condition": [
        {
          "mezo": "serulesMagasRizikoju",
          "egyenlo": true
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 94
        },
        {
          "doc": "jegyzet",
          "page": 95
        },
        {
          "doc": "jegyzet",
          "page": 141
        },
        {
          "doc": "tankonyv",
          "page": 41
        },
        {
          "doc": "tankonyv",
          "page": 42
        },
        {
          "doc": "jegyzet",
          "page": 248
        }
      ],
      "notes": "A km/h és esésmagasság küszöbök a baleseti-mechanizmus vitál-táblában részletezve. A lista vezérfonal, nem teljes (pl. nagy sebességű vízijármű-baleset nincs benne). | applies_to felnott->mind: a mechanizmus gyermekre is vonatkozik (jegyzet 248. o. eset: 13é elgázolt, mechanizmus felülír; tankönyv 70. o. gyermek-fejezet felsorolja).",
      "conflicts": [],
      "group": "mechanism"
    },
    {
      "id": "elsodleges_felnott_42",
      "name": "Sérülési mechanizmus + kritikus vitál → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Ha a magas rizikójú mechanizmusú beteg súlyos légzési elégtelenséggel, hemodinamikai instabilitással vagy eszméletlen állapotban érkezik, MSTR 1 (nem MSTR 2). Az MSTR szintet a beteg jelenlegi állapota határozza meg, nem a prehospitális beavatkozás vagy az intézeti protokoll.",
      "condition": [],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 94
        },
        {
          "doc": "jegyzet",
          "page": 141
        },
        {
          "doc": "jegyzet",
          "page": 142
        },
        {
          "doc": "jegyzet",
          "page": 248
        }
      ],
      "notes": "applies_to felnott->mind: a mechanizmus gyermekre is vonatkozik (jegyzet 248. o. eset: 13é elgázolt, mechanizmus felülír; tankönyv 70. o. gyermek-fejezet felsorolja).",
      "conflicts": [],
      "group": "mechanism"
    },
    {
      "id": "elsodleges_felnott_43",
      "name": "Penetráló trauma – proximális lokalizáció → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Penetráló (áthatoló) trauma magas rizikójú lokalizációnál → MSTR 2: fej, nyak, torzó, vagy a végtagok könyök, illetve térd feletti proximális része. A mellkasi penetráló sérülés (különösen a lapockák és mellbimbók között, valamint a felhason) veszélyes (perikardium-sérülés és/vagy légmell).",
      "condition": [],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 139
        },
        {
          "doc": "jegyzet",
          "page": 95
        },
        {
          "doc": "tankonyv",
          "page": 42
        },
        {
          "doc": "jegyzet",
          "page": 248
        }
      ],
      "notes": "applies_to felnott->mind: a mechanizmus gyermekre is vonatkozik (jegyzet 248. o. eset: 13é elgázolt, mechanizmus felülír; tankönyv 70. o. gyermek-fejezet felsorolja).",
      "conflicts": [],
      "group": "mechanism"
    },
    {
      "id": "gyermek_05",
      "name": "Súlyos légzési elégtelenség (gyermek) -> MSTR 1",
      "applies_to": "gyermek",
      "condition_text": "Súlyos légzési elégtelenség: extrém megnövekedett légzési munka, cianózis, levertség/zavartság, egyszavas válaszok vagy beszédképtelenség, tahi- vagy bradipnoe/apnoe, behúzódások, orrszárnyi légzés, nyögés, csökkent/hiányzó légzési hang, felsőlégúti elzáródás, nem védett légutak. O2-szaturáció < 90%.",
      "condition": [
        {
          "mezo": "spo2",
          "max": 89
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "tankonyv",
          "page": 64
        },
        {
          "doc": "jegyzet",
          "page": 217
        }
      ],
      "notes": "SpO2 < 90% -> MSTR 1. A légzési munka/klinikai jelek önmagukban is MSTR 1-et adhatnak (manuális megítélés).",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "gyermek_06",
      "name": "Közepes légzési elégtelenség (gyermek) -> MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "Közepes légzési elégtelenség: megnövekedett légzési munka, nyugtalanság/agitáltság, tahipnoe, hiperpnoe, segédizom-használat, behúzódások, orrszárnyi légzés, rövid/tőmondatos beszéd, stridor védett légutak mellett. O2-szaturáció 90-92%, PEFR < 40% alapérték. Kiegészítő jel: elhúzódó kilégzési szakasz (asztma/bronchiolitis). [CTAS COT-2008 DIA 208]",
      "condition": [
        {
          "mezo": "spo2",
          "min": 90,
          "max": 92
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "tankonyv",
          "page": 64
        },
        {
          "doc": "jegyzet",
          "page": 217
        }
      ],
      "notes": "SpO2 90-92% -> MSTR 2. PEFR csak >6 éves gyermeknél mérendő.",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "gyermek_07",
      "name": "Enyhe légzési elégtelenség (gyermek) -> MSTR 3",
      "applies_to": "gyermek",
      "condition_text": "Enyhe légzési elégtelenség: nehézlégzés csak terhelésre, nincs nyilvánvalóan fokozott légzési munka, képes összefüggő mondatokban beszélni, nincs stridor/légúti elzáródás. O2-szaturáció 92-94%, PEFR 40-60% alapérték.",
      "condition": [
        {
          "mezo": "spo2",
          "min": 93,
          "max": 94
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "tankonyv",
          "page": 64
        },
        {
          "doc": "jegyzet",
          "page": 217
        }
      ],
      "notes": "SpO2 92-94% -> MSTR 3. A forrásban a 90-92 és 92-94 sávhatárok átfednek (92%); bizonytalanság esetén felfelé triázsolni. | Sáv-átfedés feloldva: SpO2 92% → közepes (gyermek_06), az enyhe sáv 93-94 (a forrásban a 92 mindkét sávban szerepelt; a súlyosabb — közepes — javára döntve).",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "gyermek_08",
      "name": "Nincs légzési elégtelenség (gyermek) -> MSTR 4-5",
      "applies_to": "gyermek",
      "condition_text": "Normál légzésszám és O2-szaturáció > 94%, nincs fokozott légzési munka.",
      "condition": [
        {
          "mezo": "spo2",
          "min": 95
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "tankonyv",
          "page": 64
        },
        {
          "doc": "jegyzet",
          "page": 217
        }
      ],
      "notes": "SpO2 > 94% és normál légzés esetén a besorolás 4-5 (egyéb kórtörténet dönt).",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "gyermek_12",
      "name": "Eszméletlen gyermek (GCS 3-9) -> MSTR 1",
      "applies_to": "gyermek",
      "condition_text": "Eszméletlen: válaszképtelen, képtelen a légutak védelmére, cél nélküli válasz fájdalomra/hangra, folyamatos görcsök vagy folyamatosan romló tudat. GCS 3-8.",
      "condition": [
        {
          "mezo": "gcs",
          "min": 3,
          "max": 9
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "tankonyv",
          "page": 68
        },
        {
          "doc": "jegyzet",
          "page": 232
        }
      ],
      "notes": "Gyermek GCS a D függelék korcsoport-specifikus skálája szerint pontozandó. Veszélyeztetett légút csecsemőnél szinte azonnal, figyelmeztető jel nélkül alakul ki. | Igazítva 3-9-re: a kanonikus CTAS COT-2008 (Paeds LOC, DIA 2018) és a felnőtt KB is 3-9→1 / 10-13→2; a korábbi 3-8/9-13 (magyar előadás) alultriázst adott GCS 9-nél és belső inkonzisztenciát okozott. Betegbiztonság + konzisztencia.",
      "conflicts": [],
      "group": "consciousness"
    },
    {
      "id": "gyermek_13",
      "name": "Módosult tudatállapot gyermek (GCS 10-13) -> MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "A normál tudatállapottól való eltérés: levertség, zavartság, dezorientáció, nyugtalanság/ingerlékenység/agitáltság/harciasság, megnyugtathatatlanság, csecsemőnél étvágytalanság; a légút védelmére képes. GCS 9-13.",
      "condition": [
        {
          "mezo": "gcs",
          "min": 10,
          "max": 13
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "tankonyv",
          "page": 68
        },
        {
          "doc": "jegyzet",
          "page": 232
        }
      ],
      "notes": "Csökkenő GCS a kezdetihez képest további rosszabbodást valószínűsít.",
      "conflicts": [],
      "group": "consciousness"
    },
    {
      "id": "gyermek_14",
      "name": "Eszméleténél lévő gyermek (GCS 14-15) -> MSTR 3/4/5 (más módosító dönt)",
      "applies_to": "gyermek",
      "condition_text": "Éber, térben/időben orientált, korának megfelelően együttműködő, vigasztalható. GCS 14-15.",
      "condition": [
        {
          "mezo": "gcs",
          "min": 14,
          "max": 15
        }
      ],
      "level": null,
      "source": [
        {
          "doc": "tankonyv",
          "page": 68
        },
        {
          "doc": "jegyzet",
          "page": 232
        }
      ],
      "notes": "GCS 14-15 esetén a végső szint (3, 4 vagy 5) egyéb módosítóktól függ. | Javítva: level 3 → null. A GCS 14-15 önmagában NEM ad MSTR 3-at (különben minden éber gyermek 3 lenne); a szintet a többi módosító dönti el — egyezik a felnőtt elsodleges_felnott_13-mal és a CTAS-szal.",
      "conflicts": [],
      "group": "consciousness"
    },
    {
      "id": "gyermek_laz_01",
      "name": "Csecsemő 0-3 hónap, láz >38.0°C -> MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "0-3 hónapos gyermek testhőmérséklete > 38.0°C. Csecsemőknél a testhőmérséklet-változás életveszélyes állapot korai jele lehet.",
      "condition": [
        {
          "mezo": "eletkorHonap",
          "min": 0,
          "max": 3
        },
        {
          "mezo": "temp",
          "min": 38.01
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 236
        },
        {
          "doc": "tankonyv",
          "page": 70
        }
      ],
      "notes": "A '>38.0°C' szigorú nagyobb; a 38.01 min a nyílt határt közelíti. 0-2 hó rektális mérés ajánlott.",
      "conflicts": [],
      "korMinHonap": 0,
      "korMaxHonap": 3,
      "group": "temperature"
    },
    {
      "id": "gyermek_laz_02",
      "name": "Csecsemő 0-3 hónap, hipotermia <36.0°C -> MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "0-3 hónapos gyermek testhőmérséklete < 36.0°C. Agykárosodott újszülöttek/csecsemők gyakran hipotermiásak szepszis következtében.",
      "condition": [
        {
          "mezo": "eletkorHonap",
          "min": 0,
          "max": 3
        },
        {
          "mezo": "temp",
          "max": 35.99
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 236
        },
        {
          "doc": "tankonyv",
          "page": 70
        }
      ],
      "notes": "",
      "conflicts": [],
      "korMinHonap": 0,
      "korMaxHonap": 3,
      "group": "temperature"
    },
    {
      "id": "gyermek_laz_03",
      "name": "Immunszupprimált gyermek (bármely kor), láz >38.0°C vagy <36.0°C -> MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "Immunszupprimált gyermek (pl. neutropenia, transzplantált, szteroidok, onkológiai beteg, sarlósejtes anémia, VP shunt) testhőmérséklete > 38.0°C vagy < 36.0°C. Enyhe láz is szepszis jele lehet egyébként tünetmentes immunszupprimált gyermeknél.",
      "condition": [],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 236
        },
        {
          "doc": "tankonyv",
          "page": 70
        }
      ],
      "notes": "Az 'immunszupprimalt' jelölőmezőtől függ (inputFields). Immunszupprimált betegnél rektális mérés NEM ajánlott, hónaljban mérjünk.",
      "conflicts": [],
      "group": "temperature"
    },
    {
      "id": "gyermek_laz_04",
      "name": "3 hónap - 3 év, láz >38.5°C, betegnek tűnik -> MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "3 hónap - 3 éves gyermek testhőmérséklete > 38.5°C ÉS betegnek tűnik (kipirosodott, zavart, nyugtalan, hiperaktív).",
      "condition": [
        {
          "mezo": "eletkorHonap",
          "min": 3,
          "max": 36
        },
        {
          "mezo": "temp",
          "min": 38.51
        },
        {
          "mezo": "gyermekKullem",
          "egyenlo": "beteg"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 236
        },
        {
          "doc": "tankonyv",
          "page": 70
        }
      ],
      "notes": "",
      "conflicts": [],
      "korMinHonap": 3,
      "korMaxHonap": 36,
      "group": "temperature"
    },
    {
      "id": "gyermek_laz_05",
      "name": "3 hónap - 3 év, láz >38.5°C, nem tűnik betegnek -> MSTR 3",
      "applies_to": "gyermek",
      "condition_text": "3 hónap - 3 éves gyermek testhőmérséklete > 38.5°C ÉS nem tűnik betegnek (distress nincs, orientált, figyelmes).",
      "condition": [
        {
          "mezo": "eletkorHonap",
          "min": 3,
          "max": 36
        },
        {
          "mezo": "temp",
          "min": 38.51
        },
        {
          "mezo": "gyermekKullem",
          "egyenlo": "nembeteg"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 236
        },
        {
          "doc": "tankonyv",
          "page": 70
        }
      ],
      "notes": "",
      "conflicts": [],
      "korMinHonap": 3,
      "korMaxHonap": 36,
      "group": "temperature"
    },
    {
      "id": "gyermek_laz_06",
      "name": ">3 év, láz >38.5°C, betegnek tűnik -> MSTR 3",
      "applies_to": "gyermek",
      "condition_text": "3 évnél idősebb gyermek testhőmérséklete > 38.5°C ÉS betegnek tűnik (pulzus- és légzésszám emelkedéssel).",
      "condition": [
        {
          "mezo": "eletkorHonap",
          "min": 36
        },
        {
          "mezo": "temp",
          "min": 38.51
        },
        {
          "mezo": "gyermekKullem",
          "egyenlo": "beteg"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 236
        },
        {
          "doc": "tankonyv",
          "page": 70
        }
      ],
      "notes": "",
      "conflicts": [],
      "korMinHonap": 36,
      "group": "temperature"
    },
    {
      "id": "gyermek_laz_07",
      "name": ">3 év, láz >38.5°C, nem tűnik betegnek -> MSTR 4",
      "applies_to": "gyermek",
      "condition_text": "3 évnél idősebb gyermek testhőmérséklete > 38.5°C ÉS nem tűnik betegnek.",
      "condition": [
        {
          "mezo": "eletkorHonap",
          "min": 36
        },
        {
          "mezo": "temp",
          "min": 38.51
        },
        {
          "mezo": "gyermekKullem",
          "egyenlo": "nembeteg"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 236
        },
        {
          "doc": "tankonyv",
          "page": 70
        }
      ],
      "notes": "",
      "conflicts": [],
      "korMinHonap": 36,
      "group": "temperature"
    },
    {
      "id": "gyermek_laz_08",
      "name": "Nem szülőszobán született / újszülött 38°C felett -> MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "Az újszülött 38°C fok feletti hője automatikusan MSTR 2. A vitális paramétereket ellenőrizni kell, de önmagukban nem viszik magasabb szintre (esettanulmány: 11 hetes csecsemő, T 38,2°C -> MSTR 2).",
      "condition": [],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 262
        }
      ],
      "notes": "Átfed a gyermek_laz_01 szabállyal (0-3 hó >38.0°C -> MSTR 2). Külön rögzítve a jegyzet explicit szabálya miatt.",
      "conflicts": [],
      "korMinHonap": 0,
      "korMaxHonap": 3,
      "group": "pediatric"
    },
    {
      "id": "gyermek_dehid_01",
      "name": "Súlyos kiszáradás (gyermek) -> MSTR 1",
      "applies_to": "gyermek",
      "condition_text": "Hányás/hányinger/hasmenés/általános gyengeség panasznál. Súlyos kiszáradás: jelentős volumenveszteség, a dehidráció klasszikus jelei, sokk jelei és tünetei.",
      "condition": [
        {
          "mezo": "dehidraciofok",
          "egyenlo": "sulyos"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 251
        },
        {
          "doc": "tankonyv",
          "page": 45
        }
      ],
      "notes": "Vezető panaszok: hányás/hányinger/hasmenés/gyengeség. Manuális megítélés. | Bekötve a dehidraciofok mezőhöz (eddig condition:[] miatt sosem teljesült).",
      "conflicts": [],
      "csakPanaszok": [
        "hasmenes",
        "hanyas-hanyinger",
        "taplalasi-nehezsegek-ujszulotteknel"
      ],
      "group": "hemodynamic"
    },
    {
      "id": "gyermek_dehid_02",
      "name": "Közepes fokú kiszáradás (gyermek) -> MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "Közepes fokú kiszáradás: száraz nyálkahártyák, tahikardia, +/- rossz turgor, csökkent vizeletmennyiség.",
      "condition": [
        {
          "mezo": "dehidraciofok",
          "egyenlo": "kozepes"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 251
        },
        {
          "doc": "tankonyv",
          "page": 45
        }
      ],
      "notes": "Manuális megítélés. | Bekötve a dehidraciofok mezőhöz (eddig condition:[] miatt sosem teljesült).",
      "conflicts": [],
      "csakPanaszok": [
        "hasmenes",
        "hanyas-hanyinger",
        "taplalasi-nehezsegek-ujszulotteknel"
      ],
      "group": "hemodynamic"
    },
    {
      "id": "gyermek_dehid_03",
      "name": "Enyhe kiszáradás (gyermek) -> MSTR 3",
      "applies_to": "gyermek",
      "condition_text": "Enyhe kiszáradás: stabil vitális paraméterek, fokozódó szomjazás, koncentrált vizelet, előzményből egyértelműen csökkent folyadékbevitel és/vagy fokozott folyadékvesztés.",
      "condition": [
        {
          "mezo": "dehidraciofok",
          "egyenlo": "enyhe"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 251
        },
        {
          "doc": "tankonyv",
          "page": 45
        }
      ],
      "notes": "A 3-4 kategória a táblázat alapján csak akkor adandó, ha elsődleges/egyéb másodlagos módosítók alapján nem állapítható meg. | Bekötve a dehidraciofok mezőhöz (eddig condition:[] miatt sosem teljesült).",
      "conflicts": [],
      "csakPanaszok": [
        "hasmenes",
        "hanyas-hanyinger",
        "taplalasi-nehezsegek-ujszulotteknel"
      ],
      "group": "hemodynamic"
    },
    {
      "id": "gyermek_dehid_04",
      "name": "Lehetséges kiszáradás (gyermek) -> MSTR 4",
      "applies_to": "gyermek",
      "condition_text": "Lehetséges kiszáradás: nincsenek kiszáradási tünetek, de jelenleg is folyadékvesztést előidéző ok vagy szájon át történő folyadékbevitel nehezítettsége áll fönt.",
      "condition": [
        {
          "mezo": "dehidraciofok",
          "egyenlo": "lehetseges"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 251
        },
        {
          "doc": "tankonyv",
          "page": 45
        }
      ],
      "notes": "Manuális megítélés. | Bekötve a dehidraciofok mezőhöz (eddig condition:[] miatt sosem teljesült).",
      "conflicts": [],
      "csakPanaszok": [
        "hasmenes",
        "hanyas-hanyinger",
        "taplalasi-nehezsegek-ujszulotteknel"
      ],
      "group": "hemodynamic"
    },
    {
      "id": "gyermek_faj_02",
      "name": "Gyermek fájdalom súlyos (8-10), akut -> MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "Fájdalom súlyossága súlyos (8-10 pont) ÉS akut (időtartam) -> MSTR 2. Krónikus = ismert fájdalom szindróma (pl. sarlósejtes anémia, juvenilis rheumatoid arthritis); akut = újonnan kialakult, valószínűleg veszélyesebb.",
      "condition": [
        {
          "mezo": "fajdalomPont",
          "min": 8,
          "max": 10
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "akut"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "tankonyv",
          "page": 72
        },
        {
          "doc": "jegyzet",
          "page": 243
        }
      ],
      "notes": "A tankönyvi (2016) és jegyzet (2022) fájdalom-táblázat azonos.",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "gyermek_faj_03",
      "name": "Gyermek fájdalom súlyos (8-10), krónikus -> MSTR 3",
      "applies_to": "gyermek",
      "condition_text": "Fájdalom súlyossága súlyos (8-10 pont) ÉS krónikus (időtartam) -> MSTR 3. Krónikus = ismert fájdalom szindróma (pl. sarlósejtes anémia, juvenilis rheumatoid arthritis); akut = újonnan kialakult, valószínűleg veszélyesebb.",
      "condition": [
        {
          "mezo": "fajdalomPont",
          "min": 8,
          "max": 10
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "kronikus"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "tankonyv",
          "page": 72
        },
        {
          "doc": "jegyzet",
          "page": 243
        }
      ],
      "notes": "A tankönyvi (2016) és jegyzet (2022) fájdalom-táblázat azonos.",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "gyermek_faj_04",
      "name": "Gyermek fájdalom közepes (4-7), akut -> MSTR 3",
      "applies_to": "gyermek",
      "condition_text": "Fájdalom súlyossága közepes (4-7 pont) ÉS akut (időtartam) -> MSTR 3. Krónikus = ismert fájdalom szindróma (pl. sarlósejtes anémia, juvenilis rheumatoid arthritis); akut = újonnan kialakult, valószínűleg veszélyesebb.",
      "condition": [
        {
          "mezo": "fajdalomPont",
          "min": 4,
          "max": 7
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "akut"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "tankonyv",
          "page": 72
        },
        {
          "doc": "jegyzet",
          "page": 243
        }
      ],
      "notes": "A tankönyvi (2016) és jegyzet (2022) fájdalom-táblázat azonos.",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "gyermek_faj_05",
      "name": "Gyermek fájdalom közepes (4-7), krónikus -> MSTR 4",
      "applies_to": "gyermek",
      "condition_text": "Fájdalom súlyossága közepes (4-7 pont) ÉS krónikus (időtartam) -> MSTR 4. Krónikus = ismert fájdalom szindróma (pl. sarlósejtes anémia, juvenilis rheumatoid arthritis); akut = újonnan kialakult, valószínűleg veszélyesebb.",
      "condition": [
        {
          "mezo": "fajdalomPont",
          "min": 4,
          "max": 7
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "kronikus"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "tankonyv",
          "page": 72
        },
        {
          "doc": "jegyzet",
          "page": 243
        }
      ],
      "notes": "A tankönyvi (2016) és jegyzet (2022) fájdalom-táblázat azonos.",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "gyermek_faj_06",
      "name": "Gyermek fájdalom enyhe (1-3), akut -> MSTR 4",
      "applies_to": "gyermek",
      "condition_text": "Fájdalom súlyossága enyhe (1-3 pont) ÉS akut (időtartam) -> MSTR 4. Krónikus = ismert fájdalom szindróma (pl. sarlósejtes anémia, juvenilis rheumatoid arthritis); akut = újonnan kialakult, valószínűleg veszélyesebb.",
      "condition": [
        {
          "mezo": "fajdalomPont",
          "min": 1,
          "max": 3
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "akut"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "tankonyv",
          "page": 72
        },
        {
          "doc": "jegyzet",
          "page": 243
        }
      ],
      "notes": "A tankönyvi (2016) és jegyzet (2022) fájdalom-táblázat azonos.",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "gyermek_faj_07",
      "name": "Gyermek fájdalom enyhe (1-3), krónikus -> MSTR 5",
      "applies_to": "gyermek",
      "condition_text": "Fájdalom súlyossága enyhe (1-3 pont) ÉS krónikus (időtartam) -> MSTR 5. Krónikus = ismert fájdalom szindróma (pl. sarlósejtes anémia, juvenilis rheumatoid arthritis); akut = újonnan kialakult, valószínűleg veszélyesebb.",
      "condition": [
        {
          "mezo": "fajdalomPont",
          "min": 1,
          "max": 3
        },
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "kronikus"
        }
      ],
      "level": 5,
      "source": [
        {
          "doc": "tankonyv",
          "page": 72
        },
        {
          "doc": "jegyzet",
          "page": 243
        }
      ],
      "notes": "A tankönyvi (2016) és jegyzet (2022) fájdalom-táblázat azonos.",
      "conflicts": [],
      "group": "pain"
    },
    {
      "id": "gyermek_stridor_01",
      "name": "Stridor: veszélyeztetett/elzáródott légút -> MSTR 1",
      "applies_to": "gyermek",
      "condition_text": "Stridor veszélyeztetett vagy elzáródott légúttal.",
      "condition": [
        {
          "mezo": "stridor",
          "egyenlo": "elzarodott"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 253
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [],
      "group": "respiratory"
    },
    {
      "id": "gyermek_stridor_02",
      "name": "Kifejezett stridor -> MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "Kifejezett stridor.",
      "condition": [
        {
          "mezo": "stridor",
          "egyenlo": "kifejezett"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 253
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "gyermek_stridor_03",
      "name": "Hallható stridor (egyéb jel nélkül) -> MSTR 3",
      "applies_to": "gyermek",
      "condition_text": "Hallható stridor egyéb jel nélkül.",
      "condition": [
        {
          "mezo": "stridor",
          "egyenlo": "hallhato"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 253
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "gyermek_apnoe_01",
      "name": "Csecsemőkori apnoe: felvételkor észlelt rövid apnoé / most apnoézik -> MSTR 1",
      "applies_to": "gyermek",
      "condition_text": "Felvételkor észlelt rövid apnoés állapot; a gyermek jelenleg apnoézik.",
      "condition": [
        {
          "mezo": "csecsemoApnoe",
          "egyenlo": "most"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 253
        },
        {
          "doc": "jegyzet",
          "page": 268
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "gyermek_apnoe_02",
      "name": "Csecsemőkori apnoe: újkeletű apnoé/nehézlégzés (először) -> MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "Újkeletű apnoés légzéskimaradás vagy nehézlégzés; már nem apnoés, de most fordult elő először.",
      "condition": [
        {
          "mezo": "csecsemoApnoe",
          "egyenlo": "ujkeletu"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 253
        },
        {
          "doc": "jegyzet",
          "page": 268
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "gyermek_apnoe_03",
      "name": "Csecsemőkori apnoe: apnoé a kórtörténetben (többedjére) -> MSTR 3",
      "applies_to": "gyermek",
      "condition_text": "Apnoés eredetű légzéskimaradás a kórtörténetben; már nem apnoézik, többedjére fordult elő (normál aktuális vitálisak).",
      "condition": [
        {
          "mezo": "csecsemoApnoe",
          "egyenlo": "kortortenet"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 253
        },
        {
          "doc": "jegyzet",
          "page": 268
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "gyermek_siras_01",
      "name": "Vigasztalhatatlan csecsemő, abnormális vitálisak -> MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "Vigasztalhatatlan csecsemő abnormális vitális paraméterekkel.",
      "condition": [
        {
          "mezo": "vigasztalhatatlanSiras",
          "egyenlo": "vigasztalhatatlan_koros_vitalis"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 253
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "id": "gyermek_siras_02",
      "name": "Vigasztalhatatlan csecsemő, stabil vitálisak -> MSTR 3",
      "applies_to": "gyermek",
      "condition_text": "Vigasztalhatatlan csecsemő stabil vitális paraméterekkel.",
      "condition": [
        {
          "mezo": "vigasztalhatatlanSiras",
          "egyenlo": "vigasztalhatatlan_stabil_vitalis"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 253
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "id": "gyermek_siras_03",
      "name": "Ingerlékeny, de megnyugtatható csecsemő -> MSTR 4",
      "applies_to": "gyermek",
      "condition_text": "Ingerlékeny, de megnyugtatható csecsemő.",
      "condition": [
        {
          "mezo": "vigasztalhatatlanSiras",
          "egyenlo": "ingerlekeny_megnyugtathato"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 253
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "id": "gyermek_tonus_01",
      "name": "Tónustalan gyermek, fejét nem tartja (floppy child) -> MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "Tónustalan, képtelen a fej megtartására.",
      "condition": [
        {
          "mezo": "izomtonus",
          "egyenlo": "tonustalan_fejet_nem_tartja"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 254
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "id": "gyermek_tonus_02",
      "name": "Csökkent izomtónus (elvárhatónál) -> MSTR 3",
      "applies_to": "gyermek",
      "condition_text": "Tónusos, de az elvárhatónál csökkentebb izomtónus.",
      "condition": [
        {
          "mezo": "izomtonus",
          "egyenlo": "csokkent_tonus"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 254
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "id": "gyermek_jaras_01",
      "name": "Lázas állapottal járó testtartási/járási zavar -> MSTR 3",
      "applies_to": "gyermek",
      "condition_text": "Testtartási/járási zavar lázas állapottal.",
      "condition": [
        {
          "mezo": "jarasZavar",
          "egyenlo": "lazzal"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 254
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "temperature"
    },
    {
      "id": "gyermek_jaras_02",
      "name": "Járási zavar láz nélkül / nehezen jár -> MSTR 4",
      "applies_to": "gyermek",
      "condition_text": "Nehezen jár / járási zavar láz nélkül.",
      "condition": [
        {
          "mezo": "jarasZavar",
          "egyenlo": "laz_nelkul"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 254
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "temperature"
    },
    {
      "id": "gyermek_velesz_01",
      "name": "Veleszületett betegség: állapotromlás/azonnali kezelés -> MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "Veleszületett gyermekkori betegségnél állapotromlás léphet fel vagy azonnali kezelés szükséges: hányás/hasmenés veleszületett anyagcserezavarban, I. típusú cukorbetegségben vagy mellékvese-elégtelenségben.",
      "condition": [
        {
          "mezo": "veleszuletettBetegseg",
          "egyenlo": "allapotromlas_azonnali"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 254
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "Protokoll-levél / gondozási terv szerinti gyors romlás v. azonnali terápia kockázata is ide tartozik (CTAS COT-2008 DIA 397).",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "id": "gyermek_velesz_02",
      "name": "Veleszületett betegség: gondozó szerint ellátásra szorul -> MSTR 3",
      "applies_to": "gyermek",
      "condition_text": "Veleszületett betegséggel élő gyermek, a gondozó szerint ellátásra szorul.",
      "condition": [
        {
          "mezo": "veleszuletettBetegseg",
          "egyenlo": "gondozo_szerint_ellatas"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "id": "gyermek_velesz_03",
      "name": "Veleszületett betegség: stabil, potenciális problémákkal -> MSTR 4",
      "applies_to": "gyermek",
      "condition_text": "Veleszületett betegséggel élő stabil állapotú gyermek potenciális problémákkal.",
      "condition": [
        {
          "mezo": "veleszuletettBetegseg",
          "egyenlo": "stabil_potencialis"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "id": "gyermek_16",
      "name": "Nem szülőszobán született újszülött -> automatikus MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "Nem szülőszobán született újszülött (otthon, mentőautóban vagy a sürgősségi osztályon hirtelen meginduló szüléssel született) automatikusan MSTR 2. szintű. A vitális meghatározók alapján felfelé triázsolható, lefelé nem.",
      "condition": [],
      "level": 2,
      "source": [
        {
          "doc": "tankonyv",
          "page": 59
        },
        {
          "doc": "jegyzet",
          "page": 209
        }
      ],
      "notes": "Felfelé triázsolható (súlyosabb szint), lefelé nem. Gyermek-specifikus vezető panasz.",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "id": "gyermek_21",
      "name": "PEFR (kilégzési csúcsáramlás) mérés korhatára",
      "applies_to": "gyermek",
      "condition_text": "PEFR mérőeszköz csak 6 évnél idősebb gyermeknél ajánlott; 3-4 próbálkozás lehet szükséges. A mért értéket az elvárt értékhez %-ban viszonyítjuk. Légzési elégtelenség: PEFR < 40% -> közepes (MSTR 2), 40-60% -> enyhe (MSTR 3).",
      "condition": [
        {
          "mezo": "eletkorEv",
          "min": 6
        }
      ],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 223
        },
        {
          "doc": "tankonyv",
          "page": 65
        },
        {
          "doc": "tankonyv",
          "page": 64
        }
      ],
      "notes": "Csak >6 év. Az O2-szaturáció mérése a tengerszint feletti magasságtól függ.",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "masodlagos_02",
      "name": "Vércukor < 3 mmol/l tünetekkel → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Vércukorszint < 3 mmol/l ÉS tünetek (zavartság, izzadás/verejtékezés, viselkedésváltozás, görcsrohamok, akut fokális neurológiai deficit/stroke tünetek). Vezető panaszok: megváltozott tudatállapot, zavartság, hipoglikémia.",
      "condition": [
        {
          "mezo": "vercukor",
          "max": 2.99
        },
        {
          "mezo": "vercukorTunet",
          "egyenlo": "van"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 97
        },
        {
          "doc": "jegyzet",
          "page": 250
        },
        {
          "doc": "tankonyv",
          "page": 44
        }
      ],
      "notes": "Hipoglikémia küszöb 3 mmol/l. Az elsődleges módosítók (megváltozott tudat, görcs) alapján a beteg gyakran már eleve ≥ ilyen szinten van.",
      "conflicts": [],
      "csakPanaszok": [
        "modosult-tudatallapot",
        "zavartsag",
        "hyperglycemia",
        "hypoglycemia"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_03",
      "name": "Vércukor < 3 mmol/l tünetek nélkül → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Vércukorszint < 3 mmol/l, tünetek nélkül.",
      "condition": [
        {
          "mezo": "vercukor",
          "max": 2.99
        },
        {
          "mezo": "vercukorTunet",
          "egyenlo": "nincs"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 97
        },
        {
          "doc": "jegyzet",
          "page": 250
        },
        {
          "doc": "tankonyv",
          "page": 44
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "modosult-tudatallapot",
        "zavartsag",
        "hyperglycemia",
        "hypoglycemia"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_04",
      "name": "Vércukor > 18 mmol/l tünetekkel → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Vércukorszint > 18 mmol/l ÉS tünetek (nehézlégzés, kiszáradás, tachypnoe/Kussmaul légzés, szomjúság, polyuria, gyengeség). Vezető panaszok: megváltozott tudatállapot, zavartság, hiperglikémia.",
      "condition": [
        {
          "mezo": "vercukor",
          "min": 18.01
        },
        {
          "mezo": "vercukorTunet",
          "egyenlo": "van"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 97
        },
        {
          "doc": "jegyzet",
          "page": 250
        },
        {
          "doc": "tankonyv",
          "page": 44
        }
      ],
      "notes": "Hiperglikémia küszöb 18 mmol/l.",
      "conflicts": [],
      "csakPanaszok": [
        "modosult-tudatallapot",
        "zavartsag",
        "hyperglycemia",
        "hypoglycemia"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_05",
      "name": "Vércukor > 18 mmol/l tünetek nélkül → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Vércukorszint > 18 mmol/l, tünetek nélkül.",
      "condition": [
        {
          "mezo": "vercukor",
          "min": 18.01
        },
        {
          "mezo": "vercukorTunet",
          "egyenlo": "nincs"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 97
        },
        {
          "doc": "jegyzet",
          "page": 250
        },
        {
          "doc": "tankonyv",
          "page": 44
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "modosult-tudatallapot",
        "zavartsag",
        "hyperglycemia",
        "hypoglycemia"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_07",
      "name": "Súlyos kiszáradás → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Súlyos kiszáradás: jelentős volumenveszteség a dehidráció klasszikus jeleivel, sokk jelei és tünetei. Vezető panaszok: hányás és/vagy hányinger, hasmenés, általános gyengeség.",
      "condition": [
        {
          "mezo": "dehidraciofok",
          "egyenlo": "sulyos"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 98
        },
        {
          "doc": "jegyzet",
          "page": 251
        },
        {
          "doc": "tankonyv",
          "page": 45
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "hasmenes",
        "hanyas-hanyinger",
        "altalanos-gyengeseg"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_08",
      "name": "Közepes fokú kiszáradás → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Közepes fokú kiszáradás: száraz nyálkahártyák, tachikardia, +/- rossz turgor, csökkent vizeletmennyiség.",
      "condition": [
        {
          "mezo": "dehidraciofok",
          "egyenlo": "kozepes"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 98
        },
        {
          "doc": "jegyzet",
          "page": 251
        },
        {
          "doc": "tankonyv",
          "page": 45
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "hasmenes",
        "hanyas-hanyinger",
        "altalanos-gyengeseg"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_09",
      "name": "Enyhe kiszáradás → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Enyhe kiszáradás: stabil vitális paraméterek, fokozódó szomjazás, koncentrált vizelet, a beteg előzményéből egyértelműen csökkent folyadékbevitel és/vagy fokozott folyadékvesztés.",
      "condition": [
        {
          "mezo": "dehidraciofok",
          "egyenlo": "enyhe"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 98
        },
        {
          "doc": "jegyzet",
          "page": 129
        },
        {
          "doc": "jegyzet",
          "page": 251
        },
        {
          "doc": "tankonyv",
          "page": 45
        }
      ],
      "notes": "A 3-as és 4-es szint csak akkor a táblázat alapján adandó, ha az elsődleges és egyéb másodlagos módosítók alapján nem állapítható meg a kategória (tankönyv 2.4.2).",
      "conflicts": [],
      "csakPanaszok": [
        "hasmenes",
        "hanyas-hanyinger",
        "altalanos-gyengeseg"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_10",
      "name": "Lehetséges kiszáradás → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Lehetséges kiszáradás: nincsenek kiszáradási tünetek, de jelenleg is folyadékvesztést előidéző ok, vagy a szájon át történő folyadékbevitel nehezítettsége áll fenn.",
      "condition": [
        {
          "mezo": "dehidraciofok",
          "egyenlo": "lehetseges"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 98
        },
        {
          "doc": "jegyzet",
          "page": 251
        },
        {
          "doc": "jegyzet",
          "page": 278
        },
        {
          "doc": "tankonyv",
          "page": 45
        }
      ],
      "notes": "Hányás/hasmenés panasznál lehetséges kiszáradással MSTR 4; ha a vizeletmennyiség már csökkent (enyhe kiszáradás) MSTR 3; keringési labilitásnál feljebb kell triázsolni (jegyzet 278).",
      "conflicts": [],
      "csakPanaszok": [
        "hasmenes",
        "hanyas-hanyinger",
        "altalanos-gyengeseg"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_12",
      "name": "Hipertenzió: SBP > 220 Hgmm + tünet → MSTR 2",
      "applies_to": "felnott",
      "condition_text": "Szisztolés vérnyomás > 220 Hgmm ÉS bármely hipertenzióval kapcsolatos tünet (hirtelen fejfájás, zavartság, hányinger, hányinger, légszomj/nehézlégzés, mellkasi fájdalom). A DBP > 130 Hgmm ugyanezt a szintet adja (lásd masodlagos_13).",
      "condition": [
        {
          "mezo": "sys",
          "min": 221
        },
        {
          "mezo": "hipertoniaTunet",
          "egyenlo": "van"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 99
        },
        {
          "doc": "jegyzet",
          "page": 102
        },
        {
          "doc": "tankonyv",
          "page": 46
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "A forrás a feltételt VAGY-kapcsolatban adja (SBP > 220 VAGY DBP > 130); a VAGY nem fejezhető ki egyetlen condition-tömbben, ezért a szisztolés és diasztolés ág külön szabály. Tankönyv első sora nyomtatási hibával 'RR syst 220' (> jel nélkül) szerepel; a jegyzet szerint > 220. | Tünetlista (CTAS COT-2008 DIA 39): légszomj, mellkasi fájdalom, ZAVARTSÁG, HIRTELEN fejfájás, hányinger/hányás.",
      "conflicts": [],
      "csakPanaszok": [
        "hipertenzio"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_13",
      "name": "Hipertenzió: DBP > 130 Hgmm + tünet → MSTR 2",
      "applies_to": "felnott",
      "condition_text": "Diasztolés vérnyomás > 130 Hgmm ÉS bármely hipertenzióval kapcsolatos tünet (hirtelen fejfájás, zavartság, hányinger, hányinger, légszomj/nehézlégzés, mellkasi fájdalom).",
      "condition": [
        {
          "mezo": "dia",
          "min": 131
        },
        {
          "mezo": "hipertoniaTunet",
          "egyenlo": "van"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 99
        },
        {
          "doc": "jegyzet",
          "page": 102
        },
        {
          "doc": "tankonyv",
          "page": 46
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "A szisztolés ág: masodlagos_12. | Tünetlista (CTAS COT-2008 DIA 39): légszomj, mellkasi fájdalom, ZAVARTSÁG, HIRTELEN fejfájás, hányinger/hányás.",
      "conflicts": [],
      "csakPanaszok": [
        "hipertenzio"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_14",
      "name": "Hipertenzió: SBP > 220 Hgmm tünet nélkül → MSTR 3",
      "applies_to": "felnott",
      "condition_text": "Szisztolés vérnyomás > 220 Hgmm, nincs kísérő tünet.",
      "condition": [
        {
          "mezo": "sys",
          "min": 221
        },
        {
          "mezo": "hipertoniaTunet",
          "egyenlo": "nincs"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 99
        },
        {
          "doc": "jegyzet",
          "page": 102
        },
        {
          "doc": "tankonyv",
          "page": 46
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "A diasztolés ág: masodlagos_15.",
      "conflicts": [],
      "csakPanaszok": [
        "hipertenzio"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_15",
      "name": "Hipertenzió: DBP > 130 Hgmm tünet nélkül → MSTR 3",
      "applies_to": "felnott",
      "condition_text": "Diasztolés vérnyomás > 130 Hgmm, nincs kísérő tünet.",
      "condition": [
        {
          "mezo": "dia",
          "min": 131
        },
        {
          "mezo": "hipertoniaTunet",
          "egyenlo": "nincs"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 99
        },
        {
          "doc": "jegyzet",
          "page": 102
        },
        {
          "doc": "tankonyv",
          "page": 46
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "hipertenzio"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_16",
      "name": "Hipertenzió: SBP 200-220 Hgmm + tünet → MSTR 3",
      "applies_to": "felnott",
      "condition_text": "Szisztolés vérnyomás 200-220 Hgmm ÉS bármely hipertenzióval kapcsolatos tünet (hirtelen fejfájás, zavartság, hányinger, hányinger, légszomj/nehézlégzés, mellkasi fájdalom).",
      "condition": [
        {
          "mezo": "sys",
          "min": 200,
          "max": 220
        },
        {
          "mezo": "hipertoniaTunet",
          "egyenlo": "van"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 99
        },
        {
          "doc": "jegyzet",
          "page": 102
        },
        {
          "doc": "tankonyv",
          "page": 46
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "A diasztolés ág: masodlagos_17. | Tünetlista (CTAS COT-2008 DIA 39): légszomj, mellkasi fájdalom, ZAVARTSÁG, HIRTELEN fejfájás, hányinger/hányás.",
      "conflicts": [],
      "csakPanaszok": [
        "hipertenzio"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_17",
      "name": "Hipertenzió: DBP 110-130 Hgmm + tünet → MSTR 3",
      "applies_to": "felnott",
      "condition_text": "Diasztolés vérnyomás 110-130 Hgmm ÉS bármely hipertenzióval kapcsolatos tünet (hirtelen fejfájás, zavartság, hányinger, hányinger, légszomj/nehézlégzés, mellkasi fájdalom).",
      "condition": [
        {
          "mezo": "dia",
          "min": 110,
          "max": 130
        },
        {
          "mezo": "hipertoniaTunet",
          "egyenlo": "van"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 99
        },
        {
          "doc": "jegyzet",
          "page": 102
        },
        {
          "doc": "tankonyv",
          "page": 46
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "Tünetlista (CTAS COT-2008 DIA 39): légszomj, mellkasi fájdalom, ZAVARTSÁG, HIRTELEN fejfájás, hányinger/hányás.",
      "conflicts": [],
      "csakPanaszok": [
        "hipertenzio"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_18",
      "name": "Hipertenzió: SBP 200-220 Hgmm tünet nélkül → MSTR 4 (4-5)",
      "applies_to": "felnott",
      "condition_text": "Szisztolés vérnyomás 200-220 Hgmm, nincs kísérő tünet.",
      "condition": [
        {
          "mezo": "sys",
          "min": 200,
          "max": 220
        },
        {
          "mezo": "hipertoniaTunet",
          "egyenlo": "nincs"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 99
        },
        {
          "doc": "jegyzet",
          "page": 102
        },
        {
          "doc": "tankonyv",
          "page": 46
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "A forrás 'MSTR 4 & 5' szintet ad; a biztonságosabb (magasabb) 4-es szintet vettük fő értéknek, a végső 4/5 klinikai megítéléstől függ. A diasztolés ág: masodlagos_19.",
      "conflicts": [],
      "csakPanaszok": [
        "hipertenzio"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_19",
      "name": "Hipertenzió: DBP 110-130 Hgmm tünet nélkül → MSTR 4 (4-5)",
      "applies_to": "felnott",
      "condition_text": "Diasztolés vérnyomás 110-130 Hgmm, nincs kísérő tünet.",
      "condition": [
        {
          "mezo": "dia",
          "min": 110,
          "max": 130
        },
        {
          "mezo": "hipertoniaTunet",
          "egyenlo": "nincs"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 99
        },
        {
          "doc": "jegyzet",
          "page": 102
        },
        {
          "doc": "tankonyv",
          "page": 46
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "A forrás 'MSTR 4 & 5' szintet ad; a biztonságosabb 4-es szintet vettük fő értéknek.",
      "conflicts": [],
      "csakPanaszok": [
        "hipertenzio"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_22",
      "name": "Környezeti ártalom: maghőmérséklet < 32.0°C → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Maghőmérséklet < 32.0°C. Vezető panaszok: hipotermia, fulladás/kihűlés közeli állapot.",
      "condition": [
        {
          "mezo": "maghomerseklet",
          "max": 31.99
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 294
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "hypothermia"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_23",
      "name": "Környezeti ártalom: maghőmérséklet 32.0-35.0°C → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Maghőmérséklet 32.0°C - 35.0°C.",
      "condition": [
        {
          "mezo": "maghomerseklet",
          "min": 32.0,
          "max": 35.0
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 294
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "hypothermia"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_24",
      "name": "Környezeti ártalom: maghőmérséklet > 35.0°C (fagyás nélkül) → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Maghőmérséklet > 35.0°C, fagyás nélkül, normál vitális paraméterekkel.",
      "condition": [
        {
          "mezo": "maghomerseklet",
          "min": 35.01
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 294
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "Feltétel: nincs fagyás és normál vitális paraméterek.",
      "conflicts": [],
      "csakPanaszok": [
        "hypothermia"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_26",
      "name": "Magzati aprórész vagy köldökzsinór előesése → MSTR 1",
      "applies_to": "felnott",
      "condition_text": "Vezető panasz: terhesség > 20. hét. Módosító: Magzati aprórész vagy köldökzsinór előesése.",
      "condition": [
        {
          "mezo": "terhessegModosito",
          "egyenlo": "koldokzsinor_elolesese"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 295
        },
        {
          "doc": "tankonyv",
          "page": 80
        }
      ],
      "notes": "Térd-könyök helyzetben szállítás az ellátóhelyre.",
      "conflicts": [],
      "csakPanaszok": [
        "terhesseg-20-het-2"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_27",
      "name": "Hüvelyi vérzés a terhesség 3. trimeszterében → MSTR 1",
      "applies_to": "felnott",
      "condition_text": "Vezető panasz: terhesség > 20. hét. Módosító: Hüvelyi vérzés a terhesség 3. trimeszterében.",
      "condition": [
        {
          "mezo": "terhessegModosito",
          "egyenlo": "huvelyi_verzes_3trimeszter"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 295
        },
        {
          "doc": "tankonyv",
          "page": 80
        }
      ],
      "notes": "3. trimeszteri vérzés elöl fekvő lepény leválása miatt jöhet létre.",
      "conflicts": [],
      "csakPanaszok": [
        "terhesseg-20-het-2"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_28",
      "name": "Vajúdás (fájások ≤ 2 perc) → MSTR 2",
      "applies_to": "felnott",
      "condition_text": "Vezető panasz: terhesség > 20. hét. Módosító: Vajúdás (fájások ≤ 2 perc).",
      "condition": [
        {
          "mezo": "terhessegModosito",
          "egyenlo": "vajudas_2perc_alatt"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 295
        },
        {
          "doc": "tankonyv",
          "page": 80
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "terhesseg-20-het-2"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_29",
      "name": "Magzati mozgás és/vagy szívverés hiánya → MSTR 2",
      "applies_to": "felnott",
      "condition_text": "Vezető panasz: terhesség > 20. hét. Módosító: Magzati mozgás és/vagy szívverés hiánya.",
      "condition": [
        {
          "mezo": "terhessegModosito",
          "egyenlo": "magzat_mozgas_szivveres_hiany"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 295
        },
        {
          "doc": "tankonyv",
          "page": 80
        }
      ],
      "notes": "Az orvos megérkezéséig babydopp-pal szívhang kereshető az anya megnyugtatására.",
      "conflicts": [],
      "csakPanaszok": [
        "terhesseg-20-het-2"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_30",
      "name": "Fejfájás +/- ödéma +/- hasi fájdalom +/- hipertenzió → MSTR 2",
      "applies_to": "felnott",
      "condition_text": "Vezető panasz: terhesség > 20. hét. Módosító: Fejfájás +/- ödéma +/- hasi fájdalom +/- hipertenzió.",
      "condition": [
        {
          "mezo": "terhessegModosito",
          "egyenlo": "fejfajas_odema_hasi_hipertenzio"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 295
        },
        {
          "doc": "tankonyv",
          "page": 80
        }
      ],
      "notes": "HELLP-szindróma / eclampsia veszélyét jelezheti.",
      "conflicts": [],
      "csakPanaszok": [
        "terhesseg-20-het-2"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_31",
      "name": "Lezajlott szülés → MSTR 2",
      "applies_to": "felnott",
      "condition_text": "Vezető panasz: terhesség > 20. hét. Módosító: Lezajlott szülés.",
      "condition": [
        {
          "mezo": "terhessegModosito",
          "egyenlo": "lezajlott_szules"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 295
        },
        {
          "doc": "tankonyv",
          "page": 80
        }
      ],
      "notes": "Lezajlott szülés csak akkor MSTR 2, ha sima szülés zajlott és a placenta tamponál; életet veszélyeztető atóniás vérzésnél MSTR 1.",
      "conflicts": [],
      "csakPanaszok": [
        "terhesseg-20-het-2"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_32",
      "name": "Vajúdás (fájások > 2 perc) → MSTR 3",
      "applies_to": "felnott",
      "condition_text": "Vezető panasz: terhesség > 20. hét. Módosító: Vajúdás (fájások > 2 perc).",
      "condition": [
        {
          "mezo": "terhessegModosito",
          "egyenlo": "vajudas_2perc_felett"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 295
        },
        {
          "doc": "tankonyv",
          "page": 80
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "terhesseg-20-het-2"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_33",
      "name": "Magzatvíz szivárgás lehetősége → MSTR 3",
      "applies_to": "felnott",
      "condition_text": "Vezető panasz: terhesség > 20. hét. Módosító: Magzatvíz szivárgás lehetősége.",
      "condition": [
        {
          "mezo": "terhessegModosito",
          "egyenlo": "magzatviz_szivargas"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 295
        },
        {
          "doc": "tankonyv",
          "page": 80
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "terhesseg-20-het-2"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_41",
      "name": "Öngyilkossági kísérlet vagy annak pontos terve → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Depresszió / Öngyilkossági szándék / Szándékos önsértő magatartás. Módosító: Öngyilkossági kísérlet vagy annak pontos terve.",
      "condition": [
        {
          "mezo": "mentalisDepresszioOngyilkossag",
          "egyenlo": "ongyilkossagi_kiserlet_vagy_pontos_terv"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 301
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "depresszio-ongyilkossagi-szandek-onveszelyesseg"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_42",
      "name": "Aktív öngyilkossági szándék → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Depresszió / Öngyilkossági szándék / Szándékos önsértő magatartás. Módosító: Aktív öngyilkossági szándék.",
      "condition": [
        {
          "mezo": "mentalisDepresszioOngyilkossag",
          "egyenlo": "aktiv_ongyilkossagi_szandek"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 301
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "depresszio-ongyilkossagi-szandek-onveszelyesseg"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_43",
      "name": "Biztonsági kockázat → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Depresszió / Öngyilkossági szándék / Szándékos önsértő magatartás. Módosító: Biztonsági kockázat.",
      "condition": [
        {
          "mezo": "mentalisDepresszioOngyilkossag",
          "egyenlo": "biztonsagi_kockazat"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 301
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "depresszio-ongyilkossagi-szandek-onveszelyesseg"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_44",
      "name": "Öngyilkossági gondolatok terv nélkül (biztonságos megfigyelés megoldható) → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Depresszió / Öngyilkossági szándék / Szándékos önsértő magatartás. Módosító: Öngyilkossági gondolatok terv nélkül (biztonságos megfigyelés megoldható).",
      "condition": [
        {
          "mezo": "mentalisDepresszioOngyilkossag",
          "egyenlo": "ongyilkossagi_gondolat_terv_nelkul"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 301
        },
        {
          "doc": "jegyzet",
          "page": 320
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "Ha a szökés és biztonsági kockázat veszélye nem áll fenn ÉS a biztonságos megfigyelés megoldható: MSTR 3.",
      "conflicts": [],
      "csakPanaszok": [
        "depresszio-ongyilkossagi-szandek-onveszelyesseg"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_45",
      "name": "Depresszió, öngyilkossági gondolatok nélkül → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Depresszió / Öngyilkossági szándék / Szándékos önsértő magatartás. Módosító: Depresszió, öngyilkossági gondolatok nélkül.",
      "condition": [
        {
          "mezo": "mentalisDepresszioOngyilkossag",
          "egyenlo": "depresszio_gondolat_nelkul"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 301
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "depresszio-ongyilkossagi-szandek-onveszelyesseg"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_46",
      "name": "Depresszió/öngyilkosság – egyértelműen veszélyeztető állapot → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Depresszió / Öngyilkossági szándék / Szándékos önsértő magatartás (vagy Erőszakos/Veszélyeztető állapot). Módosító: Egyértelműen veszélyeztető állapotú beteg (egyértelmű veszélyforrás önmagára és a sürgősségi osztály számára) → MSTR 1.",
      "condition": [
        {
          "mezo": "mentalisDepresszioOngyilkossag",
          "egyenlo": "egyertelmuen_veszelyezteto"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 317
        }
      ],
      "notes": "A szökésveszély külön szabály (masodlagos_84) MSTR 2 szintet ad.",
      "conflicts": [],
      "csakPanaszok": [
        "depresszio-ongyilkossagi-szandek-onveszelyesseg"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_84",
      "name": "Depresszió/öngyilkosság – szökésveszély → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Depresszió / Öngyilkossági szándék / Szándékos önsértő magatartás (vagy Erőszakos/Veszélyeztető állapot). Módosító: Szökésveszély → MSTR 2.",
      "condition": [
        {
          "mezo": "mentalisDepresszioOngyilkossag",
          "egyenlo": "szokesveszely"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 317
        },
        {
          "doc": "jegyzet",
          "page": 320
        }
      ],
      "notes": "\"Szökés veszély\" = MSTR 2 (jegyzet p317, p320).",
      "conflicts": [],
      "csakPanaszok": [
        "depresszio-ongyilkossagi-szandek-onveszelyesseg"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_47",
      "name": "Öngyilkossági gondolat terv nélkül, de biztonságos megfigyelés nem megoldható → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Öngyilkossági gondolatok konkrét terv nélkül, DE a beteg biztonságos megfigyelése nem megoldható → MSTR 2 (a masodlagos_44 szerinti 3-as helyett).",
      "condition": [
        {
          "mezo": "mentalisDepresszioOngyilkossag",
          "egyenlo": "ongyilkossagi_gondolat_terv_nelkul"
        },
        {
          "mezo": "biztonsagosMegfigyeles",
          "egyenlo": "nem_megoldhato"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 320
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "depresszio-ongyilkossagi-szandek-onveszelyesseg"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_49",
      "name": "Akut pszichózis → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Szorongás / Krízisállapot vagy Hallucinációk / Téveszmék. Módosító: Akut pszichózis.",
      "condition": [
        {
          "mezo": "mentalisSzorongasHallucinacio",
          "egyenlo": "akut_pszichozis"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 303
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "szorongas-krizishelyzet",
        "hallucinaciok-teveszmek"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_50",
      "name": "Súlyos szorongás / agitáció → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Szorongás / Krízisállapot vagy Hallucinációk / Téveszmék. Módosító: Súlyos szorongás / agitáció.",
      "condition": [
        {
          "mezo": "mentalisSzorongasHallucinacio",
          "egyenlo": "sulyos_szorongas_agitacio"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 303
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "szorongas-krizishelyzet",
        "hallucinaciok-teveszmek"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_51",
      "name": "Biztonsági kockázat → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Szorongás / Krízisállapot vagy Hallucinációk / Téveszmék. Módosító: Biztonsági kockázat.",
      "condition": [
        {
          "mezo": "mentalisSzorongasHallucinacio",
          "egyenlo": "biztonsagi_kockazat"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 303
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "szorongas-krizishelyzet",
        "hallucinaciok-teveszmek"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_52",
      "name": "Közepes fokú szorongás / agitáció vagy paranoia → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Szorongás / Krízisállapot vagy Hallucinációk / Téveszmék. Módosító: Közepes fokú szorongás / agitáció vagy paranoia.",
      "condition": [
        {
          "mezo": "mentalisSzorongasHallucinacio",
          "egyenlo": "kozepes_szorongas_agitacio_vagy_paranoia"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 303
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "szorongas-krizishelyzet",
        "hallucinaciok-teveszmek"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_53",
      "name": "Enyhe szorongás, stabil → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Szorongás / Krízisállapot vagy Hallucinációk / Téveszmék. Módosító: Enyhe szorongás, stabil.",
      "condition": [
        {
          "mezo": "mentalisSzorongasHallucinacio",
          "egyenlo": "enyhe_szorongas_stabil"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 303
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "szorongas-krizishelyzet",
        "hallucinaciok-teveszmek"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_54",
      "name": "Enyhe szorongás / agitáció, krónikus hallucináció → MSTR 5",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Szorongás / Krízisállapot vagy Hallucinációk / Téveszmék. Módosító: Enyhe szorongás / agitáció, krónikus hallucináció.",
      "condition": [
        {
          "mezo": "mentalisSzorongasHallucinacio",
          "egyenlo": "enyhe_szorongas_kronikus_hallucinacio"
        }
      ],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 303
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "A 2022-es jegyzet a Szorongás/Krízis és a Hallucináció/Téveszme panaszokat közös táblázatban kezeli (p303). A tankönyv (2016) külön kezeli: Szorongás/Krízis táblázata csak: súlyos szorongás/agitáció=2, biztonsági kockázat=2, közepes szorongás/agitáció=3, enyhe szorongás/agitáció=4 (nincs akut pszichózis / krónikus hallucináció sor); a Hallucináció/Téveszme táblázata megegyezik a jegyzetével.",
      "conflicts": [
        {
          "doc": "tankonyv",
          "page": 82,
          "leiras": "Szorongás/Krízis és Hallucináció/Téveszme külön táblázatban; a Szorongás/Krízis panaszhoz nem tartozik akut pszichózis, paranoia vagy krónikus hallucináció sor."
        }
      ],
      "csakPanaszok": [
        "szorongas-krizishelyzet",
        "hallucinaciok-teveszmek"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_55",
      "name": "Álmatlanság: akut → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Álmatlanság. Módosító: akut.",
      "condition": [
        {
          "mezo": "mentalisAlmatlansag",
          "egyenlo": "akut"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 304
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "almatlansag"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_56",
      "name": "Álmatlanság: krónikus → MSTR 5",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Álmatlanság. Módosító: krónikus.",
      "condition": [
        {
          "mezo": "mentalisAlmatlansag",
          "egyenlo": "kronikus"
        }
      ],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 304
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "almatlansag"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_57",
      "name": "Erőszakos/közveszélyes magatartás: ön- és közveszélyes (veszélyeztető állapot) → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Erőszakos / Közveszélyes magatartás. Módosító: ön- és közveszélyes, veszélyeztető állapot.",
      "condition": [
        {
          "mezo": "mentalisEroszakos",
          "egyenlo": "on_es_kozveszelyes"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 304
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "Az erőszakos/veszélyeztető magatartás jó példa arra, hogy az MSTR szint biztonsággal nem állapítható meg csak az elsődleges módosítókkal (jegyzet 286).",
      "conflicts": [],
      "csakPanaszok": [
        "eroszakos-kozveszelyes-viselkedes"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_58",
      "name": "Erőszakos/közveszélyes magatartás: biztonsági kockázat → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Erőszakos / Közveszélyes magatartás. Módosító: biztonsági kockázat.",
      "condition": [
        {
          "mezo": "mentalisEroszakos",
          "egyenlo": "biztonsagi_kockazat"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 304
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "eroszakos-kozveszelyes-viselkedes"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_59",
      "name": "Erőszakos/közveszélyes magatartás: pontos terv nélkül → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Erőszakos / Közveszélyes magatartás. Módosító: erőszakos/közveszélyes, pontos terv nélkül.",
      "condition": [
        {
          "mezo": "mentalisEroszakos",
          "egyenlo": "terv_nelkul"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 304
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "eroszakos-kozveszelyes-viselkedes"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_60",
      "name": "Szociális problémák: fizikai/mentális erőszak, nagy fokú érzelmi stressz → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Szociális problémák. Módosító: fizikai, mentális erőszak, nagy fokú érzelmi stressz.",
      "condition": [
        {
          "mezo": "mentalisSzocialis",
          "egyenlo": "eroszak_stressz"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 304
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "szocialis-problemak",
        "a-beteg-szocialis-helyzetebol-adodo-panasz"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_61",
      "name": "Szociális problémák: együttműködésre képtelen → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Szociális problémák. Módosító: együttműködésre képtelen.",
      "condition": [
        {
          "mezo": "mentalisSzocialis",
          "egyenlo": "egyuttmukodesre_keptelen"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 304
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "szocialis-problemak",
        "a-beteg-szocialis-helyzetebol-adodo-panasz"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_62",
      "name": "Szociális problémák: krónikus, nem sürgős állapot → MSTR 5",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Szociális problémák. Módosító: krónikus, nem sürgős állapot.",
      "condition": [
        {
          "mezo": "mentalisSzocialis",
          "egyenlo": "kronikus_nem_surgos"
        }
      ],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 304
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "szocialis-problemak",
        "a-beteg-szocialis-helyzetebol-adodo-panasz"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_63",
      "name": "Furcsa viselkedés: nem kontrollált → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Furcsa viselkedés. Módosító: nem kontrollált (ellenőrizetlen) viselkedés.",
      "condition": [
        {
          "mezo": "mentalisFurcsaViselkedes",
          "egyenlo": "nem_kontrollalt"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 305
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "furcsa-viselkedes"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_64",
      "name": "Furcsa viselkedés: biztonsági kockázat → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Furcsa viselkedés. Módosító: biztonsági kockázat.",
      "condition": [
        {
          "mezo": "mentalisFurcsaViselkedes",
          "egyenlo": "biztonsagi_kockazat"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 305
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "furcsa-viselkedes"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_65",
      "name": "Furcsa viselkedés: kontrollált → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Furcsa viselkedés. Módosító: kontrollált (ellenőrzött) viselkedés.",
      "condition": [
        {
          "mezo": "mentalisFurcsaViselkedes",
          "egyenlo": "kontrollalt"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 305
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "furcsa-viselkedes"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_66",
      "name": "Furcsa viselkedés: ártalmatlan → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Furcsa viselkedés. Módosító: ártalmatlan viselkedés.",
      "condition": [
        {
          "mezo": "mentalisFurcsaViselkedes",
          "egyenlo": "artalmatlan"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 305
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "furcsa-viselkedes"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_67",
      "name": "Furcsa viselkedés: krónikus, nem sürgős → MSTR 5",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Furcsa viselkedés. Módosító: krónikus, nem sürgős állapot.",
      "condition": [
        {
          "mezo": "mentalisFurcsaViselkedes",
          "egyenlo": "kronikus_nem_surgos"
        }
      ],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 305
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "furcsa-viselkedes"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_68",
      "name": "Betegjóléti szempontok: konfliktus vagy instabil helyzet → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Betegjóléti szempontok. Módosító: konfliktus vagy instabil helyzet.",
      "condition": [
        {
          "mezo": "betegjoletiSzempontok",
          "egyenlo": "konfliktus_instabil"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 306
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "A betegjóléti szempontok panaszhoz tartozik a nemi erőszak, az idősekkel kapcsolatos visszaélés/elhanyagolás és a pszichés bántalmazás (tankönyv 80).",
      "conflicts": [],
      "csakPanaszok": [
        "szocialis-problemak",
        "a-beteg-szocialis-helyzetebol-adodo-panasz"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_69",
      "name": "Betegjóléti szempontok: biztonsági kockázat vagy folyamatban lévő visszaélés → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Betegjóléti szempontok. Módosító: biztonsági kockázat vagy folyamatban lévő visszaélés.",
      "condition": [
        {
          "mezo": "betegjoletiSzempontok",
          "egyenlo": "biztonsagi_kockazat_folyamatos_visszaeles"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 306
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "szocialis-problemak",
        "a-beteg-szocialis-helyzetebol-adodo-panasz"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_70",
      "name": "Betegjóléti szempontok: valószínűsíthető testi vagy nemi erőszak → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Betegjóléti szempontok. Módosító: valószínűsíthető testi vagy nemi erőszak.",
      "condition": [
        {
          "mezo": "betegjoletiSzempontok",
          "egyenlo": "valoszinu_testi_nemi_eroszak"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 306
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "szocialis-problemak",
        "a-beteg-szocialis-helyzetebol-adodo-panasz"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_71",
      "name": "Betegjóléti szempontok: bántalmazás/visszaélés jelei vagy története → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Vezető panasz: Betegjóléti szempontok. Módosító: bántalmazás, visszaélés jelei vagy története.",
      "condition": [
        {
          "mezo": "betegjoletiSzempontok",
          "egyenlo": "bantalmazas_jelei_tortenete"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 306
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "A jegyzet 307. oldalán egy eltérő betegjóléti táblázat is szerepel: konfliktus/instabil=1, elkóborlás/folyamatos abúzus=2, gyanított szexuális vagy verbális visszaélés=3, káros anyag használat vagy elhanyagolás az előzményben=4.",
      "conflicts": [
        {
          "doc": "jegyzet",
          "page": 307,
          "leiras": "Eltérő betegjóléti táblázat: 2=elkóborlás/folyamatos abúzus; 3=gyanított szexuális/verbális visszaélés; 4=káros anyag használat/elhanyagolás az előzményben."
        }
      ],
      "csakPanaszok": [
        "szocialis-problemak",
        "a-beteg-szocialis-helyzetebol-adodo-panasz"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_72",
      "name": "Gyermek aggasztó viselkedése: valószínű biztonsági kockázat / családi nehézségek → MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "Vezető panasz: A gyermek aggasztó viselkedése / gyermekgyógyászati viselkedészavar. Módosító: valószínű biztonsági kockázat / családi nehézségek (konfliktus vagy instabil helyzet családi okok miatt).",
      "condition": [
        {
          "mezo": "gyermekViselkedeszavar",
          "egyenlo": "biztonsagi_kockazat_csaladi"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 306
        },
        {
          "doc": "jegyzet",
          "page": 307
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "id": "masodlagos_73",
      "name": "Gyermek aggasztó viselkedése: akut viselkedészavar / környezeti zavar → MSTR 3",
      "applies_to": "gyermek",
      "condition_text": "Vezető panasz: A gyermek aggasztó viselkedése / viselkedészavar. Módosító: akut viselkedészavar / környezettel kapcsolatos zavar.",
      "condition": [
        {
          "mezo": "gyermekViselkedeszavar",
          "egyenlo": "akut_kornyezeti"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 306
        },
        {
          "doc": "jegyzet",
          "page": 307
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "id": "masodlagos_74",
      "name": "Gyermek aggasztó viselkedése: tartós problematikus viselkedés → MSTR 4",
      "applies_to": "gyermek",
      "condition_text": "Vezető panasz: A gyermek aggasztó viselkedése / viselkedészavar. Módosító: tartós problematikus viselkedés ('problémás gyermek').",
      "condition": [
        {
          "mezo": "gyermekViselkedeszavar",
          "egyenlo": "tartos_problematikus"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 306
        },
        {
          "doc": "jegyzet",
          "page": 307
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "id": "masodlagos_75",
      "name": "Gyermek aggasztó viselkedése: krónikus, változatlan viselkedés → MSTR 5",
      "applies_to": "gyermek",
      "condition_text": "Vezető panasz: A gyermek aggasztó viselkedése / viselkedészavar. Módosító: krónikus, változatlan viselkedés/magatartászavar.",
      "condition": [
        {
          "mezo": "gyermekViselkedeszavar",
          "egyenlo": "kronikus_valtozatlan"
        }
      ],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 306
        },
        {
          "doc": "jegyzet",
          "page": 307
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "A gyermekgyógyászati viselkedészavar kivételével a mentális egészséggel kapcsolatos valamennyi vezető panasz minden korosztályra alkalmazható (tankönyv 80).",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "id": "masodlagos_76",
      "name": "Nemi erőszak áldozata: ≤ 2 óra → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Erőszakos nemi közösülés / nemi erőszak áldozata, az érkezés ideje ≤ 2 óra (feltéve, hogy egyéb sérülés vagy MSTR 1-re emelő tényező kizárható, a vitális paraméterek kielégítőek és a fájdalom enyhe).",
      "condition": [
        {
          "mezo": "nemiEroszakIdo",
          "egyenlo": "max_2ora"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 291
        }
      ],
      "notes": "Az időbeosztás a bizonyíték- és mintavételi csomag megbízható használatához szükséges.",
      "conflicts": [],
      "csakPanaszok": [
        "nemi-eroszak"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_77",
      "name": "Nemi erőszak áldozata: > 2 óra és < 12 óra → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Erőszakos nemi közösülés / nemi erőszak áldozata, az érkezés ideje > 2 óra és < 12 óra.",
      "condition": [
        {
          "mezo": "nemiEroszakIdo",
          "egyenlo": "ket_tizenketto_ora"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 291
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "nemi-eroszak"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_78",
      "name": "Nemi erőszak áldozata: ≥ 12 óra, nincs sérülés → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Erőszakos nemi közösülés / nemi erőszak áldozata, az érkezés ideje ≥ 12 óra, nincs sérülés (stabil beteg).",
      "condition": [
        {
          "mezo": "nemiEroszakIdo",
          "egyenlo": "tizenketto_ora_felett"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 291
        }
      ],
      "notes": "A jegyzet 326. oldalán ugyanez az időalapú szintezés szerepel, de a szövegben '>2 óra = 2. szint; 2-12 óra = 3; >12 óra = 4' formában (a '≤2 óra=2' helyett '>2 óra=2' – valószínűleg elírás/OCR-hiba). A 291. oldali táblázatot (≤2 óra=2) tekintjük mérvadónak.",
      "conflicts": [
        {
          "doc": "jegyzet",
          "page": 326,
          "leiras": "A szöveg '>2 óra = 2. szint'-et ír; ez ellentmond a 291. oldali '≤2 óra = MSTR 2' táblázatnak. Valószínű elírás."
        }
      ],
      "csakPanaszok": [
        "nemi-eroszak"
      ],
      "group": "secondary"
    },
    {
      "id": "masodlagos_83",
      "name": "Necrotizáló fasciitis / perineális panasz: látható bőrelfeketedés → min. MSTR 2",
      "applies_to": "mind",
      "condition_text": "Perineális panasznál vagy necrotizáló fasciitis (Fournier-kór) gyanújánál: ha a fekete/elfeketedett bőrterület megfigyelhető, a beteg legalább MSTR 2. szintre triázsolandó (a 'láz vagy immunszupprimált' módosítóval). A súlyos fájdalom akut, centrális fájdalomnak minősítendő akkor is, ha a beteg 7 pont vagy kevesebbre értékeli. Orvosi ellátásnak 15 percen belül meg kell kezdődnie: stabil betegnél is 1 óra várakozás a gyulladt felület 5-6(-8)-szoros növekedéséhez vezethet.",
      "condition": [
        {
          "mezo": "necrotizaloFasciitisBoreflektedes",
          "egyenlo": "igen"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 309
        },
        {
          "doc": "tankonyv",
          "page": 83
        }
      ],
      "notes": "A fekete bőrterület megfigyelhetősége esetén MINIMUM MSTR 2 (feltriázsolás lehetséges). Ha a terület nem látható, a triázs nagy rizikót hordoz.",
      "conflicts": [],
      "csakPanaszok": [
        "vegbel-vegbel-kornyeki-fajdalom",
        "herefajdalom-vagy-duzzanat"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_horzsolas",
      "name": "Horzsolás → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Horzsolás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 158
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Abrasion modifier table (DIA 158): 3|PSP, 4|PSP, 5|Minor abrasion",
      "conflicts": [],
      "csakPanaszok": [
        "horzsolas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_harapas",
      "name": "Harapás → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Harapás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 156
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Bite modifier table (DIA 156): 5|Minor bite",
      "conflicts": [],
      "csakPanaszok": [
        "harapas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_erintkezes_verrel_vagy_testvaladekokkal",
      "name": "Érintkezés vérrel vagy testváladékokkal → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Érintkezés vérrel vagy testváladékokkal« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 161
        },
        {
          "doc": "jegyzet",
          "page": 288
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Blood and body fluid exposure (DIA 161) — legenyhébb sor: 3|Low risk exposure; jegyzet o.288",
      "conflicts": [],
      "csakPanaszok": [
        "erintkezes-verrel-vagy-testvaladekokkal"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_eges",
      "name": "Égés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Égés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 160
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Burn modifier table (DIA 160): 5|Burn mild pain",
      "conflicts": [],
      "csakPanaszok": [
        "eges"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_idegen_test_a_borben",
      "name": "Idegen test a bőrben → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Idegen test a bőrben« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 172
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Foreign body, skin (DIA 172): 3|VS,PSP, 4|VS,PSP, 5|Foreign body skin",
      "conflicts": [],
      "csakPanaszok": [
        "idegen-test-a-borben"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_tepett_szurt_seb",
      "name": "Tépett / szúrt seb → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Tépett / szúrt seb« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 159
        },
        {
          "doc": "jegyzet",
          "page": 290
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Laceration/Puncture (DIA 159): 5|No sutures required; jegyzet o.290",
      "conflicts": [],
      "csakPanaszok": [
        "tepett-szurt-seb"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_lokalizalt_duzzanat_borpir",
      "name": "Lokalizált duzzanat / bőrpír → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Lokalizált duzzanat / bőrpír« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 164
        },
        {
          "doc": "jegyzet",
          "page": 281
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Localized swelling/redness (DIA 164): 5|Localized; jegyzet o.281 (lokalizált bőrpír = MSTR 5)",
      "conflicts": [],
      "csakPanaszok": [
        "lokalizalt-duzzanat-borpir"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_duzzanat_daganat_borkemenyedes",
      "name": "Duzzanat, daganat, bőrkeményedés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Duzzanat, daganat, bőrkeményedés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 167
        },
        {
          "doc": "jegyzet",
          "page": 281
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Lumps, bumps, calluses (DIA 167): 5|Lumps, bumps calluses; jegyzet o.281",
      "conflicts": [],
      "csakPanaszok": [
        "duzzanat-daganat-borkemenyedes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_egyeb_bor_tunetek",
      "name": "Egyéb bőr tünetek → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Egyéb bőr tünetek« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 166
        },
        {
          "doc": "jegyzet",
          "page": 281
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Other skin conditions (DIA 166): 5|Other skin conditions; jegyzet o.281",
      "conflicts": [],
      "csakPanaszok": [
        "egyeb-bor-tunetek"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_viszketes",
      "name": "Viszketés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Viszketés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 162
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Pruritis modifier table (DIA 162): 3|PSP, 4|PSP, 5|Pruritis",
      "conflicts": [],
      "csakPanaszok": [
        "viszketes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_kiutes",
      "name": "Kiütés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Kiütés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 163
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Rash modifier table (DIA 163): 5|Localized rash",
      "conflicts": [],
      "csakPanaszok": [
        "kiutes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_a_mellbimbo_kipirosodasa_es_erzekenysege",
      "name": "A mellbimbó kipirosodása és érzékenysége → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »A mellbimbó kipirosodása és érzékenysége« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 168
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Redness/tenderness, breast (DIA 168): 5|Redness/tenderness, breast",
      "conflicts": [],
      "csakPanaszok": [
        "a-mellbimbo-kipirosodasa-es-erzekenysege"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_kapocs_es_varratszedes",
      "name": "Kapocs- és varratszedés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Kapocs- és varratszedés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 173
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Removal staples/sutures (DIA 173): 5|Removal of staples/sutures",
      "conflicts": [],
      "csakPanaszok": [
        "kapocs-es-varratszedes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_fertozes_kizarasa",
      "name": "Fertőzés kizárása → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Fertőzés kizárása« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 169
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Rule out infestation (DIA 169): 3|PSP, 4|PSP, 5|Rule out infestation",
      "conflicts": [],
      "csakPanaszok": [
        "fertozes-kizarasa"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_spontan_beverzesek",
      "name": "Spontán bevérzések → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Spontán bevérzések« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 171
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Spontaneous bruising (DIA 171): 1|VS, 2|VS,BD, 3|Spontaneous bruising — legenyhébb 3",
      "conflicts": [],
      "csakPanaszok": [
        "spontan-beverzesek"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_csipes",
      "name": "Csípés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Csípés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 157
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Sting modifier table (DIA 157): 5|Sting",
      "conflicts": [],
      "csakPanaszok": [
        "csipes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_sebellenorzes",
      "name": "Sebellenőrzés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Sebellenőrzés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 165
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Wound check modifier table (DIA 165): 3|VS,PSP, 4|VS,PSP, 5|Wound check",
      "conflicts": [],
      "csakPanaszok": [
        "sebellenorzes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_hasi_terime_feszules",
      "name": "Hasi terime / feszülés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hasi terime / feszülés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 82
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Abdominal mass / distention (DIA 82) legenyhébb sora: '5 | Chronic abdominal mass/distention, looks well'",
      "conflicts": [],
      "csakPanaszok": [
        "hasi-terime-feszules"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_hasi_fajdalom",
      "name": "Hasi fájdalom → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hasi fájdalom« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 70
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Abdominal pain (DIA 70) legenyhébb sora '5 | Chronic mild abdominal pain'",
      "conflicts": [],
      "csakPanaszok": [
        "hasi-fajdalom"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_vegbelserules",
      "name": "Végbélsérülés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Végbélsérülés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 83
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Anal / Rectal trauma (DIA 83) legenyhébb sora '5 | Anal/rectal trauma'",
      "conflicts": [],
      "csakPanaszok": [
        "vegbelserules"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_anorexia",
      "name": "Anorexia → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Anorexia« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 71
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Anorexia (DIA 71) legenyhébb sora '4 | Anorexia, looks well'",
      "conflicts": [],
      "csakPanaszok": [
        "anorexia"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_veres_szeklet_melena",
      "name": "Véres széklet / melena → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Véres széklet / melena« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 79
        },
        {
          "doc": "jegyzet",
          "page": 289
        },
        {
          "doc": "tankonyv",
          "page": 78
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: tankonyv o.78 ('Véres széklet/meléna, kis mennyiségű vérzés a végbélből' = MSTR 4); jegyzet o.289; ctas DIA 79 legenyhébb sora '4 | Rectal bleeding small amount'",
      "conflicts": [],
      "csakPanaszok": [
        "veres-szeklet-melena"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_szekrekedes",
      "name": "Székrekedés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Székrekedés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 72
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Constipation (DIA 72) legenyhébb sora '5 | Simple constipation'",
      "conflicts": [],
      "csakPanaszok": [
        "szekrekedes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_hasmenes",
      "name": "Hasmenés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hasmenés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 73
        },
        {
          "doc": "tankonyv",
          "page": 27
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: tankonyv o.27 ('Hasmenés, enyhe, nincs jelentős folyadékvesztés/kiszáradás' = MSTR 5); ctas DIA 73 '5 | Chronic diarrhea, normal VS'",
      "conflicts": [],
      "csakPanaszok": [
        "hasmenes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_taplalasi_nehezsegek_ujszulotteknel",
      "name": "Táplálási nehézségek újszülötteknél → MSTR 2 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Táplálási nehézségek újszülötteknél« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 2. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 2,
      "source": [
        {
          "doc": "ctas",
          "page": 285
        },
        {
          "doc": "tankonyv",
          "page": 59
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas Paediatric COT: Feeding difficulties in newborn (DIA 285) '2 | Feeding difficulties in newborn'; tankonyv o.59 (nem szülőszobán született újszülött automatikusan MSTR 2, csak felfelé triázsolható",
      "conflicts": [],
      "csakPanaszok": [
        "taplalasi-nehezsegek-ujszulotteknel"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_idegen_test_a_vegbelben",
      "name": "Idegen test a végbélben → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Idegen test a végbélben« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 74
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Foreign body in rectum (DIA 74) legenyhébb sora '5 | Foreign body in rectum'",
      "conflicts": [],
      "csakPanaszok": [
        "idegen-test-a-vegbelben"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_lagyeki_fajdalom_terime",
      "name": "Lágyéki fájdalom / terime → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Lágyéki fájdalom / terime« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 75
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Groin pain / mass (DIA 75) legenyhébb sora '5 | Groin pain / mass'",
      "conflicts": [],
      "csakPanaszok": [
        "lagyeki-fajdalom-terime"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_csuklas",
      "name": "Csuklás → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Csuklás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 81
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Hiccoughs (DIA 81) legenyhébb sora '5 | Hiccoughs, chronic no distress'",
      "conflicts": [],
      "csakPanaszok": [
        "csuklas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_sargasag",
      "name": "Sárgaság → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Sárgaság« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 80
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Jaundice (DIA 80) legenyhébb sora '5 | Jaundice, looks well'",
      "conflicts": [],
      "csakPanaszok": [
        "sargasag"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_neonatalis_sargasag",
      "name": "Neonatális sárgaság → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Neonatális sárgaság« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 286
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas Paediatric COT: Neonatal jaundice (DIA 286) legenyhébb sora '3 | Infant > 7 days of age'",
      "conflicts": [],
      "csakPanaszok": [
        "neonatalis-sargasag"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_nyelocsovi_szajuregi_idegen_test",
      "name": "Nyelőcsövi / szájüregi idegen test → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Nyelőcsövi / szájüregi idegen test« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 84
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Oral / Esophageal Foreign Body (DIA 84) legenyhébb sora '4 | No swallowing or respiratory difficulty'",
      "conflicts": [],
      "csakPanaszok": [
        "nyelocsovi-szajuregi-idegen-test"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_vegbel_vegbel_kornyeki_fajdalom",
      "name": "Végbél / végbél környéki fájdalom → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Végbél / végbél környéki fájdalom« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 77
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Rectal / Perineal pain (DIA 77) legenyhébb sora '5 | Chronic mild rectal/perineal pain'",
      "conflicts": [],
      "csakPanaszok": [
        "vegbel-vegbel-kornyeki-fajdalom"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_hanyas_hanyinger",
      "name": "Hányás / hányinger → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hányás / hányinger« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 76
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Vomiting and/or nausea (DIA 76) legenyhébb sora '5 | Chronic vomiting and/or nausea, normal VS'",
      "conflicts": [],
      "csakPanaszok": [
        "hanyas-hanyinger"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_verhanyas",
      "name": "Vérhányás → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Vérhányás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 78
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Vomiting blood (DIA 78) legenyhébb sora '3 | Small amount, normal vital signs'",
      "conflicts": [],
      "csakPanaszok": [
        "verhanyas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_abnormal_labor_eredmenyek",
      "name": "Abnormál labor eredmények → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Abnormál labor eredmények« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 193
        },
        {
          "doc": "tankonyv",
          "page": 89
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA193 (Abnormal lab values): '5 | Normal VS, non critical value'; tankonyv o.89 (panaszlista)",
      "conflicts": [],
      "csakPanaszok": [
        "abnormal-labor-eredmenyek"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_veleszuletett_rendellenesseg_gyermekeknel",
      "name": "Veleszületett rendellenesség gyermekeknél → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Veleszületett rendellenesség gyermekeknél« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 397
        },
        {
          "doc": "tankonyv",
          "page": 53
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA397 (Congenital problem in children, Paediatric COT): '4 | Stable child with congenital disease with potential for problems'; tankonyv o.53 (veleszületett rendellenesség mint speciális gyermek",
      "conflicts": [],
      "csakPanaszok": [
        "veleszuletett-rendellenesseg-gyermekeknel"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_konzultacio",
      "name": "Konzultáció → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Konzultáció« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 187
        },
        {
          "doc": "jegyzet",
          "page": 124
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA187 (Direct referral for consultation): '5 | Direct referral for consultation'; jegyzet o.124 (Konzultáció mint MSTR 5 CEDIS-panasz)",
      "conflicts": [],
      "csakPanaszok": [
        "konzultacio"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_laz",
      "name": "Láz → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Láz« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 184
        },
        {
          "doc": "tankonyv",
          "page": 35
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA184 (Fever): '4 | Fever'; tankonyv o.35 (Láz >38C tábla: jó általános állapot, láz az egyetlen SIRS-kritérium → MSTR4)",
      "conflicts": [],
      "csakPanaszok": [
        "laz"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_hyperglycemia",
      "name": "Hyperglycemia → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hyperglycemia« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 185
        },
        {
          "doc": "tankonyv",
          "page": 44
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA185 (Hyperglycemia): '3 | >18 mmol/L not symptomatic'; tankonyv o.44 (vércukor-tábla: >18 mmol/l tünet nélkül → 3)",
      "conflicts": [],
      "csakPanaszok": [
        "hyperglycemia"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_hypoglycemia",
      "name": "Hypoglycemia → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hypoglycemia« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 186
        },
        {
          "doc": "tankonyv",
          "page": 44
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA186 (Hypoglycemia): '3 | <3 mmol/L not symptomatic'; tankonyv o.44 (vércukor-tábla: <3 mmol/l tünet nélkül → 3)",
      "conflicts": [],
      "csakPanaszok": [
        "hypoglycemia"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_vigasztalhatatlanul_siro_csecsemo",
      "name": "Vigasztalhatatlanul síró csecsemő → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Vigasztalhatatlanul síró csecsemő« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 396
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA396 (Inconsolable crying in infants, Paediatric COT): '4 | Irritable but consolable' a legenyhébb sor; maga a 'vigasztalhatatlan, stabil VS' → 3",
      "conflicts": [],
      "csakPanaszok": [
        "vigasztalhatatlanul-siro-csecsemo"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_orvosi_berendezes_es_eszkozhiba",
      "name": "Orvosi berendezés- és eszközhiba → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Orvosi berendezés- és eszközhiba« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 190
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA190 (Medical device problem): '4 | Medical device problem; asymptomatic or no distress' a legenyhébb sor",
      "conflicts": [],
      "csakPanaszok": [
        "orvosi-berendezes-es-eszkozhiba"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_minor_panaszok",
      "name": "Minor panaszok → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Minor panaszok« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 198
        },
        {
          "doc": "ctas",
          "page": 398
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA198/DIA398 (Minor complaints NOS): '5 | Minor complaints, unspecified'",
      "conflicts": [],
      "csakPanaszok": [
        "minor-panaszok"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_sapadtsag_anemia",
      "name": "Sápadtság / anémia → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Sápadtság / anémia« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 195
        },
        {
          "doc": "tankonyv",
          "page": 33
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA195 (Pallor / Anemia): '4 | Pallor / Anemia' a legenyhébb sor (normál VS); tankonyv o.33 (hemodinamikai módosítótábla)",
      "conflicts": [],
      "csakPanaszok": [
        "sapadtsag-anemia"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_posztoperativ_szovodmenyek",
      "name": "Posztoperatív szövődmények → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Posztoperatív szövődmények« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 194
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA194 (Post-operative complications): '4 | Normal VS, no pain, routine check' a legenyhébb sor",
      "conflicts": [],
      "csakPanaszok": [
        "posztoperativ-szovodmenyek"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_gyuru_eltavolitas",
      "name": "Gyűrű eltávolítás → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Gyűrű eltávolítás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 192
        },
        {
          "doc": "tankonyv",
          "page": 89
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA192 (Ring removal): '5 | Ring removal'; tankonyv o.89 (panaszlista)",
      "conflicts": [],
      "csakPanaszok": [
        "gyuru-eltavolitas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_ketoldali_lab_duzzanat_odema",
      "name": "Kétoldali láb duzzanat / ödéma → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Kétoldali láb duzzanat / ödéma« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 43
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 43 (Bilateral leg swelling / Edema): '5 | Edema/bilateral leg swelling, chronic'",
      "conflicts": [],
      "csakPanaszok": [
        "ketoldali-lab-duzzanat-odema"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_mellkasi_fajdalom_nem_sziv_eredetu",
      "name": "Mellkasi fájdalom (nem szív eredetű) → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Mellkasi fájdalom (nem szív eredetű)« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 37
        },
        {
          "doc": "jegyzet",
          "page": 96
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 37 ('5 | Chest pain, non cardiac' – a módosítótábla legenyhébb sora). Megj.: a magyar jegyzet o.96 az akut, stabil, <8/10 esetet MSTR 3-nak veszi.",
      "conflicts": [],
      "csakPanaszok": [
        "mellkasi-fajdalom-nem-sziv-eredetu"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_generalizalt_odema",
      "name": "Generalizált ödéma → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Generalizált ödéma« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 42
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 42 ('4 | Edema, generalized, normal vitals')",
      "conflicts": [],
      "csakPanaszok": [
        "generalizalt-odema"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_altalanos_gyengeseg",
      "name": "Általános gyengeség → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Általános gyengeség« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 40
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 40 ('4 | Chronic weakness', '4 | Potential for dehydration')",
      "conflicts": [],
      "csakPanaszok": [
        "altalanos-gyengeseg"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_hipertenzio",
      "name": "Hipertenzió → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hipertenzió« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 39
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 39 ('4 | HTN (SBP 200-220 and DBP 110-130) with no symptoms')",
      "conflicts": [],
      "csakPanaszok": [
        "hipertenzio"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_szivdobogas_erzes_rendszertelen_szivdobbanasok",
      "name": "Szívdobogás érzés / rendszertelen szívdobbanások → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Szívdobogás érzés / rendszertelen szívdobbanások« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 38
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 38 ('4 | History of palpitations, presently resolved')",
      "conflicts": [],
      "csakPanaszok": [
        "szivdobogas-erzes-rendszertelen-szivdobbanasok"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_ajulas_ajulaskozeli_allapot",
      "name": "Ájulás / ájulásközeli állapot → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Ájulás / ájulásközeli állapot« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 41
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 41 ('4 | Normal vitals, symptoms resolved')",
      "conflicts": [],
      "csakPanaszok": [
        "ajulas-ajulaskozeli-allapot"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_egyoldali_voros_es_forro_vegtag",
      "name": "Egyoldali vörös és forró végtag → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Egyoldali vörös és forró végtag« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 45
        },
        {
          "doc": "tankonyv",
          "page": 78
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 45 ('4 | Localized inflammation'); tankonyv o.78 (4. szint: Egyoldali vörös, forró végtag – lokalizált gyulladás)",
      "conflicts": [],
      "csakPanaszok": [
        "egyoldali-voros-es-forro-vegtag"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_modosult_tudatallapot",
      "name": "Módosult tudatállapot → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Módosult tudatállapot« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 106
        },
        {
          "doc": "tankonyv",
          "page": 34
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: COT-2008 DIA 106 (Altered level of consciousness) legenyhébb sor '3 | VS'; tankonyv o.34 GCS-tábla (14-15 = 3. szint)",
      "conflicts": [],
      "csakPanaszok": [
        "modosult-tudatallapot"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_zavartsag",
      "name": "Zavartság → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Zavartság« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 107
        },
        {
          "doc": "jegyzet",
          "page": 56
        },
        {
          "doc": "tankonyv",
          "page": 27
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: COT-2008 DIA 107 (Confusion) legenyhébb sor '4 | chronic, no change from usual state'; tankonyv o.27 (időskori demenciához társuló, változatlan zavartság = 4); jegyzet o.56",
      "conflicts": [],
      "csakPanaszok": [
        "zavartsag"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_vegtaggyengeseg_cva_tunetek",
      "name": "Végtaggyengeség / CVA tünetek → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Végtaggyengeség / CVA tünetek« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 114
        },
        {
          "doc": "tankonyv",
          "page": 47
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: COT-2008 DIA 114 (Extremity weakness / Symptoms of CVA) legenyhébb sor '3 | >3 hours or resolved'; tankonyv o.47 (>4,5 óra vagy megszűnt tünetek = 3)",
      "conflicts": [],
      "csakPanaszok": [
        "vegtaggyengeseg-cva-tunetek"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_tartas_nelkuli_gyermek",
      "name": "Tartás nélküli gyermek → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Tartás nélküli gyermek« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 316
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: COT-2008 DIA 316 (Floppy child, gyermek COT) legenyhébb sor '3 | Limited/less than expected muscle tone'",
      "conflicts": [],
      "csakPanaszok": [
        "tartas-nelkuli-gyermek"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_jaraszavar_ataxia",
      "name": "Járászavar / ataxia → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Járászavar / ataxia« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 111
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: COT-2008 DIA 111 (Gait disturbance / Ataxia) legenyhébb sor '4 | VS'",
      "conflicts": [],
      "csakPanaszok": [
        "jaraszavar-ataxia"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_fejserules",
      "name": "Fejsérülés → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Fejsérülés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 112
        },
        {
          "doc": "tankonyv",
          "page": 52
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: COT-2008 DIA 112 (Head injury) legenyhébb sor '4 | No history of LOC'; tankonyv o.52 ('kisebb fejsérülés, eszméletvesztés nélkül' = 4. szint)",
      "conflicts": [],
      "csakPanaszok": [
        "fejserules"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_fejfajas",
      "name": "Fejfájás → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Fejfájás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 109
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: COT-2008 DIA 109 (Headache) legenyhébb sor '5 | Chronic or recurring headache'",
      "conflicts": [],
      "csakPanaszok": [
        "fejfajas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_gorcsroham",
      "name": "Görcsroham → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Görcsroham« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 110
        },
        {
          "doc": "jegyzet",
          "page": 286
        },
        {
          "doc": "tankonyv",
          "page": 52
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: COT-2008 DIA 110 (Seizure) legenyhébb sor '3 | Resolved, normal level of alertness'; jegyzet o.286 (MSTR 3 – normális tudatállapot); tankonyv o.52 (prehospitálisan feltisztult = 3)",
      "conflicts": [],
      "csakPanaszok": [
        "gorcsroham"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_erzeskieses_paraesthezia",
      "name": "Érzéskiesés / paraesthézia → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Érzéskiesés / paraesthézia« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 115
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: COT-2008 DIA 115 (Sensory loss / Parasthesias) legenyhébb sor '4 | Chronic sensory loss/paresthesias'",
      "conflicts": [],
      "csakPanaszok": [
        "erzeskieses-paraesthezia"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_remeges",
      "name": "Remegés → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Remegés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 113
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: COT-2008 DIA 113 (Tremor) legenyhébb sor '4 | Chronic tremor'",
      "conflicts": [],
      "csakPanaszok": [
        "remeges"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_szedules",
      "name": "Szédülés → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Szédülés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet. KIVÉTEL: krónikus szédülésnél (jegyzet o.288) a forrás MSTR 4-et ad — ez a feltétel-tömb ezért NEM tüzel 'kronikus' válasz esetén, hogy a deesc_szedules_kronikus szabály (2026-07-21, kollégák pilot-tesztje alapján) helyesen érvényesülhessen a min-logika ellenére.",
      "condition": [
        {
          "mezo": "szedulesTipus",
          "nemEgyenlo": "kronikus"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 108
        },
        {
          "doc": "jegyzet",
          "page": 288
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: COT-2008 DIA 108 (Vertigo) legenyhébb sor '3 | positional, no other neuro symptoms'; jegyzet o.288 (krónikus állapotnál MSTR 4)",
      "conflicts": [],
      "csakPanaszok": [
        "szedules"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_derektaji_fajdalom",
      "name": "Deréktáji fájdalom → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Deréktáji fájdalom« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 87
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Flank pain (DIA 87) legenyhébb sor: 'Chronic mild flank pain' = 5",
      "conflicts": [],
      "csakPanaszok": [
        "derektaji-fajdalom"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_genitalis_elvaltozasok",
      "name": "Genitális elváltozások → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Genitális elváltozások« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 89
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Genital discharge / lesion (DIA 89) legenyhébb sor: 'Genital discharge / lesion' = 5",
      "conflicts": [],
      "csakPanaszok": [
        "genitalis-elvaltozasok"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_genitalis_trauma",
      "name": "Genitalis trauma → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Genitalis trauma« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 96
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Genital trauma (DIA 96) legenyhébb sor: 'Genital trauma, no pain' = 5",
      "conflicts": [],
      "csakPanaszok": [
        "genitalis-trauma"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_vervizeles",
      "name": "Vérvizelés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Vérvizelés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 88
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Hematuria (DIA 88) legenyhébb sor: 'Chronic mild central or moderate to mild peripheral pain' = 5",
      "conflicts": [],
      "csakPanaszok": [
        "vervizeles"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_oliguria",
      "name": "Oliguria → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Oliguria« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 94
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Oliguria (DIA 94) legenyhébb sor: 'Oliguria' = 4",
      "conflicts": [],
      "csakPanaszok": [
        "oliguria"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_penisz_duzzanat",
      "name": "Pénisz duzzanat → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Pénisz duzzanat« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 90
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Penile swelling (DIA 90) legenyhébb sor: 'Penile Swelling, mild or chronic pain' = 5",
      "conflicts": [],
      "csakPanaszok": [
        "penisz-duzzanat"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_polyuria",
      "name": "Polyuria → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Polyuria« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 95
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Polyuria (DIA 95) legenyhébb sor: 'Polyuria' = 4",
      "conflicts": [],
      "csakPanaszok": [
        "polyuria"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_herefajdalom_vagy_duzzanat",
      "name": "Herefájdalom vagy duzzanat → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Herefájdalom vagy duzzanat« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 91
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Scrotal pain and/or swelling (DIA 91) legenyhébb sor: 'Scrotal pain and/or swelling' = 5",
      "conflicts": [],
      "csakPanaszok": [
        "herefajdalom-vagy-duzzanat"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_vizelet_retencio",
      "name": "Vizelet retenció → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Vizelet retenció« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 92
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Urinary retention (DIA 92) legenyhébb sor: 'Urinary retention' = 4",
      "conflicts": [],
      "csakPanaszok": [
        "vizelet-retencio"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_hugyuti_fertozeses_panaszok",
      "name": "Húgyúti fertőzéses panaszok → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Húgyúti fertőzéses panaszok« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 93
        },
        {
          "doc": "tankonyv",
          "page": 27
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: UTI complaints (DIA 93) legenyhébb sor: 'Chronic, mild UTI complaints/symptoms' = 5 (akut enyhe vizelési zavar → 4, tankonyv o.27 MSTR 4 példa)",
      "conflicts": [],
      "csakPanaszok": [
        "hugyuti-fertozeses-panaszok"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_allergias_reakcio",
      "name": "Allergiás reakció → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Allergiás reakció« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "tankonyv",
          "page": 32
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Allergic reaction (4 | VS, PSP); tankonyv o.32 (Nincs nehézlégzés >94% -> 4 vagy 5)",
      "conflicts": [],
      "csakPanaszok": [
        "allergias-reakcio"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_kohoges_torokszukulet",
      "name": "Köhögés / torokszűkület → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Köhögés / torokszűkület« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Cough / Congestion (5 | Chronic cough / congestion with normal vital signs)",
      "conflicts": [],
      "csakPanaszok": [
        "kohoges-torokszukulet"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_verkopes",
      "name": "Vérköpés → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Vérköpés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Hemoptysis (4 | Hemoptysis, appears well)",
      "conflicts": [],
      "csakPanaszok": [
        "verkopes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_hyperventillacio",
      "name": "Hyperventilláció → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hyperventilláció« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Hyperventilation (4 | Hyperventilation resolved, appears well)",
      "conflicts": [],
      "csakPanaszok": [
        "hyperventillacio"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_legszomj",
      "name": "Légszomj → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Légszomj« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Shortness of breath (4 | SOB - shortness of breath, in no distress)",
      "conflicts": [],
      "csakPanaszok": [
        "legszomj"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_sztridor",
      "name": "Sztridor → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Sztridor« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Stridor (3 | Audible stridor); tankonyv o.75 (Hallható stridor egyéb jel nélkül = 3)",
      "conflicts": [],
      "csakPanaszok": [
        "sztridor"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_nehezlegzes_egyeb_panaszok_nelkul",
      "name": "Nehézlégzés egyéb panaszok nélkül → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Nehézlégzés egyéb panaszok nélkül« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "tankonyv",
          "page": 59
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Wheezing - no other complaints (3 | Wheezing - no other complaints); tankonyv o.59, o.75",
      "conflicts": [],
      "csakPanaszok": [
        "nehezlegzes-egyeb-panaszok-nelkul"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_szorongas_krizishelyzet",
      "name": "Szorongás / krízishelyzet → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Szorongás / krízishelyzet« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 98
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: tankonyv o.82 (Szorongás/Krízisállapot: Enyhe szorongás/agitáció 4); ctas: Anxiety / Situational crisis (DIA 98: mild anxiety/agitation)",
      "conflicts": [],
      "csakPanaszok": [
        "szorongas-krizishelyzet"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_furcsa_viselkedes",
      "name": "Furcsa viselkedés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Furcsa viselkedés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 103
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: tankonyv o.82 (Furcsa viselkedés: Krónikus, nem sürgős állapot 5); ctas DIA 103 (Bizarre behaviour: chronic, non urgent)",
      "conflicts": [],
      "csakPanaszok": [
        "furcsa-viselkedes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_a_beteg_szocialis_helyzetebol_adodo_panasz",
      "name": "A beteg szociális helyzetéből adódó panasz → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »A beteg szociális helyzetéből adódó panasz« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 102
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: tankonyv o.82 (Szociális problémák: Krónikus, nem sürgős állapot 5); ctas DIA 102 (Social problem: chronic, non urgent)",
      "conflicts": [],
      "csakPanaszok": [
        "a-beteg-szocialis-helyzetebol-adodo-panasz"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_depresszio_ongyilkossagi_szandek_onveszelyesseg",
      "name": "Depresszió / öngyilkossági szándék / önveszélyesség → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Depresszió / öngyilkossági szándék / önveszélyesség« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 97
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: tankonyv o.82 (Depresszió/Öngyilkosság/Önsértés: Depressziós, öngyilkossági gondolatok nélkül 4); ctas DIA 97 (depressed, no suicidal ideation)",
      "conflicts": [],
      "csakPanaszok": [
        "depresszio-ongyilkossagi-szandek-onveszelyesseg"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_hallucinaciok_teveszmek",
      "name": "Hallucinációk / téveszmék → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hallucinációk / téveszmék« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 99
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: tankonyv o.82 (Hallucinációk/Téveszmék: Enyhe szorongás/agitáció, krónikus hallucináció 5); ctas DIA 99 (mild anxiety/agitation, chronic hallucinations)",
      "conflicts": [],
      "csakPanaszok": [
        "hallucinaciok-teveszmek"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_almatlansag",
      "name": "Álmatlanság → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Álmatlanság« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 100
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: tankonyv o.82 (Álmatlanság: Krónikus 5); ctas DIA 100 (chronic insomnia)",
      "conflicts": [],
      "csakPanaszok": [
        "almatlansag"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_szocialis_problemak",
      "name": "Szociális problémák → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Szociális problémák« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 102
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: tankonyv o.82 (Szociális problémák: Krónikus, nem sürgős állapot 5); ctas DIA 102 (Social problem: chronic, non urgent)",
      "conflicts": [],
      "csakPanaszok": [
        "szocialis-problemak"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_eroszakos_kozveszelyes_viselkedes",
      "name": "Erőszakos / közveszélyes viselkedés → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Erőszakos / közveszélyes viselkedés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 101
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: tankonyv o.82 (Erőszakos/Veszélyeztető magatartás: Erőszakos/közveszélyes, pontos terv nélkül 3); ctas DIA 101 (violent/homicidal ideation, no plan)",
      "conflicts": [],
      "csakPanaszok": [
        "eroszakos-kozveszelyes-viselkedes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_a_gyermek_aggaszto_viselkedese",
      "name": "A gyermek aggasztó viselkedése → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »A gyermek aggasztó viselkedése« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 305
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: tankonyv o.82 (A gyermek aggasztó viselkedése: Krónikus, változatlan viselkedés 5); ctas DIA 305 (Paediatric Disruptive behaviour: chronic, unchanged behavior)",
      "conflicts": [],
      "csakPanaszok": [
        "a-gyermek-aggaszto-viselkedese"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_idegen_test_a_vaginaban",
      "name": "Idegen test a vaginában → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Idegen test a vaginában« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 118
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: DIA 118 Foreign body, vagina (COT-2008 sor 1209: '5 | Foreign body, vagina')",
      "conflicts": [],
      "csakPanaszok": [
        "idegen-test-a-vaginaban"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_nagyajkak_duzzanata",
      "name": "Nagyajkak duzzanata → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Nagyajkak duzzanata« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 122
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: DIA 122 Labial swelling (COT-2008 sor 1246: '5 | Labial swelling')",
      "conflicts": [],
      "csakPanaszok": [
        "nagyajkak-duzzanata"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_menstruacios_problemak",
      "name": "Menstruációs problémák → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Menstruációs problémák« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 117
        },
        {
          "doc": "tankonyv",
          "page": 39
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: DIA 117 Menstrual problems (COT-2008 sor 1199-1200: '4 | Menstrual problems — This implies symptoms normally associated with menses'); tankonyv o.39 'Menstruáció' az enyhe/közepes (MSTR 3) vérzé",
      "conflicts": [],
      "csakPanaszok": [
        "menstruacios-problemak"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_terhesseg_20_het",
      "name": "Terhesség < 20 hét → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Terhesség < 20 hét« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 125
        },
        {
          "doc": "jegyzet",
          "page": 73
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: DIA 125 Pregnancy issues < 20 wks (COT-2008 sor 1280: '4 | Pregnancy issues < 20 weeks'); jegyzet o.73 ('A hüvelyi vérzés módosítói ugyanazok'), o.148, o.314",
      "conflicts": [],
      "csakPanaszok": [
        "terhesseg-20-het"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_terhesseg_20_het_2",
      "name": "Terhesség > 20 hét → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Terhesség > 20 hét« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 124
        },
        {
          "doc": "tankonyv",
          "page": 80
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: DIA 124 Pregnancy issues > 20 wks (COT-2008 sor 1269: '4 | Pregnancy issues > 20 weeks'); tankonyv o.80 szülészeti másodlagos módosító tábla",
      "conflicts": [],
      "csakPanaszok": [
        "terhesseg-20-het-2"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_nemi_eroszak",
      "name": "Nemi erőszak → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Nemi erőszak« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 120
        },
        {
          "doc": "jegyzet",
          "page": 291
        },
        {
          "doc": "tankonyv",
          "page": 78
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: DIA 120 Sexual assault (COT-2008 sor 1227: '4 | >=12 hours; no injury'); jegyzet o.291 (MSTR 4 – >12 óra, nincs sérülés); tankonyv o.78 4. szint példa 'Nemi erőszak (12 órán túli, sérülés nélkül",
      "conflicts": [],
      "csakPanaszok": [
        "nemi-eroszak"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_huvelyi_verzes",
      "name": "Hüvelyi vérzés → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hüvelyi vérzés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 121
        },
        {
          "doc": "jegyzet",
          "page": 148
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: DIA 121 Vaginal bleed (COT-2008 sor 1238: '4 | Vaginal bleeding - minor/spotting'); jegyzet o.148 (enyhe vérzés + normál VS + 3/10 fájdalom = MSTR 4)",
      "conflicts": [],
      "csakPanaszok": [
        "huvelyi-verzes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_huvelyvaladekozas",
      "name": "Hüvelyváladékozás → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hüvelyváladékozás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 119
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: DIA 119 Vaginal discharge (COT-2008 sor 1217: '5 | Mild symptoms')",
      "conflicts": [],
      "csakPanaszok": [
        "huvelyvaladekozas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_huvelyfajdalom_viszketes",
      "name": "Hüvelyfájdalom / viszketés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hüvelyfájdalom / viszketés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 123
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: DIA 123 Vaginal pain / itch (COT-2008 sor 1253: '5 | Vaginal pain, itch')",
      "conflicts": [],
      "csakPanaszok": [
        "huvelyfajdalom-viszketes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_kettoslatas",
      "name": "Kettőslátás → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Kettőslátás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 132
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 132 'Diplopia': legenyhébb sor '4 | Chronic diplopia' (nincs magyar jegyzet-forrás)",
      "conflicts": [],
      "csakPanaszok": [
        "kettoslatas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_szem_fajdalom",
      "name": "Szem fájdalom → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Szem fájdalom« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 129
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 129 'Eye pain': legenyhébb sor '5 | Eye pain, chronic' (nincs magyar jegyzet-forrás)",
      "conflicts": [],
      "csakPanaszok": [
        "szem-fajdalom"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_szemserules",
      "name": "Szemsérülés → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Szemsérülés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 134
        },
        {
          "doc": "jegyzet",
          "page": 316
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 134 'Eye trauma': legenyhébb sor '4 | Eye trauma, Acute central mild pain (<4)'; jegyzet o.316/325 a súlyos (MSTR 2) sort adja",
      "conflicts": [],
      "csakPanaszok": [
        "szemserules"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_idegen_test_a_szemben",
      "name": "Idegen test a szemben → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Idegen test a szemben« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 127
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 127 'Foreign body, eye': legenyhébb sor '5 | Acute peripheral mild pain' (magába foglalja a corneális abráziót és corneális idegentestet)",
      "conflicts": [],
      "csakPanaszok": [
        "idegen-test-a-szemben"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_voros_szem_valadekozas",
      "name": "Vörös szem / váladékozás → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Vörös szem / váladékozás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 130
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 130 'Red Eye, discharge': legenyhébb sor '5 | Red eye / discharge, chronic'",
      "conflicts": [],
      "csakPanaszok": [
        "voros-szem-valadekozas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_szemkornyeki_duzzanat",
      "name": "Szemkörnyéki duzzanat → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Szemkörnyéki duzzanat« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 133
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 133 'Periorbital swelling': legenyhébb sor '5 | Periorbital swelling'",
      "conflicts": [],
      "csakPanaszok": [
        "szemkornyeki-duzzanat"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_fenykerules",
      "name": "Fénykerülés → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Fénykerülés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 131
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 131 'Photophobia': legenyhébb sor '4 | Photophobia'",
      "conflicts": [],
      "csakPanaszok": [
        "fenykerules"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_latasi_zavarok",
      "name": "Látási zavarok → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Látási zavarok« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 128
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 128 'Visual disturbance': legenyhébb sor '4 | chronic/gradual change in vision'",
      "conflicts": [],
      "csakPanaszok": [
        "latasi-zavarok"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_amputacio",
      "name": "Amputáció → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Amputáció« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 138
        },
        {
          "doc": "tankonyv",
          "page": 78
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 138 (COT-2008): '3 | Amputation' (módosító nélküli, bare amputáció). tankonyv o.78: ujj-amputáció példa MSTR 2 szinten.",
      "conflicts": [],
      "csakPanaszok": [
        "amputacio"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_hat_fajdalom",
      "name": "Hát fájdalom → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hát fájdalom« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 136
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 136 (COT-2008): '5 | Back pain' (bare panasz, módosító nélkül).",
      "conflicts": [],
      "csakPanaszok": [
        "hat-fajdalom"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_izuleti_duzzanat",
      "name": "Izületi duzzanat → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Izületi duzzanat« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 143
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 143 (COT-2008): '5 | Joint swelling' (bare panasz).",
      "conflicts": [],
      "csakPanaszok": [
        "izuleti-duzzanat"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_alsovegtagi_serules",
      "name": "Alsóvégtagi sérülés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Alsóvégtagi sérülés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 140
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 140 (COT-2008): '5 | Lower extremity trauma, chronic mild pain' (legenyhébb sor).",
      "conflicts": [],
      "csakPanaszok": [
        "alsovegtagi-serules"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_alsovegtagi_fajdalom",
      "name": "Alsóvégtagi fájdalom → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Alsóvégtagi fájdalom« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 142
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 142 (COT-2008): '5 | Lower extremity chronic mild pain' (legenyhébb sor).",
      "conflicts": [],
      "csakPanaszok": [
        "alsovegtagi-fajdalom"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_gyermekgyogyaszati_jaras_es_testtartasi_zavar",
      "name": "Gyermekgyógyászati járás és testtartási zavar → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Gyermekgyógyászati járás és testtartási zavar« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 144
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: tankonyv o.75 (gyermek-specifikus tábla): 'Járási zavarok láz nélkül 4' (legenyhébb indokolt sor). ctas DIA 144: 'Go to Paediatric COT' — felnőtt táblában nincs bare sor.",
      "conflicts": [],
      "csakPanaszok": [
        "gyermekgyogyaszati-jaras-es-testtartasi-zavar"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_traumas_hat_gerinc_serules",
      "name": "Traumás hát / gerinc sérülés → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Traumás hát / gerinc sérülés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 137
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 137 (COT-2008): '4 | Traumatic back/spine injury, mild central pain' — ez a legenyhébb sor, MSTR 5 sor NINCS ehhez a panaszhoz.",
      "conflicts": [],
      "csakPanaszok": [
        "traumas-hat-gerinc-serules"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_felsovegtagi_serules",
      "name": "Felsővégtagi sérülés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Felsővégtagi sérülés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 139
        },
        {
          "doc": "jegyzet",
          "page": 164
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 139 (COT-2008): '5 | Upper extremity trauma, chronic mild pain' (legenyhébb sor). jegyzet o.164 megerősíti: fájdalommentes izolált zárt sérülés önmagában MSTR 5 lenne.",
      "conflicts": [],
      "csakPanaszok": [
        "felsovegtagi-serules"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_felsovegtagi_fajdalom",
      "name": "Felsővégtagi fájdalom → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Felsővégtagi fájdalom« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 141
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 141 (COT-2008): '5 | Upper extremity chronic mild pain' (legenyhébb sor).",
      "conflicts": [],
      "csakPanaszok": [
        "felsovegtagi-fajdalom"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_fogaszati_iny_problemak",
      "name": "Fogászati / íny problémák → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Fogászati / íny problémák« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 52
        },
        {
          "doc": "tankonyv",
          "page": 52
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 52 (Dental/gum problem minor problem = 5); tankonyv o.52 (maradandó fog luxatiója = 2 mint módosító)",
      "conflicts": [],
      "csakPanaszok": [
        "fogaszati-iny-problemak"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_nyelesi_nehezitettseg_dysphagia",
      "name": "Nyelési nehezítettség / dysphagia → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Nyelési nehezítettség / dysphagia« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 57
        },
        {
          "doc": "tankonyv",
          "page": 47
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 57 (legenyhébb sor VS,PSC = 3; nincs 4/5 szint); tankonyv o.47 (dysphagia módosító-példa)",
      "conflicts": [],
      "csakPanaszok": [
        "nyelesi-nehezitettseg-dysphagia"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_arc_fajdalom_nem_traumas_nem_fog_eredetu",
      "name": "Arc fájdalom (nem traumás / nem fog eredetű) → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Arc fájdalom (nem traumás / nem fog eredetű)« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 58
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 58 (legenyhébb sor PSP,chronicity = 5)",
      "conflicts": [],
      "csakPanaszok": [
        "arc-fajdalom-nem-traumas-nem-fog-eredetu"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_arc_trauma",
      "name": "Arc trauma → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Arc trauma« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 53
        },
        {
          "doc": "jegyzet",
          "page": 265
        },
        {
          "doc": "jegyzet",
          "page": 290
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: jegyzet o.265 (OO vagy arc trauma, normál paraméterek, nincs fájdalom/vérzékenység = MSTR 5); jegyzet o.290 (sebvarrást nem igényel = MSTR 5). Megj.: ctas DIA 53 arc-traumánál nincs 5-ös szint (legals",
      "conflicts": [],
      "csakPanaszok": [
        "arc-trauma"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_nyak_duzzanat_fajdalom",
      "name": "Nyak duzzanat / fájdalom → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Nyak duzzanat / fájdalom« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 55
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 55 (legenyhébb sor: Neck swelling/pain with chronic central mild pain <4 = 5)",
      "conflicts": [],
      "csakPanaszok": [
        "nyak-duzzanat-fajdalom"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_nyaki_trauma",
      "name": "Nyaki trauma → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Nyaki trauma« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 56
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 56 (legenyhébb sor VS,PSC = 4; nincs 5-ös szint nyaki traumánál)",
      "conflicts": [],
      "csakPanaszok": [
        "nyaki-trauma"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_torokfajas",
      "name": "Torokfájás → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Torokfájás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 54
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas DIA 54 (legenyhébb sor: Minor sore throat +/- laryngitis = 5)",
      "conflicts": [],
      "csakPanaszok": [
        "torokfajas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_fulfajas",
      "name": "Fülfájás → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Fülfájás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 46
        },
        {
          "doc": "ctas",
          "page": 246
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Earache (DIA 46 felnőtt) '5 | Earache with mild pain'; gyermeknél baseline 4 (DIA 246 '4 | Earache with mild pain')",
      "conflicts": [],
      "csakPanaszok": [
        "fulfajas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_fulvaladekozas",
      "name": "Fülváladékozás → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Fülváladékozás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 50
        },
        {
          "doc": "ctas",
          "page": 250
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Discharge, ear (DIA 50 felnőtt / DIA 250 gyermek); a tábla csak '3 | VS' és '4 | VS' sorokat tartalmaz, a legenyhébb (normál VS) = 4",
      "conflicts": [],
      "csakPanaszok": [
        "fulvaladekozas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_fulserules",
      "name": "Fülsérülés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Fülsérülés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 51
        },
        {
          "doc": "ctas",
          "page": 251
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Ear injury (DIA 51 felnőtt / DIA 251 gyermek) legenyhébb sora '5 | Laceration/abrasion not requiring sutures'",
      "conflicts": [],
      "csakPanaszok": [
        "fulserules"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_idegen_test_a_fulben",
      "name": "Idegen test a fülben → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Idegen test a fülben« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 47
        },
        {
          "doc": "ctas",
          "page": 247
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Foreign body ear (DIA 47 felnőtt) '5 | Foreign body ear, mild pain (<4)'; gyermeknél baseline 4 (DIA 247 '4 | Foreign body ear, mild pain (<4)')",
      "conflicts": [],
      "csakPanaszok": [
        "idegen-test-a-fulben"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_hallasvesztes",
      "name": "Hallásvesztés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hallásvesztés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 48
        },
        {
          "doc": "ctas",
          "page": 248
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Loss of hearing (DIA 48 / DIA 248) '5 | Hearing loss, gradual onset'; megerősítve mstr o.292 'MSTR 5 – fokozatos hallásvesztés-csökkenés'",
      "conflicts": [],
      "csakPanaszok": [
        "hallasvesztes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_tinnitus_fulzugas",
      "name": "Tinnitus, fülzúgás → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Tinnitus, fülzúgás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 49
        },
        {
          "doc": "ctas",
          "page": 249
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Tinnitus (DIA 49 / DIA 249) '4 | Tinnitus'",
      "conflicts": [],
      "csakPanaszok": [
        "tinnitus-fulzugas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_kemiai_artalmak",
      "name": "Kémiai ártalmak → MSTR 2 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Kémiai ártalmak« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 2. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 2,
      "source": [
        {
          "doc": "ctas",
          "page": 67
        },
        {
          "doc": "jegyzet",
          "page": 51
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Chemical exposure modifier table (COT-2008 DIA 67) — 'The minimum level is 2 to ensure early decontamination and identification of the substances as toxic or not'; megerősíti jegyzet o.51 ('Kémi",
      "conflicts": [],
      "csakPanaszok": [
        "kemiai-artalmak"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_elektromos_serulesek",
      "name": "Elektromos sérülések → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Elektromos sérülések« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 66
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Electrical injury modifier table (COT-2008 DIA 66) — legenyhébb sor '3 | No obvious cutaneous injury' (normál vitálisokkal)",
      "conflicts": [],
      "csakPanaszok": [
        "elektromos-serulesek"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_fagyas",
      "name": "Fagyás → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Fagyás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 64
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Frostbite / Cold injury modifier table (COT-2008 DIA 64) — legenyhébb sor '5 | Frostbite/cold injury' (minor, elszíneződés nélkül)",
      "conflicts": [],
      "csakPanaszok": [
        "fagyas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_hypothermia",
      "name": "Hypothermia → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Hypothermia« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 68
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: tankonyv o.79 (4.3.1 Környezeti ártalmak, maghőmérséklet-tábla: '>35.0°C, fagyás nélkül, normál vitális paraméterek' → 4); ctas: Hypothermia (COT-2008 DIA 68) '4 | No frostbite, normal VS'",
      "conflicts": [],
      "csakPanaszok": [
        "hypothermia"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_gazmergezes",
      "name": "Gázmérgezés → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Gázmérgezés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 65
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Noxious inhalation modifier table (COT-2008 DIA 65) — legenyhébb sor '4 | Remote exposure, no symptoms'",
      "conflicts": [],
      "csakPanaszok": [
        "gazmergezes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_fulladaskozeli_allapot",
      "name": "Fulladásközeli állapot → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Fulladásközeli állapot« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 69
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Near Drowning modifier table (COT-2008 DIA 69) — a tábla legalsó sora '3 | Core temperature 32-35°C' / '3 | VS' (nincs 4-5 sor, azaz minimum MSTR 3). Megj.: tankonyv o.79 közös maghő-táblája (hy",
      "conflicts": [],
      "csakPanaszok": [
        "fulladaskozeli-allapot"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_izolalt_hasi_serules_tompa",
      "name": "Izolált hasi sérülés – tompa → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Izolált hasi sérülés – tompa« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 182
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas COT-2008 DIA 182 (Isolated abdominal trauma – blunt): alap sor '4 | Isolated abdominal blunt trauma' (jól kinéző beteg, módosító nélkül)",
      "conflicts": [],
      "csakPanaszok": [
        "izolalt-hasi-serules-tompa"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_izolalt_hasi_serules_athatolo",
      "name": "Izolált hasi sérülés – áthatoló → MSTR 2 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Izolált hasi sérülés – áthatoló« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 2. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 2,
      "source": [
        {
          "doc": "ctas",
          "page": 181
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas COT-2008 DIA 181 (Isolated abdominal trauma – penetrating): alap sor '2 | Isolated abdominal trauma - penetrating' — minden áthatoló hasi sérülés eleve minimum 2",
      "conflicts": [],
      "csakPanaszok": [
        "izolalt-hasi-serules-athatolo"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_izolalt_mellkasi_serules_tompa",
      "name": "Izolált mellkasi sérülés – tompa → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Izolált mellkasi sérülés – tompa« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 180
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas COT-2008 DIA 180 (Isolated chest trauma – blunt): alap sor '4 | Isolated chest trauma - blunt (appears well)'",
      "conflicts": [],
      "csakPanaszok": [
        "izolalt-mellkasi-serules-tompa"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_izolalt_mellkasi_serules_athatolo",
      "name": "Izolált mellkasi sérülés – áthatoló → MSTR 2 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Izolált mellkasi sérülés – áthatoló« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 2. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 2,
      "source": [
        {
          "doc": "ctas",
          "page": 179
        },
        {
          "doc": "jegyzet",
          "page": 139
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas COT-2008 DIA 179 (Isolated chest trauma – penetrating): alap sor '2 | Isolated chest trauma - penetrating'; jegyzet o.139 (áthatoló mellkasi sérülés MSTR 2, mert elérheti a perikardiumot / légmel",
      "conflicts": [],
      "csakPanaszok": [
        "izolalt-mellkasi-serules-athatolo"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_sulyos_trauma_tompa",
      "name": "Súlyos trauma – tompa → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Súlyos trauma – tompa« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 178
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas COT-2008 DIA 178 (Major trauma – blunt): alap sor '4 | Major trauma-blunt'. Gyakorlatban a magas rizikójú mechanizmus (baleseti anamnézis) rendszerint feljebb visz.",
      "conflicts": [],
      "csakPanaszok": [
        "sulyos-trauma-tompa"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_sulyos_trauma_athatolo",
      "name": "Súlyos trauma – áthatoló → MSTR 3 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Súlyos trauma – áthatoló« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 3. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 177
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas COT-2008 DIA 177 (Major trauma – penetrating): alap sor '3 | Major trauma - penetrating'. Fej/mellkas/has áthatolása vagy magas rizikójú mechanizmus 2-re visz.",
      "conflicts": [],
      "csakPanaszok": [
        "sulyos-trauma-athatolo"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_orrverzes",
      "name": "Orrvérzés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Orrvérzés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 59
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Epistaxis (DIA 59) '5 | Periodic / recurrent, no active bleeding'",
      "conflicts": [],
      "csakPanaszok": [
        "orrverzes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_idegen_test_az_orrban",
      "name": "Idegen test az orrban → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Idegen test az orrban« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 61
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Foreign body, nose (DIA 61) '5 | Foreign body, nose with acute peripheral mild pain'",
      "conflicts": [],
      "csakPanaszok": [
        "idegen-test-az-orrban"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_orr_serules",
      "name": "Orr sérülés → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Orr sérülés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 63
        },
        {
          "doc": "jegyzet",
          "page": 265
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: jegyzet o.265 (vezető panasz orr/arc trauma, normál paraméterek, semmi feljebb-triázsoló tényező = MSTR 5); ctas DIA 63 (Nasal trauma) '5 | PSP'",
      "conflicts": [],
      "csakPanaszok": [
        "orr-serules"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_urti_felso_leguti_fertozes",
      "name": "URTI (felső légúti fertőzés) → MSTR 5 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »URTI (felső légúti fertőzés)« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 5. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "ctas",
          "page": 62
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: URTI complaints (DIA 62) '5 | Appears well, no fever'",
      "conflicts": [],
      "csakPanaszok": [
        "urti-felso-leguti-fertozes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_szajon_at_torteno_tuladagolas",
      "name": "Szájon át történő túladagolás → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Szájon át történő túladagolás« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 175
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Overdose ingestion (COT-2008 DIA 175, '4 | Overdose ingestion'); a tankönyv és a jegyzet nem ad explicit baseline szintet e panaszra",
      "conflicts": [],
      "csakPanaszok": [
        "szajon-at-torteno-tuladagolas"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_gyogyszerrel_torteno_visszaeles_mergezes",
      "name": "Gyógyszerrel történő visszaélés / mérgezés → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Gyógyszerrel történő visszaélés / mérgezés« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 174
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Substance misuse / Intoxication (COT-2008 DIA 174, '4 | Known low risk substance'); tankönyv/jegyzet nem ad explicit baseline szintet",
      "conflicts": [],
      "csakPanaszok": [
        "gyogyszerrel-torteno-visszaeles-mergezes"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_megvonasi_tunetek",
      "name": "Megvonási tünetek → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "A(z) »Megvonási tünetek« vezető panasz forrás szerinti kiinduló (legenyhébb, módosító nélküli) besorolása MSTR 4. Súlyosbító elsődleges vagy panasz-specifikus módosító a minimum-elv miatt feljebb (kisebb szám) viheti; ez alá nem eshet.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 176
        }
      ],
      "notes": "Alapszint (floor) a lefedettségi audit baseline-oszlopából, forrás-ellenőrzött. Audit-forrás: ctas: Substance withdrawal (COT-2008 DIA 176, '4 | Mild anxiety/agitation'); tankönyv/jegyzet nem ad explicit baseline szintet",
      "conflicts": [],
      "csakPanaszok": [
        "megvonasi-tunetek"
      ],
      "group": "secondary"
    },
    {
      "id": "buktato_lelegeztetes",
      "name": "Intubált / asszisztált lélegeztetést igényel → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Súlyos nehézlégzés: A fokozott légzési munka miatt fellépő kimerültség, cianózis, egyszavas beszéd, beszédképtelenség, felső légúti elzáródás. Levert vagy zavart. Intubált vagy asszisztált lélegeztetést igényel. → O2 szaturáció <90% → MSTR szint 1.",
      "condition": [
        {
          "mezo": "lelegeztetest_igenyel",
          "egyenlo": true
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "tankonyv",
          "page": 32
        }
      ],
      "notes": "Explicit kapu a mért nehezlegzesFok-tól függetlenül; kiterjeszti a nehezlegzesFok='sulyos' (elsodleges_felnott_02, csak felnőtt) logikát gyermekre is (applies_to: mind). Az O2-szat/PEFR ilyenkor irreleváns.",
      "conflicts": [],
      "group": "respiratory"
    },
    {
      "id": "buktato_legutvedelem",
      "name": "Légútját védeni képtelen (eszméletlen benyomás) → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Eszméletlen: képtelen a légutak védelmére, cél nélküli válasz fájdalomra vagy hangos zajra, folyamatos görcsök vagy folyamatosan romló tudati állapot → GCS 3-9 → MSTR 1.",
      "condition": [
        {
          "mezo": "legutvedelem_keptelen",
          "egyenlo": true
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "tankonyv",
          "page": 34
        },
        {
          "doc": "jegyzet",
          "page": 83
        }
      ],
      "notes": "A légúti/tudati dimenzió explicit kapuja, ha a GCS-szám nem mérhető/félrevezető (pl. becsléssel magasabbnak tűnik, de a garat-/köhögési reflex hiányzik). Átfed a GCS 3-9→1 (szintek_01/elsodleges_felnott_11/gyermek_12) és a kritikusMegjelenes='csak_fajdalomra_reagal'→1 (kritikus_05) szabályokkal — mind MSTR 1, min-logika miatt nem okoz konfliktust.",
      "conflicts": [],
      "group": "consciousness"
    },
    {
      "id": "buktato_nem_szuloszobai_ujszulott",
      "name": "Nem szülőszobán született újszülött → MSTR 2 padló",
      "applies_to": "gyermek",
      "condition_text": "Nem szülőszobán született újszülött alatt értjük azt, aki otthon, a kórház felé haladó (mentő)autóban vagy a sürgősségi osztályon hirtelen meginduló szüléssel született. Ilyen esetben az újszülött automatikusan MSTR 2. szintű, a vitális meghatározók alapján felfelé triázsolható, lefelé nem.",
      "condition": [
        {
          "mezo": "nem_szuloszobai_ujszulott",
          "egyenlo": true
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "tankonyv",
          "page": 59
        }
      ],
      "notes": "A min-logika pontosan a forrás szerinti viselkedést adja: MSTR 2 padló, vitálisok alapján felfelé triázsolható, lefelé nem.",
      "conflicts": [],
      "group": "immediate"
    },
    {
      "id": "buktato_perinealis_borelfeketedes",
      "name": "Perineális / lágyrész panasz + bőrelfeketedés → min. MSTR 2",
      "applies_to": "mind",
      "condition_text": "A kialakulási okok elemzésétől függetlenül fontos megvizsgálni, hogy van-e „bőrelfeketedés”. Amennyiben igen, úgy a beteg legalább MSTR 2. szintre triázsolandó, a „láz vagy immunszupprimált” módosító használatával. Lehetséges a beteg „feltriázsolása” is, a súlyos fájdalom akut és centrális minősítésével még akkor is, ha a beteg a saját fájdalmát 7 pont alá sorolja. A beteget 15 percen belül orvosnak kell látnia, még akkor is, ha a beteg stabil és akár egy óráig is várakoztatható lenne, hiszen a fertőzött terület igen gyorsan terjed, az eredeti terület akár 1 órán belül hat-nyolcszorosára is nőhet.",
      "condition": [
        {
          "mezo": "borelfeketedes",
          "egyenlo": "igen"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "tankonyv",
          "page": 83
        }
      ],
      "notes": "Padló-szabály (minimum-logika): nem tud lefelé sorolni, súlyosabb elsődleges módosító (sokk/GCS/láz-szepszis) felülírja. A forrás emellett három NEM szint-emelő teendőt is előír, amelyeket a jelenlegi motor nem tud automatikusan végrehajtani, ezért figyelmeztetésként kezelendők: (1) a 'láz vagy immunszupprimált' módosító aktiválása, (2) a beteg <7 pontos fájdalom-önbesorolásának felülbírálata akut+centrális minősítéssel, (3) 15 perces orvos-látási cél a stabilitás ellenére. Hatókör: a perineális/genitális lágyrész vezető panaszok, ahol a triázs ápoló nem látja a területet és a nekrotizáló fasciitis / Fournier-gangréna gyanú fennáll.",
      "conflicts": [],
      "csakPanaszok": [
        "vegbel-vegbel-kornyeki-fajdalom",
        "vegbelserules",
        "genitalis-elvaltozasok",
        "genitalis-trauma",
        "herefajdalom-vagy-duzzanat",
        "penisz-duzzanat",
        "lagyeki-fajdalom-terime"
      ],
      "group": "secondary"
    },
    {
      "id": "buktato_fejserules_prehospitalis_ajulas",
      "name": "Fejsérülés + prehospitális eszméletvesztés (most éber) → min. MSTR 3",
      "applies_to": "mind",
      "condition_text": "Fejsérülés eszméletvesztéssel a prehospitális szakaszban, most éber (GCS 14–15) → 3. szint (Sürgős).",
      "condition": [
        {
          "mezo": "prehospitalisAjulas",
          "egyenlo": "igen"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "tankonyv",
          "page": 52
        },
        {
          "doc": "tankonyv",
          "page": 46
        },
        {
          "doc": "jegyzet",
          "page": 267
        }
      ],
      "notes": "Padló-szabály (minimum-logika): a súlyosabb elsődleges módosítók (GCS≤13, sokk, súlyos mechanizmus) felülírják. A verifikált forráspélda (TK 52. o.) és a fatális alultriázs-eset (MSTR 267. o.) gyermek-kontextusban szerepel, de a szabály panasz-alapú (fejsérülés) és csak felfelé emel, ezért applies_to='mind' — felnőttnél is védő. Kapcsolódó figyelmeztetés (a motor nem automatizálja): alvó / nem ébresztett beteget a tudat felmérése ELŐTT fel kell ébreszteni.",
      "conflicts": [],
      "csakPanaszok": [
        "fejserules"
      ],
      "group": "consciousness"
    },
    {
      "id": "buktato_furcsa_viselkedes_uj_keletu",
      "name": "Furcsa viselkedés: új keletű / akut kezdet → min. MSTR 3 (akut orvosi probléma)",
      "applies_to": "mind",
      "condition_text": "Az új keletű furcsa viselkedést nem tekinti akut orvosi problémaként. (pl. hypoxia, akut delírium)",
      "condition": [
        {
          "mezo": "furcsaViselkedesUjKeletu",
          "egyenlo": "uj_keletu_akut"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "tankonyv",
          "page": 83
        },
        {
          "doc": "tankonyv",
          "page": 82
        }
      ],
      "notes": "Padló-szabály a mentalisFurcsaViselkedes (kontrolláltság) tengelytől FÜGGETLEN onset-dimenzióra: megakadályozza, hogy az új keletű (akut) furcsa viselkedést 'ártalmatlan' (MSTR 4) vagy 'krónikus, nem sürgős' (MSTR 5) módosítóval alultriázsolják. A szint (3) a TK 82. o. furcsa-viselkedés táblájának 'kontrollált viselkedés → 3' fokával összhangban van; a TK 83. o. buktató szerint a hátterében hypoxia / akut delírium / CNS-ok állhat, ezeket ki kell zárni. A 'nem kontrollált → 1' és 'biztonsági kockázat → 2' (masodlagos_63/64) módosítók súlyosabbak, azok felülírják. | Zavartság panaszra is: akut/új keletű zavartság → MSTR 3 (CTAS Confusion: acute without HA/altered LOC → 3); krónikus demencia változatlan → 4 alapszint.",
      "conflicts": [],
      "csakPanaszok": [
        "furcsa-viselkedes",
        "zavartsag"
      ],
      "group": "consciousness"
    },
    {
      "id": "kritikus_01",
      "name": "Nyilvánvaló vitális disztressz / periarreszt állapot → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Az 1. szinthez azok a betegek tartoznak, akik nyilvánvalóan vitális disztresszben és instabilitásban szenvednek — ne vesztegess időt a vitális paraméterekre és az anamnézisre; első rátekintéssel megállapítható periarreszt állapot.",
      "condition": [
        {
          "mezo": "kritikusMegjelenes",
          "egyenlo": "vitalis_distressz"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 45
        },
        {
          "doc": "jegyzet",
          "page": 62
        },
        {
          "doc": "jegyzet",
          "page": 117
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "immediate"
    },
    {
      "id": "kritikus_02",
      "name": "Leszürkült, erőtlen, merev tekintetű csecsemő/gyermek → MSTR 1",
      "applies_to": "gyermek",
      "condition_text": "Egy leszürkült, erőtlen, merev tekintetű csecsemő: MSTR 1. szint (elsődleges megtekintés / PAT).",
      "condition": [
        {
          "mezo": "kritikusMegjelenes",
          "egyenlo": "leszurkult_ernyedt"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 203
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "immediate"
    },
    {
      "id": "kritikus_03",
      "name": "Cianotikus / márványozott bőrszínű gyermek → MSTR 1",
      "applies_to": "gyermek",
      "condition_text": "Kékes, márványozott bőrszín: MSTR 1. szint; a márványozottság, sápadtság és cianózis az elégtelen keringés jelei.",
      "condition": [
        {
          "mezo": "kritikusMegjelenes",
          "egyenlo": "cianotikus_marvanyozott"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 203
        },
        {
          "doc": "jegyzet",
          "page": 206
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "immediate"
    },
    {
      "id": "kritikus_04",
      "name": "Aktívan zajló tónusos/klónusos görcs (bármely életkor) → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Tónusos/klónusos görcs bármely életkorban: MSTR 1. szint.",
      "condition": [
        {
          "mezo": "kritikusMegjelenes",
          "egyenlo": "aktiv_gorcs"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 203
        }
      ],
      "notes": "Átfedés a gorcsAllapot=aktiv panasz-szabállyal (panasz_kardio_neuro) — mindkettő MSTR 1-et ad.",
      "conflicts": [],
      "group": "immediate"
    },
    {
      "id": "kritikus_05",
      "name": "Eszméletlen benyomás: csak fájdalomra reagál / cél nélküli válasz → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Eszméletlen: képtelen a légutak védelmére, cél nélküli válasz fájdalomra vagy hangos zajra, folyamatos görcsök vagy folyamatosan romló tudati állapot (GCS 3-9 kategória szöveges megfelelője).",
      "condition": [
        {
          "mezo": "kritikusMegjelenes",
          "egyenlo": "csak_fajdalomra_reagal"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 83
        },
        {
          "doc": "jegyzet",
          "page": 111
        }
      ],
      "notes": "GCS-mérés nélküli, megtekintésen alapuló megfelelője a GCS 3-9 → 1 szabálynak.",
      "conflicts": [],
      "group": "immediate"
    },
    {
      "id": "kritikus_06",
      "name": "Étel-elutasítás + érdektelenség + letargia + nincs hangja (kisgyermek) → legalább MSTR 2",
      "applies_to": "gyermek",
      "condition_text": "Beszélni még nem képes gyermeknél: visszautasítja az ételt, általános érdektelenség, letargia, megmagyarázhatatlan ingerlékenység, nincs hangja (gyenge vagy hiányzó sírás) — MINDEGYIK nagyon aggasztó jel, legalább MSTR 2. vagy magasabb szintre triázsolandó.",
      "condition": [
        {
          "mezo": "kritikusMegjelenes",
          "egyenlo": "etel_elutasitas_letargia"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 204
        }
      ],
      "notes": "Szepszist, anyagcsere-betegséget, mérgezést, bántalmazást jelezhet.",
      "conflicts": [],
      "group": "immediate"
    },
    {
      "id": "p1_apnoe_zajlo",
      "name": "Csecsemő apnoe: zajló epizód a vizsgálatkor → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Csecsemőnél a vizsgálat idején zajló apnoés epizód azonnali, MSTR 1 (Reszuszcitáció) besorolást igényel.",
      "condition": [
        {
          "mezo": "apnoeStatus",
          "egyenlo": "zajlo"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "CTAS COT-2008 (Apneic spells in infants): »1 | Apneic episode on presentation«.",
      "conflicts": [],
      "csakPanaszok": [
        "apnoes-periodus-csecsemonel"
      ],
      "group": "secondary"
    },
    {
      "id": "p1_apnoe_kozelmultbeli",
      "name": "Csecsemő apnoe: közelmúltbeli epizód → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Közelmúltbeli, apnoéval vagy légzési kompromisszummal összeegyeztethető epizód → MSTR 2.",
      "condition": [
        {
          "mezo": "apnoeStatus",
          "egyenlo": "kozelmultbeli"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "CTAS COT-2008: »2 | Recent spell consistent with apnea or respiratory compromise«.",
      "conflicts": [],
      "csakPanaszok": [
        "apnoes-periodus-csecsemonel"
      ],
      "group": "secondary"
    },
    {
      "id": "p1_apnoe_anamnesztikus",
      "name": "Csecsemő apnoe: anamnesztikus epizód → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Kórtörténeti (már lezajlott), apnoéval összeegyeztethető epizód, aktuálisan panaszmentes → MSTR 3.",
      "condition": [
        {
          "mezo": "apnoeStatus",
          "egyenlo": "anamnesztikus"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "CTAS COT-2008: »3 | History of spell consistent with apnea«.",
      "conflicts": [],
      "csakPanaszok": [
        "apnoes-periodus-csecsemonel"
      ],
      "group": "secondary"
    },
    {
      "id": "baseline_leguti_idegentest",
      "name": "Légúti idegentest → MSTR 4 alapszint",
      "applies_to": "mind",
      "condition_text": "Légúti idegentest enyhe panasszal, distressz nélkül → MSTR 4 kiinduló szint. TELJES légúti elzáródás / súlyos légzési distressz esetén a globális súlyos-nehézlégzés szabály (nehezlegzesFok=sulyos) MSTR 1-re viszi — jelöld a súlyos légzési jeleket.",
      "condition": [],
      "level": 4,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "CTAS COT-2008 (Respiratory foreign body): »4 | Respiratory - foreign body, mild pain, appears in no distress«. Teljes elzáródás → globális súlyos-légzés → MSTR 1.",
      "conflicts": [],
      "csakPanaszok": [
        "leguti-idegentest"
      ],
      "group": "secondary"
    },
    {
      "id": "p1_padlo_szivleallas_nem_traumas",
      "name": "Szívleállás (nem traumás) → MSTR 1 padló",
      "applies_to": "mind",
      "condition_text": "A nem traumás eredetű szív-/keringésmegállás az MSTR 1 (Reszuszcitáció – azonnali) definíció szerinti kötelező kategóriája; a panasz kiválasztásakor a besorolás legalább MSTR 1.",
      "condition": [],
      "level": 1,
      "source": [
        {
          "doc": "tankonyv",
          "page": 25
        }
      ],
      "notes": "MSTR 1 definíció (2.1.1) explicit példa: »Keringésmegállás«. Nincs enyhébb kimenet.",
      "conflicts": [],
      "csakPanaszok": [
        "szivleallas-nem-traumas-eredetu"
      ],
      "group": "secondary"
    },
    {
      "id": "p1_padlo_szivleallas_traumas",
      "name": "Szívleállás (traumás) → MSTR 1 padló",
      "applies_to": "mind",
      "condition_text": "A traumás eredetű szív-/keringésmegállás az MSTR 1 (Reszuszcitáció – azonnali) definíció szerinti kötelező kategóriája; a panasz kiválasztásakor a besorolás legalább MSTR 1.",
      "condition": [],
      "level": 1,
      "source": [
        {
          "doc": "tankonyv",
          "page": 25
        }
      ],
      "notes": "MSTR 1 definíció (2.1.1) explicit példái: »Keringésmegállás«, »Súlyos sérült (pl. sokkos állapot)«.",
      "conflicts": [],
      "csakPanaszok": [
        "szivleallas-traumas-eredetu"
      ],
      "group": "secondary"
    },
    {
      "id": "p1_padlo_legzesleallas",
      "name": "Légzésleállás → MSTR 1 padló",
      "applies_to": "mind",
      "condition_text": "A légzésleállás az MSTR 1 (Reszuszcitáció – azonnali) definíció szerinti kötelező kategóriája; a panasz kiválasztásakor a besorolás legalább MSTR 1.",
      "condition": [],
      "level": 1,
      "source": [
        {
          "doc": "tankonyv",
          "page": 25
        }
      ],
      "notes": "MSTR 1 definíció (2.1.1) explicit példa: »Légzésleállás«.",
      "conflicts": [],
      "csakPanaszok": [
        "legzesleallas"
      ],
      "group": "secondary"
    },
    {
      "id": "p1_padlo_hideg_pulzus_nelkuli_vegtag",
      "name": "Hideg pulzus nélküli végtag → MSTR 2 padló",
      "applies_to": "mind",
      "condition_text": "Az akut végtag-ischaemia (hideg, pulzus nélküli végtag) a CTAS COT-2008 szerint kiindulásként MSTR 2; instabil vitálisok / sokk esetén az elsődleges keringési módosító MSTR 1-re viheti (a minimum-elv miatt).",
      "condition": [],
      "level": 2,
      "source": [
        {
          "doc": "ctas",
          "page": 44
        },
        {
          "doc": "tankonyv",
          "page": 88
        }
      ],
      "notes": "CTAS COT-2008: »2 | Cool Pulseless Limb«. A magyar tankönyv (o.88) csak felsorolja a panaszt, szint nélkül → CTAS a döntőbíró. Sokk/kritikus vitális → 1 az elsődleges módosítón keresztül.",
      "conflicts": [],
      "csakPanaszok": [
        "hideg-pulzus-nelkuli-vegtag"
      ],
      "group": "secondary"
    },
    {
      "id": "p1_padlo_cianozis",
      "name": "Cianózis → MSTR 3 padló",
      "applies_to": "mind",
      "condition_text": "A cianózis a CTAS COT-2008 szerint kiindulásként MSTR 3, és soha nem esik ez alá; kóros vitálisok / légzési distressz / hipoxia esetén az elsődleges légzési-keringési módosítók MSTR 1-2-re vihetik (a minimum-elv miatt).",
      "condition": [],
      "level": 3,
      "source": [
        {
          "doc": "ctas",
          "page": 170
        },
        {
          "doc": "tankonyv",
          "page": 89
        }
      ],
      "notes": "CTAS COT-2008: »3 | Cyanosis«. A magyar tankönyv (o.89) csak felsorolja, szint nélkül → CTAS a döntőbíró. VS-eszkaláció (hipoxia/distressz) → 1-2 az elsődleges módosítókon keresztül.",
      "conflicts": [],
      "csakPanaszok": [
        "cianozis"
      ],
      "group": "secondary"
    },
    {
      "id": "bor_akut_gyulladt_cellulitis",
      "name": "Akut / gyulladt / fertőzésgyanús bőrelváltozás (lokalizált cellulitis) → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Akut, gyulladt, fertőzésgyanús bőrelváltozás (lokalizált cellulitis-kép: körülírt, meleg, fájdalmas, terjedő bőrpír/duzzanat) → MSTR 4. A krónikus, nem fertőzött elváltozás MSTR 5 marad.",
      "condition": [
        {
          "mezo": "borElvaltozasJelleg",
          "egyenlo": "akut_gyulladt"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 145
        },
        {
          "doc": "jegyzet",
          "page": 100
        },
        {
          "doc": "ctas",
          "page": 164
        }
      ],
      "notes": "Jegyzet o.145: »MSTR 5., ha lokalizált cellulitis alapján, akkor MSTR 4.«; o.100 ugyanez a CTAS 4-es szinttel. CTAS COT-2008 DIA 163/164: »4 | Localized cellulitis«. Az audit előtt ez az opció halott ág volt (szabály nélkül baseline 5-re esett) — a kérdés két ága azonos kimenetet adott.",
      "conflicts": [],
      "csakPanaszok": [
        "duzzanat-daganat-borkemenyedes",
        "egyeb-bor-tunetek",
        "lokalizalt-duzzanat-borpir"
      ],
      "group": "secondary"
    },
    {
      "id": "kiutes_purpura_petechia",
      "name": "Purpura / petechia + beteg benyomás → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Purpurás vagy petechiás kiütés beteg benyomású (szeptikus küllemű) betegnél súlyos szisztémás fertőzés (pl. meningococcaemia) gyanúját veti fel → MSTR 2.",
      "condition": [
        {
          "mezo": "kiutesJelleg",
          "egyenlo": "purpura_petechia_beteg"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "ctas",
          "page": 163
        }
      ],
      "notes": "CTAS COT-2008 Rash (DIA 163): »2 | Purpuric or petechial rash; appears ill«. A magyar forrásban explicit purpura-sor nincs → CTAS-döntőbíró. Gyermeknél kiemelten kritikus (meningococcaemia).",
      "conflicts": [],
      "csakPanaszok": [
        "kiutes"
      ],
      "group": "secondary"
    },
    {
      "id": "kiutes_arc_periorbitalis_cellulitis",
      "name": "Arc-cellulitis (különösen periorbitális) → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Az arc — különösen a szemkörnyék — cellulitise gyorsan progrediáló, látást/központi idegrendszert veszélyeztető fertőzés → MSTR 2.",
      "condition": [
        {
          "mezo": "kiutesJelleg",
          "egyenlo": "arc_periorbitalis_cellulitis"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "ctas",
          "page": 163
        },
        {
          "doc": "ctas",
          "page": 164
        }
      ],
      "notes": "CTAS COT-2008 Rash (DIA 163) és Localized swelling/redness (DIA 164): »2 | Facial cellulitis, particularly periorbital area«.",
      "conflicts": [],
      "csakPanaszok": [
        "kiutes"
      ],
      "group": "secondary"
    },
    {
      "id": "kiutes_lokalizalt_cellulitis",
      "name": "Kiütés: lokalizált cellulitis → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Lokalizált cellulitis (körülírt, meleg, fájdalmas, terjedő bőrpír) → MSTR 4. Lokalizált, nem gyulladt kiütés MSTR 5 marad.",
      "condition": [
        {
          "mezo": "kiutesJelleg",
          "egyenlo": "lokalizalt_cellulitis"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "ctas",
          "page": 163
        },
        {
          "doc": "jegyzet",
          "page": 145
        }
      ],
      "notes": "CTAS COT-2008 Rash (DIA 163): »4 | Localized cellulitis; 5 | Localized rash«. Jegyzet o.145 a lokalizált cellulitis→MSTR 4 elvet a bőrpír-panasznál rögzíti.",
      "conflicts": [],
      "csakPanaszok": [
        "kiutes"
      ],
      "group": "secondary"
    },
    {
      "id": "szemkornyeki_gyulladt_cellulitis",
      "name": "Szemkörnyéki duzzanat: periorbitális cellulitis gyanú → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Gyulladt (bőrpírrel, lázzal, fájdalommal járó) szemkörnyéki duzzanat periorbitális/orbitális cellulitis gyanúját veti fel → MSTR 2. Nem gyulladt duzzanat MSTR 5 marad.",
      "condition": [
        {
          "mezo": "szemkornyekiDuzzanatJelleg",
          "egyenlo": "gyulladt_cellulitis_gyanus"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "ctas",
          "page": 164
        },
        {
          "doc": "ctas",
          "page": 133
        }
      ],
      "notes": "CTAS COT-2008 DIA 164: »2 | Facial cellulitis, particularly periorbital area«; DIA 133 (Periorbital swelling) alapszint: »5 | Periorbital swelling«. Az audit előtt a panasznak egyetlen módosítója sem volt — a gyulladt periorbitális duzzanat baseline 5-ön maradt volna.",
      "conflicts": [],
      "csakPanaszok": [
        "szemkornyeki-duzzanat"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_dysphagia_nyaladzas_stridor",
      "name": "Nyelési nehezítettség: nyáladzás + stridor → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Nyáladzás és stridor együttes jelenléte nyelési nehezítettségnél felső légúti elzáródás/veszélyeztetettség jele (pl. epiglottitis, teljes elzáródáshoz közeli idegen test) → MSTR 2.",
      "condition": [
        {
          "mezo": "nyelesiNehezitettsegJelleg",
          "egyenlo": "nyaladzas_stridor"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "mstr"
        }
      ],
      "notes": "MSOTKE-MSTR munkacsoport hivatalos poszter, 'Felülvizsgált módosítók' tábla: »Nyelésképtelenség / nyelési zavar/ nehezítettség — Nyáladzás és stridor → MSTR 2«.",
      "conflicts": [],
      "csakPanaszok": [
        "nyelesi-nehezitettseg-dysphagia"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_dysphagia_idegen_test",
      "name": "Nyelési nehezítettség: lehetséges idegen test → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Lehetséges nyelőcsövi/légúti idegen test nyelési nehezítettség hátterében → MSTR 3.",
      "condition": [
        {
          "mezo": "nyelesiNehezitettsegJelleg",
          "egyenlo": "lehetseges_idegen_test"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "mstr"
        }
      ],
      "notes": "MSOTKE-MSTR munkacsoport hivatalos poszter, 'Felülvizsgált módosítók' tábla: »Nyelésképtelenség / nyelési zavar/ nehezítettség — Lehetséges idegen test → MSTR 3«. Megegyezik a korábbi alapszinttel (baseline_nyelesi_nehezitettseg_dysphagia) — itt explicit szabályként is rögzítve az átláthatóság kedvéért.",
      "conflicts": [],
      "csakPanaszok": [
        "nyelesi-nehezitettseg-dysphagia"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_allergia_anafilaxia",
      "name": "Aktívan zajló anafilaxia gyanú → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Aktívan zajló anafilaxia (légúti szűkület/stridor, hypotensio, sokk) azonnali, MSTR 1 ellátást igényel.",
      "condition": [
        {
          "mezo": "allergiaReakcio",
          "egyenlo": "aktiv_anafilaxia"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "tankonyv",
          "page": 25
        },
        {
          "doc": "ctas"
        }
      ],
      "notes": "MSTR 1 def (tankönyv o.25): instabil vitálisok/életveszély. CTAS Allergic reaction: VS-instabil → 1.",
      "conflicts": [],
      "csakPanaszok": [
        "allergias-reakcio",
        "harapas"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_allergia_korabbi",
      "name": "Korábbi súlyos (anafilaxiás) reakció → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Anamnézisben korábbi súlyos/anafilaxiás reakció → fokozott kockázat, MSTR 2.",
      "condition": [
        {
          "mezo": "allergiaReakcio",
          "egyenlo": "korabbi_sulyos_reakcio"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "CTAS COT-2008 Allergic reaction / Bite: »2 | Previous severe reaction«.",
      "conflicts": [],
      "csakPanaszok": [
        "allergias-reakcio",
        "harapas"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_megvonas_gorcs",
      "name": "Megvonás: zajló görcs / delirium tremens → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Zajló görcs vagy delirium tremens azonnali, MSTR 1 ellátást igényel.",
      "condition": [
        {
          "mezo": "megvonasSulyossag",
          "egyenlo": "zajlo_gorcs_dt"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "CTAS COT-2008: folyamatos görcs → 1 (LOC-kritérium); delirium tremens életveszélyes.",
      "conflicts": [],
      "csakPanaszok": [
        "megvonasi-tunetek"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_megvonas_kozelmultbeli",
      "name": "Megvonás: közelmúltbeli görcs / posztiktális / agitált → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Közelmúltbeli görcs, posztiktális állapot vagy agitáció → MSTR 2.",
      "condition": [
        {
          "mezo": "megvonasSulyossag",
          "egyenlo": "kozelmultbeli_gorcs_agitalt"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "CTAS COT-2008 Substance withdrawal: »2 | Recent seizures, post ictal, agitated«.",
      "conflicts": [],
      "csakPanaszok": [
        "megvonasi-tunetek"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_gerinc_neurodeficit",
      "name": "Gerinc: neuro-deficit ± vizelet/széklet zavar → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Hát-/gerincpanaszhoz társuló neurológiai deficit (±vizelet-/székletürítési zavar) cauda equina / gerincvelő-érintettség gyanúját veti fel → MSTR 2.",
      "condition": [
        {
          "mezo": "gerincNeuroDeficit",
          "egyenlo": "neuro_deficit"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "CTAS COT-2008 Back pain: »2 | Neuro-deficit +/- bowel bladder problems«.",
      "conflicts": [],
      "csakPanaszok": [
        "hat-fajdalom",
        "traumas-hat-gerinc-serules"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_latas_akut",
      "name": "Akut / hirtelen látásváltozás → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Akut vagy hirtelen fellépő látásváltozás/látásvesztés időérzékeny, potenciálisan látást veszélyeztető (pl. érelzáródás, retina-leválás, akut glaukóma, neuro-ophthalmológiai) állapot → MSTR 2.",
      "condition": [
        {
          "mezo": "latasValtozas",
          "egyenlo": "akut_hirtelen"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "CTAS COT-2008 Visual disturbance: »2 | acute or abrupt change in vision«.",
      "conflicts": [],
      "csakPanaszok": [
        "latasi-zavarok",
        "kettoslatas"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_latas_kronikus",
      "name": "Krónikus / fokozatos látásváltozás → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Krónikus, fokozatos látásváltozás → MSTR 4.",
      "condition": [
        {
          "mezo": "latasValtozas",
          "egyenlo": "kronikus_fokozatos"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "CTAS COT-2008 Visual disturbance: »4 | chronic/gradual change in vision«.",
      "conflicts": [],
      "csakPanaszok": [
        "latasi-zavarok",
        "kettoslatas"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_immunszupprimalt_laz",
      "name": "Immunszupprimált beteg lázzal → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Immunszupprimált betegnél (neutropenia/kemoterápia/szteroid/transzplantált/onkológiai/sarlósejtes/VP-shunt) már enyhe láz is súlyos fertőzés/szepszis jele lehet → MSTR 2, bármely korban.",
      "condition": [
        {
          "mezo": "immunszupprimalt",
          "egyenlo": true
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "tankonyv",
          "page": 69
        },
        {
          "doc": "tankonyv",
          "page": 35
        },
        {
          "doc": "ctas"
        }
      ],
      "notes": "Tankönyv o.69: »enyhe láz is szepszis jele lehet immunszupprimált gyermekeknél«; o.35 immunhiányos beteg. CTAS Fever: »2 | Immunocompromised: neutropenia, chemotherapy or immunosuppressive drugs«. Eddig a mező be volt vezetve, de EGYETLEN szabály sem használta (alá-triázs) — most bekötve a Láz panaszhoz.",
      "conflicts": [],
      "csakPanaszok": [
        "laz"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_fejserules_fokalis",
      "name": "Fejsérülés: új fokális neurológiai tünet → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Fejsérüléshez társuló ÚJ fokális neurológiai tünet → MSTR 2.",
      "condition": [
        {
          "mezo": "fejserulesNeuro",
          "egyenlo": "uj_fokalis"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "CTAS COT-2008 Head injury: »2 | New focal neurologic findings«.",
      "conflicts": [],
      "csakPanaszok": [
        "fejserules"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_szedules_nem_pozicionalis",
      "name": "Szédülés: nem pozícionális (lehetséges CVA) → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Nem pozícionális szédülés (nem a testhelyzet-változtatásra jelentkező), ± egyéb neurológiai tünet, hátterében poszterior keringési területi CVA (stroke) állhat → MSTR 2.",
      "condition": [
        {
          "mezo": "szedulesTipus",
          "egyenlo": "nem_pozicionalis"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 288
        }
      ],
      "notes": "Jegyzet o.288: »Szédülés (centrális, lehetséges CVA vagy perifériás) — MSTR 2 - 'nem pozícionális +/- egyéb neurológiai tünetek'«. Ádám kollégái pilot-tesztjében találták: a szédülésnek eddig NULLA panasz-specifikus módosítója volt (mindig MSTR 3), holott a saját forrásunk explicit módosító-létrát ad.",
      "conflicts": [],
      "csakPanaszok": [
        "szedules"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_szedules_pozicionalis",
      "name": "Szédülés: pozícionális, egyéb tünet nélkül → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Pozícionális szédülés (testhelyzet-változtatásra jelentkező), egyéb neurológiai tünet nélkül → MSTR 3.",
      "condition": [
        {
          "mezo": "szedulesTipus",
          "egyenlo": "pozicionalis"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 288
        }
      ],
      "notes": "Jegyzet o.288: »MSTR 3 - 'pozícionális egyéb neurológiai tünetek nélkül'«. Megegyezik a korábbi alapszinttel (baseline_szedules) — itt explicit szabályként is rögzítve az átláthatóság kedvéért.",
      "conflicts": [],
      "csakPanaszok": [
        "szedules"
      ],
      "group": "secondary"
    },
    {
      "id": "deesc_szedules_kronikus",
      "name": "Szédülés: krónikus állapot → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Krónikus / visszatérő szédülés → MSTR 4.",
      "condition": [
        {
          "mezo": "szedulesTipus",
          "egyenlo": "kronikus"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 288
        }
      ],
      "notes": "Jegyzet o.288: »MSTR 4 – ha krónikus állapot«.",
      "conflicts": [],
      "csakPanaszok": [
        "szedules"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_fejfajas_hirtelen_legrosszabb",
      "name": "Fejfájás: hirtelen, „eddigi legrosszabb” → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Hirtelen kialakuló, a beteg által „eddigi legrosszabb”-ként jellemzett fejfájás (SAH-gyanú) → MSTR 2.",
      "condition": [
        {
          "mezo": "fejfajasJelleg",
          "egyenlo": "hirtelen_legrosszabb"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "tankonyv",
          "page": 25
        },
        {
          "doc": "ctas"
        }
      ],
      "notes": "Tankönyv o.25 (MSTR 2 kritérium-lista): »Súlyos fejfájás (erős, hirtelen fellépő, 'még sohasem fájt így a fejem' jellegű)«. CTAS COT-2008 Headache (DIA 109): »2 | sudden, severe, worst ever«. Kollégák pilot-tesztje találta: a fejfájásnak eddig NULLA panasz-specifikus módosítója volt (mindig MSTR 5).",
      "conflicts": [],
      "csakPanaszok": [
        "fejfajas"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_fejfajas_latasi_zavar",
      "name": "Fejfájás: látásélesség-zavar ± szemfájdalom → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Fejfájást kísérő látásélesség-zavar ± szemfájdalom (pl. akut glaukóma, temporális arteritis gyanúja) → MSTR 2.",
      "condition": [
        {
          "mezo": "fejfajasJelleg",
          "egyenlo": "latasi_zavar_szemfajdalom"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "CTAS COT-2008 Headache (DIA 109): »2 | visual acuity disturbance +/- eye pain«.",
      "conflicts": [],
      "csakPanaszok": [
        "fejfajas"
      ],
      "group": "secondary"
    },
    {
      "id": "deesc_fejfajas_kronikus",
      "name": "Fejfájás: krónikus / visszatérő → MSTR 5",
      "applies_to": "mind",
      "condition_text": "Krónikus vagy visszatérő fejfájás → MSTR 5.",
      "condition": [
        {
          "mezo": "fejfajasJelleg",
          "egyenlo": "kronikus_visszaterodo"
        }
      ],
      "level": 5,
      "source": [
        {
          "doc": "ctas"
        }
      ],
      "notes": "CTAS COT-2008 Headache (DIA 109): »5 | Chronic or recurring headache«. Megegyezik a korábbi alapszinttel (baseline_fejfajas).",
      "conflicts": [],
      "csakPanaszok": [
        "fejfajas"
      ],
      "group": "secondary"
    },
    {
      "id": "esc_laz_objektiv_sirs",
      "name": "Láz: ≥3 objektív SIRS-kritérium → MSTR 2 (küllemtől függetlenül)",
      "applies_to": "mind",
      "condition_text": "Láz (>38°C) + tachycardia (HR>90) + tachypnoe (RR>20) — a bevitt vitálparaméterekből objektíven számított 3 pozitív SIRS-kritérium önmagában MSTR 2-t indokol, FÜGGETLENÜL a beteg szubjektív megjelenésétől (a fiatal, kompenzált beteg is 'jól nézhet ki').",
      "condition": [
        {
          "mezo": "eletkorEv",
          "min": 16
        },
        {
          "mezo": "temp",
          "min": 38.01
        },
        {
          "mezo": "hr",
          "min": 90.01
        },
        {
          "mezo": "rr",
          "min": 20.01
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "tankonyv",
          "page": 25
        },
        {
          "doc": "ctas",
          "page": 11
        },
        {
          "doc": "mstr"
        }
      ],
      "notes": "Tankönyv o.25 (MSTR 2 kritérium-lista): »Láz (hőmérséklet > 38°C) + szeptikus küllem és tünetek (legalább 3+ SIRS kritérium)«. CTAS COT-2008 'Adults: Temperature/Sepsis' (DIA 11): SIRS = temp>38/<36, HR>90, RR>20 (vagy PaCO2<32), WBC-eltérés — »Looks septic: has 3 positive SIRS criteria« → MSTR 2, FÜGGETLENÜL a küllemtől. Kollégák pilot-tesztje találta: HR135+RR22+T39.5 esetén a rendszer MSTR 4-et adott (csak a szubjektív 'jó általános állapot' küllem-választás alapján) — objektív kereszt-ellenőrzés hiányzott. WBC nem elérhető triázskor, ezért csak a 3 elérhető kritérium (láz, HR, RR) alapján számolunk — ez pontosan megfelel a forrás 'legalább 3+ SIRS kritérium' megfogalmazásának. KORHATÁR (2026-07-21, MSOTKE-MSTR hivatalos poszter alapján, Ádám kifejezett utasítására \"ahol ellentmondás van, a poszter az irányadó\"): a poszter a láz/SIRS táblát explicit \"kor ≥16 év\"-től érvényesnek jelzi (nem a rendszer általános 18 éves gyermek/felnőtt határától) — enélkül a HR/RR felnőtt-küszöbök (>90/>20) kisgyermeknél tévesen tüzelnének, mert ott ez az életkorhoz képest NORMÁL érték lehet (a gyermek saját, kor-sávos HR/RR-tábláink külön kezelik ezt 18 éves korig).",
      "conflicts": [],
      "csakPanaszok": [
        "laz"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_01",
      "name": "Szív eredetű mellkasi fájdalom → MSTR 2 (módosító nélkül)",
      "applies_to": "mind",
      "condition_text": "Ha a beteget a 'Mellkasi fájdalom szív eredettel' CEDIS vezető panasz alapján osztályozzák, akkor – feltéve, hogy nem sokkos és nincs súlyos nehézlégzése (melyek alapján az 1. szintre kerülne) – azonnal MSTR 2. szintre értékelhető, módosító használata nem szükséges. Iszkémiás szív eredetű mellkasi fájdalom esetén a beteg akkor sem kerülhet MSTR 2-nél alacsonyabb kategóriába, ha a fájdalma már megszűnt (10 percen belül EKG szükséges). Az anamnézisben AMI/angina/CABG vagy ápolói ACS-gyanú szintén 2. szintet jelent elmúlt fájdalomnál is.",
      "condition": [],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 133
        },
        {
          "doc": "jegyzet",
          "page": 50
        },
        {
          "doc": "jegyzet",
          "page": 51
        },
        {
          "doc": "tankonyv",
          "page": 25
        },
        {
          "doc": "tankonyv",
          "page": 26
        }
      ],
      "notes": "A panasz kiválasztásakor érvényesülő kiinduló szint. A sokk (keringesiAllapot=sokk) és a súlyos nehézlégzés (nehezlegzesFok=sulyos) elsődleges módosító szabályai ennél magasabbra (MSTR 1) viszik a beteget – azok erősebbek.",
      "conflicts": [],
      "csakPanaszok": [
        "mellkasi-fajdalom-sziv-eredetu"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_02",
      "name": "Nem szív eredetű mellkasi fájdalom, tépő-szaggató jelleg → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Nem szív eredetűnek tűnő mellkasi fájdalom + más jelentős (tépő, szaggató) mellkasi fájdalom = MSTR 2 (másodlagos módosító). Alaphelyzetben (<8/10 fájdalom ÉS hemodinamikailag stabil) MSTR 3 lenne, de a tépő-szaggató jelleg a beteget MSTR 2-be sorolja.",
      "condition": [
        {
          "mezo": "mellkasiNemSzivJelleg",
          "egyenlo": "tepo_szaggato"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 96
        },
        {
          "doc": "jegyzet",
          "page": 103
        },
        {
          "doc": "jegyzet",
          "page": 156
        },
        {
          "doc": "jegyzet",
          "page": 249
        },
        {
          "doc": "jegyzet",
          "page": 255
        },
        {
          "doc": "jegyzet",
          "page": 285
        }
      ],
      "notes": "A masodlagos_82 szabály panaszra szűkített (csakPanaszok) változata – összefésülés/deduplikáció szükséges.",
      "conflicts": [
        "masodlagos_82"
      ],
      "csakPanaszok": [
        "mellkasi-fajdalom-nem-sziv-eredetu"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_03",
      "name": "Nem szív eredetű mellkasi fájdalom, egyéb (nem tépő-szaggató) jelleg → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Mellkasi fájdalom nem szív eredettel: ha 8/10-nél kisebb fájdalommal jár ÉS a beteg hemodinamikailag stabil, akkor MSTR 3. Példa: 22 éves edzett sportoló, napok óta fájó mellkas.",
      "condition": [
        {
          "mezo": "mellkasiNemSzivJelleg",
          "egyenlo": "egyeb"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 96
        },
        {
          "doc": "jegyzet",
          "page": 249
        },
        {
          "doc": "jegyzet",
          "page": 285
        },
        {
          "doc": "jegyzet",
          "page": 53
        }
      ],
      "notes": "A forrás feltétele (<8/10 fájdalom, hemodinamikailag stabil) a condition_text-ben; 8-10/10 fájdalomnál a centrális-akut-súlyos fájdalom elsődleges módosító (MSTR 2), hemodinamikai eltérésnél a keringési elsődleges módosító úgyis magasabb szintet ad – azok erősebbek.",
      "conflicts": [],
      "csakPanaszok": [
        "mellkasi-fajdalom-nem-sziv-eredetu"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_04",
      "name": "Végtaggyengeség / CVA (stroke): tünetkezdet < 4,5 óra → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Stroke gyanú (végtaggyengeség / CVA tünetek): ha a beteg a tünetek kialakulásától számított 4,5 órán belül jelentkezik, MSTR 2, mert a thrombolízis terápiás időablakon belül van (másodlagos módosító).",
      "condition": [
        {
          "mezo": "strokeTunetKezdet",
          "egyenlo": "negy_es_fel_oran_belul"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 103
        },
        {
          "doc": "jegyzet",
          "page": 154
        },
        {
          "doc": "jegyzet",
          "page": 156
        },
        {
          "doc": "jegyzet",
          "page": 255
        }
      ],
      "notes": "Az iszkémiás stroke thrombolízis időablaka 3 óráról 4,5 órára nőtt; a helyi standardnak megfelelő időintervallumot kell használni (jegyzet 103, 156).",
      "conflicts": [],
      "csakPanaszok": [
        "vegtaggyengeseg-cva-tunetek"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_05",
      "name": "Végtaggyengeség / CVA (stroke): tünetkezdet > 4,5 óra vagy megszűnt tünetek, stabil → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Ha a tünetek több mint 4,5 órája kezdődtek, vagy a tünetek megszűntek, és a vitális paraméterek stabilak, a beteg MSTR 3. szintű (másodlagos módosító).",
      "condition": [
        {
          "mezo": "strokeTunetKezdet",
          "egyenlo": "tul_negy_es_fel_oran_vagy_megszunt"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 103
        },
        {
          "doc": "jegyzet",
          "page": 154
        },
        {
          "doc": "jegyzet",
          "page": 156
        },
        {
          "doc": "jegyzet",
          "page": 255
        }
      ],
      "notes": "A jegyzet 156. oldalán oktatói megjegyzés: 'A trombektómia lehetősége miatt viszont MSTR 2 24 órán belül!' – ez ellentmond a 154. oldali kidolgozott esetnek (5 órás tünetkezdet → MSTR 3). A táblázatos szabályt kódoltuk; a 24 órás trombektómia-megjegyzés helyi protokoll szerinti fel-triázsolási lehetőségként kezelendő (lásd open_questions).",
      "conflicts": [],
      "csakPanaszok": [
        "vegtaggyengeseg-cva-tunetek"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_06",
      "name": "Görcsroham: aktívan zajló görcsroham → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Folyamatban lévő (aktív) görcsroham = MSTR 1. Az 'Epilepszia – aktív görcsroham' azon panaszok egyike, amelyeknél az egyetlen kiosztható MSTR szint az 1.",
      "condition": [
        {
          "mezo": "gorcsAllapot",
          "egyenlo": "aktiv"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 286
        },
        {
          "doc": "jegyzet",
          "page": 315
        },
        {
          "doc": "jegyzet",
          "page": 327
        },
        {
          "doc": "tankonyv",
          "page": 78
        }
      ],
      "notes": "Aktív rohamnál a vitális paraméterek mérése triázs szempontból szükségtelen (jegyzet 327).",
      "conflicts": [],
      "csakPanaszok": [
        "gorcsroham"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_07",
      "name": "Görcsroham: posztiktális tenebrozitás / módosult tudat → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Görcsroham utáni tenebrositás (ködösség), megtartott (nem tisztult) tudatzavar = MSTR 2 (másodlagos módosító).",
      "condition": [
        {
          "mezo": "gorcsAllapot",
          "egyenlo": "posztiktalis_modosult"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 286
        },
        {
          "doc": "jegyzet",
          "page": 315
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "gorcsroham"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_08",
      "name": "Görcsroham: rohamon túl, teljesen kitisztult tudat, stabil → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Ha a beteg túl van a rohamon, teljesen kitisztult (normális tudatállapot) és stabil = MSTR 3; ilyenkor nincs alkalmazható elsődleges módosító. Gyermeknél is: 'görcsroham' vezető panasz + 'feltisztult, tudat állapota tiszta' másodlagos módosító = MSTR 3.",
      "condition": [
        {
          "mezo": "gorcsAllapot",
          "egyenlo": "kitisztult"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 286
        },
        {
          "doc": "jegyzet",
          "page": 315
        },
        {
          "doc": "jegyzet",
          "page": 324
        }
      ],
      "notes": "A görcsrohamok nagyrészt idiopátiás eredetűek, de egyéb okokat (pl. szívbetegség, hőguta) sem szabad figyelmen kívül hagyni (jegyzet 315).",
      "conflicts": [],
      "csakPanaszok": [
        "gorcsroham"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_09",
      "name": "Palpitáció / ritmuszavar: korábbi CPR-igényű, keringésmegállással járó ritmuszavar → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Palpitáció/ritmuszavar (ha egyébként nincs olyan elsődleges meghatározó, amely a triázs szint súlyosabbá tételét indokolná): MSTR 2, ha a beteg történetében olyan súlyos ritmuszavar fordult elő, amely során keringésmegállás lépett fel és CPR-t igényelt (korábbi dokumentált CPR).",
      "condition": [
        {
          "mezo": "palpitacioModosito",
          "egyenlo": "korabbi_cpr_ritmuszavar"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 287
        },
        {
          "doc": "tankonyv",
          "page": 78
        }
      ],
      "notes": "A masodlagos_80 szabály panaszra szűkített (csakPanaszok) változata – összefésülés/deduplikáció szükséges.",
      "conflicts": [
        "masodlagos_80"
      ],
      "csakPanaszok": [
        "szivdobogas-erzes-rendszertelen-szivdobbanasok"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_10",
      "name": "Palpitáció / ritmuszavar: akut, friss, folyamatban lévő panasz → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Palpitáció/ritmuszavar: 'akut, friss panasz kialakulás, folyamatban van' = MSTR 3 (ha nincs súlyosabb elsődleges meghatározó).",
      "condition": [
        {
          "mezo": "palpitacioModosito",
          "egyenlo": "akut_friss_folyamatban"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 287
        }
      ],
      "notes": "A masodlagos_81 szabály panaszra szűkített (csakPanaszok) változata – összefésülés/deduplikáció szükséges.",
      "conflicts": [
        "masodlagos_81"
      ],
      "csakPanaszok": [
        "szivdobogas-erzes-rendszertelen-szivdobbanasok"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_11",
      "name": "Syncope/presyncope: prodromális tünetek nélkül → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Syncope/presyncope = MSTR 2, ha 'prodromális tünetek nélkül' lépett fel.",
      "condition": [
        {
          "mezo": "syncopeModosito",
          "egyenlo": "prodromalis_tunetek_nelkul"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 287
        },
        {
          "doc": "tankonyv",
          "page": 78
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "ajulas-ajulaskozeli-allapot"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_12",
      "name": "Syncope/presyncope: új keletű ritmuszavar / szabálytalan pulzus / pulzusváltozás → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Syncope/presyncope = MSTR 2, ha 'új keletű ritmuszavar, nem szabályos pulzus és/vagy ismert vagy vélt pulzus változás' áll fenn.",
      "condition": [
        {
          "mezo": "syncopeModosito",
          "egyenlo": "uj_ritmuszavar_pulzusvaltozas"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 287
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "ajulas-ajulaskozeli-allapot"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_13",
      "name": "Syncope/presyncope: terhelésre fellépő → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Syncope/presyncope = MSTR 2, ha 'terhelésre fellépő'.",
      "condition": [
        {
          "mezo": "syncopeModosito",
          "egyenlo": "terhelesre_fellepo"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 287
        }
      ],
      "notes": "A forrás a syncope/presyncope panaszhoz csak MSTR 2 feltételeket ad meg; a feltételek egyikét sem teljesítő syncope szintjét nem határozza meg.",
      "conflicts": [],
      "csakPanaszok": [
        "ajulas-ajulaskozeli-allapot"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_14",
      "name": "Intoxikáció / túladagolás: ismeretlen vagy magas kockázatú anyag elfogyasztása → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Intoxikáció/túladagolás vezető panasz jelentős másodlagos módosítója: 'ismeretlen vagy magas kockázatú anyag elfogyasztása' = MSTR 2. Példa: ismeretlen mennyiségű Digoxin lenyelése – a Digoxin magas kockázatú anyag (van antidotuma).",
      "condition": [
        {
          "mezo": "toxAnyagKockazat",
          "egyenlo": "ismeretlen_vagy_magas_kockazatu"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 328
        }
      ],
      "notes": "Akkor is MSTR 2, ha az elsődleges megtekintés alapján (nem sokkos, nincs nehézlégzés, tiszta tudat) csak 3-as szint adódna.",
      "conflicts": [],
      "csakPanaszok": [
        "szajon-at-torteno-tuladagolas",
        "gyogyszerrel-torteno-visszaeles-mergezes"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_15",
      "name": "Intoxikáció / túladagolás (gyermek): hemodinamikai állapotváltozás → MSTR 1",
      "applies_to": "gyermek",
      "condition_text": "Intoxikáció/túladagolás esetén a gyermek haemodinamikai állapotában beálló bármely változás = MSTR 1.",
      "condition": [
        {
          "mezo": "keringesiAllapot",
          "egyenlo": "instabil"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 328
        }
      ],
      "notes": "A forrás 'bármely változás'-t mond; a mezőkészletben ezt a keringesiAllapot=instabil érték fedi le (a sokk elsődleges módosítóként amúgy is MSTR 1). A forrás gyermek (Digoxin-eset) kontextusban fogalmaz, ezért applies_to=gyermek; felnőttre kiterjesztése nyitott kérdés.",
      "conflicts": [],
      "csakPanaszok": [
        "szajon-at-torteno-tuladagolas",
        "gyogyszerrel-torteno-visszaeles-mergezes"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_kardio_neuro_16",
      "name": "Gázmérgezés (mérgesgáz/füst belélegzés): tiszta tudat, normál vitális paraméterek → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Ha a triázs ápoló a 'mérgesgáz belélegzést' választja vezető panasznak és a beteg tudata tiszta, vitális paraméterei normálak, a 'füst belélegzés' másodlagos módosító alkalmazásával = MSTR 3.",
      "condition": [
        {
          "mezo": "keringesiAllapot",
          "egyenlo": "normal"
        },
        {
          "mezo": "gcs",
          "min": 15
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 302
        }
      ],
      "notes": "FIGYELEM: szándékos (öngyilkossági célú) szénmonoxid-expozíciónál a forrás szerint a helyes vezető panasz a Depresszió/Öngyilkossági kísérlet, amely MSTR 2 (a CO-belélegzésnél az elhalálozási arány nagyon magas, a szénmonoxid halálos). Generikus 'CO-/gázmérgezés → 2' szabályt a forrás NEM mond ki – lásd open_questions.",
      "conflicts": [],
      "csakPanaszok": [
        "gazmergezes"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_01",
      "name": "Kötéscsere (szövődménymentes seb) → MSTR 5",
      "applies_to": "mind",
      "condition_text": "Szövődményektől mentes seb esetén végzendő kötéscsere, egyéb panasz nélkül → 5. szint (Halasztható).",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 59
        },
        {
          "doc": "jegyzet",
          "page": 60
        },
        {
          "doc": "tankonyv",
          "page": 27
        },
        {
          "doc": "tankonyv",
          "page": 52
        }
      ],
      "notes": "A jegyzet 5. szintű példa-diáján és a 60. oldali esettanulmányban (34 éves férfi, kötéscsere → MSTR 5) szerepel; a tankönyv 27. o. felnőtt és 52. o. gyermek példalistája is tartalmazza. Ha a seb szövődményes/fertőzött vagy egyéb panasz van, a beteget az aktuális panasz és a módosítók szerint kell triázsolni.",
      "conflicts": [],
      "csakPanaszok": [
        "kotescsere"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_02",
      "name": "Gyógyszerfelírás kérése (rendszeres gyógyszer pótlása) → MSTR 5",
      "applies_to": "mind",
      "condition_text": "Gyógyszerfelírás kérése, amennyiben a szokásos, rendszeresen szedett gyógyszer pótlásáról van szó (nem tüneti szerről), az elsődleges módosítók normál tartományban vannak és az alapállapot nem romlott → 5. szint. Ha tüneti szert kér, az aktuális panasz alapján kell triázsolni.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 59
        },
        {
          "doc": "tankonyv",
          "page": 27
        },
        {
          "doc": "tankonyv",
          "page": 52
        }
      ],
      "notes": "Jegyzet 59. o.: meg kell győződni, hogy nem tüneti szerről van szó (mikor fogyott el, van-e panasz, bevette-e a mai adagot); ha az elsődleges módosítók normálisak és az alapbetegség nem romlott, a beteg biztonságban várhat.",
      "conflicts": [],
      "csakPanaszok": [
        "gyogyszerfeliras"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_03",
      "name": "Képalkotó vizsgálat eredményének bemutatása/értékelése → MSTR 5",
      "applies_to": "mind",
      "condition_text": "Előjegyzett képalkotó vizsgálat (UH/CT/MR) eredményének bemutatására/értékelésére visszatérő beteg, akinek nincs panasza/tünete és az elsődleges módosítók normálisak → automatikusan 5. szint. Ha a panaszok nem múltak el vagy bármely elsődleges módosító kóros, annak megfelelően kell triázsolni.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 292
        },
        {
          "doc": "jegyzet",
          "page": 182
        },
        {
          "doc": "tankonyv",
          "page": 78
        }
      ],
      "notes": "Jegyzet 182. o. esettanulmány: 64 éves férfi, CT-eredmény bemutatása, panaszmentes, normál vitálisok → MSTR 5 (Halasztható).",
      "conflicts": [],
      "csakPanaszok": [
        "kepalkoto-vizsgalatok"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_04",
      "name": "Fertőző beteggel történt érintkezés (expozíció) → MSTR 5",
      "applies_to": "mind",
      "condition_text": "Fertőző beteggel történt érintkezés/expozíció panasz automatikusan 5. szint, amennyiben nincs egyéb alkalmazható módosító.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 292
        },
        {
          "doc": "tankonyv",
          "page": 78
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "fertozo-beteggel-torteno-erintkezes"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_05",
      "name": "Orrdugulás / szénanátha → MSTR 5",
      "applies_to": "mind",
      "condition_text": "Orrdugulás/szénanátha panasz automatikusan 5. szint, amennyiben nincs egyéb alkalmazható módosító.",
      "condition": [],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 292
        },
        {
          "doc": "tankonyv",
          "page": 78
        }
      ],
      "notes": "A jegyzet 292. o. a szénanáthát, a képalkotó-eredmény értékelését és a fertőző expozíciót együtt sorolja automatikus MSTR 5-be.",
      "conflicts": [],
      "csakPanaszok": [
        "orrdugulas-szenanatha"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_06",
      "name": "Krónikus, nem fertőzött bőrelváltozás jó általános állapotban → MSTR 5",
      "applies_to": "mind",
      "condition_text": "Hónapok óta fennálló (krónikus), lokalizált bőrelváltozás/bőrseb, ismert fertőzés, utazás vagy háttér-krónikus betegség nélkül, jó általános állapotú betegnél: nincs meghatározó vagy módosító tényező, amely magasabb kategóriába sorolná → 5. szint (Halasztható).",
      "condition": [
        {
          "mezo": "borElvaltozasJelleg",
          "egyenlo": "kronikus_nem_fertozott"
        }
      ],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 281
        }
      ],
      "notes": "Jegyzet 281. o. esettanulmány: 7 éves kislány, ujján 6 hónapja sebes bőr, egészségesnek tűnik → MSTR 5. A jegyzet 289. o. szerint a lokalizált gyulladás/bőrpír (bőrgyógyászati panasz) MSTR 4 — az akut/gyulladt elváltozásra ez vonatkozik, ezért a krónikus, nem fertőzött formát külön mező különíti el.",
      "conflicts": [],
      "csakPanaszok": [
        "lokalizalt-duzzanat-borpir",
        "egyeb-bor-tunetek",
        "duzzanat-daganat-borkemenyedes"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_07",
      "name": "Sérülés (zúzódás/laceráció): sebvarrást nem igényel → MSTR 5",
      "applies_to": "mind",
      "condition_text": "Zúzódások, lacerációk: 'sebvarrást nem igényel' (pl. felületes horzsolás, számottevő vérzés és deformitás nélkül) → 5. szint.",
      "condition": [
        {
          "mezo": "sebJelleg",
          "egyenlo": "sebvarrast_nem_igenyel"
        }
      ],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 290
        },
        {
          "doc": "jegyzet",
          "page": 265
        }
      ],
      "notes": "Jegyzet 265. o. esettanulmány: 2 éves gyermek, kis magasságú esés, azonnali sírás, felületes horzsolás az orrhegyen, normál paraméterek, nincs fájdalom/vérzékenység → MSTR 5 (nincs felfelé soroló tényező). Ezért az arc/orr trauma panaszokra is kiterjesztve. | Dedup: tepett-szurt-seb eltávolítva — ott a sebModosito (trauma-patch) fedi ugyanezt, kettős kérdés elkerülése.",
      "conflicts": [],
      "csakPanaszok": [
        "horzsolas",
        "arc-trauma",
        "orr-serules",
        "sebellenorzes"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_08",
      "name": "Sérülés (zúzódás/laceráció): tamponált vérzés, sebvarrást igényel → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Zúzódások, lacerációk: 'tamponált vérzés', 'sebvarrást igényel' → 4. szint. Ha neurovaszkuláris panaszokkal jár = MSTR 2.",
      "condition": [
        {
          "mezo": "sebJelleg",
          "egyenlo": "sebvarrast_igenyel_tamponalt"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 290
        },
        {
          "doc": "tankonyv",
          "page": 78
        }
      ],
      "notes": "Tankönyv 78. o.: 'kisebb szakított/szúrásos sérülések (suturát igényel)' a 4. szint példája. | Dedup: tepett-szurt-seb eltávolítva — ott a sebModosito (trauma-patch) fedi ugyanezt, kettős kérdés elkerülése.",
      "conflicts": [],
      "csakPanaszok": [
        "horzsolas",
        "arc-trauma",
        "orr-serules",
        "sebellenorzes"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_09",
      "name": "Sérülés (zúzódás/laceráció): aktív vérzés, folyamatos nyomást igényel → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Zúzódások, lacerációk: 'aktív vérzés', amely folyamatos nyomást igényel → 3. szint. Amennyiben nem kontrollált artériás vérzés, 'AZONNALI' ellátást igényel.",
      "condition": [
        {
          "mezo": "sebJelleg",
          "egyenlo": "aktiv_verzes_nyomast_igenyel"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 290
        }
      ],
      "notes": "Nem kontrollált artériás vérzésnél a vérzékenység/keringési elsődleges módosítók (pl. elsodleges_felnott_38) szerint magasabb szint adandó. | Dedup: tepett-szurt-seb eltávolítva — ott a sebModosito (trauma-patch) fedi ugyanezt, kettős kérdés elkerülése.",
      "conflicts": [],
      "csakPanaszok": [
        "horzsolas",
        "arc-trauma",
        "orr-serules",
        "sebellenorzes"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_10",
      "name": "Sérülés (zúzódás/laceráció): összetett, komplex seb neurovaszkuláris panaszokkal → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Zúzódások, lacerációk: 'összetett, komplex seb – neurovaszkuláris panaszokkal' → 2. szint. A sebvarrást igénylő seb neurovaszkuláris panaszokkal szintén MSTR 2.",
      "condition": [
        {
          "mezo": "sebJelleg",
          "egyenlo": "komplex_neurovaszkularis"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 290
        }
      ],
      "notes": "Dedup: tepett-szurt-seb eltávolítva — ott a sebModosito (trauma-patch) fedi ugyanezt, kettős kérdés elkerülése.",
      "conflicts": [],
      "csakPanaszok": [
        "horzsolas",
        "arc-trauma",
        "orr-serules",
        "sebellenorzes"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_11",
      "name": "Vérhányás: aktív, friss piros vér hányása → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Vérhányásnál az ápoló szubjektív megítélése a vérmennyiségről (a véres széklet/melena szintezésével azonos elv): nagy mennyiségű, aktív friss piros vér hányása → 2. szint.",
      "condition": [
        {
          "mezo": "verhanyasJelleg",
          "egyenlo": "friss_piros"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 289
        },
        {
          "doc": "jegyzet",
          "page": 269
        },
        {
          "doc": "jegyzet",
          "page": 49
        }
      ],
      "notes": "Jegyzet 289. o.: a véres széklet/melena szintezés 'hasonló a Vérhányáshoz', ahol MSTR 2 = aktív friss piros vérzés. Jegyzet 269. o. gyermek eset: 4 éves, friss piros vért hány, súlyos beteg benyomás, vérzékenység-gyanú → MSTR 2. Jegyzet 49. o.: a 2. szint példái közt 'Vérhányás (ülő helyzetben szédül)'.",
      "conflicts": [],
      "csakPanaszok": [
        "verhanyas"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_12",
      "name": "Kávéaljszerű (kávézaccszerű) hányás stabil vitális paraméterekkel → MSTR 3",
      "applies_to": "mind",
      "condition_text": "A hányás és/vagy hányinger másodlagos módosítója a kávézaccszerű hányás/meléna alapján: kávéaljszerű hányadék, egyébként stabil vitális paraméterek mellett → 3. szint.",
      "condition": [
        {
          "mezo": "verhanyasJelleg",
          "egyenlo": "kavealjszeru"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 129
        }
      ],
      "notes": "Jegyzet 129. o. esettanulmány: 61 éves nő, kávéaljszerű hányás, stabil vitálisok → MSTR 3.",
      "conflicts": [
        "masodlagos_11"
      ],
      "csakPanaszok": [
        "verhanyas",
        "hanyas-hanyinger"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_13",
      "name": "Nagy mennyiségű rektális vérzés vagy melena → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Véres széklet/melena, ha a vitális paraméterek egyébként normál, elfogadható szinten vannak: 'nagy mennyiségű rektális vérzés vagy melena' (aktív friss piros vérzés vagy gyakori, nagy mennyiségű véres széklet) → 2. szint.",
      "condition": [
        {
          "mezo": "rektalisVerzesMennyiseg",
          "egyenlo": "nagy"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 289
        }
      ],
      "notes": "Az ápoló szubjektív megítélése a kifolyt vérmennyiségről.",
      "conflicts": [],
      "csakPanaszok": [
        "veres-szeklet-melena"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_14",
      "name": "Közepes mennyiségű rektális vérzés vagy melena → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Véres széklet/melena, normál vitális paraméterek mellett: 'közepes mennyiségű rektális vérzés vagy melena' → 3. szint.",
      "condition": [
        {
          "mezo": "rektalisVerzesMennyiseg",
          "egyenlo": "kozepes"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 289
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "veres-szeklet-melena"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_15",
      "name": "Kis mennyiségű rektális vérzés → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Véres széklet/melena, normál vitális paraméterek mellett: 'kis mennyiségű rektális vérzés' (vér a WC-papíron, kis mennyiség) → 4. szint.",
      "condition": [
        {
          "mezo": "rektalisVerzesMennyiseg",
          "egyenlo": "kis"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 289
        },
        {
          "doc": "tankonyv",
          "page": 78
        }
      ],
      "notes": "Tankönyv 78. o.: 'véres széklet/meléna (kis mennyiségű vérzés a végbélből)' a 4. szint példája.",
      "conflicts": [],
      "csakPanaszok": [
        "veres-szeklet-melena"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_16",
      "name": "Masszív (nagy mennyiségű) hüvelyi vérzés → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Hüvelyi vérzésnél az ápoló szubjektív megítélése a vérmennyiségről (a véres széklet/melena szintezésével azonos elv): nagy mennyiségű / masszív hüvelyi vérzés → 2. szint. (A vérzékenység-táblázatban a masszív hüvelyi vérzés az életet veszélyeztető vérzések – MSTR 2 – között szerepel.)",
      "condition": [
        {
          "mezo": "huvelyiVerzesMennyiseg",
          "egyenlo": "nagy_massziv"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 289
        },
        {
          "doc": "jegyzet",
          "page": 153
        },
        {
          "doc": "tankonyv",
          "page": 39
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "huvelyi-verzes",
        "terhesseg-20-het",
        "menstruacios-problemak"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_17",
      "name": "Mérsékelt (nem jelentős) hüvelyi vérzés stabil vitális paraméterekkel → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Mérsékelt, nem jelentős mennyiségű hüvelyi vérzés, normál/stabil vitális paraméterek mellett → 3. szint. Terhesség < 20. hét esetén a 'Hüvelyi vérzés' és a 'Terhesség < 20 hét' vezető panasz módosítói ugyanazok, így az MSTR szint is azonos.",
      "condition": [
        {
          "mezo": "huvelyiVerzesMennyiseg",
          "egyenlo": "mersekelt"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 314
        },
        {
          "doc": "jegyzet",
          "page": 289
        },
        {
          "doc": "jegyzet",
          "page": 73
        }
      ],
      "notes": "Jegyzet 314. o. esettanulmány: 28 éves, 8 hetes terhes, mérsékelt hüvelyi vérzés, normál vitálisok → MSTR 3. Hemodinamikai instabilitás jelénél (pl. szédülés – jegyzet 279. o., 12 éves lány) MSTR 2 a keringési elsődleges módosító alapján.",
      "conflicts": [],
      "csakPanaszok": [
        "huvelyi-verzes",
        "terhesseg-20-het",
        "menstruacios-problemak"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_18",
      "name": "Nagy mennyiségű vagy véres hasmenés → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Hasmenés vezető panasz: nagy mennyiségű vagy véres hasmenés → 3. szint (Sürgős). A kiszáradás fokát külön, a globális 'dehidraciofok' másodlagos módosítóval (kb_masodlagos_07–10) is értékelni kell; ha az magasabb szintet indokol, az érvényesül.",
      "condition": [
        {
          "mezo": "hasmenesJelleg",
          "egyenlo": "nagy_veres"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "tankonyv",
          "page": 26
        }
      ],
      "notes": "Tankönyv 26. o. MSTR 3. szint példái közt: 'Hasmenés (nagy mennyiségű, vagy véres hasmenés)'. A folyadékhiány súlyosságát a globális dehidraciofok másodlagos módosító fedi le; a hasmenés mennyiségi/vérzési tengelyének alapszintje véres/nagy mennyiségű esetben 3.",
      "conflicts": [],
      "csakPanaszok": [
        "hasmenes"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_minor_gyermek_gasztro_19",
      "name": "Enyhe hasmenés (nincs jelentős folyadékvesztés/kiszáradás) → MSTR 5",
      "applies_to": "mind",
      "condition_text": "Hasmenés vezető panasz: enyhe hasmenés, nincs jelentős folyadékvesztés vagy kiszáradás, egyéb felfelé soroló módosító nélkül → 5. szint (Halasztható).",
      "condition": [
        {
          "mezo": "hasmenesJelleg",
          "egyenlo": "enyhe"
        }
      ],
      "level": 5,
      "source": [
        {
          "doc": "tankonyv",
          "page": 27
        }
      ],
      "notes": "Tankönyv 27. o. MSTR 5. szint példái közt: 'Hasmenés (enyhe, nincs jelentős folyadékvesztés vagy kiszáradás)'. A hányás/hányinger enyhe kiszáradással → 3 esetét nem itt kezeljük: azt a globális dehidraciofok=enyhe másodlagos módosító (kb_masodlagos_09) fedi le.",
      "conflicts": [],
      "csakPanaszok": [
        "hasmenes"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_01",
      "name": "Kémiai szemártalom → MSTR 2",
      "applies_to": "mind",
      "condition_text": "A szemet érintő kémiai ártalmak = MSTR 2. A 'vegyi anyag szennyezés a szemben' másodlagos módosító a panasz kiválasztásakor MSTR 2-t ad (gyors, alapos ellátás, szemöblítés).",
      "condition": [],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 287
        },
        {
          "doc": "jegyzet",
          "page": 316
        }
      ],
      "notes": "A jegyzet 316. oldala szerint arcot ért fröccsenésnél a 'kémiai szemártalom / szemsérülés' vezető panasz választása biztonságosabb, mint az 'égés' vagy 'lokalizált duzzanat/bőrpír' (utóbbiak a mérsékelt perifériás fájdalom alapján csak MSTR 4-et adnának).",
      "conflicts": [],
      "csakPanaszok": [
        "kemiai-szemartalom"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_02",
      "name": "Szemsérülés: áthatoló sérülés / kémiai vagy közvetlen égés / szem nem megtekinthető → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Szemsérülésnél a 'szembe hatoló sérülés, kémiai vagy közvetlen égés, vagy az ápoló számára a szem megtekintése nem lehetséges' másodlagos módosító = MSTR 2 (a súlyos sérülésnél lehetséges várakozási idő csökkentésére).",
      "condition": [
        {
          "mezo": "szemSerulesModosito",
          "egyenlo": "athatolo_kemiai_eges_nem_megtekintheto"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 325
        },
        {
          "doc": "jegyzet",
          "page": 316
        }
      ],
      "notes": "Gyermekeknél ha a fájdalom enyhe, a látás nem sérült és nincs látható idegen test a szemben, a panasz a jegyzet szerint 'kevésbé sürgős' (konkrét szintet a forrás nem ad, ezért arra nem készült szabály). A gyermeket célszerű sötét szobában elhelyezni.",
      "conflicts": [],
      "csakPanaszok": [
        "szemserules"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_03",
      "name": "Fog kiesés / fogvesztés → MSTR 2",
      "applies_to": "mind",
      "condition_text": "'Fog kiesés / fog vesztés' = MSTR 2. szint, egyben másodlagos módosító is. Fontos a tejfog elvesztését megkülönböztetni a végleges fog elvesztésétől: a gyökérrel rendelkező végleges fog visszaültetése sok esetben lehetséges (tejben vagy enyhén sós oldatban tárolva, szabad kézzel lehetőleg nem megfogva).",
      "condition": [
        {
          "mezo": "fogElvesztes",
          "egyenlo": "fog_kieses_fogvesztes"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 323
        }
      ],
      "notes": "Sok SBO helyi protokollal rendelkezik a fogorvos közvetlen értesítésére a triázs pultból.",
      "conflicts": [],
      "csakPanaszok": [
        "fogaszati-iny-problemak"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_04",
      "name": "Akut herefájdalom / fájdalmas scrotum → MSTR 2",
      "applies_to": "mind",
      "condition_text": "A scrotum akut fájdalmát okozhatja torzió, trauma, inkarcerálódott hernia és más sebészi betegség. A nagy fájdalom alapján MSTR 2; de ha a szerv elvesztésének lehetőségeként általánosságban ítéli meg, az is MSTR 2.",
      "condition": [
        {
          "mezo": "fajdalomJelleg",
          "egyenlo": "akut"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 270
        }
      ],
      "notes": "A forrás szerint a szervvesztés lehetősége önmagában is MSTR 2-t indokol, ezért a szabály nem köti fájdalompont-küszöbhöz, csak az akut jelleghez.",
      "conflicts": [],
      "csakPanaszok": [
        "herefajdalom-vagy-duzzanat"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_05",
      "name": "Pénisz duzzanat paraphimosis gyanúval → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Pénisz / nemi szerv duzzanat: a súlyos fájdalmat feltételező állapot = MSTR 2; a paraphimosisra (fitymaszűkületre) utaló panasz = MSTR 2 másodlagos módosító. A duzzadt pénisz vérkeringésének megőrzésére gyors ellátás és mielőbbi fájdalomcsillapítás szükséges.",
      "condition": [
        {
          "mezo": "parafimozisGyanu",
          "egyenlo": "igen"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 322
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "penisz-duzzanat"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_06",
      "name": "Végtagsérülés neurovaszkuláris tünetekkel → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Végtagsérülés (felső vagy alsó végtag): 'neurovaszkuláris tünetek' a sérülés következtében = MSTR 2. Ha megjelennek a hideg, pulzustalan végtag tünetei = MSTR 1 vagy 2.",
      "condition": [
        {
          "mezo": "vegtagSerulesModosito",
          "egyenlo": "neurovaszkularis_tunetek"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 288
        },
        {
          "doc": "jegyzet",
          "page": 164
        }
      ],
      "notes": "Állapotromlásnál (hideg pulzustalan végtag) a forrás MSTR 1-et vagy 2-t ír — ilyenkor a 'hideg pulzus nélküli végtag' vezető panasz / elsődleges meghatározók irányadók.",
      "conflicts": [],
      "csakPanaszok": [
        "felsovegtagi-serules",
        "alsovegtagi-serules"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_07",
      "name": "Végtagsérülés látható (nyilvánvaló) deformitással → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Végtagsérülésnél a 'látható / nyilvánvaló deformitás' másodlagos módosító = MSTR 3, akkor is, ha a beteg nem panaszkodik fájdalomra (fájdalom nélkül egyébként MSTR 5 lenne). Neurovaszkuláris érintettség esetén MSTR 2 lenne.",
      "condition": [
        {
          "mezo": "vegtagSerulesModosito",
          "egyenlo": "lathato_deformitas"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 164
        },
        {
          "doc": "jegyzet",
          "page": 288
        }
      ],
      "notes": "Az izolált, zárt végtagsérülést szenvedett betegeknek ritkán vannak abnormális vitális paraméterei; leggyakrabban a fájdalom elsődleges módosító alkalmazható.",
      "conflicts": [],
      "csakPanaszok": [
        "felsovegtagi-serules",
        "alsovegtagi-serules"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_08",
      "name": "Végtagsérülés nyílt töréssel → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Végtagsérülés (felső vagy alsó végtag): 'nyílt törés' = MSTR 3.",
      "condition": [
        {
          "mezo": "vegtagSerulesModosito",
          "egyenlo": "nyilt_tores"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 288
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "felsovegtagi-serules",
        "alsovegtagi-serules"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_09",
      "name": "Szoros gipsz neurovaszkuláris tünetekkel → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Végtagsérülés: 'szoros gipsz neurovaszkuláris tünetekkel' = MSTR 3. Amennyiben a beteg tünetei és állapota rosszabbodik és megjelennek a hideg, pulzustalan végtag tünetei = MSTR 1 vagy 2.",
      "condition": [
        {
          "mezo": "vegtagSerulesModosito",
          "egyenlo": "szoros_gipsz_nv_tunetekkel"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 288
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "felsovegtagi-serules",
        "alsovegtagi-serules"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_10",
      "name": "Szoros gipsz neurovaszkuláris tünetek nélkül → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Végtagsérülés: 'neurovaszkuláris tünetek nélküli szoros gipsz' = MSTR 4.",
      "condition": [
        {
          "mezo": "vegtagSerulesModosito",
          "egyenlo": "szoros_gipsz_nv_nelkul"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 288
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "felsovegtagi-serules",
        "alsovegtagi-serules"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_11",
      "name": "Összetett (komplex) seb neurovaszkuláris panaszokkal → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Zúzódások, lacerációk: 'összetett, komplex seb – neurovaszkuláris panaszokkal' = MSTR 2. (A tamponált, varrást igénylő seb is MSTR 2, ha neurovaszkuláris panaszok kísérik.)",
      "condition": [
        {
          "mezo": "sebModosito",
          "egyenlo": "komplex_nv"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 290
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "tepett-szurt-seb",
        "felsovegtagi-serules",
        "alsovegtagi-serules"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_12",
      "name": "Seb aktív, folyamatos nyomást igénylő vérzéssel → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Zúzódások, lacerációk: 'aktív vérzés', amely folyamatos nyomást igényel = MSTR 3. (Amennyiben nem kontrollált artériás vérzés, AZONNALI ellátást igényel.)",
      "condition": [
        {
          "mezo": "sebModosito",
          "egyenlo": "aktiv_verzes"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 290
        }
      ],
      "notes": "Nem kontrollált artériás vérzésnél az elsődleges meghatározók (hemodinamikai státusz) irányadók.",
      "conflicts": [],
      "csakPanaszok": [
        "tepett-szurt-seb",
        "felsovegtagi-serules",
        "alsovegtagi-serules"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_13",
      "name": "Tamponált vérzés / varrást igénylő seb → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Zúzódások, lacerációk: 'tamponált vérzés', 'sebvarrást igényel' = MSTR 4. Ha neurovaszkuláris panaszokkal jár = MSTR 2.",
      "condition": [
        {
          "mezo": "sebModosito",
          "egyenlo": "tamponalt_vagy_varratot_igenyel"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 290
        }
      ],
      "notes": "Neurovaszkuláris panaszok esetén a 'komplex_nv' opciót kell választani (panasz_trauma_szem_fog_uro_11).",
      "conflicts": [],
      "csakPanaszok": [
        "tepett-szurt-seb",
        "felsovegtagi-serules",
        "alsovegtagi-serules"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_14",
      "name": "Varrást nem igénylő laceráció / szúrt seb → MSTR 5",
      "applies_to": "mind",
      "condition_text": "Azok a lacerációk és szúrt sebek, melyek nem igényelnek varratot, 5. szintűek ('sebvarrást nem igényel' = MSTR 5).",
      "condition": [
        {
          "mezo": "sebModosito",
          "egyenlo": "varratot_nem_igenyel"
        }
      ],
      "level": 5,
      "source": [
        {
          "doc": "jegyzet",
          "page": 167
        },
        {
          "doc": "jegyzet",
          "page": 290
        }
      ],
      "notes": "A jegyzet 167. oldali példája kifejezetten a 'Felső végtagi sérülés' CEDIS panaszra mondja ki.",
      "conflicts": [],
      "csakPanaszok": [
        "tepett-szurt-seb",
        "felsovegtagi-serules",
        "alsovegtagi-serules"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_15",
      "name": "Traumás eredetű végtag-amputáció → MSTR 1",
      "applies_to": "mind",
      "condition_text": "Amputáció: 'traumás eredetű végtag amputáció' = MSTR 1.",
      "condition": [
        {
          "mezo": "amputacioTipus",
          "egyenlo": "vegtag"
        }
      ],
      "level": 1,
      "source": [
        {
          "doc": "jegyzet",
          "page": 287
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "amputacio"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_16",
      "name": "Traumás eredetű ujj-amputáció → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Amputáció: 'traumás eredetű ujj amputáció' (pl. ujjperc-amputáció) = MSTR 2.",
      "condition": [
        {
          "mezo": "amputacioTipus",
          "egyenlo": "ujj"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 287
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "amputacio"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_17",
      "name": "Égés a testfelület >25%-án → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Égések (Bőrgyógyászat, vagy Kémiai ártalom és égés – Környezeti ártalmak): a testfelület 25%-át meghaladó mértékű égés = MSTR 2.",
      "condition": [
        {
          "mezo": "egesKiterjedes",
          "egyenlo": "tobb_mint_25"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 287
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "eges",
        "kemiai-artalmak"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_18",
      "name": "Égés a testfelület 5-25%-án → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Égések: MSTR 3 a köztes kiterjedésű égés (a forrás szó szerint '25% testfelület'-et ír; a >25% = MSTR 2 és <5% = MSTR 4 sávok alapján 5-25%-ként értelmezve).",
      "condition": [
        {
          "mezo": "egesKiterjedes",
          "egyenlo": "szazalek_5_25"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 287
        }
      ],
      "notes": "A jegyzet 287. oldalán az MSTR 3 sor csak '25% testfelület' — a sáv alsó-felső határa a szomszédos szintekből következtetett, ellenőrzendő.",
      "conflicts": [],
      "csakPanaszok": [
        "eges",
        "kemiai-artalmak"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_19",
      "name": "Égés a testfelület <5%-án → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Égések: '<5% testfelület' = MSTR 4. (A jegyzet 316. oldala szerint is az 'égés' vezető panasz mérsékelt perifériás fájdalommal MSTR 4 — kivéve, ha az arcon részleges vagy teljes bőrmélységet érintő égés van, ami az 'égés' panasz másodlagos módosítójaként súlyosabb szintet ad.)",
      "condition": [
        {
          "mezo": "egesKiterjedes",
          "egyenlo": "kevesebb_mint_5"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 287
        },
        {
          "doc": "jegyzet",
          "page": 316
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "eges",
        "kemiai-artalmak"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_20",
      "name": "Fagyás: hideg, pulzus nélküli végtag → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Fagyás / hideg ártalom: 'hideg pulzus nélküli végtag' = MSTR 2.",
      "condition": [
        {
          "mezo": "fagyasModosito",
          "egyenlo": "hideg_pulzus_nelkuli_vegtag"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 287
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "fagyas"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_21",
      "name": "Fagyás: bőrön jelentkező hidegártalom → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Fagyás / hideg ártalom: 'bőrön jelentkező hidegártalom' = MSTR 3.",
      "condition": [
        {
          "mezo": "fagyasModosito",
          "egyenlo": "boron_jelentkezo_hidegartalom"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 287
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "fagyas"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_22",
      "name": "Lokalizált duzzanat/bőrpír: 'lokalizált cellulitis' módosító → a fájdalom-alapú szintnél egy szinttel sürgősebb (enyhe fájdalom: MSTR 4, közepes fájdalom: MSTR 3)",
      "applies_to": "mind",
      "condition_text": "Lokalizált gyulladás / vörösség vezető panasznál a 'lokalizált cellulitis' RELATÍV másodlagos módosító: a fájdalom-alapú (lokalizált bőrpír) szinthez képest EGY SZINTTEL sürgősebb kategóriába emel. 'Lokalizált bőrpír' esetén a szint az elsődleges (fájdalom) módosító szerinti marad. Így: enyhe (nyugalmi <4), akut perifériás fájdalomnál a bőrpír-szint MSTR 5, cellulitis mellett MSTR 4 (jegyzet 145. o.); közepes akut perifériás fájdalomnál a bőrpír-szint MSTR 4, cellulitis mellett MSTR 3 (jegyzet 100. o.). A level mező (4) az enyhe fájdalmú/nyugalmi alapesetet tükrözi; közepes fájdalomnál MSTR 3 az irányadó.",
      "condition": [
        {
          "mezo": "borpirModosito",
          "egyenlo": "lokalizalt_cellulitis"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 145
        },
        {
          "doc": "jegyzet",
          "page": 100
        }
      ],
      "notes": "A cellulitis nem fix, hanem relatív módosító: a lokalizált bőrpír / fájdalom-alapú szintet egy fokkal sürgősebbre emeli. A jegyzet 145. és 100. oldala EGYMÁSSAL ÖSSZHANGBAN van (nem ellentmondás): 145. o. enyhe fájdalom, bőrpír MSTR 5 → cellulitis MSTR 4; 100. o. közepes fájdalom, bőrpír MSTR 4 → cellulitis MSTR 3. A fix MSTR 4 közepes fájdalmú betegnél alultriázsolna (helyesen MSTR 3), ezért a szintet a fájdalom-alapú kategóriától függően, egy fokkal feljebb kell megállapítani.",
      "conflicts": [],
      "csakPanaszok": [
        "lokalizalt-duzzanat-borpir"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_23",
      "name": "Egyoldali vörös, forró végtag: kiterjedt gyulladás → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Féloldali vörös, forró végtag: 'kiterjedt gyulladás' = MSTR 3. Kiterjedtnek tekintendő, ha a gyulladás a végtag 10-15%-ánál nagyobb részét érinti.",
      "condition": [
        {
          "mezo": "borgyulladasKiterjedes",
          "egyenlo": "kiterjedt"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 289
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "egyoldali-voros-es-forro-vegtag"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_24",
      "name": "Egyoldali vörös, forró végtag: lokalizált gyulladás/bőrpír → MSTR 4",
      "applies_to": "mind",
      "condition_text": "Féloldali vörös, forró végtag: 'lokalizált gyulladás / bőrpír' = MSTR 4, ha a végtag <10-15%-át érinti; ha ennél nagyobb, kiterjedt gyulladásnak tekintendő.",
      "condition": [
        {
          "mezo": "borgyulladasKiterjedes",
          "egyenlo": "lokalizalt"
        }
      ],
      "level": 4,
      "source": [
        {
          "doc": "jegyzet",
          "page": 289
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "egyoldali-voros-es-forro-vegtag"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_25",
      "name": "Vérrel/testváladékkal érintkezés: magas kockázatú expozíció → MSTR 2",
      "applies_to": "mind",
      "condition_text": "Vérrel és testnedvvel történt érintkezés: 'magas kockázatú expozíció' = MSTR 2 — tűvel, szennyezett tűvel történt megszúrás, ismert vagy vélt HIV vagy hepatitis.",
      "condition": [
        {
          "mezo": "verExpozicioKockazat",
          "egyenlo": "magas"
        }
      ],
      "level": 2,
      "source": [
        {
          "doc": "jegyzet",
          "page": 288
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "erintkezes-verrel-vagy-testvaladekokkal"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_26",
      "name": "Vérrel/testváladékkal érintkezés: alacsony kockázatú expozíció → MSTR 3",
      "applies_to": "mind",
      "condition_text": "Vérrel és testnedvvel történt érintkezés: 'alacsony kockázatú expozíció' = MSTR 3 — alacsony kockázatú forrásból származó szembe vagy máshová fröccsenés, vagy megszúrás nem üreges tűvel.",
      "condition": [
        {
          "mezo": "verExpozicioKockazat",
          "egyenlo": "alacsony"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 288
        }
      ],
      "notes": "",
      "conflicts": [],
      "csakPanaszok": [
        "erintkezes-verrel-vagy-testvaladekokkal"
      ],
      "group": "secondary"
    },
    {
      "id": "panasz_trauma_szem_fog_uro_27",
      "name": "Hosszabb ideig tartó gerincrögzítés → minimum MSTR 3",
      "applies_to": "mind",
      "condition_text": "A stabil, alacsony rizikójú baleseti mechanizmussal, de hosszabb ideig tartó gerincrögzítés mellett szállított betegeknél a 'hosszabb ideig gerinc rögzített' másodlagos módosító = MSTR minimum 3; törekedni kell a beteget a boardról lehetőleg 30 percen belül levenni.",
      "condition": [
        {
          "mezo": "gerincRogzitesHosszu",
          "egyenlo": "igen"
        }
      ],
      "level": 3,
      "source": [
        {
          "doc": "jegyzet",
          "page": 288
        }
      ],
      "notes": "MINIMUM szint: súlyosabb elsődleges meghatározó/módosító természetesen felülírja.",
      "conflicts": [],
      "csakPanaszok": [
        "traumas-hat-gerinc-serules",
        "nyaki-trauma",
        "sulyos-trauma-tompa"
      ],
      "group": "secondary"
    }
  ],
  "vitalBands": [
    {
      "param": "rr",
      "group": "respiratory",
      "applies_to": "gyermek",
      "name": "Gyermek légzésszám életkor szerinti MSTR-sávok (1/perc)",
      "kiertekeles": "Sávhatárok (1/perc), balról jobbra. Ha az érték < b1 -> MSTR 1 (súlyosan alacsony); b1 <= érték < b2 -> MSTR 2 (alacsony); b2 <= érték < b3 -> MSTR 3 (enyhén alacsony); b3 <= érték <= b4 -> normál (MSTR 4-5); b4 < érték <= b5 -> MSTR 3 (enyhén magas); b5 < érték <= b6 -> MSTR 2 (magas); érték > b6 -> MSTR 1 (súlyosan magas).",
      "rows": [
        {
          "eletkor": "0 (újszülött)",
          "korMinHonap": 0,
          "korMaxHonap": 2,
          "b1": 17,
          "b2": 26,
          "b3": 35,
          "b4": 53,
          "b5": 62,
          "b6": 71
        },
        {
          "eletkor": "3 hónap",
          "korMinHonap": 3,
          "korMaxHonap": 5,
          "b1": 16,
          "b2": 25,
          "b3": 33,
          "b4": 51,
          "b5": 60,
          "b6": 68
        },
        {
          "eletkor": "6 hónap",
          "korMinHonap": 6,
          "korMaxHonap": 8,
          "b1": 15,
          "b2": 23,
          "b3": 32,
          "b4": 48,
          "b5": 57,
          "b6": 65
        },
        {
          "eletkor": "9 hónap",
          "korMinHonap": 9,
          "korMaxHonap": 11,
          "b1": 14,
          "b2": 22,
          "b3": 30,
          "b4": 46,
          "b5": 54,
          "b6": 62
        },
        {
          "eletkor": "12 hónap",
          "korMinHonap": 12,
          "korMaxHonap": 14,
          "b1": 14,
          "b2": 22,
          "b3": 29,
          "b4": 44,
          "b5": 52,
          "b6": 59
        },
        {
          "eletkor": "15 hónap",
          "korMinHonap": 15,
          "korMaxHonap": 17,
          "b1": 14,
          "b2": 21,
          "b3": 28,
          "b4": 42,
          "b5": 49,
          "b6": 56
        },
        {
          "eletkor": "18 hónap",
          "korMinHonap": 18,
          "korMaxHonap": 20,
          "b1": 14,
          "b2": 20,
          "b3": 27,
          "b4": 39,
          "b5": 46,
          "b6": 52
        },
        {
          "eletkor": "21 hónap",
          "korMinHonap": 21,
          "korMaxHonap": 23,
          "b1": 14,
          "b2": 20,
          "b3": 26,
          "b4": 37,
          "b5": 43,
          "b6": 49
        },
        {
          "eletkor": "24 hónap",
          "korMinHonap": 24,
          "korMaxHonap": 35,
          "b1": 14,
          "b2": 19,
          "b3": 25,
          "b4": 35,
          "b5": 40,
          "b6": 45
        },
        {
          "eletkor": "3 év",
          "korMinHonap": 36,
          "korMaxHonap": 47,
          "b1": 14,
          "b2": 18,
          "b3": 22,
          "b4": 30,
          "b5": 34,
          "b6": 38
        },
        {
          "eletkor": "4 év",
          "korMinHonap": 48,
          "korMaxHonap": 59,
          "b1": 15,
          "b2": 18,
          "b3": 21,
          "b4": 24,
          "b5": 30,
          "b6": 33
        },
        {
          "eletkor": "5 év",
          "korMinHonap": 60,
          "korMaxHonap": 71,
          "b1": 15,
          "b2": 18,
          "b3": 20,
          "b4": 23,
          "b5": 28,
          "b6": 31
        },
        {
          "eletkor": "6 év",
          "korMinHonap": 72,
          "korMaxHonap": 83,
          "b1": 15,
          "b2": 17,
          "b3": 19,
          "b4": 22,
          "b5": 27,
          "b6": 29
        },
        {
          "eletkor": "7 év",
          "korMinHonap": 84,
          "korMaxHonap": 95,
          "b1": 14,
          "b2": 16,
          "b3": 19,
          "b4": 21,
          "b5": 26,
          "b6": 28
        },
        {
          "eletkor": "8 év",
          "korMinHonap": 96,
          "korMaxHonap": 107,
          "b1": 13,
          "b2": 16,
          "b3": 18,
          "b4": 20,
          "b5": 25,
          "b6": 27
        },
        {
          "eletkor": "9 év",
          "korMinHonap": 108,
          "korMaxHonap": 119,
          "b1": 13,
          "b2": 15,
          "b3": 17,
          "b4": 20,
          "b5": 24,
          "b6": 27
        },
        {
          "eletkor": "10 év",
          "korMinHonap": 120,
          "korMaxHonap": 131,
          "b1": 12,
          "b2": 15,
          "b3": 17,
          "b4": 19,
          "b5": 24,
          "b6": 26
        },
        {
          "eletkor": "11 év",
          "korMinHonap": 132,
          "korMaxHonap": 143,
          "b1": 12,
          "b2": 14,
          "b3": 16,
          "b4": 19,
          "b5": 24,
          "b6": 26
        },
        {
          "eletkor": "12 év",
          "korMinHonap": 144,
          "korMaxHonap": 155,
          "b1": 11,
          "b2": 14,
          "b3": 16,
          "b4": 18,
          "b5": 23,
          "b6": 26
        },
        {
          "eletkor": "13 év",
          "korMinHonap": 156,
          "korMaxHonap": 167,
          "b1": 11,
          "b2": 13,
          "b3": 16,
          "b4": 18,
          "b5": 23,
          "b6": 25
        },
        {
          "eletkor": "14 év",
          "korMinHonap": 168,
          "korMaxHonap": 179,
          "b1": 10,
          "b2": 13,
          "b3": 15,
          "b4": 17,
          "b5": 22,
          "b6": 25
        },
        {
          "eletkor": "15 év",
          "korMinHonap": 180,
          "korMaxHonap": 191,
          "b1": 10,
          "b2": 12,
          "b3": 15,
          "b4": 17,
          "b5": 22,
          "b6": 24
        },
        {
          "eletkor": "16 év",
          "korMinHonap": 192,
          "korMaxHonap": 203,
          "b1": 9,
          "b2": 12,
          "b3": 14,
          "b4": 16,
          "b5": 21,
          "b6": 24
        },
        {
          "eletkor": "17 év",
          "korMinHonap": 204,
          "korMaxHonap": 215,
          "b1": 9,
          "b2": 11,
          "b3": 13,
          "b4": 16,
          "b5": 21,
          "b6": 23
        },
        {
          "eletkor": "18 év",
          "korMinHonap": 216,
          "korMaxHonap": 227,
          "b1": 9,
          "b2": 11,
          "b3": 13,
          "b4": 15,
          "b5": 20,
          "b6": 22
        }
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 96
        },
        {
          "doc": "jegyzet",
          "page": 220
        }
      ]
    },
    {
      "param": "hr",
      "group": "hemodynamic",
      "applies_to": "gyermek",
      "name": "Gyermek pulzusszám életkor szerinti MSTR-sávok (1/perc)",
      "kiertekeles": "Sávhatárok (1/perc), balról jobbra. Ha az érték < b1 -> MSTR 1 (súlyosan alacsony); b1 <= érték < b2 -> MSTR 2 (alacsony); b2 <= érték < b3 -> MSTR 3 (enyhén alacsony); b3 <= érték <= b4 -> normál (MSTR 4-5); b4 < érték <= b5 -> MSTR 3 (enyhén magas); b5 < érték <= b6 -> MSTR 2 (magas); érték > b6 -> MSTR 1 (súlyosan magas).",
      "rows": [
        {
          "eletkor": "0 (újszülött)",
          "korMinHonap": 0,
          "korMaxHonap": 2,
          "b1": 79,
          "b2": 95,
          "b3": 111,
          "b4": 143,
          "b5": 159,
          "b6": 175
        },
        {
          "eletkor": "3 hónap",
          "korMinHonap": 3,
          "korMaxHonap": 5,
          "b1": 95,
          "b2": 111,
          "b3": 127,
          "b4": 158,
          "b5": 173,
          "b6": 189
        },
        {
          "eletkor": "6 hónap",
          "korMinHonap": 6,
          "korMaxHonap": 8,
          "b1": 91,
          "b2": 106,
          "b3": 121,
          "b4": 152,
          "b5": 167,
          "b6": 183
        },
        {
          "eletkor": "9 hónap",
          "korMinHonap": 9,
          "korMaxHonap": 11,
          "b1": 86,
          "b2": 101,
          "b3": 116,
          "b4": 145,
          "b5": 160,
          "b6": 175
        },
        {
          "eletkor": "12 hónap",
          "korMinHonap": 12,
          "korMaxHonap": 14,
          "b1": 83,
          "b2": 97,
          "b3": 111,
          "b4": 140,
          "b5": 155,
          "b6": 169
        },
        {
          "eletkor": "15 hónap",
          "korMinHonap": 15,
          "korMaxHonap": 17,
          "b1": 79,
          "b2": 94,
          "b3": 108,
          "b4": 137,
          "b5": 152,
          "b6": 166
        },
        {
          "eletkor": "18 hónap",
          "korMinHonap": 18,
          "korMaxHonap": 20,
          "b1": 76,
          "b2": 90,
          "b3": 105,
          "b4": 134,
          "b5": 148,
          "b6": 163
        },
        {
          "eletkor": "21 hónap",
          "korMinHonap": 21,
          "korMaxHonap": 23,
          "b1": 73,
          "b2": 87,
          "b3": 102,
          "b4": 131,
          "b5": 145,
          "b6": 159
        },
        {
          "eletkor": "24 hónap",
          "korMinHonap": 24,
          "korMaxHonap": 35,
          "b1": 71,
          "b2": 85,
          "b3": 99,
          "b4": 128,
          "b5": 142,
          "b6": 156
        },
        {
          "eletkor": "3 év",
          "korMinHonap": 36,
          "korMaxHonap": 47,
          "b1": 64,
          "b2": 78,
          "b3": 92,
          "b4": 120,
          "b5": 135,
          "b6": 149
        },
        {
          "eletkor": "4 év",
          "korMinHonap": 48,
          "korMaxHonap": 59,
          "b1": 59,
          "b2": 73,
          "b3": 88,
          "b4": 116,
          "b5": 130,
          "b6": 144
        },
        {
          "eletkor": "5 év",
          "korMinHonap": 60,
          "korMaxHonap": 71,
          "b1": 56,
          "b2": 70,
          "b3": 84,
          "b4": 112,
          "b5": 126,
          "b6": 140
        },
        {
          "eletkor": "6 év",
          "korMinHonap": 72,
          "korMaxHonap": 83,
          "b1": 53,
          "b2": 67,
          "b3": 81,
          "b4": 109,
          "b5": 123,
          "b6": 136
        },
        {
          "eletkor": "7 év",
          "korMinHonap": 84,
          "korMaxHonap": 95,
          "b1": 50,
          "b2": 64,
          "b3": 78,
          "b4": 105,
          "b5": 119,
          "b6": 133
        },
        {
          "eletkor": "8 év",
          "korMinHonap": 96,
          "korMaxHonap": 107,
          "b1": 47,
          "b2": 61,
          "b3": 75,
          "b4": 102,
          "b5": 116,
          "b6": 129
        },
        {
          "eletkor": "9 év",
          "korMinHonap": 108,
          "korMaxHonap": 119,
          "b1": 45,
          "b2": 59,
          "b3": 72,
          "b4": 99,
          "b5": 113,
          "b6": 126
        },
        {
          "eletkor": "10 év",
          "korMinHonap": 120,
          "korMaxHonap": 131,
          "b1": 43,
          "b2": 57,
          "b3": 70,
          "b4": 97,
          "b5": 110,
          "b6": 124
        },
        {
          "eletkor": "11 év",
          "korMinHonap": 132,
          "korMaxHonap": 143,
          "b1": 42,
          "b2": 55,
          "b3": 68,
          "b4": 95,
          "b5": 108,
          "b6": 122
        },
        {
          "eletkor": "12 év",
          "korMinHonap": 144,
          "korMaxHonap": 155,
          "b1": 40,
          "b2": 53,
          "b3": 67,
          "b4": 93,
          "b5": 106,
          "b6": 120
        },
        {
          "eletkor": "13 év",
          "korMinHonap": 156,
          "korMaxHonap": 167,
          "b1": 39,
          "b2": 52,
          "b3": 65,
          "b4": 92,
          "b5": 105,
          "b6": 118
        },
        {
          "eletkor": "14 év",
          "korMinHonap": 168,
          "korMaxHonap": 179,
          "b1": 37,
          "b2": 51,
          "b3": 64,
          "b4": 90,
          "b5": 103,
          "b6": 116
        },
        {
          "eletkor": "15 év",
          "korMinHonap": 180,
          "korMaxHonap": 191,
          "b1": 36,
          "b2": 49,
          "b3": 62,
          "b4": 89,
          "b5": 102,
          "b6": 115
        },
        {
          "eletkor": "16 év",
          "korMinHonap": 192,
          "korMaxHonap": 203,
          "b1": 35,
          "b2": 48,
          "b3": 61,
          "b4": 87,
          "b5": 100,
          "b6": 113
        },
        {
          "eletkor": "17 év",
          "korMinHonap": 204,
          "korMaxHonap": 215,
          "b1": 34,
          "b2": 47,
          "b3": 60,
          "b4": 86,
          "b5": 99,
          "b6": 112
        },
        {
          "eletkor": "18 év",
          "korMinHonap": 216,
          "korMaxHonap": 227,
          "b1": 33,
          "b2": 45,
          "b3": 58,
          "b4": 85,
          "b5": 97,
          "b6": 110
        }
      ],
      "source": [
        {
          "doc": "tankonyv",
          "page": 97
        },
        {
          "doc": "jegyzet",
          "page": 229
        }
      ]
    }
  ],
  "secondOrderNote": "A másodlagos módosítók panasz-hatóköre (csakPanaszok) a v1-ben nincs bekötve — minden másodlagos szabály minden panasznál kiértékelődik. Ld. FOLYTATAS.md.",
  "processRules": [
    {
      "id": "folyamat_01",
      "name": "A triázs folyamatának lépéssora",
      "condition_text": "A triázs egy gyors értékelő és döntéshozó folyamat, melynek lépései sorrendben: 1) Elsődleges megtekintés – gyors állapotfelmérés; 2) Fertőző betegségek kiszűrése; 3) Vezető panasz(ok) azonosítása (lista); 4) Elsődleges meghatározó és módosító tényezők értékelése; 5) Másodlagos meghatározó és módosító tényezők értékelése; 6) MSTR szint meghatározása; 7) A beteg megfelelő kezelő/várakozó helyiségbe irányítása és a várakozó betegek újraértékelése. Ugyanez a folyamat alkalmazható felnőttnél és gyermeknél is.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 22
        },
        {
          "doc": "jegyzet",
          "page": 43
        },
        {
          "doc": "jegyzet",
          "page": 61
        },
        {
          "doc": "jegyzet",
          "page": 257
        },
        {
          "doc": "tankonyv",
          "page": 19
        },
        {
          "doc": "tankonyv",
          "page": 28
        }
      ],
      "notes": "A jegyzet a triázst 'négy lépéses' gyors értékelő folyamatnak nevezi, melyhez egy 5., szűrő lépés (infekciókontroll) is tartozik, ha fertőzésgyanú van; a folyamatábra ezt 7 kifejtett lépésre bontja (megtekintés, fertőzésszűrés, vezető panasz, elsődleges módosítók, másodlagos módosítók, MSTR-szint, újraértékelés)."
    },
    {
      "id": "folyamat_02",
      "name": "A triázs döntés sorrendje (fázisok)",
      "condition_text": "A triázs döntés kötött prioritási sorrendben zajlik: Elsődleges megtekintés → Fertőző betegségek kiszűrése → VEZETŐ PANASZ → Elsődleges módosítók → Másodlagos módosítók. A vezető panasz megállapítása után előbb az elsődleges, majd – ha szükséges – a másodlagos módosítók alkalmazandók ebben a sorrendben.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 24
        },
        {
          "doc": "jegyzet",
          "page": 77
        },
        {
          "doc": "jegyzet",
          "page": 239
        },
        {
          "doc": "jegyzet",
          "page": 249
        },
        {
          "doc": "jegyzet",
          "page": 256
        },
        {
          "doc": "tankonyv",
          "page": 28
        },
        {
          "doc": "tankonyv",
          "page": 48
        }
      ],
      "notes": "Ez a folyamatábra a döntés magja: a vezető panasz adja a kiindulási MSTR szintet, amit az elsődleges, majd a másodlagos módosítók finomítanak."
    },
    {
      "id": "folyamat_03",
      "name": "Elsődleges megtekintés – ABCD, 3-5 másodperc",
      "condition_text": "A beteg megérkezését követően azonnal el kell végezni egy elsődleges, az ABCD-szemléleten (A – Légutak, B – Légzés, C – Keringés, D – Deficit/neurológiai) vagy gyermeknél a gyermekgyógyászati állapotfelmérés háromszögén (PAT) alapuló ellenőrzést. Ez a kezdeti vizuális értékelés a beteg küllemi állapotán, légzésén és keringésén alapul, és 3-5 másodpercig tart. A kezdeti értékelésbe a lázas állapot felmérése is beletartozik. A legtöbb beteg triázs kategóriája megállapítható az elsődleges megtekintés, a vezető panasz és a vitális paraméterek felmérése után; az értékelés az első benyomásra korlátozható, a betegek kisebb részénél részletesebb kórelőzményre és vizsgálatra lehet szükség.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 24
        },
        {
          "doc": "jegyzet",
          "page": 43
        },
        {
          "doc": "jegyzet",
          "page": 201
        },
        {
          "doc": "tankonyv",
          "page": 19
        },
        {
          "doc": "tankonyv",
          "page": 28
        }
      ],
      "notes": "A gyors állapotfelmérés elemei: az ápoló kezdeti benyomásai, gyors vizuális felmérés, a mentők értékelése (ha mentő szállítja), és a gyermekgyógyászati értékelés háromszöge (PAT)."
    },
    {
      "id": "folyamat_04",
      "name": "Look test – kritikus megjelenésű beteg azonnali kezelésbe",
      "condition_text": "Ha az elsődleges megtekintéskor (vagy a triázs bármely pontján) kritikus / életveszélyes állapot vagy annak gyanúja lép fel, a triázst félbe kell hagyni, a beteget azonnal a megfelelő reszuszitációs (sokktalanító) helyiségbe kell kísérni, és az ellátást késedelem nélkül meg kell kezdeni. Az ellátás késleltetése tilos. A reszuszitációt/periarreszt állapotot mutató beteg azonnal az MSTR 1. szintre, a kritikus (de nem reszuszitációt igénylő) beteg az MSTR 2. szintre kerül; a dokumentáció ilyenkor később, a mentő elmondása vagy a kezelés megkezdése után készül el.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 24
        },
        {
          "doc": "jegyzet",
          "page": 62
        },
        {
          "doc": "tankonyv",
          "page": 28
        },
        {
          "doc": "tankonyv",
          "page": 58
        },
        {
          "doc": "tankonyv",
          "page": 77
        }
      ],
      "notes": "Példák azonnali MSTR 1-re az elsődleges megtekintés alapján: zajló epilepsziás roham, periarreszt. A vitális paraméterek mérése a kezelőben történik; instabil 1-2. szintű beteg értékeinek mérése a triázspultnál ritkán elfogadható."
    },
    {
      "id": "folyamat_05",
      "name": "Az érkezés módja nem határozza meg a súlyosságot",
      "condition_text": "Soha ne az érkezés módja (mentő vs. járóbeteg/lábon érkező) alapján ítéljük meg a beteg súlyosságát – mind az öt kategória bármelyik érkezési módnál előfordulhat. A prehospitális dokumentációt és a mentőszemélyzet elmondását figyelembe kell venni, de az ápolónak ettől függetlenül személyesen is el kell végeznie az állapotfelmérést. Minden beteget egyformán kell kezelni.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 23
        },
        {
          "doc": "tankonyv",
          "page": 19
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_06",
      "name": "Fertőző betegségek kiszűrése (5. / kiegészítő lépés)",
      "condition_text": "Az elsődleges megtekintés után a stabil beteget fertőző betegség szempontjából szűrni kell (kikérdezéssel): köhögés, hányás = cseppfertőzés gyanúja; hasmenés, nyílt sebek = kontakt fertőzés gyanúja. Külön szűrendők a lázzal járó légúti fertőzések (FRI) és az influenza-szerű megbetegedések (ILI). A szűrésnek lehetőleg a beteg triázsterületre érkezése előtt kell megtörténnie. Instabil beteg fertőzési rizikójának szűrése az elsődleges ellátás után történik. A szűrés szabályai a helyi és járványügyi helyzet szerint változnak; pozitív szűrés esetén a helyi közegészségügyi előírás szerinti védőeszközök kötelezők.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 25
        },
        {
          "doc": "jegyzet",
          "page": 63
        },
        {
          "doc": "jegyzet",
          "page": 207
        },
        {
          "doc": "tankonyv",
          "page": 20
        },
        {
          "doc": "tankonyv",
          "page": 28
        }
      ],
      "notes": "A CTAS irányelveknek szigorúan nem része, de a triázs folyamatban fontos szerepe van. Ha a beteg egyébként is fertőzésgyanúval és szájmaszkban érkezik, elkülönített váró használata nem szükséges."
    },
    {
      "id": "folyamat_07",
      "name": "Izolációs és egyéni védőeszköz szabályok",
      "condition_text": "Fertőzésgyanú esetén izolációt kell alkalmazni a személyzet és a többi beteg védelmére. Vírusos vagy influenza-szerű megbetegedés gyanújakor a beteg 1 méteres körzetében N95 (FFP3) maszk viselendő; bakteriális infekció gyanújakor a standard maszk elegendő. A nagy rizikójú beteget izolációs (ideálisan negatív nyomású, előteres) szobában kell elhelyezni; ha ez nem lehetséges, a váró külön részében, maszkban. Kontakt fertőzés megelőzése kesztyűvel; bőr érintkezéssel vagy fekális-orális úton terjedő fertőzésnél maszk nem szükséges.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 63
        },
        {
          "doc": "jegyzet",
          "page": 207
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_08",
      "name": "Kiütéses / bárányhimlős gyermek azonnali elkülönítése",
      "condition_text": "A bárányhimlős gyermeket azonnal el kell különíteni. A kiütéses gyermekek magas fertőzési kockázatot jelentenek (különösen az immunizációt elutasító szülők miatt). Nagyobb gyermek viselhet szájmaszkot.",
      "source": [
        {
          "doc": "tankonyv",
          "page": 57
        },
        {
          "doc": "jegyzet",
          "page": 207
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_09",
      "name": "A vezető panasz kiválasztása – a legmagasabb MSTR-t adó panasz",
      "condition_text": "A vezető panaszt a triázs ápoló állapítja meg (gyakran egyezik a beteg által elmondottal). Több vagy egymásnak ellentmondó panasz esetén mindig azt a panaszt kell választani, amely a legmagasabb megfelelő MSTR szintet adja. A panaszokat a standard (CEDIS) vezető panasz-listából kell kiválasztani a beteg panaszához leginkább illőt.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 26
        },
        {
          "doc": "jegyzet",
          "page": 64
        },
        {
          "doc": "tankonyv",
          "page": 20
        }
      ],
      "notes": "Ha több panasz alapján is besorolható a beteg, a módosítók alkalmazásával általában ugyanabba a kategóriába kerül."
    },
    {
      "id": "folyamat_10",
      "name": "Szubjektív értékelés",
      "condition_text": "A szubjektív adatok a beteg saját szavaival elmondott előzmények: a jelentkezés oka, a tapasztalt tünetek, a fájdalom súlyossága, a sérülés története (baleseti mechanizmus), saját aggodalmai. Nyílt végű kérdéseket kell alkalmazni ('Miért kereste fel ma a sürgősségi osztályt?'), és pontosan tisztázni kell a beteg által használt kifejezések jelentését.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 29
        },
        {
          "doc": "tankonyv",
          "page": 20
        }
      ],
      "notes": "A beteg fájdalom-önértékelése szubjektív adat."
    },
    {
      "id": "folyamat_11",
      "name": "Objektív értékelés – az elsődleges módosítók forrása",
      "condition_text": "Az objektív adatok a látható/mérhető jelek: sebek, kiütések, vérzés, köhögés, vitális paraméterek (légút/légzés, keringés – pulzus, RR, sokk, tudati állapot), a fájdalomra adott fiziológiai válaszok, a sérülés mechanizmusa. Ezek az objektív adatok egyben a beteg elsődleges módosítói. A teljes test (tetőtől talpig) vizsgálata már a kezelő ápoló/orvos feladata a vizsgálóhelyiségben.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 28
        },
        {
          "doc": "tankonyv",
          "page": 20
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_12",
      "name": "Elsődleges módosítók használata kötelező minden stabil betegnél (ABCDE)",
      "condition_text": "Az elsődleges meghatározó és módosító tényezők használata minden stabil állapotú beteg esetében kötelező. Az elsődleges (vitális) meghatározók: A-B légzés/légutak és a nehézlégzés mértéke (respiratorikus disztressz), C keringés/hemodinamikai állapot, D tudati/neurológiai állapot. Az elsődleges módosítók: E testhőmérséklet (láz, SIRS/szepszis), fájdalom (fájdalomskála), vérzékenység (öröklött/szerzett), baleseti mechanizmus (magas rizikójú sérülés). A triázs folyamat teljes egészében csak a pillanatnyilag stabil betegen végezhető el a triázsterületen.",
      "source": [
        {
          "doc": "tankonyv",
          "page": 31
        },
        {
          "doc": "tankonyv",
          "page": 48
        },
        {
          "doc": "jegyzet",
          "page": 152
        },
        {
          "doc": "jegyzet",
          "page": 239
        }
      ],
      "notes": "A módosítók alkalmazásával a felvételi panaszok listája több mint 650 változatra bővül az MSTR szintek szerint."
    },
    {
      "id": "folyamat_13",
      "name": "Másodlagos módosítók – mikor alkalmazandók",
      "condition_text": "A másodlagos meghatározó és módosító tényezők specifikusak, és csak az MSTR 2-5 szinteknél, illetve csak bizonyos panaszok esetében alkalmazandók. Alkalmazásuk akkor szükséges, ha az elsődleges módosítók nem döntik el a beteg kategóriáját. Egyes panaszoknál a másodlagos módosítók válnak a besorolás elsődleges eszközévé, mert az elsődleges módosítók irrelevánsak vagy alkalmatlanok (pl. vércukorszint, kiszáradás mértéke, magas vérnyomás, lelki egészség, szülészet-nőgyógyászat).",
      "source": [
        {
          "doc": "jegyzet",
          "page": 49
        },
        {
          "doc": "jegyzet",
          "page": 249
        },
        {
          "doc": "tankonyv",
          "page": 31
        }
      ],
      "notes": "A másodlagos módosítók részletes tárgyalása a 4. modulban / kiegészítő táblázatokban (COT/CTAS content manager) történik. A COT (Panasz Orientált Triázs) egységes panaszokba foglalva tartalmazza a másodlagos módosítókat."
    },
    {
      "id": "folyamat_14",
      "name": "Fájdalom értékelése – szubjektív és objektív együtt dönt",
      "condition_text": "Az ápolónak fájdalomskálát kell alkalmaznia és rögzítenie a beteg által állított fájdalmat, DE a triázs szintet az állított (szubjektív) fájdalom ÉS az objektív megfigyelés (élettani jelek, disztressz, tachycardia, arckifejezés, kényszertartás) együttes alapján kell meghatározni. Ha a beteg tagadja/kisebbíti fájdalmát az objektív jelek ellenére, vagy fordítva (nagy állított fájdalom élettani jel nélkül), a triázs értékelés a mérvadó.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 90
        },
        {
          "doc": "tankonyv",
          "page": 72
        }
      ],
      "notes": "A dokumentációban a beteg által értékelt és a triázs során felmért fájdalomszintet is rögzíteni kell."
    },
    {
      "id": "folyamat_15",
      "name": "A triázs döntés két alapkérdése",
      "condition_text": "Az elsődleges megtekintés, a szubjektív és az objektív értékelés alapján az ápoló megállapítja a beteg MSTR kategóriáját, ami két kérdésre ad választ: 1) Milyen szintű ellátást igényel a beteg? 2) Mennyit várakozhat biztonságosan? A biztonságos várakozási idő fokozatai: azonnali ellátás, 15 perc, 30 perc, 1 óra, 2 óra.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 30
        },
        {
          "doc": "tankonyv",
          "page": 21
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_16",
      "name": "Időkeret: a triázs megkezdése / elvégzése",
      "condition_text": "A beteg megérkezése és a triázs megkezdése között nem telhet el 10 percnél több (MSTR ajánlás); cél a triázs vizsgálat elvégzése maximum 10 percen belül. Ez az időkeret NEM az orvosi ellátás, hanem a triázs folyamat megkezdésére vonatkozik. A betegek ne várakozzanak ennél többet a triázspult előtt.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 22
        },
        {
          "doc": "jegyzet",
          "page": 31
        }
      ],
      "notes": "A tankönyv a triázs kategorizálás célidejét az érkezéstől számított maximum 10-15 percben adja meg (l. conflicts)."
    },
    {
      "id": "folyamat_17",
      "name": "Sorrend azonos triázs szinten várakozó betegek között",
      "condition_text": "Ha egy adott triázs szinten legalább 3 beteg várakozik, a triázs ápolónak kell eldöntenie az ellátás sorrendjét: mindig a leginkább betegnek tűnő pácienst kell először ellátáshoz juttatni. Ha az összes beteg egyformán súlyos, a legtöbbet várakozott beteg élvez prioritást. A 2-3. szintű betegek túlzott várakoztatása a váróban nem biztonságos.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 17
        },
        {
          "doc": "jegyzet",
          "page": 34
        },
        {
          "doc": "tankonyv",
          "page": 21
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_18",
      "name": "Újraértékelési időközök a váróban (MSTR szintenként)",
      "condition_text": "Minden várakozó beteget újra kell értékelni a következő időközönként: 1. szint – folyamatos ápolói felügyelet (nincs külön újraértékelési intervallum); 2. szint – 15 percenként; 3. szint – 30 percenként; 4. szint – 60 percenként; 5. szint – 120 percenként. Az újraértékelés részletessége függ a felvételi panaszoktól, az elsődleges triázs kategóriától és a beteg/ápoló által észlelt bármely állapotváltozástól. Ha a beteg már orvosi ellátásba került, a további újraértékelést a helyi kórházi eljárásrend szabályozza.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 35
        },
        {
          "doc": "jegyzet",
          "page": 186
        },
        {
          "doc": "jegyzet",
          "page": 258
        },
        {
          "doc": "tankonyv",
          "page": 22
        },
        {
          "doc": "tankonyv",
          "page": 48
        },
        {
          "doc": "tankonyv",
          "page": 76
        }
      ],
      "notes": "A triázs nem statikus folyamat: a beteg állapota a várakozás során javulhat és romolhat. A beteget meg kell kérni, hogy állapotromlás esetén, illetve a megállapított idő leteltekor térjen vissza a triázspulthoz. Egy korábbi jegyzet-dia oktatói megjegyzése csak a 3./4./5. szint intervallumát (30/60/120 perc) sorolta fel, de a részletes jegyzet- és tankönyvi táblázatok az itt szereplő teljes, 1-5 skálát tartalmazzák."
    },
    {
      "id": "folyamat_19",
      "name": "Az elsődleges (érkezéskori) triázs szint nem változtatható meg",
      "condition_text": "Az érkezéskor rögzített elsődleges triázs szint soha nem változtatható meg. Ha a beteg állapota változik, szükség esetén új triázs kategóriát kell megállapítani és rögzíteni – az eredeti megtartása mellett. Az ápoló minden újraértékelésnél rögzíti a tapasztalt eltéréseket és a súlyossági kategória bármely irányú változását, és eldönti, mennyit várakozhat még a beteg biztonságosan.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 36
        },
        {
          "doc": "jegyzet",
          "page": 186
        },
        {
          "doc": "tankonyv",
          "page": 22
        },
        {
          "doc": "tankonyv",
          "page": 49
        },
        {
          "doc": "tankonyv",
          "page": 76
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_20",
      "name": "A dokumentáció nem késleltetheti az ellátást",
      "condition_text": "A triázs folyamat (beleértve a dokumentációt is) nem késleltetheti a beteg ellátását. Azonnali ellátás szükségessége esetén a dokumentáció elkészítését későbbre kell halasztani. Instabil állapotú betegnél a triázs és egyéb dokumentáció a beteg elsődleges ellátását követően készül el.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 14
        },
        {
          "doc": "jegyzet",
          "page": 21
        },
        {
          "doc": "tankonyv",
          "page": 13
        },
        {
          "doc": "tankonyv",
          "page": 18
        }
      ],
      "notes": "A dokumentáció legfontosabb szempontja a megfelelő vezető panasz megállapítása."
    },
    {
      "id": "folyamat_21",
      "name": "A triázs dokumentáció kötelező elemei",
      "condition_text": "A triázs döntést alátámasztó, kötelezően rögzítendő adatok: dátum és idő; a beteg neve; a beteg kora; a jelenlegi vezető panaszok (lista alapján); szubjektív értékelés; objektív értékelés; elsődleges módosító és meghatározó tényezők (vitális paraméterek, fájdalomskála, öröklött/szerzett vérzékenység, baleseti mechanizmus); másodlagos módosító és meghatározó tényezők; MSTR szint; triázs beavatkozások; diszpozíció; a triázs ápoló személyi azonosítója; az újraértékelés ideje és eredménye. További adatok rögzítése a helyi működési szabályzat szerint lehetséges.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 21
        },
        {
          "doc": "tankonyv",
          "page": 18
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_22",
      "name": "Allergia, gyógyszerek, immunizáció – nem része az MSTR meghatározásnak",
      "condition_text": "A beteg allergiáinak, alkalmazott gyógyszereinek, immunizációs/oltási történetének felvétele nem része az MSTR triázs kategória meghatározásának, és nem késleltetheti az ellátás megkezdését. Ezeket az adatokat elsősorban az ellátást végző személyzet veszi fel; a helyi szabályok szerint a triázs ápoló is összegyűjtheti.",
      "source": [
        {
          "doc": "tankonyv",
          "page": 18
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_23",
      "name": "Adatjelentés – a kategória megállapítási módjának megjelölése",
      "condition_text": "A triázs adatok lejelentésénél meg kell jelölni, hogy a megállapított kategória számítógépes támogatással, papír alapú segédanyaggal, vagy teljes egészében az ápoló memóriája alapján történt-e. Ez az ellátóhelyek adatainak összehasonlításához fontos.",
      "source": [
        {
          "doc": "tankonyv",
          "page": 2
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_24",
      "name": "Hol történjen a triázs – instabil vs. stabil beteg",
      "condition_text": "A légzési/keringési elégtelenségben lévő, súlyos nehézlégzéssel érkező, sokkos vagy eszméletlen beteget azonnal a reszuszitációs (sokktalanító) helyiségbe kell irányítani; a dokumentáció később készül. A nyilvánvalóan instabil, mérsékelt nehézlégzéssel érkező, hemodinamikailag instabil vagy zavart betegnél lehetőleg ágy melletti triázst kell végezni. A pillanatnyilag stabil betegnél a teljes triázs folyamat a triázsterületen végezhető el – kivéve, ha közben instabilitás jelei mutatkoznak, mert akkor a beteget azonnal az ellátó területre kell juttatni és a triázst az ágy mellett befejezni.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 62
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_25",
      "name": "A vitális paraméterek szerepe a besorolásban",
      "condition_text": "A vitális paraméterek értékelése gyakran az MSTR 2, 3 vagy 4-es kategóriába sorolás kulcseleme. Az instabil 1. vagy 2. kategóriába tartozó betegek értékeit ritkán elfogadható megmérni a triázspultnál – őket azonnal a megfelelő ellátó területre kell irányítani. A vitálparaméter-táblázatok referencia irányszámok, önmagukban nem döntőek; a megítéléshez ismerni kellene a beteg saját normálértékeit.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 43
        },
        {
          "doc": "jegyzet",
          "page": 61
        },
        {
          "doc": "jegyzet",
          "page": 257
        },
        {
          "doc": "tankonyv",
          "page": 96
        }
      ],
      "notes": "Pl. egy szokásosan magas vérnyomású betegen mért 'normális' vérnyomás gyanús; a bradikardia idős vagy stresszes betegen figyelmeztető jel (kivéve béta-blokkoló szedésekor)."
    },
    {
      "id": "folyamat_26",
      "name": "A vitális paraméterek mérésének időzítése triázs szint szerint (gyermek)",
      "condition_text": "Minden gyermeknél kötelező a vitális paraméterek mérése és rögzítése a sürgősségi osztályra érkezés után; a mérés konkrét ideje a gyermek állapotától függ. MSTR 1-2. szint (reszuszitáció/azonnali és kritikus): a vitálmérés az ellátás alatt történik, a gyermek nem várakoztatható. MSTR 3. szint (sürgős): a vitálértékek a triázs döntés alátámasztására és a várakozás biztonságának megítélésére szolgálnak. MSTR 4-5. szint: a mérés történhet a triázs folyamat közben vagy a kezelő helyiségben is. A mérendő elemek sorrendje: légzésszám és légzési munka; szívfrekvencia és keringés (CRT); megjelenés/neurológiai értékelés; végül – stabil betegnél – testhőmérséklet.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 214
        },
        {
          "doc": "jegyzet",
          "page": 215
        },
        {
          "doc": "tankonyv",
          "page": 62
        }
      ],
      "notes": "A sokkos, súlyos nehézlégzésű vagy eszméletlen gyermek az elsődleges megtekintéssel kiszűrendő; a hemodinamikailag instabil, mérsékelt nehézlégzésű vagy megváltozott tudatú gyermek azonosításához vizuális vizsgálat + a gyermek értékelés háromszöge (PAT) szükséges."
    },
    {
      "id": "folyamat_27",
      "name": "MSTR 1-2. szintű gyermek azonnali továbbítása vitálmérés nélkül",
      "condition_text": "Az MSTR 1. (reszuszitáció) és MSTR 2. (kritikus) szintű gyermeket azonnal a megfelelő kezelő helyiségbe kell továbbítani, betegségtörténet és vitális paraméter mérése nélkül.",
      "source": [
        {
          "doc": "tankonyv",
          "page": 96
        },
        {
          "doc": "jegyzet",
          "page": 62
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_28",
      "name": "Alapelv: a beteget triázsoljuk, ne az osztály körülményeit",
      "condition_text": "Mindig az adott beteget triázsoljuk, ne pedig a sürgősségi osztály pillanatnyi körülményeit/helyzetét. A prioritás a beteg panaszaitól és állapotától függ, NEM a rendelkezésre álló erőforrások mértékétől.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 7
        },
        {
          "doc": "jegyzet",
          "page": 43
        },
        {
          "doc": "jegyzet",
          "page": 61
        },
        {
          "doc": "tankonyv",
          "page": 11
        }
      ],
      "notes": "A várakozási idő kényszerén alapuló 'felül-triázsolás' és a helyszűkén alapuló 'alul-triázsolás' (a triázs szétcsúszása) tipikus hibák."
    },
    {
      "id": "folyamat_29",
      "name": "Alapelv: mindig a legsúlyosabb részelem dönt",
      "condition_text": "Az MSTR szintet mindig a legsúlyosabb részelem alapján kell meghatározni – azaz a beteg bármely részeleme (vezető panasz, bármelyik elsődleges vagy másodlagos módosító) közül a legmagasabb szintet adó dönti el a végső besorolást.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 43
        },
        {
          "doc": "jegyzet",
          "page": 61
        },
        {
          "doc": "jegyzet",
          "page": 185
        },
        {
          "doc": "jegyzet",
          "page": 257
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_45_vitalis_normal",
      "name": "Alapelv: MSTR 4-5. szinten a vitális paramétereknek normálisnak kell lenniük",
      "condition_text": "A 4-es és 5-ös MSTR kategóriában a vitális paramétereknek normálisnak kell lenniük. Ha egy beteg vitális paraméterei eltérnek a normálistól, nem sorolható a 4. vagy 5. szintbe – magasabb (súlyosabb) kategóriába kell kerülnie.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 43
        },
        {
          "doc": "jegyzet",
          "page": 61
        },
        {
          "doc": "jegyzet",
          "page": 185
        },
        {
          "doc": "jegyzet",
          "page": 257
        }
      ],
      "notes": "KRITIKUS alapelv. A forrás nem sorolja fel az egyes vitálparaméterek konkrét normáltartományait ezen a helyen; azok a vitálküszöb/szint táblázatokból (más KB-szekció) veendők. Ez a szabály felnőttre és gyermekre egyaránt érvényes."
    },
    {
      "id": "folyamat_31",
      "name": "Alapelv: az MSTR szintet az aktuális állapot dönti el, nem a prehospitális beavatkozás",
      "condition_text": "Az MSTR szintet a beteg jelenlegi tünetei és módosítói határozzák meg, NEM az, hogy a mentő milyen beavatkozásokat végzett (vagy hogy végzett-e), és nem az intézeti protokoll. Pl. a nem légző vagy súlyos légzési elégtelenségben lévő beteg intubálva és intubálás nélkül is az 1-es szintre tartozik; a teljes gerincvédelemben, de súlyos trauma nélkül, stabilan érkező beteg a 3-4-es szintre kerülhet, függetlenül attól, hogy a protokoll folyamatos felügyeletet ír elő a nyaki gerinc tisztázásáig.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 95
        },
        {
          "doc": "jegyzet",
          "page": 141
        }
      ],
      "notes": "KRITIKUS alapelv. Az MSTR szint meghatározását nem az intézet, hanem a beteg aktuális állapota vezérli."
    },
    {
      "id": "folyamat_32",
      "name": "Bizonytalanság esetén felül-triázsolás",
      "condition_text": "'Ha bizonytalan, triázsoljon felfelé!' A felül-triázsolás minden olyan esetben megengedett – sőt a beteg biztonsága érdekében néha elengedhetetlen –, amikor a triázs személyzet bizonytalannak érzi magát, még akkor is, ha ez egyes betegek indokolatlan előre sorolásához vezethet.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 308
        },
        {
          "doc": "tankonyv",
          "page": 83
        },
        {
          "doc": "tankonyv",
          "page": 96
        }
      ],
      "notes": "Fiatal, tapasztalatlan ápolók hajlamosak indokolatlanul felül-triázsolni; a nagyon tapasztaltak esetenként alábecsülhetik a helyzetet."
    },
    {
      "id": "folyamat_33",
      "name": "Minőségi standard: kritikus beteg legalább MSTR 2",
      "condition_text": "A rendszer garantálja, hogy a kritikus állapotú beteget a triázs ápoló az elsődleges megtekintés, a vitális paraméterek és az elsődleges módosítók révén felismeri, és késedelem nélkül MSTR 2. vagy magasabb kategóriát kap, azonnali ellátás megkezdésével.",
      "source": [
        {
          "doc": "tankonyv",
          "page": 48
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_34",
      "name": "Teendő, ha a célidők nem teljesíthetők",
      "condition_text": "Ha az orvosi ellátás nem tudja teljesíteni a célidőket, nővéri újraértékelés szükséges; ha a beteg állapota romlik, értesíteni kell az orvost.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 44
        },
        {
          "doc": "jegyzet",
          "page": 114
        }
      ],
      "notes": ""
    },
    {
      "id": "folyamat_35",
      "name": "MEWS pontszám szerinti riasztás / újraértékelés",
      "condition_text": "A MEWS (Modified Early Warning Score) mutatóiban észlelt változás vagy bármely hirtelen, a beteg megszokott állapotától eltérő tünetegyüttes indítja az ellátói folyamatot. Kórházi körülmények között 4 vagy több MEWS pont a kritikus betegeket ellátó professzionális csapat AZONNALI riasztását indokolja (az elvárható beavatkozások, pl. légútbiztosítás mellett). 3 pont 1 órán belüli, 1-2 pont 2 órán belüli ismételt ellenőrzést és újraértékelést tesz szükségessé, a helyi orvosi rendszer értesítése mellett.",
      "source": [
        {
          "doc": "tankonyv",
          "page": 86
        }
      ],
      "notes": "A gépi feltétel a >=4 pontos azonnali riasztási küszöböt fejezi ki; a 3 és 1-2 pontos, alacsonyabb küszöbű teendők a condition_text-ben szerepelnek. A MEWS önmagában, a besorolástól függetlenül klasszikus triázs, és a kórházon kívüli ellátásban is használható. A MEWS pontszám kiszámításának forrásoldala (paraméterenkénti pontozótáblázat): tankönyv 86. o. (l. folyamat_39)."
    },
    {
      "id": "folyamat_39",
      "name": "MEWS pontozótáblázat (paraméterenkénti pontozás)",
      "condition_text": "A MEWS (Modified Early Warning Score) pontszáma öt paraméter egyszerű pontozásának összege. Légzésfrekvencia (/perc): <9 = 2 pont, 9-14 = 0 pont, 15-20 = 1 pont, 21-29 = 2 pont, >30 = 3 pont. Szívfrekvencia (/perc): <40 = 2 pont, 41-50 = 1 pont, 51-100 = 0 pont, 101-110 = 1 pont, 111-129 = 2 pont, >130 = 3 pont. Szisztolés vérnyomás (Hgmm): <70 = 3 pont, 71-80 = 2 pont, 81-100 = 1 pont, 101-199 = 0 pont, >200 = 2 pont. Testhőmérséklet (°C): <35 = 2 pont, 35,1-36 = 1 pont, 36,1-38 = 0 pont, 38,1-38,5 = 1 pont, >38,6 = 2 pont. Tudat: U (nem reagál) = 3 pont, P (fájdalomra reagál) = 2 pont, V (hangra reagál) = 1 pont, éber = 0 pont, újkeletű zavartság/agitáltság = 1 pont. Az egyes paraméterek pontszámát összeadva kapjuk a teljes MEWS pontszámot, amelyhez a riasztási/újraértékelési teendők tartoznak (l. folyamat_35).",
      "source": [
        {
          "doc": "tankonyv",
          "page": 86
        }
      ],
      "notes": "Ez a paraméterenkénti pontozótáblázat teszi lehetővé a folyamat_35-ben szereplő MEWS küszöbök (>=4 / 3 / 1-2 pont) értelmezését és a pontszám ellenőrzését/kiszámítását. A forrásban a legszélső oszlopok (3 pont) csak a legalacsonyabb, illetve legmagasabb értékeknél vannak kitöltve; a normál (0 pontos) sávok: légzés 9-14, szívfrekvencia 51-100, szisztolés vérnyomás 101-199, hőmérséklet 36,1-38 °C, tudat: éber."
    },
    {
      "id": "folyamat_36",
      "name": "Buktató: magas kockázatú gyermeket ne várakoztassunk",
      "condition_text": "Gyermeknél stabil vérnyomás és vitális paraméterek mellett is kialakulhat hirtelen instabilitás és összeomlás (a kompenzáció összeomlása). Ha a kórtörténet vagy a szülők elmondása alapján felmerül jelentős volumenvesztés, belső vérzés vagy szívbetegség (veleszületett vagy akut vírusos) gyanúja, a gyermeket NEM szabad várakoztatni, és lehetőleg soha nem a váróban.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 308
        }
      ],
      "notes": "A gyermekek fel-triázsolása különösen indokolt lehet, mert magas kockázatúak."
    },
    {
      "id": "folyamat_37",
      "name": "A triázs folyamat lehetséges hibái, buktatói",
      "condition_text": "Kerülendő triázs hibák: a hemodinamikai instabilitás (hipovolémia/hipotenzió) fel nem ismerése; gyermeknél a teljes test vizsgálatának elmulasztása; a perineális régió és a végtagfájdalom/duzzanat (mély szöveti fertőzés, fasciitis necrotisans) veszélyességének alulbecslése; a mentális eredetű panaszok alábecslése (ugyanolyan veszélyesek lehetnek, mint a belszervi/sebészeti panaszok); az új keletű furcsa viselkedés nem tekintése akut orvosi problémának (pl. hipoxia, akut delírium); a disztális végtag neurovaszkuláris értékelésének elmulasztása; a beteggel kapcsolatos negatív érzelmek/előítéletek befolyása a besorolásra; a beteg félelmeinek ('nem kapok levegőt', 'meg fogok halni') puszta szorongásként való félreértelmezése.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 308
        },
        {
          "doc": "jegyzet",
          "page": 310
        },
        {
          "doc": "tankonyv",
          "page": 83
        }
      ],
      "notes": "A triázs egyik fő buktatója, ha az ápolót érzelmei/előítéletei befolyásolják és nem objektíven értékel."
    },
    {
      "id": "folyamat_38",
      "name": "MSTR/CTAS 5. szintű beteg átirányítása/várakoztatása (vidéki, orvos nélküli osztály)",
      "condition_text": "Kizárólag olyan (kanadai vidéki mintájú) osztályokon, ahol nincs mindig jelen orvos, és csak érvényes helyi szabályzat és orvosi direktíva mellett: az MSTR/CTAS 5. szintű beteg átirányítható vagy várakoztatható, ha valamennyi feltétel teljesül: a beteg életkora meghaladja a 6 hónapot; az ápoló megítélése szerint a vitális paraméterek kielégítők, a testhőmérséklet 35 °C – 38,5 °C (60 év felett 38,3 °C); nincs klinikai javallata/igénye sürgős orvosi ellátásnak vagy megfigyelésnek; bizonytalanság esetén telefonos orvosi konzultáció megerősíti a nem sürgős jelleget; megvannak a megfelelő kórházi szabályzatok; az eljárást érvényes megállapodásban az orvosi és ápolói személyzet is elfogadta.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 312
        },
        {
          "doc": "tankonyv",
          "page": 85
        }
      ],
      "notes": "Speciális szervezési szabály (CAEP/SRPC – Rural Implementation of CTAS); nem alkalmazandó orvossal folyamatosan ellátott osztályon. A gépi feltétel az életkor (>6 hónap) és a testhőmérséklet-tartomány objektív részét fedi le; a 38,3 °C-os szigorúbb küszöb 60 év felett, valamint a többi (ápolói megítélés, orvosi konzultáció, helyi szabályzat) feltétel manuális."
    }
  ],
  "reference": [
    {
      "topic": "elsodleges_felnott",
      "id": "elsodleges_felnott_01",
      "name": "Elsődleges (vitális) meghatározók és elsődleges módosítók",
      "applies_to": "mind",
      "condition_text": "Elsődleges vitális meghatározók: A-B légzési distressz, C hemodinamikai státusz, D eszméleti szint. Elsődleges módosítók: láz, fájdalom, vérzékenység, sérülési mechanizmus. A triázs csak a pillanatnyilag stabil betegen kezdhető/végezhető el a triázs területén; instabil beteget azonnal ellátóhelyre kell vinni.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 79
        },
        {
          "doc": "tankonyv",
          "page": 31
        }
      ],
      "notes": "Áttekintő szabály; a konkrét szinteket az egyes tényezők külön szabályai adják.",
      "conflicts": [],
      "group": "egyeb_elsodleges"
    },
    {
      "topic": "elsodleges_felnott",
      "id": "elsodleges_felnott_21",
      "name": "SIRS kritériumok (definíció)",
      "applies_to": "mind",
      "condition_text": "SIRS: szisztémás gyulladásos válasz; 2 vagy több kritérium teljesülése: testhőmérséklet >38°C vagy <36°C; pulzusszám >90/min; légzésszám >20/min vagy PaCO2 <32 Hgmm (<4,3 kPa); fehérvérsejtszám >12000/mm³ vagy <4000/mm³ vagy >10% éretlen alak.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "tankonyv",
          "page": 35
        },
        {
          "doc": "jegyzet",
          "page": 84
        },
        {
          "doc": "jegyzet",
          "page": 112
        }
      ],
      "notes": "A fehérvérsejt FELSŐ küszöbe (>12000/mm³) csak a tankönyvből olvasható ki; a jegyzet forrásdiáján ez a szám csonka/hiányzik. Triázsban általában a testhő, pulzus, légzésszám kritériumok állapíthatók meg labor nélkül.",
      "conflicts": [],
      "group": "temperature"
    },
    {
      "topic": "elsodleges_felnott",
      "id": "elsodleges_felnott_22",
      "name": "Szepszis (definíció)",
      "applies_to": "mind",
      "condition_text": "Szepszis: bizonyított vagy feltételezett fertőzés + 2 vagy több SIRS kritérium.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 84
        },
        {
          "doc": "jegyzet",
          "page": 112
        },
        {
          "doc": "tankonyv",
          "page": 35
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "temperature"
    },
    {
      "topic": "elsodleges_felnott",
      "id": "elsodleges_felnott_23",
      "name": "Súlyos szepszis (definíció)",
      "applies_to": "mind",
      "condition_text": "Súlyos szepszis: szepszis + szervi elégtelenség, hypoperfúzió vagy hypotonia; a hypoperfúzió jelei többek között laktát-acidózis, oliguria (csökkent vizeletkiválasztás), a mentális állapot akut változása.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 84
        },
        {
          "doc": "jegyzet",
          "page": 112
        },
        {
          "doc": "tankonyv",
          "page": 35
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "temperature"
    },
    {
      "topic": "elsodleges_felnott",
      "id": "elsodleges_felnott_35",
      "name": "Fájdalom (E) – szubjektív + objektív együtt",
      "applies_to": "felnott",
      "condition_text": "A triázs szintet az állított (szubjektív, 10 pontos Likert/VAS) fájdalomszint ÉS az objektív megfigyelés (élettani jelek: tachycardia, arckifejezés, kényszertartás, disztressz) együttes értékelése alapján kell meghatározni; a triázs ápoló megítélése a mérvadó. Mind a beteg által jelzett, mind a felmért fájdalmat dokumentálni kell.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 87
        },
        {
          "doc": "tankonyv",
          "page": 37
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "topic": "elsodleges_felnott",
      "id": "elsodleges_felnott_36",
      "name": "Fájdalom – centrális vs. perifériás (definíció)",
      "applies_to": "felnott",
      "condition_text": "Centrális fájdalom: testüregből (fej, mellkas, has) vagy szervből (szem, herék, mély lágyrész) ered; szervet/végtagot/életet veszélyeztető állapotot kísérhet. Perifériás fájdalom: bőr, lágyrész, mozgásszervi (gerinc is) vagy felszíni szerv (szem, fül, orr) eredetű, ahol a veszélyes kórkép valószínűsége alacsony. KIVÉTEL: ha perifériás fájdalomnál a triázs ápoló életet/végtagot veszélyeztető állapotot gyanít (pl. nekrotizáló fasciitis), centrális fájdalomként kell kezelni. Megjegyzés: a csípőtáji törések perifériás fájdalommal járnak.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 88
        },
        {
          "doc": "tankonyv",
          "page": 37
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "topic": "elsodleges_felnott",
      "id": "elsodleges_felnott_37",
      "name": "Fájdalom – akut vs. krónikus (definíció)",
      "applies_to": "felnott",
      "condition_text": "Heveny (akut) fájdalom: új keletű, először jelentkező (kevesebb mint 1 hónapja fennálló, ha még nem kivizsgált); inkább jelez veszélyt. Krónikus fájdalom: ismert, folyamatos vagy visszatérő, megszokott jellegű. KIVÉTEL: a jellegében vagy súlyosságában megváltozott (krónikus) fájdalmat akutként kell értékelni.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 89
        },
        {
          "doc": "tankonyv",
          "page": 37
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "topic": "elsodleges_felnott",
      "id": "elsodleges_felnott_44",
      "name": "Baleseti mechanizmus – értelmezési szabály",
      "applies_to": "mind",
      "condition_text": "Az MSTR szintet a beteg jelenlegi tünetei és a módosítók határozzák meg, nem a mentői beavatkozás megléte vagy az intézeti protokoll. Súlyos traumát nem szenvedett, stabil, teljes gerincvédelemben érkező beteg MSTR 3 vagy 4 is lehet; a nyaki gerinc tisztázásáig folyamatos felügyelet írható elő helyi protokoll szerint.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 95
        },
        {
          "doc": "jegyzet",
          "page": 141
        },
        {
          "doc": "jegyzet",
          "page": 248
        }
      ],
      "notes": "applies_to felnott->mind: a mechanizmus gyermekre is vonatkozik (jegyzet 248. o. eset: 13é elgázolt, mechanizmus felülír; tankönyv 70. o. gyermek-fejezet felsorolja).",
      "conflicts": [],
      "group": "mechanism"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_01",
      "name": "Gyermek triázs folyamata: PAT (gyermekgyógyászati állapotfelmérési háromszög)",
      "applies_to": "gyermek",
      "condition_text": "A gyermek triázs első lépése az elsődleges megtekintés, amely NEM az ABCD szemléleten, hanem a gyermekgyógyászati állapotfelmérési háromszögön (PAT) alapul. A PAG 3-5 másodperc alatt végrehajtott gyors vizuális értékelés, három csúcsa: (1) Általános megjelenés, (2) Légzési munka, (3) Keringés. Célja a kritikus vagy gyorsan romló állapotú gyermek azonnali kiszűrése. Ha nincsenek MSTR 1. szintű jelek, a triázs folytatható: fertőző betegek kiszűrése -> vezető panasz -> elsődleges módosítók -> másodlagos módosítók -> MSTR szint -> újraértékelés.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 194
        },
        {
          "doc": "jegyzet",
          "page": 201
        },
        {
          "doc": "tankonyv",
          "page": 56
        }
      ],
      "notes": "Manuális megítélés. A PAT a felnőtt elsődleges megtekintés (ABCD) gyermek-megfelelője.",
      "conflicts": [],
      "group": "consciousness"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_02",
      "name": "Gyermek triázs irányelvek hatóköre (életkor-határok)",
      "applies_to": "gyermek",
      "condition_text": "A gyermek triázs irányelvek a születés pillanatától a serdülőkor végéig vonatkoznak; az irányelveket 16 éves korig való alkalmazásra fejlesztették, a kórház szabályzata alapján kiterjeszthető 16-18 évesekre. Ide tartoznak a különleges szükségletű, fejlődési rendellenességgel/fogyatékkal élők (pl. cerebral palsy, epilepszia) és a technológiától függő gyermekek (lélegeztetőgép, tápszonda) is.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 191
        },
        {
          "doc": "tankonyv",
          "page": 51
        }
      ],
      "notes": "",
      "conflicts": [
        {
          "doc": "tankonyv",
          "page": 51,
          "leiras": "A tankönyv (2016) csak 'születéstől a serdülőkor végéig' határt ad, a konkrét 16 illetve 16-18 éves felső határ a 2022-es jegyzetben szerepel."
        }
      ],
      "group": "pediatric"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_03",
      "name": "Felnőtt és gyermek triázs eltérései",
      "applies_to": "gyermek",
      "condition_text": "Azonos: a triázs folyamata, az 5 MSTR szint és definícióik, a vezető panaszok listája, a módosítók használata. Eltér: az elsődleges megtekintés alapja a PAT (nem ABCD); az anatómiai-élettani vizsgálat és a módosító tényezők alkalmazása; a felvételi panaszok jelentősége; a tünetek leírása nem biztos, hogy pontosan tükrözi a gyermek állapotát; az életkor és fejlettségi szint hatásai, pszicho-szociális szempontok; a kikérdezés korspecifikus módszertana. Összességében több a hasonlóság, mint a különbség.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 192
        },
        {
          "doc": "jegyzet",
          "page": 195
        },
        {
          "doc": "tankonyv",
          "page": 53
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_04",
      "name": "Gyermek vitális paraméter eltérés foka -> MSTR szint (színkódolt sávok)",
      "applies_to": "gyermek",
      "condition_text": "A gyermek vitális paramétereinek (légzésszám, pulzusszám) a normál értékektől való eltérése adja az MSTR szintet a G függelék korspecifikus táblázatai alapján: súlyos eltérés (piros) = MSTR 1; közepes fokú eltérés (narancs) = MSTR 2; enyhe eltérés (sárga) = MSTR 3; normál tartomány (zöld) = MSTR 4-5. A pontos sávhatárokat a vital_tables (légzésszám, pulzusszám) tartalmazza.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "tankonyv",
          "page": 63
        },
        {
          "doc": "jegyzet",
          "page": 217
        }
      ],
      "notes": "A tényleges kiértékelés a vital_tables sávhatárai alapján, gépileg. Súlyos beteg gyermeknél a NORMÁL vitálisak a keringés-/légzésleállás előjelei lehetnek.",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_15",
      "name": "Láz-pulzus összefüggés (gyermek)",
      "applies_to": "gyermek",
      "condition_text": "Általánosan elfogadott, hogy a gyermek szívfrekvenciája nem nőhet többel, mint 10-15 ütés/perc minden 1°C-os hőmérséklet-emelkedéssel. Ezt meghaladó tahikardia egyéb okra utalhat.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 235
        },
        {
          "doc": "tankonyv",
          "page": 70
        }
      ],
      "notes": "Értelmezési segédszabály, nem közvetlen szintbesorolás.",
      "conflicts": [],
      "group": "temperature"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_faj_01",
      "name": "Gyermek fájdalom: nincs centrális/perifériás megkülönböztetés",
      "applies_to": "gyermek",
      "condition_text": "A gyermekgyógyászati irányelvek NEM tesznek különbséget centrális és perifériás fájdalom között (szemben a felnőttel). Az értékelés: önértékelt súlyosság (enyhe/közepes/súlyos, kor-specifikus skálával) + időtartam (akut/krónikus) + ápolói objektív értékelés. Kor-specifikus skálák: FLACC, arckifejezés alapú (Wong-Baker féle / IASP FPS-R), 0-10 NRS, 4-pontos szóalapú. A triázs alatt mért fájdalom a mérvadó.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "tankonyv",
          "page": 71
        },
        {
          "doc": "jegyzet",
          "page": 243
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pain"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_faj_08",
      "name": "Csecsemő fájdalom vigasztalhatóság alapján",
      "applies_to": "gyermek",
      "condition_text": "Csecsemőnél a fájdalom vigasztalhatóság alapján: erős fájdalom = vigasztalhatatlan; közepes = vigasztalható; enyhe = figyelme könnyen elvonható. (A FLACC 'Vigasztalhatóság' kategóriájával összhangban.)",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 242
        }
      ],
      "notes": "Besoroláshoz a fájdalom-súlyosság táblázattal (gyermek_faj_02..07) kombinálandó.",
      "conflicts": [],
      "group": "pain"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_17",
      "name": "MSTR 1-2 gyermek azonnali továbbítása vitálmérés nélkül",
      "applies_to": "gyermek",
      "condition_text": "Az MSTR 1 (reszuszcitáció) és MSTR 2 (kritikus) szintű gyermekeket azonnal a megfelelő kezelőhelyiségbe kell továbbítani, betegségtörténet és vitális paramétermérés nélkül. A sokkos, súlyos nehézlégzéssel küzdő vagy eszméletlen gyermeket az elsődleges megtekintés (PAT) szűri ki. Reszuszcitációs/kritikus gyermek nem várakoztatható.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "tankonyv",
          "page": 96
        },
        {
          "doc": "tankonyv",
          "page": 62
        },
        {
          "doc": "jegyzet",
          "page": 215
        }
      ],
      "notes": "Folyamati szabály; a szintet a PAT/klinikai kép adja.",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_18",
      "name": "Gyermekek kompenzált sokkja -> azonnali aktív ellátás (buktató)",
      "applies_to": "gyermek",
      "condition_text": "A gyermekek kompenzált sokkja azonnali aktív ellátást igényel. Buktató: a gyermekek vérnyomás-megtartó képessége és normálisnak tűnő vitális paraméterei elfedhetik a súlyos állapotot; a bradikardia és hipotenzió baljós, késői jelek. Ha bizonytalan, triázsoljon felfelé; a gyermekek magas kockázatú csoport.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "tankonyv",
          "page": 83
        },
        {
          "doc": "jegyzet",
          "page": 308
        }
      ],
      "notes": "Figyelmeztető/buktató szabály.",
      "conflicts": [],
      "group": "hemodynamic"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_19",
      "name": "Vitális paraméter mérés időzítése triázs szint szerint (gyermek)",
      "applies_to": "gyermek",
      "condition_text": "Minden gyermeknél kötelező a vitális paraméterek mérése és rögzítése. Időzítés: MSTR 1-2 -> az ellátás alatt (a gyermek nem várakoztatható); MSTR 3 -> a triázs döntés alátámasztására és a várakozás biztonságának megítélésére; MSTR 4-5 -> a triázs folyamat közben vagy a kezelőhelyiségben. Élettani értékelés sorrendje: légzésszám és légzési munka -> szívfrekvencia és keringés (CRT) -> megjelenés/neurológia -> (stabil betegnél) testhőmérséklet.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "tankonyv",
          "page": 62
        },
        {
          "doc": "jegyzet",
          "page": 215
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_20",
      "name": "Gyermek testhőmérséklet-mérés módszere életkor szerint",
      "applies_to": "gyermek",
      "condition_text": "Ajánlott mérési mód (Heim Pál Gyermekkórház SBO): 3 éves korig elsődleges a végbélben (definitív), másodlagos a hónaljban; 3-6 év: elsődleges hónalj, másodlagos végbél, harmadlagos fül; 6 év felett: elsődleges hónalj, másodlagos fül. A rektális mérés jelzi legpontosabban a maghőmérsékletet 3 év alatt, DE immunszupprimált újszülöttnél/gyermeknél NEM ajánlott (végbélsérülés és fertőzés veszélye) - hónaljban mérendő.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 235
        },
        {
          "doc": "tankonyv",
          "page": 69
        },
        {
          "doc": "tankonyv",
          "page": 92
        }
      ],
      "notes": "A tankönyv E függeléke (p92) '2 év alatt' rektális mérést ír, a jegyzet/Heim Pál ajánlás '3 éves korig'.",
      "conflicts": [
        {
          "doc": "tankonyv",
          "page": 92,
          "leiras": "Tankönyv E függelék: rektális mérés minden 2 év alatti gyermeknél (kivéve immunhiányos). A jegyzet/Heim Pál ajánlás 3 éves korig ír rektális elsődleges mérést."
        }
      ],
      "group": "temperature"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_22",
      "name": "CIAMPEDS gyermek felvételi anamnézis",
      "applies_to": "gyermek",
      "condition_text": "Fiatalabb gyermeknél a pontos triázshoz a CIAMPEDS lista felvétele javasolt: C - Panasz (max. 2 a panaszlistáról); I - Immunológiai/infektológiai státusz (kötelező immunizáció, szükség esetén elkülönítés); A - Allergiák; M - Gyógyszerek (vitaminok, homeopátiás szerek is); P - a szülők tapasztalatai/benyomása (miért ma hozták); E - Események/körülmények; D - Diéta (mikor/mit evett legutóbb); S - Jelek és tünetek. Minden normáltól eltérő viselkedés (étkezés, személyiség, magatartás) figyelembe veendő.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 211
        },
        {
          "doc": "jegyzet",
          "page": 212
        },
        {
          "doc": "tankonyv",
          "page": 61
        }
      ],
      "notes": "Forrás: ENA ENPC provider manual (2004), 3rd ed. Anamnézis-eszköz, nem közvetlen szintbesorolás.",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_23",
      "name": "Gyermek szubjektív értékelés (kikérdezés) korcsoportonként",
      "applies_to": "gyermek",
      "condition_text": "A kikérdezés módja korfüggő: Csecsemő -> a gondozóhoz intézett kérdések, a gyermek a gondozó karjában, invazív vizsgálat (pl. testhőmérséklet) a végén; Kisded -> megfigyelés a gondozó karjában és játék közben, invazív vizsgálat utoljára; Óvodás -> kornak megfelelő nyelvezet, a gyermek részt vehet az anamnézisben, invazív vizsgálat a végén; Iskolás/serdülő -> részvétel ösztönzése, a személyiségi jogok és magánszféra tiszteletben tartása. Az alvó csecsemőt fel kell ébreszteni (külleme megegyezhet az eszméletlenével).",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "tankonyv",
          "page": 60
        },
        {
          "doc": "jegyzet",
          "page": 210
        },
        {
          "doc": "jegyzet",
          "page": 202
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_24",
      "name": "Gyermek pszicho-szociális jellemzők korcsoportonként",
      "applies_to": "gyermek",
      "condition_text": "Korcsoportonkénti sajátságok: Csecsemő (0-1 év) - ölelgetés, cumi, zene, betakarás; Kisded (1-3 év) - buborékok, játék, fél az elválástól; Óvodás (3-6 év, tankönyvben 3-5) - matricák, játékos vizsgálat, szó szerint értelmez; Iskolás (6-12 év, tankönyvben 5-12) - bevonás, választás, magyarázat, fél a fájdalomtól/elcsúfítástól; Serdülő (12+) - testkép, egyedül vizsgálandó, kábítószer/depresszió figyelése, bizalom. Bénult/hidrokefál gyermek intelligenciája gyakran normális; Down-szindrómásé eltérő lehet.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "tankonyv",
          "page": 55
        },
        {
          "doc": "jegyzet",
          "page": 199
        }
      ],
      "notes": "Korcsoport-életkorhatárokban kis eltérés a két forrás közt (óvodás/iskolás).",
      "conflicts": [
        {
          "doc": "tankonyv",
          "page": 55,
          "leiras": "Tankönyv: Óvodás 3-5 év, Iskolás 5-12 év. Jegyzet: Óvodás 3-6 év, Iskolás 6-12 év."
        }
      ],
      "group": "pediatric"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_25",
      "name": "Gyermekgyógyászati anatómiai különbségek",
      "applies_to": "gyermek",
      "condition_text": "Nagy fejméret -> hajlam fejsérülésre kis esésnél is; szűkebb légutak -> könnyebb elzáródás (idegentest, nyák, ödéma), csecsemők orrlégzők, nagy nyelv, hajlékony nyak; magasabb légzésszám, fokozott segédizom-használat, változékony mellkasi/hasi légzés; a testsúly igen változó (400 g / 26-hetes koraszülöttől ~100 kg serdülőig). A kg-ban mért testsúly fontos megítélési és kezelési adat.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "tankonyv",
          "page": 54
        },
        {
          "doc": "jegyzet",
          "page": 197
        }
      ],
      "notes": "Háttérismeret.",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "topic": "gyermek",
      "id": "gyermek_26",
      "name": "Gyermekgyógyászati élettani különbségek",
      "applies_to": "gyermek",
      "condition_text": "Éretlen immunrendszer -> fokozott szepszis-rizikó < 3 hónapos csecsemőnél, bakteriémia-kockázat < 2 évesnél; fokozott anyagcsere (nagyobb O2-, glükózigény, folyadékvesztés); nagyobb testfelület/testsúly arány; kisebb keringő vérmennyiség (~70 ml/kg) -> kis vérvesztés is jelentős; magas testfolyadék-arány (csecsemőnél a testtömeg 75-80%-a) -> kiszáradás kiemelt veszély; vese korlátozott koncentráló képesség (vizelet 1-2 ml/kg/óra). A gyermek szívfrekvencia-emelés nélkül nem tudja növelni a perctérfogatot; a bradikardia és hipotenzió baljós jelek.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "tankonyv",
          "page": 54
        },
        {
          "doc": "jegyzet",
          "page": 198
        }
      ],
      "notes": "Háttérismeret; alátámasztja a vitális küszöbök és a kiszáradás-értékelés fontosságát.",
      "conflicts": [],
      "group": "pediatric"
    },
    {
      "topic": "masodlagos",
      "id": "masodlagos_01",
      "name": "Másodlagos meghatározó és módosító tényezők – definíció és alkalmazási elv",
      "applies_to": "mind",
      "condition_text": "A másodlagos módosítók panasz-specifikusak, és csak bizonyos vezető panaszok esetén alkalmazandók. Két esetben használjuk őket: (1) kiegészítik az elsődleges módosítókat a megfelelő MSTR szint biztosításához, VAGY (2) nélkülözhetetlenek olyan panaszoknál, ahol az elsődleges módosítók irrelevánsak/alkalmatlanok a súlyossági szint megállapítására (pl. vércukorszint, kiszáradás mértéke, magas vérnyomás). Alkalmazásuk esetenként magasabb (súlyosabb) MSTR szint kiosztását teszi lehetővé, mint amit az elsődleges módosítók indokolnának. A triázs folyamatban a sorrend: elsődleges megtekintés → fertőző betegek kiszűrése → vezető panasz → elsődleges módosítók → másodlagos módosítók.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 96
        },
        {
          "doc": "jegyzet",
          "page": 249
        },
        {
          "doc": "jegyzet",
          "page": 284
        },
        {
          "doc": "jegyzet",
          "page": 285
        },
        {
          "doc": "tankonyv",
          "page": 43
        },
        {
          "doc": "tankonyv",
          "page": 74
        },
        {
          "doc": "tankonyv",
          "page": 75
        }
      ],
      "notes": "Áttekintő szabály; a konkrét szinteket az egyes tényezők külön szabályai adják. A tankönyv 7 másodlagos módosítót sorol fel (2.4): vércukorszint, folyadékhiány súlyossága, magas vérnyomás, szív eredetű mellkasi fájdalom, stroke tünetek/féloldali végtaggyengeség, nyelési zavar, jelentős deformitással járó végtagsérülés.",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "topic": "masodlagos",
      "id": "masodlagos_06",
      "name": "Vércukormérés indikációi és mérési szabály",
      "applies_to": "mind",
      "condition_text": "A vércukorszintre gondolni kell minden diabéteszes, megváltozott tudatállapotú, remegő, általános gyengeségben szenvedő, szinkopés-preszinkopés betegnél. A triázs vizsgálat során KÖTELEZŐ a mérés: módosult tudati állapot, zavartság, görcsrohamok és ismert cukorbetegség esetén. A vércukormérés a triázs során csak a stabil állapotú betegnél végezhető el; az instabil beteget azonnal a kezelőhelyiségben kell elhelyezni, a mérést az azonnali beavatkozások hátráltatása nélkül, de mielőbb el kell végezni.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 96
        },
        {
          "doc": "tankonyv",
          "page": 43
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "topic": "masodlagos",
      "id": "masodlagos_20",
      "name": "Hipertenzió – besorolási elv",
      "applies_to": "felnott",
      "condition_text": "A hipertenziós beteg MSTR szintjét a vérnyomásértékek ÉS a kísérő tünetek (fejfájás, hányinger, nehézlégzés, mellkasi fájdalom) megléte/hiánya alapján kell megállapítani. Általában helyesebb a jelen vezető panasz alapján meghatározni a CEDIS vezető panaszt (nem a hipertenziót), hacsak nem a vérnyomás-módosító vezet magasabb sürgősségi kategóriába. Ha az MSTR 2. szintnek megfelelő magas vérnyomású beteg panaszai közt mellkasi fájdalom vagy nehézlégzés szerepel, azt kell vezető panasznak választani.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 99
        },
        {
          "doc": "tankonyv",
          "page": 46
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "topic": "masodlagos",
      "id": "masodlagos_21",
      "name": "Gyermek hipertónia – percentilis határértékek",
      "applies_to": "gyermek",
      "condition_text": "Gyermeknél a magas vérnyomás percentilis alapján ítélendő meg (életkorra és 50. percentilis testmagasságra vonatkoztatva, megfelelő méretű mandzsettával): borderline (határérték) hipertónia = életkorra vonatkoztatott 90. percentilis; hipertónia = életkorra vonatkoztatott 95. percentilis. A vérnyomás mérése különösen fontos ismert vesebetegség, magas vérnyomással összefüggő állapotok és vérnyomást befolyásoló gyógyszerek szedése esetén. A vérnyomás a súlyos keringési hatásokat okozó volumenhiány késői indikátora.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 252
        },
        {
          "doc": "tankonyv",
          "page": 98
        }
      ],
      "notes": "Pontos numerikus küszöbtáblázat a forrásban nincs, csak grafikon (G Függelék). Közelítő szisztolés értékek (50. percentilis testmagasság): 1 év kb. 99-103 Hgmm, 17 év kb. 132-136 Hgmm. Forrás: The Fourth Report..., Pediatrics 2004;114:555-576.",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "topic": "masodlagos",
      "id": "masodlagos_25",
      "name": "Környezeti (hideg) ártalom – eljárási szabály",
      "applies_to": "mind",
      "condition_text": "A legtöbb hideg ártalomnál a központi (mag)hőmérséklet pontos mérése elengedhetetlen; ezt követően passzív külső melegítés folyamatos megfigyelés mellett, és a járulékos sérülések feltárása. A < 32°C maghőmérsékletű betegnél invazív melegítést kell/megfontolandó alkalmazni.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 294
        },
        {
          "doc": "tankonyv",
          "page": 79
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "topic": "masodlagos",
      "id": "masodlagos_34",
      "name": "Terhesség > 20. hét – klinikai eljárási szabályok",
      "applies_to": "felnott",
      "condition_text": "Vajúdás esetén 2 percenkénti fájásoknál a fájdalom önmagában nem visz 1-es triázs szintre akkor sem, ha 10/10 erősségű. Életet veszélyeztető atóniás vérzésnél a beteget MSTR 1-re triázsoljuk. Magzati aprórész/köldökzsinór előesésnél térd-könyök helyzetben szállítás. Fejfájás + ödéma + hasi fájdalom + hipertónia a HELLP-szindróma / eclampsia veszélyét jelzi (anya és magzat is veszélyben).",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 295
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "topic": "masodlagos",
      "id": "masodlagos_35",
      "name": "Mentális egészség – öngyilkossággal kapcsolatos definíciók",
      "applies_to": "mind",
      "condition_text": "Öngyilkossági kísérlet: nem halálos kimenetelű önsértő magatartás, közvetlen/közvetett bizonyítékkal arra, hogy a beteg megpróbált véget vetni életének (akkor is, ha kevesebb gyógyszert/vegyi anyagot vett be, de suicid szándékkal; az elkövetőnek nem kell ismernie a halálos mennyiséget – pl. demens, mentálisan retardált, kiskorú). Öngyilkossági szándék: halállal végződő önsértő cselekedet szubjektív elfogadása vagy kívánalma. Öngyilkosság gondolata: öngyilkos gondolatok, komolyságuk a konkrét szándék és terv függvénye.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 297
        },
        {
          "doc": "tankonyv",
          "page": 81
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "topic": "masodlagos",
      "id": "masodlagos_36",
      "name": "Mentális egészség – biztonsági kockázatot hordozó beteg definíció",
      "applies_to": "mind",
      "condition_text": "Biztonsági kockázatot hordozó beteg: saját maga vagy mások felé irányuló erőszakkal fenyegetőző; kontrollálatlan haragot, nyugtalanságot, paranoiás állapotot vagy hallucinációkat tanúsító; képtelen vagy nem akar együttműködni az öngyilkossági rizikót értékelő személyzettel; veszélyeztető/közveszélyes, szállíthatatlan beteg. Ilyenkor őrzött megfigyelés elrendelése szükséges (ha a személyi és tárgyi feltételek adottak). Biztonsági kockázatot hordozó beteggel ne maradjunk egyedül a triázs vizsgálóban. (Ha családtag felajánlja a beteg figyelemmel kísérését és mindkét fél beleegyezik, a kórházi őrzött megfigyelés esetenként nem szükséges.)",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 297
        },
        {
          "doc": "tankonyv",
          "page": 81
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "topic": "masodlagos",
      "id": "masodlagos_37",
      "name": "Mentális egészség – szorongás/izgatottság fokozatainak definíciója",
      "applies_to": "mind",
      "condition_text": "Súlyos szorongás/izgatottság: rendkívül nyugtalan, retteg/aggódó, emelkedett katekolamin-szint jeleivel (↑RR, ↑HR), veszélyes mértékben izgatott, nem együttműködő, kérésre sem nyugszik meg; a figyelem nem kelthető fel, suicídium veszélye fennáll. Közepes fokú: nyugtalan, retteg/aggódó, nem nyilvánvaló tachikardia/remegés; utasításokat nem következetesen hajt végre; a figyelem 5-10 percig tartható fenn. Enyhe: enyhén nyugtalan, megnyugtatható, együttműködő, utasításokat végrehajt; a figyelem felkelthető és fenntartható.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 298
        },
        {
          "doc": "tankonyv",
          "page": 81
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "topic": "masodlagos",
      "id": "masodlagos_38",
      "name": "Mentális egészség – pszichózis/paranoia/hallucináció definíciók",
      "applies_to": "mind",
      "condition_text": "Akut pszichózis: a realitás zavara, összefüggéstelen, a valóságtól elrugaszkodott beszéd, hallucinációk és/vagy téveszmék, esetleg ellenséges magatartás, elhanyagolt megjelenés. Paranoia: üldöztetéses téveszmék (követik, meg akarják mérgezni, ártani akarnak, mások róla beszélnek), jelentős félelemmel/izgatottsággal/ellenséges magatartással. Krónikus hallucinációk: ismert hallucinációkkal küzdő beteg, a közelmúltban nincs változás a hallucinációk természetében/gyakoriságában (a beteg felismeri, hogy hallucinál). Krónikus, nem sürgős állapot: ismert, visszajáró beteg teljesen ismert panaszokkal, csak melegedni/enni akar. A pszichotikus/paranoid beteg általában veszélyeztető állapotú lehet.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 299
        },
        {
          "doc": "tankonyv",
          "page": 81
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "topic": "masodlagos",
      "id": "masodlagos_39",
      "name": "Mentális egészség – furcsa/bizarr viselkedés definíciók",
      "applies_to": "mind",
      "condition_text": "Ellenőrizetlen (nem kontrollált): furcsa, dezorientált, irracionális, verbális kommunikációval és érveléssel nem irányítható viselkedés, amely a beteget vagy másokat veszélyezteti – biztonsági kockázat. Ellenőrzött (kontrollált): veszélyesnek látszó, de verbális érveléssel irányítható viselkedés; a beteget családtag/barát kíséri. Ártalmatlan, de furcsa viselkedés: furcsa/különc, általában hosszú ideje fennálló, a beteg normál viselkedéséhez képest jelentős változás nélküli viselkedés, amely nem veszélyeztet és nem igényel akut beavatkozást (de a többi várakozót zavarhatja, ezért ne várakozzon sokáig a váróban).",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 300
        },
        {
          "doc": "tankonyv",
          "page": 81
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "topic": "masodlagos",
      "id": "masodlagos_40",
      "name": "Mentális egészség – az elsődleges módosítók szerepe",
      "applies_to": "mind",
      "condition_text": "A legtöbb mentális egészséggel kapcsolatos panasznál az elsődleges módosítóknak nincs szerepük, ezért a panasz-specifikus másodlagos módosítók ismerete és használata kiemelten fontos. (Kivéve, ha vitális eltérés vagy sérülés súlyosabb szintet indokol.)",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 301
        },
        {
          "doc": "jegyzet",
          "page": 286
        },
        {
          "doc": "tankonyv",
          "page": 83
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "topic": "masodlagos",
      "id": "masodlagos_48",
      "name": "Öngyilkosság/túladagolás – súlyosbító vitális és egyéb jelek",
      "applies_to": "mind",
      "condition_text": "Kóros vérnyomás(-eltérés), szabálytalan pulzus vagy megnyúlt kapilláris újratelődés (CRT) súlyosabb MSTR szintet követel (sok túladagolásos esetben együtt jár). A triázs alatt felmért egyéb tünetek (pl. anisocoria, sérülések jelei, nem adekvát válaszadás) szintén magasabb MSTR szintet eredményeznek.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 320
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "topic": "masodlagos",
      "id": "masodlagos_79",
      "name": "Nemi erőszak – vezető panasz megválasztásának szabálya",
      "applies_to": "mind",
      "condition_text": "Nem megfelelő a beteget 'nemi erőszak áldozataként' triázsolni, csak ha a beteg maga bevallja, vagy a rendőrség szállítja világos beteg-történettel; egyébként a másodlagos módosító 'feltételezett nemi erőszak, stabil beteg'.",
      "condition": [],
      "level": null,
      "source": [
        {
          "doc": "jegyzet",
          "page": 326
        }
      ],
      "notes": "",
      "conflicts": [],
      "group": "secondary"
    },
    {
      "topic": "szintek",
      "id": "szintek_01",
      "name": "GCS 3-9 automatikus 1. szint (reszuszcitáció)",
      "condition_text": "GCS 3-9: jelentős sérülést vagy az agyműködés jelentős károsodását jelzi, a beteg automatikusan a reszuszcitációs szintre (MSTR 1) triázsolandó. Eszméletlen: válaszképtelen, képtelen a légutak védelmére, cél nélküli válasz fájdalomra/hangos zajra, folyamatos görcsök vagy folyamatosan romló tudati állapot.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 232
        },
        {
          "doc": "tankonyv",
          "page": 25
        }
      ]
    },
    {
      "topic": "szintek",
      "id": "szintek_02",
      "name": "GCS 10-13 automatikus 2. szint (kritikus)",
      "condition_text": "GCS 10-13: csökkent agyi funkciót jelent, a beteget a kritikus kategóriába (MSTR 2) helyezi. Megváltozott tudatállapot: levertség, fájdalmat lokalizál, zavartság, dezorientált, nyugtalan/ingerlékeny/izgatott/harcias, megnyugtathatatlan; a légút védelmére képes; a normál vitális paraméterektől kismértékben tér el, éber.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 232
        },
        {
          "doc": "tankonyv",
          "page": 25
        }
      ]
    },
    {
      "topic": "szintek",
      "id": "szintek_03",
      "name": "GCS 14-15 esetén a szint 3, 4 vagy 5 lehet",
      "condition_text": "GCS 14-15: a beteg eszméleténél van, éber, térben és időben orientált, korának megfelelően együttműködő, vigasztalható; ilyenkor a besorolás MSTR 3, 4 vagy 5 lehet (a vezető panasz és a módosítók döntik el). Demens, kognitív zavarban szenvedő vagy krónikus idegrendszeri károsodással élő betegnél az alapszintű funkcióhoz képesti eltérést kell értékelni.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 232
        }
      ]
    },
    {
      "topic": "szintek",
      "id": "szintek_04",
      "name": "Sorrend azonos triázs szinten várakozó betegek között",
      "condition_text": "Azonos szinten várakozó (tipikusan 3. szintű) betegek közül mindig a leginkább betegnek tűnő pácienst kell először ellátáshoz juttatni. Ha az összes beteg egyformán súlyos, a legtöbbet (leghosszabb ideje) várakozó élvez prioritást. A 2-3. szintű betegek túlzott várakoztatása a váróban nem biztonságos.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 34
        }
      ]
    },
    {
      "topic": "szintek",
      "id": "szintek_05",
      "name": "Az elsődleges triázs szint nem változtatható meg",
      "condition_text": "Az újraértékelés során a triázs ápoló rögzíti a tapasztalt változásokat és a beteg súlyossági kategóriájának változásait, az elsődleges (első) triázs szint azonban nem változtatható meg.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 36
        }
      ]
    },
    {
      "topic": "szintek",
      "id": "szintek_06",
      "name": "Célidő be nem tartása esetén nővéri újraértékelés",
      "condition_text": "Ha az orvosi ellátás nem tudja teljesíteni a szinthez tartozó célidőket, nővéri újraértékelés szükséges; ha a beteg állapota romlik, az orvos értesítése szükséges.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 193
        }
      ]
    },
    {
      "topic": "szintek",
      "id": "szintek_07",
      "name": "A triázs megkezdésének 10 perces időkerete",
      "condition_text": "A beteg megérkezése és a triázs megkezdése között nem telhet el több mint 10 perc (MSTR ajánlás). Ez a triázs folyamat megkezdésére vonatkozik, nem az orvosi ellátás megkezdésére; a triázs vizsgálat elvégzése is maximum 10 percen belül a cél.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 31
        },
        {
          "doc": "jegyzet",
          "page": 22
        }
      ]
    }
  ],
  "vitalsReference": [
    {
      "name": "Légzés (A-B) – nehézlégzés fokozatai és MSTR-szint",
      "source": [
        {
          "doc": "jegyzet",
          "page": 80
        },
        {
          "doc": "jegyzet",
          "page": 109
        },
        {
          "doc": "tankonyv",
          "page": 32
        }
      ],
      "data": {
        "name": "Légzés (A-B) – nehézlégzés fokozatai és MSTR-szint",
        "rows": [
          {
            "fokozat": "Súlyos",
            "mstr": 1,
            "o2_szaturacio": "<90%",
            "becsult_pefr": "-",
            "leiras": "Fáradtság a fokozott légzési munka miatt, cyanosis, egyszavas beszéd/beszédképtelenség, felső légúti elzáródás, letargikus/zavart, lélegeztetést igényel"
          },
          {
            "fokozat": "Közepes (mérsékelt)",
            "mstr": 2,
            "o2_szaturacio": "90-92%",
            "becsult_pefr": "<40%",
            "leiras": "Fokozott légzési munka, néhány szavas kifejezések/részmondatok, kifejezett vagy romló stridor védett légutak mellett"
          },
          {
            "fokozat": "Enyhe",
            "mstr": 3,
            "o2_szaturacio": "92-94%",
            "becsult_pefr": "40-60%",
            "leiras": "Dyspnoe/tachypnoe/terhelési dyspnoe fokozott légzési munka nélkül, mondatokat képes mondani, stridor/légúti szűkület nélkül"
          },
          {
            "fokozat": "Nincs nehézlégzés",
            "mstr": "4-5",
            "o2_szaturacio": ">94%",
            "becsult_pefr": ">60%",
            "leiras": "Nincs nehézlégzés (tankönyvi sor)"
          }
        ],
        "megjegyzes": "Relatív szabály: a beteg saját normál szaturációjához képest 10% csökkenés → MSTR 1. A 92% határérték a közepes és az enyhe sávban is szerepel a forrásban.",
        "source": [
          {
            "doc": "jegyzet",
            "page": 80
          },
          {
            "doc": "jegyzet",
            "page": 109
          },
          {
            "doc": "tankonyv",
            "page": 32
          }
        ]
      }
    },
    {
      "name": "Keringés (C) – hemodinamikai státusz és MSTR-szint",
      "source": [
        {
          "doc": "jegyzet",
          "page": 82
        },
        {
          "doc": "jegyzet",
          "page": 110
        },
        {
          "doc": "tankonyv",
          "page": 33
        }
      ],
      "data": {
        "name": "Keringés (C) – hemodinamikai státusz és MSTR-szint",
        "rows": [
          {
            "allapot": "Sokk",
            "mstr": 1
          },
          {
            "allapot": "Hemodinamikai instabilitás",
            "mstr": 2
          },
          {
            "allapot": "Stabil, de potenciálisan instabil",
            "mstr": 3
          },
          {
            "allapot": "Normál vitális paraméterek",
            "mstr": "4-5"
          }
        ],
        "source": [
          {
            "doc": "jegyzet",
            "page": 82
          },
          {
            "doc": "jegyzet",
            "page": 110
          },
          {
            "doc": "tankonyv",
            "page": 33
          }
        ]
      }
    },
    {
      "name": "Tudati állapot (D) – GCS-sávok és MSTR-szint",
      "source": [
        {
          "doc": "jegyzet",
          "page": 83
        },
        {
          "doc": "jegyzet",
          "page": 111
        },
        {
          "doc": "tankonyv",
          "page": 34
        },
        {
          "doc": "tankonyv",
          "page": 90
        }
      ],
      "data": {
        "name": "Tudati állapot (D) – GCS-sávok és MSTR-szint",
        "rows": [
          {
            "tudat": "Eszméletlen",
            "gcs": "3-9",
            "mstr": 1
          },
          {
            "tudat": "Módosult tudati állapot",
            "gcs": "10-13",
            "mstr": 2
          },
          {
            "tudat": "Normál tudatállapot",
            "gcs": "14-15",
            "mstr": "3-5"
          }
        ],
        "megjegyzes": "GCS 3-9 automatikusan reszuszcitációs (1.) szint. GCS minimum 3, maximum 15.",
        "source": [
          {
            "doc": "jegyzet",
            "page": 83
          },
          {
            "doc": "jegyzet",
            "page": 111
          },
          {
            "doc": "tankonyv",
            "page": 34
          },
          {
            "doc": "tankonyv",
            "page": 90
          }
        ]
      }
    },
    {
      "name": "GCS pontozó tábla (felnőtt)",
      "source": [
        {
          "doc": "tankonyv",
          "page": 90
        }
      ],
      "data": {
        "name": "GCS pontozó tábla (felnőtt)",
        "rows": [
          {
            "kategoria": "Szemnyitás",
            "4": "Spontán",
            "3": "Felszólításra",
            "2": "Fájdalomra",
            "1": "Nincs"
          },
          {
            "kategoria": "Verbális válasz",
            "5": "Tájékozott, orientált",
            "4": "Zavart",
            "3": "Inadekvát beszéd",
            "2": "Érthetetlen hangadás",
            "1": "Nincs",
            "T": "Intubált"
          },
          {
            "kategoria": "Motoros válasz",
            "6": "Parancsot teljesít",
            "5": "Fájdalmat lokalizál",
            "4": "Elhárítás fájdalomra",
            "3": "Abnormál flexió",
            "2": "Extenzió",
            "1": "Nincs"
          }
        ],
        "source": [
          {
            "doc": "tankonyv",
            "page": 90
          }
        ]
      }
    },
    {
      "name": "Láz (E, kor ≥17 év, ≥38°C) – küllem-kategóriák és MSTR-szint",
      "source": [
        {
          "doc": "jegyzet",
          "page": 85
        },
        {
          "doc": "jegyzet",
          "page": 112
        },
        {
          "doc": "tankonyv",
          "page": 35
        },
        {
          "doc": "tankonyv",
          "page": 36
        }
      ],
      "data": {
        "name": "Láz (E, kor ≥17 év, ≥38°C) – küllem-kategóriák és MSTR-szint",
        "rows": [
          {
            "kullem": "Immunszupprimált",
            "mstr": 2,
            "kriterium": "neutropenia (vagy gyanúja), kemoterápia/immunszuppresszív gyógyszer/szteroid, transzplantált"
          },
          {
            "kullem": "Szeptikus küllem",
            "mstr": 2,
            "kriterium": "3 pozitív SIRS kritérium VAGY hemodinamikai instabilitás VAGY közepes fokú nehézlégzés VAGY módosult tudat"
          },
          {
            "kullem": "Súlyos beteg küllem",
            "mstr": 3,
            "kriterium": "<3 pozitív SIRS kritérium, de kinézetre beteg (flush/sápadt, elesett)"
          },
          {
            "kullem": "Jó általános állapot",
            "mstr": 4,
            "kriterium": "láz az egyetlen pozitív SIRS kritérium, egészséges küllem, nincs nehézlégzés"
          }
        ],
        "source": [
          {
            "doc": "jegyzet",
            "page": 85
          },
          {
            "doc": "jegyzet",
            "page": 112
          },
          {
            "doc": "tankonyv",
            "page": 35
          },
          {
            "doc": "tankonyv",
            "page": 36
          }
        ]
      }
    },
    {
      "name": "SIRS kritériumok (triázsban)",
      "source": [
        {
          "doc": "tankonyv",
          "page": 35
        },
        {
          "doc": "jegyzet",
          "page": 112
        }
      ],
      "data": {
        "name": "SIRS kritériumok (triázsban)",
        "rows": [
          {
            "kriterium": "Testhőmérséklet",
            "ertek": ">38°C vagy <36°C"
          },
          {
            "kriterium": "Pulzusszám",
            "ertek": ">90/min"
          },
          {
            "kriterium": "Légzésszám",
            "ertek": ">20/min (vagy PaCO2 <32 Hgmm / <4,3 kPa)"
          },
          {
            "kriterium": "Fehérvérsejtszám",
            "ertek": ">12000/mm³ vagy <4000/mm³ vagy >10% éretlen alak (labor)"
          }
        ],
        "megjegyzes": "SIRS = 2 vagy több kritérium. A fehérvérsejt felső küszöb (>12000) csak a tankönyvből olvasható; a jegyzet diáján csonka. Triázsban labor nélkül a testhő/pulzus/légzésszám állapítható meg.",
        "source": [
          {
            "doc": "tankonyv",
            "page": 35
          },
          {
            "doc": "jegyzet",
            "page": 112
          }
        ]
      }
    },
    {
      "name": "Fájdalom (E) döntési fa – lokalizáció × jelleg × súlyosság → MSTR",
      "source": [
        {
          "doc": "jegyzet",
          "page": 90
        },
        {
          "doc": "jegyzet",
          "page": 101
        },
        {
          "doc": "tankonyv",
          "page": 38
        }
      ],
      "data": {
        "name": "Fájdalom (E) döntési fa – lokalizáció × jelleg × súlyosság → MSTR",
        "rows": [
          {
            "lokalizacio": "Centrális",
            "jelleg": "Heveny",
            "sulyos_8_10": 2,
            "kozepes_4_7": 3,
            "enyhe_alatt_4": 4
          },
          {
            "lokalizacio": "Centrális",
            "jelleg": "Krónikus",
            "sulyos_8_10": 3,
            "kozepes_4_7": 4,
            "enyhe_alatt_4": 5
          },
          {
            "lokalizacio": "Perifériás",
            "jelleg": "Heveny",
            "sulyos_8_10": 3,
            "kozepes_4_7": 4,
            "enyhe_alatt_4": 5
          },
          {
            "lokalizacio": "Perifériás",
            "jelleg": "Krónikus",
            "sulyos_8_10": 4,
            "kozepes_enyhe_alatt_8": 5
          }
        ],
        "source": [
          {
            "doc": "jegyzet",
            "page": 90
          },
          {
            "doc": "jegyzet",
            "page": 101
          },
          {
            "doc": "tankonyv",
            "page": 38
          }
        ]
      }
    },
    {
      "name": "Vérzéses állapotok (vérzékenység) – lokalizáció szerinti MSTR-szint",
      "source": [
        {
          "doc": "jegyzet",
          "page": 91
        },
        {
          "doc": "jegyzet",
          "page": 153
        },
        {
          "doc": "tankonyv",
          "page": 39
        }
      ],
      "data": {
        "name": "Vérzéses állapotok (vérzékenység) – lokalizáció szerinti MSTR-szint",
        "rows": [
          {
            "mstr": 2,
            "kategoria": "Életet vagy végtagot veszélyeztető",
            "helyek": [
              "Fej (koponyán belüli) és nyak",
              "Mellkas, has, medence, gerinc",
              "Masszív hüvelyi vérzés",
              "Csípőtáji/medenceizmok",
              "Végtagizom-kompartment",
              "Törések és ficamok",
              "Mély lágyrész-sérülések",
              "Bármely csillapíthatatlan vérzés"
            ]
          },
          {
            "mstr": 3,
            "kategoria": "Mérsékelt / enyhe",
            "helyek": [
              "Orr (epistaxis)",
              "Száj/íny",
              "Ízületek (haemarthros)",
              "Menstruációs vérzés",
              "Horzsolások",
              "Felszínes sérülések"
            ]
          }
        ],
        "source": [
          {
            "doc": "jegyzet",
            "page": 91
          },
          {
            "doc": "jegyzet",
            "page": 153
          },
          {
            "doc": "tankonyv",
            "page": 39
          }
        ]
      }
    },
    {
      "name": "Baleseti (sérülési) mechanizmus – magas rizikójú küszöbök → MSTR 2",
      "source": [
        {
          "doc": "jegyzet",
          "page": 95
        },
        {
          "doc": "jegyzet",
          "page": 141
        },
        {
          "doc": "tankonyv",
          "page": 42
        }
      ],
      "data": {
        "name": "Baleseti (sérülési) mechanizmus – magas rizikójú küszöbök → MSTR 2",
        "rows": [
          {
            "kategoria": "Általános trauma – gépjármű",
            "kuszob": "járműből kiesés/átfordulás; kimentés >20 perc; motor/műszerfal az utastérben; halott az utastérben; ütközés >40 km/h öv nélkül; baleset >60 km/h bekötött övvel"
          },
          {
            "kategoria": "Általános trauma – motoros",
            "kuszob": "ütközés autóval >30 km/h, különösen ha a vezető leesett"
          },
          {
            "kategoria": "Általános trauma – gyalogos/kerékpáros",
            "kuszob": "gázolás >10 km/h felett"
          },
          {
            "kategoria": "Általános trauma – esés",
            "kuszob": ">3 m magasból vagy 5 lépcsőfokról"
          },
          {
            "kategoria": "Általános trauma – áthatoló",
            "kuszob": "fej, nyak, törzs, vagy végtag könyök/térd feletti proximális része"
          },
          {
            "kategoria": "Fejsérülés – esés",
            "kuszob": ">1 m vagy 5 lépcsőfok magasságból"
          },
          {
            "kategoria": "Fejsérülés – egyéb",
            "kuszob": "járműből kiesés; bekötetlen utas szélvédőnek ütődő fejsérülése; gyalogos gázolás; tompa tárggyal bántalmazás (ököl/láb kivételével)"
          },
          {
            "kategoria": "Nyaki trauma",
            "kuszob": "gépjárműből kizuhanás/felborulás/nagy sebességű ütközés bekötetlen övvel; motorbaleset; zuhanás >1 m vagy 5 lépcső; fejre irányuló axiális terhelés"
          }
        ],
        "megjegyzes": "Mind MSTR 2. Magas rizikójú mechanizmus + súlyos légzési elégtelenség/hemodinamikai instabilitás/eszméletlenség esetén MSTR 1. Forrás: Murray et al. Can J Emerg Med 2004; ENA Trauma Nursing Core Course 5th ed.",
        "source": [
          {
            "doc": "jegyzet",
            "page": 95
          },
          {
            "doc": "jegyzet",
            "page": 141
          },
          {
            "doc": "tankonyv",
            "page": 42
          }
        ]
      }
    },
    {
      "name": "Fájdalom pontszám (10 pontos Likert/VAS skála)",
      "source": [
        {
          "doc": "jegyzet",
          "page": 87
        },
        {
          "doc": "tankonyv",
          "page": 38
        }
      ],
      "data": {
        "name": "Fájdalom pontszám (10 pontos Likert/VAS skála)",
        "rows": [
          {
            "pont": 0,
            "jelentes": "Nincs / nem fáj"
          },
          {
            "pont": 2,
            "jelentes": "Kicsit fáj"
          },
          {
            "pont": 4,
            "jelentes": "Valamivel erősebb"
          },
          {
            "pont": 6,
            "jelentes": "Még erősebb"
          },
          {
            "pont": 8,
            "jelentes": "Nagyon erős"
          },
          {
            "pont": 10,
            "jelentes": "A legrosszabb / lehető legnagyobb fájdalom"
          }
        ],
        "megjegyzes": "Sávok az MSTR döntéshez: súlyos 8-10, közepes 4-7, enyhe <4.",
        "source": [
          {
            "doc": "jegyzet",
            "page": 87
          },
          {
            "doc": "tankonyv",
            "page": 38
          }
        ]
      }
    },
    {
      "name": "Gyermek láz - testhőmérséklet és életkor szerinti MSTR-besorolás",
      "source": [
        {
          "doc": "jegyzet",
          "page": 236
        },
        {
          "doc": "jegyzet",
          "page": 238
        },
        {
          "doc": "tankonyv",
          "page": 70
        }
      ],
      "data": {
        "name": "Gyermek láz - testhőmérséklet és életkor szerinti MSTR-besorolás",
        "parameter": "temp",
        "egyseg": "°C",
        "kiertekeles": "Életkor + testhőmérséklet + a gyermek küllemének kombinációja adja az MSTR szintet. Lásd a gyermek_laz_* szabályokat.",
        "age_groups": [
          "0-3 hónap",
          "3 hónap - 3 év",
          ">3 év",
          "immunszupprimált (minden kor)"
        ],
        "rows": [
          {
            "eletkor": "0-3 hónap",
            "kuszob": ">38.0°C vagy <36.0°C",
            "kullem": "-",
            "MSTR": 2
          },
          {
            "eletkor": "minden kor, immunszupprimált (neutropenia, transzplantált, szteroidok)",
            "kuszob": ">38.0°C vagy <36.0°C",
            "kullem": "-",
            "MSTR": 2
          },
          {
            "eletkor": "3 hónap - 3 év",
            "kuszob": ">38.5°C",
            "kullem": "betegnek tűnik",
            "MSTR": 2
          },
          {
            "eletkor": "3 hónap - 3 év",
            "kuszob": ">38.5°C",
            "kullem": "nem tűnik betegnek",
            "MSTR": 3
          },
          {
            "eletkor": ">3 év",
            "kuszob": ">38.5°C",
            "kullem": "betegnek tűnik (pulzus- és légzésszám emelkedés)",
            "MSTR": 3
          },
          {
            "eletkor": ">3 év",
            "kuszob": ">38.5°C",
            "kullem": "nem tűnik betegnek",
            "MSTR": 4
          }
        ],
        "betegnek_tunik": "kipirosodott, zavart, nyugtalan, hiperaktív",
        "nem_tunik_betegnek": "distress jele nincs, orientált, figyelmes",
        "source": [
          {
            "doc": "jegyzet",
            "page": 236
          },
          {
            "doc": "jegyzet",
            "page": 238
          },
          {
            "doc": "tankonyv",
            "page": 70
          }
        ],
        "notes": "A tankönyvi (2016, p70) és jegyzet (2022, p236/238) láz-táblázat azonos."
      }
    },
    {
      "name": "Gyermek szisztolés vérnyomás - hipertónia (grafikon, közelítő)",
      "source": [
        {
          "doc": "tankonyv",
          "page": 98
        },
        {
          "doc": "jegyzet",
          "page": 252
        }
      ],
      "data": {
        "name": "Gyermek szisztolés vérnyomás - hipertónia (grafikon, közelítő)",
        "parameter": "sys",
        "egyseg": "Hgmm",
        "kiertekeles": "Csak grafikon, pontos numerikus táblázat a forrásban nincs. Borderline hipertónia = 90. percentilis, hipertónia = 95. percentilis életkorra.",
        "age_groups": [
          "1 év",
          "17 év"
        ],
        "rows": [
          {
            "eletkor": "1 év",
            "also_gorbe": 99,
            "felso_gorbe": 103
          },
          {
            "eletkor": "17 év",
            "also_gorbe": 132,
            "felso_gorbe": 136
          }
        ],
        "source": [
          {
            "doc": "tankonyv",
            "page": 98
          },
          {
            "doc": "jegyzet",
            "page": 252
          }
        ],
        "notes": "A vérnyomás a súlyos keringési hatások késői indikátora. Grafikonról leolvasott közelítő értékek (y: 80-145 Hgmm, x: 0-18 év). Forrás: The Fourth Report..., Pediatrics 2004;114:555-576 (50. percentilis testmagasságú gyermek)."
      }
    }
  ],
  "inputFields": [
    {
      "id": "kritikusMegjelenes",
      "group": "megfigyeles",
      "label": "Első megtekintés — kritikus megjelenés",
      "type": "select",
      "options": [
        {
          "value": "nincs",
          "label": "Nincs — a beteg ránézésre nem kritikus"
        },
        {
          "value": "vitalis_distressz",
          "label": "Nyilvánvaló vitális disztressz / periarreszt (bármely kor)"
        },
        {
          "value": "csak_fajdalomra_reagal",
          "label": "Eszméletlen benyomás: csak fájdalomra reagál (bármely kor)"
        },
        {
          "value": "aktiv_gorcs",
          "label": "Aktívan zajló tónusos/klónusos görcs (bármely kor)"
        },
        {
          "value": "leszurkult_ernyedt",
          "label": "Gyermek: leszürkült, erőtlen, merev tekintetű"
        },
        {
          "value": "cianotikus_marvanyozott",
          "label": "Gyermek: cianotikus / márványozott bőr"
        },
        {
          "value": "etel_elutasitas_letargia",
          "label": "Kisgyermek: étel-elutasítás + érdektelenség + letargia + nincs hangja"
        }
      ],
      "help": "3-5 másodperces első ránézés (look test / PAT) — a vitálisok mérése ELŐTT",
      "pediatricOnly": false
    },
    {
      "id": "legzesiJelek",
      "group": "megfigyeles",
      "type": "select",
      "label": "Légzési distressz — klinikai jelek (a légzési munka alapján)",
      "options": [
        {
          "value": "sulyos",
          "label": "Súlyos: kimerültség a fokozott légzési munkától, cyanosis, egyszavas beszéd/beszédképtelenség, felső légúti elzáródás, levert/zavart"
        },
        {
          "value": "kozepes",
          "label": "Közepes: fokozott légzési munka, néhány szavas kifejezések/részmondatok, kifejezett vagy romló stridor"
        },
        {
          "value": "enyhe",
          "label": "Enyhe: dyspnoe/tachypnoe fokozott légzési munka NÉLKÜL, mondatokat mond, nincs stridor"
        },
        {
          "value": "nincs",
          "label": "Nincs látható légzési distressz"
        }
      ],
      "help": "A forrás szerint a nehézlégzés FOKOZATA elsősorban a klinikai jelekből; a SpO₂/PEFR ehhez társul (akut esésnél). A tool a klinikai jel és a numerikus sávok közül a legsúlyosabbat veszi.",
      "pediatricOnly": false
    },
    {
      "id": "nehezlegzesFok",
      "group": "megfigyeles",
      "label": "Nehézlégzés fokozata (számított)",
      "type": "select",
      "options": [
        {
          "value": "sulyos",
          "label": "Súlyos (O2-szat <90%)"
        },
        {
          "value": "kozepes",
          "label": "Közepes/mérsékelt (O2-szat 90-92%, PEFR <40%)"
        },
        {
          "value": "enyhe",
          "label": "Enyhe (O2-szat 92-94%, PEFR 40-60%)"
        },
        {
          "value": "nincs",
          "label": "Nincs nehézlégzés (O2-szat >94%, PEFR >60%)"
        }
      ],
      "help": "A légzési munka klinikai megítélése + O2-szaturáció; COPD-snél a beteg saját alapértéke a viszonyítás.",
      "computed": true,
      "pediatricOnly": false
    },
    {
      "id": "pefrSzazalek",
      "group": "megfigyeles",
      "label": "Becsült kilégzési csúcsáramlás (PEFR)",
      "type": "number",
      "unit": "%",
      "min": 0,
      "max": 100,
      "step": 1,
      "help": "A várt érték %-ában; <40% közepes, 40-60% enyhe, >60% nincs nehézlégzés.",
      "pediatricOnly": false
    },
    {
      "id": "keringesiAllapot",
      "group": "megfigyeles",
      "label": "Hemodinamikai státusz (C)",
      "type": "select",
      "options": [
        {
          "value": "sokk",
          "label": "Sokk"
        },
        {
          "value": "instabil",
          "label": "Hemodinamikai instabilitás"
        },
        {
          "value": "stabil_potencialisan",
          "label": "Stabil, de potenciálisan instabil"
        },
        {
          "value": "normal",
          "label": "Normál vitális paraméterek"
        }
      ],
      "help": "Keringési állapot besorolása a triázs vizsgálat alapján.",
      "pediatricOnly": false
    },
    {
      "id": "lazKullem",
      "group": "megfigyeles",
      "label": "Lázas beteg küllem-kategóriája (E)",
      "type": "select",
      "options": [
        {
          "value": "immunszupprimalt",
          "label": "Immunszupprimált"
        },
        {
          "value": "szeptikus",
          "label": "Szeptikus küllem"
        },
        {
          "value": "sulyos_beteg",
          "label": "Súlyos beteg küllem (nem jól néz ki)"
        },
        {
          "value": "jo_altalanos",
          "label": "Jó általános állapot (jól néz ki)"
        }
      ],
      "help": "Csak láz (≥38°C, kor ≥17 év) esetén értelmezett.",
      "pediatricOnly": false
    },
    {
      "id": "verzesSulyossag",
      "group": "megfigyeles",
      "label": "Vérzékenység – vérzés súlyossága/helye",
      "type": "select",
      "options": [
        {
          "value": "eletet_vegtagot_veszelyezteto",
          "label": "Életet vagy végtagot veszélyeztető vérzés"
        },
        {
          "value": "mersekelt_enyhe",
          "label": "Mérsékelt / enyhe vérzés"
        },
        {
          "value": "izuleti_haemarthros",
          "label": "Gyanított enyhe/közepes ízületi vérzés (haemarthros)"
        }
      ],
      "help": "Öröklött vagy szerzett vérzékenységű (faktorhiány, antikoaguláns, súlyos májbetegség) betegnél.",
      "pediatricOnly": false
    },
    {
      "id": "serulesMagasRizikoju",
      "group": "megfigyeles",
      "label": "Magas rizikójú sérülési mechanizmus",
      "type": "checkbox",
      "help": "Nagy energiájú trauma a km/h és esésmagasság küszöbök szerint (ld. baleseti mechanizmus tábla).",
      "pediatricOnly": false
    },
    {
      "id": "fajdalomLokalizacio",
      "group": "fajdalom",
      "label": "Fájdalom lokalizációja",
      "type": "select",
      "options": [
        {
          "value": "centralis",
          "label": "Centrális"
        },
        {
          "value": "periferias",
          "label": "Perifériás"
        }
      ],
      "help": "Centrális: testüreg/szerv; perifériás: bőr/lágyrész/mozgásszervi. Gyanús perifériás → centrálisként.",
      "pediatricOnly": false
    },
    {
      "id": "fajdalomJelleg",
      "group": "fajdalom",
      "label": "Fájdalom jellege",
      "type": "select",
      "options": [
        {
          "value": "akut",
          "label": "Heveny (akut)"
        },
        {
          "value": "kronikus",
          "label": "Krónikus"
        }
      ],
      "help": "Akut: <1 hónap, új keletű; a jellegében/súlyosságában megváltozott krónikus fájdalom akutnak számít.",
      "pediatricOnly": false
    },
    {
      "id": "fajdalomPont",
      "group": "fajdalom",
      "label": "Fájdalom pontszám (0-10)",
      "type": "number",
      "unit": "",
      "min": 0,
      "max": 10,
      "step": 1,
      "help": "10 pontos Likert/VAS skála. Sávok: súlyos 8-10, közepes 4-7, enyhe <4.",
      "pediatricOnly": false
    },
    {
      "id": "relativO2Eses",
      "group": "megfigyeles",
      "type": "checkbox",
      "label": "≥10% O₂-szaturáció esés a beteg saját (megszokott) alapértékéhez képest",
      "help": "COPD / krónikus hipoxia esetén a beteg SAJÁT alapértéke a viszonyítás — a relatív esés számít, nem az abszolút szám. Jelölje, ha ismert a ≥10%-os akut esés.",
      "pediatricOnly": false
    },
    {
      "id": "o2Akut",
      "group": "megfigyeles",
      "type": "select",
      "label": "Az O₂-szaturáció-esés akut?",
      "options": [
        {
          "value": "akut",
          "label": "Akut — a mostani állapot előtt normális volt a szaturáció"
        },
        {
          "value": "kronikus",
          "label": "Krónikus / COPD / ismeretlen alapérték"
        }
      ],
      "help": "A forrás (tankönyv 31. o.): az O₂-szaturáció a nehézlégzés fokának megítélésére csak akut esetben (előzőleg normál alapérték) használható; krónikus/COPD esetén a klinikai jelekre és a PEFR-re hagyatkozzon.",
      "pediatricOnly": false
    },
    {
      "id": "gyermekKullem",
      "group": "megfigyeles",
      "label": "A lázas gyermek küllemének megítélése (toxikus / nem toxikus)",
      "type": "select",
      "options": [
        {
          "value": "beteg",
          "label": "Betegnek tűnik (kipirosodott, zavart, nyugtalan, hiperaktív)"
        },
        {
          "value": "nembeteg",
          "label": "Nem tűnik betegnek (nincs distress, orientált, figyelmes)"
        }
      ],
      "help": "A gyermek láz-szabályokhoz (3 hó-3 év és >3 év, >38.5°C).",
      "pediatricOnly": true
    },
    {
      "id": "immunszupprimalt",
      "group": "megfigyeles",
      "label": "Immunszupprimált beteg (láz mellett)",
      "type": "checkbox",
      "help": "pl. neutropenia, kemoterápia, szteroid, transzplantált, onkológiai beteg, sarlósejtes anémia, VP shunt. Immunszupprimált betegnél már enyhe láz is szepszis jele lehet → MSTR 2 (bármely korban).",
      "pediatricOnly": false,
      "csakPanaszok": [
        "laz"
      ]
    },
    {
      "id": "stridor",
      "group": "masodlagos",
      "label": "Stridor (gyermek)",
      "type": "select",
      "options": [
        {
          "value": "nincs",
          "label": "Nincs"
        },
        {
          "value": "hallhato",
          "label": "Hallható stridor (egyéb jel nélkül)"
        },
        {
          "value": "kifejezett",
          "label": "Kifejezett stridor"
        },
        {
          "value": "elzarodott",
          "label": "Veszélyeztetett / elzáródott légút"
        }
      ],
      "help": "Gyermek másodlagos módosító.",
      "pediatricOnly": true
    },
    {
      "id": "csecsemoApnoe",
      "group": "masodlagos",
      "label": "Csecsemőkori apnoés periódusok",
      "type": "select",
      "options": [
        {
          "value": "nincs",
          "label": "Nincs"
        },
        {
          "value": "most",
          "label": "Most apnoézik / felvételkor rövid apnoé"
        },
        {
          "value": "ujkeletu",
          "label": "Újkeletű apnoé/nehézlégzés (először fordult elő)"
        },
        {
          "value": "kortortenet",
          "label": "Apnoé a kórtörténetben (többedjére, most normál)"
        }
      ],
      "help": "Gyermek másodlagos módosító; normál aktuális vitálisak mellett alkalmazandó. <7 napos csecsemő apnoéval → legalább MSTR 2 (CTAS COT-2008 DIA 355).",
      "pediatricOnly": true
    },
    {
      "id": "vigasztalhatatlanSiras",
      "group": "masodlagos",
      "label": "Vigasztalhatatlan sírás (csecsemő)",
      "type": "select",
      "options": [
        {
          "value": "nincs",
          "label": "Nincs / megnyugtatható"
        },
        {
          "value": "ingerlekeny_megnyugtathato",
          "label": "Ingerlékeny, de megnyugtatható"
        },
        {
          "value": "vigasztalhatatlan_stabil_vitalis",
          "label": "Vigasztalhatatlan, stabil vitálisakkal"
        },
        {
          "value": "vigasztalhatatlan_koros_vitalis",
          "label": "Vigasztalhatatlan, abnormális vitálisakkal"
        }
      ],
      "help": "Gyermek másodlagos módosító.",
      "pediatricOnly": true
    },
    {
      "id": "izomtonus",
      "group": "masodlagos",
      "label": "Izomtónus (floppy child)",
      "type": "select",
      "options": [
        {
          "value": "normal",
          "label": "Normál"
        },
        {
          "value": "csokkent_tonus",
          "label": "Csökkent izomtónus (elvárhatónál kevesebb)"
        },
        {
          "value": "tonustalan_fejet_nem_tartja",
          "label": "Tónustalan, fejét nem tartja"
        }
      ],
      "help": "Gyermek másodlagos módosító (tónustalan, de éber gyermek).",
      "pediatricOnly": true
    },
    {
      "id": "jarasZavar",
      "group": "masodlagos",
      "label": "Testtartási / járási zavar (gyermek)",
      "type": "select",
      "options": [
        {
          "value": "nincs",
          "label": "Nincs"
        },
        {
          "value": "laz_nelkul",
          "label": "Nehezen jár / járási zavar láz nélkül"
        },
        {
          "value": "lazzal",
          "label": "Járási/testtartási zavar lázas állapottal"
        }
      ],
      "help": "Gyermek másodlagos módosító.",
      "pediatricOnly": true
    },
    {
      "id": "veleszuletettBetegseg",
      "group": "masodlagos",
      "label": "Veleszületett gyermekkori betegség",
      "type": "select",
      "options": [
        {
          "value": "nincs",
          "label": "Nincs / nem releváns"
        },
        {
          "value": "stabil_potencialis",
          "label": "Stabil állapot, potenciális problémákkal"
        },
        {
          "value": "gondozo_szerint_ellatas",
          "label": "A gondozó szerint ellátásra szorul"
        },
        {
          "value": "allapotromlas_azonnali",
          "label": "Állapotromlás / azonnali kezelés (pl. anyagcserezavar, I. típ. DM, mellékvese-elégtelenség hányással/hasmenéssel)"
        }
      ],
      "help": "Gyermek másodlagos módosító.",
      "pediatricOnly": true
    },
    {
      "id": "vercukor",
      "group": "masodlagos",
      "label": "Vércukorszint",
      "type": "number",
      "unit": "mmol/l",
      "min": 0,
      "max": 50,
      "step": 0.1,
      "help": "Másodlagos módosító. Hipoglikémia küszöb <3 mmol/l, hiperglikémia küszöb >18 mmol/l. Csak stabil betegnél mérendő a triázs során.",
      "csakPanaszok": [
        "hyperglycemia",
        "hypoglycemia",
        "modosult-tudatallapot",
        "zavartsag"
      ],
      "pediatricOnly": false
    },
    {
      "id": "vercukorTunet",
      "group": "masodlagos",
      "label": "Vércukorral összefüggő tünet",
      "type": "select",
      "options": [
        {
          "value": "van",
          "label": "Van tünet (pl. zavartság, izzadás, görcs, nehézlégzés, szomjúság, polyuria, gyengeség)"
        },
        {
          "value": "nincs",
          "label": "Nincs tünet"
        }
      ],
      "help": "A <3 vagy >18 mmol/l vércukor tünetekkel MSTR 2, tünet nélkül MSTR 3.",
      "csakPanaszok": [
        "hyperglycemia",
        "hypoglycemia",
        "modosult-tudatallapot",
        "zavartsag"
      ],
      "pediatricOnly": false
    },
    {
      "id": "dehidraciofok",
      "group": "masodlagos",
      "label": "Kiszáradás (folyadékhiány) foka",
      "type": "select",
      "options": [
        {
          "value": "sulyos",
          "label": "Súlyos – jelentős volumenveszteség, sokk jelei (MSTR 1)"
        },
        {
          "value": "kozepes",
          "label": "Közepes – száraz nyálkahártya, tachikardia, csökkent vizelet (MSTR 2)"
        },
        {
          "value": "enyhe",
          "label": "Enyhe – stabil vitálisok, szomjúság, koncentrált vizelet (MSTR 3)"
        },
        {
          "value": "lehetseges",
          "label": "Lehetséges – nincs tünet, de folyadékvesztés/nehezített bevitel (MSTR 4)"
        }
      ],
      "help": "Hányás/hányinger, hasmenés, általános gyengeség panasznál értékelendő.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "altalanos-gyengeseg",
        "hanyas-hanyinger",
        "hasmenes",
        "taplalasi-nehezsegek-ujszulotteknel"
      ]
    },
    {
      "id": "hipertoniaTunet",
      "group": "masodlagos",
      "label": "Hipertenzióval kapcsolatos tünet",
      "type": "select",
      "options": [
        {
          "value": "van",
          "label": "Van (fejfájás, hányinger, légszomj/nehézlégzés, mellkasi fájdalom)"
        },
        {
          "value": "nincs",
          "label": "Nincs kísérő tünet"
        }
      ],
      "help": "Hipertenzióhoz társuló tünet: légszomj, mellkasi fájdalom, zavartság, HIRTELEN fejfájás, hányinger/hányás (CTAS COT-2008 DIA 39). Bármelyik jelenléte \"van\".",
      "csakPanaszok": [
        "hipertenzio"
      ],
      "pediatricOnly": false
    },
    {
      "id": "maghomerseklet",
      "group": "masodlagos",
      "label": "Maghőmérséklet (környezeti ártalom)",
      "type": "number",
      "unit": "°C",
      "min": 10,
      "max": 45,
      "step": 0.1,
      "help": "Hideg ártalomnál: <32°C = MSTR 2, 32-35°C = MSTR 3, >35°C fagyás nélkül normál vitálisokkal = MSTR 4. <32°C-nál invazív melegítés.",
      "csakPanaszok": [
        "hypothermia"
      ],
      "pediatricOnly": false
    },
    {
      "id": "terhessegModosito",
      "group": "masodlagos",
      "label": "Terhesség > 20. hét – módosító",
      "type": "select",
      "options": [
        {
          "value": "koldokzsinor_elolesese",
          "label": "Magzati aprórész vagy köldökzsinór előesése (MSTR 1)"
        },
        {
          "value": "huvelyi_verzes_3trimeszter",
          "label": "Hüvelyi vérzés a 3. trimeszterben (MSTR 1)"
        },
        {
          "value": "vajudas_2perc_alatt",
          "label": "Vajúdás, fájások ≤ 2 perc (MSTR 2)"
        },
        {
          "value": "magzat_mozgas_szivveres_hiany",
          "label": "Magzati mozgás és/vagy szívverés hiánya (MSTR 2)"
        },
        {
          "value": "fejfajas_odema_hasi_hipertenzio",
          "label": "Fejfájás +/- ödéma +/- hasi fájdalom +/- hipertónia (MSTR 2)"
        },
        {
          "value": "lezajlott_szules",
          "label": "Lezajlott szülés (MSTR 2)"
        },
        {
          "value": "vajudas_2perc_felett",
          "label": "Vajúdás, fájások > 2 perc (MSTR 3)"
        },
        {
          "value": "magzatviz_szivargas",
          "label": "Magzatvíz szivárgás lehetősége (MSTR 3)"
        }
      ],
      "help": "Csak terhesség > 20. hét vezető panasznál. Életveszélyes atóniás vérzés MSTR 1.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "terhesseg-20-het-2"
      ]
    },
    {
      "id": "mentalisDepresszioOngyilkossag",
      "group": "masodlagos",
      "label": "Depresszió / öngyilkosság / önsértés – módosító",
      "type": "select",
      "options": [
        {
          "value": "egyertelmuen_veszelyezteto",
          "label": "Egyértelműen veszélyeztető állapot (egyértelmű veszélyforrás önmagára és az SBO-ra) (MSTR 1)"
        },
        {
          "value": "ongyilkossagi_kiserlet_vagy_pontos_terv",
          "label": "Öngyilkossági kísérlet vagy annak pontos terve (MSTR 2)"
        },
        {
          "value": "aktiv_ongyilkossagi_szandek",
          "label": "Aktív öngyilkossági szándék (MSTR 2)"
        },
        {
          "value": "szokesveszely",
          "label": "Szökésveszély (MSTR 2)"
        },
        {
          "value": "biztonsagi_kockazat",
          "label": "Biztonsági kockázat (MSTR 2)"
        },
        {
          "value": "ongyilkossagi_gondolat_terv_nelkul",
          "label": "Öngyilkossági gondolatok terv nélkül (MSTR 3, biztonságos megfigyeléssel)"
        },
        {
          "value": "depresszio_gondolat_nelkul",
          "label": "Depresszió, öngyilkossági gondolatok nélkül (MSTR 4)"
        }
      ],
      "help": "Egyértelműen veszélyeztető állapot MSTR 1; szökésveszély MSTR 2 (külön megítélés).",
      "pediatricOnly": false,
      "csakPanaszok": [
        "depresszio-ongyilkossagi-szandek-onveszelyesseg"
      ]
    },
    {
      "id": "biztonsagosMegfigyeles",
      "group": "masodlagos",
      "label": "Biztonságos megfigyelés megoldható?",
      "type": "select",
      "options": [
        {
          "value": "megoldhato",
          "label": "Igen, megoldható"
        },
        {
          "value": "nem_megoldhato",
          "label": "Nem megoldható"
        }
      ],
      "help": "Öngyilkossági gondolat terv nélkül: ha a biztonságos megfigyelés nem megoldható, MSTR 3 helyett MSTR 2.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "depresszio-ongyilkossagi-szandek-onveszelyesseg"
      ]
    },
    {
      "id": "mentalisSzorongasHallucinacio",
      "group": "masodlagos",
      "label": "Szorongás/krízis vagy hallucináció/téveszme – módosító",
      "type": "select",
      "options": [
        {
          "value": "akut_pszichozis",
          "label": "Akut pszichózis (MSTR 2)"
        },
        {
          "value": "sulyos_szorongas_agitacio",
          "label": "Súlyos szorongás / agitáció (MSTR 2)"
        },
        {
          "value": "biztonsagi_kockazat",
          "label": "Biztonsági kockázat (MSTR 2)"
        },
        {
          "value": "kozepes_szorongas_agitacio_vagy_paranoia",
          "label": "Közepes szorongás / agitáció vagy paranoia (MSTR 3)"
        },
        {
          "value": "enyhe_szorongas_stabil",
          "label": "Enyhe szorongás, stabil (MSTR 4)"
        },
        {
          "value": "enyhe_szorongas_kronikus_hallucinacio",
          "label": "Enyhe szorongás / agitáció, krónikus hallucináció (MSTR 5)"
        }
      ],
      "help": "A 2022-es jegyzet a szorongás/krízis és a hallucináció/téveszme panaszt közös táblázatban kezeli.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "hallucinaciok-teveszmek",
        "szorongas-krizishelyzet"
      ]
    },
    {
      "id": "mentalisAlmatlansag",
      "group": "masodlagos",
      "label": "Álmatlanság – módosító",
      "type": "select",
      "options": [
        {
          "value": "akut",
          "label": "Akut (MSTR 4)"
        },
        {
          "value": "kronikus",
          "label": "Krónikus (MSTR 5)"
        }
      ],
      "help": "",
      "pediatricOnly": false,
      "csakPanaszok": [
        "almatlansag"
      ]
    },
    {
      "id": "mentalisEroszakos",
      "group": "masodlagos",
      "label": "Erőszakos / közveszélyes magatartás – módosító",
      "type": "select",
      "options": [
        {
          "value": "on_es_kozveszelyes",
          "label": "Ön- és közveszélyes, veszélyeztető állapot (MSTR 1)"
        },
        {
          "value": "biztonsagi_kockazat",
          "label": "Biztonsági kockázat (MSTR 2)"
        },
        {
          "value": "terv_nelkul",
          "label": "Erőszakos/közveszélyes, pontos terv nélkül (MSTR 3)"
        }
      ],
      "help": "",
      "pediatricOnly": false,
      "csakPanaszok": [
        "eroszakos-kozveszelyes-viselkedes"
      ]
    },
    {
      "id": "mentalisSzocialis",
      "group": "masodlagos",
      "label": "Szociális problémák – módosító",
      "type": "select",
      "options": [
        {
          "value": "eroszak_stressz",
          "label": "Fizikai/mentális erőszak, nagy fokú érzelmi stressz (MSTR 3)"
        },
        {
          "value": "egyuttmukodesre_keptelen",
          "label": "Együttműködésre képtelen (MSTR 4)"
        },
        {
          "value": "kronikus_nem_surgos",
          "label": "Krónikus, nem sürgős állapot (MSTR 5)"
        }
      ],
      "help": "",
      "pediatricOnly": false,
      "csakPanaszok": [
        "a-beteg-szocialis-helyzetebol-adodo-panasz",
        "szocialis-problemak"
      ]
    },
    {
      "id": "mentalisFurcsaViselkedes",
      "group": "masodlagos",
      "label": "Furcsa viselkedés – módosító",
      "type": "select",
      "options": [
        {
          "value": "nem_kontrollalt",
          "label": "Nem kontrollált (ellenőrizetlen) (MSTR 1)"
        },
        {
          "value": "biztonsagi_kockazat",
          "label": "Biztonsági kockázat (MSTR 2)"
        },
        {
          "value": "kontrollalt",
          "label": "Kontrollált (ellenőrzött) (MSTR 3)"
        },
        {
          "value": "artalmatlan",
          "label": "Ártalmatlan viselkedés (MSTR 4)"
        },
        {
          "value": "kronikus_nem_surgos",
          "label": "Krónikus, nem sürgős állapot (MSTR 5)"
        }
      ],
      "help": "",
      "pediatricOnly": false,
      "csakPanaszok": [
        "furcsa-viselkedes"
      ]
    },
    {
      "id": "betegjoletiSzempontok",
      "group": "masodlagos",
      "label": "Betegjóléti szempontok – módosító",
      "type": "select",
      "options": [
        {
          "value": "konfliktus_instabil",
          "label": "Konfliktus vagy instabil helyzet (MSTR 1)"
        },
        {
          "value": "biztonsagi_kockazat_folyamatos_visszaeles",
          "label": "Biztonsági kockázat / folyamatban lévő visszaélés (MSTR 2)"
        },
        {
          "value": "valoszinu_testi_nemi_eroszak",
          "label": "Valószínűsíthető testi vagy nemi erőszak (MSTR 3)"
        },
        {
          "value": "bantalmazas_jelei_tortenete",
          "label": "Bántalmazás/visszaélés jelei vagy története (MSTR 4)"
        }
      ],
      "help": "Ide tartozik a nemi erőszak, idősekkel kapcsolatos visszaélés/elhanyagolás, pszichés bántalmazás.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "a-beteg-szocialis-helyzetebol-adodo-panasz",
        "szocialis-problemak"
      ]
    },
    {
      "id": "gyermekViselkedeszavar",
      "group": "masodlagos",
      "label": "Gyermek aggasztó viselkedése / viselkedészavar – módosító",
      "type": "select",
      "options": [
        {
          "value": "biztonsagi_kockazat_csaladi",
          "label": "Valószínű biztonsági kockázat / családi nehézségek (MSTR 2)"
        },
        {
          "value": "akut_kornyezeti",
          "label": "Akut viselkedészavar / környezeti zavar (MSTR 3)"
        },
        {
          "value": "tartos_problematikus",
          "label": "Tartós problematikus viselkedés (MSTR 4)"
        },
        {
          "value": "kronikus_valtozatlan",
          "label": "Krónikus, változatlan viselkedés (MSTR 5)"
        }
      ],
      "help": "Csak gyermeknél.",
      "pediatricOnly": true
    },
    {
      "id": "nemiEroszakIdo",
      "group": "masodlagos",
      "label": "Nemi erőszak – érkezésig eltelt idő",
      "type": "select",
      "options": [
        {
          "value": "max_2ora",
          "label": "≤ 2 óra (MSTR 2)"
        },
        {
          "value": "ket_tizenketto_ora",
          "label": "> 2 óra és < 12 óra (MSTR 3)"
        },
        {
          "value": "tizenketto_ora_felett",
          "label": "≥ 12 óra, nincs sérülés (MSTR 4)"
        }
      ],
      "help": "Feltéve, hogy nincs egyéb MSTR 1-re emelő sérülés, a vitálisok kielégítőek, a fájdalom enyhe.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "nemi-eroszak"
      ]
    },
    {
      "id": "palpitacioModosito",
      "group": "masodlagos",
      "label": "Palpitáció / ritmuszavar – módosító",
      "type": "select",
      "options": [
        {
          "value": "korabbi_cpr_ritmuszavar",
          "label": "Korábbi keringésmegállással + CPR-igénnyel járó ritmuszavar (MSTR 2)"
        },
        {
          "value": "akut_friss_folyamatban",
          "label": "Akut, friss, folyamatban lévő panasz (MSTR 3)"
        }
      ],
      "help": "Csak ha nincs súlyosabb elsődleges meghatározó.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "szivdobogas-erzes-rendszertelen-szivdobbanasok"
      ]
    },
    {
      "id": "mellkasiNemSzivJelleg",
      "group": "masodlagos",
      "label": "Nem szív eredetű mellkasi fájdalom jellege",
      "type": "select",
      "options": [
        {
          "value": "tepo_szaggato",
          "label": "Tépő-szaggató (MSTR 2 – aorta-katasztrófa gyanúja)"
        },
        {
          "value": "egyeb",
          "label": "Egyéb jelleg"
        }
      ],
      "help": "",
      "pediatricOnly": false,
      "csakPanaszok": [
        "mellkasi-fajdalom-nem-sziv-eredetu"
      ]
    },
    {
      "id": "necrotizaloFasciitisBoreflektedes",
      "group": "masodlagos",
      "label": "Perineális panasz: látható bőrelfeketedés",
      "type": "select",
      "options": [
        {
          "value": "igen",
          "label": "Igen, látható (min. MSTR 2)"
        },
        {
          "value": "nem",
          "label": "Nem látható"
        }
      ],
      "help": "Necrotizáló fasciitis (Fournier-kór) gyanúja; orvosi vizsgálat 15 percen belül.",
      "csakPanaszok": [
        "herefajdalom-vagy-duzzanat",
        "vegbel-vegbel-kornyeki-fajdalom"
      ],
      "pediatricOnly": false
    },
    {
      "id": "lelegeztetest_igenyel",
      "label": "Intubált vagy asszisztált lélegeztetést igényel",
      "type": "checkbox",
      "group": "megfigyeles",
      "options": null,
      "help": "Ilyenkor az O2-szaturáció és a PEFR a nehézlégzés-fok megítéléséhez irreleváns — a beteg definíció szerint MSTR 1.",
      "pediatricOnly": false
    },
    {
      "id": "legutvedelem_keptelen",
      "label": "Légútját védeni képtelen (eszméletlen benyomás)",
      "type": "checkbox",
      "group": "megfigyeles",
      "options": null,
      "help": "A védtelen légút a forrásban az eszméletlen (D) állapot jele is (CTAS LOC, GCS 3-9 → MSTR 1); itt az A-B (légút) blokkban kérdezzük. Bármelyik igaz → MSTR 1.",
      "pediatricOnly": false
    },
    {
      "id": "nem_szuloszobai_ujszulott",
      "label": "Nem szülőszobán született újszülött",
      "type": "checkbox",
      "group": "megfigyeles",
      "options": null,
      "help": "Otthon, a kórház felé haladó (mentő)autóban vagy a sürgősségi osztályon hirtelen meginduló szüléssel született újszülött. Automatikusan MSTR 2, a vitálisok alapján felfelé triázsolható, lefelé nem.",
      "pediatricOnly": true
    },
    {
      "id": "borelfeketedes",
      "label": "Bőrelfeketedés a panaszolt (perineális / lágyrész) területen?",
      "type": "select",
      "group": "masodlagos",
      "options": [
        {
          "value": "igen",
          "label": "Igen — látható/leírt bőrelfeketedés (mély szöveti fertőzés / nekrotizáló fasciitis gyanúja)"
        },
        {
          "value": "nem",
          "label": "Nem / nem ismert"
        }
      ],
      "help": "Perineális panaszoknál a triázs ápoló nem látja a területet (magas rizikó). Kérdezz rá bőrelfeketedésre. TK 83. o.: bőrelfeketedés esetén legalább MSTR 2, a 'láz vagy immunszupprimált' módosítóval; a beteget 15 percen belül orvosnak kell látnia (a fertőzött terület 1 óra alatt 6–8×-ára nőhet), és felültriázsolható a súlyos fájdalom akut+centrális minősítésével akkor is, ha a beteg <7 pontra sorolja.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "genitalis-elvaltozasok",
        "genitalis-trauma",
        "herefajdalom-vagy-duzzanat",
        "lagyeki-fajdalom-terime",
        "penisz-duzzanat",
        "vegbel-vegbel-kornyeki-fajdalom",
        "vegbelserules"
      ]
    },
    {
      "id": "prehospitalisAjulas",
      "label": "Prehospitális (helyszíni) eszméletvesztés a fejsérülés kapcsán, a beteg most éber?",
      "type": "select",
      "group": "masodlagos",
      "options": [
        {
          "value": "igen",
          "label": "Igen — volt eszméletvesztés a helyszínen, most éber (GCS 14–15)"
        },
        {
          "value": "nem",
          "label": "Nem volt eszméletvesztés"
        }
      ],
      "help": "TK 52. o. szintpélda: 'Fejsérülés eszméletvesztéssel a prehospitális szakaszban, most éber (GCS 14–15)' → MSTR 3. Alvó / nem ébresztett beteget a tudat felmérése előtt fel kell ébreszteni (MSTR 267. o. fatális alultriázs-eset).",
      "pediatricOnly": false,
      "csakPanaszok": [
        "fejserules"
      ]
    },
    {
      "id": "furcsaViselkedesUjKeletu",
      "label": "A furcsa viselkedés kezdete",
      "type": "select",
      "group": "masodlagos",
      "options": [
        {
          "value": "uj_keletu_akut",
          "label": "Új keletű / akut kezdet (a megszokottól eltér)"
        },
        {
          "value": "kronikus_valtozatlan",
          "label": "Krónikus, változatlan (megszokott) viselkedés"
        }
      ],
      "help": "TK 83. o. buktató: az új keletű furcsa viselkedést NEM szabad nem-akut problémának tekinteni (pl. hypoxia, akut delírium, CNS-ok). Ez az onset-tengely független a mentalisFurcsaViselkedes (kontrolláltság) tengelytől — az új keletű esetet ne engedd a 4–5 krónikus szintre.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "furcsa-viselkedes",
        "zavartsag"
      ]
    },
    {
      "id": "apnoeStatus",
      "type": "select",
      "label": "Apnoe státusza (csecsemő)",
      "group": "secondary",
      "options": [
        {
          "value": "zajlo",
          "label": "Zajló apnoés epizód a vizsgálatkor (MSTR 1)"
        },
        {
          "value": "kozelmultbeli",
          "label": "Közelmúltbeli, apnoéval/légzési kompromisszummal összeegyeztethető epizód (MSTR 2)"
        },
        {
          "value": "anamnesztikus",
          "label": "Anamnesztikus (kórtörténeti), apnoéval összeegyeztethető epizód (MSTR 3)"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "apnoes-periodus-csecsemonel"
      ]
    },
    {
      "id": "kiutesJelleg",
      "type": "select",
      "label": "Kiütés jellege",
      "group": "secondary",
      "options": [
        {
          "value": "purpura_petechia_beteg",
          "label": "Purpura / petechia ÉS beteg benyomású (szeptikus küllem) (MSTR 2)"
        },
        {
          "value": "arc_periorbitalis_cellulitis",
          "label": "Arc-cellulitis, különösen periorbitális (MSTR 2)"
        },
        {
          "value": "lokalizalt_cellulitis",
          "label": "Lokalizált cellulitis — körülírt, meleg, fájdalmas, terjedő bőrpír (MSTR 4)"
        },
        {
          "value": "lokalizalt_kiutes",
          "label": "Lokalizált / nem gyulladt kiütés"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "kiutes"
      ]
    },
    {
      "id": "szemkornyekiDuzzanatJelleg",
      "type": "select",
      "label": "Szemkörnyéki duzzanat jellege",
      "group": "secondary",
      "options": [
        {
          "value": "gyulladt_cellulitis_gyanus",
          "label": "Gyulladt — bőrpír, láz, fájdalom (periorbitális cellulitis gyanú) (MSTR 2)"
        },
        {
          "value": "nem_gyulladt",
          "label": "Nem gyulladt (allergiás / mechanikus / egyéb)"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "szemkornyeki-duzzanat"
      ]
    },
    {
      "id": "nyelesiNehezitettsegJelleg",
      "type": "select",
      "label": "Nyelési nehezítettség kísérő jelei",
      "group": "secondary",
      "options": [
        {
          "value": "nyaladzas_stridor",
          "label": "Nyáladzás és stridor (MSTR 2)"
        },
        {
          "value": "lehetseges_idegen_test",
          "label": "Lehetséges idegen test (MSTR 3)"
        },
        {
          "value": "nincs",
          "label": "Egyik sem"
        }
      ],
      "csakPanaszok": [
        "nyelesi-nehezitettseg-dysphagia"
      ],
      "pediatricOnly": false
    },
    {
      "id": "allergiaReakcio",
      "type": "select",
      "label": "Allergiás reakció súlyossága / anafilaxia-kockázat",
      "group": "secondary",
      "options": [
        {
          "value": "aktiv_anafilaxia",
          "label": "Aktívan zajló anafilaxia gyanú (légúti/keringési tünet) (MSTR 1)"
        },
        {
          "value": "korabbi_sulyos_reakcio",
          "label": "Korábbi súlyos (anafilaxiás) reakció az anamnézisben (MSTR 2)"
        },
        {
          "value": "nincs",
          "label": "Nincs kiemelt kockázat / lokális, enyhe reakció"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "allergias-reakcio",
        "harapas"
      ]
    },
    {
      "id": "megvonasSulyossag",
      "type": "select",
      "label": "Megvonás súlyossága (görcs / delírium)",
      "group": "secondary",
      "options": [
        {
          "value": "zajlo_gorcs_dt",
          "label": "Zajló görcs / delirium tremens (MSTR 1)"
        },
        {
          "value": "kozelmultbeli_gorcs_agitalt",
          "label": "Közelmúltbeli görcs / posztiktális / agitált (MSTR 2)"
        },
        {
          "value": "nincs",
          "label": "Nincs görcs / enyhe tünetek"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "megvonasi-tunetek"
      ]
    },
    {
      "id": "gerincNeuroDeficit",
      "type": "select",
      "label": "Neurológiai deficit (gerinc / cauda equina gyanú)",
      "group": "secondary",
      "options": [
        {
          "value": "neuro_deficit",
          "label": "Neurológiai deficit ± vizelet-/székletürítési zavar (MSTR 2)"
        },
        {
          "value": "nincs",
          "label": "Nincs neurológiai deficit"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "hat-fajdalom",
        "traumas-hat-gerinc-serules"
      ]
    },
    {
      "id": "fejserulesNeuro",
      "type": "select",
      "label": "Fejsérülés — neurológiai tünet",
      "group": "secondary",
      "options": [
        {
          "value": "uj_fokalis",
          "label": "Új fokális neurológiai tünet (MSTR 2)"
        },
        {
          "value": "nincs",
          "label": "Nincs új fokális neurológiai tünet"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "fejserules"
      ]
    },
    {
      "id": "latasValtozas",
      "type": "select",
      "label": "Látásváltozás jellege",
      "group": "secondary",
      "options": [
        {
          "value": "akut_hirtelen",
          "label": "Akut / hirtelen látásváltozás (MSTR 2)"
        },
        {
          "value": "kronikus_fokozatos",
          "label": "Krónikus / fokozatos látásváltozás (MSTR 4)"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "kettoslatas",
        "latasi-zavarok"
      ]
    },
    {
      "id": "szedulesTipus",
      "type": "select",
      "label": "Szédülés jellege",
      "group": "secondary",
      "options": [
        {
          "value": "nem_pozicionalis",
          "label": "Nem pozícionális (± egyéb neurológiai tünet) — lehetséges CVA (MSTR 2)"
        },
        {
          "value": "pozicionalis",
          "label": "Pozícionális, egyéb neurológiai tünet nélkül (MSTR 3)"
        },
        {
          "value": "kronikus",
          "label": "Krónikus / visszatérő állapot (MSTR 4)"
        }
      ],
      "csakPanaszok": [
        "szedules"
      ],
      "pediatricOnly": false
    },
    {
      "id": "fejfajasJelleg",
      "type": "select",
      "label": "Fejfájás jellege",
      "group": "secondary",
      "options": [
        {
          "value": "hirtelen_legrosszabb",
          "label": "Hirtelen kialakuló, „eddigi legrosszabb” jellegű fejfájás (MSTR 2)"
        },
        {
          "value": "latasi_zavar_szemfajdalom",
          "label": "Látásélesség-zavar ± szemfájdalom kíséri (MSTR 2)"
        },
        {
          "value": "kronikus_visszaterodo",
          "label": "Krónikus / visszatérő fejfájás (MSTR 5)"
        }
      ],
      "csakPanaszok": [
        "fejfajas"
      ],
      "pediatricOnly": false
    },
    {
      "id": "gorcsAllapot",
      "label": "Görcsroham állapota (tudati szint szerint)",
      "type": "select",
      "group": "masodlagos",
      "options": [
        {
          "value": "aktiv",
          "label": "Aktívan zajló görcsroham"
        },
        {
          "value": "posztiktalis_modosult",
          "label": "Posztiktális: tenebrozitás / módosult tudat (nem tisztult ki)"
        },
        {
          "value": "kitisztult",
          "label": "Rohamon túl, teljesen kitisztult tudat, stabil"
        },
        {
          "value": "nem_volt",
          "label": "Nem volt görcsroham"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "gorcsroham"
      ]
    },
    {
      "id": "strokeTunetKezdet",
      "label": "Stroke-tünetek kezdete (időablak)",
      "type": "select",
      "group": "masodlagos",
      "options": [
        {
          "value": "negy_es_fel_oran_belul",
          "label": "4,5 órán belül (trombolízis-időablak)"
        },
        {
          "value": "tul_negy_es_fel_oran_vagy_megszunt",
          "label": "Több mint 4,5 óra, vagy a tünetek megszűntek"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "vegtaggyengeseg-cva-tunetek"
      ]
    },
    {
      "id": "syncopeModosito",
      "label": "Ájulás / ájulásközeli állapot módosítója",
      "type": "select",
      "group": "masodlagos",
      "options": [
        {
          "value": "prodromalis_tunetek_nelkul",
          "label": "Prodromális tünetek nélkül"
        },
        {
          "value": "uj_ritmuszavar_pulzusvaltozas",
          "label": "Új keletű ritmuszavar / szabálytalan pulzus / ismert vagy vélt pulzusváltozás"
        },
        {
          "value": "terhelesre_fellepo",
          "label": "Terhelésre fellépő"
        },
        {
          "value": "egyik_sem",
          "label": "Egyik sem"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "ajulas-ajulaskozeli-allapot"
      ]
    },
    {
      "id": "toxAnyagKockazat",
      "label": "Elfogyasztott anyag kockázata (intoxikáció/túladagolás)",
      "type": "select",
      "group": "masodlagos",
      "options": [
        {
          "value": "ismeretlen_vagy_magas_kockazatu",
          "label": "Ismeretlen vagy magas kockázatú anyag (pl. Digoxin)"
        },
        {
          "value": "ismert_alacsony_kockazatu",
          "label": "Ismert, alacsony kockázatú anyag"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "gyogyszerrel-torteno-visszaeles-mergezes",
        "szajon-at-torteno-tuladagolas"
      ]
    },
    {
      "id": "borElvaltozasJelleg",
      "label": "Bőrelváltozás jellege",
      "type": "select",
      "group": "masodlagos",
      "options": [
        {
          "value": "kronikus_nem_fertozott",
          "label": "Krónikus (hetek-hónapok óta), nem fertőzött, jó általános állapot"
        },
        {
          "value": "akut_gyulladt",
          "label": "Akut / gyulladt / fertőzésgyanús"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "duzzanat-daganat-borkemenyedes",
        "egyeb-bor-tunetek",
        "lokalizalt-duzzanat-borpir"
      ]
    },
    {
      "id": "sebJelleg",
      "label": "Seb/sérülés jellege (zúzódás, laceráció)",
      "type": "select",
      "group": "masodlagos",
      "options": [
        {
          "value": "komplex_neurovaszkularis",
          "label": "Összetett, komplex seb neurovaszkuláris panaszokkal"
        },
        {
          "value": "aktiv_verzes_nyomast_igenyel",
          "label": "Aktív vérzés, folyamatos nyomást igényel"
        },
        {
          "value": "sebvarrast_igenyel_tamponalt",
          "label": "Tamponált vérzés / sebvarrást igényel"
        },
        {
          "value": "sebvarrast_nem_igenyel",
          "label": "Sebvarrást nem igényel (felületes horzsolás/zúzódás)"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "arc-trauma",
        "horzsolas",
        "orr-serules",
        "sebellenorzes"
      ]
    },
    {
      "id": "verhanyasJelleg",
      "label": "Hányadék jellege (vérhányás)",
      "type": "select",
      "group": "masodlagos",
      "options": [
        {
          "value": "friss_piros",
          "label": "Friss, piros vér hányása (aktív vérzés)"
        },
        {
          "value": "kavealjszeru",
          "label": "Kávéaljszerű (kávézaccszerű) hányadék"
        },
        {
          "value": "nincs",
          "label": "Nincs véres hányadék"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "hanyas-hanyinger",
        "verhanyas"
      ]
    },
    {
      "id": "rektalisVerzesMennyiseg",
      "label": "Rektális vérzés / melena mennyisége (szubjektív megítélés)",
      "type": "select",
      "group": "masodlagos",
      "options": [
        {
          "value": "nagy",
          "label": "Nagy mennyiségű (aktív friss piros vérzés vagy gyakori, nagy mennyiségű véres széklet)"
        },
        {
          "value": "kozepes",
          "label": "Közepes mennyiségű"
        },
        {
          "value": "kis",
          "label": "Kis mennyiségű (vér a WC-papíron)"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "veres-szeklet-melena"
      ]
    },
    {
      "id": "huvelyiVerzesMennyiseg",
      "label": "Hüvelyi vérzés mennyisége (szubjektív megítélés)",
      "type": "select",
      "group": "masodlagos",
      "options": [
        {
          "value": "nagy_massziv",
          "label": "Nagy mennyiségű / masszív vérzés"
        },
        {
          "value": "mersekelt",
          "label": "Mérsékelt, nem jelentős vérzés"
        },
        {
          "value": "kis",
          "label": "Kis mennyiségű vérzés (pecsételő)"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "huvelyi-verzes",
        "menstruacios-problemak",
        "terhesseg-20-het"
      ]
    },
    {
      "id": "hasmenesJelleg",
      "label": "Hasmenés jellege / mennyisége",
      "type": "select",
      "group": "masodlagos",
      "options": [
        {
          "value": "nagy_veres",
          "label": "Nagy mennyiségű vagy véres hasmenés (MSTR 3)"
        },
        {
          "value": "enyhe",
          "label": "Enyhe, nincs jelentős folyadékvesztés vagy kiszáradás (MSTR 5)"
        }
      ],
      "pediatricOnly": false,
      "csakPanaszok": [
        "hasmenes"
      ]
    },
    {
      "id": "szemSerulesModosito",
      "group": "masodlagos",
      "label": "Szemsérülés jellege",
      "type": "select",
      "options": [
        {
          "value": "athatolo_kemiai_eges_nem_megtekintheto",
          "label": "Szembe hatoló sérülés / kémiai vagy közvetlen égés / a szem nem megtekinthető (MSTR 2)"
        },
        {
          "value": "enyhe_latas_ep",
          "label": "Enyhe fájdalom, ép látás, nincs látható idegen test"
        },
        {
          "value": "nincs",
          "label": "Nincs / nem releváns"
        }
      ],
      "help": "Jegyzet 325. o.: a súlyos szemsérülés várakozási idejének csökkentésére szolgáló másodlagos módosító.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "szemserules"
      ]
    },
    {
      "id": "fogElvesztes",
      "group": "masodlagos",
      "label": "Fog kiesés / fogvesztés",
      "type": "select",
      "options": [
        {
          "value": "fog_kieses_fogvesztes",
          "label": "Fog kiesés / fogvesztés (MSTR 2)"
        },
        {
          "value": "nincs",
          "label": "Nincs fogvesztés / egyéb fogászati panasz"
        }
      ],
      "help": "A visszaültethető végleges fogat tejben vagy enyhén sós oldatban kell tárolni, lehetőleg nem szabad kézzel megfogva.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "fogaszati-iny-problemak"
      ]
    },
    {
      "id": "parafimozisGyanu",
      "group": "masodlagos",
      "label": "Paraphimosis (fitymaszűkület) gyanúja",
      "type": "select",
      "options": [
        {
          "value": "igen",
          "label": "Igen (MSTR 2)"
        },
        {
          "value": "nem",
          "label": "Nem"
        }
      ],
      "help": "Pénisz duzzanatnál; a keringés megőrzésére gyors ellátás és mielőbbi fájdalomcsillapítás szükséges.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "penisz-duzzanat"
      ]
    },
    {
      "id": "vegtagSerulesModosito",
      "group": "masodlagos",
      "label": "Végtagsérülés másodlagos módosítója",
      "type": "select",
      "options": [
        {
          "value": "neurovaszkularis_tunetek",
          "label": "Neurovaszkuláris tünetek a sérülés következtében (MSTR 2)"
        },
        {
          "value": "nyilt_tores",
          "label": "Nyílt törés (MSTR 3)"
        },
        {
          "value": "lathato_deformitas",
          "label": "Látható / nyilvánvaló deformitás (MSTR 3)"
        },
        {
          "value": "szoros_gipsz_nv_tunetekkel",
          "label": "Szoros gipsz neurovaszkuláris tünetekkel (MSTR 3)"
        },
        {
          "value": "szoros_gipsz_nv_nelkul",
          "label": "Szoros gipsz neurovaszkuláris tünetek nélkül (MSTR 4)"
        },
        {
          "value": "nincs",
          "label": "Nincs / nem releváns"
        }
      ],
      "help": "Jegyzet 288. és 164. o. Ha hideg, pulzustalan végtag tünetei jelennek meg: MSTR 1 vagy 2.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "alsovegtagi-serules",
        "felsovegtagi-serules"
      ]
    },
    {
      "id": "sebModosito",
      "group": "masodlagos",
      "label": "Seb (zúzódás/laceráció/szúrt seb) módosítója",
      "type": "select",
      "options": [
        {
          "value": "komplex_nv",
          "label": "Összetett, komplex seb neurovaszkuláris panaszokkal (MSTR 2)"
        },
        {
          "value": "aktiv_verzes",
          "label": "Aktív, folyamatos nyomást igénylő vérzés (MSTR 3)"
        },
        {
          "value": "tamponalt_vagy_varratot_igenyel",
          "label": "Tamponált vérzés / sebvarrást igényel (MSTR 4)"
        },
        {
          "value": "varratot_nem_igenyel",
          "label": "Sebvarrást nem igényel (MSTR 5)"
        },
        {
          "value": "nincs",
          "label": "Nincs / nem releváns"
        }
      ],
      "help": "Jegyzet 290. o. Nem kontrollált artériás vérzés AZONNALI ellátást igényel (elsődleges meghatározók).",
      "pediatricOnly": false,
      "csakPanaszok": [
        "alsovegtagi-serules",
        "felsovegtagi-serules",
        "tepett-szurt-seb"
      ]
    },
    {
      "id": "amputacioTipus",
      "group": "masodlagos",
      "label": "Traumás amputáció típusa",
      "type": "select",
      "options": [
        {
          "value": "vegtag",
          "label": "Traumás eredetű végtag-amputáció (MSTR 1)"
        },
        {
          "value": "ujj",
          "label": "Traumás eredetű ujj-/ujjperc-amputáció (MSTR 2)"
        }
      ],
      "help": "",
      "pediatricOnly": false,
      "csakPanaszok": [
        "amputacio"
      ]
    },
    {
      "id": "egesKiterjedes",
      "group": "masodlagos",
      "label": "Égés kiterjedése (testfelület %)",
      "type": "select",
      "options": [
        {
          "value": "tobb_mint_25",
          "label": ">25% testfelület (MSTR 2)"
        },
        {
          "value": "szazalek_5_25",
          "label": "5-25% testfelület (MSTR 3)"
        },
        {
          "value": "kevesebb_mint_5",
          "label": "<5% testfelület (MSTR 4)"
        }
      ],
      "help": "Jegyzet 287. o. Arcot érintő részleges/teljes bőrmélységű égés az 'égés' panasz másodlagos módosítójaként súlyosabb szintet indokol (jegyzet 316. o.).",
      "pediatricOnly": false,
      "csakPanaszok": [
        "eges",
        "kemiai-artalmak"
      ]
    },
    {
      "id": "fagyasModosito",
      "group": "masodlagos",
      "label": "Fagyás / hideg ártalom módosítója",
      "type": "select",
      "options": [
        {
          "value": "hideg_pulzus_nelkuli_vegtag",
          "label": "Hideg, pulzus nélküli végtag (MSTR 2)"
        },
        {
          "value": "boron_jelentkezo_hidegartalom",
          "label": "Bőrön jelentkező hidegártalom (MSTR 3)"
        },
        {
          "value": "nincs",
          "label": "Nincs / nem releváns"
        }
      ],
      "help": "",
      "pediatricOnly": false,
      "csakPanaszok": [
        "fagyas"
      ]
    },
    {
      "id": "borpirModosito",
      "group": "masodlagos",
      "label": "Lokalizált duzzanat/bőrpír pontosítása",
      "type": "select",
      "options": [
        {
          "value": "lokalizalt_cellulitis",
          "label": "Lokalizált cellulitis (a fájdalom-alapú/bőrpír szintnél egy fokkal sürgősebb: enyhe fájdalom → MSTR 4, közepes fájdalom → MSTR 3)"
        },
        {
          "value": "lokalizalt_borpir",
          "label": "Lokalizált bőrpír (a fájdalom-módosító szerinti szint marad)"
        }
      ],
      "help": "Jegyzet 145. és 100. o.: a cellulitis relatív módosító — a bőrpír/fájdalom-alapú szintet egy fokkal sürgősebbre emeli (145. o. enyhe: 5→4; 100. o. közepes: 4→3). Nem fix MSTR 4.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "lokalizalt-duzzanat-borpir"
      ]
    },
    {
      "id": "borgyulladasKiterjedes",
      "group": "masodlagos",
      "label": "Egyoldali vörös, forró végtag: a gyulladás kiterjedése",
      "type": "select",
      "options": [
        {
          "value": "kiterjedt",
          "label": "Kiterjedt gyulladás — a végtag >10-15%-a (MSTR 3)"
        },
        {
          "value": "lokalizalt",
          "label": "Lokalizált gyulladás/bőrpír — a végtag <10-15%-a (MSTR 4)"
        }
      ],
      "help": "Jegyzet 289. o.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "egyoldali-voros-es-forro-vegtag"
      ]
    },
    {
      "id": "verExpozicioKockazat",
      "group": "masodlagos",
      "label": "Vér-/testváladék-expozíció kockázata",
      "type": "select",
      "options": [
        {
          "value": "magas",
          "label": "Magas kockázatú: (szennyezett) tűszúrás, ismert/vélt HIV vagy hepatitis (MSTR 2)"
        },
        {
          "value": "alacsony",
          "label": "Alacsony kockázatú: fröccsenés alacsony rizikójú forrásból, nem üreges tű (MSTR 3)"
        }
      ],
      "help": "Jegyzet 288. o.",
      "pediatricOnly": false,
      "csakPanaszok": [
        "erintkezes-verrel-vagy-testvaladekokkal"
      ]
    },
    {
      "id": "gerincRogzitesHosszu",
      "group": "masodlagos",
      "label": "Hosszabb ideje gerincrögzítésben (boardon) szállított beteg",
      "type": "select",
      "options": [
        {
          "value": "igen",
          "label": "Igen (minimum MSTR 3)"
        },
        {
          "value": "nem",
          "label": "Nem"
        }
      ],
      "help": "Törekedni kell a beteget a boardról lehetőleg 30 percen belül levenni (jegyzet 288. o.).",
      "pediatricOnly": false,
      "csakPanaszok": [
        "nyaki-trauma",
        "sulyos-trauma-tompa",
        "traumas-hat-gerinc-serules"
      ]
    }
  ],
  "derivations": [
    {
      "from": "spo2",
      "to": "legzesiJelek",
      "mode": "suggest",
      "gate": {
        "field": "o2Akut",
        "equals": "akut"
      },
      "note": "Az SpO₂ önmagában NEM dönt: a nehézlégzés fokozatát a klinikai jelek adják. Akut esésnél az SpO₂ ehhez ad támpontot.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 80
        },
        {
          "doc": "tankonyv",
          "page": 31
        },
        {
          "doc": "tankonyv",
          "page": 32
        }
      ],
      "map": [
        {
          "max": 89,
          "value": "sulyos"
        },
        {
          "min": 90,
          "max": 92,
          "value": "kozepes"
        },
        {
          "min": 93,
          "max": 94,
          "value": "enyhe"
        },
        {
          "min": 95,
          "value": "nincs"
        }
      ]
    },
    {
      "from": "pefrSzazalek",
      "to": "legzesiJelek",
      "mode": "suggest",
      "note": "PEFR-alapú támpont a klinikai-jel megítéléshez (a klinikai kép dönt).",
      "source": [
        {
          "doc": "jegyzet",
          "page": 80
        },
        {
          "doc": "tankonyv",
          "page": 32
        }
      ],
      "map": [
        {
          "max": 39,
          "value": "sulyos"
        },
        {
          "min": 40,
          "max": 60,
          "value": "kozepes"
        },
        {
          "min": 61,
          "value": "nincs"
        }
      ]
    }
  ],
  "computedFields": [
    {
      "field": "nehezlegzesFok",
      "order": [
        "sulyos",
        "kozepes",
        "enyhe",
        "nincs"
      ],
      "note": "A nehézlégzés fokozata a klinikai jelek (légzési munka) alapján.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 80
        },
        {
          "doc": "jegyzet",
          "page": 109
        },
        {
          "doc": "tankonyv",
          "page": 31
        }
      ],
      "inputs": [
        {
          "from": "legzesiJelek",
          "label": "klinikai jelek"
        }
      ]
    }
  ],
  "derivValueOrder": {
    "nehezlegzesFok": [
      "sulyos",
      "kozepes",
      "enyhe",
      "nincs"
    ],
    "legzesiJelek": [
      "sulyos",
      "kozepes",
      "enyhe",
      "nincs"
    ]
  },
  "cases": [
    {
      "id": "eset_01",
      "desc": "68 éves nő, saját lábán érkezik, erős mellkasi fájdalom és légszomj, majd hirtelen összeesik, életjelenségek nem észlelhetők (keringésmegállás).",
      "inputs": {
        "eletkorEv": 68,
        "vezetoPanaszId": "szivleallas-nem-traumas-eredetu",
        "keringesiAllapot": "sokk"
      },
      "expected_level": 1,
      "rationale": "Keringésmegállás, azonnali ellátás szükséges. Az érkezési mód (saját láb) nem csökkenti a súlyosságot.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 47
        },
        {
          "doc": "tankonyv",
          "page": 25
        }
      ]
    },
    {
      "id": "eset_02",
      "desc": "52 éves férfi, egy órája erős szegycsont mögötti mellkasi fájdalom, a beszélgetéskor már fájdalommentes. RR 20/min, pulzus 68/min, vérnyomás 132/76 Hgmm.",
      "inputs": {
        "eletkorEv": 52,
        "rr": 20,
        "hr": 68,
        "sys": 132,
        "dia": 76,
        "vezetoPanaszId": "mellkasi-fajdalom-sziv-eredetu",
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut",
        "keringesiAllapot": "normal"
      },
      "expected_level": 2,
      "rationale": "Iszkémiás jellegű mellkasi fájdalom: a fájdalom megszűnése ellenére minimum MSTR 2, mert 10 percen belül EKG-t kell készíteni. Módosító nem szükséges.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 51
        },
        {
          "doc": "tankonyv",
          "page": 26
        }
      ]
    },
    {
      "id": "eset_03",
      "desc": "62 éves férfi, bal alsó kvadráns hasi fájdalom, 12 órája erősödik, most 5/10. Vitálisok stabilak, pulzus 100/min, testhő 37,6 °C.",
      "inputs": {
        "eletkorEv": 62,
        "hr": 100,
        "temp": 37.6,
        "fajdalomPont": 5,
        "vezetoPanaszId": "hasi-fajdalom",
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut",
        "keringesiAllapot": "normal"
      },
      "expected_level": 3,
      "rationale": "A fájdalom módosítója szerint (közepes fokú, 4-7/10) MSTR 3.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 54
        },
        {
          "doc": "tankonyv",
          "page": 26
        }
      ]
    },
    {
      "id": "eset_04",
      "desc": "35 éves férfi raktári dolgozó, kb. 3 cm-es metszett seb a jobb tenyéren (kés okozta), vérzés nincs, varratot igényel. Fájdalom 4/10, vitálisok kielégítők.",
      "inputs": {
        "eletkorEv": 35,
        "fajdalomPont": 4,
        "vezetoPanaszId": "felsovegtagi-serules",
        "fajdalomLokalizacio": "periferias",
        "fajdalomJelleg": "akut",
        "keringesiAllapot": "normal"
      },
      "expected_level": 4,
      "rationale": "Varratot igénylő seb megszűnt vérzéssel, ér-/idegsérülés nélkül → MSTR 4.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 57
        },
        {
          "doc": "tankonyv",
          "page": 27
        }
      ]
    },
    {
      "id": "eset_05",
      "desc": "34 éves, egyébként egészséges férfi kötéscserét kér, nincs egyéb panasza.",
      "inputs": {
        "eletkorEv": 34,
        "vezetoPanaszId": "kotescsere"
      },
      "expected_level": 5,
      "rationale": "Szövődménymentes seb kötéscseréje, egyéb panasz nélkül → MSTR 5.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 60
        },
        {
          "doc": "tankonyv",
          "page": 27
        }
      ]
    },
    {
      "id": "eset_06",
      "desc": "22 éves edzett sportoló, napok óta tartó mellkasi fájdalom (nem szív eredetű).",
      "inputs": {
        "eletkorEv": 22,
        "vezetoPanaszId": "mellkasi-fajdalom-nem-sziv-eredetu",
        "fajdalomLokalizacio": "centralis",
        "mellkasiNemSzivJelleg": "egyeb"
      },
      "expected_level": 3,
      "rationale": "Nem szív eredetű mellkasi fájdalom MSTR 3 lehet.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 53
        }
      ]
    },
    {
      "id": "eset_07",
      "desc": "Új keletű, 20 perce kezdődött retroszternális fájdalom, amely az állkapocs régióba sugárzik.",
      "inputs": {
        "vezetoPanaszId": "mellkasi-fajdalom-sziv-eredetu",
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut"
      },
      "expected_level": 2,
      "rationale": "Szíveredetű mellkasi fájdalom → MSTR 2.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 29
        }
      ]
    },
    {
      "id": "eset_08",
      "desc": "66 éves nő, jobb láb és boka körüli fájdalom, duzzadt és piros végtag, sérülés nem érte, egyébként panaszmentes. Fájdalom 6/10. RR 21/min, pulzus 92/min, vérnyomás 222/130 Hgmm, testhő 37,4 °C.",
      "inputs": {
        "eletkorEv": 66,
        "rr": 21,
        "hr": 92,
        "sys": 222,
        "dia": 130,
        "temp": 37.4,
        "fajdalomPont": 6,
        "vezetoPanaszId": "hipertenzio",
        "hipertoniaTunet": "nincs",
        "fajdalomLokalizacio": "periferias",
        "fajdalomJelleg": "akut"
      },
      "expected_level": 3,
      "rationale": "SBP>220 vagy DBP>130 tünet nélkül = MSTR 3 (hipertónia másodlagos módosító). Alternatív úton (lokalizált gyulladás/vörösség vezető panasz) is 3-ra kerül a 'lokalizált cellulitis' módosítóval.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 100
        }
      ]
    },
    {
      "id": "eset_09",
      "desc": "75 éves férfi, 3 napja általános rossz közérzet, fejfájás, láz, de nincs súlyos beteg külleme, fokozott légzési munka nincs. SpO2 94%, kicsit köhög, pulzus 98/min, vérnyomás 140/80 Hgmm, testhő 38,5 °C, GCS 14.",
      "inputs": {
        "eletkorEv": 75,
        "spo2": 94,
        "hr": 98,
        "sys": 140,
        "dia": 80,
        "temp": 38.5,
        "gcs": 14,
        "vezetoPanaszId": "altalanos-gyengeseg",
        "lazKullem": "jo_altalanos",
        "nehezlegzesFok": "enyhe",
        "keringesiAllapot": "normal"
      },
      "expected_level": 3,
      "rationale": "2 pozitív SIRS kritérium (láz, pulzus >90/min), de jó általános állapot, enyhe nehézlégzés, többi vitális és GCS normál határon belül → MSTR 3. ILI izolációs kiemelés szükséges.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 106
        }
      ]
    },
    {
      "id": "eset_10",
      "desc": "42 éves férfi, eszméletlen, mérsékelt nehézlégzés, RR 10/min, bőr sápadt-hideg-verejtékes, pulzus gyenge és elnyomható (mérés halasztva), GCS 6.",
      "inputs": {
        "eletkorEv": 42,
        "rr": 10,
        "gcs": 6,
        "vezetoPanaszId": "modosult-tudatallapot",
        "keringesiAllapot": "sokk",
        "nehezlegzesFok": "kozepes"
      },
      "expected_level": 1,
      "rationale": "GCS 6 → eszméletlen és sokkos; a közepesnek leírt nehézlégzés a súlyos szintnek felel meg, mert eszméletlen, nem tud beszélni és nem védi a légútját.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 116
        }
      ]
    },
    {
      "id": "eset_11",
      "desc": "26 éves férfi, 3 órája tartó 6/10 könyökfájdalom, nincs sérülésre utaló jel, hemofíliás, kezelést kér (gondozási lap nincs nála). Vitálisok normálisak, láztalan, kéz színe/funkciói és distalis pulzusok jók.",
      "inputs": {
        "eletkorEv": 26,
        "fajdalomPont": 6,
        "vezetoPanaszId": "felsovegtagi-fajdalom",
        "verzesSulyossag": "izuleti_haemarthros",
        "fajdalomLokalizacio": "periferias",
        "fajdalomJelleg": "akut",
        "keringesiAllapot": "normal"
      },
      "expected_level": 3,
      "rationale": "Elsődleges módosító: vérzékenység (nyilvánvaló vagy gyanított veleszületett/szerzett) — gyanított enyhe/közepes haemarthros → MSTR 3.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 118
        }
      ]
    },
    {
      "id": "eset_12",
      "desc": "33 éves nő, dokumentált elmozdulás nélküli V. lábközépcsont (bazális) törés, gipszfelhelyezés céljából küldve. Normális vitálisok, enyhe fájdalom 3/10, nincs bőrpír/horzsolás/zúzódás/duzzanat.",
      "inputs": {
        "eletkorEv": 33,
        "fajdalomPont": 3,
        "vezetoPanaszId": "alsovegtagi-serules",
        "fajdalomLokalizacio": "periferias",
        "fajdalomJelleg": "akut",
        "keringesiAllapot": "normal"
      },
      "expected_level": 5,
      "rationale": "Nincs deformitás, a fájdalom perifériás és enyhe → MSTR 5.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 124
        }
      ]
    },
    {
      "id": "eset_13",
      "desc": "61 éves nő, kávéaljszerű hányás, felső hasi nyomásérzés, puffadás, étvágytalanság, fokozódó szomjúság; nincs hasmenés/meléna. Bőr sápadt-meleg-száraz. RR 20/min, pulzus 100/min, vérnyomás 102/70 Hgmm, SpO2 98%, GCS 15, testhő 37 °C, fájdalom 3/10.",
      "inputs": {
        "eletkorEv": 61,
        "rr": 20,
        "hr": 100,
        "sys": 102,
        "dia": 70,
        "spo2": 98,
        "gcs": 15,
        "temp": 37,
        "fajdalomPont": 3,
        "vezetoPanaszId": "hanyas-hanyinger",
        "dehidraciofok": "enyhe",
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut",
        "keringesiAllapot": "stabil_potencialisan"
      },
      "expected_level": 3,
      "rationale": "Kávézacc szerű hányás/meléna másodlagos módosító → 3; enyhe dehidráció (szomjúság, csökkent bevitel, stabil vitálisok) szintén 3.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 129
        }
      ]
    },
    {
      "id": "eset_14",
      "desc": "68 éves nő, erős szegycsont mögötti mellkasi fájdalom a nyak elülső részére sugározva, légszomj, fokozott légzési munka, tőmondatokban beszél. RR 24/min, pulzus 86/min, vérnyomás 112/78 Hgmm, SpO2 91%, fájdalom 9/10.",
      "inputs": {
        "eletkorEv": 68,
        "rr": 24,
        "hr": 86,
        "sys": 112,
        "dia": 78,
        "spo2": 91,
        "fajdalomPont": 9,
        "vezetoPanaszId": "mellkasi-fajdalom-sziv-eredetu",
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut",
        "nehezlegzesFok": "kozepes",
        "keringesiAllapot": "normal"
      },
      "expected_level": 2,
      "rationale": "Szív eredetű mellkasi fájdalom önmagában MSTR 2 (nem sokkos, nincs súlyos nehézlégzés, ami 1-et jelentene); más CEDIS választásnál a fájdalom-/nehézlégzés-módosító visz 2-re.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 133
        }
      ]
    },
    {
      "id": "eset_15",
      "desc": "32 éves férfi, jobb combját emelővilla átszúrta, duzzadt, passzív mozgatásra fokozódó fájdalom (8/10), nincs látható deformitás. RR 21/min, pulzus 104/min, vérnyomás 152/92 Hgmm, SpO2 98%. Von Willebrand betegség (2B típus).",
      "inputs": {
        "eletkorEv": 32,
        "rr": 21,
        "hr": 104,
        "sys": 152,
        "dia": 92,
        "spo2": 98,
        "fajdalomPont": 8,
        "vezetoPanaszId": "alsovegtagi-serules",
        "verzesSulyossag": "eletet_vegtagot_veszelyezteto",
        "fajdalomLokalizacio": "periferias",
        "fajdalomJelleg": "akut",
        "keringesiAllapot": "stabil_potencialisan"
      },
      "expected_level": 2,
      "rationale": "Vérzékenység elsődleges módosító: nyilvánvaló/feltehető vérzés + szerzett/veleszületett vérzékenység; életet/végtagot veszélyeztető vérzés gyanúja, kompartment szindróma korai jeleivel → MSTR 2.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 151
        }
      ]
    },
    {
      "id": "eset_16",
      "desc": "76 éves férfi, 5 órája hirtelen kialakult jobb kar gyengeség és elkent beszéd, mellkasi fájdalmat negál. RR 19/min, pulzus 107/min, testhő 37 °C, vérnyomás 146/92 Hgmm, SpO2 94%, GCS 15.",
      "inputs": {
        "eletkorEv": 76,
        "rr": 19,
        "hr": 107,
        "temp": 37,
        "sys": 146,
        "dia": 92,
        "spo2": 94,
        "gcs": 15,
        "vezetoPanaszId": "vegtaggyengeseg-cva-tunetek",
        "strokeTunetKezdet": "tul_negy_es_fel_oran_vagy_megszunt"
      },
      "expected_level": 3,
      "rationale": "Stroke gyanú, tünetkezdet >4,5 óra, vitálisok stabilak → MSTR 3. Ha <4,5 órán belül jelentkezne (thrombolízis időablak) MSTR 2; a trombektómia lehetősége miatt 24 órán belül szintén MSTR 2.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 154
        }
      ]
    },
    {
      "id": "eset_17",
      "desc": "24 éves nő, megsemmisítő hasi fájdalom (9/10, centrális, akut, súlyos), hányinger, fogamzásgátlás nélküli szex 2 hónapja, enyhe légzési disztressz. Pulzus 120/min, vérnyomás 90/60 Hgmm, SpO2 94%, GCS 15.",
      "inputs": {
        "eletkorEv": 24,
        "hr": 120,
        "sys": 90,
        "dia": 60,
        "spo2": 94,
        "gcs": 15,
        "fajdalomPont": 9,
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut",
        "nehezlegzesFok": "enyhe",
        "vezetoPanaszId": "hasi-fajdalom"
      },
      "expected_level": 2,
      "rationale": "Centrális, akut, súlyos fájdalom (elsődleges módosító) + határértéken kívüli pulzus és vérnyomás → MSTR 2. Ha sokk, akkor MSTR 1.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 157
        }
      ]
    },
    {
      "id": "eset_18",
      "desc": "60 éves nő, 2 órája lázas, utolsó kemoterápia 2 napja, nincs légzési elégtelenség; bőr vörös-meleg-száraz, 'nem jól néz ki'. RR 19/min, SpO2 96%, pulzus 102/min, vérnyomás 110/80 Hgmm, hónalj hő 39 °C, GCS 15, fájdalom nincs.",
      "inputs": {
        "eletkorEv": 60,
        "rr": 19,
        "spo2": 96,
        "hr": 102,
        "sys": 110,
        "dia": 80,
        "temp": 39,
        "gcs": 15,
        "lazKullem": "immunszupprimalt",
        "nehezlegzesFok": "nincs",
        "vezetoPanaszId": "laz"
      },
      "expected_level": 2,
      "rationale": "39 °C láz + immunszupprimált állapot (kemoterápia) → MSTR 2.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 161
        }
      ]
    },
    {
      "id": "eset_19",
      "desc": "77 éves nő, tegnapi esés, jobb kéz sérülés, csukló feletti látható deformitás (újsággal sínezve), fájdalmat nem jelez, keringés- és érzészavar nincs a végtagon. RR 18/min, pulzus 62/min, vérnyomás 132/86 Hgmm, GCS 15.",
      "inputs": {
        "eletkorEv": 77,
        "rr": 18,
        "hr": 62,
        "sys": 132,
        "dia": 86,
        "gcs": 15,
        "fajdalomPont": 0,
        "vezetoPanaszId": "felsovegtagi-serules",
        "vegtagSerulesModosito": "lathato_deformitas"
      },
      "expected_level": 3,
      "rationale": "Fájdalom nélkül MSTR 5 lenne, de a 'nyilvánvaló deformitás' másodlagos módosító MSTR 3-ba sorol; neurovaszkuláris érintettség esetén MSTR 2 lenne.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 164
        }
      ]
    },
    {
      "id": "eset_20",
      "desc": "32 éves férfi, szúrt seb a jobb alkar disztális részén (falból kiálló száraz szögbe támaszkodott), vérzés nincs. RR 16/min, pulzus 69/min, vérnyomás 110/70 Hgmm, testhő 36,8 °C, SpO2 98%, GCS 15, nincs fájdalma.",
      "inputs": {
        "eletkorEv": 32,
        "rr": 16,
        "hr": 69,
        "sys": 110,
        "dia": 70,
        "temp": 36.8,
        "spo2": 98,
        "gcs": 15,
        "fajdalomPont": 0,
        "vezetoPanaszId": "felsovegtagi-serules",
        "sebModosito": "varratot_nem_igenyel"
      },
      "expected_level": 5,
      "rationale": "Varratot nem igénylő laceráció/szúrt seb → MSTR 5.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 167
        }
      ]
    },
    {
      "id": "eset_21",
      "desc": "75 éves nő, vizes padlón megcsúszott és elesett, jobb csípő fáj, fejét nem ütötte, jobb alsó végtag rövidült és kirotált, végtagi pulzusok rendben, normál vitálisok, éber, fájdalom 8/10.",
      "inputs": {
        "eletkorEv": 75,
        "fajdalomPont": 8,
        "fajdalomLokalizacio": "periferias",
        "fajdalomJelleg": "akut",
        "vezetoPanaszId": "alsovegtagi-serules"
      },
      "expected_level": 3,
      "rationale": "Baleseti mechanizmus (testmagasságból esés) nem nagy rizikójú, vitálisok normálisak, 8/10 perifériás akut fájdalom → MSTR 3 ('nyilvánvaló deformitás' módosítóval alacsonyabb fájdalom esetén is 3).",
      "source": [
        {
          "doc": "jegyzet",
          "page": 169
        }
      ]
    },
    {
      "id": "eset_22",
      "desc": "72 éves férfi, fokozódó fulladás, megfázás, köhögés, láz, köpet; a személyzet ismeri, nem fullad jobban a szokásosnál, éber, nincs fájdalma. RR 26/min, pulzus 74/min, vérnyomás 136/84 Hgmm, testhő 38,5 °C, SpO2 93%.",
      "inputs": {
        "eletkorEv": 72,
        "rr": 26,
        "hr": 74,
        "sys": 136,
        "dia": 84,
        "temp": 38.5,
        "spo2": 93,
        "nehezlegzesFok": "enyhe",
        "vezetoPanaszId": "nehezlegzes-egyeb-panaszok-nelkul"
      },
      "expected_level": 3,
      "rationale": "Enyhe légzési disztressz (SpO2 93%) → MSTR 3; emellett 2 SIRS kritérium (láz + RR 26) is 3-ra sorol. Kifejezett nehézlégzés-panaszt legalább enyhe légzési disztressznek kell értékelni.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 172
        }
      ]
    },
    {
      "id": "eset_23",
      "desc": "22 éves nő, hátsó udvarban találták, mellette injekciós tű, mentő nem tudott vénát biztosítani; légúti reflexek megtartottak, maszkon O2. Szemét nem nyitja, érthetetlen válasz, fájdalomra elhárít, szűk pupillák. GCS 9-10, RR 10/min, pulzus 44/min, vérnyomás 110/70 Hgmm, testfelszíni hő 35,2 °C.",
      "inputs": {
        "eletkorEv": 22,
        "gcs": 9,
        "rr": 10,
        "hr": 44,
        "sys": 110,
        "dia": 70,
        "temp": 35.2,
        "vezetoPanaszId": "modosult-tudatallapot"
      },
      "expected_level": 1,
      "rationale": "Kulcs elsődleges módosító az eszméletlenség; a túladagolás nem kizárható, összeomlás reális veszély → biztonsági okból MSTR 1. (GCS forrásban 9-10 tartomány.)",
      "source": [
        {
          "doc": "jegyzet",
          "page": 175
        }
      ]
    },
    {
      "id": "eset_24",
      "desc": "42 éves férfi, 7 hónapja fennálló alhasi fájdalom és intermittáló jobb lágyéki duzzanat (fekvésre elmúlik), hányás/székrekedés nincs. RR 18/min, pulzus 72/min, vérnyomás 138/94 Hgmm, testhő 36,7 °C. Fájdalom állandóan 6-7/10, időnként 8-9/10, de a váróban eszik-iszik, fájdalom jelét nem mutatja.",
      "inputs": {
        "eletkorEv": 42,
        "rr": 18,
        "hr": 72,
        "sys": 138,
        "dia": 94,
        "temp": 36.7,
        "fajdalomPont": 6,
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "kronikus",
        "vezetoPanaszId": "hasi-fajdalom"
      },
      "expected_level": 4,
      "rationale": "Vitálisok normálisak; centrális, inkább krónikus fájdalom. Ha hiteles közepes → MSTR 4; ha krónikus enyhe → 5. A szociális helyzet miatt ésszerűbb MSTR 4-be sorolni.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 177
        }
      ]
    },
    {
      "id": "eset_25",
      "desc": "66 éves nő, gyenge, hidegrázás, bal oldali hátfájdalom, fáradt és apátiás, alig ivott egy napja; kezelt hipertónia (captopril + thiazid). RR 24/min, pulzus 96/min, vérnyomás 114/76 Hgmm, testhő 38,7 °C, SpO2 94%.",
      "inputs": {
        "eletkorEv": 66,
        "rr": 24,
        "hr": 96,
        "sys": 114,
        "dia": 76,
        "temp": 38.7,
        "spo2": 94,
        "lazKullem": "szeptikus",
        "vezetoPanaszId": "altalanos-gyengeseg"
      },
      "expected_level": 2,
      "rationale": "3 pozitív SIRS kritérium (pulzus >90, RR >20, temp >38 °C), szeptikus küllem → MSTR 2; nem éri el a hemodinamikai instabilitás kritériumait.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 179
        }
      ]
    },
    {
      "id": "eset_26",
      "desc": "64 éves férfi, tegnap bal alhasi fájdalom/puffadás miatt vizsgálták, most a CT eredményét hozza; jól van, panaszai megszűntek, hányinger/hányás/hasmenés nincs. RR 18/min, pulzus 90/min, vérnyomás 130/78 Hgmm, testhő 36,8 °C, SpO2 97%, GCS 15.",
      "inputs": {
        "eletkorEv": 64,
        "rr": 18,
        "hr": 90,
        "sys": 130,
        "dia": 78,
        "temp": 36.8,
        "spo2": 97,
        "gcs": 15,
        "vezetoPanaszId": "kepalkoto-vizsgalatok"
      },
      "expected_level": 5,
      "rationale": "Eredménybemutatás panasz/tünet nélkül, normális elsődleges módosítókkal → halasztható (MSTR 5).",
      "source": [
        {
          "doc": "jegyzet",
          "page": 182
        }
      ]
    },
    {
      "id": "eset_27",
      "desc": "18 éves férfi, 3-4 napja fáj a torka, rekedt, csöpög az orra; jól néz ki, nincs stridor/nyálfolyás, jól nyel. RR 18/min, pulzus 87/min, vérnyomás 113/76 Hgmm, testhő 37,4 °C, SpO2 98%, GCS 15, fájdalom 1/10.",
      "inputs": {
        "eletkorEv": 18,
        "rr": 18,
        "hr": 87,
        "sys": 113,
        "dia": 76,
        "temp": 37.4,
        "spo2": 98,
        "gcs": 15,
        "fajdalomPont": 1,
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut",
        "vezetoPanaszId": "torokfajas"
      },
      "expected_level": 4,
      "rationale": "Minden elsődleges módosító rendben, enyhe akut centrális fájdalom → MSTR 4. 1/10 fájdalommal, fiatal egészséges, disztressz nélkül lehet MSTR 5 is (a fájdalom akut, nem krónikus).",
      "source": [
        {
          "doc": "jegyzet",
          "page": 183
        }
      ]
    },
    {
      "id": "eset_28",
      "desc": "46 éves nő, gyakori fejfájás, jelenleg 8/10 fejfájás, hányinger, fényérzékenység – a szokásos módon és mértékben. Normális vitálisok, sérülés nem érte.",
      "inputs": {
        "eletkorEv": 46,
        "fajdalomPont": 8,
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut",
        "vezetoPanaszId": "fejfajas"
      },
      "expected_level": 2,
      "rationale": "Nagy, centrális, akut fájdalom → MSTR 2; a krónikus fájdalom módosító alkalmazásával a beteg 3-ba kerül.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 184
        }
      ]
    },
    {
      "id": "eset_29",
      "desc": "13 éves leány, főút szélén kocogott, autó ütötte el; mentő szállítja, nyugtalan, fájdalmas arc, eszméletvesztést/fejfájást/nyaki fájdalmat negál. Mérsékelt hasi fájdalom (5/10) bal felső hasfél. RR 18/min, pulzus 102/min, vérnyomás 100/70 Hgmm, GCS 15.",
      "inputs": {
        "eletkorEv": 13,
        "gyermek": true,
        "rr": 18,
        "hr": 102,
        "sys": 100,
        "dia": 70,
        "gcs": 15,
        "fajdalomPont": 5,
        "serulesMagasRizikoju": true,
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut",
        "vezetoPanaszId": "sulyos-trauma-tompa"
      },
      "expected_level": 2,
      "rationale": "A paraméterek alapján MSTR 3 lenne, de a súlyos baleseti mechanizmus (gyalogost autó ütött el) másodlagos módosító → MSTR 2.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 248
        }
      ]
    },
    {
      "id": "eset_30",
      "desc": "15 éves fiú, kerékpározás közben autó ütötte el; nyugtalan, erős fájdalom, eszméletvesztés nem volt, nincs látható csontsérülés, erős hasi fájdalom (8/10) bal felső quadráns. RR 18/min, pulzus 110/min, vérnyomás 110/70 Hgmm, GCS 15.",
      "inputs": {
        "eletkorEv": 15,
        "gyermek": true,
        "rr": 18,
        "hr": 110,
        "sys": 110,
        "dia": 70,
        "gcs": 15,
        "fajdalomPont": 8,
        "serulesMagasRizikoju": true,
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut",
        "vezetoPanaszId": "sulyos-trauma-tompa"
      },
      "expected_level": 2,
      "rationale": "Súlyos baleseti mechanizmus és nagy akut fájdalom → MSTR 2; a keringés stabil maradhat, amíg nem sokkos.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 261
        }
      ]
    },
    {
      "id": "eset_31",
      "desc": "11 hetes csecsemő, etetés közben melegnek érezte az anyja, lázmérő csík 38,2 °C, talán kicsit bágyadtabb, egyéb aggasztó tünet nincs, egészségesnek tűnik. RR 54/min, pulzus 185/min, testhő 38,2 °C.",
      "inputs": {
        "eletkorHonap": 3,
        "gyermek": true,
        "rr": 54,
        "hr": 185,
        "temp": 38.2,
        "vezetoPanaszId": "laz",
        "gyermekKullem": "nembeteg"
      },
      "expected_level": 2,
      "rationale": "Újszülött 38 °C feletti hője automatikusan MSTR 2. (Forrásban '11 hetes', kb. 2,5-3 hónapos.)",
      "source": [
        {
          "doc": "jegyzet",
          "page": 262
        }
      ]
    },
    {
      "id": "eset_32",
      "desc": "6 éves gyermek, 7 nappal ezelőtti tonsillectomia után vérzésre panaszkodik, vizsgálat közben vért köp, sápadt. RR 28/min, pulzus 130/min, vérnyomás 100/70 Hgmm.",
      "inputs": {
        "eletkorEv": 6,
        "gyermek": true,
        "rr": 28,
        "hr": 130,
        "sys": 100,
        "dia": 70,
        "vezetoPanaszId": "posztoperativ-szovodmenyek",
        "keringesiAllapot": "stabil_potencialisan"
      },
      "expected_level": 2,
      "rationale": "Vérzik + abnormális vitálisak → MSTR 2; ha a légút veszélyeztetett, MSTR 1.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 263
        }
      ]
    },
    {
      "id": "eset_33",
      "desc": "18 hónapos gyermek, 2 napja lázas, hány és hasmenése van, tegnap este óta nem vizelt, ma betegnek tűnik. RR 35/min, pulzus 150/min, rectális hő 39,4 °C.",
      "inputs": {
        "eletkorHonap": 18,
        "gyermek": true,
        "rr": 35,
        "hr": 150,
        "temp": 39.4,
        "vezetoPanaszId": "laz",
        "gyermekKullem": "beteg",
        "dehidraciofok": "kozepes"
      },
      "expected_level": 2,
      "rationale": "Vitálisak alapján MSTR 2; ha az anuria sokk okozta célszerv-elégtelenség, akkor MSTR 1.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 264
        }
      ]
    },
    {
      "id": "eset_34",
      "desc": "2 éves fiú, futás közben elesett, arcát ütötte, azonnal felsírt, eszméletvesztés nem volt, felületes horzsolás az orrhegyen, nincs deformitás/vérzés. RR 26/min, pulzus 112/min, testhő 37,1 °C, jó közérzet, nincs fájdalom, nincs alvadási zavar.",
      "inputs": {
        "eletkorEv": 2,
        "gyermek": true,
        "rr": 26,
        "hr": 112,
        "temp": 37.1,
        "fajdalomPont": 0,
        "vezetoPanaszId": "arc-trauma",
        "gyermekKullem": "nembeteg",
        "sebJelleg": "sebvarrast_nem_igenyel"
      },
      "expected_level": 5,
      "rationale": "Normális paraméterek, nincs fájdalom/vérzékenység → nincs felfelé sorolás, MSTR 5.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 265
        }
      ]
    },
    {
      "id": "eset_35",
      "desc": "2 hónapos csecsemő, 2 napja magas láz (paracetamol részben segített), tegnap nagyon nyűgös, ma étvágytalan és aluszékony; rossz általános állapot, ernyedt, tónustalan, kontaktusba nem vonható.",
      "inputs": {
        "eletkorHonap": 2,
        "gyermek": true,
        "vezetoPanaszId": "a-gyermek-aggaszto-viselkedese",
        "gyermekKullem": "beteg",
        "izomtonus": "tonustalan_fejet_nem_tartja",
        "kritikusMegjelenes": "leszurkult_ernyedt"
      },
      "expected_level": 1,
      "rationale": "A gyermek értékelés háromszöge (PAT) alapján tónustalan, kontaktusba nem vonható → MSTR 1; a neurológiai tünet oka lehet a sokk.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 266
        }
      ]
    },
    {
      "id": "eset_36",
      "desc": "2 éves gyermek, repesztett fejsérülés esés közben (dohányzóasztal széle), nincs látható vérzés, azonnal felsírt, eszméletvesztés nem volt, álmosnak tűnik. RR 36/min, pulzus 148/min, vérnyomás 85/60 Hgmm.",
      "inputs": {
        "eletkorEv": 2,
        "gyermek": true,
        "rr": 36,
        "hr": 148,
        "sys": 85,
        "dia": 60,
        "vezetoPanaszId": "fejserules"
      },
      "expected_level": 2,
      "rationale": "Légzés/keringés alapján MSTR 2; ha nem ébreszthető, a neurológia alapján MSTR 1. Valós esetben a tévesen 4-re sorolt gyermek újratriázsolásra halott volt.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 267
        }
      ]
    },
    {
      "id": "eset_37",
      "desc": "3 hónapos csecsemő, apnoe alarm többször riasztott alvás közben, mentőket hívtak; vizsgálatkor éber, cumizik, jó állapotú, egészségesnek tűnik, vitálisok rendben.",
      "inputs": {
        "eletkorHonap": 3,
        "gyermek": true,
        "vezetoPanaszId": "apnoes-periodus-csecsemonel",
        "gyermekKullem": "nembeteg",
        "csecsemoApnoe": "kortortenet"
      },
      "expected_level": 3,
      "rationale": "Nincs kóros a paraméterekben → az apnoés periódusok módosítót kell alkalmazni, MSTR 3.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 268
        }
      ]
    },
    {
      "id": "eset_38",
      "desc": "4 éves kislány (kínai bevándorló család), friss piros vért hány, súlyos beteg benyomás, gyakran betegeskedik, lassú fejlődés, oltásokat nem kapott, hasa puffadt. RR 24/min, pulzus 112/min, vérnyomás 96/68 Hgmm.",
      "inputs": {
        "eletkorEv": 4,
        "gyermek": true,
        "rr": 24,
        "hr": 112,
        "sys": 96,
        "dia": 68,
        "vezetoPanaszId": "verhanyas",
        "gyermekKullem": "beteg",
        "verhanyasJelleg": "friss_piros"
      },
      "expected_level": 2,
      "rationale": "Vérhányás + gyanított vérzékenység (Hepatitis B / májcirrózis kockázat) → MSTR 2.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 269
        }
      ]
    },
    {
      "id": "eset_39",
      "desc": "11 éves fiú, bal heréje duzzadt és fájdalmas, a fájdalom ebédidőben kezdődött, azóta erősödik; sírdogál, nehezen jár. RR 18/min, pulzus 90/min.",
      "inputs": {
        "eletkorEv": 11,
        "gyermek": true,
        "rr": 18,
        "hr": 90,
        "vezetoPanaszId": "herefajdalom-vagy-duzzanat",
        "fajdalomJelleg": "akut"
      },
      "expected_level": 2,
      "rationale": "Akut here-fájdalom (torzió/trauma/hernia gyanú), nagy fájdalom → MSTR 2; a szervvesztés lehetősége is MSTR 2.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 270
        }
      ]
    },
    {
      "id": "eset_40",
      "desc": "7 éves fiú, 3 napja köhög, hő 37,6 °C, kipirult; izomdisztrófia (4 éves kortól), antibiotikumot szed. Megnövekedett, szabálytalan, pihegő (ineffektív) légzés, bőr márványozott, CRT >2 sec.",
      "inputs": {
        "eletkorEv": 7,
        "gyermek": true,
        "temp": 37.6,
        "vezetoPanaszId": "legzesleallas",
        "nehezlegzesFok": "sulyos",
        "keringesiAllapot": "sokk",
        "gyermekKullem": "beteg"
      },
      "expected_level": 1,
      "rationale": "Első megtekintésre azonnal MSTR 1 az ineffektív légzés és a sokkos bőrkinézet (márványozott, CRT >2 sec) miatt.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 271
        }
      ]
    },
    {
      "id": "eset_41",
      "desc": "8 éves fiú, bátyja golfütővel fejen találta, kb. 2 cm repesztett seb, eszméletvesztés nem volt, jelenleg nem vérzik, enyhe fájdalom. RR 21/min, pulzus 96/min, vérnyomás 120/76 Hgmm.",
      "inputs": {
        "eletkorEv": 8,
        "gyermek": true,
        "rr": 21,
        "hr": 96,
        "sys": 120,
        "dia": 76,
        "vezetoPanaszId": "fejserules",
        "serulesMagasRizikoju": true,
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut"
      },
      "expected_level": 2,
      "rationale": "A paraméterekben nincs eltérés, de a durva baleseti mechanizmus (fejre mért golfütés) miatt MSTR 2.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 272
        }
      ]
    },
    {
      "id": "eset_42",
      "desc": "13 éves lány, erős mellkasi fájdalom (9/10). RR 20/min, pulzus 117/min, vérnyomás 160/120 Hgmm.",
      "inputs": {
        "eletkorEv": 13,
        "gyermek": true,
        "rr": 20,
        "hr": 117,
        "sys": 160,
        "dia": 120,
        "fajdalomPont": 9,
        "vezetoPanaszId": "mellkasi-fajdalom-nem-sziv-eredetu",
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut"
      },
      "expected_level": 2,
      "rationale": "Bár valószínűbb muszkuloszkeletális/légzési ok, a nagy mellkasi fájdalom miatt MSTR 2; a tachikardia miatt pörgető szer használata is felmerül.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 273
        }
      ]
    },
    {
      "id": "eset_43",
      "desc": "3 éves fiú, garázsban találtak rá eszméletlenül, mentő szállítja. RR 40/min, SpO2 95%, pulzus 120/min, vércukor 4,0 mmol/L.",
      "inputs": {
        "eletkorEv": 3,
        "gyermek": true,
        "rr": 40,
        "spo2": 95,
        "hr": 120,
        "vezetoPanaszId": "modosult-tudatallapot",
        "vercukor": 4.0
      },
      "expected_level": 1,
      "rationale": "Első megtekintésre MSTR 1 az eszméletlenség miatt; felmerül szénmonoxid-, növényvédőszer- és alkoholmérgezés.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 274
        }
      ]
    },
    {
      "id": "eset_44",
      "desc": "10 hónapos csecsemő, 1 hete erősödő köhögés, ma köhögés közben elsápadt; éber, nyugodt, pirospozsgás. RR 30/min, SpO2 98%, pulzus 130/min, testhő 37 °C.",
      "inputs": {
        "eletkorHonap": 10,
        "gyermek": true,
        "rr": 30,
        "spo2": 98,
        "hr": 130,
        "temp": 37,
        "vezetoPanaszId": "kohoges-torokszukulet",
        "gyermekKullem": "nembeteg",
        "nehezlegzesFok": "nincs"
      },
      "expected_level": 4,
      "rationale": "Paraméterei alapján MSTR 4 (elkülönítés szükséges, szamárköhögés lehet). Ha az elsápadás keringési instabilitás jele → MSTR 2; ha köhögés közben cyanotikus → feljebb.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 275
        }
      ]
    },
    {
      "id": "eset_45",
      "desc": "6 éves kislány, csúszda oldalának esett az iskolaudvaron; sír, arcán alvadt vér, éber, légzés normális, rossz közérzet. Jobb alkar duzzadt (sínben), bal szemöldök felett kb. 4 cm repesztett seb. RR 18/min, pulzus 110/min, GCS 15, enyhe fájdalom.",
      "inputs": {
        "eletkorEv": 6,
        "gyermek": true,
        "rr": 18,
        "hr": 110,
        "gcs": 15,
        "vezetoPanaszId": "felsovegtagi-serules",
        "fajdalomLokalizacio": "periferias",
        "fajdalomJelleg": "akut"
      },
      "expected_level": 3,
      "rationale": "Vitálisok rendben, fájdalom alapján MSTR 3; ha durva baleseti mechanizmussal történt, MSTR 2.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 276
        }
      ]
    },
    {
      "id": "eset_46",
      "desc": "5 éves gyermek, láz és hasi fájdalom, 2 napja érkeztek a nyaralásból. RR 30/min, pulzus 135/min, hónalj hő 41 °C.",
      "inputs": {
        "eletkorEv": 5,
        "gyermek": true,
        "rr": 30,
        "hr": 135,
        "temp": 41,
        "vezetoPanaszId": "laz",
        "fajdalomLokalizacio": "centralis"
      },
      "expected_level": 2,
      "rationale": "Mind a légzésszám, mind a pulzusszám alapján MSTR 2. A nagyon magas láz önmagában NEM módosít a szinten; csak a láz okozta vitális jel változások emelnek kategóriát.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 277
        }
      ]
    },
    {
      "id": "eset_47",
      "desc": "6 éves lány, tegnaptól hányás és hasmenés, érkezéskor ismét kis mennyiséget hányt, éber és cserfes. RR 24/min, pulzus 110/min, testhő 37,9 °C.",
      "inputs": {
        "eletkorEv": 6,
        "gyermek": true,
        "rr": 24,
        "hr": 110,
        "temp": 37.9,
        "vezetoPanaszId": "hanyas-hanyinger",
        "gyermekKullem": "nembeteg",
        "dehidraciofok": "lehetseges"
      },
      "expected_level": 4,
      "rationale": "Első megtekintésre nincs baj, vitálisok rendben; a lehetséges kiszáradás módosítóval MSTR 4. Csökkent vizeletmennyiség (enyhe kiszáradás) esetén MSTR 3; keringés-labilitásnál feljebb.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 278
        }
      ]
    },
    {
      "id": "eset_48",
      "desc": "12 éves leány, első menstruációs vérzése 10. napja tart, szédülésre panaszkodik. RR 26/min, pulzus 120/min.",
      "inputs": {
        "eletkorEv": 12,
        "gyermek": true,
        "rr": 26,
        "hr": 120,
        "vezetoPanaszId": "huvelyi-verzes",
        "keringesiAllapot": "instabil"
      },
      "expected_level": 2,
      "rationale": "A szédülést már a hemodinamikai instabilitás jeleként kell értékelni → MSTR 2; elhúzódó vérzésnél felmerül véralvadási zavar.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 279
        }
      ]
    },
    {
      "id": "eset_49",
      "desc": "14 éves lány, visszatérő térdfájás (2 éve, röplabdázáskor), lépcsőn felfelé rosszabbodik, jelenleg 4/10, ibuprofenre javul, terhelésre fokozódik; nincs duzzanat/pír, vitálisok rendben.",
      "inputs": {
        "eletkorEv": 14,
        "gyermek": true,
        "fajdalomPont": 4,
        "vezetoPanaszId": "alsovegtagi-fajdalom",
        "fajdalomLokalizacio": "periferias",
        "fajdalomJelleg": "kronikus"
      },
      "expected_level": 4,
      "rationale": "Vitálisok rendben; akut fájdalomként MSTR 3 lenne, de a krónikusság miatt eggyel alacsonyabb → MSTR 4.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 280
        }
      ]
    },
    {
      "id": "eset_50",
      "desc": "7 éves kislány, ujján 6 hónapja sebes a bőr, nincs ismert fertőzés/utazás/krónikus betegség, egészségesnek tűnik.",
      "inputs": {
        "eletkorEv": 7,
        "gyermek": true,
        "vezetoPanaszId": "lokalizalt-duzzanat-borpir",
        "gyermekKullem": "nembeteg",
        "borElvaltozasJelleg": "kronikus_nem_fertozott"
      },
      "expected_level": 5,
      "rationale": "Nincs meghatározó/módosító, mely magasabb kategóriába sorolna → MSTR 5.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 281
        }
      ]
    },
    {
      "id": "eset_51",
      "desc": "24 éves nő, diffúz intermittáló tompa hasi fájdalom éjjeltől fokozódva, fájások <2 perc időközzel, 10/10 fájdalom, láthatóan szenved; utolsó menstruáció 8 hónapja. RR 21/min, pulzus 92/min, vérnyomás 140/96 Hgmm.",
      "inputs": {
        "eletkorEv": 24,
        "rr": 21,
        "hr": 92,
        "sys": 140,
        "dia": 96,
        "fajdalomPont": 10,
        "vezetoPanaszId": "hasi-fajdalom",
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut",
        "terhessegModosito": "vajudas_2perc_alatt"
      },
      "expected_level": 2,
      "rationale": "Akut, centrális, súlyos fájdalom + 'terhesség > 20. hét' másodlagos módosító; folyamatban lévő vajúdás (összehúzódások <2 perc) → MSTR 2.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 296
        }
      ]
    },
    {
      "id": "eset_52",
      "desc": "18 éves nő, garázsban találták járó motorú autó mellett; éber, kerüli a szemkontaktust, nem válaszol de együttműködő. RR 22/min, pulzus 102/min, vérnyomás 118/76 Hgmm, testhő 36,6 °C.",
      "inputs": {
        "eletkorEv": 18,
        "rr": 22,
        "hr": 102,
        "sys": 118,
        "dia": 76,
        "temp": 36.6,
        "vezetoPanaszId": "depresszio-ongyilkossagi-szandek-onveszelyesseg",
        "mentalisDepresszioOngyilkossag": "ongyilkossagi_kiserlet_vagy_pontos_terv"
      },
      "expected_level": 2,
      "rationale": "Öngyilkossági szándék/terv (szénmonoxid, magas halálozás) másodlagos módosítóval MSTR 2. Ha 'mérgesgáz belélegzés' a vezető panasz és 'füst belélegzés' a módosító, akkor MSTR 3 (tiszta tudat, normál vitálisok).",
      "source": [
        {
          "doc": "jegyzet",
          "page": 302
        }
      ]
    },
    {
      "id": "eset_53",
      "desc": "28 éves nő, 8 hetes terhes, mérsékelt hüvelyi vérzés, nincs nehézlégzés, hasi fájdalom 5/10. Pulzus 92/min, vérnyomás 102/60 Hgmm, testhő 37 °C.",
      "inputs": {
        "eletkorEv": 28,
        "hr": 92,
        "sys": 102,
        "dia": 60,
        "temp": 37,
        "fajdalomPont": 5,
        "vezetoPanaszId": "huvelyi-verzes",
        "nehezlegzesFok": "nincs",
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut"
      },
      "expected_level": 3,
      "rationale": "Nem jelentős hüvelyi vérzés normál vitálisok mellett, a fájdalom 5/10 → MSTR 3.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 314
        }
      ]
    },
    {
      "id": "eset_54",
      "desc": "16 éves fiú, kalandparkban akadálypályán összeesett (epilepsziás rohamként jelentve); triázsnál éber, orientált, kitisztult. RR 22/min, pulzus 62/min. Kórelőzményben görcsrohamok, 1 hete hasonló esemény.",
      "inputs": {
        "eletkorEv": 16,
        "gyermek": true,
        "rr": 22,
        "hr": 62,
        "vezetoPanaszId": "gorcsroham",
        "gorcsAllapot": "kitisztult"
      },
      "expected_level": 3,
      "rationale": "Kórtörténetben görcsroham, jelenleg stabil, rohamon túl, teljesen kitisztult → MSTR 3. Megtartott tenebrozitásnál MSTR 2; aktív görcsrohamnál MSTR 1.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 315
        }
      ]
    },
    {
      "id": "eset_55",
      "desc": "23 éves vegyipari munkás, felrobbanó folyadék az arcán, égető fájdalom arcán és jobb szemén (7/10), nincs nehézlégzés/orr-szájpanasz. RR 18/min, SpO2 96%, pulzus 96/min, vérnyomás 140/88 Hgmm.",
      "inputs": {
        "eletkorEv": 23,
        "rr": 18,
        "spo2": 96,
        "hr": 96,
        "sys": 140,
        "dia": 88,
        "fajdalomPont": 7,
        "vezetoPanaszId": "szemserules",
        "nehezlegzesFok": "nincs",
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut",
        "szemSerulesModosito": "athatolo_kemiai_eges_nem_megtekintheto"
      },
      "expected_level": 2,
      "rationale": "'Vegyi anyag szennyezés a szemben' (exogén ártalmak) saját másodlagos módosítója → MSTR 2, gyors alapos ellátás.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 316
        }
      ]
    },
    {
      "id": "eset_56",
      "desc": "16 éves fiú, rendőri szállítás, erkélyről kiugrással fenyegetőzött, korábbi öngyilkossági kísérlet, lítiumot szed (mániás-depresszió); megbilincselve, nem együttműködő, vitálisokat nehéz mérni de stabilnak tűnik.",
      "inputs": {
        "eletkorEv": 16,
        "gyermek": true,
        "vezetoPanaszId": "depresszio-ongyilkossagi-szandek-onveszelyesseg",
        "mentalisDepresszioOngyilkossag": "aktiv_ongyilkossagi_szandek"
      },
      "expected_level": 2,
      "rationale": "Egyértelműen veszélyeztető állapot → MSTR 1 (önmaga és az SBO számára veszélyforrás); 'szökés veszélye' → MSTR 2.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 317
        }
      ]
    },
    {
      "id": "eset_57",
      "desc": "17 éves nő, mindene viszket, ajkak duzzadtak (torok nem), nyugtalan de nincs nehézlégzés; ismert mogyoróallergia, Epipen nem használva, karokon-nyakon összefüggő piros kiütés, korábbi ITO-kezelés anafilaxia miatt. RR 22/min, SpO2 97%, pulzus 98/min, vérnyomás 132/86 Hgmm.",
      "inputs": {
        "eletkorEv": 17,
        "rr": 22,
        "spo2": 97,
        "hr": 98,
        "sys": 132,
        "dia": 86,
        "vezetoPanaszId": "allergias-reakcio",
        "nehezlegzesFok": "nincs"
      },
      "expected_level": 2,
      "rationale": "'Korábbi súlyos allergiás reakció' másodlagos módosító → MSTR 2, bár a vitálisok stabilak és jelenleg csalánkiütésesnek tűnik.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 318
        }
      ]
    },
    {
      "id": "eset_58",
      "desc": "43 éves hajléktalan nő, rendőri szállítás (forgalommal szemben sétált); nyugtalan, agitált, de orientáltan válaszol, távozással fenyeget, öngyilkossági szándékot tagad, öltözete évszaknak megfelelő. RR 18/min, pulzus 92/min, vérnyomás 130/80 Hgmm, testhő 37,1 °C.",
      "inputs": {
        "eletkorEv": 43,
        "rr": 18,
        "hr": 92,
        "sys": 130,
        "dia": 80,
        "temp": 37.1,
        "vezetoPanaszId": "szorongas-krizishelyzet",
        "mentalisSzorongasHallucinacio": "kozepes_szorongas_agitacio_vagy_paranoia"
      },
      "expected_level": 3,
      "rationale": "Másodlagos módosító alapján MSTR 3; ha szökésveszély áll fenn vagy nincs megfelelő személyzet a biztonságos megfigyelésre → MSTR 2.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 319
        }
      ]
    },
    {
      "id": "eset_59",
      "desc": "14 éves leány, mindkét csuklóján felszínes metszett sebek, iskolai mosdó padlóján ülve találták; csendes, kerüli a szemkontaktust, lassan együttműködik, 'Képtelen tovább élni', gyógyszert nem vett be. RR 18/min, pulzus 72/min, vérnyomás 122/68 Hgmm.",
      "inputs": {
        "eletkorEv": 14,
        "gyermek": true,
        "rr": 18,
        "hr": 72,
        "sys": 122,
        "dia": 68,
        "vezetoPanaszId": "depresszio-ongyilkossagi-szandek-onveszelyesseg",
        "mentalisDepresszioOngyilkossag": "aktiv_ongyilkossagi_szandek"
      },
      "expected_level": 2,
      "rationale": "Valószínűleg aktív öngyilkossági szándék vagy szökésveszély → MSTR 2 másodlagos módosító.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 320
        }
      ]
    },
    {
      "id": "eset_60",
      "desc": "10 éves fiú, rendőri és tanári szállítás, szóban inzultáló, hangos, agitált, nyugtalan; önmaga és mások védelmében megbilincselték, nevelője korábbi viselkedészavarról számol be.",
      "inputs": {
        "eletkorEv": 10,
        "gyermek": true,
        "vezetoPanaszId": "a-gyermek-aggaszto-viselkedese",
        "gyermekViselkedeszavar": "biztonsagi_kockazat_csaladi"
      },
      "expected_level": 2,
      "rationale": "'Szökés veszélye' vagy 'családi/szociális nehézségek' módosító → MSTR 2; ha a beteg önmagára vagy másokra veszélyes → MSTR 1. Háttér-állapot (hipoglikémia, kábítószer, mérgezés) felderítendő.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 321
        }
      ]
    },
    {
      "id": "eset_61",
      "desc": "2 éves gyermek, fürdetéskor észlelt duzzadt pénisz, felhúzódott fityma, mosásra sírt fájdalmában, a duzzanat tovább nőtt, fájdalom nem csökken, nyugtalan. RR 30/min, vérnyomás 128/70 Hgmm. (paraphimosis gyanú)",
      "inputs": {
        "eletkorEv": 2,
        "gyermek": true,
        "rr": 30,
        "sys": 128,
        "dia": 70,
        "vezetoPanaszId": "penisz-duzzanat",
        "fajdalomJelleg": "akut",
        "parafimozisGyanu": "igen"
      },
      "expected_level": 2,
      "rationale": "Súlyos fájdalom, paraphimosis (fityma szűkület) gyanú → MSTR 2 másodlagos módosító; gyors ellátás, fájdalomcsillapítás.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 322
        }
      ]
    },
    {
      "id": "eset_62",
      "desc": "8 éves kislány, kb. egy órája leesett a kerékpárjáról, bal felső metszőfoga kiesett (tejben hozzák), fájdalom 7/10. RR 20/min, pulzus 100/min.",
      "inputs": {
        "eletkorEv": 8,
        "gyermek": true,
        "rr": 20,
        "hr": 100,
        "fajdalomPont": 7,
        "vezetoPanaszId": "fogaszati-iny-problemak",
        "fajdalomLokalizacio": "centralis",
        "fajdalomJelleg": "akut",
        "fogElvesztes": "fog_kieses_fogvesztes"
      },
      "expected_level": 2,
      "rationale": "'Fog kiesés / fog vesztés' → MSTR 2 másodlagos módosító; a végleges fog visszaültetése sokszor lehetséges (tejben/sós oldatban tárolva).",
      "source": [
        {
          "doc": "jegyzet",
          "page": 323
        }
      ]
    },
    {
      "id": "eset_63",
      "desc": "4 éves fiú, otthonában görcsrohama volt (korábban 3x, mindig lázas állapot előzte meg), kb. 1 perces roham; jelenleg nem tűnik betegnek, szaladgál. RR 24/min, pulzus 100/min, testhő 39 °C.",
      "inputs": {
        "eletkorEv": 4,
        "gyermek": true,
        "rr": 24,
        "hr": 100,
        "temp": 39,
        "vezetoPanaszId": "gorcsroham",
        "gyermekKullem": "nembeteg",
        "gorcsAllapot": "kitisztult"
      },
      "expected_level": 3,
      "rationale": "'Görcsroham' vezető panasszal, feltisztult tudattal → MSTR 3. Ha 'láz (külleme nem tűnik betegnek)' gyermekgyógyászati elsődleges módosítót választja → MSTR 4.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 324
        }
      ]
    },
    {
      "id": "eset_64",
      "desc": "6 éves fiú, játszótéren egy másik gyermek a jobb szemébe kapott, feltehetően idegen test; éber, együttműködő, jobb szem kissé duzzadt, könnyezik, fényérzékeny.",
      "inputs": {
        "eletkorEv": 6,
        "gyermek": true,
        "vezetoPanaszId": "szemserules"
      },
      "expected_level": 2,
      "rationale": "Másodlagos módosító: 'szembe hatoló sérülés, kémiai/közvetlen égés, vagy a szem megtekintése nem lehetséges' → MSTR 2. (Ha a fájdalom enyhe, a látás ép és nincs látható idegen test, kevésbé sürgős lehet.)",
      "source": [
        {
          "doc": "jegyzet",
          "page": 325
        }
      ]
    },
    {
      "id": "eset_65",
      "desc": "15 éves fiú, orvossal akar beszélni, végül erősödő fájdalmat (3/10) jelez sérülés következtében, otthonról elszökött, utcán él, nem mondja el bántotta-e valaki; kábítószert tagad. RR 19/min, pulzus 76/min, vérnyomás 118/76 Hgmm, GCS 15, SpO2 98%.",
      "inputs": {
        "eletkorEv": 15,
        "gyermek": true,
        "rr": 19,
        "hr": 76,
        "sys": 118,
        "dia": 76,
        "gcs": 15,
        "spo2": 98,
        "fajdalomPont": 3,
        "vezetoPanaszId": "genitalis-trauma",
        "betegjoletiSzempontok": "valoszinu_testi_nemi_eroszak",
        "fajdalomJelleg": "akut"
      },
      "expected_level": 3,
      "rationale": "'Feltételezett nemi erőszak, stabil beteg' másodlagos módosító → MSTR 3. 'Nemi erőszak áldozataként' triázsolni csak beismerés vagy egyértelmű rendőri történet esetén helyes.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 326
        }
      ]
    },
    {
      "id": "eset_66",
      "desc": "5 éves kislány, mentővel érkezik, aktív tónusos-klónusos görcsroham zajlik (kórtörténetben többszöri roham, otthon végbélkúp beadva); kontaktusképtelen, sápadt, szabálytalan légzés.",
      "inputs": {
        "eletkorEv": 5,
        "gyermek": true,
        "vezetoPanaszId": "gorcsroham",
        "nehezlegzesFok": "sulyos",
        "gorcsAllapot": "aktiv"
      },
      "expected_level": 1,
      "rationale": "Válaszképtelen (eszméletvesztés elsődleges módosító MSTR 1) + szabálytalan légzés, légút-védelemre képtelen (súlyos nehézlégzés elsődleges módosító MSTR 1). Vitálmérés triázs szempontból szükségtelen.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 327
        }
      ]
    },
    {
      "id": "eset_67",
      "desc": "3 éves fiú, kb. 1 órája ismeretlen mennyiségű Digoxin tablettát nyelt le (nagymama gyógyszere); figyelmes, hányinger, egyszer hányt. RR 24/min, pulzus 80/min (korához mérten alacsony).",
      "inputs": {
        "eletkorEv": 3,
        "gyermek": true,
        "rr": 24,
        "hr": 80,
        "vezetoPanaszId": "szajon-at-torteno-tuladagolas",
        "toxAnyagKockazat": "ismeretlen_vagy_magas_kockazatu"
      },
      "expected_level": 2,
      "rationale": "Elsődleges megtekintésre a bradycardia miatt MSTR 3 lenne, de az 'ismeretlen/magas kockázatú anyag elfogyasztása' (Digoxin) másodlagos módosító → MSTR 2. Bármely haemodinamikai változás → MSTR 1. Digoxinnak van antidotuma.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 328
        }
      ]
    },
    {
      "id": "eset_68",
      "desc": "13 hónapos szintű keringésértékelési gyakorlat 1. eset: hányás/hasmenés, rózsaszín, élénk gyermek. RR 36/min, pulzus 170/min.",
      "inputs": {
        "eletkorHonap": 7,
        "gyermek": true,
        "rr": 36,
        "hr": 170,
        "vezetoPanaszId": "hanyas-hanyinger"
      },
      "expected_level": 2,
      "rationale": "Oktatói jegyzet szerint MSTR 2 a pulzusszám alapján. Életkor-ellentmondás: a dián '7 hónapos', a jegyzet szövegében '7 éves'.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 231
        }
      ]
    },
    {
      "id": "eset_69",
      "desc": "Keringésértékelési gyakorlat 2. eset: 4 éves inzulinos cukorbeteg, hányás, szapora légzés, nem tolerálja a folyadékot; sápadt, erőtlen, tahipnoe. RR 60/min, pulzus 170/min.",
      "inputs": {
        "eletkorEv": 4,
        "gyermek": true,
        "rr": 60,
        "hr": 170,
        "vezetoPanaszId": "hanyas-hanyinger",
        "keringesiAllapot": "sokk"
      },
      "expected_level": 1,
      "rationale": "Sápadt, erőtlen, tahipnoés cukorbeteg gyermek, extrém vitálisok → MSTR 1.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 231
        }
      ]
    },
    {
      "id": "eset_70",
      "desc": "Tudati állapot értékelési gyakorlat: 12 éves, leesett a kerékpárról, mentők szerint a helyszínen agresszív volt, jelenleg csak fájdalomra reagál.",
      "inputs": {
        "eletkorEv": 12,
        "gyermek": true,
        "vezetoPanaszId": "fejserules",
        "kritikusMegjelenes": "csak_fajdalomra_reagal"
      },
      "expected_level": 1,
      "rationale": "Csak fájdalomra reagáló tudati állapot → MSTR 1.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 233
        }
      ]
    },
    {
      "id": "eset_71",
      "desc": "Elsődleges megtekintés példa: leszürkült, erőtlen, merev tekintetű csecsemő.",
      "inputs": {
        "gyermek": true,
        "keringesiAllapot": "sokk",
        "kritikusMegjelenes": "leszurkult_ernyedt"
      },
      "expected_level": 1,
      "rationale": "Küllem alapján kritikus állapot → MSTR 1 (Reszuszcitáció/azonnali). Nincs numerikus bemenő adat.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 203
        },
        {
          "doc": "tankonyv",
          "page": 57
        }
      ]
    },
    {
      "id": "eset_72",
      "desc": "Elsődleges megtekintés példa: babakocsiban alvó kisded kékes, márványozott bőrszínnel.",
      "inputs": {
        "gyermek": true,
        "keringesiAllapot": "sokk",
        "kritikusMegjelenes": "cianotikus_marvanyozott"
      },
      "expected_level": 1,
      "rationale": "Cianózis/márványozottság → MSTR 1 (Reszuszcitáció/azonnali). Nincs numerikus bemenő adat.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 203
        },
        {
          "doc": "tankonyv",
          "page": 57
        }
      ]
    },
    {
      "id": "eset_73",
      "desc": "Elsődleges megtekintés példa: tónusos/klónusos görcs bármely életkorban.",
      "inputs": {
        "vezetoPanaszId": "gorcsroham",
        "gorcsAllapot": "aktiv"
      },
      "expected_level": 1,
      "rationale": "Aktív tónusos-klónusos görcs bármely életkorban → MSTR 1 (Reszuszcitáció/azonnali).",
      "source": [
        {
          "doc": "jegyzet",
          "page": 203
        },
        {
          "doc": "tankonyv",
          "page": 57
        }
      ]
    },
    {
      "id": "eset_74",
      "desc": "Elsődleges megtekintés példa: gyermek elutasítja az ételt, általános érdektelenség, levertség, megmagyarázhatatlan ingerlékenység, nincs hangja.",
      "inputs": {
        "gyermek": true,
        "kritikusMegjelenes": "etel_elutasitas_letargia"
      },
      "expected_level": 2,
      "rationale": "Aggasztó jelek (szepszis, anyagcserezavar, mérgezés, gyermekbántalmazás lehet) → MSTR 2 vagy súlyosabb. Nincs numerikus bemenő adat.",
      "source": [
        {
          "doc": "jegyzet",
          "page": 203
        },
        {
          "doc": "jegyzet",
          "page": 204
        },
        {
          "doc": "tankonyv",
          "page": 57
        }
      ]
    },
    {
      "id": "eset_75",
      "desc": "Bokasérülés (önmagában MSTR 4) + tünetmentes 230/120 Hgmm vérnyomás.",
      "inputs": {
        "sys": 230,
        "dia": 120,
        "vezetoPanaszId": "hipertenzio",
        "hipertoniaTunet": "nincs"
      },
      "expected_level": 3,
      "rationale": "Tünetmentes szisztolés >220 Hgmm másodlagos módosító (magas vérnyomás panasz) → MSTR 3, felülírva a minor bokasérülés MSTR 4 szintjét.",
      "source": [
        {
          "doc": "tankonyv",
          "page": 79
        }
      ]
    }
  ],
  "infekciokontroll": {
    "cim": "Infekciókontroll — izolációs igény",
    "megjegyzes": "Nem módosítja az MSTR-szintet; elhelyezési és PPE-jelzés. A fertőző betegek kiszűrése minden betegnél kötelező, kiegészítő triázslépés.",
    "source": [
      {
        "doc": "tankonyv",
        "page": 20
      },
      {
        "doc": "tankonyv",
        "page": 28
      }
    ],
    "kerdesek": [
      {
        "id": "inf_csepp",
        "cimke": "Köhögés / hányás / influenzaszerű tünet",
        "tipus": "Cseppfertőzés",
        "ppe": "N95 (FFP3) maszk 1 m-en belül; a beteg sebészi maszkban",
        "forras": [
          {
            "doc": "tankonyv",
            "page": 28
          },
          {
            "doc": "jegyzet",
            "page": 63
          }
        ]
      },
      {
        "id": "inf_kontakt",
        "cimke": "Hasmenés / nyílt seb",
        "tipus": "Kontakt fertőzés",
        "ppe": "Kesztyű, kézhigiéne, felület-fertőtlenítés",
        "forras": [
          {
            "doc": "tankonyv",
            "page": 28
          }
        ]
      },
      {
        "id": "inf_kiutes",
        "cimke": "Kiütés / hólyagos bőrtünet (pl. bárányhimlő-gyanú)",
        "tipus": "Légúti + kontakt — azonnali elkülönítés",
        "ppe": "Azonnali izoláció, ideálisan negatív nyomású, előteres szoba; nagyobb gyermek sebészi maszkban",
        "forras": [
          {
            "doc": "tankonyv",
            "page": 57
          },
          {
            "doc": "jegyzet",
            "page": 63
          }
        ]
      },
      {
        "id": "inf_expozicio",
        "cimke": "Ismert fertőző beteggel érintkezés / multirezisztens kórokozó",
        "tipus": "Kontakt fertőzés",
        "ppe": "Kesztyű, kézhigiéne; szükség szerint izolációs szoba",
        "forras": [
          {
            "doc": "jegyzet",
            "page": 207
          }
        ]
      }
    ],
    "autoPanasz": {
      "kohoges-torokszukulet": "inf_csepp",
      "urti-felso-leguti-fertozes": "inf_csepp",
      "hanyas-hanyinger": "inf_csepp",
      "kiutes": "inf_kiutes",
      "fertozo-beteggel-torteno-erintkezes": "inf_expozicio",
      "fertozes-kizarasa": "inf_expozicio"
    }
  },
  "betegut": {
    "megjegyzes": "Kizárólag MSTR III–V betegnél alkalmazható. Járóbeteg részlegre irányítható, ha MINDEN pont IGEN. A triázs megítélése/rizikóbecslése alapján a beteg bármikor a fekvőbeteg részlegre irányítható.",
    "jaroFeltetelek": [
      {
        "id": "ulve",
        "szoveg": "Ellátható ülő helyzetben, ágyat/fektetést nem igényel",
        "auto": null
      },
      {
        "id": "mobilis",
        "szoveg": "Biztonságosan mobilis: gyalog (min. 100 m) VAGY ülőkocsiban mozgatható, önállóan ül, nem igényel folyamatos fizikai segítséget, nincs elesési kockázat",
        "auto": null
      },
      {
        "id": "egyuttmukodo",
        "szoveg": "Együttműködő; nincs zavartság / intoxikáció / dementia, nincs eltévedés/elkóborolás vagy biztonsági kockázat",
        "auto": "confusion"
      },
      {
        "id": "nincsMonitor",
        "szoveg": "Nem igényel folyamatos megfigyelést / monitorozást",
        "auto": null
      },
      {
        "id": "nincsO2",
        "szoveg": "Nem igényel oxigén-szupplementációt",
        "auto": "o2"
      },
      {
        "id": "nincsIzolacio",
        "szoveg": "Nincs izolációs igény, amely kizárólag a fekvőbeteg részlegen biztosítható",
        "auto": "izolacio"
      },
      {
        "id": "nincsCrescendo",
        "szoveg": "Nincs veszélyeztető dinamikájú (crescendo) panasz/tünet",
        "auto": null
      }
    ],
    "eletkorMegjegyzes": "≥ 80 év vagy magas frailty esetén járóbeteg-irányítás csak gondos mérlegelést követően, lehetőleg kísérővel.",
    "felvetelSzabalyok": {
      "cim": "SE SOK betegfelvételi alapelvek",
      "forras": "SE Sürgősségi Orvostani Klinika – Betegfelvételi szabályok (2025.05.22)",
      "pontok": [
        "1. Kritikus állapotú beteg ellátása azonnal megkezdendő a Klinikán — bármilyen téves betegút vezetett is ide.",
        "2. A Klinikai Tömbben akut ellátás egykapus rendszerben a SOK-on; a referált akut (járó)betegeket a SOK látja el és dönt a diszpozícióról.",
        "3. Saját lábon érkezett, ellátást (nem útbaigazítást) kérő beteg felvétel, triage és ambuláns lap nélkül NEM irányítható el. Telephelyen belüli fast track (FOG/urológia/nőgyógyászat): rövid dokumentáció kötelező + előzetes értesítés javasolt.",
        "4. Mentő által hozott beteg csak ambuláns lappal (triage + műszakvezető döntése után), a definitív ellátás helyére szállítható tovább. Fast trackre a triage javaslatot tehet, a műszakvezető orvos dönt.",
        "5. Fekvőbeteg-intézményből referált beteget a kórállapotnak megfelelő klinika ügyeletéhez irányítsuk (ezek ellátásában nem veszünk részt). Kivétel: stroke-lízis, amely az SBO-n történhet.",
        "6. Más SBO-ra beteget területi illetékességre hivatkozva továbbküldeni TILOS. Területen kívüli beteg megfelelő ellátás után a definitív ellátó osztályra kerül; egykapus felvevő kórháznál is a célosztályt jelöljük meg.",
        "7. TETRA: stroke (thrombectomia) / PCI / speciális szakterület felé referálásra javaslat tehető; egyébként az OMSZ régióvezetői betegút. TETRA-referált beteg fogadását SOHA ne utasítsuk el.",
        "8. Traumát is szenvedett, de SBO-kivizsgálást igénylő beteg elsődleges ellátása az SBO-n történik (kivétel: azonnali traumatológiai beavatkozási igény, pl. polytrauma, kompromittált végtag-keringés).",
        "9. Bármilyen vitás, nem egyértelmű vagy nem szabályozott helyzetben a beteg érdeke az elsődleges.",
        "10. Bármilyen anomáliát, téves betegutat tapasztalva a fenti elvek betartandók."
      ]
    },
    "linkek": [
      {
        "cim": "XTEK — ellátási területek (KÁNY)",
        "url": "http://84.206.43.26:7080/ellatas/xtek/",
        "megjegyzes": "belső hálózaton érhető el"
      },
      {
        "cim": "NNGYK — kijelölések / átmeneti kijelölések",
        "url": "https://nngyk.gov.hu/hu/kijelolesek.html",
        "megjegyzes": "publikus"
      }
    ]
  }
};
  if (typeof module !== 'undefined' && module.exports) module.exports = KB;
  else global.MSTR_KB = KB;
})(typeof window !== 'undefined' ? window : globalThis);
