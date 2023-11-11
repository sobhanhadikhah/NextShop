/* eslint-disable max-len */
import { Product } from "@prisma/client";
import { create } from "zustand";

interface Cart {
  count: number;
  cart: Product[]; // Change to an array to store multiple items in the cart
  addToCart: (item: Product) => void;
  removeAllCart: () => void;
}

const useCart = create<Cart>((set) => ({
  count: 0,
  cart: [], // Initialize cart as an empty array

  addToCart: (item: Product) => set((state) => ({ count: state.count + 1, cart: [...state.cart, item] })),
  removeAllCart: () => set({ count: 0, cart: [] }),
}));

export default useCart;
