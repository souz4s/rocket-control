export interface GetActiveVesselRepository {
  getActiveVessel: (params: GetActiveVesselRepository.Params) => Promise<GetActiveVesselRepository.Result>;
}

export namespace GetActiveVesselRepository {
  export type Params = { [x: string]: any; client: object };
  export type Result = { vessel: string };
}
