import { create } from 'zustand'

export const useCartStore = create((set) => ({
  cart: { products: [], totalPriceCart: 0 },
  setAddCartProduct: (newProduct) => set(newProduct),
  setRemoveCartProduct: (removeProduct) => set(removeProduct),
  setRemoveAllCartProducts: () => set({ cart: { products: [], totalPriceCart: 0 } }),
}));