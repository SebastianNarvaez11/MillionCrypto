import React from 'react';
import {Switch} from 'react-native-ui-lib';
import {useThemeStore} from '../../store';

/**
 * A theme switcher component that toggles between light and dark themes.
 * Uses a Switch component from react-native-ui-lib to control theme changes.
 *
 * @component
 * @example
 * ```tsx
 * <SwitchTheme />
 * ```
 */
export const SwitchTheme: React.FC = () => {
  const {currentTheme, setTheme, colors} = useThemeStore();

  const onChangeTheme = (value: boolean): void => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <Switch
      onColor={colors.primary}
      value={currentTheme === 'dark' ? true : false}
      onValueChange={onChangeTheme}
    />
  );
};
