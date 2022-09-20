export interface GetActiveVesselRepository {
  getActiveVessel: () => Promise<GetActiveVesselRepository.Result>;
}

export namespace GetActiveVesselRepository {
  export type Result = { vessel: string };
}
