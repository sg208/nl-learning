import type { TOPICS } from '~/data/knm/topics';

export const TAB_IDS = ['home', 'topics', 'whowhat', 'exam'] as const;

export type TabId = (typeof TAB_IDS)[number];

export type KnmTopic = (typeof TOPICS)[number];

export type ExamQuestion = {
  topic: string;
  topicLabel: string;
  topicColor: string;
  q: string;
  options: string[];
  answer: number;
  explanation: string;
  explanationEn?: string;
};

export type AppState = {
  tab: TabId;
  selectedTopic: KnmTopic | null;
  examConfig: { examNumber: number; variant: number } | null;
  exam: ExamQuestion[] | null;
  answers: Record<number, number>;
  current: number;
  submitted: boolean;
  timeLeft: number;
  timerHandle: ReturnType<typeof setInterval> | null;
  reviewing: boolean;
};

export type StatePatch = Partial<AppState>;

export const EXAM_DURATION = 45 * 60;

export const MOBILE_TAB_NAV = '(max-width: 767px)';
