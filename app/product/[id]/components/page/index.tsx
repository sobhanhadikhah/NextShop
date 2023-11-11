"use client";

/* eslint-disable react/jsx-no-undef */
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { getProduct } from "@/app/services/product";

function ProductPage({ id }:{id:string}) {
  const { data, isLoading } = useQuery({
    queryKey: [id],
    queryFn: () => getProduct(id),
    refetchOnWindowFocus: false,
  });

  return (
    <div className="grid grid-cols-12 gap-3 mt-5 ">

      <div className="md:col-span-4  col-span-12 ">
        {
            data?.isOff ? <div className="col-span-12 w-full px-3   ">
              <span className="text-red-600 text-lg ">فروش ویژه</span>
            </div> : null
          }
        <div className="relative w-full   aspect-video md:h-[450px]  ">
          <Image fill src={data?.images[0] as string} className="rounded-xl" alt={data?.title as string} />
        </div>
      </div>
      <div className="md:col-span-8 col-span-full grid grid-cols-12 gap-3 bg-white  ">
        <div className="col-span-12">
          {data?.title}
        </div>
        <div className="grid col-span-12 grid-cols-12">
          <div className="col-span-4">
            info
          </div>
          <div className="col-span-8">
            price
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductPage;
