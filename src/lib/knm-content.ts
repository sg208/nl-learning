import { TOPICS } from '~/data/knm/topics';
import type { KnmLang } from '~/data/knm/ui';
import { getLocaleFromPath } from '~/lib/i18n';

const KNM_ROOT_ID = 'knm-app';

export const getKnmLang = (): KnmLang => {
  const root = document.getElementById(KNM_ROOT_ID);
  const fromDataset = root?.dataset.locale;
  if (fromDataset === 'nl' || fromDataset === 'en') return fromDataset;
  return getLocaleFromPath(window.location.pathname);
};

type Topic = (typeof TOPICS)[number];

export const getTopicLabel = (topic: Topic, lang: KnmLang): string =>
  lang === 'en' ? topic.labelEn : topic.label;

const STUDY_HEADING_EN: Record<string, string> = {
  Huisarts: 'GP (family doctor)',
  '112 vs 113 vs Huisarts': '112 vs 113 vs GP',
  Zorgverzekering: 'Health insurance',
  Apotheek: 'Pharmacy',
  Consultatiebureau: 'Child health clinic',
  Arbeidscontract: 'Employment contract',
  UWV: 'UWV (benefits agency)',
  'WW-uitkering': 'Unemployment benefit (WW)',
  Bijstand: 'Social assistance',
  'Belastingdienst & Toeslagen': 'Tax Authority & allowances',
  'ZZP / KvK': 'Self-employed / Chamber of Commerce',
  Gemeente: 'Municipality',
  DigiD: 'DigiD (digital ID)',
  BSN: 'BSN (citizen service number)',
  SVB: 'SVB (social insurance bank)',
  DUO: 'DUO (education finance)',
  'Juridisch Loket': 'Legal counter',
  'Sociale Huurwoning': 'Social rental housing',
  'Vrije Sector Huur': 'Private-sector rental',
  Huurtoeslag: 'Rent allowance',
  Huurcontract: 'Rental contract',
  Nutsvoorzieningen: 'Utilities',
  Huurcommissie: 'Rent Tribunal',
  Leerplicht: 'Compulsory education',
  Basisschool: 'Primary school',
  'Voortgezet Onderwijs': 'Secondary education',
  'MBO / HBO / WO': 'MBO / HBO / university',
  Kinderopvang: 'Childcare',
  'Constitutionele Monarchie': 'Constitutional monarchy',
  'Staten-Generaal': 'States General (parliament)',
  Verkiezingen: 'Elections',
  Grondwet: 'Constitution',
  'Trias Politica': 'Separation of powers',
  'Gouden Eeuw': 'Golden Age',
  'WO2 & Bezetting': 'WWII & occupation',
  Dodenherdenking: 'Remembrance Day',
  Deltawerken: 'Delta Works',
  Geografie: 'Geography',
  'Vader des Vaderlands': 'Father of the Fatherland',
  Waarden: 'Values',
  Feestdagen: 'Public holidays',
  Omgangsvormen: 'Social customs',
  Vrijwilligerswerk: 'Volunteering',
  Discriminatie: 'Discrimination',
};

export const getStudyHeading = (heading: string, lang: KnmLang): string =>
  lang === 'en' ? (STUDY_HEADING_EN[heading] ?? heading) : heading;

const WHO_LABEL_EN: Record<string, string> = {
  Huisarts: 'GP',
  Gemeente: 'Municipality',
  Belastingdienst: 'Tax Authority',
  'Juridisch Loket': 'Legal counter',
  Huurcommissie: 'Rent Tribunal',
  'Anti Discriminatie Bureau': 'Anti-Discrimination Bureau',
};

export const getWhoLabel = (who: string, lang: KnmLang): string =>
  lang === 'en' ? (WHO_LABEL_EN[who] ?? who) : who;

export const getLocalizedText = (nl: string, en: string | undefined, lang: KnmLang): string =>
  lang === 'en' ? (en ?? nl) : nl;
