import type { LegalPageContent } from './types';

export const about: Record<'en' | 'nl', LegalPageContent> = {
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
};
