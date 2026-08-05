import styles from '../styles/HugCard.module.css';

function BackButton({ onClick }) {
  return (
    <button type="button" className="back-home" onClick={onClick} aria-label="Volver al inicio">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M15 6 9 12l6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

/**
 * Mini experiencia del abrazo.
 * figureSlot es el placeholder para insertar luego
 * una versión tipo muñeco de palo con rostro.
 */
export default function HugCard({ letter, onBack }) {
  const { mensaje, nota } = letter.abrazo;

  return (
    <main className={`${styles.screen} screen-enter`}>
      <BackButton onClick={onBack} />

      <div className={styles.card}>
        <div className={styles.figureSlot} aria-hidden="true">
          <div className={styles.placeholderFigure} />
          <span className={styles.placeholderLabel}>figura</span>
        </div>

        <p className={styles.message}>{mensaje}</p>
        {nota ? <p className={styles.note}>{nota}</p> : null}

        <span className={styles.heart} aria-hidden="true">
          ♥
        </span>
      </div>
    </main>
  );
}
