import { Router } from "express";

import { vesselRoutes } from "@/main/routes";

const router = Router();

router.use(vesselRoutes);

export { router, vesselRoutes };
