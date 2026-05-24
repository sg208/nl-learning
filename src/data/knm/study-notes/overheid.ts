import type { StudyNote } from './types';

export const overheidNotes = [
  {
    h: 'Eerste stappen',
    steps: [
      'Binnen 5 dagen inschrijven bij gemeente — u krijgt een BSN.',
      'DigiD aanvragen via DigiD.nl voor online overheidsdiensten.',
      'Toeslagen (huur/zorg/kinderopvang) via Belastingdienst.',
      'Paspoort of ID? Gemeente.',
      'Juridische hulp nodig? Juridisch Loket.',
    ],
    stepsEn: [
      'Register at the municipality within 5 days — you receive a BSN.',
      'Apply for DigiD at DigiD.nl for online government services.',
      'Allowances (rent/healthcare/childcare) via Belastingdienst.',
      'Passport or ID? Municipality.',
      'Need legal help? Juridisch Loket (Legal Aid Desk).',
    ],
  },
  {
    h: 'Gemeente',
    b: 'Inschrijving in BRP, paspoort/ID, vergunningen, bijstand, WMO. Binnen 5 dagen na verhuizing inschrijven. Kan huisbezoek doen bij bijstand/inschrijving.',
    bEn: 'Registration in BRP, passport/ID, permits, social assistance, WMO. Register within 5 days of moving. May do home visits for assistance/registration checks.',
    tip: 'Gemeente: inschrijving, ID, bijstand. UWV: WW. Belastingdienst: toeslagen.',
    tipEn:
      'Municipality: registration, ID, social assistance. UWV: unemployment benefit. Tax Authority: allowances.',
  },
  {
    h: 'BRP & bezwaar',
    b: 'BRP = Basisregistratie Personen (gemeentelijke administratie). Oneens met besluit? Eerst schriftelijk bezwaar bij gemeente, daarna eventueel rechter.',
    bEn: 'BRP = Personal Records Database (municipal register). Disagree with a decision? Submit written objection to the municipality first, then court if needed.',
  },
  {
    h: 'DigiD',
    b: 'Digitale identiteit voor overheidswebsites. Aanvragen via DigiD.nl — activatiecode komt per post binnen enkele dagen.',
    bEn: 'Digital identity for government websites. Apply at DigiD.nl — activation code arrives by post within a few days.',
  },
  {
    h: 'BSN',
    b: 'Burgerservicenummer — uniek persoonsnummer bij BRP-inschrijving. Nodig voor werk, zorg, bank, belasting.',
    bEn: 'Citizen service number — unique personal number on BRP registration. Required for work, healthcare, bank, tax.',
    tip: 'BSN is uw nummer; DigiD is uw login — dat zijn twee verschillende dingen.',
    tipEn: 'BSN is your personal number; DigiD is your login — these are two different things.',
  },
  {
    h: 'Toeslagen (overzicht)',
    b: 'Huur-, zorg-, kinderopvangtoeslag en kindgebonden budget — allemaal via Belastingdienst. Problemen? Sociaal raadsman of Juridisch Loket.',
    bEn: 'Rent, healthcare, childcare benefits and child budget — all via Tax Authority. Problems? Social adviser or Legal Aid Desk.',
  },
  {
    h: 'SVB',
    b: 'AOW (staatspensioen), kinderbijslag, ANW. Lange-termijn sociale voorzieningen.',
    bEn: 'AOW (state pension), child benefit, ANW (survivor benefit). Long-term social provisions.',
  },
  {
    h: 'WMO',
    b: 'Wet maatschappelijke ondersteuning — via gemeente. Huishoudelijke hulp, vervoersvoorzieningen, dagbesteding voor kwetsbare inwoners.',
    bEn: 'Social Support Act — via municipality. Household help, transport facilities, day activities for vulnerable residents.',
  },
  {
    h: 'DUO',
    b: 'Studiefinanciering, OV-kaart, en het inburgeringsexamen (KNM).',
    bEn: 'Student finance, public transport card (OV-kaart), and the civic integration exam (KNM).',
  },
  {
    h: 'Juridisch Loket',
    b: 'Gratis juridisch advies voor mensen met laag inkomen — ook bij toeslagproblemen.',
    bEn: 'Free legal advice for people with a low income — also for benefit/allowance problems.',
  },
  {
    h: 'Burgemeester & gemeenteraad',
    b: 'Burgemeester: openbare orde, voorzitter gemeenteraad. Gemeenteraad: lokaal beleid, controleert college B&W.',
    bEn: 'Mayor: public order, chairs municipal council. Council: local policy, monitors executive board (B&W).',
  },
  {
    h: 'Stemrecht niet-Nederlanders',
    b: 'Gemeenteraadsverkiezingen: niet-Nederlanders na 5 jaar legaal verblijf (EU-burgers eerder). Tweede Kamer: alleen Nederlandse staatsburgers, 18+.',
    bEn: 'Municipal elections: non-Dutch after 5 years legal residence (EU citizens sooner). General elections: Dutch citizens only, age 18+.',
  },
] as const satisfies readonly StudyNote[];
