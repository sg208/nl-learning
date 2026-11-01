import { siteConfig } from '~/config/site';
import type { LegalPageContent } from './types';

export const terms: Record<'en' | 'nl', LegalPageContent> = {
  en: {
    title: 'Plain terms for using NL Learning.',
    eyebrow: 'Terms of use',
    intro:
      'NL Learning is a free demo and portfolio project. It is here to help you practise, and it comes with no promises.',
    blocks: [
      {
        heading: 'Study material, as it is',
        paragraphs: [
          'The notes and practice exams are for personal study. They are not official exam material, and using them does not guarantee a pass. Rules and amounts in the Netherlands change, so check anything important with official sources such as DUO and inburgeren.nl.',
          'The site and its content are provided as is, without any warranty. We do our best to keep things correct, but we are not liable for mistakes or for what happens if you rely on them, as far as the law allows.',
        ],
      },
      {
        heading: 'Code and licence',
        paragraphs: [
          'The source code is published on GitHub under the MIT licence. You may use, copy and change it under the terms of that licence.',
        ],
        links: [{ href: siteConfig.repoUrl, label: 'NL Learning source code on GitHub' }],
      },
      {
        heading: 'Third-party content',
        paragraphs: [
          'Names of organisations such as DUO belong to their owners and are used only to describe what the material covers. The Literata and Sora fonts are made by their own designers and are used under their own licences.',
        ],
      },
      {
        heading: 'Privacy',
        paragraphs: [
          'What the site stores and which services see your requests is explained on the privacy page.',
        ],
        links: [{ href: '/privacy', label: 'Privacy policy' }],
      },
    ],
  },
  nl: {
    title: 'Duidelijke voorwaarden voor NL Learning.',
    eyebrow: 'Gebruiksvoorwaarden',
    intro:
      'NL Learning is een gratis demo- en portfolioproject. Het is er om je te helpen oefenen, zonder garanties.',
    blocks: [
      {
        heading: 'Studiemateriaal zoals het is',
        paragraphs: [
          'De samenvattingen en oefenexamens zijn bedoeld voor persoonlijke studie. Het is geen officieel examenmateriaal en het geeft geen garantie dat je slaagt. Regels en bedragen in Nederland veranderen, dus controleer belangrijke zaken bij officiële bronnen zoals DUO en inburgeren.nl.',
          'De site en de inhoud worden aangeboden zoals ze zijn, zonder enige garantie. We doen ons best om alles juist te houden, maar voor zover de wet dat toestaat zijn we niet aansprakelijk voor fouten of voor de gevolgen als je erop vertrouwt.',
        ],
      },
      {
        heading: 'Code en licentie',
        paragraphs: [
          'De broncode staat op GitHub onder de MIT-licentie. Je mag de code gebruiken, kopiëren en aanpassen volgens de voorwaarden van die licentie.',
        ],
        links: [{ href: siteConfig.repoUrl, label: 'Broncode van NL Learning op GitHub (Engels)' }],
      },
      {
        heading: 'Inhoud van anderen',
        paragraphs: [
          'Namen van organisaties zoals DUO zijn van hun eigenaars en worden alleen gebruikt om te beschrijven waar het materiaal over gaat. De lettertypen Literata en Sora zijn gemaakt door hun eigen ontwerpers en worden gebruikt onder hun eigen licenties.',
        ],
      },
      {
        heading: 'Privacy',
        paragraphs: [
          'Wat de site opslaat en welke diensten je verzoeken zien, lees je in het privacybeleid.',
        ],
        links: [{ href: '/nl/privacy', label: 'Privacybeleid' }],
      },
    ],
  },
};
