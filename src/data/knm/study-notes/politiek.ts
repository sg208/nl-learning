import type { StudyNote } from './types';

export const politiekNotes = [
  {
    h: 'Eerste stappen',
    steps: [
      'Nederlandse staatsburger, 18+? Stemrecht Tweede Kamer.',
      'Wetten: Staten-Generaal + regering.',
      'Koning = ceremonieel; Minister-President leidt kabinet.',
      'Gemeenteraadsverkiezingen: niet-Nederlanders na 5 jaar legaal verblijf.',
      'Grondrechten staan in de Grondwet.',
    ],
    stepsEn: [
      'Dutch citizen, 18+? Vote in general elections (Tweede Kamer).',
      'Laws: States General + government.',
      'King = ceremonial; Prime Minister leads cabinet.',
      'Municipal elections: non-Dutch after 5 years legal residence.',
      'Fundamental rights are in the Grondwet (Constitution).',
    ],
  },
  {
    h: 'Constitutionele Monarchie',
    b: 'Koning is staatshoofd met ceremoniële rol. Echte macht ligt bij regering en parlement.',
    bEn: 'King is head of state with a ceremonial role. Real power lies with government and parliament.',
  },
  {
    h: 'Staten-Generaal',
    b: 'Tweede Kamer (150, direct gekozen) + Eerste Kamer (75, indirect via Provinciale Staten). Samen wetgevende macht.',
    bEn: 'House of Representatives (150, directly elected) + Senate (75, indirectly via Provincial Councils). Together: legislative power.',
  },
  {
    h: 'Minister-President & kabinet',
    b: 'Minister-President leidt de ministerraad en is feitelijk regeringsleider. Kabinet voert wetten uit (uitvoerende macht).',
    bEn: 'Prime Minister leads the Council of Ministers and is de facto head of government. Cabinet executes laws (executive power).',
  },
  {
    h: 'Verkiezingen',
    b: 'Stemrecht vanaf 18 (Nederlandse staatsburger voor TK). Tweede Kamerverkiezingen elke 4 jaar. Coalitieregeringen zijn normaal.',
    bEn: 'Voting from 18 (Dutch citizenship for general elections). General elections every 4 years. Coalition governments are the norm.',
  },
  {
    h: 'Gemeenteraad & B&W',
    b: 'Gemeenteraad stelt lokaal beleid vast en controleert college van burgemeester en wethouders (B&W).',
    bEn: 'Municipal council sets local policy and monitors the executive board of mayor and aldermen (B&W).',
  },
  {
    h: 'Grondwet',
    b: 'Garandeert grondrechten: vrijheid van meningsuiting, godsdienst, gelijke behandeling, privacy.',
    bEn: 'Guarantees fundamental rights: freedom of expression, religion, equal treatment, privacy.',
  },
  {
    h: 'Trias Politica',
    b: 'Wetgevend (parlement), uitvoerend (kabinet), rechterlijk (rechters). Rechters beoordelen geschillen onafhankelijk.',
    bEn: 'Legislative (parliament), executive (cabinet), judicial (courts). Judges assess disputes independently.',
  },
  {
    h: 'Referendum',
    b: 'Stemming waarbij burgers direct over een onderwerp stemmen. In Nederland zeldzaam en beperkt gebruikt.',
    bEn: 'Vote where citizens decide directly on an issue. Rare and limited in the Netherlands.',
  },
] as const satisfies readonly StudyNote[];
