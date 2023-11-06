import { Product } from "@prisma/client"

export type ProductResponse = {
    products:Product[] 
  }