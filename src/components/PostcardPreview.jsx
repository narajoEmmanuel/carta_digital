import ClickHint from './ClickHint';
import styles from '../styles/PostcardPreview.module.css';

const POSTAL_PREVIEW = '/assets/home/postal_preview.png';

export default function PostcardPreview({ onOpen }) {
  return (
    <button
      type="button"
      className={styles.card}
      onClick={onOpen}
      aria-label="Abrir postal"
    >
      <img
        className={styles.image}
        src={POSTAL_PREVIEW}
        alt=""
        draggable={false}
      />
      <ClickHint position="bottomRight" />
    </button>
  );
}
