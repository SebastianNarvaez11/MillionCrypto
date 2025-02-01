/**
 * Controller for retrieving a specific cryptocurrency by ID
 *
 * @description
 * This controller handles the request to fetch a single cryptocurrency by its ID.
 * It uses the getCryptoByIdUseCase to retrieve the data and maps the response
 * to the appropriate model format. Includes error handling for API requests.
 *
 * @param {CryptoRepository} repository - The repository instance for accessing crypto data
 * @param {string} id - The unique identifier of the cryptocurrency to retrieve
 * @returns {Promise<IApiResponse<ICryptoByIdModel | null>>} A promise that resolves to an API response containing the crypto data or error
 *
 * @example
 * // Get crypto details for Bitcoin
 * const response = await getCryptoByIdController(repository, "bitcoin");
 * if (response.data) {
 *   // Handle success case
 *   console.log(response.data);
 * } else {
 *   // Handle error case
 *   console.error(response.error);
 * }
 */
import {AxiosError} from 'axios';
import {IApiResponse, makeResponse} from '../../../config/errors';
import {getCryptoByIdUseCase} from '../application/usecases';
import {CryptoRepository} from '../domain/repositories';
import {CryptoMapper} from '../infrastructure/mappers';
import {ICryptoByIdModel} from '../domain/models';

export const getCryptoByIdController = async (
  repository: CryptoRepository,
  id: string,
): Promise<IApiResponse<ICryptoByIdModel | null>> => {
  try {
    const response = await getCryptoByIdUseCase(repository, id);

    return makeResponse(
      CryptoMapper.fromGetCryptoByIdResponseToCryptoByIdModel(
        response.data[0],
      ) || null,
      null,
      response.status,
    );
  } catch (error) {
    const axiosError = error as AxiosError;
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return makeResponse(null, errorMessage, axiosError.response?.status || 500);
  }
};
