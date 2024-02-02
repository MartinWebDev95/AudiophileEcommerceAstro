import useQuantityInput from '../../hooks/useQuantityInput';
import { useCartStore } from '../../store/cartStore';
import QuantityInput from '../QuantityInput';
import styles from './AddToCart.module.css';

const AddToCart = ({ product }) => {
  const { quantity, handleIncrement, handleDecrement } = useQuantityInput();
  const { cart, setAddCartProduct } = useCartStore(state => state);

  const handleAddProductToCart = () => {
    const {
      id, cartImage, shortName, price,
    } = product;

    const productCart = {
      id,
      cartImage,
      shortName,
      quantity,
      price,
    };

    //Add a new product to the cart
    setAddCartProduct({ 
      cart: { 
        products: [...cart.products, productCart],
        totalPriceCart: cart.totalPriceCart + (productCart.quantity * productCart.price),
      },
    });

    localStorage.setItem('cart', JSON.stringify({
      cart: { 
        products: [...cart.products, productCart],
        totalPriceCart: cart.totalPriceCart + (productCart.quantity * productCart.price),
      }
    }));
  };

  return (
    <>
      <QuantityInput 
        quantity={quantity}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />

      <button
        type="button"
        className={styles.buttonAddToCart}
        onClick={handleAddProductToCart}
        disabled={cart.products.some((cartItem) => cartItem.id === product.id)}
      >
        {cart.products.some((cartItem) => cartItem.id === product.id)
          ? ('In the cart')
          : ('Add to cart')}
      </button>
    </>
  )
}

export default AddToCart