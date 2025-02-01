import {CryptoRepository} from '../../domain/repositories';

/**
 * Use case to retrieve a paginated list of cryptocurrencies
 *
 * @description
 * This use case encapsulates the business logic for fetching a paginated list of cryptocurrencies
 * from the repository. It allows specifying the number of items per page and the page number.
 *
 * @param {CryptoRepository} cryptoRepository - The repository instance for accessing crypto data
 * @param {number} take - The number of items to retrieve per page
 * @param {number} page - The page number to retrieve
 * @returns {Promise<Crypto[]>} A promise that resolves to an array of cryptocurrencies
 *
 * @example
 * // Get first page with 10 cryptos
 * const cryptos = await getCryptosUseCase(repository, 10, 1);
 */
export const getCryptosUseCase = (
  cryptoRepository: CryptoRepository,
  take: number,
  page: number,
) => {
  return cryptoRepository.getCryptos(take, page);
};
