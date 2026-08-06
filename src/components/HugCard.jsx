import styles from '../styles/HugCard.module.css';

export default function HugCard({ letter, onBack }) {
  const hugImage = letter.hug?.image ?? '/assets/hug/muneco_abrazo_final.png';

  return (
    <main className={styles.screen}>
      <div className={styles.frame}>
        <img
          className={styles.hugImage}
          src={hugImage}
          alt="Un abrazo para vos"
          draggable={false}
        />
      </div>

      <button
        type="button"
        className={styles.homeButton}
        onClick={onBack}
      >
        Volver al inicio
      </button>
    </main>
  );
}
