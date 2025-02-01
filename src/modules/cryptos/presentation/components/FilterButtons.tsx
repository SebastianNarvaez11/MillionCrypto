/**
 * FilterButtons Component
 *
 * @description
 * A React component that renders a group of filter buttons for cryptocurrency list filtering.
 * Provides options to filter by all cryptocurrencies, those with positive changes,
 * or those with negative changes.
 *
 * Features:
 * - Three filter options: All, Positive changes, Negative changes
 * - Active state indication through button colors
 * - Responsive button layout with even spacing
 * - Themed button colors based on filter type
 *
 * @component
 *
 * @example
 * ```tsx
 * <FilterButtons
 *   filterType="all"
 *   colors={{
 *     primary: '#007AFF',
 *     success: '#34C759',
 *     error: '#FF3B30',
 *     neutral700: '#8E8E93'
 *   }}
 *   onFilterChange={(type) => console.log(type)}
 * />
 * ```
 */

import React from 'react';
import {View, Button} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import {normVSize} from '../../../../config/constants';

type FilterType = 'all' | 'positive' | 'negative';

interface FilterButtonsProps {
  /** Current active filter type */
  filterType: FilterType;
  /** Theme colors object for button styling */
  colors: {
    primary: string;
    success: string;
    error: string;
    neutral700: string;
  };
  /** Callback function triggered when filter selection changes */
  onFilterChange: (type: FilterType) => void;
}

export const FilterButtons = ({
  filterType,
  colors,
  onFilterChange,
}: FilterButtonsProps) => {
  return (
    <View style={styles.filterContainer}>
      <Button
        label="Todos"
        size="small"
        backgroundColor={
          filterType === 'all' ? colors.primary : colors.neutral700
        }
        onPress={() => onFilterChange('all')}
      />
      <Button
        label="Positivos"
        size="small"
        backgroundColor={
          filterType === 'positive' ? colors.success : colors.neutral700
        }
        onPress={() => onFilterChange('positive')}
      />
      <Button
        label="Negativos"
        size="small"
        backgroundColor={
          filterType === 'negative' ? colors.error : colors.neutral700
        }
        onPress={() => onFilterChange('negative')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: normVSize(10),
    gap: normVSize(10),
  },
});
