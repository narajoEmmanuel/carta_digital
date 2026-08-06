/** Public asset URL that respects Vite `base` (GitHub Pages, etc.). */
export function asset(path) {
  const clean = String(path || '').replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${clean}`;
}
