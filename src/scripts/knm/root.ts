let rootEl: HTMLElement | null = null;

export const getRoot = (): HTMLElement => {
  if (!rootEl) {
    rootEl = document.getElementById('knm-app');
    if (!rootEl) throw new Error('KNM app root not found');
  }
  return rootEl;
};
