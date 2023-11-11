import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

import { client } from "@/app/lib/aws/aws";
import { prisma } from "@/app/lib/prisma";

export async function POST(req:NextRequest, res:NextResponse) {
  try {
    await prisma.$connect();
    const data = await req.formData();
    const file: File | null = data.get("file") as unknown as File;
    if (!file) {
      return NextResponse.json({ message: "no file" }, { status: 500 });
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const name = new Date().getTime();
    const params = {
      Bucket: process.env.LIARA_BUCKET_NAME as string,
      Key: `NextShop/${name}.jpg`,
      Body: buffer,
    };
    await client.send(new PutObjectCommand(params));
    return NextResponse.json({ message: "true", url: `https://sobhanblog.storage.iran.liara.space/NextShop/${name}.jpg` }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "false" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
