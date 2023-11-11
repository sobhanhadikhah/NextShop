import { Product } from "@prisma/client";

export type Params = {
  limit:number
}
export type ProductResponse = {
    product:Product,
    params: Params
}
