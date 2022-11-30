import { GetActiveVesselRepository } from "@/data/protocols";
import { mockVesselParams } from "@/tests/domain/mocks";

export class GetActiveVesselRepositorySpy implements GetActiveVesselRepository {
  params: GetActiveVesselRepository.Params | undefined;
  result = mockVesselParams();
  getActiveVessel = async (params: GetActiveVesselRepository.Params): Promise<GetActiveVesselRepository.Result> => {
    this.params = params;
    return { vessel: this.result.vessel };
  };
}
