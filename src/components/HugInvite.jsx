import styles from '../styles/HugInvite.module.css';

export default function HugInvite({ onOpen }) {
  return (
    <div className={styles.invite}>
      <button type="button" className={styles.button} onClick={onOpen}>
        Si quieres, te dejo un abrazo aquí
      </button>
    </div>
  );
}
