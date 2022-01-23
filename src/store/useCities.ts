import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { OPEN_WEATHER_API_KEY } from 'react-native-dotenv';

import { weatherApi } from '../services/weatherApi';
import { City } from '../types/city';

type State = {
  cities: City[];
  setCities: (cities: City[]) => void;
  addCity: (city: City) => void;
  fetchCitiesWeather: (unit: 'celsius' | 'fahrenheit') => void;
  fetchCitiesWeatherStatus: string;
};

export const useCities = create<State>(
  persist(
    (set, get) =>
      ({
        cities: [],
        setCities: (cities: City[]) => set({ cities }),
        addCity: (city: City) => {
          const { cities } = get();

          set({ cities: [...cities, city] });
        },
        fetchCitiesWeather: async (unit: 'celsius' | 'fahrenheit') => {
          try {
            const { cities } = get();

            if (!cities.length) {
              return;
            }

            set({ fetchCitiesWeatherStatus: 'loading' });

            const formattedCities: City[] = [];

            const weatherUnit = unit === 'celsius' ? 'metric' : 'imperial';

            await Promise.all(
              cities.map(async city => {
                const { data } = await weatherApi.get(
                  `weather?q=${city.name}&units=${weatherUnit}&appid=${OPEN_WEATHER_API_KEY}`,
                );

                const { temp, temp_min, temp_max } = data.main;
                const { icon, description } = data.weather[0];

                formattedCities.push({
                  ...city,
                  weather: {
                    temp: Math.round(temp),
                    temp_min,
                    temp_max,
                    description,
                    icon: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                  },
                });
              }),
            );

            set({
              cities: formattedCities,
              fetchCitiesWeatherStatus: 'success',
            });
          } catch (error) {
            set({ fetchCitiesWeatherStatus: 'error' });
          }
        },
        fetchCitiesWeatherStatus: 'idle',
      } as State),
    {
      name: 'useCities',
      getStorage: () => AsyncStorage,
    },
  ),
);
