/** Public asset URL that respects Vite `base` (GitHub Pages, etc.). */
export function asset(path) {
  const clean = String(path || '').replace(/^\//, '');
  const base = import.meta.env?.BASE_URL ?? '/';
  return `${base}${clean}`;
}
