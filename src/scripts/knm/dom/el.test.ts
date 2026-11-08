import { describe, expect, it } from 'vitest';

import { el } from './el';

describe('el ARIA props', () => {
  it('writes ARIA props that do not reflect as attributes', () => {
    const dialog = el('dialog', { ariaLabelledby: 'sheet-title' });
    const trigger = el('button', { ariaHaspopup: 'dialog', ariaControls: 'sheet' });

    expect(dialog.getAttribute('aria-labelledby')).toBe('sheet-title');
    expect(trigger.getAttribute('aria-haspopup')).toBe('dialog');
    expect(trigger.getAttribute('aria-controls')).toBe('sheet');
  });

  it('stringifies booleans and skips missing values', () => {
    const region = el('div', { ariaLive: 'polite', ariaAtomic: true, ariaExpanded: false });
    const step = el('span', { ariaCurrent: undefined });

    expect(region.getAttribute('aria-live')).toBe('polite');
    expect(region.getAttribute('aria-atomic')).toBe('true');
    expect(region.getAttribute('aria-expanded')).toBe('false');
    expect(step.hasAttribute('aria-current')).toBe(false);
  });
});
