import { KNM_FACTS } from '../knm-facts';
import type { StudyNote } from './types';

export const wonenNotes = [
  {
    h: 'Eerste stappen',
    steps: [
      'Sociale huur? Vroeg inschrijven bij woningcorporatie (vanaf 18 jaar).',
      'Huurtoeslag via Belastingdienst.',
      'Schriftelijk huurcontract; borg meestal 1–2 maanden.',
      'Probleem met verhuurder? Eerst schriftelijk, dan Huurcommissie.',
      'Kopen? Hypotheek via bank + notaris.',
    ],
    stepsEn: [
      'Social housing? Register early with a woningcorporatie (housing association, from age 18).',
      'Rent allowance (huurtoeslag) via Belastingdienst.',
      'Written rental contract; deposit usually 1–2 months.',
      'Problem with landlord? Write first, then Huurcommissie.',
      'Buying? Mortgage via bank + notary.',
    ],
  },
  {
    h: 'Sociale Huurwoning',
    b: `Huurprijsgrens ${KNM_FACTS.socialeHuurGrensFormatted} (${KNM_FACTS.year}, kale huur). Via woningcorporaties. Inschrijfduur telt vanaf 18 jaar — vroeg inschrijven, lange wachtlijsten.`,
    bEn: `Rent price ceiling ${KNM_FACTS.socialeHuurGrensFormatted} (${KNM_FACTS.year}, bare rent). Via housing associations. Registration time counts from age 18 — register early; waiting lists are long.`,
  },
  {
    h: 'Vrije Sector Huur',
    b: 'Boven de huurprijsgrens. Particuliere verhuurder. Geen huurtoeslag.',
    bEn: 'Above the rent price ceiling. Private landlord. No rent benefit.',
  },
  {
    h: 'Huurtoeslag',
    b: 'Voor lagere inkomens in sociale huur. Aanvragen via Belastingdienst/Toeslagen.',
    bEn: 'For lower incomes in social housing. Apply via Tax Authority / Benefits.',
    tip: 'Huurtoeslag = Belastingdienst, niet gemeente of woningcorporatie.',
    tipEn: 'Rent allowance = Tax Authority, not municipality or housing association.',
  },
  {
    h: 'Huurcontract',
    b: 'Schriftelijk, voor bepaalde tijd (max 2 jaar) of onbepaalde tijd. Borg meestal 1–2 maanden kale huur.',
    bEn: "In writing, fixed term (max 2 years) or indefinite. Deposit usually 1–2 months' bare rent.",
  },
  {
    h: 'Kale huur & servicekosten',
    b: 'Kale huur = alleen huur, zonder gas/water/elektra en servicekosten. Servicekosten staan apart op de factuur.',
    bEn: 'Bare rent (kale huur) is rent only, excluding gas/water/electricity and service charges. Service charges are listed separately.',
  },
  {
    h: 'Nutsvoorzieningen',
    b: 'Gas, water, elektriciteit. Meestal regelt de huurder zelf, tenzij in servicekosten.',
    bEn: 'Gas, water, electricity. Usually arranged by the tenant, unless included in service charges.',
  },
  {
    h: 'Huurcommissie',
    b: 'Bij conflict: eerst schriftelijk klagen bij verhuurder. Onopgelost? Onafhankelijke Huurcommissie voor geschillen.',
    bEn: 'In a dispute: complain in writing to the landlord first. Unresolved? The independent Rent Tribunal (Huurcommissie) handles disputes.',
  },
  {
    h: 'Huurverhoging & onderverhuur',
    b: 'Huurverhoging is wettelijk begrensd (jaarlijks maximum). Onderverhuur: bijna altijd schriftelijke toestemming van verhuurder.',
    bEn: 'Rent increases are capped by law (annual maximum). Subletting almost always requires written permission from the landlord.',
  },
  {
    h: 'Onderhoud huurwoning',
    b: 'Klein onderhoud (lampen, kranen): huurder. Groot onderhoud (CV, dak): verhuurder.',
    bEn: 'Minor maintenance (light bulbs, tap washers): tenant. Major maintenance (boiler, roof): landlord.',
  },
  {
    h: 'Energielabel',
    b: 'Verplicht bij verkoop en verhuur. A = zuinig, G = onzuinig. Helpt energiekosten inschatten.',
    bEn: 'Required when selling or renting. A = efficient, G = inefficient. Helps estimate energy costs.',
  },
  {
    h: 'Kopen: hypotheek & notaris',
    b: 'Meestal hypotheek via bank. Notaris stelt akte op en registreert in Kadaster.',
    bEn: 'Usually a mortgage via a bank. A notary draws up the deed and registers it in the Land Registry (Kadaster).',
  },
  {
    h: 'VvE',
    b: 'Vereniging van Eigenaars — verplicht bij appartementen. Regelt gezamenlijk onderhoud en opstalverzekering.',
    bEn: "Owners' association (VvE) — mandatory for apartments. Manages shared maintenance and building insurance.",
  },
] as const satisfies readonly StudyNote[];
