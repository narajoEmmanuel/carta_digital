import { useState } from 'react';
import { asset } from '../lib/assets';
import styles from '../styles/LetterPage.module.css';

const PAPER = asset('assets/letter/hoja_carta.webp');
const SIGNATURE = asset('assets/letter/firma_artista.webp');
const HUG_INVITE_IMAGE = asset('assets/hug/invitacion_abrazo.webp');

function PencilHeart({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 26"
      width="18"
      height="16"
      aria-hidden="true"
      focusable="false"
    >
      {/* Fill: soft red pencil colouring */}
      <path
        d="M14.1 22.4c-.4-.3-6.8-4.9-9.4-9.2C2.4 9.6 3.1 5.6 6.2 4c2-.9 4.1-.2 5.4 1.4C12.6 4 14.3 2.9 16.4 3.4c3.2.8 4.4 4.3 2.8 7.4-1.9 3.7-7.4 8.6-5.1 11.6z"
        fill="#e23b3b"
        fillOpacity="0.72"
      />
      {/* Sketchy pencil outline */}
      <path
        d="M13.9 5.4c-1.1-1.5-3.1-2.3-4.9-1.6-2.7 1.1-3.5 4.4-1.7 7.2 2.2 3.5 7.2 7.7 7.7 8.1.2.1.3.1.4 0 .6-.5 5.8-4.6 7.7-8.2 1.6-3-.1-6.3-3.1-7.2-2-.6-3.9.4-5.1 2"
        fill="none"
        stroke="#8f2a2a"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Second faint sketch pass */}
      <path
        d="M14.2 5.7c-1-1.3-2.8-2.1-4.5-1.5-2.3.9-3.1 3.8-1.6 6.5 1.8 3.1 6.4 7 7 7.5m.4-12.4c1.1-1.4 2.9-2 4.6-1.4 2.5.8 3.6 3.7 2.3 6.4-1.5 3.1-5.8 6.9-6.9 8"
        fill="none"
        stroke="#6e2222"
        strokeWidth="0.55"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

function PencilCircle({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 40"
      width="34"
      height="27"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse
        cx="24"
        cy="20"
        rx="19"
        ry="15"
        fill="none"
        stroke="#e53935"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.95"
        transform="rotate(-12 24 20)"
      />
      <ellipse
        cx="24.5"
        cy="20.4"
        rx="17.5"
        ry="13.8"
        fill="none"
        stroke="#8b1e1e"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
        transform="rotate(-5 24 20)"
        strokeDasharray="3 1.2 4 1 2 1.2"
      />
    </svg>
  );
}

function renderAccentPart(part, partIndex, styles) {
  const toneClass =
    part.accentTone === 'rose'
      ? styles.inlineAccentRose
      : part.accentTone === 'teal'
        ? styles.inlineAccentTeal
        : styles.inlineAccentCoral;

  return (
    <span
      key={partIndex}
      className={`${styles.inlineAccent} ${toneClass}`}
    >
      {part.text}
    </span>
  );
}

function renderParagraphs(paragraphs, pageIndex, styles) {
  const nodes = [];
  let index = 0;

  while (index < paragraphs.length) {
    const paragraph = paragraphs[index];
    const isInspire = typeof paragraph === 'object' && paragraph.inspire;

    if (isInspire) {
      const block = [];
      const start = index;
      while (
        index < paragraphs.length &&
        typeof paragraphs[index] === 'object' &&
        paragraphs[index].inspire
      ) {
        block.push(paragraphs[index]);
        index += 1;
      }
      nodes.push(
        <blockquote
          key={`${pageIndex}-inspire-${start}`}
          className={styles.inspireBlock}
        >
          {block.map((item, blockIndex) => (
            <p
              key={`${pageIndex}-inspire-${start}-${blockIndex}`}
              className={styles.inspireParagraph}
            >
              {item.text}
            </p>
          ))}
        </blockquote>,
      );
      continue;
    }

    const text = typeof paragraph === 'string' ? paragraph : paragraph.text;
    const isBold = typeof paragraph === 'object' && paragraph.bold;
    const isPunchline = typeof paragraph === 'object' && paragraph.punchline;
    const isLoveClose = typeof paragraph === 'object' && paragraph.loveClose;
    const hasParts = typeof paragraph === 'object' && Array.isArray(paragraph.parts);
    const className = [
      styles.paragraph,
      isBold ? styles.paragraphBold : '',
      isPunchline ? styles.paragraphPunchline : '',
      isLoveClose ? styles.loveClose : '',
    ]
      .filter(Boolean)
      .join(' ');

    nodes.push(
      <p key={`${pageIndex}-${index}`} className={className}>
        {hasParts
          ? paragraph.parts.map((part, partIndex) => {
              if (part.bold) {
                return (
                  <strong key={partIndex} className={styles.inlineBold}>
                    {part.text}
                  </strong>
                );
              }
              if (part.italic) {
                return (
                  <em key={partIndex} className={styles.inlineItalic}>
                    {part.text}
                  </em>
                );
              }
              if (part.accent) {
                return renderAccentPart(part, partIndex, styles);
              }
              if (part.circled) {
                return (
                  <span key={partIndex} className={styles.circledWord}>
                    {part.text}
                    <PencilCircle className={styles.pencilCircle} />
                  </span>
                );
              }
              return <span key={partIndex}>{part.text}</span>;
            })
          : (
            <>
              {text}
              {isLoveClose ? (
                <PencilHeart className={styles.pencilHeart} />
              ) : null}
            </>
          )}
      </p>,
    );
    index += 1;
  }

  return nodes;
}

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
    signedName,
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
              {renderParagraphs(paragraphs, pageIndex, styles)}
            </section>

            {isLastLetterPage ? (
              <>
                {closing ? <p className={styles.closing}>{closing}</p> : null}
                {signedName ? (
                  <p className={styles.signedName}>{signedName}</p>
                ) : null}
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
