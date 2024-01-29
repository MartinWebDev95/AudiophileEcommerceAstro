import styles from './Cart.module.css';

function Cart({ isCartHidden, setIsCartHidden }) {
  const handleCloseCart = () => {
    setIsCartHidden(!isCartHidden);
    document.body.style.overflow = 'auto';
  }

  return (
    <div
      className={styles.cartBackground}
      aria-hidden={isCartHidden}
      onClick={handleCloseCart}
    >
      <div className={styles.cartContainer}>
        <div className={styles.cartContainerEmpty}>
          <h2 className={styles.cartTitleEmpty}>Your cart is empty</h2>
          <img className={styles.cartImageEmpty} src="/assets/cart/empty-cart.png" alt="Empty Cart" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default Cart;
