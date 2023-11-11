import { Product } from "@prisma/client";

type ProductResponse = {
  products: Product[];
};
export async function getProducts(): Promise<ProductResponse | undefined> {
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
}
export async function getProduct(id:string):Promise<Product | undefined> {
  const result = await fetch(
    `http://localhost:3000/api/product/${id}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  const data = await result.json();
  return data;
}
