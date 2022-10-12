import { GetBiome } from "@/domain/use-cases";
import { GetBiomeRepository } from "@/data/protocols";

export class KrpcGetBiome implements GetBiome {
  constructor(private readonly getBiomeRepository: GetBiomeRepository) {}
  perform = async (params: GetBiome.Params): Promise<GetBiome.Result> => {
    const createResult = await this.getBiomeRepository.getBiome({
      client: params.client,
    });
    return { biome: createResult.biome };
  };
}
