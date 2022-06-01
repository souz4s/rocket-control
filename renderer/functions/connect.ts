import createClient from "krpc-node";

const connect = async () => {
    const client = await createClient({
        rpc: { // default values for connection with krpc
            protocol: "ws", // protocol used is WebSockets
            host: "127.0.0.1",
            port: "50000/?name=connect" // setting port and client name
        }
    });
};

export { connect };
