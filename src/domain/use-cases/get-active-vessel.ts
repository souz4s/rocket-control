export interface GetActiveVessel {
  perform: (params: GetActiveVessel.Params) => Promise<GetActiveVessel.Result>;
}

export namespace GetActiveVessel {
  export type Params = { client: object };
  export type Result = { vessel: string };
}
