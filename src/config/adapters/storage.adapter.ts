import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Utility class providing static methods to interact with AsyncStorage in React Native applications.
 */
export class StorageAdapter {
  /**
   * Retrieves the stored value associated with the specified key from AsyncStorage.
   * @param key The key of the item to retrieve.
   * @returns A promise resolving to the stored value as a string, or null if not found.
   */
  static async getItem(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  /**
   * Stores a key-value pair in AsyncStorage.
   * @param key The key under which to store the value.
   * @param value The value to store as a string.
   * @throws Error if there is an issue while attempting to store the item.
   */
  static async setItem(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      throw new Error(`Error setting item ${key} ${value}`);
    }
  }

  /**
   * Removes the item associated with the specified key from AsyncStorage.
   * @param key The key of the item to remove.
   * @throws Error if there is an issue while attempting to remove the item.
   */
  static async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
      throw new Error(`Error removing item ${key}`);
    }
  }
}
