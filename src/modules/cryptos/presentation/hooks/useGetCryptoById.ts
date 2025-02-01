/**
 * useGetCryptoById Hook
 *
 * @description
 * A custom React hook that fetches detailed information for a specific cryptocurrency by ID.
 * Uses React Query for data fetching and caching.
 *
 * Features:
 * - Automatic caching and revalidation
 * - Loading state handling
 * - Conditional fetching based on ID presence
 * - Configurable cache invalidation time
 *
 * @param {string} id - The unique identifier of the cryptocurrency to fetch
 *
 * @returns {Object} Hook state and data
 * @returns {boolean} .isLoading - Whether the data is currently being fetched
 * @returns {Object} .data - The fetched cryptocurrency data
 *
 * @example
 * ```tsx
 * const {
 *   data,
 *   isLoading
 * } = useGetCryptoById('bitcoin');
 * ```
 */

import {useQuery} from '@tanstack/react-query';
import {CryptoController} from '../../controllers';

export const useGetCryptoById = (id: string) => {
  const {isLoading, data} = useQuery({
    queryKey: ['crypto_by_id', id],
    staleTime: 1000 * 60 * 60, // 1 hour
    enabled: !!id,
    retry: false,
    queryFn: async () => await CryptoController.getCryptoById(id),
  });

  return {isLoading, data};
};
