import { useState } from 'react';
import LetterPage from './LetterPage';
import styles from '../styles/EnvelopeExperience.module.css';

const STEPS = {
  LETTER_OUT: 'letter_out',
  READING: 'reading',
};

const LETTER_OUT_IMAGE = '/assets/envelope/sobre_carta_saliendo.png';
const ENVELOPE_BACKGROUND = '/assets/envelope/fondo_sobre_monterrey.png';

function getRecipientSizeClass(name) {
  const length = name.trim().length;

  if (length >= 18) return 'nameExtraLong';
  if (length >= 13) return 'nameLong';
  if (length >= 9) return 'nameMedium';
  return 'nameShort';
}

function BackButton({ onClick }) {
  return (
    <button type="button" className="back-home" onClick={onClick} aria-label="Volver al inicio">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M15 6 9 12l6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function EnvelopeExperience({ letter, onBack, onOpenHug }) {
  const [step, setStep] = useState(STEPS.LETTER_OUT);
  const openingImage = letter.envelope?.letterImage || LETTER_OUT_IMAGE;
  const envelopeName = letter.envelopeName || letter.name;
  const isReading = step === STEPS.READING;

  return (
    <main
      className={`${styles.envelopeExperience} screen-enter ${isReading ? styles.screenReading : ''}`}
    >
      {!isReading && (
        <>
          <img
            src={ENVELOPE_BACKGROUND}
            alt=""
            aria-hidden="true"
            draggable={false}
            className={styles.envelopeBackground}
          />
          <div className={styles.envelopeGlow} aria-hidden="true" />
        </>
      )}

      <BackButton onClick={onBack} />

      <div className={`${styles.envelopeContent} ${isReading ? styles.panelReading : ''}`}>
        {step === STEPS.LETTER_OUT && (
          <>
            <p className={styles.recipientFor} aria-hidden="true">
              Para:
            </p>

            <div className={styles.envStage}>
              <button
                type="button"
                className={`${styles.frameBtn} ${styles.frameEnter}`}
                onClick={() => setStep(STEPS.READING)}
                aria-label="Leer la carta"
              >
                <div className={`${styles.envelopeLetterScene} ${styles.envelopeArtwork}`}>
                  <img
                    src={openingImage}
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    className={styles.envelopeLetterImage}
                  />

                  <div
                    className={styles.recipientBlock}
                    aria-label={`Carta para ${envelopeName}`}
                  >
                    <span
                      className={`${styles.recipientName} ${styles[getRecipientSizeClass(envelopeName)]}`}
                    >
                      {envelopeName}
                    </span>

                    <span className={styles.recipientLocation}>
                      MTY, N.L., MX
                    </span>
                  </div>
                </div>
              </button>
            </div>
            <p className={styles.envHint} aria-hidden="true">
              tocá para leer
            </p>
          </>
        )}

        {step === STEPS.READING && (
          <div className={styles.readWrap}>
            <LetterPage
              letter={letter.letter}
              greeting={letter.greeting}
              onOpenHug={onOpenHug}
            />
          </div>
        )}
      </div>
    </main>
  );
}
