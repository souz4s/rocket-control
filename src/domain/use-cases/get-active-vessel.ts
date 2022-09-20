export interface GetActiveVessel {
  perform: () => Promise<GetActiveVessel.Result>;
}

export namespace GetActiveVessel {
  export type Result = { vessel: string };
}
