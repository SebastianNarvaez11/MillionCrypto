/**
 * CryptoList Component
 *
 * @description
 * A React component that displays a paginated and filterable list of cryptocurrencies.
 * It uses FlashList for efficient rendering and includes filtering options for all,
 * positive, and negative price changes.
 *
 * @component
 *
 * Features:
 * - Infinite scrolling with pagination
 * - Filter cryptocurrencies by price change (all/positive/negative)
 * - Responsive height based on device window
 * - Loading states and empty state handling
 * - Navigation to detail view on item press
 *
 * @example
 * ```tsx
 * <CryptoList />
 * ```
 */

import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {CryptoListItem} from './CryptoListItem';
import {View} from 'react-native-ui-lib';
import {normVSize} from '../../../../config/constants';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {useThemeStore} from '../../../../common/store';
import {useCryptoList} from '../hooks/useCryptoList';
import {FilterButtons} from './FilterButtons';
import {ListSeparator, ListEmpty, ListFooter} from './ListComponents';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../../common/presentation/navigation';

export const CryptoList = () => {
  const {colors} = useThemeStore();
  const {height} = useWindowDimensions();
  const [filterType, setFilterType] = React.useState<
    'all' | 'positive' | 'negative'
  >('all');

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const {isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useCryptoList({filterType});

  return (
    <View style={[styles.container, {height: height * 0.7}]}>
      <FilterButtons
        filterType={filterType}
        colors={colors}
        onFilterChange={setFilterType}
      />

      <FlashList
        data={data?.pages.flatMap(page => page.cryptos) ?? []}
        fadingEdgeLength={normVSize(30)}
        estimatedItemSize={normVSize(65)}
        showsHorizontalScrollIndicator={false}
        onEndReached={() => (!hasNextPage || !isLoading) && fetchNextPage()}
        onEndReachedThreshold={0.3}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item}) => (
          <CryptoListItem
            crypto={item}
            onPress={() => navigation.navigate('CryptoDetail', {id: item.id})}
          />
        )}
        ItemSeparatorComponent={ListSeparator}
        ListFooterComponent={
          <ListFooter
            loading={isFetchingNextPage || isLoading}
            color={colors.primary}
          />
        }
        ListEmptyComponent={!isLoading ? ListEmpty : null}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normVSize(20),
  },
  separator: {
    height: normVSize(10),
  },
});
