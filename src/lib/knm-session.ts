export type KnmSnapshot = {
  tab: 'home' | 'topics' | 'whowhat' | 'exam';
  selectedTopicId: string | null;
  examConfig: { examNumber: number; variant: number } | null;
  exam: Array<{
    topic: string;
    topicLabel: string;
    topicColor: string;
    q: string;
    options: string[];
    answer: number;
    explanation: string;
    explanationEn?: string;
  }> | null;
  answers: Record<number, number>;
  current: number;
  submitted: boolean;
  timeLeft: number;
  reviewing: boolean;
};

export type LocaleHandoff = {
  scrollY: number;
  knm?: KnmSnapshot;
};

const STORAGE_KEY = 'nl-learning-locale-handoff';
const LIVE_SESSION_KEY = 'nl-learning-knm-live';

type KnmWindow = Window & {
  __nlLearningKnmSnapshot?: () => KnmSnapshot;
};

export const setKnmSnapshotReader = (reader: (() => KnmSnapshot) | undefined): void => {
  (window as KnmWindow).__nlLearningKnmSnapshot = reader;
};

export const persistKnmLiveSession = (knm: KnmSnapshot): void => {
  sessionStorage.setItem(LIVE_SESSION_KEY, JSON.stringify(knm));
};

export const readKnmLiveSession = (): KnmSnapshot | null => {
  const raw = sessionStorage.getItem(LIVE_SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as KnmSnapshot;
  } catch {
    return null;
  }
};

export const persistLocaleHandoff = (knm?: KnmSnapshot): void => {
  const payload: LocaleHandoff = {
    scrollY: window.scrollY,
    knm: knm ?? readKnmLiveSession() ?? undefined,
  };
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
};

export const saveLocaleHandoff = (): void => {
  const knm =
    (window as KnmWindow).__nlLearningKnmSnapshot?.() ?? readKnmLiveSession() ?? undefined;
  persistLocaleHandoff(knm);
};

export const consumeLocaleHandoff = (): LocaleHandoff | null => {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  sessionStorage.removeItem(STORAGE_KEY);
  try {
    return JSON.parse(raw) as LocaleHandoff;
  } catch {
    return null;
  }
};

export const restoreScroll = (scrollY: number): void => {
  requestAnimationFrame(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo({ top: scrollY, left: 0, behavior: 'auto' });
    root.style.scrollBehavior = previous;
  });
};
