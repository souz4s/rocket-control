import { InternalServerError } from "@/presentation/erros";
import { HttpResponse } from "@/presentation/protocols";

export class HttpHelper {
  static INTERNAL_SERVER_ERROR = (err: Error): HttpResponse<Error> => ({
    statusCode: 500,
    body: new InternalServerError(err.stack || ""),
  });
}
