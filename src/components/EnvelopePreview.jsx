import { asset } from '../lib/assets';
import ClickHint from './ClickHint';
import styles from '../styles/EnvelopePreview.module.css';

const SOBRE_PREVIEW = asset('assets/home/sobre_preview.webp');

export default function EnvelopePreview({ onOpen }) {
  return (
    <button
      type="button"
      className={styles.wrap}
      onClick={onOpen}
      aria-label="Abrir carta"
    >
      <img
        className={styles.image}
        src={SOBRE_PREVIEW}
        alt=""
        draggable={false}
      />
      <ClickHint position="bottomLeft" />
    </button>
  );
}
