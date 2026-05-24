import { describe, expect, it } from 'vitest';

import { validateKnmSnapshot, type KnmSnapshot } from '~/lib/knm-session';

const validSnapshot: KnmSnapshot = {
  tab: 'exam',
  selectedTopicId: null,
  examConfig: { examNumber: 1, variant: 0 },
  exam: [
    {
      topic: 'gezondheid',
      topicLabel: 'Healthcare',
      topicColor: '#e63946',
      q: 'Sample question?',
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explanation: 'Because.',
      explanationEn: 'Because.',
    },
  ],
  answers: { 0: 2 },
  current: 0,
  submitted: false,
  timeLeft: 2700,
  reviewing: false,
};

describe('validateKnmSnapshot', () => {
  it('accepts a well-formed snapshot', () => {
    expect(validateKnmSnapshot(validSnapshot)).toBe(true);
  });

  it('rejects non-objects', () => {
    expect(validateKnmSnapshot(null)).toBe(false);
    expect(validateKnmSnapshot('exam')).toBe(false);
  });

  it('rejects invalid tab ids', () => {
    expect(validateKnmSnapshot({ ...validSnapshot, tab: 'invalid' })).toBe(false);
  });

  it('rejects current index beyond exam length', () => {
    expect(validateKnmSnapshot({ ...validSnapshot, current: 5 })).toBe(false);
  });

  it('rejects invalid selectedTopicId type', () => {
    expect(validateKnmSnapshot({ ...validSnapshot, selectedTopicId: 1 })).toBe(false);
  });
});
