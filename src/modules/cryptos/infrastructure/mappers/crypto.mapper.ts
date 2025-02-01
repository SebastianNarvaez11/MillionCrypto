/**
 * @fileoverview Mapper class for transforming cryptocurrency API responses into domain models
 * @module CryptoMapper
 */

import {ICryptoByIdModel, ICryptoModel} from '../../domain/models';
import {IGetCryptoByIdResponse, IGetCryptosResponse} from '../interface';

/**
 * Mapper class for converting cryptocurrency API responses to domain models
 *
 * @class CryptoMapper
 * @description
 * Provides static methods to transform cryptocurrency data from external API responses
 * into strongly-typed domain models used within the application.
 */
export class CryptoMapper {
  /**
   * Maps a paginated cryptocurrency API response to an array of crypto models
   *
   * @static
   * @param {IGetCryptosResponse} response - The paginated response from the cryptocurrency API
   * @returns {ICryptoModel[]} Array of mapped cryptocurrency models with basic information
   *
   * @example
   * const apiResponse = await api.getCryptos();
   * const cryptoModels = CryptoMapper.fromGetCryptosResponseToCryptoModel(apiResponse);
   */
  static fromGetCryptosResponseToCryptoModel(
    response: IGetCryptosResponse,
  ): ICryptoModel[] {
    return response.data.map(crypto => ({
      id: crypto.id,
      name: crypto.name,
      symbol: crypto.symbol,
      price_usd: crypto.price_usd,
      percent_change_24h: crypto.percent_change_24h,
    }));
  }

  /**
   * Maps a single cryptocurrency API response to a detailed crypto model
   *
   * @static
   * @param {IGetCryptoByIdResponse} response - The detailed response for a single cryptocurrency
   * @returns {ICryptoByIdModel} Mapped cryptocurrency model with detailed information
   *
   * @example
   * const apiResponse = await api.getCryptoById('bitcoin');
   * const cryptoModel = CryptoMapper.fromGetCryptoByIdResponseToCryptoByIdModel(apiResponse);
   */
  static fromGetCryptoByIdResponseToCryptoByIdModel(
    response: IGetCryptoByIdResponse,
  ): ICryptoByIdModel {
    return {
      id: response.id,
      symbol: response.symbol,
      name: response.name,
      rank: response.rank,
      price_usd: response.price_usd,
      percent_change_24h: response.percent_change_24h,
      percent_change_1h: response.percent_change_1h,
      percent_change_7d: response.percent_change_7d,
      price_btc: response.price_btc,
      market_cap_usd: response.market_cap_usd,
      volume24: response.volume24,
      volume24a: response.volume24a,
    };
  }
}
