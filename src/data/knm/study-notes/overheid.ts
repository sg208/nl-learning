import type { StudyNote } from './types';

export const overheidNotes = [
  {
    h: 'Gemeente',
    b: 'Inschrijving in BRP, paspoort/ID, vergunningen, bijstand. Binnen 5 dagen na verhuizing inschrijven.',
    bEn: 'Registration in BRP, passport/ID, permits, social assistance. Register within 5 days of moving.',
  },
  {
    h: 'DigiD',
    b: 'Digitale identiteit. Inloggen bij Belastingdienst, DUO, UWV, zorgportalen. Aanvragen via DigiD.nl.',
    bEn: 'Digital identity. Log in at Tax Authority, DUO, UWV, health portals. Apply at DigiD.nl.',
  },
  {
    h: 'BSN',
    b: 'Burgerservicenummer — uw uniek persoonsnummer. Nodig voor werk, zorg, bank, belasting.',
    bEn: 'Citizen service number — your unique personal number. Required for work, healthcare, bank, tax.',
  },
  {
    h: 'SVB',
    b: 'AOW (staatspensioen), kinderbijslag, ANW. Lange-termijn sociale voorzieningen.',
    bEn: 'AOW (state pension), child benefit, ANW (survivor benefit). Long-term social provisions.',
  },
  {
    h: 'DUO',
    b: 'Studiefinanciering, OV-kaart, en het inburgeringsexamen zelf.',
    bEn: 'Student finance, public transport card (OV-kaart), and the civic integration exam itself.',
  },
  {
    h: 'Juridisch Loket',
    b: 'Gratis juridisch advies voor mensen met laag inkomen.',
    bEn: 'Free legal advice for people with a low income.',
  },
] as const satisfies readonly StudyNote[];
