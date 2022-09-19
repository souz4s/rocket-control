/* eslint-disable */
// @ts-ignore
import { createClient, spaceCenter } from "krpc-node";
import { config } from "dotenv";

config();

export const krpcClient = {
  async createConnection() {
    await createClient({
      rpc: {
        protocol: process.env.PROTOCOL,
        host: process.env.HOST,
        port: process.env.PORT,
      },
    });
  },

  async getConnection() {
    return spaceCenter();
  },
};
