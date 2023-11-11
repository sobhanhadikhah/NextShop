"use client";

import { List } from "@phosphor-icons/react/dist/ssr/List";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import { ShoppingBag } from "@phosphor-icons/react/dist/ssr/ShoppingBag";
import Link from "next/link";

import useIsMobile from "@/app/hooks/useIsMobile";
import useCart from "@/app/lib/store/cart/useCart";

import LoginButton from "../../client/button";

function Navbar() {
  const isMobile = useIsMobile();
  const { count } = useCart();

  return (
    <nav className="w-full z-50 bg-white shadow-inner shadow-black sticky top-0 ">
      <div className="max-w-[1560px] flex mx-auto items-center p-3">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-3 items-center w-full md:w-auto ">
            <Link
              href="/"
              className="text-2xl font-extrabold md:block hidden  ">
              NextShop
            </Link>
            <div className="relative w-full ">
              <input
                placeholder="جستجو"
                type="text"
                className="bg-[#F0F0F1] w-full text-gray-500 px-14 py-2 outline-none focus:outline-none rounded-md border-none focus:border-none"
              />
              <MagnifyingGlass
                className="text-black absolute top-2 right-4"
                size={24}
              />
            </div>
          </div>
          <div className="md:flex gap-3 items-center  hidden  ">
            <LoginButton />
            <span>|</span>
            <div>
              {count}
              <ShoppingBag size={32} />
            </div>
          </div>
        </div>
      </div>
      {isMobile ? null : (
        <div className="max-w-[1560px]  hidden md:flex mx-auto items-center px-3 py-1">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-5 ">
              <button
                type="button"
                className="flex gap-2 items-center">
                <List size={16} />
                دسته بندی کالا ها
              </button>
              |
              <ul className="flex gap-3">
                <li>تست</li>
                <li>تست</li>
                <li>تست</li>
              </ul>
            </div>
            <h2>
              <button
                type="button"
                className="flex gap-2 items-center">
                <MapPin size={16} />
                لطفا شهر خود را انتخاب کنید
              </button>
            </h2>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
