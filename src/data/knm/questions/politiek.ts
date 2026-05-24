import type { TopicQuestions } from './types';

export const politiekQuestions = {
  '1': [
    {
      variants: [
        'Wie heeft de wetgevende macht in Nederland?',
        'Welk orgaan maakt de wetten?',
        'Wie stelt de wetten vast?',
      ],
      options: ['De Koning', 'Het Kabinet', 'Het Parlement (Staten-Generaal)', 'De rechter'],
      answer: 2,
      explanation: 'De Staten-Generaal (Tweede + Eerste Kamer) maakt samen met de regering wetten.',
      explanationEn:
        'The States-General (House of Representatives + Senate) makes laws together with the government.',
    },
    {
      variants: [
        'Hoeveel zetels heeft de Tweede Kamer?',
        'Uit hoeveel leden bestaat de Tweede Kamer?',
        'Hoeveel volksvertegenwoordigers zitten in de Tweede Kamer?',
      ],
      options: ['75', '100', '150', '200'],
      answer: 2,
      explanation: 'De Tweede Kamer heeft 150 leden, direct gekozen door het volk.',
      explanationEn:
        'The House of Representatives has 150 members, directly elected by the people.',
    },
    {
      variants: [
        'Wie is in Nederland staatshoofd?',
        'Welke rol speelt de Koning?',
        'Wie heeft een ceremoniële rol als staatshoofd?',
      ],
      options: [
        'De Minister-President',
        'De Koning(in)',
        'De voorzitter Tweede Kamer',
        'De burgemeester van Den Haag',
      ],
      answer: 1,
      explanation:
        'Nederland is een constitutionele monarchie. De Koning is staatshoofd met ceremoniële rol.',
      explanationEn:
        'The Netherlands is a constitutional monarchy. The King is head of state with a ceremonial role.',
    },
    {
      variants: [
        'Vanaf welke leeftijd mag u stemmen bij landelijke verkiezingen?',
        'Op welke leeftijd krijgt u stemrecht?',
        'Wanneer mag een Nederlands staatsburger stemmen?',
      ],
      options: ['16 jaar', '17 jaar', '18 jaar', '21 jaar'],
      answer: 2,
      explanation:
        'Stemrecht voor Tweede Kamer en gemeenteraad start op 18 jaar (Nederlands staatsburger).',
      explanationEn:
        'The right to vote in national and municipal elections starts at age 18 (Dutch citizenship required).',
    },
    {
      variants: [
        'Wat staat er in de Grondwet?',
        'Welk document garandeert de basisrechten in Nederland?',
        'Waar zijn vrijheid van meningsuiting en gelijkheid wettelijk vastgelegd?',
      ],
      options: [
        'Het regeerakkoord',
        'De Grondwet',
        'Het Burgerlijk Wetboek',
        'De Algemene Wet Bestuursrecht',
      ],
      answer: 1,
      explanation:
        'De Grondwet bevat de fundamentele rechten: vrijheid van meningsuiting, godsdienst, gelijke behandeling.',
      explanationEn:
        'The Constitution contains fundamental rights: freedom of expression, religion, equal treatment.',
    },
  ],
  '2': [
    {
      variants: [
        'Hoe wordt de Eerste Kamer gekozen?',
        'Op welke manier komen leden van de Senaat in functie?',
        'Wie kiest de Eerste Kamerleden?',
      ],
      options: [
        'Direct door het volk',
        'Indirect door de Provinciale Staten',
        'Door de Koning aangewezen',
        'Door de Tweede Kamer',
      ],
      answer: 1,
      explanation:
        'De Eerste Kamer wordt indirect gekozen door de leden van de Provinciale Staten.',
      explanationEn: 'The Senate is indirectly elected by the members of the Provincial Councils.',
    },
    {
      variants: [
        'Wie is normaal gesproken het hoofd van de regering?',
        'Wie leidt de Nederlandse regering?',
        'Welke functie heeft de feitelijke leiding over het kabinet?',
      ],
      options: [
        'De Koning',
        'De Minister-President',
        'De voorzitter van de Tweede Kamer',
        'De vicepremier',
      ],
      answer: 1,
      explanation:
        'De Minister-President is voorzitter van de ministerraad en feitelijk regeringsleider.',
      explanationEn:
        'The Prime Minister chairs the Council of Ministers and is the de facto head of government.',
    },
    {
      variants: [
        "Wat is het 'poldermodel'?",
        "Wat betekent het 'poldermodel' in de Nederlandse politiek?",
        'Hoe heet het overlegmodel tussen werkgevers, vakbonden en overheid?',
      ],
      options: [
        'Een type huis',
        'Consensus zoeken via overleg tussen partijen, werkgevers en werknemers',
        'Een Belastingmodel',
        'Een militair plan',
      ],
      answer: 1,
      explanation:
        'Het poldermodel is consensusgericht overleg, vooral tussen sociale partners en overheid.',
      explanationEn:
        'The polder model is consensus-oriented consultation, especially between social partners and the government.',
    },
    {
      variants: [
        'Hoe vaak zijn er Tweede Kamerverkiezingen onder normale omstandigheden?',
        'Wat is de normale termijn tussen landelijke verkiezingen?',
        'Hoeveel jaar zit een Tweede Kamer normaal?',
      ],
      options: ['Elke 2 jaar', 'Elke 4 jaar', 'Elke 5 jaar', 'Elke 6 jaar'],
      answer: 1,
      explanation: 'Onder normale omstandigheden zijn er elke 4 jaar Tweede Kamerverkiezingen.',
      explanationEn: 'Under normal circumstances, general elections are held every 4 years.',
    },
    {
      variants: [
        "Wat is de 'Trias Politica'?",
        'Wat betekent de scheiding der machten?',
        'Welke drie machten kent Nederland?',
      ],
      options: [
        'Drie politieke partijen',
        'Wetgevende, uitvoerende en rechterlijke macht — gescheiden',
        'Drie ministeries',
        'Drie provincies',
      ],
      answer: 1,
      explanation:
        'Trias Politica = scheiding tussen wetgevende (parlement), uitvoerende (kabinet) en rechterlijke macht.',
      explanationEn:
        'Trias Politica = separation of legislative (parliament), executive (cabinet) and judicial powers.',
    },
  ],
  '3': [
    {
      variants: [
        'Wat doet een gemeenteraad?',
        'Welke rol heeft de gemeenteraad?',
        'Wie controleert het gemeentelijk bestuur lokaal?',
      ],
      options: [
        'Belastingaangifte verwerken',
        'Lokale regels en begroting vaststellen + B&W controleren',
        'Uitkeringen uitbetalen',
        'Paspoorten ondertekenen',
      ],
      answer: 1,
      explanation:
        'De gemeenteraad stelt het lokaal beleid vast en controleert het college van B&W.',
      explanationEn:
        'The municipal council sets local policy and monitors the executive board (college of mayor and aldermen).',
    },
    {
      variants: [
        "Wat zijn 'algemene rechten' in de Grondwet?",
        'Welke rechten gelden in Nederland voor iedereen?',
        'Voorbeeld van een grondrecht?',
      ],
      options: [
        'Alleen kiesrecht',
        'Vrijheid van meningsuiting, godsdienst, gelijke behandeling, privacy etc.',
        'Alleen voor Nederlandse burgers',
        'Alleen economisch',
      ],
      answer: 1,
      explanation:
        'De Grondwet kent klassieke grondrechten als vrijheid van meningsuiting en gelijke behandeling.',
      explanationEn:
        'The Constitution contains classic fundamental rights such as freedom of expression and equal treatment.',
    },
    {
      variants: [
        "Wat is een 'coalitieregering'?",
        "Wat betekent 'coalitie' in Nederlandse politiek?",
        'Waarom werken meerdere partijen samen in het kabinet?',
      ],
      options: [
        'Eén partij krijgt alle macht',
        'Meerdere partijen vormen samen een meerderheid en regeren samen',
        'Een ondemocratische regering',
        'Een internationale verbond',
      ],
      answer: 1,
      explanation:
        'Door evenredige vertegenwoordiging is meerderheid van 1 partij zelden — coalities zijn de norm.',
      explanationEn:
        'Due to proportional representation, a single-party majority is rare — coalition governments are the norm.',
    },
    {
      variants: [
        'Wat doet de rechterlijke macht?',
        'Welke rol hebben rechters?',
        'Wie spreekt recht in Nederland?',
      ],
      options: [
        'Wetten maken',
        'Beoordelen of wetten zijn nageleefd en geschillen oplossen',
        'Belastingen innen',
        'Uitkeringen verstrekken',
      ],
      answer: 1,
      explanation:
        'De rechterlijke macht beoordeelt geschillen en past wetten toe — onafhankelijk van regering.',
      explanationEn:
        'The judiciary assesses disputes and applies the law — independently of the government.',
    },
    {
      variants: [
        "Wat is een 'referendum'?",
        'Wat houdt een referendum in?',
        'Hoe vraagt de overheid het volk mening over een onderwerp?',
      ],
      options: [
        'Een belasting',
        'Een stemming waarin burgers direct over een onderwerp stemmen',
        'Een gemeentelijke vergunning',
        'Een rechterlijke uitspraak',
      ],
      answer: 1,
      explanation: 'Bij een referendum kunnen burgers direct over een vraagstuk stemmen.',
      explanationEn: 'In a referendum, citizens can vote directly on a question or issue.',
    },
  ],
} as const satisfies TopicQuestions;
