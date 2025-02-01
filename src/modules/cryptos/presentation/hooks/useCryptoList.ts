/**
 * useCryptoList Hook
 *
 * @description
 * A custom React hook that provides paginated and filtered cryptocurrency data.
 * Uses React Query for data fetching, caching and infinite scroll functionality.
 *
 * Features:
 * - Paginated data loading with infinite scroll
 * - Filtering by price change (all/positive/negative)
 * - Configurable page size and cache invalidation
 * - Loading and error states handling
 *
 * @param {Object} params - Hook configuration parameters
 * @param {number} [params.limit=20] - Number of items per page
 * @param {number} [params.staleTime=3600000] - Cache invalidation time in milliseconds
 * @param {('all'|'positive'|'negative')} [params.filterType='all'] - Price change filter type
 *
 * @returns {Object} Hook state and controls
 * @returns {boolean} .isLoading - Initial loading state
 * @returns {Object} .data - Paginated and filtered crypto data
 * @returns {Function} .fetchNextPage - Function to load next page
 * @returns {boolean} .hasNextPage - Whether more pages are available
 * @returns {boolean} .isFetchingNextPage - Whether next page is being fetched
 *
 * @example
 * ```tsx
 * const {
 *   data,
 *   isLoading,
 *   fetchNextPage
 * } = useCryptoList({
 *   limit: 10,
 *   filterType: 'positive'
 * });
 * ```
 */

import {useInfiniteQuery} from '@tanstack/react-query';
import {CryptoController} from '../../controllers';

interface UseCryptoListParams {
  limit?: number;
  staleTime?: number;
  filterType?: 'all' | 'positive' | 'negative';
}

export const useCryptoList = ({
  limit = 20,
  staleTime = 1000 * 60 * 60,
  filterType = 'all',
}: UseCryptoListParams = {}) => {
  const {isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useInfiniteQuery({
      queryKey: ['cryptos', 'infinite', limit, filterType],
      staleTime,
      initialPageParam: 1,
      retry: false,
      queryFn: ({pageParam = 1}) =>
        CryptoController.getCryptos(limit, pageParam),
      getNextPageParam: lastPage => {
        if (lastPage.currentPage === lastPage.totalPages) {
          return undefined;
        }
        return lastPage.currentPage + 1;
      },
      select: response => ({
        pages: response.pages.map(page => ({
          ...page,
          cryptos: page.cryptos.filter(crypto => {
            const percentChange = parseFloat(crypto.percent_change_24h);
            switch (filterType) {
              case 'positive':
                return !isNaN(percentChange) && percentChange >= 0;
              case 'negative':
                return !isNaN(percentChange) && percentChange < 0;
              default:
                return true;
            }
          }),
        })),
        pageParams: response.pageParams,
      }),
    });

  return {
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
