import { useState } from 'react';
import { asset } from '../lib/assets';
import styles from '../styles/PostcardExperience.module.css';

const POSTCARD_BACKGROUND = asset('assets/postcard/fondo_postal_costa_rica.webp');

export default function PostcardExperience({ letter, onBack }) {
  const [flipped, setFlipped] = useState(false);
  const frontImage = letter.postcard.frontImage ?? asset('assets/postcard/postal_front.webp');
  const backImage = letter.postcard.backImage ?? asset('assets/postcard/postal_back.webp');

  return (
    <main className={`${styles.postcardExperience} screen-enter`}>
      <img
        src={POSTCARD_BACKGROUND}
        alt=""
        aria-hidden="true"
        draggable={false}
        className={styles.postcardBackground}
      />
      <div className={styles.postcardGlow} aria-hidden="true" />

      <div className={styles.postcardContent}>
        <div className={styles.stage}>
          <button
            type="button"
            className={`${styles.flipper} ${flipped ? styles.isFlipped : ''}`}
            onClick={() => setFlipped((v) => !v)}
            aria-label={flipped ? 'Ver frente de la postal' : 'Ver reverso de la postal'}
          >
            <div className={`${styles.face} ${styles.front}`}>
              <img src={frontImage} alt="Frente de la postal" draggable={false} />
            </div>

            <div className={`${styles.face} ${styles.back}`}>
              <img src={backImage} alt="Reverso de la postal" draggable={false} />
              <img
                className={styles.signature}
                src={letter.letter?.signatureImage ?? asset('assets/letter/firma_artista.webp')}
                alt=""
                aria-hidden="true"
                draggable={false}
              />
            </div>
          </button>
        </div>

        <p className={styles.tapHint} aria-hidden="true">
          toca para leer
        </p>

        <button
          type="button"
          className={styles.homeButton}
          onClick={onBack}
        >
          Volver al inicio
        </button>
      </div>
    </main>
  );
}
