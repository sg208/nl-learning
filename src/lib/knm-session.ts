const KNM_TABS = new Set(['home', 'topics', 'whowhat', 'exam']);

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
    noteHeadings?: readonly string[];
  }> | null;
  answers: Record<number, number>;
  current: number;
  submitted: boolean;
  timeLeft: number;
  reviewing: boolean;
  scrollToNoteHeading?: string | null;
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

// Storage access throws when the browser blocks it (privacy modes, blocked cookies).
// Progress is best-effort, so a blocked store reads as empty and writes are dropped.
const readSessionItem = (key: string): string | null => {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
};

const writeSessionItem = (key: string, value: string): void => {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    // Blocked or full: keep the app running without saved progress.
  }
};

const removeSessionItem = (key: string): void => {
  try {
    sessionStorage.removeItem(key);
  } catch {
    // Blocked: nothing was stored, so nothing to remove.
  }
};

export const persistKnmLiveSession = (knm: KnmSnapshot): void => {
  writeSessionItem(LIVE_SESSION_KEY, JSON.stringify(knm));
};

export const validateKnmSnapshot = (snapshot: unknown): snapshot is KnmSnapshot => {
  if (!snapshot || typeof snapshot !== 'object') return false;
  const candidate = snapshot as KnmSnapshot;
  if (!KNM_TABS.has(candidate.tab)) return false;
  if (typeof candidate.current !== 'number' || candidate.current < 0) return false;
  if (candidate.selectedTopicId !== null && typeof candidate.selectedTopicId !== 'string') {
    return false;
  }
  if (typeof candidate.submitted !== 'boolean' || typeof candidate.reviewing !== 'boolean') {
    return false;
  }
  if (typeof candidate.timeLeft !== 'number') return false;
  if (Array.isArray(candidate.exam) && candidate.current >= candidate.exam.length) return false;
  return true;
};

export const readKnmLiveSession = (): KnmSnapshot | null => {
  const raw = readSessionItem(LIVE_SESSION_KEY);
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    return validateKnmSnapshot(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

export const persistLocaleHandoff = (knm?: KnmSnapshot): void => {
  const payload: LocaleHandoff = {
    scrollY: window.scrollY,
    knm: knm ?? readKnmLiveSession() ?? undefined,
  };
  writeSessionItem(STORAGE_KEY, JSON.stringify(payload));
};

export const saveLocaleHandoff = (): void => {
  const knm =
    (window as KnmWindow).__nlLearningKnmSnapshot?.() ?? readKnmLiveSession() ?? undefined;
  persistLocaleHandoff(knm);
};

export const consumeLocaleHandoff = (): LocaleHandoff | null => {
  const raw = readSessionItem(STORAGE_KEY);
  if (!raw) return null;
  removeSessionItem(STORAGE_KEY);
  try {
    const parsed = JSON.parse(raw) as Partial<LocaleHandoff> | null;
    if (typeof parsed?.scrollY !== 'number') return null;
    return parsed as LocaleHandoff;
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
