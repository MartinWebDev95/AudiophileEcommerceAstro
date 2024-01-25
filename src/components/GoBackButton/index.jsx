import styles from './GoBackButton.module.css'

const GoBackButton = () => {
  return (
    <div className={styles.containerGoBackBtn}>
      <button
        type="button"
        className={styles.goBackBtn}
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  )
}

export default GoBackButton