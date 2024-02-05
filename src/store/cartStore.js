import { create } from 'zustand'
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set) => ({
      cart: { products: [], totalPriceCart: 0 },
      setAddCartProduct: (newProduct) => set(newProduct),
      setRemoveCartProduct: (removeProduct) => set(removeProduct),
      setRemoveAllCartProducts: () => set({ cart: { products: [], totalPriceCart: 0 } }),
    }),
    {
      name: 'cart',
    }
  ),
);