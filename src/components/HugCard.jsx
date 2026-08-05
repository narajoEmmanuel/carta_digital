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

export default function HugCard({ letter, onBack }) {
  const hugImage = letter.hug?.image ?? '/assets/hug/muneco_abrazo_final.png';

  return (
    <main className={`${styles.screen} screen-enter`}>
      <BackButton onClick={onBack} />

      <div className={styles.frame}>
        <img
          className={styles.hugImage}
          src={hugImage}
          alt="Un abrazo para vos"
          draggable={false}
        />
      </div>
    </main>
  );
}
