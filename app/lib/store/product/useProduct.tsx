import { Product } from "@prisma/client";
import { create } from "zustand";

interface ProductStore {
  product?:Product | null,
  name:string
  addToProductStore: (item:Product)=> void,
  addName: (item:string)=> void
}
const useProduct = create<ProductStore>((set) => ({
  product: null,
  name: "",
  addToProductStore: async (item:Product) => set({ product: item }),
  addName: (item:string) => set({ name: item })
}));
export default useProduct;
