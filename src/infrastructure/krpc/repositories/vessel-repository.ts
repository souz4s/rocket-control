import { GetActiveVesselRepository, GetVesselInfoRepository } from "@/data/protocols/krpc";
import { krpcClient } from "@/infrastructure/krpc";

export class VesselRepository implements GetActiveVesselRepository {
  getActiveVessel = async (params: GetActiveVesselRepository.Params): Promise<GetActiveVesselRepository.Result> => {
    const vesselSelection = await params.send(krpcClient.getConnection().getActiveVessel());
    const vessel = await vesselSelection.name.get();
    return { vessel: vessel };
  };

  getVesselInfo = async (params: GetVesselInfoRepository.Params): Promise<GetVesselInfoRepository.Result> => {
    const vesselSelection = await params.send(krpcClient.getConnection().getActiveVessel());
    const vesselOrbit = await vesselSelection.orbit.get();
    const vesselFlight = await vesselSelection.flight(vesselSelection);
    const vesselComms = await vesselSelection.comms.get();
    const altitude = await vesselFlight.meanAltitude.get();
    const apoapsis = await vesselOrbit.apoapsisAltitude.get();
    const atmosphereDensity = await vesselFlight.atmosphereDensity.get();
    const dryMass = await vesselSelection.dryMass.get();
    const gForce = await vesselFlight.gForce.get();
    const latitude = await vesselFlight.latitude.get();
    const longitude = await vesselFlight.longitude.get();
    const periapsis = await vesselOrbit.periapsisAltitude.get();
    const pitch = await vesselFlight.pitch.get();
    const signalStrength = await vesselComms.signalStrength.get();
    const speed = await vesselFlight.speed.get();
    const vesselMass = await vesselSelection.mass.get();
    return {
      vessel: {
        altitude: altitude,
        apoapsis: apoapsis,
        atmosphereDensity: atmosphereDensity,
        dryMass: dryMass,
        gForce: gForce,
        latitude: latitude,
        longitude: longitude,
        periapsis: periapsis,
        pitch: pitch,
        signalStrength: signalStrength,
        speed: speed,
        vesselMass: vesselMass,
      },
    };
  };
}
