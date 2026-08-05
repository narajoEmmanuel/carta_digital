import { useState, useEffect } from 'react';
import LetterPage from './LetterPage';
import HugInvite from './HugInvite';
import styles from '../styles/EnvelopeExperience.module.css';

const STEPS = {
  INTRO: 'intro',
  CLOSED: 'closed',
  OPENING: 'opening',
  READING: 'reading',
  SIGNATURE: 'signature',
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

function EnvelopeVisual({ letter, isOpening, onOpen }) {
  return (
    <button
      type="button"
      className={styles.envelope}
      onClick={onOpen}
      aria-label={isOpening ? 'Sobre abriéndose' : 'Abrir el sobre'}
      disabled={isOpening}
    >
      <div className={styles.envWear}>
        <div className={`${styles.letterPeek} ${isOpening ? styles.isOut : ''}`} />
        <div className={styles.pocket} />
      </div>

      <div
        className={`${styles.flap} ${isOpening ? styles.isOpen : ''}`}
        aria-hidden="true"
      />
      <div
        className={`${styles.tape} ${isOpening ? styles.isHidden : ''}`}
        aria-hidden="true"
      />
      <div className={styles.stamp} aria-hidden="true">
        ✦
      </div>
      <div className={styles.seal} aria-hidden="true">
        air mail
      </div>

      {!isOpening && (
        <p className={styles.address}>
          {letter.envelope.destinatario}
          <span className={styles.from}>{letter.envelope.remitente}</span>
        </p>
      )}
    </button>
  );
}

export default function EnvelopeExperience({ letter, onBack, onOpenHug }) {
  const [step, setStep] = useState(STEPS.INTRO);
  const [sectionIndex, setSectionIndex] = useState(0);
  const secciones = letter.carta.secciones;

  useEffect(() => {
    if (step !== STEPS.OPENING) return undefined;

    const timer = setTimeout(() => {
      setStep(STEPS.READING);
    }, 1100);

    return () => clearTimeout(timer);
  }, [step]);

  const goNextSection = () => {
    if (sectionIndex < secciones.length - 1) {
      setSectionIndex((i) => i + 1);
      return;
    }
    setStep(STEPS.SIGNATURE);
  };

  const goPrevSection = () => {
    if (sectionIndex > 0) {
      setSectionIndex((i) => i - 1);
    }
  };

  return (
    <main className={`${styles.screen} screen-enter`}>
      <BackButton onClick={onBack} />

      <div className={styles.panel}>
        {step === STEPS.INTRO && (
          <button
            type="button"
            className={styles.intro}
            onClick={() => setStep(STEPS.CLOSED)}
            aria-label="Continuar a la carta"
          >
            <p className={styles.introText}>{letter.envelope.intro}</p>
            <p className={styles.introTap} aria-hidden="true">
              tocá para seguir
            </p>
          </button>
        )}

        {(step === STEPS.CLOSED || step === STEPS.OPENING) && (
          <>
            <div className={styles.envStage}>
              <EnvelopeVisual
                letter={letter}
                isOpening={step === STEPS.OPENING}
                onOpen={() => {
                  if (step === STEPS.CLOSED) setStep(STEPS.OPENING);
                }}
              />
            </div>
            {step === STEPS.CLOSED && (
              <p className={styles.envHint} aria-hidden="true">
                abrí el sobre
              </p>
            )}
          </>
        )}

        {step === STEPS.READING && (
          <div className={styles.readWrap}>
            <div className={styles.navDots} role="tablist" aria-label="Páginas de la carta">
              {secciones.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  className={`${styles.dot} ${i === sectionIndex ? styles.isActive : ''}`}
                  onClick={() => setSectionIndex(i)}
                  aria-label={`Sección ${i + 1}`}
                  aria-current={i === sectionIndex ? 'true' : undefined}
                />
              ))}
            </div>

            <LetterPage seccion={secciones[sectionIndex]} />

            <div className={styles.navRow}>
              <button
                type="button"
                className={styles.navBtn}
                onClick={goPrevSection}
                disabled={sectionIndex === 0}
              >
                atrás
              </button>
              <button type="button" className={styles.navBtn} onClick={goNextSection}>
                {sectionIndex < secciones.length - 1 ? 'seguir' : 'cerrar'}
              </button>
            </div>
          </div>
        )}

        {step === STEPS.SIGNATURE && (
          <div className={styles.readWrap}>
            <div className={styles.signatureBlock}>
              <p className={styles.signature}>{letter.carta.firma}</p>
              <p className={styles.signatureSub}>— para {letter.nombre}</p>
            </div>
            <HugInvite onOpen={onOpenHug} />
          </div>
        )}
      </div>
    </main>
  );
}
