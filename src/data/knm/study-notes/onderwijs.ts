import type { StudyNote } from './types';

export const onderwijsNotes = [
  {
    h: 'Leerplicht',
    b: 'Volledig leerplichtig 5–16. Kwalificatieplicht 16–18 tot startkwalificatie. Ouders verantwoordelijk.',
    bEn: 'Fully compulsory 5–16. Qualification obligation 16–18 until starter qualification. Parents responsible.',
  },
  {
    h: 'Basisschool',
    b: 'Groep 1–8, leeftijd 4–12. Eindtoets in groep 8 geeft schooladvies.',
    bEn: 'Years 1–8, ages 4–12. Final test in year 8 gives secondary school recommendation.',
  },
  {
    h: 'Voortgezet Onderwijs',
    b: 'VMBO (4 jr), HAVO (5 jr), VWO (6 jr).',
    bEn: 'VMBO (4 yrs, vocational), HAVO (5 yrs, general), VWO (6 yrs, pre-university).',
  },
  {
    h: 'MBO / HBO / WO',
    b: 'MBO = beroepsonderwijs (1–4). HBO = hogeschool. WO = universiteit. Studiefinanciering via DUO.',
    bEn: 'MBO = vocational (levels 1–4). HBO = university of applied sciences. WO = university. Finance via DUO.',
  },
  {
    h: 'Kinderopvang',
    b: 'Dagopvang en BSO. Kinderopvangtoeslag van Belastingdienst voor werkende ouders.',
    bEn: 'Day care and after-school care (BSO). Childcare benefit from Tax Authority for working parents.',
  },
] as const satisfies readonly StudyNote[];
