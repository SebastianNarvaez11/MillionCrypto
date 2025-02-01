/**
 * Controller class for handling cryptocurrency-related operations
 *
 * @description
 * This controller provides methods for retrieving cryptocurrency data,
 * including paginated lists and individual crypto details. It handles
 * API responses and error notifications using React Native alerts.
 *
 * @class
 */
import {Alert} from 'react-native';
import {CryptoRepositoryImp} from '../infrastructure/repositories-imp';
import {getCryptosController} from './get-cryptos.controller';
import {ICryptosResponsePaginated} from '../infrastructure/interface';
import {getCryptoByIdController} from './get-crypto-by-id.controller';
import {ICryptoByIdModel} from '../domain/models';

export class CryptoController {
  private static cryptoRepository = new CryptoRepositoryImp();

  /**
   * Retrieves a paginated list of cryptocurrencies
   *
   * @param {number} take - Number of items to retrieve per page
   * @param {number} page - Page number to retrieve
   * @returns {Promise<ICryptosResponsePaginated>} Promise resolving to paginated crypto data
   *
   * @example
   * // Get first page with 10 cryptos
   * const cryptos = await CryptoController.getCryptos(10, 1);
   */
  static async getCryptos(
    take: number,
    page: number,
  ): Promise<ICryptosResponsePaginated> {
    const response = await getCryptosController(
      this.cryptoRepository,
      take,
      page,
    );

    if (response.error) {
      Alert.alert(
        'Ocurrió un error al obtener las criptomonedas',
        `${response.error} - status code: ${response.statusCode}`,
      );
    }
    return response.data || {cryptos: [], totalPages: 0, currentPage: 0};
  }

  /**
   * Retrieves details for a specific cryptocurrency by ID
   *
   * @param {string} id - Unique identifier of the cryptocurrency
   * @returns {Promise<ICryptoByIdModel | null>} Promise resolving to crypto details or null
   *
   * @example
   * // Get details for Bitcoin
   * const bitcoin = await CryptoController.getCryptoById("bitcoin");
   */
  static async getCryptoById(id: string): Promise<ICryptoByIdModel | null> {
    const response = await getCryptoByIdController(this.cryptoRepository, id);

    if (response.error) {
      Alert.alert(
        'Ocurrió un error al obtener la criptomoneda',
        response.error,
      );
    }

    return response.data;
  }
}
