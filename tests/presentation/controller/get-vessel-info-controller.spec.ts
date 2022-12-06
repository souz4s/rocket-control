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

  it("should return the status ok when get vessel info", async () => {
    const { sut, getVesselInfoSpy } = makeSut();
    const result = await sut.handle(mockVesselParams());
    expect(getVesselInfoSpy.callsCount).toBe(1);
    expect(result.statusCode).toBe(200);
  });

  it("should return internal server error when getVesselInfo throws error", async () => {
    const { sut, getVesselInfoSpy } = makeSut();
    jest.spyOn(getVesselInfoSpy, "perform").mockImplementationOnce(() => {
      throw new Error().stack;
    });
    const result = await sut.handle(mockVesselParams());
    expect(getVesselInfoSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(500);
  });
});
