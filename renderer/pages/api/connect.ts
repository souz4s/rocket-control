import type { NextApiRequest, NextApiResponse } from "next";
import { KrpcConfig } from "@/infrastructure";

export default async function common(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const krpcConnection = new KrpcConfig();
  await krpcConnection.connect();

  res.status(200).json({ response: "Connection established" });
}
