/* eslint-disable no-return-await */
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { getProduct } from "@/app/services/product";

import ProductPage from "./components/page";

async function Product({ params }:{params:{id:string}}) {
  /* const data = await getProduct(params.id); */
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [params.id],
    queryFn: () => getProduct(params.id),
  });
  return (
    <div dir="rtl" className="max-w-[1560px] h-screen  mx-auto ">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductPage id={params.id} />
      </HydrationBoundary>
    </div>
  );
}

export default Product;
