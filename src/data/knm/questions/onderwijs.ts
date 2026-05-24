import type { TopicQuestions } from './types';

export const onderwijsQuestions = {
  '1': [
    {
      variants: [
        'Vanaf welke leeftijd geldt de leerplicht?',
        'Op welke leeftijd moet een kind in Nederland naar school?',
        'Wanneer begint de wettelijke leerplicht?',
      ],
      options: ['4 jaar', '5 jaar', '6 jaar', '7 jaar'],
      answer: 1,
      explanation: 'De leerplicht begint op 5 jaar. Veel kinderen starten al op 4 jaar.',
      explanationEn: 'Compulsory education starts at age 5. Many children start school at age 4.',
    },
    {
      variants: [
        'U wilt studeren aan HBO of WO. Wie regelt de studiefinanciering?',
        'Welke instantie verzorgt studieleningen voor hoger onderwijs?',
        'Bij wie vraagt u een studielening en OV-kaart aan?',
      ],
      options: ['UWV', 'DUO', 'SVB', 'Gemeente'],
      answer: 1,
      explanation: 'DUO regelt studiefinanciering, studentenreisproduct en studieleningen.',
      explanationEn:
        'DUO manages student finance, the student travel product (OV-kaart) and student loans.',
    },
    {
      variants: [
        'Wat is het verschil tussen MBO en HBO?',
        'MBO en HBO — welk is hoger?',
        'Welk onderwijs is praktijkgericht op niveau 1–4?',
      ],
      options: [
        'MBO en HBO zijn gelijk',
        'MBO is hoger dan HBO',
        'MBO is beroepsonderwijs (1–4), HBO is hoger beroepsonderwijs',
        'Beide zijn universitair',
      ],
      answer: 2,
      explanation:
        'MBO = middelbaar beroepsonderwijs (niveau 1–4). HBO = hoger beroepsonderwijs (bachelor).',
      explanationEn:
        "MBO = vocational secondary education (levels 1–4). HBO = higher professional education (bachelor's degree).",
    },
    {
      variants: [
        'Welke toeslag helpt bij kosten voor kinderopvang?',
        'Wie betaalt mee aan de crèche/BSO?',
        'Welke regeling verlaagt kosten van kinderopvang voor werkende ouders?',
      ],
      options: [
        'Alleen de werkgever',
        'Kinderopvangtoeslag van de Belastingdienst',
        'Alleen UWV',
        'Alleen de gemeente',
      ],
      answer: 1,
      explanation:
        'Kinderopvangtoeslag wordt door de Belastingdienst uitbetaald aan werkende ouders.',
      explanationEn:
        'Childcare benefit (kinderopvangtoeslag) is paid by the Tax Authority to working parents.',
    },
    {
      variants: [
        'Wat zijn de drie niveaus van middelbare school?',
        'Hoe heten de drie hoofdtypen voortgezet onderwijs?',
        'Welke middelbare schooltypen kent Nederland?',
      ],
      options: [
        'VMBO, HAVO, VWO',
        'MBO, HBO, WO',
        'Basis, midden, hoog',
        'Praktijk, theorie, universiteit',
      ],
      answer: 0,
      explanation: 'VMBO (4 jaar), HAVO (5 jaar) en VWO (6 jaar) zijn de drie hoofdroutes.',
      explanationEn:
        'VMBO (4 years), HAVO (5 years) and VWO (6 years) are the three main secondary school tracks.',
    },
  ],
  '2': [
    {
      variants: [
        'Tot welke leeftijd geldt de kwalificatieplicht (na de leerplicht)?',
        'Wat is de kwalificatieplicht?',
        'Verlengde schoolplicht na 16 jaar — wat zijn de regels?',
      ],
      options: [
        'Tot 17 jaar',
        'Tot 18 jaar of tot startkwalificatie',
        'Tot 21 jaar',
        'Tot 25 jaar',
      ],
      answer: 1,
      explanation:
        'Tussen 16 en 18 jaar is er kwalificatieplicht: doorleren tot een startkwalificatie of tot 18 jaar.',
      explanationEn:
        'Between ages 16 and 18 there is a qualification obligation: keep studying until a starter qualification or age 18.',
    },
    {
      variants: [
        'Welk niveau is een universitaire bacheloropleiding?',
        "Waar staat 'WO' voor?",
        'Welke afkorting hoort bij universitair onderwijs?',
      ],
      options: ['MBO', 'HBO', 'WO (Wetenschappelijk Onderwijs)', 'VMBO'],
      answer: 2,
      explanation:
        'WO = Wetenschappelijk Onderwijs (universiteit). HBO = hoger beroepsonderwijs (hogeschool).',
      explanationEn:
        'WO = academic education (university). HBO = higher professional education (university of applied sciences).',
    },
    {
      variants: [
        "Wat is een 'eindtoets' in groep 8?",
        'Welke toets bepaalt schooladvies voortgezet onderwijs?',
        'Wat doet groep 8 aan het einde van de basisschool?',
      ],
      options: [
        'Het eindexamen voortgezet onderwijs',
        'Een toets aan einde basisschool die advies vormt voor middelbare school',
        'Het inburgeringsexamen',
        'Een sportdag',
      ],
      answer: 1,
      explanation:
        'De eindtoets/doorstroomtoets in groep 8 ondersteunt het schooladvies van de leerkracht.',
      explanationEn:
        "The final/transition test in year 8 supports the teacher's school recommendation for secondary education.",
    },
    {
      variants: [
        'Mag een werkgever onderwijsverlof weigeren?',
        'Heeft u recht op studieverlof voor inburgering of taalles?',
        'Onderwijsverlof in dienstverband — wat zijn de regels?',
      ],
      options: [
        'Werkgever moet altijd toestemming geven',
        'Het is vaak een afspraak/cao-onderwerp; geen automatisch recht',
        'Verlof komt van UWV',
        'Werkgever moet zelfs het loon doorbetalen tijdens cursus',
      ],
      answer: 1,
      explanation:
        'Studieverlof is niet automatisch — meestal cao- of werkgeverbeleid. Inburgering kan via gemeente lopen.',
      explanationEn:
        'Study leave is not automatic — it is usually governed by collective agreement or employer policy. Integration courses may be arranged via the municipality.',
    },
    {
      variants: [
        'U bent inburgeraar. Waar krijgt u soms financiële steun voor de cursus?',
        'Wie betaalt soms de inburgeringscursus?',
        'Welke instanties helpen bij betaling van inburgering?',
      ],
      options: ['Belastingdienst', 'Gemeente / DUO-lening', 'UWV', 'SVB'],
      answer: 1,
      explanation:
        'Bij Wet 2021 helpt vaak de gemeente; daarvoor kon een DUO-lening worden afgesloten.',
      explanationEn:
        'Under the 2021 Integration Act the municipality often provides support; previously a DUO loan could be taken out.',
    },
  ],
  '3': [
    {
      variants: [
        "Wat is het 'studentenreisproduct'?",
        'Welk voordeel hebben studenten in het openbaar vervoer?',
        'Gratis of korting reizen voor studenten — hoe heet dat?',
      ],
      options: [
        'Een gratis paspoort',
        'Gratis of korting op OV (NS, bus, tram, metro) tijdens studieperiode',
        'Een belastingvoordeel',
        'Een huurtoeslag',
      ],
      answer: 1,
      explanation:
        'Studenten krijgen via DUO een OV-kaart (week óf weekend), gratis of met korting.',
      explanationEn:
        'Students receive an OV-card (weekday or weekend) via DUO, free or at a discount for public transport.',
    },
    {
      variants: [
        'U bent ouder en uw kind is ongeoorloofd afwezig op school. Wie kan u aanspreken?',
        'Bij spijbelen — welke ambtenaar handelt dat af?',
        'Schoolverzuim — wie controleert dat?',
      ],
      options: [
        'De leerplichtambtenaar van de gemeente',
        'Het UWV',
        'De huisarts',
        'De politie direct',
      ],
      answer: 0,
      explanation:
        'Elke gemeente heeft leerplichtambtenaren die schoolverzuim controleren en sancties opleggen.',
      explanationEn:
        'Every municipality has compulsory education officers who monitor school attendance and impose sanctions.',
    },
    {
      variants: [
        'Vanaf welke leeftijd kunnen kinderen naar de basisschool?',
        'Op welke leeftijd starten de meeste kinderen op de basisschool?',
        'Wanneer mag een kind voor het eerst naar groep 1?',
      ],
      options: ['3 jaar', '4 jaar', '5 jaar', '6 jaar'],
      answer: 1,
      explanation: 'Op de dag na hun 4e verjaardag mogen kinderen naar de basisschool (groep 1).',
      explanationEn: 'Children may start primary school (year 1) the day after their 4th birthday.',
    },
    {
      variants: [
        'Wat is bijzonder onderwijs?',
        "Wat betekent 'bijzondere school' in Nederland?",
        'Verschil openbaar en bijzonder onderwijs — wat is bijzonder?',
      ],
      options: [
        'School met extra geld',
        'School gebaseerd op een religieuze of pedagogische grondslag, betaald door overheid',
        'School alleen voor speciale leerlingen',
        'School zonder leerplicht',
      ],
      answer: 1,
      explanation:
        'Bijzonder onderwijs (bv. religieus, Montessori, Dalton) wordt ook door de overheid bekostigd.',
      explanationEn:
        'Special (denominational) education (e.g. religious, Montessori, Dalton) is also funded by the government.',
    },
    {
      variants: [
        "Wat is een 'startkwalificatie'?",
        'Welk diploma is het minimumvereiste op de arbeidsmarkt?',
        'Wat geldt als startkwalificatie voor jongeren?',
      ],
      options: [
        'VMBO-basis',
        'Een HAVO/VWO-diploma of een MBO-diploma minimaal niveau 2',
        'Een universitair diploma',
        'Een paspoort',
      ],
      answer: 1,
      explanation:
        'Een startkwalificatie is minimaal MBO-2, HAVO of VWO — bedoeld als minimumstart op de arbeidsmarkt.',
      explanationEn:
        'A starter qualification is at minimum MBO level 2, HAVO or VWO — intended as the minimum entry to the labour market.',
    },
  ],
} as const satisfies TopicQuestions;
