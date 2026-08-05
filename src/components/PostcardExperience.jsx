import { useState } from 'react';
import styles from '../styles/PostcardExperience.module.css';

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
  const { imagen, lugar, mensaje, firmante } = letter.postcard;

  return (
    <main className={`${styles.screen} screen-enter`}>
      <BackButton onClick={onBack} />

      <div className={styles.stage}>
        <button
          type="button"
          className={`${styles.flipper} ${flipped ? styles.isFlipped : ''}`}
          onClick={() => setFlipped((v) => !v)}
          aria-label={flipped ? 'Ver frente de la postal' : 'Ver reverso de la postal'}
        >
          {/* Frente */}
          <div className={`${styles.face} ${styles.front} paper-noise`}>
            <div className={styles.frontFrame}>
              <img src={imagen} alt={`Paisaje de ${lugar}`} />
            </div>
            <div className={styles.stamp} aria-hidden="true">
              <span className={styles.stampDot} />
              <span className={styles.stampText}>CR · AIR</span>
            </div>
            <span className={styles.place}>{lugar}</span>
          </div>

          {/* Reverso */}
          <div className={`${styles.face} ${styles.back} paper-noise`}>
            <div className={styles.messageCol}>
              <p className={styles.message}>{mensaje}</p>
              <p className={styles.sign}>{firmante}</p>
            </div>
            <div className={styles.addressCol}>
              <div className={styles.postmark} aria-hidden="true">
                <span>
                  Correo
                  <br />
                  amistad
                </span>
              </div>
              <div className={styles.lines} aria-hidden="true">
                <span className={styles.line} />
                <span className={styles.line} />
                <span className={styles.line} />
              </div>
            </div>
          </div>
        </button>
      </div>

      <p className={styles.hintTap} aria-hidden="true">
        {flipped ? 'tocá para ver el frente' : 'tocá para dar vuelta'}
      </p>
    </main>
  );
}
