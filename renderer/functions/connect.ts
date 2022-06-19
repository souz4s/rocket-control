// @ts-ignore
import createClient from "krpc-node";

export const connect = async () => {
  const client = await createClient({
    rpc: {
      protocol: "ws",
      host: "127.0.0.1",
      port: "50000/?name=connect",
    },
  });
};
