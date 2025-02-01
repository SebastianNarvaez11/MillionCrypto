import React from 'react';
import {TextProps} from 'react-native';
import {Text as RNText} from 'react-native-ui-lib';
import {useThemeStore} from '../../../store';
import {normSize} from '../../../../config/constants';

/**
 * Custom Text component that extends React Native's Text component with additional styling props
 * @component
 *
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - Child elements to render inside the text
 * @param {string} [props.text] - Text content to display
 * @param {number} [props.size=30] - Font size of the text (will be normalized)
 * @param {string} [props.color] - Color of the text. Falls back to theme text color if not provided
 * @param {('center'|'auto'|'left'|'right')} [props.align] - Text alignment
 * @param {('normal'|'bold'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900')} [props.fontWeight='normal'] - Font weight of the text
 *
 * @extends {TextProps} Additional props are passed to the underlying RNText component
 */
interface CustomTextProps extends TextProps {
  text?: string;
  size?: number;
  color?: string;
  align?: 'center' | 'auto' | 'left' | 'right';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export const Text: React.FC<CustomTextProps> = ({
  children,
  text,
  size = 30,
  color,
  align = undefined,
  fontWeight = 'normal',
  ...props
}) => {
  const {colors} = useThemeStore();
  return (
    <RNText
      {...props}
      style={[
        {
          fontSize: normSize(size),
          color: color ? color : colors.text,
          textAlign: align,
          fontWeight: fontWeight,
        },
        props.style,
      ]}>
      {text}
      {children}
    </RNText>
  );
};
