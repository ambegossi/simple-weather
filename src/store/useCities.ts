import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { City } from '../types/city';

type State = {
  cities: City[];
  addCity: (city: City) => void;
};

export const useCities = create<State>(
  persist(
    (set, get) =>
      ({
        cities: [],
        addCity: (city: City) => {
          const { cities } = get();

          set({ cities: [...cities, city] });
        },
      } as State),
    {
      name: 'useCities',
      getStorage: () => AsyncStorage,
    },
  ),
);
