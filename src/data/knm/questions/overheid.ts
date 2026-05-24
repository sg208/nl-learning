import type { TopicQuestions } from './types';

export const overheidQuestions = {
  '1': [
    {
      variants: [
        'U verhuist naar een nieuwe gemeente. Binnen hoeveel dagen moet u zich inschrijven?',
        'Na verhuizing — wat is de termijn om in te schrijven?',
        'Hoe snel moet u zich melden bij de nieuwe gemeente?',
      ],
      options: ['Binnen 5 dagen', 'Binnen 2 weken', 'Binnen 1 maand', 'Binnen 3 maanden'],
      answer: 0,
      explanation: 'U moet zich binnen 5 dagen na verhuizing inschrijven bij de nieuwe gemeente.',
      explanationEn: 'You must register with the new municipality within 5 days of moving.',
    },
    {
      variants: [
        'Wat heeft u nodig om in te loggen bij de Belastingdienst, DUO of UWV?',
        'Welke digitale identiteit gebruikt u voor overheidsdiensten online?',
        'Hoe identificeert u zichzelf online bij de overheid?',
      ],
      options: ['BSN', 'DigiD', 'Paspoort', 'Bankpas'],
      answer: 1,
      explanation: 'DigiD is uw persoonlijke inlogcode voor overheidswebsites.',
      explanationEn: 'DigiD is your personal login code for government websites.',
    },
    {
      variants: [
        'Welke instantie regelt de AOW en de kinderbijslag?',
        'Wie betaalt staatspensioen en kindergeld uit?',
        'Welke organisatie keert kinderbijslag uit?',
      ],
      options: ['UWV', 'Belastingdienst', 'SVB (Sociale Verzekeringsbank)', 'Gemeente'],
      answer: 2,
      explanation: 'SVB voert AOW, kinderbijslag, ANW en andere sociale verzekeringen uit.',
      explanationEn:
        'SVB administers the AOW state pension, child benefit (kinderbijslag), ANW survivor benefit and other social insurance schemes.',
    },
    {
      variants: [
        'U krijgt een onbegrijpelijke brief en heeft weinig geld voor een advocaat. Wat doet u?',
        'Juridisch probleem maar geen budget — waar gratis advies?',
        'Waar krijgt u gratis juridische hulp bij laag inkomen?',
      ],
      options: [
        'U schakelt direct een advocaat in',
        'U gaat naar het Juridisch Loket',
        'U belt 112',
        'U gaat naar de rechter',
      ],
      answer: 1,
      explanation: 'Het Juridisch Loket geeft gratis eerste juridische hulp bij laag inkomen.',
      explanationEn:
        'The Legal Aid Desk provides free initial legal assistance for people with a low income.',
    },
    {
      variants: [
        'Wat krijgt u toegekend bij de gemeente direct na inschrijving?',
        'Welk uniek nummer ontvangt u bij eerste inschrijving in Nederland?',
        'Welk persoonsnummer is nodig voor werk, zorg en belasting?',
      ],
      options: ['DigiD', 'BSN (Burgerservicenummer)', 'Verblijfsvergunning', 'Identiteitskaart'],
      answer: 1,
      explanation: 'Het BSN is uw uniek persoonsnummer. U krijgt het bij inschrijving in de BRP.',
      explanationEn:
        'The BSN (citizen service number) is your unique personal number. You receive it when registering in the population register (BRP).',
    },
  ],
  '2': [
    {
      variants: [
        'U wilt een nieuw paspoort aanvragen. Waar gaat u heen?',
        'Welke instantie geeft paspoorten uit?',
        'Voor een nieuw reisdocument — waar moet u zijn?',
      ],
      options: ['Belastingdienst', 'Gemeente', 'UWV', 'Politie'],
      answer: 1,
      explanation: 'De gemeente geeft paspoorten, identiteitskaarten en rijbewijzen uit.',
      explanationEn: 'The municipality issues passports, identity cards and driving licences.',
    },
    {
      variants: [
        'Wie regelt de Wet maatschappelijke ondersteuning (WMO) — zoals huishoudelijke hulp?',
        'WMO-voorzieningen (zoals een scootmobiel) — welke instantie?',
        'Welke organisatie regelt hulp bij dagelijkse handelingen voor ouderen?',
      ],
      options: ['UWV', 'Gemeente', 'Belastingdienst', 'SVB'],
      answer: 1,
      explanation:
        'De gemeente voert de WMO uit — huishoudelijke hulp, vervoersvoorzieningen, dagbesteding.',
      explanationEn:
        'The municipality implements the Social Support Act (WMO) — household help, transport facilities, day activities.',
    },
    {
      variants: [
        'Hoe vraagt u huur-, zorg- of kinderopvangtoeslag aan?',
        'Welke instantie keert toeslagen uit?',
        "Voor alle 'toeslagen' moet u zijn bij…",
      ],
      options: ['UWV', 'Belastingdienst (Toeslagen)', 'Gemeente', 'SVB'],
      answer: 1,
      explanation:
        'Alle toeslagen — huur, zorg, kinderopvang, kindgebondenbudget — lopen via de Belastingdienst.',
      explanationEn:
        'All benefits — rent, healthcare, childcare, child-related budget — are processed through the Tax Authority.',
    },
    {
      variants: [
        'Wat is de BRP?',
        "Waar staat 'BRP' voor?",
        'Wat is het centrale persoonsregister van de overheid?',
      ],
      options: [
        'Basisregistratie Personen (gemeentelijke administratie)',
        'Belastingdienst Registratie Plichtigen',
        'Burgerlijk Recht Programma',
        'Beroep Registreren Procedure',
      ],
      answer: 0,
      explanation:
        'De BRP (Basisregistratie Personen) is de officiële persoonsadministratie die de gemeente bijhoudt.',
      explanationEn:
        'The BRP (Personal Records Database) is the official population register maintained by the municipality.',
    },
    {
      variants: [
        'U bent het oneens met een besluit van de gemeente. Wat is uw eerste stap?',
        'Beslissing van de gemeente waar u tegen bent — eerste actie?',
        'Bezwaar maken tegen een gemeentelijke beslissing — hoe?',
      ],
      options: [
        'Direct naar de rechter',
        'Schriftelijk bezwaar indienen bij de gemeente',
        'Naar het UWV',
        'Naar de Belastingdienst',
      ],
      answer: 1,
      explanation:
        'U dient eerst schriftelijk bezwaar in bij de gemeente. Pas daarna kunt u naar de rechter.',
      explanationEn:
        'You must first submit a written objection to the municipality. Only after that can you go to court.',
    },
  ],
  '3': [
    {
      variants: [
        'Hoe vraagt u DigiD aan?',
        'Waar registreert u zich voor een DigiD-code?',
        'Hoe krijg je DigiD?',
      ],
      options: [
        'Bij de huisarts',
        'Online via DigiD.nl, met activatie per post',
        'Bij de bank',
        'Bij de Kamer van Koophandel',
      ],
      answer: 1,
      explanation:
        'DigiD vraagt u online aan via DigiD.nl. De activatiecode komt per post binnen enkele dagen.',
      explanationEn:
        'You apply for DigiD online at DigiD.nl. The activation code arrives by post within a few days.',
    },
    {
      variants: [
        'U bent niet-Nederlander en wilt graag stemmen bij gemeenteraadsverkiezingen. Mag dat?',
        'Mogen niet-EU-burgers stemmen bij lokale verkiezingen?',
        'Niet-Nederlandse inwoners en stemrecht bij gemeenteraad — wat zijn de regels?',
      ],
      options: [
        'Nee, nooit',
        'Ja, mits u minimaal 5 jaar legaal in Nederland woont',
        'Ja, direct vanaf aankomst',
        'Alleen met DigiD',
      ],
      answer: 1,
      explanation:
        'Niet-Nederlanders mogen stemmen bij gemeenteraadsverkiezingen na 5 jaar legaal verblijf (EU-burgers eerder).',
      explanationEn:
        'Non-Dutch residents may vote in municipal elections after 5 years of legal residence (EU citizens sooner).',
    },
    {
      variants: [
        'Wie kan u helpen als u problemen heeft met een toeslag van de Belastingdienst?',
        'Toeslagprobleem en u komt er niet uit — waar terecht?',
        'Hulp bij ingewikkelde Belastingdienstkwesties: wie kan helpen?',
      ],
      options: ['Sociaal raadsman / Juridisch Loket', 'UWV', 'Gemeentepolitie', 'DUO'],
      answer: 0,
      explanation:
        'Een sociaal raadsman of het Juridisch Loket helpt gratis bij toeslag- en uitkeringsproblemen.',
      explanationEn:
        'A social adviser or the Legal Aid Desk provides free help with benefit and allowance problems.',
    },
    {
      variants: [
        'Welke instantie regelt het inburgeringsexamen?',
        'Bij wie meldt u zich aan voor het inburgeringsexamen?',
        'Wie organiseert KNM en de taalexamens?',
      ],
      options: ['UWV', 'DUO', 'Gemeente', 'Belastingdienst'],
      answer: 1,
      explanation:
        'DUO (Dienst Uitvoering Onderwijs) regelt het inburgeringsexamen, inclusief KNM.',
      explanationEn:
        'DUO (Education Executive Agency) organises the civic integration exam, including KNM.',
    },
    {
      variants: [
        'Wat doet de burgemeester in een gemeente?',
        'Welke rol vervult de burgemeester?',
        'Wat is de functie van de burgemeester?',
      ],
      options: [
        'Hoofd politie en openbare orde + voorzitter gemeenteraad',
        'Innen van belastingen',
        'Uitkering uitbetalen',
        'Verlenen van paspoorten ondertekenen',
      ],
      answer: 0,
      explanation:
        'De burgemeester is verantwoordelijk voor de openbare orde en zit de gemeenteraad voor.',
      explanationEn: 'The mayor is responsible for public order and chairs the municipal council.',
    },
  ],
} as const satisfies TopicQuestions;
