import { useState } from 'react';
import { asset } from '../lib/assets';
import styles from '../styles/LetterPage.module.css';

const PAPER = asset('assets/letter/hoja_carta.webp');
const SIGNATURE = asset('assets/letter/firma_artista.webp');
const HUG_INVITE_IMAGE = asset('assets/hug/invitacion_abrazo.webp');

export default function LetterPage({
  letter,
  greeting,
  onOpenHug,
}) {
  const {
    paperImage = PAPER,
    signatureImage = SIGNATURE,
    pages = [],
    closing,
  } = letter;

  const totalLetterPages = pages.length;
  const totalSteps = totalLetterPages + 1;
  const [pageIndex, setPageIndex] = useState(0);

  const isHugPage = pageIndex >= totalLetterPages;
  const letterPageIndex = Math.min(pageIndex, Math.max(totalLetterPages - 1, 0));
  const page = pages[letterPageIndex];
  const paragraphs = page?.paragraphs || [];
  const isFirstLetterPage = pageIndex === 0;
  const isLastLetterPage = pageIndex === totalLetterPages - 1;

  const goPrev = () => setPageIndex((i) => Math.max(0, i - 1));
  const goNext = () => setPageIndex((i) => Math.min(totalSteps - 1, i + 1));

  return (
    <div className={`${styles.reader} ${isHugPage ? styles.readerHug : ''}`}>
      {!isHugPage ? (
        <div
          className={`${styles.letterPaper} ${styles.pageEnter}`}
          key={`letter-${page?.id || pageIndex}`}
        >
          <img
            className={styles.paperBackground}
            src={paperImage}
            alt=""
            aria-hidden="true"
            draggable={false}
          />

          <article className={styles.letterContent}>
            {isFirstLetterPage && greeting ? (
              <p className={styles.greeting}>{greeting}</p>
            ) : null}

            <section className={styles.section}>
              {paragraphs.map((paragraph, index) => (
                <p key={`${pageIndex}-${index}`} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </section>

            {isLastLetterPage ? (
              <>
                {closing ? <p className={styles.closing}>{closing}</p> : null}
                <img
                  className={styles.signature}
                  src={signatureImage}
                  alt="Firma de Emmanuel"
                  draggable={false}
                />
              </>
            ) : null}
          </article>
        </div>
      ) : (
        <div className={`${styles.hugInviteScreen} ${styles.pageEnter}`} key="hug-invite">
          <img
            className={styles.hugInviteImage}
            src={HUG_INVITE_IMAGE}
            alt=""
            aria-hidden="true"
            draggable={false}
          />
          <button
            type="button"
            className={styles.hugInviteHotspot}
            aria-label="Abrir abrazo"
            onClick={onOpenHug}
          />
        </div>
      )}

      {!isHugPage && (
        <nav
          className={styles.navRow}
          aria-label="Páginas de la carta"
        >
          <button
            type="button"
            className={styles.navArrow}
            onClick={goPrev}
            disabled={pageIndex === 0}
            aria-label="Página anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M15 6 9 12l6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <span className={styles.pageMark}>
            {pageIndex + 1} / {totalSteps}
          </span>

          <button
            type="button"
            className={styles.navArrow}
            onClick={goNext}
            aria-label="Página siguiente"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </nav>
      )}
    </div>
  );
}
