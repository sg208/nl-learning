import type { Locale } from '~/lib/i18n';

type PageBlock = { heading?: string; paragraphs: string[] };

export type LegalPageContent = {
  title: string;
  eyebrow: string;
  intro: string;
  blocks: PageBlock[];
};

export const legalPages: Record<
  'about' | 'accessibility' | 'privacy' | 'terms' | 'disclaimer',
  Record<Locale, LegalPageContent>
> = {
  about: {
    en: {
      title: 'A clear path into Dutch society.',
      eyebrow: 'About',
      intro:
        'NL Learning helps newcomers prepare for KNM and civic integration with readable study material and practice exams.',
      blocks: [
        {
          heading: 'Who this is for',
          paragraphs: [
            'If you live in the Netherlands and are preparing for integration, KNM can feel overwhelming — especially when Dutch is not your first language. This site offers structured notes, a who-does-what reference, and mock exams with explanations in English or Dutch.',
          ],
        },
        {
          heading: 'What this is not',
          paragraphs: [
            'NL Learning is not an official DUO or government product. It does not replace inburgeren.nl, language courses, or professional guidance. Use it as extra practice alongside official resources.',
          ],
        },
        {
          heading: 'Our approach',
          paragraphs: [
            'We prioritise accessibility: large text, strong contrast, keyboard-friendly controls, offline support, and plain language. The goal is study material you can actually use on a phone during a commute.',
          ],
        },
      ],
    },
    nl: {
      title: 'Een heldere weg de Nederlandse samenleving in.',
      eyebrow: 'Over ons',
      intro:
        'NL Learning helpt nieuwkomers zich voor te bereiden op KNM en inburgering met leesbaar studiemateriaal en oefenexamens.',
      blocks: [
        {
          heading: 'Voor wie',
          paragraphs: [
            'Als je in Nederland woont en je voorbereidt op inburgering, kan KNM overweldigend zijn — zeker als Nederlands niet je eerste taal is. Deze site biedt gestructureerde notities, een wie-doet-wat-overzicht en oefenexamens met uitleg in het Engels of Nederlands.',
          ],
        },
        {
          heading: 'Wat het niet is',
          paragraphs: [
            'NL Learning is geen officieel DUO- of overheidsproduct. Het vervangt inburgeren.nl, taalcursussen of professionele begeleiding niet. Gebruik het als extra oefening naast officiële bronnen.',
          ],
        },
        {
          heading: 'Onze aanpak',
          paragraphs: [
            'We geven prioriteit aan toegankelijkheid: grote tekst, sterk contrast, bediening met het toetsenbord, offline ondersteuning en duidelijke taal. Het doel is studiemateriaal dat je echt op je telefoon kunt gebruiken.',
          ],
        },
      ],
    },
  },
  accessibility: {
    en: {
      title: 'Built so more people can study comfortably.',
      eyebrow: 'Accessibility',
      intro:
        'We aim for WCAG 2.1 and 2.2 Level AA across layout, contrast, keyboard use, and screen reader support.',
      blocks: [
        {
          heading: 'What we do today',
          paragraphs: [
            'Clear landmarks (header, navigation, main, footer), skip links, visible focus states, semantic headings, and large interactive targets (minimum ~48px where possible).',
            'The KNM app uses semantic buttons, an ARIA tab pattern for section navigation, keyboard-accessible controls, and live regions for exam results where supported.',
          ],
        },
        {
          heading: 'Colour and text',
          paragraphs: [
            'Body text targets at least 4.5:1 contrast on dark backgrounds. Important UI controls target at least 3:1. Base font size starts at 18px for long reading.',
          ],
        },
        {
          heading: 'Still improving',
          paragraphs: [
            'Accessibility is ongoing. If something is hard to use — zoom, screen reader, keyboard, or colour — please tell us what you tried and what blocked you.',
          ],
        },
      ],
    },
    nl: {
      title: 'Gemaakt zodat meer mensen comfortabel kunnen studeren.',
      eyebrow: 'Toegankelijkheid',
      intro:
        'We streven naar WCAG 2.1 en 2.2 niveau AA voor layout, contrast, toetsenbordgebruik en screenreader-ondersteuning.',
      blocks: [
        {
          heading: 'Wat we nu doen',
          paragraphs: [
            'Duidelijke landmarks (header, navigatie, main, footer), skiplinks, zichtbare focus, semantische koppen en grote bedienelementen (minimaal ~48px waar mogelijk).',
            'De KNM-app gebruikt semantische knoppen, een ARIA-tabpatroon voor sectienavigatie, toetsenbordtoegankelijke bediening en live regions voor resultaten waar ondersteund.',
          ],
        },
        {
          heading: 'Kleur en tekst',
          paragraphs: [
            'Bodytekst heeft minimaal 4,5:1 contrast op donkere achtergronden. Belangrijke UI-elementen minimaal 3:1. Basislettergrootte start op 18px.',
          ],
        },
        {
          heading: 'Nog in ontwikkeling',
          paragraphs: [
            'Toegankelijkheid is doorlopend werk. Als iets moeilijk te gebruiken is — zoom, screenreader, toetsenbord of kleur — laat ons weten wat je probeerde en wat blokkeerde.',
          ],
        },
      ],
    },
  },
  privacy: {
    en: {
      title: 'Your privacy on NL Learning.',
      eyebrow: 'Privacy policy',
      intro:
        'NL Learning is a free study site. We keep data collection to a minimum and do not sell personal information.',
      blocks: [
        {
          heading: 'What we store on your device',
          paragraphs: [
            'The KNM practice app may save study progress in session storage on your device so language switching and exam state can continue in the same browser tab. This data stays on your device and is cleared when you close the tab or browser session.',
            'If you install or use the site as a PWA, a service worker may cache pages and assets locally so the site works offline. That cache stays on your device until your browser clears it or the site updates its cache version.',
          ],
        },
        {
          heading: 'What we do not collect',
          paragraphs: [
            'We do not require an account, email address, or payment details to use NL Learning. We do not run third-party advertising or analytics trackers on this site.',
            'We do not ask for sensitive personal data through the study material or practice exams.',
          ],
        },
        {
          heading: 'Hosting and logs',
          paragraphs: [
            'The site is served as static files from our hosting provider. Standard server or CDN logs (such as IP address, browser type, and pages requested) may be processed briefly for security and reliability. We do not use those logs to profile visitors.',
          ],
        },
        {
          heading: 'Your choices',
          paragraphs: [
            'You can clear site data at any time through your browser settings (cookies, storage, and cached files). Unregistering the service worker removes offline cache for this site.',
            'If you are in the EEA, UK, or California, you may have additional rights to access, delete, or object to processing of personal data. Contact us through the About page if you have a privacy request.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update this policy when the site changes. The effective date is the date shown on this page when published.',
          ],
        },
      ],
    },
    nl: {
      title: 'Jouw privacy op NL Learning.',
      eyebrow: 'Privacybeleid',
      intro:
        'NL Learning is een gratis studiesite. We verzamelen zo min mogelijk gegevens en verkopen geen persoonsinformatie.',
      blocks: [
        {
          heading: 'Wat we op je apparaat opslaan',
          paragraphs: [
            'De KNM-oefenapp kan studievoortgang in sessie-opslag op je apparaat bewaren, zodat taalwissel en examenstatus in hetzelfde browsertabblad behouden blijven. Deze gegevens blijven op je apparaat en worden gewist wanneer je het tabblad of de browsersessie sluit.',
            "Als je de site als PWA installeert of gebruikt, kan een service worker pagina's en bestanden lokaal cachen zodat de site offline werkt. Die cache blijft op je apparaat totdat je browser deze wist of de site de cacheversie bijwerkt.",
          ],
        },
        {
          heading: 'Wat we niet verzamelen',
          paragraphs: [
            'Je hebt geen account, e-mailadres of betaalgegevens nodig om NL Learning te gebruiken. We gebruiken geen advertentie- of analytics-trackers van derden op deze site.',
            'We vragen geen gevoelige persoonsgegevens via het studiemateriaal of oefenexamens.',
          ],
        },
        {
          heading: 'Hosting en logbestanden',
          paragraphs: [
            "De site wordt als statische bestanden via onze hostingprovider geleverd. Standaard server- of CDN-logbestanden (zoals IP-adres, browsertype en opgevraagde pagina's) kunnen kort worden verwerkt voor beveiliging en betrouwbaarheid. We gebruiken die logs niet om bezoekers te profileren.",
          ],
        },
        {
          heading: 'Jouw keuzes',
          paragraphs: [
            'Je kunt sitegegevens op elk moment wissen via je browserinstellingen (cookies, opslag en gecachte bestanden). Het uitschrijven van de service worker verwijdert offline cache voor deze site.',
            'Als je in de EER, het VK of Californië woont, heb je mogelijk extra rechten op inzage, verwijdering of bezwaar tegen verwerking van persoonsgegevens. Neem via de Over ons-pagina contact op voor een privacyverzoek.',
          ],
        },
        {
          heading: 'Wijzigingen',
          paragraphs: [
            'We kunnen dit beleid bijwerken wanneer de site verandert. De ingangsdatum is de datum waarop deze pagina is gepubliceerd.',
          ],
        },
      ],
    },
  },
  terms: {
    en: {
      title: 'Fair terms for using NL Learning.',
      eyebrow: 'Terms of use',
      intro:
        'By using this site you agree to these terms. If you disagree, please stop using the site.',
      blocks: [
        {
          heading: 'Educational use',
          paragraphs: [
            'Content is provided for personal study and practice. It is not official exam material and does not guarantee exam results.',
          ],
        },
        {
          heading: 'Intellectual property',
          paragraphs: [
            'Site design, code, and original copy belong to NL Learning unless noted. You may link to pages normally. Do not scrape or republish bulk content without permission.',
          ],
        },
        {
          heading: 'Limitation of liability',
          paragraphs: [
            'To the fullest extent permitted by law, NL Learning is not liable for indirect damages from use of the site or reliance on practice content. The service is free.',
          ],
        },
        {
          heading: 'Related pages',
          paragraphs: [
            'See also our Privacy policy, Disclaimer, and Accessibility statement for how we handle data, content limits, and access support.',
          ],
        },
      ],
    },
    nl: {
      title: 'Eerlijke voorwaarden voor NL Learning.',
      eyebrow: 'Gebruiksvoorwaarden',
      intro:
        'Door deze site te gebruiken ga je akkoord met deze voorwaarden. Als je het niet eens bent, stop dan met gebruik.',
      blocks: [
        {
          heading: 'Educatief gebruik',
          paragraphs: [
            'Inhoud is bedoeld voor persoonlijk studeren en oefenen. Het is geen officieel examenmateriaal en garandeert geen examenuitslag.',
          ],
        },
        {
          heading: 'Intellectueel eigendom',
          paragraphs: [
            'Site-ontwerp, code en originele teksten behoren toe aan NL Learning tenzij anders vermeld. Linken mag normaal. Bulk scrapen of herpubliceren zonder toestemming niet.',
          ],
        },
        {
          heading: 'Aansprakelijkheid',
          paragraphs: [
            'Voor zover wettelijk toegestaan is NL Learning niet aansprakelijk voor indirecte schade door gebruik van de site of vertrouwen op oefeninhoud. De dienst is gratis.',
          ],
        },
        {
          heading: "Gerelateerde pagina's",
          paragraphs: [
            'Zie ook ons Privacybeleid, Disclaimer en Toegankelijkheidsverklaring voor gegevensverwerking, grenzen van de inhoud en ondersteuning.',
          ],
        },
      ],
    },
  },
  disclaimer: {
    en: {
      title: 'Practice material — not official advice.',
      eyebrow: 'Disclaimer',
      intro: 'NL Learning is independent study support for civic integration preparation.',
      blocks: [
        {
          heading: 'Not official',
          paragraphs: [
            'This site is not affiliated with DUO, the Dutch government, or exam providers. Always check official sources such as inburgeren.nl for current rules, fees, and exam formats.',
          ],
        },
        {
          heading: 'No guarantees',
          paragraphs: [
            'Mock exam scores do not predict real exam results. Laws, amounts (such as eigen risico), and procedures change. Verify important facts with official sources.',
          ],
        },
        {
          heading: 'External links',
          paragraphs: ['When we link elsewhere, we do not control those sites or their policies.'],
        },
      ],
    },
    nl: {
      title: 'Oefenmateriaal — geen officieel advies.',
      eyebrow: 'Disclaimer',
      intro: 'NL Learning is onafhankelijke studie-ondersteuning voor inburgering.',
      blocks: [
        {
          heading: 'Niet officieel',
          paragraphs: [
            'Deze site is niet verbonden aan DUO, de overheid of examenaanbieders. Controleer altijd officiële bronnen zoals inburgeren.nl voor actuele regels, kosten en examenvormen.',
          ],
        },
        {
          heading: 'Geen garanties',
          paragraphs: [
            'Scores op oefenexamens voorspellen geen echte uitslag. Wetten, bedragen (zoals eigen risico) en procedures wijzigen. Controleer belangrijke feiten bij officiële bronnen.',
          ],
        },
        {
          heading: 'Externe links',
          paragraphs: [
            'Bij links naar andere sites hebben wij geen controle over die sites of hun beleid.',
          ],
        },
      ],
    },
  },
};
