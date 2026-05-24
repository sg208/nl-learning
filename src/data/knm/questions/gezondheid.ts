import type { TopicQuestions } from './types';

export const gezondheidQuestions = {
  '1': [
    {
      variants: [
        'U heeft sinds twee dagen hoge koorts en hoofdpijn. Wat doet u?',
        'Je voelt je al twee dagen ziek met koorts. Welke stap is het beste?',
        'Iemand thuis heeft koorts die niet wegzakt. Wat is de juiste actie?',
      ],
      options: [
        'Direct naar de spoedeisende hulp',
        'Bel uw huisarts voor een afspraak',
        'Bel 112',
        'Ga naar de apotheek voor advies',
      ],
      answer: 1,
      explanation:
        'Voor niet-spoedeisende klachten belt u altijd eerst de huisarts. 112 is alleen voor levensgevaar.',
      explanationEn:
        'For non-emergency complaints always call your GP first. 112 is only for life-threatening situations.',
    },
    {
      variants: [
        'Uw kind van 2 jaar moet zijn vaccinaties krijgen. Waar gaat u heen?',
        'Een peuter is toe aan een vaccinatie. Welke instantie?',
        'Een baby moet ingeënt worden. Bij welke organisatie?',
      ],
      options: [
        'Bij de huisarts',
        'Bij het ziekenhuis',
        'Bij het consultatiebureau',
        'Bij de apotheek',
      ],
      answer: 2,
      explanation:
        'Het consultatiebureau geeft gratis vaccinaties en controles voor kinderen 0–4 jaar.',
      explanationEn:
        'The child health clinic (consultatiebureau) provides free vaccinations and check-ups for children aged 0–4.',
    },
    {
      variants: [
        'U heeft een recept van de huisarts gekregen. Waar haalt u uw medicijnen?',
        'De dokter heeft medicijnen voorgeschreven. Waarheen?',
        'Met een voorschrift in de hand — waar gaat u naartoe?',
      ],
      options: ['Bij de supermarkt', 'Bij de huisarts', 'Bij de apotheek', 'Bij de drogist'],
      answer: 2,
      explanation:
        'Receptmedicijnen krijgt u alleen bij de apotheek. De drogist verkoopt enkel vrij verkrijgbare middelen.',
      explanationEn:
        'Prescription medicines are only available at the pharmacy. The drugstore (drogist) sells over-the-counter items only.',
    },
    {
      variants: [
        'Wat is in Nederland verplicht voor iedereen die hier woont of werkt?',
        'Welke verzekering moet u sowieso afsluiten in Nederland?',
        'Wat moet je hebben zodra je in Nederland gaat wonen?',
      ],
      options: [
        'Reisverzekering',
        'Zorgverzekering',
        'Autoverzekering',
        'Aansprakelijkheidsverzekering',
      ],
      answer: 1,
      explanation:
        'Een basiszorgverzekering is wettelijk verplicht voor iedereen die in Nederland woont of werkt.',
      explanationEn:
        'Basic health insurance is legally required for everyone who lives or works in the Netherlands.',
    },
    {
      variants: [
        'U wilt naar een specialist in het ziekenhuis. Wat heeft u nodig?',
        'Voor een afspraak bij een specialist — wat is vereist?',
        'Hoe komt u bij een medisch specialist terecht?',
      ],
      options: [
        'U kunt direct een afspraak maken',
        'Een verwijzing van de huisarts',
        'Een afspraak via het consultatiebureau',
        'Toestemming van de gemeente',
      ],
      answer: 1,
      explanation:
        'De huisarts is de poortwachter — een verwijsbrief is bijna altijd nodig voor specialistische zorg.',
      explanationEn:
        'The GP is the gatekeeper — a referral letter is almost always needed for specialist care.',
    },
  ],
  '2': [
    {
      variants: [
        'U heeft hoofdpijn en heeft gewoon paracetamol nodig. Waar koopt u dat zonder recept?',
        'U wilt vrij verkrijgbare pijnstillers kopen. Waar gaat u heen?',
        'Een kleine kwaal: paracetamol nodig. Waar haalt u die?',
      ],
      options: ['Apotheek of drogist', 'Huisarts', 'Ziekenhuis', 'Consultatiebureau'],
      answer: 0,
      explanation:
        'Vrij verkrijgbare middelen koopt u bij de drogist of apotheek — geen recept nodig.',
      explanationEn:
        'Over-the-counter medicines can be bought at the drugstore or pharmacy — no prescription needed.',
    },
    {
      variants: [
        'U gaat naar de tandarts. Wordt dit voor volwassenen vanuit het basispakket vergoed?',
        'Is tandartszorg standaard verzekerd voor volwassenen?',
        'Vergoedt de basisverzekering tandartsbezoek bij 30-jarigen?',
      ],
      options: [
        'Ja, volledig',
        'Alleen kinderen tot 18 jaar; volwassenen hebben aanvullende verzekering nodig',
        'Alleen via de huisarts',
        'Nee, nooit verzekerd',
      ],
      answer: 1,
      explanation:
        'Voor kinderen tot 18 jaar zit tandarts in het basispakket. Volwassenen hebben een aanvullende verzekering nodig.',
      explanationEn:
        'Dental care for children under 18 is covered by basic insurance. Adults need supplementary insurance.',
    },
    {
      variants: [
        'Wat is het wettelijk eigen risico voor de basiszorgverzekering (per 2024)?',
        'Hoeveel betaalt u zelf voordat uw zorgverzekering vergoedt (2024)?',
        'Hoogte van het verplicht eigen risico per jaar in 2024?',
      ],
      options: ['€ 0', '€ 200', '€ 385', '€ 500'],
      answer: 2,
      explanation:
        'Het verplicht eigen risico is € 385 per jaar (2024). Wat u boven dit bedrag aan zorg gebruikt, wordt vergoed.',
      explanationEn:
        'The mandatory deductible (eigen risico) is €385 per year (2024). Healthcare costs above this are covered.',
    },
    {
      variants: [
        'Het is zaterdagavond. Uw kind heeft erge oorpijn maar het is geen levensgevaar. Wat doet u?',
        'Niet-spoed klacht buiten kantooruren — welke instantie?',
        'Avond/weekend en u moet snel een dokter spreken (niet 112). Waar?',
      ],
      options: [
        'Bel 112',
        'Wacht tot maandag en bel de huisarts',
        'Bel de huisartsenpost (HAP)',
        'Ga naar de apotheek',
      ],
      answer: 2,
      explanation:
        'De huisartsenpost (HAP) is voor urgente klachten buiten kantooruren, maar geen 112-situaties.',
      explanationEn:
        'The out-of-hours GP clinic (HAP) handles urgent complaints outside office hours — but not life-threatening emergencies.',
    },
    {
      variants: [
        'U heeft een laag inkomen en moet de zorgverzekering betalen. Welke regeling kan u helpen?',
        'Welke toeslag verlaagt de premie van uw zorgverzekering bij laag inkomen?',
        'Bij weinig geld — welke financiële steun is er voor de zorgpremie?',
      ],
      options: ['Huurtoeslag', 'Zorgtoeslag', 'Kinderbijslag', 'Studiefinanciering'],
      answer: 1,
      explanation:
        'Zorgtoeslag van de Belastingdienst helpt mensen met laag inkomen de zorgpremie te betalen.',
      explanationEn:
        'The healthcare benefit (zorgtoeslag) from the Tax Authority helps people with low income pay their health insurance premium.',
    },
  ],
  '3': [
    {
      variants: [
        'U bent zwanger en wilt zwangerschapscontroles. Bij wie meldt u zich eerst?',
        'Bij wie begint de standaard zwangerschapszorg?',
        'Eerste stap in zwangerschapszorg in Nederland?',
      ],
      options: [
        'Verloskundige of huisarts',
        'Direct in het ziekenhuis',
        'Bij het consultatiebureau',
        'Bij de gemeente',
      ],
      answer: 0,
      explanation:
        'Bij standaard zwangerschap is de verloskundige (of huisarts) het eerste aanspreekpunt.',
      explanationEn:
        'For a standard pregnancy, the midwife (verloskundige) or GP is the first point of contact.',
    },
    {
      variants: [
        'U heeft een nieuw medicijn nodig en wilt advies over wisselwerking met andere medicatie. Wie helpt u?',
        'Vragen over bijwerkingen van medicatie — waar gaat u heen?',
        'Medicijn-interactiecheck nodig. Welke deskundige?',
      ],
      options: ['Drogist', 'Apotheker', 'Tandarts', 'Optometrist'],
      answer: 1,
      explanation:
        'De apotheker controleert medicatie op interacties en geeft advies — dat is hun specialisme.',
      explanationEn:
        'The pharmacist checks medication for interactions and gives advice — that is their speciality.',
    },
    {
      variants: [
        'Wat is de naam van de instantie voor de spoedhulp via telefoon?',
        'Welk telefoonnummer belt u bij levensgevaar?',
        'Voor brandweer, ambulance of politie bij ernstige nood: welk nummer?',
      ],
      options: ['112', '113', '144', '0800-8844'],
      answer: 0,
      explanation:
        '112 is het Europese alarmnummer voor levensbedreigende situaties — politie, brandweer en ambulance.',
      explanationEn:
        '112 is the European emergency number for life-threatening situations — police, fire brigade and ambulance.',
    },
    {
      variants: [
        'U wilt psychische hulp omdat u zich erg slecht voelt. Bij wie begint u?',
        'Eerste stap voor mentale gezondheidsklachten in Nederland?',
        'Wie verwijst u naar een psycholoog of GGZ?',
      ],
      options: ['Direct naar een psychiater', 'De huisarts', 'De gemeente', 'Het ziekenhuis'],
      answer: 1,
      explanation:
        'De huisarts is ook voor mentale klachten het eerste aanspreekpunt. Hij/zij verwijst u door naar GGZ of POH-GGZ.',
      explanationEn:
        'The GP is also the first point of contact for mental health complaints. They refer you to mental health services (GGZ).',
    },
    {
      variants: [
        'U gaat verhuizen en wilt uw huisarts veranderen. Wat doet u?',
        'Bij verhuizing naar ander gebied — hoe regelt u een nieuwe huisarts?',
        'Andere stad, andere huisarts: welke stap?',
      ],
      options: [
        'Niets — uw huidige huisarts blijft automatisch',
        'U schrijft zich in bij een huisarts in de buurt van uw nieuwe woonadres',
        'U vraagt het de Belastingdienst',
        'U wacht tot u ziek wordt',
      ],
      answer: 1,
      explanation:
        'U moet zich actief inschrijven bij een huisartsenpraktijk in uw nieuwe woonomgeving.',
      explanationEn: 'You must actively register with a GP practice in your new residential area.',
    },
  ],
} as const satisfies TopicQuestions;
