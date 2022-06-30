// @ts-ignore
import creteClient from "krpc-node";
import dotenv from "dotenv";

dotenv.config();

export const connect = async () => {
  await creteClient({
    rpc: {
      protocol: process.env.PROTOCOL,
      host: process.env.HOST,
      port: process.env.PORT,
    },
  });
};
