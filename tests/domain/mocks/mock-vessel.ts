import { faker } from "@faker-js/faker";

export const mockVesselParams = () => ({
  vessel: faker.internet.userName(),
  biome: faker.datatype.string(),
});
