const { createClient, spaceCenter } = require('krpc-node')
const { promisify } = require('util')
const sleep = promisify(setTimeout)

const telemetry = async() => { //connecting telemetry data to krpc
    const client = await createClient({
        rpc: { //default values ​​for connection with krpc
            protocol: 'ws', //protocol used is WebSockets
            host: 'localhost',
            port: '50000/?name=telemetry', //setting port and client name
        }
    })

    while (true) {
        try {
            let vessel = await client.send(spaceCenter.getActiveVessel())
            let control = await vessel.control.get();
            let orbitalReference = await vessel.orbitalReferenceFrame.get();
            let flight = await vessel.flight(orbitalReference);

            //setting data for telemetry
            let getThrottleCall = spaceCenter.controlGetThrottle(control.id)
            let getHeadingCall = spaceCenter.flightGetHeading(flight.id)
            let getElevationCall = spaceCenter.flightGetElevation(flight.id)
            let response = await client.send([getThrottleCall, getHeadingCall, getElevationCall])

            //taking the respective values
            var throttle = response.results[0].value
            var heading = response.results[1].value
            var elevation = response.results[2].value

            //printing telemetry information
            console.log({ throttle, heading, elevation })
        } catch (err) {
            client.close()
            console.log(err)
        }
        await sleep(1000)

    }
}

module.exports = telemetry