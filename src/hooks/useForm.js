import { useState } from 'react';

const regexName = /^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ]{2,}[\s]?){1,5}$/;
const regexEmail = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';
const regexPhone = '([0-9]){9}?';
const regexZipCode = '([0-9]){5}?';
const regexEMoneyPin = '([0-9]){4}?';

const initialStateForm = {
  name: '',
  email: '',
  phone: '',
  address: '',
  zipCode: '',
  city: '',
  country: '',
  paymentMethod: 'e-money',
  eMoneyNumber: '',
  eMoneyPin: '',
};

const initialStateErrors = {
  name: '',
  email: '',
  phone: '',
  address: '',
  zipCode: '',
  city: '',
  country: '',
  eMoneyNumber: '',
  eMoneyPin: '',
};

function useForm({ setIsResumeHidden }) {
  const [formData, setFormData] = useState(initialStateForm);

  const [formErrors, setFormErrors] = useState(initialStateErrors);

  const [paymentMethod, setPaymentMethod] = useState('e-money');

  const handleChangeInput = (e) => {
    // Select radio button
    if (e.target.name === 'paymentMethod') {
      setPaymentMethod(e.target.value);
    }

    /* When radio button 'Cash on Delivery' is selected, two properties of formData
       object are removed and when radio button 'e-Money' is selected that two
       properties come back to the object again */
    if ((e.target.name === 'paymentMethod') && (e.target.value === 'cash')) {
      const { eMoneyNumber, eMoneyPin, ...formDataRest } = formData;

      setFormErrors({
        ...formErrors,
        eMoneyNumber: '',
        eMoneyPin: '',
      });

      setFormData(formDataRest);
    } else if ((e.target.name === 'paymentMethod') && (e.target.value === 'e-money')) {
      setFormData({ ...formData, eMoneyNumber: '', eMoneyPin: '' });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // When the input has the focus
  const handleFocusInput = (e) => {
    setFormErrors({
      ...formErrors,
      [e.target.name]: '',
    });
  };

  // When the input loses the focus
  const handleBlurInput = (e) => {
    if (e.target.value === '') {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'Field cannot be empty',
      });
    } else if ((e.target.name === 'name') && (!e.target.value.match(regexName))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a name',
      });
    } else if ((e.target.name === 'email') && (!e.target.value.match(regexEmail))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a correct email',
      });
    } else if ((e.target.name === 'phone') && (!e.target.value.match(regexPhone))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a correct phone',
      });
    } else if ((e.target.name === 'zipCode') && (!e.target.value.match(regexZipCode))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a correct ZIP Code',
      });
    } else if ((e.target.name === 'eMoneyNumber') && (!e.target.value.match(regexPhone))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a correct e-Money Number',
      });
    } else if ((e.target.name === 'eMoneyPin') && (!e.target.value.match(regexEMoneyPin))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a correct e-Money PIN',
      });
    } else {
      setFormErrors({
        ...formErrors,
        [e.target.name]: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Checks if an input is empty when it has never had focus
    if (Object.values(formData).includes('')) {
      let newObject = {};

      Object.entries(formData).forEach((item) => {
        if (item[1] === '') {
          newObject = { ...newObject, [item[0]]: 'Field cannot be empty' };
        } else if (item[0] === 'paymentMethod') {
          newObject = { ...newObject, [item[0]]: '' };
        } else {
          newObject = { ...newObject, [item[0]]: formErrors[item[0]] };
        }
      });

      // Update the form errors state
      setFormErrors(newObject);

      return;
    }

    // If there are errors in the form, the purchase is not completed
    if (Object.values(formErrors).some((error) => error !== '')) return;

    setIsResumeHidden(false);
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
  };

  return {
    formData,
    setFormData,
    formErrors,
    paymentMethod,
    setPaymentMethod,
    handleChangeInput,
    handleFocusInput,
    handleBlurInput,
    handleSubmit,
  };
}

export default useForm;
