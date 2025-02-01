/**
 * InfoRow Component
 *
 * @description
 * A React component that displays a row with a label and value pair.
 * Used for showing information in a structured format with consistent styling.
 *
 * Features:
 * - Label and value displayed on opposite sides
 * - Consistent vertical padding and alignment
 * - Themed text colors using the app's color scheme
 * - Responsive layout with space-between justification
 *
 * @component
 *
 * @example
 * ```tsx
 * <InfoRow
 *   label="Market Cap"
 *   value="$50B"
 * />
 * ```
 */

import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {useThemeStore} from '../../../../common/store';
import {Text} from '../../../../common/presentation/components';

interface InfoRowProps {
  /** Label text to display on the left side */
  label: string;
  /** Value text to display on the right side */
  value: string;
}

export const InfoRow: FC<InfoRowProps> = ({label, value}) => {
  const {colors} = useThemeStore();

  return (
    <View style={styles.infoRow}>
      <Text text={label} size={16} color={colors.neutral700} />
      <Text text={value} size={16} />
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
});
