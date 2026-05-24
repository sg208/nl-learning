import type { StudyNote } from './types';

export const wonenNotes = [
  {
    h: 'Sociale Huurwoning',
    b: 'Huurprijsgrens (~€880/maand 2024). Via woningcorporaties. Lange wachtlijsten — vroeg inschrijven.',
    bEn: 'Rent price ceiling (~€880/month 2024). Via housing associations. Long waiting lists — register early.',
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
  },
  {
    h: 'Huurcontract',
    b: 'Schriftelijk, voor bepaalde tijd (max 2 jaar) of onbepaalde tijd. Borg meestal 1–2 maanden huur.',
    bEn: "In writing, fixed term (max 2 years) or indefinite. Deposit usually 1–2 months' rent.",
  },
  {
    h: 'Nutsvoorzieningen',
    b: 'Gas, water, elektriciteit. Meestal regelt de huurder zelf, tenzij in servicekosten.',
    bEn: 'Gas, water, electricity. Usually arranged by the tenant, unless included in service charges.',
  },
  {
    h: 'Huurcommissie',
    b: 'Onafhankelijk orgaan voor geschillen tussen huurder en verhuurder.',
    bEn: 'Independent body for disputes between tenant and landlord.',
  },
] as const satisfies readonly StudyNote[];
