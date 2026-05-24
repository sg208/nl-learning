import type { StudyNote } from './types';

export const politiekNotes = [
  {
    h: 'Constitutionele Monarchie',
    b: 'Koning is staatshoofd met ceremoniële rol. Echte macht ligt bij regering en parlement.',
    bEn: 'King is head of state with a ceremonial role. Real power lies with government and parliament.',
  },
  {
    h: 'Staten-Generaal',
    b: 'Tweede Kamer (150, direct gekozen) + Eerste Kamer (75, indirect via Provinciale Staten).',
    bEn: 'House of Representatives (150, directly elected) + Senate (75, indirectly via Provincial Councils).',
  },
  {
    h: 'Verkiezingen',
    b: 'Stemrecht vanaf 18 jaar. Evenredige vertegenwoordiging. Coalitieregeringen zijn normaal.',
    bEn: 'Voting age 18. Proportional representation. Coalition governments are the norm.',
  },
  {
    h: 'Grondwet',
    b: 'Garandeert grondrechten: vrijheid van meningsuiting, godsdienst, gelijke behandeling, privacy.',
    bEn: 'Guarantees fundamental rights: freedom of expression, religion, equal treatment, privacy.',
  },
  {
    h: 'Trias Politica',
    b: 'Wetgevend (parlement), uitvoerend (kabinet), rechterlijk (rechters). Scheiding der machten.',
    bEn: 'Legislative (parliament), executive (cabinet), judicial (courts). Separation of powers.',
  },
] as const satisfies readonly StudyNote[];
