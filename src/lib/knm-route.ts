import type { KnmSnapshot } from '~/lib/knm-session';

const VARIANT_LETTERS = ['a', 'b', 'c'] as const;

export const KNM_ROUTE_HASH = {
  home: '',
  topics: '#topics',
  whowhat: '#whowhat',
  exam: '#exam',
} as const;

export type KnmRoute = {
  tab: KnmSnapshot['tab'];
  selectedTopicId: string | null;
  scrollToNoteHeading: string | null;
  examConfig: { examNumber: number; variant: number } | null;
  submitted: boolean;
  reviewing: boolean;
};

export const buildKnmHash = (snapshot: KnmSnapshot): string => {
  const { tab, selectedTopicId, scrollToNoteHeading, examConfig, submitted, reviewing } = snapshot;

  if (tab === 'exam' && examConfig) {
    const variant = VARIANT_LETTERS[examConfig.variant] ?? 'a';
    const base = `#exam/${examConfig.examNumber}/${variant}`;
    if (reviewing) return `${base}/review`;
    if (submitted) return `${base}/results`;
    return base;
  }

  if (tab === 'topics') {
    if (selectedTopicId && scrollToNoteHeading) {
      return `#topics/${selectedTopicId}/${encodeURIComponent(scrollToNoteHeading)}`;
    }
    if (selectedTopicId) return `#topics/${selectedTopicId}`;
    return KNM_ROUTE_HASH.topics;
  }

  if (tab === 'home') return KNM_ROUTE_HASH.home;
  if (tab === 'whowhat') return KNM_ROUTE_HASH.whowhat;
  if (tab === 'exam') return KNM_ROUTE_HASH.exam;
  return KNM_ROUTE_HASH.home;
};

const parseExamRoute = (parts: string[]): KnmRoute | null => {
  if (!parts[0]) return { tab: 'exam', selectedTopicId: null, scrollToNoteHeading: null, examConfig: null, submitted: false, reviewing: false };

  const examNumber = Number(parts[0]);
  if (!Number.isFinite(examNumber)) return null;

  const variant = VARIANT_LETTERS.indexOf((parts[1] ?? 'a').toLowerCase() as (typeof VARIANT_LETTERS)[number]);
  const examConfig = { examNumber, variant: variant >= 0 ? variant : 0 };

  if (parts[2] === 'review') {
    return { tab: 'exam', selectedTopicId: null, scrollToNoteHeading: null, examConfig, submitted: true, reviewing: true };
  }
  if (parts[2] === 'results') {
    return { tab: 'exam', selectedTopicId: null, scrollToNoteHeading: null, examConfig, submitted: true, reviewing: false };
  }

  return { tab: 'exam', selectedTopicId: null, scrollToNoteHeading: null, examConfig, submitted: false, reviewing: false };
};

export const parseKnmHash = (hash: string): KnmRoute | null => {
  const raw = hash.replace(/^#/, '').trim();
  if (!raw || raw === 'home') {
    return { tab: 'home', selectedTopicId: null, scrollToNoteHeading: null, examConfig: null, submitted: false, reviewing: false };
  }

  const [head, ...rest] = raw.split('/').map((part) => decodeURIComponent(part));

  if (head === 'topics') {
    return {
      tab: 'topics',
      selectedTopicId: rest[0] ?? null,
      scrollToNoteHeading: rest[1] ?? null,
      examConfig: null,
      submitted: false,
      reviewing: false,
    };
  }

  if (head === 'whowhat') {
    return { tab: 'whowhat', selectedTopicId: null, scrollToNoteHeading: null, examConfig: null, submitted: false, reviewing: false };
  }

  if (head === 'exam') return parseExamRoute(rest);

  if (head === 'home') {
    return { tab: 'home', selectedTopicId: null, scrollToNoteHeading: null, examConfig: null, submitted: false, reviewing: false };
  }

  return null;
};

export const knmRouteUrl = (pathname: string, search: string, snapshot: KnmSnapshot): string =>
  `${pathname}${search}${buildKnmHash(snapshot)}`;
