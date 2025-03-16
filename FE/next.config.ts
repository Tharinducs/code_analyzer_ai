import dotenv from "dotenv";
import path from "path";
import { NextConfig } from "next";

const envFile = path.resolve(process.cwd(), 'environments', `.env.${process.env.NODE_ENV}`);
dotenv.config({ path: envFile });

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;
