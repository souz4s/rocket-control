const { createClient, spaceCenter } = require('krpc-node')

const telemetry = async() => {
    const client = await createClient({
        rpc: { //default values ​​for connection with krpc
            protocol: 'ws', //protocol used is WebSockets
            host: 'localhost',
            port: '50000/?name=telemetry', //setting port and client name
        }
    })

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
        console.log({
            throttle: response.results[0].value,
            heading: response.results[1].value,
            elevation: response.results[2].value
        })
    } catch (err) {
        await client.close()
        throw err
    }
}


module.exports = telemetry