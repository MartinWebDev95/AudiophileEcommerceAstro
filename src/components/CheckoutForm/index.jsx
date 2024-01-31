import Checkout from '../Checkout'
import Summary from '../Summary'
import styles from './CheckoutForm.module.css'

const CheckoutForm = () => {
  return (
    <form action="#" className={styles.form}>
      <Checkout />

      <Summary />
    </form>
  )
}

export default CheckoutForm