import type { LegalPageContent } from './types';

export const accessibility: Record<'en' | 'nl', LegalPageContent> = {
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
};
