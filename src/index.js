const telemetry = require('./telemetry') //importing telemetry data

const run = async() => { //commands sent to the rocket
    await telemetry()
}

run()