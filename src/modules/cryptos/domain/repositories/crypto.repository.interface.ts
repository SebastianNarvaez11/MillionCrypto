/**
 * Interface defining the contract for cryptocurrency data access
 *
 * @description
 * This repository interface defines the methods required for accessing cryptocurrency data.
 * It provides functionality for retrieving both paginated lists of cryptocurrencies and
 * individual cryptocurrency details by ID.
 *
 * @interface
 */
import {AxiosResponse} from 'axios';
import {
  IGetCryptoByIdResponse,
  IGetCryptosResponse,
} from '../../infrastructure/interface';

export interface CryptoRepository {
  /**
   * Retrieves a paginated list of cryptocurrencies
   *
   * @param {number} take - Number of items to retrieve per page
   * @param {number} page - Page number to retrieve
   * @returns {Promise<AxiosResponse<IGetCryptosResponse>>} Promise resolving to paginated crypto data
   */
  getCryptos(
    take: number,
    page: number,
  ): Promise<AxiosResponse<IGetCryptosResponse>>;

  /**
   * Retrieves details for a specific cryptocurrency by ID
   *
   * @param {string} id - Unique identifier of the cryptocurrency
   * @returns {Promise<AxiosResponse<IGetCryptoByIdResponse[]>>} Promise resolving to crypto details
   */
  getCryptoById(id: string): Promise<AxiosResponse<IGetCryptoByIdResponse[]>>;
}
