import {StyleSheet} from 'react-native';
import {normVSize} from '../../../../../config/constants';

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: normVSize(20),
    paddingVertical: normVSize(20),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normVSize(10),
  },
  priceContainer: {
    marginTop: normVSize(10),
    flexDirection: 'row',
    alignItems: 'center',
    gap: normVSize(10),
  },
  infoContainer: {
    padding: normVSize(20),
    gap: normVSize(15),
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
