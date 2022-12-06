import { krpcClient } from "@/infrastructure/krpc";
import { VesselRepository } from "@/infrastructure/krpc/repositories";
import { App, Env } from "@/main/config";

krpcClient
  .createConnection()
  .then(async (response) => {
    const app = App();
    const vesselRepository = new VesselRepository().getActiveVessel(response);
    app.listen(Env.PORT, () => console.log(`\n> Server is running on port ${Env.PORT}`));
    console.log(`Connected to ${(await vesselRepository).vessel}`);
  })
  .catch((err) => {
    console.log(err instanceof Error ? err.message : err);
  });
