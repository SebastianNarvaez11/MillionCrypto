/**
 * Implementation of the CryptoRepository interface for accessing cryptocurrency data
 *
 * @description
 * This class implements the CryptoRepository interface to provide concrete implementations
 * for retrieving cryptocurrency data from the API. It handles both paginated lists and
 * individual crypto details.
 *
 * @class
 * @implements {CryptoRepository}
 */
import {mainApi} from '../../../../config/apis';
import {IGetCryptoByIdResponse, IGetCryptosResponse} from '../interface';
import {CryptoRepository} from '../../domain/repositories';

export class CryptoRepositoryImp implements CryptoRepository {
  /**
   * Retrieves a paginated list of cryptocurrencies
   *
   * @param {number} take - Number of items to retrieve per page (default: 12)
   * @param {number} page - Page number to retrieve (default: 1)
   * @returns {Promise<AxiosResponse<IGetCryptosResponse>>} Promise resolving to paginated crypto data
   */
  async getCryptos(take: number = 12, page: number = 1) {
    const start = (page - 1) * take;
    return await mainApi.get<IGetCryptosResponse>(
      `/api/tickers/?start=${start}&limit=${take}`,
    );
  }

  /**
   * Retrieves details for a specific cryptocurrency by ID
   *
   * @param {string} id - Unique identifier of the cryptocurrency
   * @returns {Promise<AxiosResponse<IGetCryptoByIdResponse[]>>} Promise resolving to crypto details
   */
  async getCryptoById(id: string) {
    return await mainApi.get<IGetCryptoByIdResponse[]>(`/api/ticker/?id=${id}`);
  }
}
