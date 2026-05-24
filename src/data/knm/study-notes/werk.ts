import type { StudyNote } from './types';

export const werkNotes = [
  {
    h: 'Arbeidscontract',
    b: 'Tijdelijk of vast. Proeftijd max 2 maanden. Vakantiegeld = 8% van het brutoloon, meestal in mei uitbetaald.',
    bEn: 'Temporary or permanent. Probation max 2 months. Holiday pay = 8% of gross salary, usually paid in May.',
  },
  {
    h: 'UWV',
    b: 'Uitkeringen voor werknemers: WW (werkloosheid), WIA (arbeidsongeschiktheid), ZW (ziekte zonder werkgever).',
    bEn: 'Benefits for employees: WW (unemployment), WIA (disability), ZW (sickness without employer).',
  },
  {
    h: 'WW-uitkering',
    b: 'Vereiste: 26 van laatste 36 weken gewerkt. Duur hangt af van arbeidsverleden.',
    bEn: 'Requirement: worked 26 of the last 36 weeks. Duration depends on employment history.',
  },
  {
    h: 'Bijstand',
    b: 'Sociale minimumuitkering via de gemeente, als u geen ander inkomen en geen UWV-recht hebt.',
    bEn: 'Social minimum benefit via the municipality, if you have no other income and no UWV entitlement.',
  },
  {
    h: 'Belastingdienst & Toeslagen',
    b: 'Inkomstenbelasting (aangifte). Toeslagen: huur-, zorg-, kinderopvang-, kindgebondenbudget.',
    bEn: 'Income tax (annual return). Benefits: rent, healthcare, childcare, child-related budget.',
  },
  {
    h: 'ZZP / KvK',
    b: 'Inschrijven bij Kamer van Koophandel. Zelf BTW-aangifte. Geen automatisch recht op WW of doorbetaling bij ziekte.',
    bEn: 'Register at the Chamber of Commerce (KvK). File your own VAT return. No automatic right to WW or sick pay.',
  },
] as const satisfies readonly StudyNote[];
