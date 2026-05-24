import { beforeEach, describe, expect, it } from 'vitest';

import { buildExam } from '~/scripts/knm/exam-engine';

describe('buildExam', () => {
  beforeEach(() => {
    document.body.replaceChildren();
    const root = document.createElement('div');
    root.id = 'knm-app';
    root.dataset.locale = 'en';
    document.body.appendChild(root);
  });

  it('builds 40 questions across all topics', () => {
    const exam = buildExam(1, 0);
    expect(exam).toHaveLength(40);
    const topics = new Set(exam.map((question) => question.topic));
    expect(topics.size).toBe(8);
  });

  it('maps each question to a valid answer index', () => {
    const exam = buildExam(2, 1);
    for (const question of exam) {
      expect(question.answer).toBeGreaterThanOrEqual(0);
      expect(question.answer).toBeLessThan(question.options.length);
      expect(question.options).toContain(question.options[question.answer]);
    }
  });

  it('links each question to at least one study note', () => {
    const exam = buildExam(1, 0);
    for (const question of exam) {
      expect(question.noteHeadings.length).toBeGreaterThan(0);
    }
  });

  it('uses different wording variants from the question bank', () => {
    const examA = buildExam(1, 0);
    const examB = buildExam(1, 1);
    expect(examA[0]?.q).not.toBe(examB[0]?.q);
  });
});
