import type { StudyNote } from './types';

export const onderwijsNotes = [
  {
    h: 'Eerste stappen',
    b: '1) Basisschool vanaf 4 jaar; leerplicht vanaf 5. 2) Studiefinanciering hoger onderwijs via DUO. 3) Kinderopvangtoeslag via Belastingdienst voor werkende ouders. 4) Inburgering: examen via DUO; cursus vaak via gemeente. 5) Spijbelen? Leerplichtambtenaar van gemeente kan ingrijpen.',
    bEn: '1) Primary school (basisschool) from age 4; compulsory from 5. 2) Higher-education finance via DUO. 3) Childcare benefit via Belastingdienst for working parents. 4) Integration: exam via DUO; course often via municipality. 5) Truancy? Municipal leerplichtambtenaar may intervene.',
  },
  {
    h: 'Leerplicht',
    b: 'Leerplicht 5–16 jaar. Kwalificatieplicht 16–18 tot startkwalificatie (min. MBO-2, HAVO of VWO). Ouders verantwoordelijk.',
    bEn: 'Compulsory education 5–16. Qualification obligation 16–18 until starter qualification (min. MBO-2, HAVO or VWO). Parents responsible.',
  },
  {
    h: 'Basisschool',
    b: 'Groep 1–8, vanaf 4 jaar (dag na verjaardag). Eindtoets groep 8 ondersteunt schooladvies voor middelbare school.',
    bEn: 'Years 1–8, from age 4 (day after birthday). Year 8 final test supports secondary school recommendation.',
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
    h: 'Bijzonder onderwijs',
    b: 'Scholen met religieuze of pedagogische grondslag (Montessori, Dalton). Ook door overheid bekostigd.',
    bEn: 'Schools with religious or pedagogical basis (Montessori, Dalton). Also government-funded.',
  },
  {
    h: 'Kinderopvang',
    b: 'Dagopvang en BSO. Kinderopvangtoeslag van Belastingdienst voor werkende ouders.',
    bEn: 'Day care and after-school care (BSO). Childcare benefit from Tax Authority for working parents.',
  },
  {
    h: 'OV & studentenreisproduct',
    b: 'Studenten krijgen via DUO een OV-kaart (week of weekend), gratis of met korting op openbaar vervoer.',
    bEn: 'Students receive an OV-card (weekday or weekend) via DUO, free or discounted for public transport.',
  },
  {
    h: 'Studieverlof',
    b: 'Geen automatisch recht — meestal cao of werkgeverbeleid. Inburgeringscursus kan via gemeente geregeld worden.',
    bEn: 'Not an automatic right — usually collective agreement or employer policy. Integration course may be arranged via municipality.',
  },
  {
    h: 'Inburgering & onderwijs',
    b: 'Inburgeringscursus: taal + KNM. Betaling vaak via gemeente (Wet 2021); eerder soms DUO-lening. Examen via DUO.',
    bEn: 'Integration course: language + KNM. Payment often via municipality (2021 Act); previously sometimes DUO loan. Exam via DUO.',
    tip: 'Examen = DUO. Cursusbetaling kan gemeente zijn — niet hetzelfde.',
    tipEn: 'Exam = DUO. Course payment may be via municipality — not the same thing.',
  },
  {
    h: 'Leerplichtambtenaar',
    b: 'Gemeente controleert schoolverzuim. Leerplichtambtenaar spreekt ouders aan bij ongeoorloofde afwezigheid.',
    bEn: 'Municipality monitors school attendance. Compulsory education officer contacts parents for unauthorised absence.',
  },
] as const satisfies readonly StudyNote[];
