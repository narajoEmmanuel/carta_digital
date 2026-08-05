import { useState } from 'react';
import styles from '../styles/LetterPage.module.css';

export default function LetterPage({ letter, endSlot = null }) {
  const {
    paperImage,
    signatureImage,
    greeting,
    pages,
    closing,
  } = letter.letter;

  const [pageIndex, setPageIndex] = useState(0);
  const page = pages[pageIndex];
  const isLast = pageIndex >= pages.length - 1;

  return (
    <div className={styles.reader}>
      <div className={`${styles.letterPaper} ${styles.pageEnter}`} key={page.id}>
        <img
          className={styles.paperBackground}
          src={paperImage}
          alt=""
          aria-hidden="true"
          draggable={false}
        />

        <article className={styles.letterContent}>
          {page.showGreeting && greeting ? (
            <p className={styles.greeting}>{greeting}</p>
          ) : null}

          <section className={styles.section}>
            {page.paragraphs.map((paragraph, index) => (
              <p key={`${page.id}-${index}`} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </section>

          {page.showClosing && closing ? (
            <p className={styles.closing}>{closing}</p>
          ) : null}

          {page.showSignature ? (
            <img
              className={styles.signature}
              src={signatureImage}
              alt="Firma de Emmanuel"
              draggable={false}
            />
          ) : null}
        </article>
      </div>

      <div className={styles.navRow}>
        <span className={styles.pageMark} aria-hidden="true">
          {pageIndex + 1} / {pages.length}
        </span>

        {!isLast ? (
          <button
            type="button"
            className={styles.nextArrow}
            onClick={() => setPageIndex((i) => i + 1)}
            aria-label="Siguiente hoja"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : null}
      </div>

      {isLast ? endSlot : null}
    </div>
  );
}
