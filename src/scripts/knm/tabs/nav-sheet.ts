import { el } from '../dom/el';
import { resetTabViewState } from '../exam-engine';
import { state } from '../state';
import { t } from '../ui-strings';
import { getRoot } from '../root';
import { navSheetTriggerId, setNavSheetTriggerId } from './tab-state';
import { getTabDefs } from './tab-types';
import { MOBILE_TAB_NAV } from '../types';

export const isMobileTabNav = (): boolean => window.matchMedia(MOBILE_TAB_NAV).matches;

const setNavSheetExpanded = (triggerId: string | null, open: boolean): void => {
  for (const trigger of getRoot().querySelectorAll<HTMLButtonElement>('.tab-select-trigger')) {
    trigger.setAttribute('aria-expanded', trigger.id === triggerId && open ? 'true' : 'false');
  }
};

export const closeNavSheet = (): void => {
  const dialog = document.getElementById('knm-nav-sheet') as HTMLDialogElement | null;
  if (dialog?.open) dialog.close();
};

const openNavSheet = (triggerId: string): void => {
  if (!isMobileTabNav()) return;
  const dialog = document.getElementById('knm-nav-sheet') as HTMLDialogElement | null;
  const trigger = document.getElementById(triggerId) as HTMLButtonElement | null;
  if (!dialog || !trigger || trigger.disabled) return;

  setNavSheetTriggerId(triggerId);
  dialog.removeAttribute('hidden');
  dialog.showModal();
  setNavSheetExpanded(triggerId, true);
  dialog.querySelector<HTMLButtonElement>('.knm-nav-sheet-option.active')?.focus();
};

const bindNavSheet = (dialog: HTMLDialogElement): void => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeNavSheet();
  });
  dialog.addEventListener('close', () => {
    dialog.setAttribute('hidden', '');
    setNavSheetExpanded(null, false);
    document.getElementById(navSheetTriggerId ?? '')?.focus();
    setNavSheetTriggerId(null);
  });
};

export const renderNavSheet = (): HTMLDialogElement => {
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
};

export { openNavSheet };
