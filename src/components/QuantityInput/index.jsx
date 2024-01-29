import styles from './QuantityInput.module.css';

const QuantityInput = ({ quantity, handleIncrement, handleDecrement }) => {
  return (
    <div className={styles.containerQuantityInput}>
      <button type="button" onClick={handleDecrement}>
        -
      </button>

      <input
        type="number"
        id="quantity"
        name="quantity"
        value={quantity}
        readOnly
      />

      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  )
}

export default QuantityInput