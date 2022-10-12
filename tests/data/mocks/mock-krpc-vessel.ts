import { GetActiveVesselRepository, GetBiomeRepository } from "@/data/protocols";
import { mockVesselParams } from "@/tests/domain/mocks";

export class GetActiveVesselRepositorySpy implements GetActiveVesselRepository {
  params: GetActiveVesselRepository.Params | undefined;
  result = mockVesselParams();
  getActiveVessel = async (params: GetActiveVesselRepository.Params): Promise<GetActiveVesselRepository.Result> => {
    this.params = params;
    return { vessel: this.result.vessel };
  };
}

export class GetBiomeRepositorySpy implements GetBiomeRepository {
  params: GetBiomeRepository.Params | undefined;
  result = mockVesselParams();
  getBiome = async (params: GetBiomeRepository.Params): Promise<GetBiomeRepository.Result> => {
    this.params = params;
    return { biome: this.result.biome };
  };
}
