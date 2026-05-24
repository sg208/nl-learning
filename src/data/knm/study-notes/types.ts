export type StudyNote = {
  readonly h: string;
  readonly b: string;
  readonly bEn: string;
  readonly tip?: string;
  readonly tipEn?: string;
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

export type StudyNotes = {
  readonly [K in TopicId]: readonly StudyNote[];
};
