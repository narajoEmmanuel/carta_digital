import styles from '../styles/ClickHint.module.css';

const CLICK_ICON = '/assets/home/icono_de_click.png';

/**
 * Indicador visual discreto de tap/click (asset collage).
 * position: 'bottomRight' | 'bottomLeft'
 */
export default function ClickHint({ position = 'bottomRight' }) {
  const positionClass =
    position === 'bottomLeft' ? styles.bottomLeft : styles.bottomRight;

  return (
    <span className={`${styles.hint} ${positionClass}`} aria-hidden="true">
      <img className={styles.icon} src={CLICK_ICON} alt="" draggable={false} />
    </span>
  );
}
