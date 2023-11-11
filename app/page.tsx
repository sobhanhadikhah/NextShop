import { Product } from "@prisma/client";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import Products from "./components/client/products";
import Navbar from "./components/layout/navbar";
import Cart from "./components/server/productCartDefault";
import { getProducts } from "./services/product";

export default async function Home() {
  /* async function getProducts(): Promise<ProductResponse | undefined> {
    try {
      const result = await fetch(
        "http://localhost:3000/api/product?limit=10",
        {
          method: "GET",
          cache: "no-store",
        }
      );
      const data = await result.json(); // Store the response data
      console.log("result", data); // Log the data
      return data; // Return the stored data
    } catch (error) {
      throw new Error("error");
    }
  } */
  /* const data = await getProducts(); */
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 1
      }
    }
  });
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts

  });
  return (
    <>
      <Navbar />
      <div className="max-w-[1560px]  mx-auto  font-yekan">
        <div className="grid grid-cols-12">
          <HydrationBoundary state={dehydrate(queryClient)}>
            {/* {data?.products?.map((item) => <Cart key={item.id} item={item} />)} */}
            <Products />
          </HydrationBoundary>
        </div>
      </div>
    </>
  );
}
