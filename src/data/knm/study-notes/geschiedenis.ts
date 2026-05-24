import type { StudyNote } from './types';

export const geschiedenisNotes = [
  {
    h: 'Eerste stappen',
    steps: [
      'Onthoud: 4 mei Dodenherdenking, 5 mei Bevrijdingsdag.',
      'WO2: inval 1940, bezetting tot 1945, Anne Frank, Hongerwinter.',
      'Amsterdam = hoofdstad; Den Haag = regeringszetel.',
      '12 provincies; Flevoland jongste (1986).',
      'Willem van Oranje = Vader des Vaderlands.',
    ],
    stepsEn: [
      'Remember: 4 May Remembrance Day, 5 May Liberation Day.',
      'WWII: invasion 1940, occupation until 1945, Anne Frank, Hunger Winter.',
      'Amsterdam = capital; The Hague = seat of government.',
      '12 provinces; Flevoland youngest (1986).',
      'William of Orange = Father of the Fatherland.',
    ],
  },
  {
    h: 'Gouden Eeuw',
    b: '17e eeuw — VOC (1602), handel, kunst (Rembrandt, Vermeer). Republiek der Zeven Verenigde Nederlanden.',
    bEn: '17th century — VOC (1602), trade, art (Rembrandt, Vermeer). Republic of the Seven United Netherlands.',
  },
  {
    h: 'WO2 & Bezetting',
    b: 'Duitse inval 10 mei 1940. Bezetting tot 1945. Anne Frank, Hongerwinter 1944–45.',
    bEn: 'German invasion 10 May 1940. Occupation until 1945. Anne Frank, Hunger Winter 1944–45.',
  },
  {
    h: 'Dodenherdenking',
    b: '4 mei — 2 min stilte om 20:00. Bevrijdingsdag 5 mei (einde Duitse bezetting 1945).',
    bEn: '4 May — 2 min silence at 20:00. Liberation Day 5 May (end of German occupation 1945).',
  },
  {
    h: 'Deltawerken',
    b: 'Na Watersnoodramp 1 februari 1953 (~1.800 doden). Beschermt tegen overstromingen uit zee.',
    bEn: 'After the North Sea Flood of 1 February 1953 (~1,800 deaths). Protects against flooding from the sea.',
  },
  {
    h: 'Vader des Vaderlands',
    b: 'Willem van Oranje (Willem de Zwijger). Leidde opstand tegen Spanje. Vermoord in Delft 1584.',
    bEn: 'William of Orange (William the Silent). Led revolt against Spain. Assassinated in Delft 1584.',
  },
  {
    h: 'Hoofdstad & regeringszetel',
    b: 'Amsterdam = hoofdstad. Den Haag = regeringszetel (parlement, regering, internationale gerechtshoven).',
    bEn: 'Amsterdam = capital. The Hague = seat of government (parliament, government, international courts).',
    tip: 'Amsterdam is niet waar het parlement zit — dat is Den Haag.',
    tipEn: 'Amsterdam is not where parliament sits — that is The Hague.',
  },
  {
    h: 'Polder',
    b: 'Drooggelegd land, omringd door dijken. Veel van Nederland bestaat uit polders. Flevoland (1986) = jongste provincie na inpoldering Zuiderzee.',
    bEn: 'Reclaimed land surrounded by dikes. Much of the Netherlands consists of polders. Flevoland (1986) = youngest province after draining the Zuiderzee.',
  },
  {
    h: 'Geografie',
    b: '12 provincies. Grootste rivier: Rijn (ook Maas, Schelde). Randstad: Amsterdam, Rotterdam, Den Haag, Utrecht.',
    bEn: '12 provinces. Largest river: Rhine (also Meuse, Scheldt). Randstad: Amsterdam, Rotterdam, The Hague, Utrecht.',
  },
] as const satisfies readonly StudyNote[];
