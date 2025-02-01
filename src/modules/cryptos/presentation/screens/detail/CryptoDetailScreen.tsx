/**
 * CryptoDetailScreen Component
 *
 * @description
 * A React component that displays detailed information about a specific cryptocurrency.
 * Shows price, market data, and key statistics in a structured layout.
 *
 * Features:
 * - Real-time price and percentage change display
 * - Market capitalization and volume information
 * - BTC price comparison
 * - Market ranking
 * - Loading state handling
 * - Responsive layout with themed colors
 *
 * @component
 *
 * @param {Props} props - Component props extending StackScreenProps
 * @param {string} props.route.params.id - Cryptocurrency ID to fetch details for
 *
 * @example
 * ```tsx
 * <CryptoDetailScreen
 *   route={{
 *     params: { id: 'bitcoin' }
 *   }}
 * />
 * ```
 */

import React, {FC} from 'react';
import {View} from 'react-native';
import {
  ScreenLayout,
  Text,
} from '../../../../../common/presentation/components';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../../../../common/presentation/navigation';
import {useGetCryptoById} from '../../hooks';
import {Spinner} from '../../../../../common/presentation/components/atoms/Spinner';
import {useThemeStore} from '../../../../../common/store';
import {formatToDollars} from '../../../../../common/utils/currency';
import {styles} from './styles';
import {InfoRow} from '../../components';

interface Props extends StackScreenProps<RootStackParams, 'CryptoDetail'> {}

export const CryptoDetailScreen: FC<Props> = ({route}) => {
  const {id} = route.params;
  const {data, isLoading} = useGetCryptoById(id);
  const {colors} = useThemeStore();

  if (isLoading) {
    return (
      <ScreenLayout>
        <Spinner size="large" />
      </ScreenLayout>
    );
  }

  const priceChangeColor =
    data?.percent_change_24h && parseFloat(data.percent_change_24h) > 0
      ? colors.success
      : colors.error;

  return (
    <ScreenLayout>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text text={data?.name} size={24} fontWeight="bold" />
          <Text text={data?.symbol} size={16} color={colors.neutral700} />
        </View>
        <View style={styles.priceContainer}>
          <Text
            text={formatToDollars(data?.price_usd ?? '0')}
            size={32}
            fontWeight="bold"
          />
          <Text
            text={formatPercentage(data?.percent_change_24h)}
            size={18}
            color={priceChangeColor}
          />
        </View>
      </View>

      <View style={styles.infoContainer}>
        <InfoRow
          label="Capitalización de mercado"
          value={formatToDollars(data?.market_cap_usd ?? '0')}
        />
        <InfoRow
          label="Volumen 24h"
          value={formatToDollars(data?.volume24 ?? '0')}
        />
        <InfoRow label="Precio BTC" value={data?.price_btc ?? '0'} />
        <InfoRow label="Ranking" value={`#${data?.rank ?? '0'}`} />
      </View>
    </ScreenLayout>
  );
};

const formatPercentage = (value?: string) =>
  value ? `${parseFloat(value).toFixed(2)}%` : '0%';
