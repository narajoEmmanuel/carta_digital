import PostcardPreview from './PostcardPreview';
import EnvelopePreview from './EnvelopePreview';
import styles from '../styles/HomeHub.module.css';

export default function HomeHub({ onOpenPostcard, onOpenEnvelope }) {
  return (
    <main className={`${styles.hub} screen-enter`}>
      <div className={styles.hub__stage}>
        <div className={`${styles.hub__piece} ${styles['hub__piece--postcard']}`}>
          <PostcardPreview onOpen={onOpenPostcard} />
        </div>
        <div className={`${styles.hub__piece} ${styles['hub__piece--envelope']}`}>
          <EnvelopePreview onOpen={onOpenEnvelope} />
        </div>
      </div>
    </main>
  );
}
