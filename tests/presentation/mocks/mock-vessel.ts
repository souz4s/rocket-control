import { GetVesselInfo } from "@/domain/use-cases";
import { mockVesselResult } from "@/tests/domain/mocks";

export class GetVesselInfoSpy implements GetVesselInfo {
  params: GetVesselInfo.Params | undefined;
  callsCount = 0;
  result = mockVesselResult();
  perform = async (params: GetVesselInfo.Params): Promise<GetVesselInfo.Result> => {
    this.callsCount++;
    this.params = params;
    return { vessel: this.result.vessel };
  };
}
