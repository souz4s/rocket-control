/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";

import { expressRouterAdapter } from "@/main/adapters";
import { makeKrpcGetVesselInfoController } from "@/main/factories/controller";

const vesselRoutes = Router();

vesselRoutes.get("/vessel/info", expressRouterAdapter(makeKrpcGetVesselInfoController()));

export { vesselRoutes };
