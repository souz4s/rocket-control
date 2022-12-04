import { GetVesselInfo } from "@/domain/use-cases";
import { GetVesselInfoRepository } from "@/data/protocols/krpc";

export class KrpcGetVesselInfo implements GetVesselInfo {
  constructor(private readonly getVesselInfoRepository: GetVesselInfoRepository) {}
  perform = async (params: GetVesselInfo.Params): Promise<GetVesselInfo.Result> => {
    const createResult = await this.getVesselInfoRepository.getVesselInfo(params);
    return { vessel: createResult.vessel };
  };
}
