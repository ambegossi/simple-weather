import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type State = {
  favoriteCitiesIds: string[];
  favoriteCity: (id: string) => void;
};

export const useFavoriteCities = create<State>(
  persist(
    (set, get) =>
      ({
        favoriteCitiesIds: [],
        favoriteCity: (id: string) => {
          const { favoriteCitiesIds } = get();

          const shouldFavorite = !favoriteCitiesIds.includes(id);

          if (shouldFavorite) {
            set({ favoriteCitiesIds: [...favoriteCitiesIds, id] });
          } else {
            set({
              favoriteCitiesIds: favoriteCitiesIds.filter(
                cityId => cityId !== id,
              ),
            });
          }
        },
      } as State),
    {
      name: 'useFavoriteCities',
      getStorage: () => AsyncStorage,
    },
  ),
);
