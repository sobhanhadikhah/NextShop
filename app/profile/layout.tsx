import { ReactNode } from "react";

import BackButton from "../components/client/backButton";

type Props = {
  children:ReactNode
}

function CreateProductLayout({ children }:Props) {
  return (
    <>
      <nav className="flex w-full shadow-sm justify-between h-[58px] items-center px-3 top-0 sticky bg-white z-50 ">
        <BackButton size={24} />
        <h3 className="w-full font-extrabold text-lg text-red-600 items-center text-center ">
          ساخت محصول
        </h3>
      </nav>
      {children}

    </>

  );
}

export default CreateProductLayout;
