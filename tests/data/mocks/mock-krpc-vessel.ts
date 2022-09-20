import { GetActiveVesselRepository } from "@/data/protocols";
import { mockVesselParams } from "@/tests/domain/mocks";

export class GetActiveVesselRepositorySpy implements GetActiveVesselRepository {
  result = mockVesselParams();
  getActiveVessel = async (): Promise<GetActiveVesselRepository.Result> => {
    return { vessel: this.result.vessel };
  };
}
