import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type State = {
  temperatureUnit: 'celsius' | 'fahrenheit';
  setTemperatureUnit: (unit: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export const usePreferences = create<State>(
  persist(
    set =>
      ({
        temperatureUnit: 'celsius',
        setTemperatureUnit: (unit: 'celsius' | 'fahrenheit') =>
          set({ temperatureUnit: unit }),
        isDarkMode: false,
        toggleDarkMode: () => set(state => ({ isDarkMode: !state.isDarkMode })),
      } as State),
    {
      name: 'usePreferences',
      getStorage: () => AsyncStorage,
    },
  ),
);
