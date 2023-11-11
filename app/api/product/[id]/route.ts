import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

import { getUrlParam } from "@/app/func/server";
import { prisma } from "@/app/lib/prisma";

export async function GET(req:NextApiRequest, res:NextResponse) {
  try {
    await prisma.$connect();
    const id = getUrlParam(req.url);
    const product = await prisma.product.findFirst({ where: { id } });
    return Response.json({
      status: 200, message: "true", ...product
    }, { status: 200 });
  } catch (error) {
    throw new Error("error");
  } finally {
    await prisma.$disconnect();
  }
}
