import PostcardPreview from './PostcardPreview';
import EnvelopePreview from './EnvelopePreview';
import { asset } from '../lib/assets';
import styles from '../styles/HomeHub.module.css';

const HUB_BACKGROUND = asset('assets/home/fondo_inicial.png');

export default function HomeHub({ onOpenPostcard, onOpenEnvelope }) {
  return (
    <main
      className={`${styles.hub} screen-enter`}
      style={{ backgroundImage: `url(${HUB_BACKGROUND})` }}
    >
      <div className={styles.hub__stage}>
        <div className={styles.hub__stack}>
          <div className={`${styles.hub__piece} ${styles['hub__piece--postcard']}`}>
            <PostcardPreview onOpen={onOpenPostcard} />
          </div>
          <div className={`${styles.hub__piece} ${styles['hub__piece--envelope']}`}>
            <EnvelopePreview onOpen={onOpenEnvelope} />
          </div>
        </div>
      </div>
    </main>
  );
}
