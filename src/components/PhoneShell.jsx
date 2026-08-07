import { useEffect } from 'react';
import styles from '../styles/PhoneShell.module.css';

const PREVIEW_W = 390;
const PREVIEW_H = 844;

/**
 * Contenedor de la app.
 * - `previewIphone`: marco exacto 390×844 CSS px (sin scale/zoom), scroll externo.
 * - Móvil real (≤600px): full-bleed, sin marco ni etiqueta.
 * - `debugLayout`: guías visuales de desarrollo.
 */
export default function PhoneShell({
  children,
  previewIphone = false,
  debugLayout = false,
}) {
  useEffect(() => {
    if (!previewIphone) return undefined;
    document.body.classList.add('preview-iphone');
    document.documentElement.classList.add('preview-iphone');
    return () => {
      document.body.classList.remove('preview-iphone');
      document.documentElement.classList.remove('preview-iphone');
    };
  }, [previewIphone]);

  const workspaceClass = [
    styles.workspace,
    previewIphone ? styles.previewStage : '',
    debugLayout ? styles.debugLayout : '',
  ]
    .filter(Boolean)
    .join(' ');

  const phoneClass = [
    styles.phone,
    previewIphone ? styles.phonePreview : '',
    debugLayout ? styles.phoneDebug : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={workspaceClass}
      data-preview-debug={debugLayout ? 'true' : undefined}
    >
      <div className={phoneClass}>
        <div className={styles.notch} aria-hidden="true" />
        {debugLayout ? (
          <div className={styles.debugCrosshair} aria-hidden="true">
            <span className={styles.debugCrossV} />
            <span className={styles.debugCrossH} />
          </div>
        ) : null}
        <div className={`${styles.screen} ${debugLayout ? styles.screenDebug : ''}`}>
          {children}
        </div>
        {debugLayout ? (
          <p className={styles.debugBadge} aria-hidden="true">
            {PREVIEW_W} × {PREVIEW_H}
          </p>
        ) : null}
        <div className={styles.homeIndicator} aria-hidden="true" />
      </div>
      {previewIphone ? (
        <p className={styles.caption} aria-hidden="true">
          {PREVIEW_W} × {PREVIEW_H} CSS px
        </p>
      ) : null}
    </div>
  );
}
