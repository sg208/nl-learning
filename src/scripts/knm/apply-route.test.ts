import { afterEach, describe, expect, it, vi } from 'vitest';

import { routeToStatePatch } from './apply-route';
import { startExamTimer } from './exam-engine';
import { state } from './state';

describe('routeToStatePatch', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('stops the running exam timer when the route returns to the exam picker', () => {
    vi.useFakeTimers();
    startExamTimer();
    const timeLeftBefore = state.timeLeft;

    routeToStatePatch({
      tab: 'exam',
      examConfig: null,
      submitted: false,
      reviewing: false,
      selectedTopicId: null,
      scrollToNoteHeading: null,
    } as never);
    vi.advanceTimersByTime(5000);

    expect(state.timeLeft).toBe(timeLeftBefore);
  });
});
