import { InternalServerError } from "@/presentation/erros";
import { HttpResponse } from "@/presentation/protocols";

export class HttpHelper {
  static OK = <T>(data: T, message?: string): HttpResponse<T> => ({
    statusCode: 200,
    body: data,
    message,
  });

  static INTERNAL_SERVER_ERROR = (err: Error): HttpResponse<Error> => ({
    statusCode: 500,
    body: new InternalServerError(err.stack || ""),
  });
}
