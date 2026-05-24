import { KNM_FACTS } from '../knm-facts';
import type { StudyNote } from './types';

export const gezondheidNotes = [
  {
    h: 'Eerste stappen',
    steps: [
      'Schrijf u in bij een huisarts in de buurt.',
      'Sluit een basiszorgverzekering af — verplicht.',
      'Niet levensbedreigend? Bel de huisarts, niet 112.',
      'Recept? Naar de apotheek.',
      'Kind 0–4 jaar? Vaccinaties via consultatiebureau.',
    ],
    stepsEn: [
      'Register with a GP (huisarts) near your home.',
      'Take out basic health insurance (zorgverzekering) — it is mandatory.',
      'Not life-threatening? Call your GP, not 112.',
      'Prescription? Go to the apotheek (pharmacy).',
      'Child aged 0–4? Vaccinations at the consultatiebureau (child health clinic).',
    ],
  },
  {
    h: 'Huisarts',
    b: 'Eerste contact voor niet-spoedeisende klachten. Inschrijven verplicht. Verwijst door naar specialist. Bij verhuizing: nieuwe huisarts zoeken en inschrijven.',
    bEn: 'First contact for non-emergency complaints. Registration required. Refers to specialists. When moving: find and register with a new GP.',
  },
  {
    h: '112 vs 113 vs Huisarts',
    b: '112 = levensgevaar. 113 = zelfmoordpreventie. Huisarts = gewone klachten. Huisartsenpost (HAP) = spoed buiten kantooruren, geen 112.',
    bEn: '112 = life-threatening emergency. 113 = suicide prevention. GP = normal complaints. Out-of-hours GP (HAP) = urgent outside office hours, not 112.',
    tip: '112 is niet voor koorts of hoofdpijn — alleen bij levensgevaar.',
    tipEn: '112 is not for fever or headache — only for life-threatening emergencies.',
  },
  {
    h: 'Zorgverzekering',
    b: `Basisverzekering wettelijk verplicht. Eigen risico ${KNM_FACTS.eigenRisicoFormatted} (${KNM_FACTS.year}). Zorgtoeslag voor lagere inkomens via Belastingdienst.`,
    bEn: `Basic insurance is legally required. Annual deductible ${KNM_FACTS.eigenRisicoFormatted} (${KNM_FACTS.year}). Healthcare benefit (zorgtoeslag) for lower incomes via Tax Authority.`,
    tip: 'Huisarts en consultatiebureau vallen niet onder het eigen risico.',
    tipEn:
      'GP visits and the child health clinic do not count toward the deductible (eigen risico).',
  },
  {
    h: 'Apotheek',
    b: 'Receptmedicijnen alleen via apotheek. Vrij verkrijgbaar ook bij drogist. Apotheker controleert interacties en geeft medicatie-advies.',
    bEn: 'Prescription medicines only at the pharmacy. Over-the-counter also at the drugstore. Pharmacist checks interactions and gives medication advice.',
    tip: 'Met recept = apotheek. Zonder recept (paracetamol) = apotheek of drogist.',
    tipEn:
      'With a prescription = pharmacy (apotheek). Without a prescription (e.g. paracetamol) = pharmacy or drugstore (drogist).',
  },
  {
    h: 'Tandarts',
    b: 'Kinderen tot 18 jaar: tandartszorg in basispakket. Volwassenen: aanvullende verzekering nodig.',
    bEn: 'Children under 18: dental care in basic package. Adults: supplementary insurance needed.',
  },
  {
    h: 'Consultatiebureau',
    b: 'Gratis controles en vaccinaties voor kinderen 0–4 jaar. Niet verplicht, wel sterk aangeraden.',
    bEn: 'Free check-ups and vaccinations for children aged 0–4. Not compulsory but strongly recommended.',
  },
  {
    h: 'Zwangerschap & verloskundige',
    b: 'Bij normale zwangerschap: eerst verloskundige of huisarts. Verloskundige begeleidt controles; ziekenhuis bij complicaties.',
    bEn: 'Normal pregnancy: midwife (verloskundige) or GP first. Midwife handles check-ups; hospital for complications.',
  },
  {
    h: 'Mentale gezondheid (GGZ)',
    b: 'Bij psychische klachten: eerst huisarts. Verwijzing naar GGZ of POH-GGZ (praktijkondersteuner).',
    bEn: 'For mental health complaints: GP first. Referral to mental health services (GGZ) or practice nurse (POH-GGZ).',
  },
] as const satisfies readonly StudyNote[];
