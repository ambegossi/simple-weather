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
  fetchCitiesWeather: (
    unit: 'celsius' | 'fahrenheit',
    language: string,
  ) => void;
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
        fetchCitiesWeather: async (
          unit: 'celsius' | 'fahrenheit',
          language: string,
        ) => {
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
                  `onecall?lat=${city.lat}&lon=${city.lng}&units=${weatherUnit}&lang=${language}&appid=${OPEN_WEATHER_API_KEY}`,
                );

                data.daily.pop();
                data.daily.pop();

                const dailyWeatherList = data.daily.map(daily => ({
                  temp: Math.round(daily.temp.day),
                  tempMin: Math.round(daily.temp.min),
                  tempMax: Math.round(daily.temp.max),
                  weatherDescription: daily.weather[0].description,
                  icon: `http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`,
                }));

                formattedCities.push({
                  ...city,
                  dailyWeatherList,
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
