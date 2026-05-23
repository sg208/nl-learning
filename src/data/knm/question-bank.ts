export const QUESTION_BANK = {
  gezondheid: {
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
        explanationEn:
          'You must actively register with a GP practice in your new residential area.',
      },
    ],
  },
  werk: {
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
        explanation:
          'De Kamer van Koophandel (KvK) registreert alle ondernemingen, ZZP inbegrepen.',
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
        explanation:
          'Bijstand is de laatste vangnetregeling en loopt via de gemeente, niet via UWV.',
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
        explanation:
          'De loonstrook toont per periode het bruto- en nettoloon plus alle inhoudingen.',
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
        explanation:
          'De werkgever moet bij ziekte tot 2 jaar minimaal 70% van het loon doorbetalen.',
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
        explanationEn:
          'The Tax Authority (Belastingdienst) handles all taxes, including income tax.',
      },
      {
        variants: [
          'Vanaf welke leeftijd geldt het volwassenen-minimumloon in Nederland?',
          "Op welke leeftijd krijgt u het 'volledige' minimumloon?",
          'Wettelijk minimumloon volwassen-leeftijd?',
        ],
        options: ['18 jaar', '21 jaar', '23 jaar', '25 jaar'],
        answer: 1,
        explanation:
          'Vanaf 21 jaar geldt het volwassen-minimumloon. Daarvoor het jeugd-minimumloon.',
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
        explanation:
          'Tijdelijke werknemers hebben ook recht op WW, mits ze aan de wekeneis voldoen.',
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
        explanationEn:
          'The employer must put the basic terms of the employment contract in writing.',
      },
    ],
  },
  overheid: {
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
        explanationEn:
          'The mayor is responsible for public order and chairs the municipal council.',
      },
    ],
  },
  wonen: {
    '1': [
      {
        variants: [
          'U huurt een sociale huurwoning en heeft laag inkomen. Waar vraagt u huurtoeslag aan?',
          'Welke instantie regelt de huurtoeslag?',
          'Wie keert de toeslag voor de huur uit?',
        ],
        options: ['Gemeente', 'Woningcorporatie', 'Belastingdienst (Toeslagen)', 'UWV'],
        answer: 2,
        explanation:
          'Alle toeslagen (huur, zorg, kinderopvang) worden door de Belastingdienst geregeld.',
        explanationEn:
          'All allowances (rent, healthcare, childcare) are administered by the Tax Authority.',
      },
      {
        variants: [
          'Wie verhuurt sociale huurwoningen in Nederland?',
          'Welke organisaties bieden goedkopere huurwoningen aan?',
          'Wie regelt huurwoningen onder de huurprijsgrens?',
        ],
        options: [
          'Particuliere verhuurders',
          'Woningcorporaties',
          'De gemeente direct',
          'Makelaars',
        ],
        answer: 1,
        explanation:
          'Woningcorporaties verhuren sociale huurwoningen. Wachttijden kunnen erg lang zijn.',
        explanationEn:
          'Housing associations (woningcorporaties) rent out social housing. Waiting times can be very long.',
      },
      {
        variants: [
          'Conflict met verhuurder over achterstallig onderhoud. Wat doet u eerst?',
          'Verhuurder weigert reparaties. Welke stap is logisch?',
          'Onderhoudsproblemen — welke instantie helpt eerst?',
        ],
        options: [
          'De woning verlaten',
          'Schriftelijk klagen bij verhuurder en evt. naar Huurcommissie',
          'Direct naar de rechter',
          'Belastingdienst inschakelen',
        ],
        answer: 1,
        explanation:
          'Eerst schriftelijk klagen bij de verhuurder; daarna eventueel naar de Huurcommissie.',
        explanationEn:
          'First complain in writing to the landlord; if unresolved, you can go to the Rent Tribunal (Huurcommissie).',
      },
      {
        variants: [
          'Wie regelt meestal de gas-, water- en elektriciteitscontracten in een huurhuis?',
          'Welke partij sluit de energiecontracten af in gehuurde woning?',
          'Wie is verantwoordelijk voor utiliteitscontracten als huurder?',
        ],
        options: [
          'De gemeente',
          'De huurder zelf, tenzij in servicekosten',
          'Altijd de verhuurder',
          'De Belastingdienst',
        ],
        answer: 1,
        explanation:
          'Meestal sluit de huurder zelf de contracten af, tenzij nutsvoorzieningen in servicekosten zitten.',
        explanationEn:
          'Usually the tenant arranges their own utility contracts, unless utilities are included in service charges.',
      },
      {
        variants: [
          'Welke borg vraagt een verhuurder gangbaar bij aanvang?',
          'Hoeveel borg mag een verhuurder maximaal vragen?',
          'Welk bedrag is redelijk als borg bij een huurcontract?',
        ],
        options: [
          'Eén tot maximaal twee maanden huur',
          'Half jaar huur',
          'Geen borg toegestaan',
          'Drie maanden huur of meer',
        ],
        answer: 0,
        explanation: 'Gebruikelijk en redelijk is één tot twee maanden kale huur als borg.',
        explanationEn:
          "A deposit of one to two months' bare rent is customary and considered reasonable.",
      },
    ],
    '2': [
      {
        variants: [
          "Wat is een 'kale huurprijs'?",
          "Waar staat de term 'kale huur' voor?",
          "Wat houdt 'kale huur' precies in?",
        ],
        options: [
          'Huur inclusief alle servicekosten',
          'Huur zonder bijkomende kosten (servicekosten/gas/water/elektra)',
          'Huurprijs voor onmeubilelde woningen',
          'Eenmalige borg',
        ],
        answer: 1,
        explanation:
          "De 'kale huur' is alleen de huurprijs zonder servicekosten en zonder gas/water/elektra.",
        explanationEn:
          "'Bare rent' (kale huur) is the rent price only, excluding service charges and gas/water/electricity.",
      },
      {
        variants: [
          'U wilt een huis kopen. Wat heeft u bijna altijd nodig?',
          'Voor een woningaankoop in Nederland — wat is praktisch noodzakelijk?',
          'Welke financiering gebruiken bijna alle huizenkopers?',
        ],
        options: [
          'Een hypotheek bij een bank',
          'Een huurcontract',
          'Een DigiD-code alleen',
          'Een notariële volmacht zonder bank',
        ],
        answer: 0,
        explanation:
          'Vrijwel iedereen koopt een huis met een hypotheek; banken eisen eigen geld en inkomenstoets.',
        explanationEn:
          'Almost everyone buys a house with a mortgage; banks require a down payment and income assessment.',
      },
      {
        variants: [
          'Wat doet een VvE (Vereniging van Eigenaars)?',
          'Welke organisatie behartigt belangen van appartementseigenaars?',
          'Voor wie geldt een verplichte VvE?',
        ],
        options: [
          'Voor huurders, regelt huurprijs',
          'Voor appartementseigenaren; onderhoud, opstalverzekering, gezamenlijke ruimtes',
          'Voor verhuurders alleen',
          'Voor de gemeente',
        ],
        answer: 1,
        explanation:
          'De VvE is verplicht voor appartementseigenaars en regelt gezamenlijk onderhoud en verzekering.',
        explanationEn:
          "The VvE (owners' association) is mandatory for apartment owners and manages shared maintenance and insurance.",
      },
      {
        variants: [
          "Waarschijnlijk hoort u dit op zoek naar sociale huur — wat betekent 'wachttijd'?",
          "Wat is 'inschrijfduur' bij woningcorporaties?",
          'Hoe komt u sneller in aanmerking voor sociale huur?',
        ],
        options: [
          'U betaalt extra',
          'U bouwt jaren inschrijfduur op vanaf 18 jaar; vroeg inschrijven is belangrijk',
          'U schrijft zich pas in als u nodig heeft',
          'Werkgever moet u aanmelden',
        ],
        answer: 1,
        explanation:
          'Inschrijfduur (sinds 18-jarige leeftijd) bepaalt vaak wie als eerste een woning krijgt aangeboden.',
        explanationEn:
          'Registration duration (since age 18) often determines who is offered a home first.',
      },
      {
        variants: [
          "Wat is een 'energielabel' van een woning?",
          'Welke aanduiding toont de energie-efficiëntie van een huis?',
          "Een 'A-label' woning betekent…?",
        ],
        options: [
          'Hoe oud het huis is',
          'Hoe energiezuinig de woning is (A = zuinig, G = onzuinig)',
          'Hoe duur de woning is',
          'Wie de verhuurder is',
        ],
        answer: 1,
        explanation:
          'Het energielabel geeft de energie-efficiëntie aan; A is zuinig, G is onzuinig.',
        explanationEn:
          'The energy label shows energy efficiency; A is efficient, G is inefficient.',
      },
    ],
    '3': [
      {
        variants: [
          'Verhuurder verhoogt opeens de huur met 30%. Mag dat?',
          'Wettelijke regels rond huurverhoging — wat geldt?',
          'Onverwachte huurverhoging — wat zijn de regels?',
        ],
        options: [
          'Ja, een verhuurder mag elke verhoging vragen',
          'Nee, huurverhoging is wettelijk begrensd en gebonden aan regels',
          'Alleen met DigiD-akkoord',
          'Alleen met toestemming van de Belastingdienst',
        ],
        answer: 1,
        explanation:
          'Huurverhoging is wettelijk gereguleerd, met jaarlijkse maxima. De Huurcommissie kan toetsen.',
        explanationEn:
          'Rent increases are regulated by law, with annual maximums. The Rent Tribunal can assess disputes.',
      },
      {
        variants: [
          'U koopt een huis. Wie maakt de akte officieel?',
          'Welke functionaris ondertekent en registreert de overdracht?',
          'Bij huisaankoop — naar welke beroepsbeoefenaar gaat u?',
        ],
        options: ['Een advocaat', 'Een notaris', 'De gemeente', 'De Belastingdienst'],
        answer: 1,
        explanation:
          'De notaris stelt de leverings- en hypotheekakte op en zorgt voor inschrijving in het Kadaster.',
        explanationEn:
          'The notary draws up the deed of transfer and mortgage deed and registers them in the Land Registry (Kadaster).',
      },
      {
        variants: [
          'U wilt uw huurwoning onderverhuren. Mag dat zomaar?',
          'Onderhuur regelen — wat zijn de regels?',
          'Mag u zonder overleg een kamer uit uw huur onderverhuren?',
        ],
        options: [
          'Ja, altijd',
          'Alleen met schriftelijke toestemming van de verhuurder',
          'Alleen met toestemming van de gemeente',
          'Alleen via een makelaar',
        ],
        answer: 1,
        explanation:
          'Onderverhuur mag bijna nooit zonder schriftelijke toestemming van de verhuurder.',
        explanationEn:
          "Subletting is almost never allowed without the landlord's written permission.",
      },
      {
        variants: [
          "Wat is een 'huisbezoek' door de gemeente meestal voor?",
          'Wanneer komt een ambtenaar bij u thuis kijken?',
          'Reden voor gemeentelijk huisbezoek?',
        ],
        options: [
          'Controle van bijstand of inschrijfsituatie',
          'Verkoop verzekeringen',
          'Belastingaangifte invullen',
          'Verstrekken van DigiD',
        ],
        answer: 0,
        explanation:
          'De gemeente kan een huisbezoek doen om bijv. een bijstandsaanvraag of inschrijving te controleren.',
        explanationEn:
          'The municipality may conduct a home visit to verify e.g. a social assistance application or registration.',
      },
      {
        variants: [
          'Wie betaalt voor klein onderhoud (bv. lampen vervangen) in een huurhuis?',
          "Wie is verantwoordelijk voor 'klein onderhoud' bij huur?",
          'Hoe is klein onderhoud verdeeld tussen huurder en verhuurder?',
        ],
        options: [
          'Altijd verhuurder',
          'Klein onderhoud is voor de huurder; groot onderhoud voor de verhuurder',
          'Altijd de gemeente',
          'Belastingdienst',
        ],
        answer: 1,
        explanation:
          'Klein onderhoud (lampen, kranenrubbers) is voor de huurder; groot onderhoud (CV, dak) voor de verhuurder.',
        explanationEn:
          "Minor maintenance (light bulbs, tap washers) is the tenant's responsibility; major maintenance (boiler, roof) is the landlord's.",
      },
    ],
  },
  onderwijs: {
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
        explanationEn:
          'Children may start primary school (year 1) the day after their 4th birthday.',
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
  },
  politiek: {
    '1': [
      {
        variants: [
          'Wie heeft de wetgevende macht in Nederland?',
          'Welk orgaan maakt de wetten?',
          'Wie stelt de wetten vast?',
        ],
        options: ['De Koning', 'Het Kabinet', 'Het Parlement (Staten-Generaal)', 'De rechter'],
        answer: 2,
        explanation:
          'De Staten-Generaal (Tweede + Eerste Kamer) maakt samen met de regering wetten.',
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
        explanationEn:
          'The Senate is indirectly elected by the members of the Provincial Councils.',
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
  },
  geschiedenis: {
    '1': [
      {
        variants: [
          'Op welke datum vieren we Dodenherdenking?',
          'Wanneer is Dodenherdenking in Nederland?',
          'Op welke dag herdenken we de slachtoffers van WO2?',
        ],
        options: ['4 mei', '5 mei', '1 mei', '15 augustus'],
        answer: 0,
        explanation: 'Dodenherdenking is 4 mei, met twee minuten stilte om 20:00 uur.',
        explanationEn: 'Remembrance Day is on 4 May, with two minutes of silence at 20:00.',
      },
      {
        variants: [
          'Wat wordt op 5 mei gevierd in Nederland?',
          'Welke nationale dag valt op 5 mei?',
          'Wat is de betekenis van 5 mei?',
        ],
        options: ['Koningsdag', 'Bevrijdingsdag', 'Hemelvaartsdag', 'Sinterklaas'],
        answer: 1,
        explanation: 'Bevrijdingsdag herdenkt het einde van de Duitse bezetting in 1945.',
        explanationEn: 'Liberation Day commemorates the end of the German occupation in 1945.',
      },
      {
        variants: [
          'Wat waren de Deltawerken bedoeld te voorkomen?',
          'Waarom werden de Deltawerken gebouwd?',
          'Wat is de functie van de Deltawerken?',
        ],
        options: [
          'Wegverkeer beter laten doorstromen',
          'Overstromingen vanuit zee tegenhouden',
          'Stroom opwekken',
          'Vissen tegenhouden',
        ],
        answer: 1,
        explanation:
          'Na de Watersnoodramp van 1953 zijn de Deltawerken gebouwd om overstromingen te voorkomen.',
        explanationEn:
          'After the North Sea Flood of 1953 the Delta Works were built to prevent flooding.',
      },
      {
        variants: [
          'Hoe wordt Willem van Oranje genoemd?',
          "Wie staat bekend als 'Vader des Vaderlands'?",
          'Welke historische figuur leidde de opstand tegen Spanje?',
        ],
        options: ['Stadhouder Maurits', 'Willem van Oranje', 'Koning Willem I', 'Johan de Witt'],
        answer: 1,
        explanation:
          'Willem van Oranje (Willem de Zwijger) is de Vader des Vaderlands. Vermoord in Delft in 1584.',
        explanationEn:
          'William of Orange (William the Silent) is the Father of the Fatherland. Assassinated in Delft in 1584.',
      },
      {
        variants: [
          'Hoeveel provincies heeft Nederland?',
          'Uit hoeveel provincies bestaat het land?',
          'Wat is het aantal provincies in Nederland?',
        ],
        options: ['10', '11', '12', '13'],
        answer: 2,
        explanation: 'Nederland heeft 12 provincies, waarvan Flevoland de jongste is (1986).',
        explanationEn: 'The Netherlands has 12 provinces; Flevoland is the youngest (1986).',
      },
    ],
    '2': [
      {
        variants: [
          'Hoe heette de Nederlandse handelsorganisatie in de 17e eeuw?',
          'Welke beroemde compagnie domineerde de zeehandel in de Gouden Eeuw?',
          'Welke organisatie bracht Nederland naar koloniale rijkdom in 1602?',
        ],
        options: ['VOC (Verenigde Oostindische Compagnie)', 'NAVO', 'EU', 'Volkenbond'],
        answer: 0,
        explanation:
          'De VOC, opgericht in 1602, was de eerste multinational en bouwde een handelsimperium.',
        explanationEn:
          "The VOC, founded in 1602, was the world's first multinational and built a trading empire.",
      },
      {
        variants: [
          'Wie was Anne Frank?',
          'Welk Joods meisje hield een wereldberoemd dagboek bij tijdens de oorlog?',
          'Wie schreef het bekendste dagboek over de Duitse bezetting?',
        ],
        options: [
          'Een verzetsstrijdster',
          'Een Joods meisje dat in onderduik een dagboek bijhield in Amsterdam',
          'Een Nederlandse koningin',
          'Een soldaat',
        ],
        answer: 1,
        explanation:
          'Anne Frank schreef tijdens haar onderduik (1942–44) in de Achterhuis in Amsterdam.',
        explanationEn:
          'Anne Frank wrote her diary while in hiding (1942–44) in the Secret Annexe in Amsterdam.',
      },
      {
        variants: [
          'Wat is de Randstad?',
          "Welk gebied wordt 'Randstad' genoemd?",
          'Welke vier grote steden vormen de kern van de Randstad?',
        ],
        options: [
          'Rand van het land',
          'Stedelijk gebied: Amsterdam, Rotterdam, Den Haag, Utrecht',
          'Een toeristisch park',
          'Een militair gebied',
        ],
        answer: 1,
        explanation:
          'De Randstad is de dichtbevolkte stedenring rond Amsterdam, Rotterdam, Den Haag en Utrecht.',
        explanationEn:
          'The Randstad is the densely populated urban ring around Amsterdam, Rotterdam, The Hague and Utrecht.',
      },
      {
        variants: [
          'Welk jaar viel Nederland onder Duitse bezetting?',
          'In welk jaar begon WO2 voor Nederland?',
          'Wanneer viel het Duitse leger Nederland binnen?',
        ],
        options: ['1939', '1940', '1941', '1945'],
        answer: 1,
        explanation:
          'Op 10 mei 1940 viel het Duitse leger Nederland binnen. De bezetting duurde tot 1945.',
        explanationEn:
          'On 10 May 1940 the German army invaded the Netherlands. The occupation lasted until 1945.',
      },
      {
        variants: [
          "Wat was de 'Hongerwinter'?",
          'Wat gebeurde er in de winter 1944–45 in Nederland?',
          'Welke tragedie trof Nederland in de laatste oorlogswinter?',
        ],
        options: [
          'Een natuurramp',
          'Hongersnood in West-Nederland in de laatste oorlogswinter',
          'Een militaire operatie',
          'Een ziekte-uitbraak',
        ],
        answer: 1,
        explanation:
          'In de winter 1944–45 leden duizenden in West-Nederland honger door blokkade en strenge winter.',
        explanationEn:
          'In the winter of 1944–45 tens of thousands in western Netherlands suffered from hunger due to a blockade and harsh winter.',
      },
    ],
    '3': [
      {
        variants: [
          'Wat is de hoofdstad van Nederland?',
          'Welke stad is officieel de hoofdstad?',
          'Welke Nederlandse stad is de hoofdstad?',
        ],
        options: ['Den Haag', 'Rotterdam', 'Amsterdam', 'Utrecht'],
        answer: 2,
        explanation:
          'Amsterdam is de hoofdstad. Den Haag is de regeringszetel waar het parlement zit.',
        explanationEn:
          'Amsterdam is the capital. The Hague is the seat of government where parliament is located.',
      },
      {
        variants: [
          'Welke stad is de regeringszetel?',
          'Waar zetelt de Nederlandse regering?',
          'In welke stad zit de Tweede Kamer?',
        ],
        options: ['Amsterdam', 'Den Haag', 'Rotterdam', 'Utrecht'],
        answer: 1,
        explanation:
          'Den Haag is de regeringszetel. Hier zitten parlement, regering en internationale gerechtshoven.',
        explanationEn:
          'The Hague is the seat of government. Parliament, the government and international courts of justice are located here.',
      },
      {
        variants: [
          "Wat is een 'polder'?",
          'Wat is een polder?',
          'Hoe noemen we land dat op de zee veroverd is?',
        ],
        options: [
          'Een soort kaas',
          'Land dat is drooggelegd en omringd door dijken',
          'Een type boerderij',
          'Een militaire post',
        ],
        answer: 1,
        explanation:
          'Een polder is een drooggelegd gebied beschermd door dijken. Veel van Nederland bestaat uit polders.',
        explanationEn:
          'A polder is a low-lying area reclaimed from water and protected by dikes. Much of the Netherlands consists of polders.',
      },
      {
        variants: [
          'Welke rivier is de grootste in Nederland?',
          'Welke is de belangrijkste rivier die Nederland binnenkomt?',
          'Welke rivier komt vanuit Duitsland binnen?',
        ],
        options: ['Maas', 'Rijn', 'Schelde', 'IJssel'],
        answer: 1,
        explanation:
          'De Rijn is de grootste rivier; vanaf Duitsland splitst hij in meerdere armen.',
        explanationEn:
          'The Rhine is the largest river; from Germany it splits into several branches.',
      },
      {
        variants: [
          'Welke provincie is in 1986 gevormd uit drooggelegd land?',
          'Welke is de jongste provincie van Nederland?',
          'Provincie ontstaan na inpoldering — welke?',
        ],
        options: ['Friesland', 'Flevoland', 'Zeeland', 'Drenthe'],
        answer: 1,
        explanation: 'Flevoland werd in 1986 de 12e provincie, na inpoldering van de Zuiderzee.',
        explanationEn:
          'Flevoland became the 12th province in 1986, after the draining of the Zuiderzee.',
      },
    ],
  },
  cultuur: {
    '1': [
      {
        variants: [
          'Op welke datum valt Koningsdag?',
          'Wanneer wordt Koningsdag gevierd?',
          'Welke datum is Koningsdag?',
        ],
        options: ['30 april', '27 april', '5 mei', '1 mei'],
        answer: 1,
        explanation: 'Koningsdag is op 27 april, de verjaardag van Koning Willem-Alexander.',
        explanationEn: "King's Day is on 27 April, the birthday of King Willem-Alexander.",
      },
      {
        variants: [
          'Wanneer wordt Sinterklaas traditioneel gevierd?',
          'Op welke datum is pakjesavond?',
          'Wanneer krijgen kinderen cadeautjes van Sinterklaas?',
        ],
        options: ['5 december', '6 december', '25 december', '31 december'],
        answer: 0,
        explanation: 'Pakjesavond is op 5 december — de avond vóór de naamdag van Sint-Nicolaas.',
        explanationEn:
          'Present Evening is on 5 December — the evening before the feast day of Saint Nicholas.',
      },
      {
        variants: [
          'Een Nederlandse collega zegt heel direct dat uw idee niet werkt. Hoe interpreteert u dit?',
          'Uw baas geeft openlijke kritiek in vergadering. Wat betekent dit cultureel?',
          'Een Nederlander geeft u rechtstreekse feedback — wat is de norm?',
        ],
        options: [
          'Hij is onbeleefd en wil ruzie',
          'Directheid is normaal en geldt niet als onbeleefd',
          'Hij wil u ontslaan',
          'U moet zich verontschuldigen',
        ],
        answer: 1,
        explanation:
          'Directheid is een Nederlandse waarde. Open feedback is normaal en niet persoonlijk bedoeld.',
        explanationEn:
          'Directness is a Dutch value. Open feedback is normal and not meant personally.',
      },
      {
        variants: [
          'U wordt voor het eerst uitgenodigd bij Nederlandse buren. Wat is gangbaar om mee te nemen?',
          'Wat is een passend cadeautje als u op visite gaat?',
          'Op visite bij Nederlandse vrienden — wat neemt u mee?',
        ],
        options: [
          'Niets, dat is gepast',
          'Bloemen, wijn of een klein cadeautje',
          'Een groot duur cadeau',
          'Geld in een envelop',
        ],
        answer: 1,
        explanation: 'Een klein attentie — bloemen, wijn of bonbons — is gebruikelijk.',
        explanationEn: 'A small token — flowers, wine or chocolates — is customary when visiting.',
      },
      {
        variants: [
          'U ervaart discriminatie op werk vanwege afkomst. Bij welke organisatie kunt u terecht?',
          'U wilt een discriminatieklacht indienen — welke instantie helpt?',
          'Waar meldt u oneerlijke behandeling op grond van afkomst?',
        ],
        options: [
          'Bij de huisarts',
          'Bij het Anti Discriminatie Bureau (ADB)',
          'Bij de Belastingdienst',
          'Bij DUO',
        ],
        answer: 1,
        explanation:
          'Het Anti Discriminatie Bureau behandelt klachten over discriminatie en geeft gratis advies.',
        explanationEn:
          'The Anti-Discrimination Bureau handles complaints about discrimination and provides free advice.',
      },
    ],
    '2': [
      {
        variants: [
          "Wat is 'gedogen' in Nederlandse cultuur?",
          "Wat betekent het begrip 'gedoogbeleid'?",
          'Hoe verklaart men het beleid t.a.v. softdrugs in coffeeshops?',
        ],
        options: [
          'Verbieden',
          'Iets formeel verbieden maar in praktijk niet vervolgen',
          'Strenger handhaven',
          'Privatiseren',
        ],
        answer: 1,
        explanation:
          "Bij 'gedogen' is iets juridisch verboden, maar onder voorwaarden tolereert de overheid het.",
        explanationEn:
          "With 'gedogen' (tolerance policy) something is formally prohibited but the authorities tolerate it under conditions.",
      },
      {
        variants: [
          'Hoe begroet u een collega zakelijk meestal?',
          'Welke begroeting is gebruikelijk op het werk?',
          'Formele begroeting in zakelijke context?',
        ],
        options: ['Drie kussen', 'Een handdruk', 'Een knuffel', 'Een buiging'],
        answer: 1,
        explanation: 'Zakelijk is een handdruk normaal. Drie kussen onder vrienden/familie.',
        explanationEn:
          'A handshake is normal in business. Three kisses are customary among friends/family.',
      },
      {
        variants: [
          'Waarom is vrijwilligerswerk belangrijk in Nederlandse cultuur?',
          'Welke rol speelt vrijwilligerswerk in de samenleving?',
          'Wat is het maatschappelijk belang van vrijwilligers?',
        ],
        options: [
          'Het wordt verplicht gesteld',
          'Veel verenigingen, sportclubs en organisaties draaien op vrijwilligers',
          'Alleen voor inburgering',
          'Alleen voor ouderen',
        ],
        answer: 1,
        explanation:
          'Vrijwilligerswerk wordt sterk gewaardeerd; veel maatschappelijke organisaties zijn ervan afhankelijk.',
        explanationEn:
          'Voluntary work is highly valued; many social organisations depend on volunteers.',
      },
      {
        variants: [
          'Welke kleur is geassocieerd met Koningsdag?',
          'Met welke kleur kleedt iedereen zich op Koningsdag?',
          'Welke kleur ziet u overal op 27 april?',
        ],
        options: ['Rood-wit-blauw', 'Oranje', 'Groen', 'Geel'],
        answer: 1,
        explanation:
          'Oranje verwijst naar het Huis van Oranje-Nassau, de Nederlandse koningsfamilie.',
        explanationEn: 'Orange refers to the House of Orange-Nassau, the Dutch royal family.',
      },
      {
        variants: [
          "Wat is een 'verjaardagskalender' typisch Nederlands voor?",
          "Waar hangt een 'verjaardagskalender' in Nederlandse huizen vaak?",
          'Welke functie heeft de verjaardagskalender in huis?',
        ],
        options: [
          'Een agenda voor werk',
          'Een kalender met verjaardagen, vaak op het toilet',
          'Een religieus voorwerp',
          'Een sportplanning',
        ],
        answer: 1,
        explanation:
          'Veel Nederlanders hebben een verjaardagskalender, vaak op het toilet — een culturele rariteit.',
        explanationEn:
          'Many Dutch people keep a birthday calendar, often in the toilet — a cultural curiosity.',
      },
    ],
    '3': [
      {
        variants: [
          "Wat is het concept van 'gezelligheid'?",
          "Wat betekent 'gezellig' in Nederlandse cultuur?",
          "Hoe omschrijven Nederlanders 'gezelligheid'?",
        ],
        options: [
          'Iets duurs',
          'Een prettige, ontspannen sfeer met mensen',
          'Een militair begrip',
          'Een bedrijfsterm',
        ],
        answer: 1,
        explanation:
          'Gezelligheid is een typisch Nederlands begrip voor warme, prettige sfeer en sociale verbinding.',
        explanationEn:
          'Gezelligheid is a typically Dutch concept for a warm, pleasant atmosphere and social togetherness.',
      },
      {
        variants: [
          'Welke feestdag valt op 25 en 26 december?',
          'Hoe heten de twee kerstdagen?',
          "Welke dagen vormen samen 'Kerst' in Nederland?",
        ],
        options: ['Eerste en tweede Kerstdag', 'Sinterklaas', 'Oudejaarsavond', 'Hemelvaartsdag'],
        answer: 0,
        explanation:
          '25 december = Eerste Kerstdag, 26 december = Tweede Kerstdag. Beide zijn officiële feestdagen.',
        explanationEn:
          '25 December = First Christmas Day, 26 December = Second Christmas Day. Both are official public holidays.',
      },
      {
        variants: [
          'Wat doet men typisch op Oudejaarsavond?',
          'Hoe vieren Nederlanders 31 december?',
          'Welke tradities horen bij oud en nieuw?',
        ],
        options: [
          'Niets bijzonders',
          'Oliebollen eten, vuurwerk afsteken, met familie/vrienden afwachten tot middernacht',
          'Religieus vasten',
          'Op vakantie gaan verplicht',
        ],
        answer: 1,
        explanation: 'Oliebollen, vuurwerk, en samen aftellen zijn typisch Oudejaars-tradities.',
        explanationEn:
          "Oliebollen (deep-fried dough balls), fireworks and counting down together are typical New Year's Eve traditions.",
      },
      {
        variants: [
          "Wat is 'inburgeren'?",
          "Wat betekent het werkwoord 'inburgeren'?",
          'Wat is het doel van inburgering?',
        ],
        options: [
          'Belastingen betalen',
          'Leren over Nederland en de taal om zelfstandig deel te nemen aan de samenleving',
          'Een paspoort krijgen',
          'Een baan vinden',
        ],
        answer: 1,
        explanation:
          'Inburgering = leren over Nederlandse taal en samenleving om zelfstandig mee te kunnen doen.',
        explanationEn:
          'Civic integration = learning about the Dutch language and society to participate independently.',
      },
      {
        variants: [
          'Wat is de officiële naam van het land?',
          'Welke staatsvorm en naam heeft Nederland?',
          'Hoe heet Nederland officieel als staat?',
        ],
        options: [
          'Verenigd Koninkrijk der Nederlanden',
          'Koninkrijk der Nederlanden',
          'Republiek Nederland',
          'Republiek der Verenigde Nederlanden',
        ],
        answer: 1,
        explanation:
          'Officieel: Koninkrijk der Nederlanden (incl. Aruba, Curaçao, Sint Maarten + Caribisch Nederland).',
        explanationEn:
          'Official name: Kingdom of the Netherlands (incl. Aruba, Curaçao, Sint Maarten + Caribbean Netherlands).',
      },
    ],
  },
} as const;
