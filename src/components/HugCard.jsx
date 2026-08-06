import { useState } from 'react';
import { asset } from '../lib/assets';
import styles from '../styles/HugCard.module.css';

export default function HugCard({ letter, onBack }) {
  const hugImage = letter.hug?.image ?? asset('assets/hug/muneco_abrazo_final.webp');
  const [playKey, setPlayKey] = useState(0);

  const replayHug = () => setPlayKey((k) => k + 1);

  return (
    <main className={styles.screen}>
      <div className={styles.frame}>
        <img
          key={playKey}
          className={styles.hugImage}
          src={hugImage}
          alt="Un abrazo para vos"
          draggable={false}
        />
      </div>

      <button
        type="button"
        className={styles.replayHotspot}
        onClick={replayHug}
        aria-label="Repetir abrazo"
      />

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
