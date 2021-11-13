let { createClient } = require('krpc-node')

const execute = async() => {
    const client = await createClient({
        rpc: { //default values ​​for connection with krpc
            protocol: 'ws', //protocol used is WebSockets
            host: 'localhost',
            port: '50000/?name=uzah', //setting port and client name
        }
    })
}

execute()