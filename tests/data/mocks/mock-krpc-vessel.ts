import { GetVesselInfoRepository } from "@/data/protocols/krpc";
import { mockVesselResult } from "@/tests/domain/mocks";

export class GetVesselInfoRepositorySpy implements GetVesselInfoRepository {
  params: GetVesselInfoRepository.Params | undefined;
  result = mockVesselResult();
  getVesselInfo = async (params: GetVesselInfoRepository.Params): Promise<GetVesselInfoRepository.Result> => {
    this.params = params;
    return { vessel: this.result?.vessel };
  };
}
