import { KrpcGetBiome } from "@/data/use-cases";
import { mockVesselParams } from "@/tests/domain/mocks";
import { GetBiomeRepositorySpy } from "@/tests/data/mocks";

import { faker } from "@faker-js/faker";

const makeSut = () => {
  const getBiomeRepositorySpy = new GetBiomeRepositorySpy();
  const sut = new KrpcGetBiome(getBiomeRepositorySpy);
  return { sut, getBiomeRepositorySpy };
};

describe("KrpcGetBiome", () => {
  it("should return the biome", async () => {
    const { sut, getBiomeRepositorySpy } = makeSut();
    getBiomeRepositorySpy.result = mockVesselParams();
    const result = await sut.perform({ client: JSON.parse(faker.datatype.json()) });
    expect(result).toHaveProperty("biome");
    expect(result.biome).toBe(getBiomeRepositorySpy.result.biome);
  });
});
