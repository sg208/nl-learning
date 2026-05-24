export const announceKnm = (message: string): void => {
  const region = document.getElementById('knm-live');
  if (region) region.textContent = message;
};
