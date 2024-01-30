import useQuantityInput from '../../hooks/useQuantityInput';
import QuantityInput from '../QuantityInput';
import styles from './ProductCart.module.css';

function ProductCart({ item, summary = false }) {
  const { quantity, handleIncrement, handleDecrement } = useQuantityInput(item.quantity);

  return (
    <li className={styles.cartItem}>
      <div className={styles.containerCartItem}>
        <div className={styles.infoCartItem}>
          <button
            type="button"
            className={styles.containerCartImage}
          >
            <img src={item?.cartImage} alt={item?.shortName} />
            <div className={styles.deleteCartImage}>
              <span />
              <span />
            </div>
          </button>

          <div className={styles.detailCartItem}>
            <p className={styles.nameCartItem}>{item?.shortName}</p>
            <p className={styles.priceCartItem}>{`$ ${item?.price}`}</p>
          </div>
        </div>

        {summary ? (
          <p className={styles.summaryQuantity}>{`x${item?.quantity}`}</p>
        ) : (
          <QuantityInput
            quantity={quantity}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        )}
      </div>
    </li>
  );
}

export default ProductCart;
