/**
 * Modo de previsualización / depuración vía query string.
 * Ej.: ?preview=iphone&debugLayout=true
 */
export function getPreviewFlags(search = window.location.search) {
  const params = new URLSearchParams(search);
  const preview = (params.get('preview') || '').toLowerCase();
  const debugRaw = (params.get('debugLayout') || '').toLowerCase();

  return {
    previewIphone: preview === 'iphone',
    debugLayout: debugRaw === 'true' || debugRaw === '1',
  };
}
