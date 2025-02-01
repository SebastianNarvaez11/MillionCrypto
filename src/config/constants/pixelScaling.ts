/**
 * @file Pixel Scaling Utilities
 * @description Provides utility functions for normalizing sizes across different device screens
 * and platforms in React Native applications.
 */

import {Dimensions, PixelRatio, Platform} from 'react-native';

/**
 * Screen dimensions obtained from the device window
 */
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

/**
 * Base scaling factors calculated from standard design dimensions
 * @constant scale - Horizontal scaling factor based on 375px width
 * @constant scaleVertical - Vertical scaling factor based on 812px height
 */
const scale = SCREEN_WIDTH / 375;
const scaleVertical = SCREEN_HEIGHT / 812;

/**
 * Normalizes the given size based on the device's screen width, maintaining consistent sizing across devices.
 * The function adjusts the size differently for iOS and Android to account for pixel density differences.
 *
 * @param {number} size - The size value to be normalized
 * @returns {number} The normalized size, adjusted for the platform and pixel density
 *
 * @example
 * // Get normalized width for a 100px element
 * const normalizedWidth = normSize(100);
 */
export const normSize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};

/**
 * Normalizes the given size based on the device's screen height, maintaining consistent vertical sizing across devices.
 * Similar to `normSize`, this function adjusts the size based on the platform (iOS/Android).
 *
 * @param {number} size - The vertical size value to be normalized
 * @returns {number} The normalized vertical size, adjusted for the platform and pixel density
 *
 * @example
 * // Get normalized height for a 200px element
 * const normalizedHeight = normVSize(200);
 */
export const normVSize = (size: number) => {
  const newSize = size * scaleVertical;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};
