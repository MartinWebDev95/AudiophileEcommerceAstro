import { useCartStore } from '../../store/cartStore';
import useQuantityInput from '../../hooks/useQuantityInput';
import QuantityInput from '../QuantityInput';
import styles from './ProductCart.module.css';

function ProductCart({ item, summary = false }) {
  const { cart, setRemoveCartProduct } = useCartStore(state => state);
  const { quantity, handleIncrement, handleDecrement } = useQuantityInput(item?.quantity, item);

  const handleDeleteItemFromCart = () => {
    //Remove a specific product from the cart
    setRemoveCartProduct({
      cart: {
        products: cart.products?.filter((prod) => prod.id !== item.id),
        totalPriceCart: cart.totalPriceCart - (item.price * quantity),
      }
    });
  }

  return (
    <li className={styles.cartItem}>
      <div className={styles.containerCartItem}>
        <div className={styles.infoCartItem}>
          <button
            type="button"
            className={styles.containerCartImage}
            onClick={handleDeleteItemFromCart}
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
