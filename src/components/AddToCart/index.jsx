import useQuantityInput from '../../hooks/useQuantityInput';
import QuantityInput from '../QuantityInput';
import styles from './AddToCart.module.css';

const AddToCart = () => {
  const { quantity, handleIncrement, handleDecrement } = useQuantityInput();

  return (
    <>
      <QuantityInput 
        quantity={quantity}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />

      <button
        type="button"
        class={styles.buttonAddToCart}
      >
        Add to cart
      </button>
    </>
  )
}

export default AddToCart