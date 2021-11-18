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
            let getSpeedCall = spaceCenter.flightGetEquivalentAirSpeed(flight.id)
            let getMachCall = spaceCenter.flightGetMach(flight.id)
            let getElevationCall = spaceCenter.flightGetElevation(flight.id)
            let getAltitudeCall = spaceCenter.flightGetMeanAltitude(flight.id)
            let getMass = spaceCenter.vesselGetMass(vessel.id)
            let getAtmosphereCall = spaceCenter.flightGetAtmosphereDensity(flight.id)
            let response = await client.send([getThrottleCall, getSpeedCall, getMachCall, getElevationCall, getAltitudeCall, getMass, getAtmosphereCall])

            //taking the respective values
            var throttle = response.results[0].value
            var speed = response.results[1].value
            var mach = response.results[2].value
            var elevation = response.results[3].value
            var altitude = response.results[4].value
            var mass = response.results[5].value
            var atmosphere = response.results[6].value

            //printing telemetry information
            console.log({
                throttle,
                speed,
                mach,
                elevation,
                altitude,
                mass,
                atmosphere
            })
        } catch (err) {
            client.close()
            console.log(err)
        }
        await sleep(1000)
    }
}

module.exports = telemetry