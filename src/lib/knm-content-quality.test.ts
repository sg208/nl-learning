import { describe, expect, it } from 'vitest';

import { KNM_FACTS } from '~/data/knm/knm-facts';
import { QUESTION_BANK } from '~/data/knm/question-bank';
import { STUDY_NOTES } from '~/data/knm/study-notes';
import type { StudyNote } from '~/data/knm/study-notes/types';
import { STUDY_HEADING_EN } from '~/data/knm/translations';
import { TOPICS } from '~/data/knm/topics';

const isNonEmpty = (value: string): boolean => value.trim().length > 0;

describe('KNM content quality', () => {
  it('uses current year-sensitive facts', () => {
    expect(KNM_FACTS.year).toBeGreaterThanOrEqual(2026);
    expect(KNM_FACTS.eigenRisico).toBe(385);
    expect(KNM_FACTS.socialeHuurGrens).toBeGreaterThan(900);
  });

  it('gives every study note NL/EN body text and EN heading', () => {
    for (const topic of TOPICS) {
      for (const note of STUDY_NOTES[topic.id]) {
        if (note.h === 'Eerste stappen') {
          expect(note.steps?.length, `${topic.id}/${note.h} missing steps`).toBeGreaterThan(0);
          expect(note.stepsEn?.length, `${topic.id}/${note.h} missing stepsEn`).toBe(
            note.steps?.length,
          );
        } else {
          expect(isNonEmpty(note.b ?? ''), `${topic.id}/${note.h} missing b`).toBe(true);
          expect(isNonEmpty(note.bEn ?? ''), `${topic.id}/${note.h} missing bEn`).toBe(true);
        }
        expect(STUDY_HEADING_EN[note.h], `${topic.id}/${note.h} missing EN heading`).toBeTruthy();
      }
    }
  });

  it('pairs optional tips in NL and EN', () => {
    for (const topic of TOPICS) {
      for (const note of STUDY_NOTES[topic.id] as readonly StudyNote[]) {
        const hasTip = Boolean(note.tip?.trim());
        const hasTipEn = Boolean(note.tipEn?.trim());
        expect(hasTip, `${topic.id}/${note.h} tip without tipEn`).toBe(hasTipEn);
        expect(hasTipEn, `${topic.id}/${note.h} tipEn without tip`).toBe(hasTip);
      }
    }
  });

  it('starts each topic with Eerste stappen', () => {
    for (const topic of TOPICS) {
      expect(STUDY_NOTES[topic.id][0]?.h).toBe('Eerste stappen');
    }
  });

  it('gives every question an English explanation', () => {
    for (const topic of TOPICS) {
      for (const exam of ['1', '2', '3'] as const) {
        for (const [index, question] of QUESTION_BANK[topic.id][exam].entries()) {
          expect(
            isNonEmpty(question.explanationEn ?? ''),
            `${topic.id} exam ${exam} Q${index + 1} missing explanationEn`,
          ).toBe(true);
        }
      }
    }
  });
});
