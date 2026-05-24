import type { TopicQuestions } from './types';

export const werkQuestions = {
  '1': [
    {
      variants: [
        'U bent ontslagen na drie jaar werken. Bij welke instantie vraagt u een WW-uitkering aan?',
        'Je verliest je baan. Waar meld je je aan voor werkloosheidsuitkering?',
        'Na ontslag — welke organisatie regelt de WW?',
      ],
      options: ['De gemeente', 'De Belastingdienst', 'Het UWV', 'De SVB'],
      answer: 2,
      explanation: 'UWV regelt werkloosheids-, ziekte- en arbeidsongeschiktheidsuitkeringen.',
      explanationEn: 'UWV administers unemployment (WW), sickness and disability benefits.',
    },
    {
      variants: [
        'Hoeveel vakantiegeld krijgt u minimaal per jaar in Nederland?',
        'Wat is het wettelijk minimum vakantiegeld?',
        'Het vakantiegeld bedraagt minimaal hoeveel procent van het brutoloon?',
      ],
      options: [
        '4% van het brutoloon',
        '8% van het brutoloon',
        '10% van het brutoloon',
        '12% van het brutoloon',
      ],
      answer: 1,
      explanation:
        'Wettelijk vakantiegeld is minimaal 8% van het brutosalaris, meestal uitbetaald in mei.',
      explanationEn:
        'Statutory holiday pay is at least 8% of gross salary, usually paid out in May.',
    },
    {
      variants: [
        'U wilt als zelfstandige beginnen. Waar moet u zich inschrijven?',
        "Een ZZP'er starten — bij welke organisatie registreren?",
        'Je begint een eigen bedrijf. Waar schrijf je je in?',
      ],
      options: ['Belastingdienst', 'Gemeente', 'Kamer van Koophandel (KvK)', 'UWV'],
      answer: 2,
      explanation: 'De Kamer van Koophandel (KvK) registreert alle ondernemingen, ZZP inbegrepen.',
      explanationEn:
        'The Chamber of Commerce (KvK) registers all businesses, including self-employed (ZZP).',
    },
    {
      variants: [
        'U heeft geen recht op WW en geen ander inkomen. Waar vraagt u hulp aan?',
        'Geen werk, geen WW — waar voor leefgeld?',
        'Zonder inkomen en zonder recht op UWV-uitkering — welke instantie?',
      ],
      options: ['UWV', 'De gemeente (bijstand)', 'SVB', 'DUO'],
      answer: 1,
      explanation: 'Bijstand is de laatste vangnetregeling en loopt via de gemeente, niet via UWV.',
      explanationEn:
        'Social assistance (bijstand) is the last-resort safety net and is handled by the municipality, not UWV.',
    },
    {
      variants: [
        'Welk document toont uw maandelijks salaris, belastingen en pensioenpremie?',
        'Hoe heet het overzicht dat u elke maand van uw werkgever krijgt?',
        'Op welk papier ziet u uw nettoloon en inhoudingen?',
      ],
      options: ['Arbeidscontract', 'Loonstrook', 'Jaaropgave', 'Aangifte inkomstenbelasting'],
      answer: 1,
      explanation: 'De loonstrook toont per periode het bruto- en nettoloon plus alle inhoudingen.',
      explanationEn:
        'The payslip (loonstrook) shows your gross and net salary plus all deductions for each pay period.',
    },
  ],
  '2': [
    {
      variants: [
        'Hoe lang mag een wettelijke proeftijd in een arbeidscontract maximaal duren?',
        'Wat is de maximale proeftijd bij een vast contract?',
        'Maximale wettelijke proeftijd in maanden?',
      ],
      options: ['1 maand', '2 maanden', '3 maanden', '6 maanden'],
      answer: 1,
      explanation:
        'Bij een contract voor onbepaalde tijd of langer dan 2 jaar is de proeftijd maximaal 2 maanden.',
      explanationEn:
        'For a permanent contract or one lasting over 2 years, the probationary period is at most 2 months.',
    },
    {
      variants: [
        'U bent ziek geworden in vaste dienst. Wie betaalt uw loon door?',
        'Bij ziekte met een vast contract — wie zorgt voor uw inkomen?',
        'Wie is verplicht loon door te betalen bij ziekte van een werknemer?',
      ],
      options: [
        'De werkgever (eerste 2 jaar)',
        'Het UWV vanaf dag 1',
        'De gemeente',
        'De Belastingdienst',
      ],
      answer: 0,
      explanation: 'De werkgever moet bij ziekte tot 2 jaar minimaal 70% van het loon doorbetalen.',
      explanationEn:
        'The employer must continue paying at least 70% of the salary during illness for up to 2 years.',
    },
    {
      variants: [
        'U doet jaarlijks aangifte van uw inkomen. Bij welke instantie?',
        'Wie ontvangt uw aangifte inkomstenbelasting?',
        'Belastingaangifte — welke organisatie?',
      ],
      options: ['UWV', 'Belastingdienst', 'Gemeente', 'KvK'],
      answer: 1,
      explanation: 'De Belastingdienst regelt alle belastingen, inclusief inkomstenbelasting.',
      explanationEn: 'The Tax Authority (Belastingdienst) handles all taxes, including income tax.',
    },
    {
      variants: [
        'Vanaf welke leeftijd geldt het volwassenen-minimumloon in Nederland?',
        "Op welke leeftijd krijgt u het 'volledige' minimumloon?",
        'Wettelijk minimumloon volwassen-leeftijd?',
      ],
      options: ['18 jaar', '21 jaar', '23 jaar', '25 jaar'],
      answer: 1,
      explanation: 'Vanaf 21 jaar geldt het volwassen-minimumloon. Daarvoor het jeugd-minimumloon.',
      explanationEn:
        'From age 21 the adult minimum wage applies. Below that, youth minimum wage rates apply.',
    },
    {
      variants: [
        'Uw werkgever wil u ontslaan zonder geldige reden. Waar krijgt u juridisch advies?',
        'Onterecht ontslag — gratis advies waar?',
        'Vragen over uw rechten bij ontslag, weinig budget. Wie helpt?',
      ],
      options: ['Juridisch Loket', 'UWV', 'Politie', 'Anti Discriminatie Bureau'],
      answer: 0,
      explanation:
        'Het Juridisch Loket geeft gratis juridisch advies voor mensen met een laag inkomen.',
      explanationEn:
        'The Legal Aid Desk (Juridisch Loket) provides free legal advice for people with a low income.',
    },
  ],
  '3': [
    {
      variants: [
        'U werkt op tijdelijk contract dat afloopt. Heeft u recht op WW als u aan voorwaarden voldoet?',
        'Tijdelijk contract eindigt — kan u WW krijgen?',
        'Aflopend contract en u voldoet aan eisen — heeft u recht op WW?',
      ],
      options: [
        'Nee, alleen vaste contracten geven WW-recht',
        'Ja, ook tijdelijke contracten geven recht op WW',
        'Alleen na 10 jaar werken',
        'Alleen via de gemeente',
      ],
      answer: 1,
      explanation: 'Tijdelijke werknemers hebben ook recht op WW, mits ze aan de wekeneis voldoen.',
      explanationEn:
        'Temporary employees also have the right to unemployment benefit (WW), provided they meet the weeks-worked requirement.',
    },
    {
      variants: [
        'Hoe heet de uitkering voor mensen die langdurig arbeidsongeschikt zijn?',
        'Welke uitkering is voor mensen die niet meer kunnen werken door ziekte/handicap?',
        'Lange-termijn arbeidsongeschiktheidsuitkering: hoe heet die?',
      ],
      options: ['WW', 'WIA', 'AOW', 'Bijstand'],
      answer: 1,
      explanation:
        'WIA (Wet werk en inkomen naar arbeidsvermogen) is voor mensen die langer dan 2 jaar ziek/arbeidsongeschikt zijn.',
      explanationEn:
        'WIA is the long-term disability benefit for people who have been ill or incapacitated for more than 2 years.',
    },
    {
      variants: [
        'U heeft een 0-urencontract. Bent u verzekerd voor ziekte?',
        'Wat zijn uw rechten bij ziekte met een 0-urencontract?',
        'Oproep-/0-uren-contract en ziek geworden: wat geldt?',
      ],
      options: [
        'Geen rechten',
        'Recht op loondoorbetaling tijdens de oproep / via Ziektewet UWV',
        'Alleen via huisarts',
        'Alleen via Belastingdienst',
      ],
      answer: 1,
      explanation:
        'Bij 0-uren is er beperkte loondoorbetaling; vaak loopt het via de Ziektewet bij UWV.',
      explanationEn:
        'With a zero-hours contract there is limited sick pay; it often runs via the Sickness Benefits Act (Ziektewet) at UWV.',
    },
    {
      variants: [
        'Wie betaalt de AOW (staatspensioen) uit?',
        'Welke instantie zorgt voor het staatspensioen?',
        'Pensioenuitkering vanaf AOW-leeftijd komt van welke organisatie?',
      ],
      options: [
        'UWV',
        'SVB (Sociale Verzekeringsbank)',
        'Belastingdienst',
        'Pensioenfonds van werkgever',
      ],
      answer: 1,
      explanation:
        'SVB voert de AOW uit. Aanvullend pensioen kan via een werkgeverspensioenfonds lopen.',
      explanationEn:
        "SVB administers the AOW state pension. Supplementary pension may be provided through an employer's pension fund.",
    },
    {
      variants: [
        'Wat moet een werkgever wettelijk geven aan elke werknemer?',
        'Welk document is verplicht bij begin van een dienstverband?',
        'Wettelijke verplichting van een werkgever bij aanname?',
      ],
      options: [
        'Een mondelinge afspraak is genoeg',
        'Een schriftelijk arbeidscontract met basisvoorwaarden',
        'Alleen een loonstrook',
        'Een verklaring omtrent gedrag',
      ],
      answer: 1,
      explanation:
        'De werkgever moet de basisvoorwaarden van het arbeidscontract schriftelijk vastleggen.',
      explanationEn: 'The employer must put the basic terms of the employment contract in writing.',
    },
  ],
} as const satisfies TopicQuestions;
