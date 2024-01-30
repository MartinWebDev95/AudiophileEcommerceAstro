import { useCartStore } from '../../store/cartStore';
import Link from '../Link.astro';
import styles from './Cart.module.css';

function Cart({ isCartHidden, setIsCartHidden }) {
  const { cart } = useCartStore(state => state);

  const handleCloseCart = (e) => {
    if (!e.target.getAttribute('aria-hidden')) return;

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
        {cart.products?.length === 0
          ? (
            <div className={styles.cartContainerEmpty}>
              <h2 className={styles.cartTitleEmpty}>Your cart is empty</h2>
              <img className={styles.cartImageEmpty} src="/assets/cart/empty-cart.png" alt="Empty Cart" loading="lazy" />
            </div>
          ) : (
            <>
              <section className={styles.cartHeader}>
                <p className={styles.quantityCart}>
                  Cart (
                  {`${cart.products?.length}`}
                  )
                </p>

                <button
                  type="button"
                  className={styles.cartRemoveAll}
                >
                  Remove all
                </button>
              </section>

              <section className={styles.containerCartList}>
                <ul className={styles.listCartItem}>
                  {cart.products?.map((item) => (
                    <h1>{item.shortName}</h1>
                  ))}
                </ul>
              </section>

              <section className={styles.containerCheckout}>
                <div className={styles.cartTotalPrice}>
                  <p>Total:</p>
                  <p>
                    {`$ ${cart?.totalPriceCart?.toLocaleString('en-US')}`}
                  </p>
                </div>

                <a
                  href="/checkout"
                  className={styles.linkCheckout}
                >
                  Checkout
                </a>
              </section>
            </>
          )}
      </div>
    </div>
  );
}

export default Cart;
