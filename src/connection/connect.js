let { spaceCenter, createClient } = require('krpc-node')
const { promisify } = require('util')
const sleep = promisify(setTimeout)

const connect = async() => {
    const client = await createClient({
        rpc: { //default values ​​for connection with krpc
            protocol: 'ws', //protocol used is WebSockets
            host: 'localhost',
            port: '50000/?name=connect', //setting port and client name
        }
    })

    while (true) {
        try {
            let vessel = await client.send(spaceCenter.getActiveVessel())
            let comms = await vessel.comms.get()

            //capturing connection data
            let getSignalCall = spaceCenter.commsGetSignalStrength(comms.id)
            let getSingalDelay = spaceCenter.commsGetSignalDelay(comms.id)
            let response = await client.send([getSignalCall, getSingalDelay])

            //printing connection data
            console.log('Connected ', {
                signal: response.results[0].value,
                delay: response.results[1].value
            })
        } catch (err) {
            client.close()
            console.log(err)
        }
        await sleep(1000)
    }
}

module.exports = connect