const telemetry = require('./telemetry') //importing telemetry data
const connect = require('./connection/connect') //importing connection data

const run = async() => { //commands sent to the rocket
    await connect() //report connection data
        //await telemetry() //report telemetry data
}

run()