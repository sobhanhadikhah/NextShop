/* eslint-disable consistent-return */
import { Product } from "@prisma/client";
import Link from "next/link";
import React from "react";

import DeleteProduct from "./components/client/deleteProductButton";

type ProductResponse = {
  products: Product[];
};
export default async function Home() {
  async function getProducts(): Promise<
    ProductResponse | undefined
    > {
    try {
      const result = await fetch(
        "http://localhost:3000/api/product",
        { method: "GET", cache: "default" }
      );
      return result.json();
    } catch (error) {
      throw new Error("error");
    }
  }

  const data = await getProducts();
  return (
    <div className="max-w-[1560px]  mx-auto font-yekan  ">
      <div className="grid grid-cols-12">
        {data?.products?.map((item) => (
          <Link
            href={`/product/${item.id}`}
            className="md:col-span-2 px-4 py-3 overflow-hidden grow cursor-pointer relative bg-neutral-000  col-span-12 mb-auto h-full text-right flex flex-col border hover:shadow-2xl transition-all duration-100 "
            key={item.id}>
            <div className="bg-white h-[240px] w-[240px]  relative ">
              {item.isOff ? (
                <span className="absolute top-3 text-red-400 right-3 ">
                  فروش ویژه
                </span>
              ) : null}
            </div>
            <div className="flex flex-col gap-3 p-1">
              <h2 className="text-sm font-light">{item.title}</h2>
              <div className={`flex ${item.isOff ? "justify-between" : "justify-end"} text-lg`}>

                {item.isOff
                  ? (
                    <span className="bg-red-500 text-sm flex items-center text-white rounded-full px-2">

                      {item.offPercent}
                      %
                    </span>
                  )
                  : null}
                <div className="flex flex-col text-left ">
                  <span className="text-left">
                    {" "}
                    {item.price.toLocaleString(
                      "en-US"
                    )}
                    {" "}
                    تومان
                    {" "}
                  </span>
                </div>
              </div>
              {item.isOff ? (
                <span className="text-gray-400  text-left  line-through">
                  {item.realPrice.toLocaleString("en-US")}
                </span>
              ) : null}

              {/* <DeleteProduct id={item.id} /> */}

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
