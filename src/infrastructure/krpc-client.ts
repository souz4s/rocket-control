/* eslint-disable */
// @ts-ignore
import { createClient } from "krpc-node";
import { config } from "dotenv";

config();

export const krpcClient = async () => {
  await createClient({
    rpc: {
      protocol: process.env.PROTOCOL,
      host: process.env.HOST,
      port: process.env.PORT,
    },
  });
};
