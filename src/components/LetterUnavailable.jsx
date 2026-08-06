import styles from '../styles/LetterUnavailable.module.css';

export default function LetterUnavailable({ recipientId }) {
  return (
    <main className={`${styles.screen} screen-enter`}>
      <p className={styles.title}>Esta carta no está disponible.</p>
      {recipientId ? (
        <p className={styles.detail}>
          No encontramos el enlace <span>“{recipientId}”</span>.
        </p>
      ) : null}
      <a className={styles.link} href="/?para=amistad01">
        Ir al inicio
      </a>
    </main>
  );
}
