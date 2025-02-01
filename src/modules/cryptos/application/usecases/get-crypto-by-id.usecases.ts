import {CryptoRepository} from '../../domain/repositories';

/**
 * Use case to retrieve a specific cryptocurrency by its ID
 *
 * @description
 * This use case encapsulates the business logic for fetching a single cryptocurrency
 * by its unique identifier from the repository.
 *
 * @param {CryptoRepository} cryptoRepository - The repository instance for accessing crypto data
 * @param {string} id - The unique identifier of the cryptocurrency to retrieve
 * @returns {Promise<Crypto>} A promise that resolves to the requested cryptocurrency
 *
 * @example
 * const crypto = await getCryptoByIdUseCase(repository, "bitcoin");
 */
export const getCryptoByIdUseCase = (
  cryptoRepository: CryptoRepository,
  id: string,
) => {
  return cryptoRepository.getCryptoById(id);
};
