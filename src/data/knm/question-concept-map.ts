import { STUDY_NOTES } from './study-notes';
import type { ExamKey, TopicId } from './questions/types';

/** Per exam: one entry per question (index 0–4) → study-note heading(s) in that topic. */
const MAP: {
  readonly [K in TopicId]: { readonly [E in ExamKey]: readonly (readonly string[])[] };
} = {
  gezondheid: {
    '1': [
      ['Huisarts', '112 vs 113 vs Huisarts'],
      ['Consultatiebureau'],
      ['Apotheek'],
      ['Zorgverzekering'],
      ['Huisarts'],
    ],
    '2': [
      ['Apotheek'],
      ['Tandarts'],
      ['Zorgverzekering'],
      ['112 vs 113 vs Huisarts'],
      ['Zorgverzekering'],
    ],
    '3': [
      ['Zwangerschap & verloskundige'],
      ['Apotheek'],
      ['112 vs 113 vs Huisarts'],
      ['Mentale gezondheid (GGZ)', 'Huisarts'],
      ['112 vs 113 vs Huisarts'],
    ],
  },
  werk: {
    '1': [
      ['UWV', 'WW-uitkering'],
      ['Arbeidscontract'],
      ['ZZP / KvK'],
      ['Bijstand'],
      ['Loonstrook'],
    ],
    '2': [
      ['WW-uitkering'],
      ['Ziekte & loondoorbetaling', '0-urencontract'],
      ['Belastingdienst & Toeslagen'],
      ['Minimumloon'],
      ['Juridisch Loket'],
    ],
    '3': [['WW-uitkering'], ['UWV'], ['ZZP / KvK', 'Bijstand'], ['AOW & SVB'], ['Arbeidscontract']],
  },
  overheid: {
    '1': [['Gemeente'], ['DigiD'], ['SVB'], ['Juridisch Loket'], ['BSN']],
    '2': [['Gemeente'], ['WMO'], ['Toeslagen (overzicht)'], ['BRP & bezwaar'], ['BRP & bezwaar']],
    '3': [
      ['DigiD'],
      ['Stemrecht niet-Nederlanders'],
      ['Juridisch Loket', 'Toeslagen (overzicht)'],
      ['DUO'],
      ['Burgemeester & gemeenteraad'],
    ],
  },
  wonen: {
    '1': [
      ['Huurtoeslag'],
      ['Sociale Huurwoning'],
      ['Huurcommissie'],
      ['Nutsvoorzieningen'],
      ['Vrije Sector Huur', 'Sociale Huurwoning'],
    ],
    '2': [
      ['Kale huur & servicekosten', 'Huurcontract'],
      ['Kopen: hypotheek & notaris'],
      ['VvE'],
      ['Sociale Huurwoning'],
      ['Energielabel'],
    ],
    '3': [
      ['Huurverhoging & onderverhuur'],
      ['Kopen: hypotheek & notaris'],
      ['Huurverhoging & onderverhuur'],
      ['Sociale Huurwoning'],
      ['Onderhoud huurwoning'],
    ],
  },
  onderwijs: {
    '1': [
      ['Leerplicht'],
      ['MBO / HBO / WO'],
      ['MBO / HBO / WO'],
      ['Kinderopvang'],
      ['Voortgezet Onderwijs'],
    ],
    '2': [
      ['Leerplicht'],
      ['MBO / HBO / WO'],
      ['Basisschool'],
      ['Studieverlof'],
      ['Inburgering & onderwijs'],
    ],
    '3': [
      ['OV & studentenreisproduct'],
      ['Leerplichtambtenaar'],
      ['Basisschool'],
      ['Bijzonder onderwijs'],
      ['Leerplicht'],
    ],
  },
  politiek: {
    '1': [
      ['Staten-Generaal', 'Trias Politica'],
      ['Staten-Generaal'],
      ['Constitutionele Monarchie'],
      ['Verkiezingen'],
      ['Grondwet'],
    ],
    '2': [
      ['Staten-Generaal'],
      ['Minister-President & kabinet'],
      ['Verkiezingen'],
      ['Verkiezingen'],
      ['Trias Politica'],
    ],
    '3': [
      ['Gemeenteraad & B&W'],
      ['Grondwet'],
      ['Verkiezingen'],
      ['Trias Politica'],
      ['Referendum'],
    ],
  },
  geschiedenis: {
    '1': [
      ['Dodenherdenking'],
      ['Dodenherdenking'],
      ['Deltawerken'],
      ['Vader des Vaderlands'],
      ['Geografie'],
    ],
    '2': [
      ['Gouden Eeuw'],
      ['WO2 & Bezetting'],
      ['Geografie'],
      ['WO2 & Bezetting'],
      ['WO2 & Bezetting'],
    ],
    '3': [
      ['Hoofdstad & regeringszetel'],
      ['Hoofdstad & regeringszetel'],
      ['Polder'],
      ['Geografie'],
      ['Polder', 'Geografie'],
    ],
  },
  cultuur: {
    '1': [
      ['Feestdagen', 'Koningsdag & oranje'],
      ['Feestdagen'],
      ['Waarden'],
      ['Bezoek etiquette', 'Verjaardagskalender'],
      ['Discriminatie'],
    ],
    '2': [
      ['Gedogen'],
      ['Omgangsvormen'],
      ['Vrijwilligerswerk'],
      ['Koningsdag & oranje'],
      ['Feestdagen'],
    ],
    '3': [
      ['Gezelligheid'],
      ['Feestdagen'],
      ['Feestdagen'],
      ['Inburgering'],
      ['Koninkrijk der Nederlanden'],
    ],
  },
};

export const getQuestionNoteHeadings = (
  topicId: TopicId,
  exam: ExamKey,
  index: number,
): readonly string[] => MAP[topicId][exam][index] ?? [];

export type TopicNoteCoverage = {
  readonly covered: number;
  readonly total: number;
};

export const getTopicNoteCoverage = (topicId: TopicId): TopicNoteCoverage => {
  const headings = STUDY_NOTES[topicId].map((note) => note.h).filter((h) => h !== 'Eerste stappen');
  const linked = new Set<string>();
  for (const exam of ['1', '2', '3'] as const) {
    for (const entry of MAP[topicId][exam]) {
      for (const h of entry) {
        if (h !== 'Eerste stappen') linked.add(h);
      }
    }
  }
  const covered = headings.filter((h) => linked.has(h)).length;
  return { covered, total: headings.length };
};
