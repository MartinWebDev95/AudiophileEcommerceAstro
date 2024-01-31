import { useState } from 'react';
import { useCartStore } from '../../store/cartStore';
import styles from './ResumeModal.module.css';
import ProductCart from '../ProductCart';

function ResumeModal({ isResumeHidden, setIsResumeHidden }) {
  const { cart, setRemoveAllCartProducts } = useCartStore(state => state);
  const [showMore, setShowMore] = useState(false);

  const handleBackHome = () => {
    setIsResumeHidden(true);
    document.body.style.overflow = 'auto';

    //Reset the cart
    setRemoveAllCartProducts();

    window.location = '/';
  };

  return (
    <div className={styles.resumeBg} aria-hidden={isResumeHidden}>
      <div className={styles.resumeContainer}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="32" fill="#D87D4A" />
          <path d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812" stroke="white" strokeWidth="4" />
        </svg>

        <h1 className={styles.resumeTitle}>
          <span>
            Thank you
          </span>
          <span>
            for your order
          </span>
        </h1>

        <p className={styles.resumeSubtitle}>You will receive an email confirmation shortly.</p>

        <div className={styles.resumeOrderContainer}>
          <div>
            <ul className={styles.resumeList}>
              {showMore
                ? (
                  cart.products?.map((item) => (
                    <ProductCart key={item.id} item={item} summary />
                  ))
                ) : (
                  <ProductCart key={cart.products[0]?.id} item={cart.products[0]} summary />
                )}
            </ul>

            {cart.products?.length > 1
              && (
                <button
                  type="button"
                  className={styles.btnResumeShowMore}
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore
                    ? (
                      'View less'
                    ) : (
                      `and ${cart.products.length - 1} other item(s)`
                    )}
                </button>
              )}
          </div>

          <div className={styles.orderPriceContainer}>
            <p>Grand total</p>

            <p>{`$ ${(((cart.totalPriceCart * 20) / 100) + cart.totalPriceCart).toLocaleString('en-US')}`}</p>
          </div>
        </div>

        <button
          type="button"
          className={styles.btnBackHome}
          onClick={handleBackHome}
        >
          Back to home
        </button>
      </div>
    </div>
  );
}

export default ResumeModal;
