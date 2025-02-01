import React, {FC, ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useThemeStore} from '../../../../common/store';
interface Props extends ViewProps {
  children: ReactNode;
  withScroll?: boolean;
}

/**
 * A flexible screen layout that handles safe area, scrolling, and keyboard avoiding behavior.
 *
 * @param {ReactNode} children - Content to be rendered inside the layout.
 * @param {boolean} [withScroll=true] - Determines if content should be scrollable.
 */
export const ScreenLayout: FC<Props> = ({
  children,
  withScroll = true,
  style,
}) => {
  const {colors} = useThemeStore();
  const {top} = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        {backgroundColor: colors.backgroundSecondary, paddingTop: top},
        style,
      ]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {withScroll ? (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.flex}>{children}</View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
});
