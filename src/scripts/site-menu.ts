export const initSiteMenu = (): void => {
  const dialog = document.getElementById('site-menu') as HTMLDialogElement | null;
  const openButton = document.querySelector<HTMLButtonElement>('[data-menu-open]');
  const closeButton = document.querySelector<HTMLButtonElement>('[data-menu-close]');

  if (!dialog || !openButton) return;

  const open = (): void => {
    dialog.removeAttribute('hidden');
    dialog.showModal();
    openButton.setAttribute('aria-expanded', 'true');
    closeButton?.focus();
  };

  const close = (): void => {
    if (dialog.open) dialog.close();
    dialog.setAttribute('hidden', '');
  };

  openButton.addEventListener('click', open);
  closeButton?.addEventListener('click', close);
  dialog.addEventListener('close', () => {
    dialog.setAttribute('hidden', '');
    openButton.setAttribute('aria-expanded', 'false');
    openButton.focus();
  });
  dialog.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', close);
  });
};

initSiteMenu();
