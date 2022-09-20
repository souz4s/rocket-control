import { GetActiveVessel } from "@/domain/use-cases";
import { GetActiveVesselRepository } from "@/data/protocols";

export class KrpcGetActiveVessel implements GetActiveVessel {
  constructor(private readonly getActiveVesselRepository: GetActiveVesselRepository) {}
  perform = async (): Promise<GetActiveVessel.Result> => {
    const createResult = await this.getActiveVesselRepository.getActiveVessel();
    return { vessel: createResult.vessel };
  };
}
