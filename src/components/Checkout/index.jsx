import styles from './Checkout.module.css'

const Checkout = () => {
  return (
    <div className={styles.containerCheckout}>
      <h1 className={styles.title}>Checkout</h1>

      <fieldset className={styles.fieldsetBilling}>
        <legend className={styles.legend}>Billing details</legend>

        <div className={styles.containerInput}>
          <label htmlFor="name">
            Name
          </label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Alexei Ward"
            value=""
          />
        </div>

        <div className={styles.containerInput}>
          <label htmlFor="email">
            Email Address
          </label>

          <input
            type="text"
            name="email"
            id="email"
            placeholder="alexei@mail.com"
            value=""
          />
        </div>

        <div className={styles.containerInput}>
          <label htmlFor="phone">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="+1 202-555-0136"
            value=""
          />
        </div>
      </fieldset>

      <fieldset className={styles.fieldsetShipping}>
        <legend className={styles.legend}>Shipping info</legend>

        <div className={`${styles.containerInput} ${styles.address}`}>
          <label htmlFor="address">
            Address
          </label>

          <input
            type="text"
            name="address"
            id="address"
            placeholder="1137 Williams Avenue"
            value=""
          />
        </div>

        <div className={styles.containerInput}>
          <label htmlFor="zipCode">
            ZIP Code
          </label>

          <input
            type="text"
            name="zipCode"
            id="zipCode"
            placeholder="10001"
            value=""
          />
        </div>

        <div className={styles.containerInput}>
          <label htmlFor="city">
            City
          </label>

          <input
            type="text"
            name="city"
            id="city"
            placeholder="New York"
            value=""
          />
        </div>

        <div className={styles.containerInput}>
          <label htmlFor="country">
            Country
          </label>

          <input
            type="text"
            name="country"
            id="country"
            placeholder="United States"
            value=""
          />
        </div>
      </fieldset>

      <fieldset className={styles.fieldsetPayment}>
        <legend className={styles.legend}>Payment details</legend>

        <p>Payment Method</p>

        <div className={styles.containerInputsRadio}>
          <div className={styles.inputRadio}>
            <label htmlFor="e-money">
              <input
                type="radio"
                id="e-money"
                name="paymentMethod"
                value="e-money"
              />

              <span>
                e-Money
              </span>
            </label>
          </div>

          <div className={styles.inputRadio}>
            <label htmlFor="cash">
              <input
                type="radio"
                id="cash"
                name="paymentMethod"
                value="cash"
              />

              <span>
                Cash on Delivery
              </span>
            </label>
          </div>
        </div>

        {/* {paymentMethod === 'e-money' ? (
          <>
            <div className={styles.containerInput}>
              <label htmlFor="e-moneyNumber">
                e-Money Number

                {(formErrors.eMoneyNumber !== '')
                 && (
                 <span>{formErrors.eMoneyNumber}</span>
                 )}
              </label>

              <input
                type="text"
                name="eMoneyNumber"
                id="e-moneyNumber"
                placeholder="238521993"
                value={formData.eMoneyNumber}
                onChange={handleChangeInput}
                onFocus={handleFocusInput}
                onBlur={handleBlurInput}
              />
            </div>

            <div className={styles.containerInput}>
              <label htmlFor="e-moneyPin">
                e-Money PIN

                {(formErrors.eMoneyPin !== '')
                  && (
                  <span>{formErrors.eMoneyPin}</span>
                  )}
              </label>

              <input
                type="text"
                name="eMoneyPin"
                id="e-moneyPin"
                placeholder="6891"
                value={formData.eMoneyPin}
                onChange={handleChangeInput}
                onFocus={handleFocusInput}
                onBlur={handleBlurInput}
              />
            </div>
          </>
        ) : (
          <div className={styles.containerCashOnDelivery}>
            <img src="/assets/checkout/icon-cash-on-delivery.svg" alt="Cash On Delivery" />
            <p>
              The ‘Cash on Delivery’ option enables you to pay in
              cash when our delivery courier arrives at your residence.
              Just make sure your address is correct so that your order will
              not be cancelled.
            </p>
          </div>
        )} */}
      </fieldset>
    </div>
  )
}

export default Checkout