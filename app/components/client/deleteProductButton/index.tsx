"use client";

type Props = {
    id:string
}

function DeleteProduct({ id }: Props) {
  async function Delete(productId:string) {
    try {
      await fetch("http://localhost:3000/api/product", { method: "DELETE", body: JSON.stringify(productId) });
    } catch (error) {
      throw new Error("error");
    }
  }
  return (
    <button type="button" onClick={() => Delete(id)} className="bg-red-500 mb-auto text-white p-1 ">حذف</button>
  );
}

export default DeleteProduct;
