/**
 * List Components
 *
 * @description
 * A collection of reusable components for list rendering in the crypto list view.
 * Includes separator, empty state, and loading footer components.
 *
 * Components:
 * - ListSeparator: Renders a vertical gap between list items
 * - ListEmpty: Displays a message when no items are found
 * - ListFooter: Shows a loading spinner when fetching more items
 *
 * @example
 * ```tsx
 * // Separator usage
 * <FlatList
 *   ItemSeparatorComponent={ListSeparator}
 * />
 *
 * // Empty state
 * <FlatList
 *   ListEmptyComponent={ListEmpty}
 * />
 *
 * // Loading footer
 * <FlatList
 *   ListFooterComponent={
 *     <ListFooter loading={true} color="#000000" />
 *   }
 * />
 * ```
 */

import React from 'react';
import {View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import {Text} from '../../../../common/presentation/components';
import {Spinner} from '../../../../common/presentation/components/atoms/Spinner';
import {normVSize} from '../../../../config/constants';

export const ListSeparator = () => <View style={styles.separator} />;

export const ListEmpty = () => (
  <Text text={'No cryptos found'} size={15} align="center" />
);

interface ListFooterProps {
  /** Whether the list is currently loading more items */
  loading: boolean;
  /** Color for the loading spinner */
  color: string;
}

export const ListFooter = ({loading, color}: ListFooterProps) =>
  loading ? <Spinner size={40} color={color} /> : null;

const styles = StyleSheet.create({
  separator: {
    height: normVSize(10),
  },
});
