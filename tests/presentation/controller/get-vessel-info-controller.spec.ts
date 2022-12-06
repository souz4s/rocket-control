import { GetVesselInfoController } from "@/presentation/controllers";
import { mockVesselParams } from "@/tests/domain/mocks";
import { GetVesselInfoSpy } from "@/tests/presentation/mocks";

const makeSut = () => {
  const getVesselInfoSpy = new GetVesselInfoSpy();
  const sut = new GetVesselInfoController(getVesselInfoSpy);
  return { sut, getVesselInfoSpy };
};

describe("GetVesselInfoController", () => {
  it("should call 'getVesselInfo' in request of vessel parameters", async () => {
    const { sut, getVesselInfoSpy } = makeSut();
    await sut.handle(mockVesselParams());
    expect(getVesselInfoSpy.callsCount).toBe(1);
  });
});
