import type { StudyNote } from './types';

export const werkNotes = [
  {
    h: 'Eerste stappen',
    steps: [
      'Vraag een schriftelijk arbeidscontract.',
      'Baan kwijt met WW-recht? Meld u bij UWV, niet bij de gemeente.',
      'Geen WW en geen inkomen? Bijstand via gemeente.',
      'ZZP? Inschrijven bij KvK.',
      'Belasting en toeslagen via Belastingdienst.',
    ],
    stepsEn: [
      'Get a written employment contract (arbeidscontract).',
      'Lost your job with WW entitlement? Apply at UWV, not the municipality.',
      'No WW and no income? Social assistance (bijstand) via municipality.',
      'Self-employed (ZZP)? Register at KvK.',
      'Tax and allowances (toeslagen) via Belastingdienst.',
    ],
  },
  {
    h: 'Arbeidscontract',
    b: 'Tijdelijk of vast — basisvoorwaarden schriftelijk verplicht. Proeftijd max 2 maanden. Vakantiegeld = 8% brutoloon, meestal mei.',
    bEn: 'Temporary or permanent — basic terms must be in writing. Probation max 2 months. Holiday pay = 8% gross salary, usually May.',
  },
  {
    h: 'Loonstrook',
    b: 'Maandelijks overzicht van werkgever: brutoloon, nettoloon en alle inhoudingen (belasting, pensioen).',
    bEn: 'Monthly overview from employer: gross salary, net salary and all deductions (tax, pension).',
  },
  {
    h: 'Minimumloon',
    b: 'Volwassen minimumloon vanaf 21 jaar. Daaronder geldt jeugdminimumloon (lagere tarieven per leeftijd).',
    bEn: 'Adult minimum wage from age 21. Below that, youth minimum wage rates apply by age.',
  },
  {
    h: 'Ziekte & loondoorbetaling',
    b: 'Werkgever betaalt bij ziekte minimaal 70% loon door, tot 2 jaar. Daarna WIA via UWV.',
    bEn: 'Employer pays at least 70% of salary during illness for up to 2 years. After that, WIA via UWV.',
  },
  {
    h: '0-urencontract',
    b: 'Geen vaste uren. Beperkte loondoorbetaling bij ziekte; vaak via Ziektewet (UWV) tijdens oproepperiodes.',
    bEn: 'No fixed hours. Limited sick pay; often via Sickness Benefits Act (UWV) during call-up periods.',
  },
  {
    h: 'UWV',
    b: 'Uitkeringen: WW (werkloosheid), WIA (langdurig arbeidsongeschikt), ZW (ziekte zonder werkgever).',
    bEn: 'Benefits: WW (unemployment), WIA (long-term disability), ZW (sickness without employer).',
  },
  {
    h: 'WW-uitkering',
    b: 'Ook na tijdelijk contract mogelijk. Vereiste: 26 van laatste 36 weken gewerkt. Duur hangt af van arbeidsverleden.',
    bEn: 'Also possible after a temporary contract. Requirement: worked 26 of last 36 weeks. Duration depends on employment history.',
    tip: 'Ook een tijdelijk contract kan WW-recht geven als u aan de wekeneis voldoet.',
    tipEn:
      'A temporary contract can still give WW rights if you meet the weeks-worked requirement.',
  },
  {
    h: 'Bijstand',
    b: 'Sociale minimumuitkering via gemeente, als u geen ander inkomen en geen UWV-recht hebt.',
    bEn: 'Social minimum benefit via municipality, if you have no other income and no UWV entitlement.',
    tip: 'WW = UWV. Bijstand = gemeente. Niet omwisselen.',
    tipEn: 'WW = UWV. Bijstand = municipality. Do not mix them up.',
  },
  {
    h: 'AOW & SVB',
    b: 'Staatspensioen (AOW) wordt uitbetaald door SVB. Aanvullend pensioen kan via werkgever lopen.',
    bEn: 'State pension (AOW) is paid by SVB. Supplementary pension may come through your employer.',
  },
  {
    h: 'Belastingdienst & Toeslagen',
    b: 'Inkomstenbelasting (jaarlijkse aangifte). Toeslagen: huur-, zorg-, kinderopvang-, kindgebondenbudget.',
    bEn: 'Income tax (annual return). Benefits: rent, healthcare, childcare, child-related budget.',
  },
  {
    h: 'Juridisch Loket',
    b: 'Gratis juridisch advies bij laag inkomen — ook bij onterecht ontslag of arbeidsconflict.',
    bEn: 'Free legal advice for low income — also for wrongful dismissal or employment disputes.',
  },
  {
    h: 'ZZP / KvK',
    b: 'Inschrijven bij Kamer van Koophandel. Zelf BTW-aangifte. Geen automatisch recht op WW of doorbetaling bij ziekte.',
    bEn: 'Register at Chamber of Commerce (KvK). File your own VAT return. No automatic right to WW or sick pay.',
  },
] as const satisfies readonly StudyNote[];
