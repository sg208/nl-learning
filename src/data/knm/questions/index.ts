import { cultuurQuestions } from './cultuur';
import { gezondheidQuestions } from './gezondheid';
import { geschiedenisQuestions } from './geschiedenis';
import { onderwijsQuestions } from './onderwijs';
import { overheidQuestions } from './overheid';
import { politiekQuestions } from './politiek';
import type { QuestionBank } from './types';
import { werkQuestions } from './werk';
import { wonenQuestions } from './wonen';

export type { ExamKey, Question, QuestionBank, TopicId, TopicQuestions } from './types';

export const QUESTION_BANK = {
  gezondheid: gezondheidQuestions,
  werk: werkQuestions,
  overheid: overheidQuestions,
  wonen: wonenQuestions,
  onderwijs: onderwijsQuestions,
  politiek: politiekQuestions,
  geschiedenis: geschiedenisQuestions,
  cultuur: cultuurQuestions,
} as const satisfies QuestionBank;
