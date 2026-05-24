import { parseKnmHash, type KnmRoute } from '~/lib/knm-route';

import { buildExam, startExamTimer, stopExamTimer } from './exam-engine';
import { state } from './state';
import { EXAM_DURATION, type StatePatch } from './types';

import { TOPICS } from '~/data/knm/topics';

const examConfigMatches = (
  left: { examNumber: number; variant: number } | null,
  right: { examNumber: number; variant: number } | null,
): boolean =>
  Boolean(
    left &&
      right &&
      left.examNumber === right.examNumber &&
      left.variant === right.variant,
  );

const clearExamPatch = (): StatePatch => ({
  examConfig: null,
  exam: null,
  answers: {},
  current: 0,
  submitted: false,
  reviewing: false,
  timeLeft: EXAM_DURATION,
  timerHandle: null,
});

const patchForExamRoute = (route: KnmRoute): StatePatch => {
  if (!route.examConfig) return clearExamPatch();

  if (examConfigMatches(state.examConfig, route.examConfig) && state.exam) {
    return {
      submitted: route.submitted,
      reviewing: route.reviewing,
    };
  }

  stopExamTimer();
  return {
    examConfig: route.examConfig,
    exam: buildExam(route.examConfig.examNumber, route.examConfig.variant),
    answers: {},
    current: 0,
    submitted: route.submitted,
    reviewing: route.reviewing,
    timeLeft: EXAM_DURATION,
    timerHandle: null,
  };
};

export const routeToStatePatch = (route: KnmRoute): StatePatch => {
  if (route.tab === 'home') {
    stopExamTimer();
    return {
      tab: 'home',
      selectedTopic: null,
      scrollToNoteHeading: null,
      ...clearExamPatch(),
    };
  }

  if (route.tab === 'whowhat') {
    stopExamTimer();
    return {
      tab: 'whowhat',
      selectedTopic: null,
      scrollToNoteHeading: null,
      ...clearExamPatch(),
    };
  }

  if (route.tab === 'topics') {
    stopExamTimer();
    const topic = route.selectedTopicId
      ? (TOPICS.find((item) => item.id === route.selectedTopicId) ?? null)
      : null;
    return {
      tab: 'topics',
      selectedTopic: topic,
      scrollToNoteHeading: route.scrollToNoteHeading,
      ...clearExamPatch(),
    };
  }

  const examPatch = patchForExamRoute(route);
  return {
    tab: 'exam',
    selectedTopic: null,
    scrollToNoteHeading: null,
    ...examPatch,
  };
};

export const applyRouteFromHash = (): boolean => {
  const hash = window.location.hash;
  if (!hash) return false;

  const route = parseKnmHash(hash);
  if (!route) return false;

  const patch = routeToStatePatch(route);
  Object.assign(state, patch);

  if (state.examConfig && state.exam && !state.submitted) {
    startExamTimer();
  }

  return true;
};
