import type { StudyNote } from './types';

export const geschiedenisNotes = [
  {
    h: 'Gouden Eeuw',
    b: '17e eeuw — VOC, handel, kunst (Rembrandt, Vermeer). Republiek der Zeven Verenigde Nederlanden.',
    bEn: '17th century — VOC, trade, art (Rembrandt, Vermeer). Republic of the Seven United Netherlands.',
  },
  {
    h: 'WO2 & Bezetting',
    b: 'Duitse bezetting 1940–45. Anne Frank, Hongerwinter 1944–45.',
    bEn: 'German occupation 1940–45. Anne Frank, Hunger Winter 1944–45.',
  },
  {
    h: 'Dodenherdenking',
    b: '4 mei — 2 min stilte om 20:00. Bevrijdingsdag 5 mei.',
    bEn: '4 May — 2 min silence at 20:00. Liberation Day 5 May.',
  },
  {
    h: 'Deltawerken',
    b: 'Na Watersnoodramp 1 februari 1953 (~1.800 doden). Beschermt tegen overstromingen.',
    bEn: 'After the North Sea Flood of 1 February 1953 (~1,800 deaths). Protects against flooding.',
  },
  {
    h: 'Geografie',
    b: '12 provincies. Hoofdrivieren: Rijn, Maas, Schelde. Randstad: Amsterdam, Rotterdam, Den Haag, Utrecht.',
    bEn: '12 provinces. Main rivers: Rhine, Meuse, Scheldt. Randstad: Amsterdam, Rotterdam, The Hague, Utrecht.',
  },
  {
    h: 'Vader des Vaderlands',
    b: 'Willem van Oranje. Vermoord in Delft 1584.',
    bEn: 'William of Orange. Assassinated in Delft 1584.',
  },
] as const satisfies readonly StudyNote[];
