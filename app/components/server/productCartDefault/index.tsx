import { Star } from "@phosphor-icons/react/dist/ssr/Star";
import { Product } from "@prisma/client";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

import DeleteProduct from "../../client/deleteProductButton";

type Props = {
  item:Product
}

function Cart({ item }: Props) {
  return (
    <Link
      target="_blank"
      href={`/product/${item.id}`}
      className="md:col-span-2 px-4 py-3 overflow-hidden grow cursor-pointer relative bg-neutral-000 col-span-12 mt-auto h-full text-right flex
       flex-col border  md:hover:shadow-xl hover:shadow-none  transition-all duration-100 "
      key={item.id}>
      {item.isOff ? (
        <span className=" text-red-500 md:hidden block  ">
          فروش ویژه
        </span>
      ) : null}
      <div className="flex items-center md:flex-col md:items-start  ">

        <div className=" md:h-[240px] md:w-[240px] w-[118px] h-[118px]  relative  ">
          <Image src={item.images[0]} alt="image" fill />
          {item.isOff ? (
            <span className="text-red-400 absolute hidden md:block top-3  ">
              فروش ویژه
            </span>
          ) : null}
        </div>
        <h2 className="text-sm font-light">{item.title}</h2>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-sm flex gap-1 items-center ">
          4.2
          {" "}
          <Star weight="fill" color="#F9BC00" size={12} />
        </h2>
        <div className={cx("flex   text-lg", {
          "justify-between": item.isOff,
          "justify-end": !item.isOff
        })}>

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

      </div>
      {/* <DeleteProduct id={item.id} /> */}
    </Link>
  );
}

export default Cart;
