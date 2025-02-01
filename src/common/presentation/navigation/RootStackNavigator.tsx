import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CryptoDetailScreen,
  CryptoListScreen,
} from '../../../modules/cryptos/presentation/screens';

/**
 * Type definition for the root stack navigation parameters
 * @type {Object}
 * @property {undefined} CryptoList - No parameters needed for the crypto list screen
 * @property {Object} CryptoDetail - Parameters for the crypto detail screen
 * @property {string} CryptoDetail.id - The ID of the crypto to display details for
 */
export type RootStackParams = {
  CryptoList: undefined;
  CryptoDetail: {id: string};
};

const Stack = createStackNavigator<RootStackParams>();

/**
 * Root Stack Navigator component that handles the main navigation structure
 * of the application. It contains screens for the crypto list and crypto details.
 *
 * @component
 * @example
 * ```tsx
 * <RootStackNavigator />
 * ```
 *
 * @returns {React.ReactElement} A stack navigator component with configured screens
 */
export const RootStackNavigator = () => (
  <Stack.Navigator initialRouteName="CryptoList">
    <Stack.Screen
      name="CryptoList"
      component={CryptoListScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="CryptoDetail" component={CryptoDetailScreen} />
  </Stack.Navigator>
);
