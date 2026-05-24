import type { StudyNote } from './types';

export const gezondheidNotes = [
  {
    h: 'Huisarts',
    b: 'Eerste contact voor alle niet-spoedeisende klachten. Inschrijven verplicht. De huisarts verwijst u door naar een specialist.',
    bEn: 'First point of contact for all non-emergency complaints. Registration is required. The GP refers you to a specialist.',
  },
  {
    h: '112 vs 113 vs Huisarts',
    b: '112 = levensgevaar. 113 = zelfmoordpreventie. Huisarts = gewone klachten. Huisartsenpost (HAP) = spoed buiten kantooruren maar geen 112-situatie.',
    bEn: '112 = life-threatening emergency. 113 = suicide prevention. GP = normal complaints. Out-of-hours GP clinic (HAP) = urgent outside office hours, but not 112.',
  },
  {
    h: 'Zorgverzekering',
    b: 'Basisverzekering wettelijk verplicht. Eigen risico € 385 (2024). Zorgtoeslag voor lagere inkomens via Belastingdienst.',
    bEn: 'Basic insurance is legally required. Annual deductible €385 (2024). Healthcare benefit (zorgtoeslag) for lower incomes via Tax Authority.',
  },
  {
    h: 'Apotheek',
    b: 'Receptmedicijnen alleen via apotheek. Vrij verkrijgbare medicijnen ook bij drogist.',
    bEn: 'Prescription medicines only at the pharmacy. Over-the-counter medicines also at the drugstore (drogist).',
  },
  {
    h: 'Consultatiebureau',
    b: 'Gratis controles en vaccinaties voor kinderen 0–4 jaar. Niet verplicht, wel sterk aangeraden.',
    bEn: 'Free check-ups and vaccinations for children aged 0–4. Not compulsory but strongly recommended.',
  },
] as const satisfies readonly StudyNote[];
