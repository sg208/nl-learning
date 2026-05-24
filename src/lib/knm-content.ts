import { STUDY_HEADING_EN, WHO_LABEL_EN } from '~/data/knm/translations';
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

export const getStudyHeading = (heading: string, lang: KnmLang): string =>
  lang === 'en' ? (STUDY_HEADING_EN[heading] ?? heading) : heading;

export const getWhoLabel = (who: string, lang: KnmLang): string =>
  lang === 'en' ? (WHO_LABEL_EN[who] ?? who) : who;

export const getLocalizedText = (nl: string, en: string | undefined, lang: KnmLang): string =>
  lang === 'en' ? (en ?? nl) : nl;
