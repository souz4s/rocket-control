import { makeKrpcGetVesselInfo } from "@/main/factories/use-cases/krpc";
import { GetVesselInfoController } from "@/presentation/controllers";

export const makeKrpcGetVesselInfoController = () => {
  const controller = new GetVesselInfoController(makeKrpcGetVesselInfo());
  return controller;
};
