import {create} from 'zustand';

import {StorageAdapter} from '../../config/adapters/storage.adapter';
import {darkColors, lightColors, ThemeColors} from '../presentation/theme';

export type ThemeType = 'light' | 'dark';

interface IThemeStore {
  currentTheme: ThemeType;
  isSystemTheme: boolean;
  colors: ThemeColors;

  setTheme: (theme: ThemeType) => Promise<void>;
  setIsSystemTheme: (status: boolean) => void;
}

/**
 * Zustand hook for managing the theme state.
 * Initializes with default values and methods.
 */
export const useThemeStore = create<IThemeStore>()(set => ({
  currentTheme: 'dark',
  isSystemTheme: false,
  colors: lightColors,

  // Sets the current theme and updates the colors.
  setTheme: async (theme: ThemeType) => {
    await StorageAdapter.setItem('THEME-MILLION-CRYPTO', theme);

    set({
      currentTheme: theme,
      colors: theme === 'light' ? lightColors : darkColors,
    });
  },

  // Sets the status of system theme detection.
  setIsSystemTheme: (status: boolean) => {
    set({isSystemTheme: status});
  },
}));
