/* eslint-disable */
// @ts-ignore
import { createClient, spaceCenter } from "krpc-node";
import { config } from "dotenv";

config();

export const krpcClient = {
  async createConnection() {
    return await createClient({
      rpc: {
        protocol: process.env.PROTOCOL,
        host: process.env.HOST,
        port: process.env.PORT,
      },
    });
  },

  getConnection() {
    return spaceCenter;
  },
};
