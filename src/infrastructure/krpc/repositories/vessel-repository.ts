import { GetActiveVesselRepository } from "@/data/protocols";
import { krpcClient } from "@/infrastructure/krpc";

export class VesselRepository implements GetActiveVesselRepository {
  getActiveVessel = async (params: GetActiveVesselRepository.Params): Promise<GetActiveVesselRepository.Result> => {
    const vesselSelection = await params.send(krpcClient.getConnection().getActiveVessel());
    const vessel = await vesselSelection.name.get();
    return { vessel: vessel };
  };
}
