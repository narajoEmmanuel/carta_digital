import { useState } from 'react';
import LetterPage from './LetterPage';
import HugInvite from './HugInvite';
import styles from '../styles/EnvelopeExperience.module.css';

const STEPS = {
  LETTER: 'letter',
  READING: 'reading',
};

function BackButton({ onClick }) {
  return (
    <button type="button" className="back-home" onClick={onClick} aria-label="Volver al inicio">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M15 6 9 12l6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function EnvelopeFrame({ src, alt, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.frameBtn} ${styles.frameEnter}`}
      onClick={onClick}
      aria-label={alt}
    >
      <img
        className={styles.frameImage}
        src={src}
        alt=""
        draggable={false}
      />
    </button>
  );
}

export default function EnvelopeExperience({ letter, onBack, onOpenHug }) {
  const [step, setStep] = useState(STEPS.LETTER);
  const { letterImage } = letter.envelope;
  const isReading = step === STEPS.READING;

  return (
    <main
      className={`${styles.screen} screen-enter ${isReading ? styles.screenReading : ''}`}
    >
      <BackButton onClick={onBack} />

      <div className={`${styles.panel} ${isReading ? styles.panelReading : ''}`}>
        {step === STEPS.LETTER && (
          <>
            <div className={styles.envStage}>
              <EnvelopeFrame
                key="letter"
                src={letterImage}
                alt="Abrir la carta"
                onClick={() => setStep(STEPS.READING)}
              />
            </div>
            <p className={styles.envHint} aria-hidden="true">
              tocá para leer
            </p>
          </>
        )}

        {step === STEPS.READING && (
          <div className={styles.readWrap}>
            <LetterPage
              letter={letter}
              endSlot={<HugInvite onOpen={onOpenHug} />}
            />
          </div>
        )}
      </div>
    </main>
  );
}
