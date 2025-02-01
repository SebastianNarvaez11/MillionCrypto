/**
 * Interface representing a standardized API response structure
 * @template T The type of data expected in the response
 */
export interface IApiResponse<T> {
  /** The response data of type T, or null if no data */
  data: T | null;
  /** Error message if any, or null if no error */
  error: string | null;
  /** HTTP status code of the response */
  statusCode: number;
}

/**
 * Creates a standardized API response object
 * @template T The type of data in the response
 * @param data The response data or null
 * @param error The error message or null
 * @param statusCode The HTTP status code
 * @returns An IApiResponse object containing the provided data, error and status code
 *
 * @example
 * // Success response
 * const response = makeResponse(userData, null, 200);
 *
 * // Error response
 * const errorResponse = makeResponse(null, "Not found", 404);
 */
export const makeResponse = <T>(
  data: T | null,
  error: string | null,
  statusCode: number,
): IApiResponse<T> => {
  return {data, error, statusCode};
};
