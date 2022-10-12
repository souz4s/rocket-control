export interface GetBiomeRepository {
  getBiome: (params: GetBiomeRepository.Params) => Promise<GetBiomeRepository.Result>;
}

export namespace GetBiomeRepository {
  export type Params = { [x: string]: any; client: object };
  export type Result = { biome: string };
}
