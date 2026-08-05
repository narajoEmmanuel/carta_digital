import styles from '../styles/PhoneShell.module.css';

/**
 * En escritorio muestra la app dentro de un marco tipo celular (390×844)
 * para ajustar proporciones. En pantallas pequeñas es full-bleed.
 */
export default function PhoneShell({ children }) {
  return (
    <div className={styles.workspace}>
      <div className={styles.phone}>
        <div className={styles.notch} aria-hidden="true" />
        <div className={styles.screen}>{children}</div>
        <div className={styles.homeIndicator} aria-hidden="true" />
      </div>
      <p className={styles.caption} aria-hidden="true">
        vista 390 × 844
      </p>
    </div>
  );
}
