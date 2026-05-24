import { describe, expect, it } from 'vitest';

import { buildKnmHash, parseKnmHash } from '~/lib/knm-route';
import type { KnmSnapshot } from '~/lib/knm-session';

const baseSnapshot = (): KnmSnapshot => ({
  tab: 'home',
  selectedTopicId: null,
  examConfig: null,
  exam: null,
  answers: {},
  current: 0,
  submitted: false,
  timeLeft: 2700,
  reviewing: false,
  scrollToNoteHeading: null,
});

describe('knm-route', () => {
  it('builds and parses tab hashes', () => {
    expect(buildKnmHash({ ...baseSnapshot(), tab: 'topics' })).toBe('#topics');
    expect(parseKnmHash('#topics')).toMatchObject({ tab: 'topics', selectedTopicId: null });
    expect(parseKnmHash('#whowhat')?.tab).toBe('whowhat');
    expect(parseKnmHash('#exam')?.tab).toBe('exam');
  });

  it('builds and parses topic detail hashes', () => {
    const hash = buildKnmHash({
      ...baseSnapshot(),
      tab: 'topics',
      selectedTopicId: 'werk',
    });
    expect(hash).toBe('#topics/werk');
    expect(parseKnmHash(hash)).toMatchObject({ tab: 'topics', selectedTopicId: 'werk' });
  });

  it('builds and parses study-note anchor hashes', () => {
    const hash = buildKnmHash({
      ...baseSnapshot(),
      tab: 'topics',
      selectedTopicId: 'gezondheid',
      scrollToNoteHeading: 'Huisarts',
    });
    expect(hash).toBe('#topics/gezondheid/Huisarts');
    expect(parseKnmHash(hash)).toMatchObject({
      tab: 'topics',
      selectedTopicId: 'gezondheid',
      scrollToNoteHeading: 'Huisarts',
    });
  });

  it('builds and parses exam hashes', () => {
    const playing = buildKnmHash({
      ...baseSnapshot(),
      tab: 'exam',
      examConfig: { examNumber: 2, variant: 1 },
    });
    expect(playing).toBe('#exam/2/b');

    const results = buildKnmHash({
      ...baseSnapshot(),
      tab: 'exam',
      examConfig: { examNumber: 1, variant: 0 },
      submitted: true,
    });
    expect(results).toBe('#exam/1/a/results');

    const review = buildKnmHash({
      ...baseSnapshot(),
      tab: 'exam',
      examConfig: { examNumber: 3, variant: 2 },
      submitted: true,
      reviewing: true,
    });
    expect(review).toBe('#exam/3/c/review');

    expect(parseKnmHash('#exam/2/b')).toMatchObject({
      tab: 'exam',
      examConfig: { examNumber: 2, variant: 1 },
      submitted: false,
    });
    expect(parseKnmHash('#exam/1/a/results')?.submitted).toBe(true);
    expect(parseKnmHash('#exam/3/c/review')?.reviewing).toBe(true);
  });
});
