export type Question = {
  readonly variants: readonly string[];
  readonly options: readonly string[];
  readonly answer: number;
  readonly explanation: string;
  readonly explanationEn: string;
};

export type ExamKey = '1' | '2' | '3';

export type TopicQuestions = {
  readonly [K in ExamKey]: readonly Question[];
};

export type TopicId =
  | 'gezondheid'
  | 'werk'
  | 'overheid'
  | 'wonen'
  | 'onderwijs'
  | 'politiek'
  | 'geschiedenis'
  | 'cultuur';

export type QuestionBank = {
  readonly [K in TopicId]: TopicQuestions;
};
