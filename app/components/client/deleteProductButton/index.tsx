"use client";

import toast from "react-hot-toast";

type Props = {
    id:string
}

function DeleteProduct({ id }: Props) {
  async function Delete(productId:string) {
    toast.loading("درحال حذف محصول", { id });
    try {
      toast.success("با موفقیت حدف شد.", { id });
      await fetch("http://localhost:3000/api/product", { method: "DELETE", body: JSON.stringify(productId) });
    } catch (error) {
      toast.error("خطا", { id });
    }
  }
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        Delete(id);
      }}
      className="bg-red-500 mb-auto text-white p-1 ">
      حذف
    </button>
  );
}

export default DeleteProduct;
