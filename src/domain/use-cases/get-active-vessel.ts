export interface GetActiveVessel {
  perform: (params: GetActiveVessel.Params) => Promise<GetActiveVessel.Result>;
}

export namespace GetActiveVessel {
  export type Params = { [client: string]: any };
  export type Result = { vessel: string };
}
