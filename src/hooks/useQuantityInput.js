import { useState } from 'react';
import { useCartStore } from '../store/cartStore';

function useQuantityInput(initialQuantity = 1, product = {}) {
  const { cart, setAddCartProduct } = useCartStore(state => state);
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);

    /* If the product object is empty that means that the quantity of the product 
       in the cart is not being updated */
    if (Object.keys(product).length === 0) return;

    //Update the quantity and price of the product in the cart
    const newState = cart.products?.map((item) => (item.id === product.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
    ));

    setAddCartProduct({
      cart: {
        products: newState,
        totalPriceCart: cart.totalPriceCart + product.price,
      }
    });
  };

  const handleDecrement = () => {
    if (quantity === 1) return;
    
    setQuantity(quantity - 1);

    /* If the product object is empty that means that the quantity of the product 
       in the cart is not being updated */
    if (Object.keys(product).length === 0) return;

    //Update the quantity and price of the product in the cart
    const newState = cart.products?.map((item) => (item.id === product.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
    ));

    setAddCartProduct({
      cart: {
        products: newState,
        totalPriceCart: cart.totalPriceCart - product.price,
      }
    });
  };

  return {
    quantity, handleIncrement, handleDecrement,
  };
}

export default useQuantityInput;