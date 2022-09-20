import { KrpcGetActiveVessel } from "@/data/use-cases";
import { mockVesselParams } from "@/tests/domain/mocks";
import { GetActiveVesselRepositorySpy } from "@/tests/data/mocks";

const makeSut = () => {
  const getActiveVesselRepositorySpy = new GetActiveVesselRepositorySpy();
  const sut = new KrpcGetActiveVessel(getActiveVesselRepositorySpy);
  return { sut, getActiveVesselRepositorySpy };
};

describe("KrpcGetActiveVessel", () => {
  it("should return the 'vessel'", async () => {
    const { sut, getActiveVesselRepositorySpy } = makeSut();
    getActiveVesselRepositorySpy.result = mockVesselParams();
    const result = await sut.perform();
    expect(result).toHaveProperty("vessel");
    expect(result.vessel).toBe(getActiveVesselRepositorySpy.result.vessel);
  });
});
