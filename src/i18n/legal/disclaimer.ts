import type { LegalPageContent } from './types';

export const disclaimer: Record<'en' | 'nl', LegalPageContent> = {
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
};
