import { Product } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/app/lib/prisma";

function setOff(isOff:boolean, offPercent:number |null, price:number):number {
  if (isOff && offPercent) {
    const discountedPrice = price - (price * (offPercent / 100));
    return discountedPrice;
  }
  return price;
}

export async function GET(req:NextApiRequest, res:NextApiResponse<Product>) {
  try {
    await prisma.$connect();
    const product = await prisma.product.findMany();
    return Response.json({ products: product }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
export async function POST(req:NextRequest, res:NextApiResponse) {
  try {
    await prisma.$connect();
    const data:Product = await req.json();

    const result = await prisma.product.create({
      data: {
        description: data.description,
        title: data.title,
        price: setOff(data.isOff, data.offPercent, data.price),
        isOff: data.isOff,
        offPercent: data.isOff ? data.offPercent : null,
        realPrice: data.price
      }
    });
    return NextResponse.json({ result, status: "0k" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
export async function DELETE(req:NextRequest, res:NextApiResponse) {
  try {
    await prisma.$connect();
    const data = await req.json();
    const result = await prisma.product.delete({ where: { id: data } });
    return Response.json({ result });
  } catch (error) {
    throw new Error();
  } finally {
    prisma.$disconnect();
  }
}
