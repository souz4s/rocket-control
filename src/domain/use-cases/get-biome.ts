export interface GetBiome {
  perform: (params: GetBiome.Params) => Promise<GetBiome.Result>;
}

export namespace GetBiome {
  export type Params = { client: object };
  export type Result = { biome: string };
}
