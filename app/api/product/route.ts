import { Product } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import { getQueryParam, setOff } from "@/app/func/server";
import { prisma } from "@/app/lib/prisma";
import { Params } from "@/app/types/api/product";

export async function GET(req:NextApiRequest, res:NextApiResponse<Product>) {
  try {
    await prisma.$connect();
    const limit = await getQueryParam(req.url, "limit");
    const take = parseInt(limit, 10);
    const product = await prisma.product.findMany({ take });
    return Response.json({ products: product, limit: limit ?? 10 }, { status: 200 });
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

    await prisma.product.create({
      data: {
        description: data.description,
        title: data.title,
        price: setOff(data.isOff, data.offPercent, data.price),
        isOff: data.isOff,
        offPercent: data.isOff ? data.offPercent : null,
        realPrice: data.price,
        total: data.total,
        images: data.images
      }
    });
    return NextResponse.json({ data, status: "200" }, { status: 200 });
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
    await prisma.$disconnect();
  }
}
