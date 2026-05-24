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

type ElProps = Record<string, unknown> & {
  className?: string;
  style?: Partial<CSSStyleDeclaration>;
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
    else if (key.startsWith('on'))
      element.addEventListener(key.slice(2).toLowerCase(), value as EventListener);
    else if (EL_PROPS.has(key) || key.startsWith('aria') || key.startsWith('data'))
      (element as unknown as Record<string, unknown>)[key] = value;
  }
  for (const child of children) {
    if (child == null) continue;
    element.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  }
  return element;
};
