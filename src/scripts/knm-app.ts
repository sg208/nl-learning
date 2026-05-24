import { TOPICS } from '../data/knm/topics';
import { QUESTION_BANK } from '../data/knm/question-bank';
import { STUDY_NOTES } from '../data/knm/study-notes';
import { WHO_DOES_WHAT } from '../data/knm/who-does-what';
import { UI } from '../data/knm/ui';
import {
  getKnmLang,
  getLocalizedText,
  getStudyHeading,
  getTopicLabel,
  getWhoLabel,
} from '../lib/knm-content';
import {
  consumeLocaleHandoff,
  persistKnmLiveSession,
  persistLocaleHandoff,
  readKnmLiveSession,
  restoreScroll,
  setKnmSnapshotReader,
  type KnmSnapshot,
} from '../lib/knm-session';

const appRoot = document.getElementById('knm-app');
if (!appRoot) throw new Error('KNM app root not found');
const root = appRoot;

// ── Helpers ──────────────────────────────────────────────────────────────────
function shuffle(a) {
  a = [...a];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildExam(examNumber, variantIdx) {
  const lang = getKnmLang();
  const exam = [];
  for (const topic of TOPICS) {
    for (const q of QUESTION_BANK[topic.id][String(examNumber)]) {
      const correct = q.options[q.answer];
      const opts = shuffle(q.options);
      exam.push({
        topic: topic.id,
        topicLabel: getTopicLabel(topic, lang),
        topicColor: topic.color,
        q: q.variants[variantIdx % q.variants.length],
        options: opts,
        answer: opts.indexOf(correct),
        explanation: q.explanation,
        explanationEn: q.explanationEn,
      });
    }
  }
  return shuffle(exam);
}

// ── State ─────────────────────────────────────────────────────────────────────
const state = {
  tab: 'home',
  selectedTopic: null,
  examConfig: null,
  exam: null,
  answers: {},
  current: 0,
  submitted: false,
  timeLeft: 45 * 60,
  timerHandle: null,
  reviewing: false,
};

const EXAM_DURATION = 45 * 60;

function stopExamTimer(): void {
  if (state.timerHandle) {
    clearInterval(state.timerHandle);
    state.timerHandle = null;
  }
}

function startExamTimer(): void {
  stopExamTimer();
  let tickCount = 0;
  const handle = setInterval(() => {
    state.timeLeft -= 1;
    tickCount += 1;
    if (tickCount % 15 === 0) {
      persistKnmLiveSession(getKnmSnapshot());
    }
    if (state.timeLeft <= 0) {
      clearInterval(handle);
      state.timerHandle = null;
      setState({ submitted: true, timerHandle: null });
      announceKnm(
        getKnmLang() === 'nl'
          ? 'Tijd is om. Resultaten staan klaar.'
          : 'Time is up. Results are ready.',
      );
      return;
    }
    const timerEl = document.getElementById('timer-display');
    if (timerEl) {
      const m = Math.floor(state.timeLeft / 60);
      const s = state.timeLeft % 60;
      timerEl.textContent = `⏱ ${m}:${String(s).padStart(2, '0')}`;
      timerEl.style.color = state.timeLeft < 300 ? '#e63946' : '#2a9d8f';
    }
  }, 1000);
  state.timerHandle = handle;
}

function refreshExamTopicLabels(): void {
  if (!state.exam) return;
  const lang = getKnmLang();
  state.exam = state.exam.map((question) => {
    const topic = TOPICS.find((item) => item.id === question.topic);
    if (!topic) return question;
    return { ...question, topicLabel: getTopicLabel(topic, lang) };
  });
}

const getKnmSnapshot = (): KnmSnapshot => ({
  tab: state.tab,
  selectedTopicId: state.selectedTopic?.id ?? null,
  examConfig: state.examConfig,
  exam: state.exam,
  answers: state.answers,
  current: state.current,
  submitted: state.submitted,
  timeLeft: state.timeLeft,
  reviewing: state.reviewing,
});

function applyKnmSnapshot(snapshot: KnmSnapshot): void {
  state.tab = snapshot.tab;
  state.selectedTopic = snapshot.selectedTopicId
    ? (TOPICS.find((topic) => topic.id === snapshot.selectedTopicId) ?? null)
    : null;
  state.examConfig = snapshot.examConfig;
  state.exam = snapshot.exam;
  state.answers = snapshot.answers;
  state.current = snapshot.current;
  state.submitted = snapshot.submitted;
  state.timeLeft = snapshot.timeLeft;
  state.reviewing = snapshot.reviewing;
  state.timerHandle = null;
  refreshExamTopicLabels();
  if (state.examConfig && state.exam && !state.submitted) {
    startExamTimer();
  }
}

const TAB_IDS = ['home', 'topics', 'whowhat', 'exam'] as const;
type TabId = (typeof TAB_IDS)[number];

let focusTabAfterRender: TabId | null = null;
let stickyTabsVisible = false;
let tabsObserver: IntersectionObserver | null = null;
let stickyTabsResizeObserver: ResizeObserver | null = null;
let tabNavMedia: MediaQueryList | null = null;

const MOBILE_TAB_NAV = '(max-width: 767px)';

function isMobileTabNav(): boolean {
  return window.matchMedia(MOBILE_TAB_NAV).matches;
}

function getTabDefs(): Array<{ id: TabId; label: string }> {
  const u = t();
  return [
    { id: 'home', label: u.tabHome },
    { id: 'topics', label: u.tabTopics },
    { id: 'whowhat', label: u.tabWho },
    { id: 'exam', label: u.tabExam },
  ];
}

let navSheetTriggerId: string | null = null;

function setNavSheetExpanded(triggerId: string | null, open: boolean): void {
  for (const trigger of root.querySelectorAll<HTMLButtonElement>('.tab-select-trigger')) {
    trigger.setAttribute('aria-expanded', trigger.id === triggerId && open ? 'true' : 'false');
  }
}

function closeNavSheet(): void {
  const dialog = document.getElementById('knm-nav-sheet') as HTMLDialogElement | null;
  if (dialog?.open) dialog.close();
}

function openNavSheet(triggerId: string): void {
  if (!isMobileTabNav()) return;
  const dialog = document.getElementById('knm-nav-sheet') as HTMLDialogElement | null;
  const trigger = document.getElementById(triggerId) as HTMLButtonElement | null;
  if (!dialog || !trigger || trigger.disabled) return;

  navSheetTriggerId = triggerId;
  dialog.removeAttribute('hidden');
  dialog.showModal();
  setNavSheetExpanded(triggerId, true);
  dialog.querySelector<HTMLButtonElement>('.knm-nav-sheet-option.active')?.focus();
}

function bindNavSheet(dialog: HTMLDialogElement): void {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeNavSheet();
  });
  dialog.addEventListener('close', () => {
    dialog.setAttribute('hidden', '');
    setNavSheetExpanded(null, false);
    document.getElementById(navSheetTriggerId ?? '')?.focus();
    navSheetTriggerId = null;
  });
}

function renderNavSheet(): HTMLDialogElement {
  const u = t();
  const dialog = el('dialog', {
    id: 'knm-nav-sheet',
    className: 'knm-nav-sheet',
    hidden: true,
    ariaLabelledby: 'knm-nav-sheet-title',
  }) as HTMLDialogElement;

  const panel = el('div', { className: 'knm-nav-sheet-panel' });
  const header = el('div', { className: 'knm-nav-sheet-header' });
  header.appendChild(
    el('h2', { id: 'knm-nav-sheet-title', className: 'knm-nav-sheet-title' }, u.tabNavLabel),
  );
  header.appendChild(
    el(
      'button',
      {
        type: 'button',
        className: 'knm-nav-sheet-close',
        ariaLabel: u.tabNavClose,
        onClick: closeNavSheet,
      },
      '×',
    ),
  );
  panel.appendChild(header);

  const list = el('div', {
    className: 'knm-nav-sheet-list',
    role: 'listbox',
    ariaLabel: u.tabNavLabel,
  });
  for (const tb of getTabDefs()) {
    const isSelected = state.tab === tb.id;
    list.appendChild(
      el(
        'button',
        {
          type: 'button',
          role: 'option',
          className: 'knm-nav-sheet-option' + (isSelected ? ' active' : ''),
          ariaSelected: isSelected,
          onClick: () => {
            closeNavSheet();
            if (tb.id !== state.tab) resetTabViewState(tb.id);
          },
        },
        tb.label,
      ),
    );
  }
  panel.appendChild(list);
  dialog.appendChild(panel);
  bindNavSheet(dialog);
  return dialog;
}

function isValidSnapshot(snapshot: unknown): snapshot is KnmSnapshot {
  if (!snapshot || typeof snapshot !== 'object') return false;
  const candidate = snapshot as KnmSnapshot;
  if (!TAB_IDS.includes(candidate.tab as TabId)) return false;
  if (typeof candidate.current !== 'number' || candidate.current < 0) return false;
  if (Array.isArray(candidate.exam) && candidate.current >= candidate.exam.length) return false;
  return true;
}

function resetTabViewState(tab: TabId): void {
  stopExamTimer();
  setState({
    tab,
    selectedTopic: null,
    examConfig: null,
    exam: null,
    answers: {},
    current: 0,
    submitted: false,
    reviewing: false,
    timeLeft: EXAM_DURATION,
    timerHandle: null,
  });
}

function handleTabListKeydown(event: KeyboardEvent): void {
  const currentIndex = TAB_IDS.indexOf(state.tab as TabId);
  if (currentIndex === -1) return;

  let nextIndex: number | null = null;
  switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowUp':
      nextIndex = currentIndex === 0 ? TAB_IDS.length - 1 : currentIndex - 1;
      break;
    case 'ArrowRight':
    case 'ArrowDown':
      nextIndex = currentIndex === TAB_IDS.length - 1 ? 0 : currentIndex + 1;
      break;
    case 'Home':
      nextIndex = 0;
      break;
    case 'End':
      nextIndex = TAB_IDS.length - 1;
      break;
    default:
      return;
  }

  event.preventDefault();
  const nextTab = TAB_IDS[nextIndex];
  focusTabAfterRender = nextTab;
  resetTabViewState(nextTab);
}

function getSiteHeaderHeight(): number {
  const header = document.querySelector('body > header');
  return header?.getBoundingClientRect().height ?? 72;
}

function isHeaderInnerInView(headerInner: Element, siteTop: number): boolean {
  return headerInner.getBoundingClientRect().bottom > siteTop;
}

function syncTabNavA11y(stickyVisible: boolean): void {
  const inlineNav = root.querySelector('.tab-nav-inline');
  const stickyBar = root.querySelector('.tabs-sticky');
  const panel = document.getElementById('knm-tabpanel');
  if (!inlineNav || !stickyBar || !panel) return;

  stickyTabsVisible = stickyVisible;
  stickyBar.hidden = !stickyVisible;
  stickyBar.setAttribute('aria-hidden', stickyVisible ? 'false' : 'true');
  inlineNav.setAttribute('aria-hidden', stickyVisible ? 'true' : 'false');

  if (isMobileTabNav()) {
    panel.setAttribute('aria-labelledby', stickyVisible ? 'knm-nav-sticky' : 'knm-nav-inline');
    for (const trigger of root.querySelectorAll<HTMLButtonElement>('.tab-select-trigger')) {
      const inSticky = Boolean(trigger.closest('.tabs-sticky'));
      trigger.disabled = stickyVisible ? !inSticky : inSticky;
    }
    for (const tablist of root.querySelectorAll<HTMLElement>('.tabs-desktop')) {
      tablist.setAttribute('aria-hidden', 'true');
    }
    return;
  }

  for (const trigger of root.querySelectorAll<HTMLButtonElement>('.tab-select-trigger')) {
    trigger.disabled = true;
  }
  for (const tablist of root.querySelectorAll<HTMLElement>('.tabs-desktop')) {
    tablist.removeAttribute('aria-hidden');
  }

  panel.setAttribute(
    'aria-labelledby',
    stickyVisible ? `knm-tab-sticky-${state.tab}` : `knm-tab-${state.tab}`,
  );

  for (const btn of root.querySelectorAll<HTMLButtonElement>('.tab-btn')) {
    const inSticky = Boolean(btn.closest('.tabs-sticky'));
    const selected = btn.getAttribute('aria-selected') === 'true';
    if (stickyVisible) {
      btn.tabIndex = inSticky && selected ? 0 : -1;
      if (inSticky) btn.setAttribute('aria-controls', 'knm-tabpanel');
      else btn.removeAttribute('aria-controls');
    } else {
      btn.tabIndex = !inSticky && selected ? 0 : -1;
      if (!inSticky) btn.setAttribute('aria-controls', 'knm-tabpanel');
      else btn.removeAttribute('aria-controls');
    }
  }
}

function setupStickyTabs(): void {
  tabsObserver?.disconnect();
  const headerInner = root.querySelector('.header-inner');
  const stickyBar = root.querySelector('.tabs-sticky');
  if (!headerInner || !stickyBar) return;

  const siteTop = getSiteHeaderHeight();
  document.documentElement.style.setProperty('--site-header-height', `${siteTop}px`);
  root.style.setProperty('--knm-sticky-top', `${siteTop}px`);
  stickyBar.style.setProperty('--knm-sticky-top', `${siteTop}px`);

  tabsObserver = new IntersectionObserver(
    ([entry]) => {
      syncTabNavA11y(!entry.isIntersecting);
    },
    { rootMargin: `-${siteTop}px 0px 0px 0px`, threshold: 0 },
  );
  tabsObserver.observe(headerInner);
  syncTabNavA11y(!isHeaderInnerInView(headerInner, siteTop));
}

function handleTabNavViewportChange(): void {
  closeNavSheet();
  setupStickyTabs();
}

function bindTabNavLayout(): void {
  const header = document.querySelector('body > header');
  if (!header) return;
  stickyTabsResizeObserver?.disconnect();
  stickyTabsResizeObserver = new ResizeObserver(() => setupStickyTabs());
  stickyTabsResizeObserver.observe(header);

  tabNavMedia?.removeEventListener('change', handleTabNavViewportChange);
  tabNavMedia = window.matchMedia(MOBILE_TAB_NAV);
  tabNavMedia.addEventListener('change', handleTabNavViewportChange);
}

function buildTabDropdown(mode: 'inline' | 'sticky'): HTMLDivElement {
  const u = t();
  const triggerId = mode === 'inline' ? 'knm-nav-inline' : 'knm-nav-sticky';
  const current = getTabDefs().find((tb) => tb.id === state.tab);
  const wrap = el('div', {
    className: 'tab-dropdown',
    role: 'navigation',
    ariaLabel: u.tabNavLabel,
  });
  wrap.appendChild(
    el(
      'button',
      {
        id: triggerId,
        type: 'button',
        className: 'tab-select-trigger',
        ariaControls: 'knm-tabpanel',
        ariaHaspopup: 'dialog',
        ariaExpanded: false,
        onClick: () => openNavSheet(triggerId),
      },
      current?.label ?? u.tabHome,
    ),
  );
  return wrap;
}

function buildTabList(mode: 'inline' | 'sticky'): HTMLDivElement {
  const u = t();
  const idPrefix = mode === 'inline' ? 'knm-tab' : 'knm-tab-sticky';
  const tabs = el('div', {
    className: 'tabs tabs-desktop',
    role: 'tablist',
    ariaLabel: u.tabNavLabel,
    onKeydown: handleTabListKeydown,
  });
  for (const tb of getTabDefs()) {
    const isSelected = state.tab === tb.id;
    tabs.appendChild(
      el(
        'button',
        {
          type: 'button',
          role: 'tab',
          id: `${idPrefix}-${tb.id}`,
          className: 'tab-btn' + (isSelected ? ' active' : ''),
          ariaSelected: isSelected,
          ariaControls: 'knm-tabpanel',
          tabIndex: isSelected ? 0 : -1,
          onClick: () => resetTabViewState(tb.id),
        },
        tb.label,
      ),
    );
  }
  return tabs;
}

function buildTabNav(mode: 'inline' | 'sticky'): HTMLDivElement {
  const nav = el('div', {
    className: mode === 'inline' ? 'tab-nav tab-nav-inline' : 'tab-nav',
  });
  nav.appendChild(buildTabDropdown(mode));
  nav.appendChild(buildTabList(mode));
  return nav;
}

function setState(patch) {
  Object.assign(state, patch);
  render();
  setKnmSnapshotReader(getKnmSnapshot);
  persistKnmLiveSession(getKnmSnapshot());
}

function announceKnm(message: string): void {
  const region = document.getElementById('knm-live');
  if (region) region.textContent = message;
}

function render() {
  while (root.firstChild) root.removeChild(root.firstChild);
  root.appendChild(
    el('div', {
      id: 'knm-live',
      className: 'sr-only',
      ariaLive: 'polite',
      ariaAtomic: true,
    }),
  );
  root.appendChild(renderHeader());
  root.appendChild(renderTabsSticky());
  const main = el('div', {
    className: 'main',
    role: 'tabpanel',
    id: 'knm-tabpanel',
    ariaLabelledby: `knm-tab-${state.tab}`,
  });
  if (state.tab === 'home') main.appendChild(renderHome());
  else if (state.tab === 'topics')
    main.appendChild(state.selectedTopic ? renderTopicDetail() : renderTopicsList());
  else if (state.tab === 'whowhat') main.appendChild(renderWhoDoesWhat());
  else if (state.tab === 'exam')
    main.appendChild(state.examConfig ? renderExam() : renderExamPicker());
  root.appendChild(main);
  root.appendChild(renderNavSheet());
  setupStickyTabs();

  if (focusTabAfterRender) {
    if (isMobileTabNav()) {
      document.getElementById(stickyTabsVisible ? 'knm-nav-sticky' : 'knm-nav-inline')?.focus();
    } else {
      const prefix = stickyTabsVisible ? 'knm-tab-sticky' : 'knm-tab';
      document.getElementById(`${prefix}-${focusTabAfterRender}`)?.focus();
    }
    focusTabAfterRender = null;
  }
}

const EL_PROPS = new Set([
  'id',
  'type',
  'role',
  'tabIndex',
  'disabled',
  'hidden',
  'value',
  'selected',
  'title',
  'lang',
  'href',
  'hreflang',
  'ariaLabel',
  'ariaSelected',
  'ariaControls',
  'ariaLabelledby',
  'ariaLive',
  'ariaAtomic',
  'ariaCurrent',
  'ariaHidden',
  'ariaDisabled',
]);

function el(tag, props = {}, ...children) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === 'className') e.className = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(e.style, v);
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (EL_PROPS.has(k) || k.startsWith('aria') || k.startsWith('data')) e[k] = v;
  }
  for (const c of children) {
    if (c == null) continue;
    e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return e;
}

function t() {
  return UI[getKnmLang()];
}

// ── Header ────────────────────────────────────────────────────────────────────
function renderHeader() {
  const u = t();
  const wrap = el('div', { className: 'header' });
  const inner = el('div', { className: 'header-inner' });
  const top = el('div', { className: 'header-top' });

  const titleDiv = el('div', { className: 'header-title' });
  titleDiv.appendChild(el('div', { className: 'tagline' }, u.tagline));
  titleDiv.appendChild(el('h1', { className: 'app-title' }, u.appTitle));
  titleDiv.appendChild(el('div', { className: 'subtitle' }, u.subtitle));
  top.appendChild(titleDiv);

  inner.appendChild(top);
  inner.appendChild(buildTabNav('inline'));
  wrap.appendChild(inner);
  return wrap;
}

function renderTabsSticky(): HTMLDivElement {
  const wrap = el('div', { className: 'tabs-sticky', hidden: true, ariaHidden: true });
  const inner = el('div', { className: 'tabs-sticky-inner' });
  inner.appendChild(buildTabNav('sticky'));
  wrap.appendChild(inner);
  return wrap;
}

// ── Home ──────────────────────────────────────────────────────────────────────
function renderHome() {
  const u = t();
  const div = el('div');

  // Stats
  const statsCard = el('div', { className: 'card', style: { marginBottom: '16px' } });
  statsCard.appendChild(
    el(
      'div',
      {
        className: 'mono red',
        style: { fontSize: '0.8125rem', letterSpacing: '1.5px', marginBottom: '10px' },
      },
      u.examFacts,
    ),
  );
  const grid = el('div', { className: 'grid4' });
  const stats = [
    { v: '40', l: u.statQuestions },
    { v: '45', l: u.statMinutes },
    { v: '26', l: u.statPass },
    { v: '9', l: u.statVersions },
  ];
  for (const s of stats) {
    const cell = el('div', { className: 'text-center' });
    cell.appendChild(
      el('div', { style: { fontSize: '1.75rem', fontWeight: '700', color: '#fff' } }, s.v),
    );
    cell.appendChild(
      el(
        'div',
        {
          className: 'muted',
          style: { fontSize: '0.875rem', lineHeight: '1.4', letterSpacing: '0.02em' },
        },
        s.l,
      ),
    );
    grid.appendChild(cell);
  }
  statsCard.appendChild(grid);
  div.appendChild(statsCard);

  // Action cards
  const actions = [
    {
      icon: '📚',
      title: u.cardTopicsTitle,
      desc: u.cardTopicsDesc,
      color: '#2a9d8f',
      tab: 'topics',
    },
    { icon: '🗂️', title: u.cardWhoTitle, desc: u.cardWhoDesc, color: '#457b9d', tab: 'whowhat' },
    { icon: '📝', title: u.cardExamTitle, desc: u.cardExamDesc, color: '#e63946', tab: 'exam' },
  ];
  for (const a of actions) {
    const btn = el('button', {
      style: {
        background: '#1a1f2e',
        border: `1px solid #2a2f3e`,
        borderLeft: `4px solid ${a.color}`,
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'left',
        color: '#e8e0d0',
        fontFamily: 'inherit',
        display: 'flex',
        gap: '14px',
        alignItems: 'center',
        width: '100%',
        marginBottom: '10px',
      },
      onClick: () => resetTabViewState(a.tab as TabId),
    });
    btn.appendChild(el('span', { style: { fontSize: '1.75rem' } }, a.icon));
    const info = el('div', { style: { flex: '1' } });
    info.appendChild(
      el(
        'div',
        { style: { fontSize: '1.125rem', fontWeight: '700', color: '#fff', marginBottom: '4px' } },
        a.title,
      ),
    );
    info.appendChild(
      el('div', { className: 'muted', style: { fontSize: '1rem', lineHeight: '1.55' } }, a.desc),
    );
    btn.appendChild(info);
    btn.appendChild(el('span', { className: 'muted', style: { fontSize: '1.25rem' } }, '›'));
    div.appendChild(btn);
  }

  div.appendChild(
    el(
      'div',
      {
        style: {
          marginTop: '16px',
          fontSize: '0.9375rem',
          color: 'var(--muted)',
          lineHeight: '1.65',
        },
      },
      u.homeTip,
    ),
  );
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
}

// ── Topics List ───────────────────────────────────────────────────────────────
function renderTopicsList() {
  const u = t();
  const lang = getKnmLang();
  const div = el('div');
  div.appendChild(
    el(
      'p',
      {
        className: 'muted',
        style: { fontSize: '0.9375rem', lineHeight: '1.55', marginBottom: '1rem' },
      },
      u.topicsIntro,
    ),
  );

  const pColor = (p) => {
    const map = {
      'MEEST GETEST': '#e63946',
      'MOST TESTED': '#e63946',
      HOOG: '#2a9d8f',
      HIGH: '#2a9d8f',
      MIDDEL: '#457b9d',
      MEDIUM: '#457b9d',
    };
    return map[p] || '#6d6875';
  };

  for (const topic of TOPICS) {
    const priority = u.priorityLabels[topic.id];
    const pc = pColor(priority);
    const btn = el('button', {
      style: {
        background: '#1a1f2e',
        border: `1px solid #2a2f3e`,
        borderLeft: `4px solid ${topic.color}`,
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'left',
        color: '#e8e0d0',
        fontFamily: 'inherit',
        display: 'flex',
        gap: '14px',
        alignItems: 'center',
        width: '100%',
        marginBottom: '10px',
      },
      onClick: () => setState({ selectedTopic: topic }),
    });
    btn.appendChild(el('span', { style: { fontSize: '1.75rem' } }, topic.icon));
    const info = el('div', { style: { flex: '1' } });
    const titleRow = el('div', {
      style: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: '4px',
      },
    });
    titleRow.appendChild(
      el(
        'span',
        { style: { fontSize: '1.125rem', fontWeight: '700', color: '#fff' } },
        getTopicLabel(topic, lang),
      ),
    );
    const badge = el(
      'span',
      {
        style: {
          fontSize: '0.6875rem',
          padding: '3px 8px',
          letterSpacing: '0.08em',
          fontFamily: 'monospace',
          background: pc + '22',
          color: pc,
          borderRadius: '4px',
        },
      },
      priority,
    );
    titleRow.appendChild(badge);
    info.appendChild(titleRow);
    info.appendChild(
      el(
        'div',
        { className: 'muted', style: { fontSize: '1rem', lineHeight: '1.55' } },
        u.topicsSubtitle(STUDY_NOTES[topic.id].length),
      ),
    );
    btn.appendChild(info);
    btn.appendChild(el('span', { className: 'muted', style: { fontSize: '1.25rem' } }, '›'));
    div.appendChild(btn);
  }
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
}

// ── Topic Detail ──────────────────────────────────────────────────────────────
function renderTopicDetail() {
  const topic = state.selectedTopic;
  const u = t();
  const lang = getKnmLang();
  const div = el('div');
  div.appendChild(
    el(
      'button',
      { className: 'back-btn', onClick: () => setState({ selectedTopic: null }) },
      u.backToTopics,
    ),
  );

  const titleRow = el('div', {
    style: { display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '1rem' },
  });
  titleRow.appendChild(el('span', { style: { fontSize: '2rem' } }, topic.icon));
  titleRow.appendChild(
    el(
      'h2',
      { style: { margin: '0', fontSize: '1.375rem', color: '#fff', lineHeight: '1.3' } },
      getTopicLabel(topic, lang),
    ),
  );
  div.appendChild(titleRow);

  for (const n of STUDY_NOTES[topic.id]) {
    const card = el('div', { className: 'card' });
    card.appendChild(
      el(
        'div',
        {
          className: 'mono',
          style: {
            fontSize: '0.8125rem',
            fontWeight: '700',
            color: topic.color,
            marginBottom: '8px',
            letterSpacing: '0.08em',
          },
        },
        getStudyHeading(n.h, lang),
      ),
    );
    card.appendChild(
      el(
        'div',
        { className: 'dim', style: { fontSize: '1rem', lineHeight: '1.65' } },
        getLocalizedText(n.b, n.bEn, lang),
      ),
    );
    div.appendChild(card);
  }
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
}

// ── Who Does What ─────────────────────────────────────────────────────────────
function renderWhoDoesWhat() {
  const u = t();
  const lang = getKnmLang();
  const div = el('div');
  div.appendChild(
    el(
      'p',
      {
        className: 'muted',
        style: { fontSize: '0.9375rem', lineHeight: '1.55', marginBottom: '1rem' },
      },
      u.whoIntro,
    ),
  );

  for (const row of WHO_DOES_WHAT) {
    const card = el('div', {
      className: 'card',
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(7.5rem,9rem) 1fr',
        gap: '12px',
        alignItems: 'start',
      },
    });
    card.appendChild(
      el(
        'span',
        {
          className: 'mono red',
          style: { fontSize: '1rem', fontWeight: '700', lineHeight: '1.45' },
        },
        getWhoLabel(row.who, lang),
      ),
    );
    card.appendChild(
      el(
        'span',
        { className: 'dim', style: { fontSize: '1rem', lineHeight: '1.65' } },
        getLocalizedText(row.what, row.whatEn, lang),
      ),
    );
    div.appendChild(card);
  }

  const highlight = el('div', {
    style: {
      marginTop: '1rem',
      background: '#1a1f2e',
      border: '1px solid #e63946',
      borderRadius: '8px',
      padding: '16px',
    },
  });
  highlight.appendChild(
    el(
      'div',
      {
        className: 'mono red',
        style: { fontSize: '0.8125rem', letterSpacing: '0.08em', marginBottom: '8px' },
      },
      u.whoHighlight,
    ),
  );
  const body = el('div', { className: 'dim', style: { fontSize: '1rem', lineHeight: '1.65' } });
  const uwvLine = el('p', { style: { marginBottom: '8px' } });
  uwvLine.appendChild(el('strong', { className: 'bold-highlight' }, u.whoUWVBold + ': '));
  uwvLine.appendChild(document.createTextNode(u.whoUWV.replace(u.whoUWVBold + ': ', '')));
  const gpLine = el('p');
  gpLine.appendChild(el('strong', { className: 'bold-highlight' }, u.whoGPBold + ': '));
  gpLine.appendChild(document.createTextNode(u.whoGP.replace(u.whoGPBold + ': ', '')));
  body.appendChild(uwvLine);
  body.appendChild(gpLine);
  highlight.appendChild(body);
  div.appendChild(highlight);
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
}

// ── Exam Picker ───────────────────────────────────────────────────────────────
function renderExamPicker() {
  const u = t();
  const div = el('div');

  const fmtCard = el('div', { className: 'card', style: { marginBottom: '16px' } });
  fmtCard.appendChild(
    el(
      'div',
      {
        className: 'mono red',
        style: { fontSize: '0.8125rem', letterSpacing: '0.08em', marginBottom: '10px' },
      },
      u.formatLabel,
    ),
  );
  const ul = el('ul', {
    className: 'dim',
    style: { fontSize: '1rem', lineHeight: '1.65', paddingLeft: '1.25rem' },
  });
  for (const item of u.formatItems) {
    const li = el('li');
    if (item.bold) {
      li.appendChild(el('strong', { style: { color: '#fff' } }, item.bold));
      li.appendChild(document.createTextNode(item.rest));
    } else {
      li.appendChild(document.createTextNode(item.rest));
    }
    ul.appendChild(li);
  }
  fmtCard.appendChild(ul);
  div.appendChild(fmtCard);

  div.appendChild(
    el(
      'div',
      {
        className: 'mono muted',
        style: { fontSize: '0.8125rem', letterSpacing: '0.08em', marginBottom: '10px' },
      },
      u.chooseLabel,
    ),
  );

  for (const n of [1, 2, 3]) {
    const card = el('div', { className: 'card', style: { marginBottom: '10px' } });
    card.appendChild(
      el(
        'div',
        {
          style: {
            fontSize: '1.125rem',
            fontWeight: '700',
            color: '#fff',
            marginBottom: '6px',
            lineHeight: '1.35',
          },
        },
        u.examTitle(n),
      ),
    );
    card.appendChild(
      el(
        'div',
        {
          className: 'muted',
          style: { fontSize: '0.9375rem', lineHeight: '1.55', marginBottom: '12px' },
        },
        u.examDesc[n],
      ),
    );
    const btnRow = el('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } });
    for (let i = 0; i < 3; i++) {
      const letter = ['A', 'B', 'C'][i];
      btnRow.appendChild(
        el(
          'button',
          {
            style: {
              background: '#e63946',
              color: '#fff',
              border: 'none',
              padding: '10px 16px',
              fontSize: '0.9375rem',
              fontFamily: 'inherit',
              borderRadius: '6px',
              fontWeight: '600',
              minHeight: '3rem',
            },
            onClick: () => {
              const exam = buildExam(n, i);
              if (state.timerHandle) clearInterval(state.timerHandle);
              state.examConfig = { examNumber: n, variant: i };
              state.exam = exam;
              state.answers = {};
              state.current = 0;
              state.submitted = false;
              state.reviewing = false;
              state.timeLeft = 45 * 60;
              startExamTimer();
              setState({});
            },
          },
          u.wordingBtn(letter),
        ),
      );
    }
    card.appendChild(btnRow);
    div.appendChild(card);
  }

  div.appendChild(
    el(
      'div',
      {
        style: {
          marginTop: '12px',
          fontSize: '0.9375rem',
          color: 'var(--muted)',
          lineHeight: '1.65',
        },
      },
      u.pickerTip,
    ),
  );
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
}

// ── Mock Exam ─────────────────────────────────────────────────────────────────
function renderExam() {
  if (state.submitted) return renderResults();
  const u = t();
  const { exam, answers, current, timeLeft, examConfig } = state;
  const q = exam[current];
  const variantLetter = ['A', 'B', 'C'][examConfig.variant];
  const m = Math.floor(timeLeft / 60),
    s = timeLeft % 60;
  const div = el('div');

  // Top bar
  const topBar = el('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px',
    },
  });
  topBar.appendChild(
    el(
      'button',
      {
        className: 'back-btn',
        onClick: () => {
          stopExamTimer();
          setState({
            examConfig: null,
            exam: null,
            submitted: false,
            answers: {},
            current: 0,
            timeLeft: EXAM_DURATION,
            timerHandle: null,
          });
        },
      },
      u.stopBtn,
    ),
  );
  const rightSide = el('div', { style: { display: 'flex', gap: '10px', alignItems: 'center' } });
  rightSide.appendChild(
    el(
      'span',
      { className: 'mono muted', style: { fontSize: '11px' } },
      u.examLabel(examConfig.examNumber, variantLetter),
    ),
  );
  const timerEl = el(
    'span',
    {
      id: 'timer-display',
      className: 'mono',
      style: { fontSize: '13px', fontWeight: '700', color: timeLeft < 300 ? '#e63946' : '#2a9d8f' },
    },
    `⏱ ${m}:${String(s).padStart(2, '0')}`,
  );
  rightSide.appendChild(timerEl);
  topBar.appendChild(rightSide);
  div.appendChild(topBar);

  // Nav grid
  const navGrid = el('div', { className: 'nav-grid' });
  for (let i = 0; i < exam.length; i++) {
    const cls = 'nav-btn' + (i === current ? ' current' : answers[i] != null ? ' answered' : '');
    navGrid.appendChild(
      el(
        'button',
        {
          className: cls,
          ariaLabel: u.questionLabel(i + 1),
          ariaCurrent: i === current ? 'true' : undefined,
          onClick: () => setState({ current: i }),
        },
        String(i + 1),
      ),
    );
  }
  div.appendChild(navGrid);

  // Topic label
  div.appendChild(
    el(
      'div',
      {
        className: 'mono',
        style: {
          fontSize: '11px',
          color: q.topicColor,
          letterSpacing: '1px',
          marginBottom: '10px',
        },
      },
      q.topicLabel.toUpperCase() + ' · ' + u.questionLabel(current + 1),
    ),
  );

  // Question
  const qCard = el('div', { className: 'card', style: { marginBottom: '12px' } });
  qCard.appendChild(
    el(
      'p',
      {
        style: {
          margin: '0',
          fontSize: '15px',
          lineHeight: '1.6',
          color: '#fff',
          fontWeight: '600',
        },
      },
      q.q,
    ),
  );
  div.appendChild(qCard);

  // Options
  for (let idx = 0; idx < q.options.length; idx++) {
    const isSelected = answers[current] === idx;
    const btn = el('button', {
      className: 'option-btn' + (isSelected ? ' selected' : ''),
      onClick: () => {
        const newAnswers = { ...state.answers, [state.current]: idx };
        setState({ answers: newAnswers });
      },
    });
    btn.appendChild(
      el(
        'span',
        { className: 'mono muted', style: { marginRight: '8px' } },
        String.fromCharCode(65 + idx) + '.',
      ),
    );
    btn.appendChild(document.createTextNode(q.options[idx]));
    div.appendChild(btn);
  }

  // Prev/Next
  const navBtns = el('div', { className: 'row-btns', style: { marginBottom: '10px' } });
  const prevBtn = el(
    'button',
    {
      className: 'half-btn',
      disabled: current === 0,
      style: { background: '#1a1f2e', border: '1px solid #2a2f3e' },
      onClick: () => {
        if (current > 0) setState({ current: current - 1 });
      },
    },
    u.prevBtn,
  );
  const nextBtn = el(
    'button',
    {
      className: 'half-btn',
      disabled: current === exam.length - 1,
      style: { background: '#1a1f2e', border: '1px solid #2a2f3e' },
      onClick: () => {
        if (current < exam.length - 1) setState({ current: current + 1 });
      },
    },
    u.nextBtn,
  );
  navBtns.appendChild(prevBtn);
  navBtns.appendChild(nextBtn);
  div.appendChild(navBtns);

  // Submit
  div.appendChild(
    el(
      'button',
      {
        className: 'big-btn',
        style: { background: '#e63946' },
        onClick: () => {
          stopExamTimer();
          setState({ submitted: true, timerHandle: null });
          const score = exam.reduce(
            (acc, question, index) => acc + (answers[index] === question.answer ? 1 : 0),
            0,
          );
          announceKnm(`${score} / 40 — ${score >= 26 ? u.passed : u.failed}`);
        },
      },
      u.submitBtn(Object.keys(answers).length),
    ),
  );

  div.appendChild(el('div', { className: 'spacer' }));
  return div;
}

// ── Results ───────────────────────────────────────────────────────────────────
function renderResults() {
  const u = t();
  if (state.reviewing) return renderReview();
  const { exam, answers } = state;
  const score = exam.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0);
  const passed = score >= 26;

  // Per topic
  const lang = getKnmLang();
  const perTopic = {};
  for (const topic of TOPICS) {
    perTopic[topic.id] = {
      correct: 0,
      total: 0,
      label: getTopicLabel(topic, lang),
      color: topic.color,
    };
  }
  exam.forEach((q, i) => {
    perTopic[q.topic].total++;
    if (answers[i] === q.answer) perTopic[q.topic].correct++;
  });

  const div = el('div', { style: { textAlign: 'center', paddingTop: '16px' } });
  div.appendChild(
    el('div', { style: { fontSize: '60px', marginBottom: '10px' } }, passed ? '🎉' : '📖'),
  );
  div.appendChild(
    el(
      'h2',
      { style: { color: passed ? '#2a9d8f' : '#e63946', margin: '0 0 4px', fontSize: '28px' } },
      `${score} / 40`,
    ),
  );
  div.appendChild(
    el(
      'div',
      { className: 'muted', style: { fontSize: '13px', marginBottom: '4px' } },
      `${Math.round((score / 40) * 100)}% — ${u.passRate}`,
    ),
  );
  div.appendChild(
    el(
      'div',
      {
        style: {
          fontSize: '14px',
          color: passed ? '#2a9d8f' : '#e63946',
          fontWeight: '700',
          marginBottom: '20px',
        },
      },
      passed ? u.passed : u.failed,
    ),
  );

  const topicCard = el('div', {
    className: 'card',
    style: { textAlign: 'left', marginBottom: '16px' },
  });
  topicCard.appendChild(
    el(
      'div',
      {
        className: 'mono muted',
        style: { fontSize: '11px', letterSpacing: '1px', marginBottom: '8px' },
      },
      u.scorePerTopic,
    ),
  );
  for (const tp of Object.values(perTopic)) {
    const row = el('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '8px',
        fontSize: '12px',
        marginBottom: '3px',
      },
    });
    row.appendChild(el('span', { style: { color: tp.color } }, tp.label));
    const scoreColor =
      tp.correct === tp.total ? '#2a9d8f' : tp.correct >= 3 ? '#c8bfb0' : '#e63946';
    row.appendChild(
      el('span', { className: 'mono', style: { color: scoreColor } }, `${tp.correct}/${tp.total}`),
    );
    topicCard.appendChild(row);
  }
  div.appendChild(topicCard);

  const btnRow = el('div', { className: 'row-btns' });
  btnRow.appendChild(
    el(
      'button',
      {
        className: 'big-btn',
        style: { background: '#457b9d', marginTop: '0', flex: '1' },
        onClick: () => setState({ reviewing: true }),
      },
      u.reviewBtn,
    ),
  );
  btnRow.appendChild(
    el(
      'button',
      {
        className: 'big-btn',
        style: { background: '#e63946', marginTop: '0', flex: '1' },
        onClick: () => {
          stopExamTimer();
          setState({
            examConfig: null,
            exam: null,
            submitted: false,
            reviewing: false,
            answers: {},
            current: 0,
            timeLeft: EXAM_DURATION,
            timerHandle: null,
          });
        },
      },
      u.newExamBtn,
    ),
  );
  div.appendChild(btnRow);
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
}

// ── Review ────────────────────────────────────────────────────────────────────
function renderReview() {
  const u = t();
  const { exam, answers } = state;
  const div = el('div');
  div.appendChild(
    el(
      'button',
      { className: 'back-btn', onClick: () => setState({ reviewing: false }) },
      u.backToResults,
    ),
  );

  for (let i = 0; i < exam.length; i++) {
    const q = exam[i];
    const correct = answers[i] === q.answer;
    const yourAns = answers[i] != null ? q.options[answers[i]] : u.notAnswered;
    const card = el('div', {
      className: 'result-card ' + (correct ? 'correct-card' : 'wrong-card'),
    });

    card.appendChild(
      el(
        'div',
        {
          className: 'mono',
          style: {
            fontSize: '10px',
            color: q.topicColor,
            letterSpacing: '1px',
            marginBottom: '4px',
          },
        },
        q.topicLabel.toUpperCase() + ' · #' + (i + 1),
      ),
    );
    card.appendChild(
      el(
        'div',
        {
          style: {
            fontSize: '13px',
            color: '#fff',
            fontWeight: '600',
            marginBottom: '8px',
            lineHeight: '1.5',
          },
        },
        q.q,
      ),
    );
    card.appendChild(
      el(
        'div',
        {
          style: { fontSize: '12px', color: correct ? '#2a9d8f' : '#e63946', marginBottom: '4px' },
        },
        (correct ? '✓ ' : '✗ ') + u.yourAnswer + ': ' + yourAns,
      ),
    );
    if (!correct) {
      card.appendChild(
        el(
          'div',
          { style: { fontSize: '12px', color: '#2a9d8f', marginBottom: '4px' } },
          u.correct + ': ' + q.options[q.answer],
        ),
      );
    }
    card.appendChild(
      el(
        'div',
        {
          style: {
            fontSize: '12px',
            color: '#8a8070',
            lineHeight: '1.5',
            marginTop: '6px',
            fontStyle: 'italic',
          },
        },
        getLocalizedText(q.explanation, q.explanationEn, getKnmLang()),
      ),
    );
    div.appendChild(card);
  }
  div.appendChild(el('div', { className: 'spacer' }));
  return div;
}

// ── Boot ──────────────────────────────────────────────────────────────────────
document.addEventListener(
  'click',
  (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
      '[data-locale-switch]',
    );
    if (!link || link.getAttribute('aria-current') === 'true') return;
    persistLocaleHandoff(getKnmSnapshot());
  },
  true,
);

setKnmSnapshotReader(getKnmSnapshot);

const handoff = consumeLocaleHandoff();
const restored = handoff?.knm ?? readKnmLiveSession();
if (restored && isValidSnapshot(restored)) {
  applyKnmSnapshot(restored);
}
render();
bindTabNavLayout();
setKnmSnapshotReader(getKnmSnapshot);
persistKnmLiveSession(getKnmSnapshot());
if (handoff) {
  restoreScroll(handoff.scrollY);
  requestAnimationFrame(() => setupStickyTabs());
}
