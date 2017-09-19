import { Error } from './../data-models/error-response';
export function mapError(error: any): Error {
  const errorJson = error.json();
  const mappedError = <Error>({
    errorCode: errorJson.errorCode,
    message: errorJson.message,
    devMessage: errorJson.devMessage
  });
  return mappedError;
}
