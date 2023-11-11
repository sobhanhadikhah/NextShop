"use client";

import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/app/services/product";

import Cart from "../../server/productCartDefault";

function Products() {
  const { data, } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts
  });

  return data?.products?.map((item) => <Cart key={item.id} item={item} />);
}

export default Products;
