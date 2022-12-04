import { GetVesselInfo } from "@/domain/use-cases";

import { faker } from "@faker-js/faker";

export const mockVesselParams = (): GetVesselInfo.Params => ({
  client: faker.datatype.json(),
});

export const mockVesselResult = (): GetVesselInfo.Result => ({
  vessel: {
    altitude: Number(faker.random.numeric(5)),
    apoapsis: Number(faker.random.numeric(5)),
    atmosphereDensity: Number(faker.random.numeric(1)),
    dryMass: Number(faker.random.numeric(3)),
    latitude: Number(faker.address.latitude()),
    longitude: Number(faker.address.longitude()),
    periapsis: Number(faker.random.numeric(5)),
    pitch: Number(faker.random.numeric(2)),
    signalStrength: Number(faker.random.numeric(1)),
    speed: Number(faker.random.numeric(4)),
    vesselMass: Number(faker.random.numeric(3)),
  },
});
