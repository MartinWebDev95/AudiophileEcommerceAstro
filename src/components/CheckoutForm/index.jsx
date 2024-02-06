import { useState } from 'react'
import Checkout from '@components/Checkout'
import Summary from '@components/Summary'
import ResumeModal from '@components/ResumeModal'
import useForm from '@hooks/useForm'
import styles from './CheckoutForm.module.css'

const CheckoutForm = () => {
  const [isResumeHidden, setIsResumeHidden] = useState(true);
  
  const {
    formData,
    formErrors,
    paymentMethod,
    handleChangeInput,
    handleFocusInput,
    handleBlurInput,
    handleSubmit
  } = useForm({ setIsResumeHidden });

  return (
    <>
      <form action="#" className={styles.form} onSubmit={handleSubmit}>
        <Checkout 
          formData={formData}
          formErrors={formErrors}
          paymentMethod={paymentMethod}
          handleChangeInput={handleChangeInput}
          handleFocusInput={handleFocusInput}
          handleBlurInput={handleBlurInput}
        />

        <Summary />
      </form>

      <ResumeModal isResumeHidden={isResumeHidden} setIsResumeHidden={setIsResumeHidden} />
    </>
  )
}

export default CheckoutForm