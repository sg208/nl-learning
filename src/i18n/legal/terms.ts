import type { LegalPageContent } from './types';

export const terms: Record<'en' | 'nl', LegalPageContent> = {
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
};
