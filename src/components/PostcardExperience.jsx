import { useState } from 'react';
import styles from '../styles/PostcardExperience.module.css';

const POSTCARD_BACKGROUND = '/assets/postcard/fondo_postal_costa_rica.png';

function BackButton({ onClick }) {
  return (
    <button type="button" className="back-home" onClick={onClick} aria-label="Volver al inicio">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M15 6 9 12l6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function PostcardExperience({ letter, onBack }) {
  const [flipped, setFlipped] = useState(false);
  const frontImage = letter.postcard.frontImage ?? '/assets/postcard/postal_front.png';
  const backImage = letter.postcard.backImage ?? '/assets/postcard/postal_back.png';

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
        <BackButton onClick={onBack} />

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
                src={letter.letter?.signatureImage ?? '/assets/letter/firma_artista.png'}
                alt=""
                aria-hidden="true"
                draggable={false}
              />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
