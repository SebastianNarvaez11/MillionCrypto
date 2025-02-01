/**
 * App Component
 *
 * @description
 * Root component of the React Native application that sets up core providers and configuration.
 * Handles theme switching, navigation setup, and global state management.
 *
 * Features:
 * - React Query for data fetching and caching
 * - Dynamic theme switching between light/dark modes
 * - Navigation container and stack navigator setup
 * - Global theme provider
 *
 * @component
 *
 * @example
 * ```tsx
 * import App from './App';
 *
 * // In index.js
 * AppRegistry.registerComponent('AppName', () => App);
 * ```
 */

import React from 'react';
import {useThemeStore} from './common/store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {RootStackNavigator} from './common/presentation/navigation';
import {ThemeProvider} from './common/presentation/providers';
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const {currentTheme} = useThemeStore();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer
        theme={currentTheme === 'light' ? DefaultTheme : DarkTheme}>
        <ThemeProvider>
          <RootStackNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
