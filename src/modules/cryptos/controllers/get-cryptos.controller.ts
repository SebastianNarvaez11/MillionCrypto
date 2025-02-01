/**
 * Controller for retrieving a paginated list of cryptocurrencies
 *
 * @description
 * This controller handles the request to fetch a paginated list of cryptocurrencies.
 * It uses the getCryptosUseCase to retrieve the data and maps the response
 * to the appropriate model format. Includes error handling for API requests.
 *
 * @param {CryptoRepository} repository - The repository instance for accessing crypto data
 * @param {number} take - The number of items to retrieve per page
 * @param {number} page - The page number to retrieve
 * @returns {Promise<IApiResponse<ICryptosResponsePaginated | null>>} A promise that resolves to an API response containing the paginated crypto data or error
 *
 * @example
 * // Get first page with 10 cryptos
 * const response = await getCryptosController(repository, 10, 1);
 * if (response.data) {
 *   // Handle success case
 *   console.log(response.data.cryptos);
 * } else {
 *   // Handle error case
 *   console.error(response.error);
 * }
 */
import {AxiosError} from 'axios';
import {IApiResponse, makeResponse} from '../../../config/errors';
import {getCryptosUseCase} from '../application/usecases';
import {CryptoRepository} from '../domain/repositories';
import {CryptoMapper} from '../infrastructure/mappers';
import {ICryptosResponsePaginated} from '../infrastructure/interface';

export const getCryptosController = async (
  repository: CryptoRepository,
  take: number,
  page: number,
): Promise<IApiResponse<ICryptosResponsePaginated | null>> => {
  try {
    const response = await getCryptosUseCase(repository, take, page);

    return makeResponse(
      {
        cryptos: CryptoMapper.fromGetCryptosResponseToCryptoModel(
          response.data,
        ),
        totalPages: Math.ceil(
          response.data.info.coins_num / (Number(take) || 1),
        ),
        currentPage: page,
      },
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
