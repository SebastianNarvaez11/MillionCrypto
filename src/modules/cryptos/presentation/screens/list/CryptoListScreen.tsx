/**
 * CryptoListScreen Component
 *
 * @description
 * A React component that displays a list of cryptocurrencies with theme switching capability.
 * Serves as the main screen for browsing available cryptocurrencies.
 *
 * Features:
 * - Displays app title "Million Crypto"
 * - Theme toggle switch for dark/light mode
 * - Scrollable list of cryptocurrencies
 * - Responsive layout with themed colors
 *
 * @component
 *
 * @example
 * ```tsx
 * <CryptoListScreen />
 * ```
 */

import React from 'react';
import {
  ScreenLayout,
  SwitchTheme,
  Text,
} from '../../../../../common/presentation/components';
import {View} from 'react-native';
import {CryptoList} from '../../components';
import {styles} from './styles';

export const CryptoListScreen = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text
          text="Million Crypto"
          size={40}
          align="center"
          fontWeight="bold"
        />
        <SwitchTheme />
      </View>

      <CryptoList />
    </ScreenLayout>
  );
};
