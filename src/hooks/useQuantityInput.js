import { useState } from 'react';

function useQuantityInput(initialQuantity = 1) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  };

  return {
    quantity, handleIncrement, handleDecrement,
  };
}

export default useQuantityInput;