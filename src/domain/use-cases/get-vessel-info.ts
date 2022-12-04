import { VesselModel } from "@/domain/models";

export interface GetVesselInfo {
  perform: (params: GetVesselInfo.Params) => Promise<GetVesselInfo.Result>;
}

export namespace GetVesselInfo {
  export type Params = { [client: string]: any };
  export type Result = { vessel: VesselModel };
}
