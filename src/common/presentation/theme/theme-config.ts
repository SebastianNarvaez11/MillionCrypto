import {StyleSheet} from 'react-native';

/**
 * Interface defining the color palette for the application themes.
 */
export interface ThemeColors {
  primary: string; // Primary color used for main actions or highlights.
  secondary: string; // Secondary color used for additional actions or highlights.
  success: string; // Color indicating success or positive actions.
  warning: string; // Color indicating warnings or alerts.
  error: string; // Color indicating errors or negative actions.
  info: string; // Color used for informational messages.
  text: string; // Color for text content.
  neutral700: string; // Color for text content.
  backgroundPrimary: string; // Background color for primary content areas.
  backgroundSecondary: string; // Background color for secondary content areas.
}

/**
 * Light theme colors for the application.
 */
export const lightColors: ThemeColors = {
  primary: '#32A852',
  secondary: '#3772AD',
  success: '#32A852',
  warning: '#F19816',
  error: '#eb0017',
  info: '#3772AD',
  text: '#1E1D41',
  neutral700: '#768192',
  backgroundPrimary: '#ffffff',
  backgroundSecondary: '#f7f7f7',
};

/**
 * Dark theme colors for the application.
 */
export const darkColors: ThemeColors = {
  primary: '#32A852',
  secondary: '#3772AD',
  success: '#32A852',
  warning: '#F19816',
  error: '#eb0017',
  info: '#3772AD',
  text: '#ffffff',
  neutral700: '#768192',
  backgroundPrimary: '#1A1D1D',
  backgroundSecondary: '#171919',
};

export const globalStyles = StyleSheet.create({});
