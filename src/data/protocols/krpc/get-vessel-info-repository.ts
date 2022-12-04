import { VesselModel } from "@/domain/models";

export interface GetVesselInfoRepository {
  getVesselInfo: (params: GetVesselInfoRepository.Params) => Promise<GetVesselInfoRepository.Result>;
}

export namespace GetVesselInfoRepository {
  export type Params = { [client: string]: any };
  export type Result = { vessel: VesselModel };
}
