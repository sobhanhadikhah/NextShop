/* eslint-disable prettier/prettier */
import { S3Client, type S3ClientConfig } from "@aws-sdk/client-s3";

const s3Config: S3ClientConfig = {
  region: "default", // Replace 'your-aws-region' with the appropriate AWS region, e.g., 'us-east-1'
  endpoint: process.env.LIARA_ENDPOINT,
  credentials: {
    accessKeyId: process.env.LIARA_ACCESS_KEY as string,
    secretAccessKey: process.env.LIARA_SECRET_KEY as string,
  },
};
export const client = new S3Client(s3Config);
