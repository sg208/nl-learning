import type { TopicQuestions } from './types';

export const wonenQuestions = {
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
      options: ['Particuliere verhuurders', 'Woningcorporaties', 'De gemeente direct', 'Makelaars'],
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
      explanation: 'Het energielabel geeft de energie-efficiëntie aan; A is zuinig, G is onzuinig.',
      explanationEn: 'The energy label shows energy efficiency; A is efficient, G is inefficient.',
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
} as const satisfies TopicQuestions;
