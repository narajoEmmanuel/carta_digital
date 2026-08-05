import styles from '../styles/LetterPage.module.css';

export default function LetterPage({ seccion }) {
  return (
    <article className={`${styles.page} paper-noise`}>
      {seccion.titulo ? <h2 className={styles.title}>{seccion.titulo}</h2> : null}
      <p className={styles.text}>{seccion.texto}</p>
    </article>
  );
}
