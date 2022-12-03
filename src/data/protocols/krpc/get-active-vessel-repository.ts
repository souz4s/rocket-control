export interface GetActiveVesselRepository {
  getActiveVessel: (params: GetActiveVesselRepository.Params) => Promise<GetActiveVesselRepository.Result>;
}

export namespace GetActiveVesselRepository {
  export type Params = { [client: string]: any };
  export type Result = { vessel: string };
}
