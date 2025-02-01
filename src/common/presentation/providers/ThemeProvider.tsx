import React, {PropsWithChildren, useEffect} from 'react';

import {StorageAdapter} from '../../../config/adapters';
import {ThemeType, useThemeStore} from '../../store';

/**
 * ThemeProvider component is responsible for managing and providing the theme context to its children.
 * It retrieves the saved theme from storage and sets it using the theme store.
 *
 * @param {PropsWithChildren} props - The props for the ThemeProvider component.
 * @returns {JSX.Element} The ThemeProvider component with its children.
 */
export const ThemeProvider = ({children}: PropsWithChildren) => {
  const {setTheme} = useThemeStore();

  useEffect(() => {
    const getSavedTheme = async () => {
      const theme =
        (await StorageAdapter.getItem('THEME-MILLION-CRYPTO')) || 'dark';
      await setTheme((theme as ThemeType) || 'dark');
    };
    getSavedTheme();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
