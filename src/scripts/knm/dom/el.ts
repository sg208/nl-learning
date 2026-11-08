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
]);

type ElProps = Record<string, unknown> & {
  className?: string;
  style?: Partial<CSSStyleDeclaration>;
  dataset?: Record<string, string>;
};

// Only some aria* DOM properties reflect to attributes (ariaLabelledby, ariaControls and
// ariaHaspopup do not), so ARIA props are always written as attributes.
const setAriaAttribute = (element: HTMLElement, key: string, value: unknown): void => {
  if (value === undefined || value === null) return;
  const attributeName = key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  element.setAttribute(attributeName, String(value));
};

export const el = <K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props: ElProps = {},
  ...children: (Node | string | null | undefined)[]
): HTMLElementTagNameMap[K] => {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(props)) {
    if (key === 'className') element.className = value as string;
    else if (key === 'style' && typeof value === 'object') Object.assign(element.style, value);
    else if (key === 'dataset' && typeof value === 'object') Object.assign(element.dataset, value);
    else if (key.startsWith('on'))
      element.addEventListener(key.slice(2).toLowerCase(), value as EventListener);
    else if (key.startsWith('aria')) setAriaAttribute(element, key, value);
    else if (EL_PROPS.has(key) || key.startsWith('data'))
      (element as unknown as Record<string, unknown>)[key] = value;
  }
  for (const child of children) {
    if (child == null) continue;
    element.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  }
  return element;
};
