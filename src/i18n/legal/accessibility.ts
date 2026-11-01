import { siteConfig } from '~/config/site';
import type { LegalPageContent } from './types';

export const accessibility: Record<'en' | 'nl', LegalPageContent> = {
  en: {
    title: 'Built so more people can study comfortably.',
    eyebrow: 'Accessibility',
    intro:
      'We aim to meet WCAG 2.2 Level AA on every page, in English and in Dutch. This statement was last updated on 1 November 2026.',
    blocks: [
      {
        heading: 'What is in place',
        paragraphs: [
          'Every page has a skip link, header, navigation, main and footer landmarks, one main heading and a logical heading order. Keyboard focus is always visible. Buttons and other controls are at least 48 pixels high where the layout allows it.',
          'Text starts at 18 pixels. The site follows your system light or dark setting and turns off animation when you ask your device to reduce motion.',
          'The KNM practice app uses real buttons, an ARIA tab pattern you can move through with the arrow keys, and live regions that tell screen reader users when time is up and what they scored. When you open a page, its title is announced as well.',
        ],
      },
      {
        heading: 'How we test',
        paragraphs: [
          'Automated Playwright tests check keyboard navigation in the KNM app. They also run axe accessibility checks on the English KNM app and on the accessibility, privacy and terms pages in both languages. The tests run on every pull request to the develop branch.',
        ],
      },
      {
        heading: 'Known limitations',
        paragraphs: [
          'The home, about and disclaimer pages are not yet covered by the automated axe checks. The study material is written text only, so there is no audio or video version.',
        ],
      },
      {
        heading: 'Tell us what got in your way',
        paragraphs: [
          'If something is hard to use with zoom, a screen reader, a keyboard or because of colour, open an issue on GitHub. Tell us which page you were on, what you tried and what blocked you.',
        ],
        links: [{ href: siteConfig.issuesUrl, label: 'Report a problem on GitHub' }],
      },
    ],
  },
  nl: {
    title: 'Gemaakt zodat meer mensen prettig kunnen studeren.',
    eyebrow: 'Toegankelijkheid',
    intro:
      'We willen op elke pagina voldoen aan WCAG 2.2 niveau AA, in het Engels en in het Nederlands. Deze verklaring is voor het laatst bijgewerkt op 1 november 2026.',
    blocks: [
      {
        heading: 'Wat er al is',
        paragraphs: [
          'Elke pagina heeft een link om direct naar de inhoud te springen, vaste herkenningspunten voor header, navigatie, hoofdinhoud en footer, één hoofdkop en een logische kopvolgorde. De toetsenbordfocus is altijd zichtbaar. Knoppen en andere bedieningselementen zijn waar mogelijk minstens 48 pixels hoog.',
          'Tekst begint op 18 pixels. De site volgt de lichte of donkere modus van je systeem en zet animaties uit als je apparaat is ingesteld op minder beweging.',
          'De KNM-oefenapp gebruikt echte knoppen, tabbladen die je met de pijltjestoetsen doorloopt en live regions die screenreaders laten melden wanneer de tijd om is en wat je score is. Als je een pagina opent, wordt ook de titel voorgelezen.',
        ],
      },
      {
        heading: 'Hoe we testen',
        paragraphs: [
          "Geautomatiseerde Playwright-tests controleren de toetsenbordbediening van de KNM-app. Ook draaien ze axe-toegankelijkheidscontroles op de Engelse KNM-app en, in beide talen, op de pagina's over toegankelijkheid, privacy en voorwaarden. De tests lopen bij elke pull request naar de develop-branch.",
        ],
      },
      {
        heading: 'Bekende beperkingen',
        paragraphs: [
          "De homepage en de pagina's Over ons en Disclaimer vallen nog niet onder de automatische axe-controles. Het studiemateriaal bestaat alleen uit tekst; er is geen audio- of videoversie.",
        ],
      },
      {
        heading: 'Laat ons weten waar je vastliep',
        paragraphs: [
          'Is iets lastig te gebruiken met zoom, een screenreader, het toetsenbord of door de kleuren? Maak dan een issue aan op GitHub. Vertel op welke pagina je was, wat je probeerde en waar je vastliep.',
        ],
        links: [{ href: siteConfig.issuesUrl, label: 'Probleem melden op GitHub (Engels)' }],
      },
    ],
  },
};
