import { DotsThreeVertical } from "@phosphor-icons/react/dist/ssr/DotsThreeVertical";
import { Heart } from "@phosphor-icons/react/dist/ssr/Heart";
import { ShoppingBag } from "@phosphor-icons/react/dist/ssr/ShoppingBag";
import { Product } from "@prisma/client";
import Link from "next/link";
import { useParams } from "next/navigation";

import BackButton from "@/app/components/client/backButton";
import Navbar from "@/app/components/layout/navbar";
import useIsMobile from "@/app/hooks/useIsMobile";

export default function DashboardLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const isMobile = true;
  
  return (
    <section>
      {isMobile ? (
        <nav className="w-full px-3 bg-white  flex items-center z-10 justify-between sticky top-0 h-[56px] ">
          <div className="flex items-center gap-3">
            <BackButton size={24} />
            <Link
              href="/"
              className="font-bold text-red-600">
              NextShop
            </Link>
          </div>

          <div className="flex items-center gap-3 ">
            <Heart size={24} />
            <ShoppingBag size={24} />
            <DotsThreeVertical size={24} />
          </div>
        </nav>
      ) : (
        <Navbar />
      )}
      {children}
      <div className="bg-white h-[100px]  shadow-black shadow-2xl sticky w-full items-center bottom-0 z-50 flex   justify-between  md:hidden px-3 ">
        <button
          className="bg-red-500 mt-5 text-white px-6 rounded-md py-2"
          type="button">
          افزودن به سبد خرید
        </button>
        <div className="flex gap-1 text-lg mt-5 ">
          {/* {data?.price.toLocaleString("en-US")} */}
          <span>تومان</span>
        </div>
      </div>
    </section>
  );
}
