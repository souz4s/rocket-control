import { GetVesselInfo } from "@/domain/use-cases";
import { HttpHelper } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";

export class GetVesselInfoController implements Controller {
  constructor(private readonly getVesselInfo: GetVesselInfo) {}
  handle = async (request: GetVesselInfoController.Request) => {
    try {
      const getResult = await this.getVesselInfo.perform(request);
      return HttpHelper.OK(getResult.vessel);
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  };
}

export namespace GetVesselInfoController {
  export type Request = {
    [client: string]: any;
  };
}
