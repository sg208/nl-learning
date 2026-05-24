import { describe, expect, it } from 'vitest';

import { QUESTION_BANK } from '~/data/knm/question-bank';
import { getQuestionNoteHeadings, getTopicNoteCoverage } from '~/data/knm/question-concept-map';
import { TOPICS } from '~/data/knm/topics';

describe('question-concept-map', () => {
  it('maps every question in the bank', () => {
    for (const topic of TOPICS) {
      for (const exam of ['1', '2', '3'] as const) {
        const questions = QUESTION_BANK[topic.id][exam];
        expect(questions).toHaveLength(5);
        questions.forEach((_q, index) => {
          const headings = getQuestionNoteHeadings(topic.id, exam, index);
          expect(headings.length).toBeGreaterThan(0);
        });
      }
    }
  });

  it('reports full coverage when all non-intro notes are linked', () => {
    for (const topic of TOPICS) {
      const { covered, total } = getTopicNoteCoverage(topic.id);
      expect(covered).toBe(total);
      expect(total).toBeGreaterThan(0);
    }
  });
});
