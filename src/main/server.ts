import { krpcClient } from "@/infrastructure/krpc";
import { VesselRepository } from "@/infrastructure/krpc/repositories";

krpcClient
  .createConnection()
  .then(async (response) => {
    const vesselRepository = new VesselRepository().getActiveVessel(response);
    console.log(`Connected to ${(await vesselRepository).vessel}`);
  })
  .catch((err) => {
    console.log(err instanceof Error ? err.message : err);
  });
