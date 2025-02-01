/**
 * CryptoListItem Component
 *
 * @description
 * A React component that renders an individual cryptocurrency item in a list format.
 * It displays the cryptocurrency name, symbol, current price in USD, and 24-hour price change percentage.
 * The component is touchable and can navigate to a detail view when pressed.
 *
 * Features:
 * - Displays crypto name and symbol
 * - Shows current price formatted in USD
 * - Shows 24h price change with color coding (green for positive, red for negative)
 * - Touchable item with onPress handler
 * - Themed styling using the app's color scheme
 *
 * @component
 *
 * @example
 * ```tsx
 * <CryptoListItem
 *   crypto={{
 *     id: "bitcoin",
 *     name: "Bitcoin",
 *     symbol: "BTC",
 *     price_usd: "50000",
 *     percent_change_24h: "5.2"
 *   }}
 *   onPress={() => navigate('CryptoDetail')}
 * />
 * ```
 */

import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useThemeStore} from '../../../../common/store';
import {Text} from '../../../../common/presentation/components';
import {normVSize} from '../../../../config/constants';
import {ICryptoModel} from '../../domain/models';
import {formatToDollars} from '../../../../common/utils/currency';

interface CryptoListItemProps {
  /** Cryptocurrency data object containing id, name, symbol, price and percent change */
  crypto: ICryptoModel;
  /** Optional callback function triggered when the item is pressed */
  onPress?: () => void;
}

export const CryptoListItem: React.FC<CryptoListItemProps> = ({
  crypto,
  onPress,
}) => {
  const {colors} = useThemeStore();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.itemContainer,
        {backgroundColor: colors.backgroundPrimary},
      ]}>
      <View>
        <Text text={crypto.name} size={20} fontWeight="bold" />
        <Text text={crypto.symbol} size={16} color={colors.neutral700} />
      </View>
      <View style={styles.rightContainer}>
        <Text
          text={formatToDollars(crypto.price_usd)}
          size={15}
          fontWeight="bold"
        />
        <Text
          text={`${crypto.percent_change_24h}%`}
          size={13}
          color={
            parseFloat(crypto.percent_change_24h) < 0
              ? colors.error
              : colors.success
          }
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: normVSize(10),
    paddingHorizontal: normVSize(20),
    borderRadius: normVSize(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: normVSize(10),
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
});
