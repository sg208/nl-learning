import type { LegalPageContent } from './types';

export const privacy: Record<'en' | 'nl', LegalPageContent> = {
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
};
