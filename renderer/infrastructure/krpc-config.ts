// @ts-ignore
import createClient from "krpc-node";
import dotenv from "dotenv";

dotenv.config();

export class KrpcConfig {
  connect = async () => {
    await createClient({
      rpc: {
        protocol: process.env.PROTOCOL,
        host: process.env.HOST,
        port: process.env.PORT,
      },
    });
  };
}
