import { KrpcGetVesselInfo } from "@/data/use-cases";
import { mockVesselParams } from "@/tests/domain/mocks";
import { GetVesselInfoRepositorySpy } from "@/tests/data/mocks";

const makeSut = () => {
  const getVesselInfoRepositorySpy = new GetVesselInfoRepositorySpy();
  const sut = new KrpcGetVesselInfo(getVesselInfoRepositorySpy);
  return { sut };
};

describe("KrpcGetVesselInfo", () => {
  it("should return the vessel parameter", async () => {
    const { sut } = makeSut();
    const mockedParams = mockVesselParams();
    const result = await sut.perform(mockedParams);
    expect(result).toHaveProperty("vessel");
  });
});
