import { KrpcGetVesselInfo } from "@/data/use-cases";
import { VesselRepository } from "@/infrastructure/krpc/repositories";

export const makeKrpcGetVesselInfo = (): KrpcGetVesselInfo => {
  const vesselRepository = new VesselRepository();
  return new KrpcGetVesselInfo(vesselRepository);
};
