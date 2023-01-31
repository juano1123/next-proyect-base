import styles from '../styles/Spinner.module.css'

export default function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
}