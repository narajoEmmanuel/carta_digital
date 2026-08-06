import { useState } from 'react';
import { asset } from '../lib/assets';
import LetterPage from './LetterPage';
import styles from '../styles/EnvelopeExperience.module.css';

const STEPS = {
  LETTER_OUT: 'letter_out',
  READING: 'reading',
};

const LETTER_OUT_IMAGE = asset('assets/envelope/sobre_carta_saliendo.png');
const ENVELOPE_BACKGROUND = asset('assets/envelope/fondo_sobre_monterrey.png');

function getRecipientSizeClass(name) {
  const length = name.trim().length;

  if (length >= 18) return 'nameExtraLong';
  if (length >= 13) return 'nameLong';
  if (length >= 9) return 'nameMedium';
  return 'nameShort';
}

export default function EnvelopeExperience({ letter, onOpenHug }) {
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
                      Agosto, 2026
                    </span>
                  </div>
                </div>
              </button>
            </div>
            <p className={styles.envHint} aria-hidden="true">
              toca para leer
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
