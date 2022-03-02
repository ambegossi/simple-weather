import { CityWeatherApiResponse } from '../src/types/cityWeather';

export const cityWeather: CityWeatherApiResponse = {
  daily: [
    {
      temp: {
        day: 3,
        min: 10,
        max: 15,
      },
      weather: [
        {
          description: 'light rain',
          icon: '10n',
        },
      ],
    },
    {
      temp: {
        day: 4,
        min: 10,
        max: 15,
      },
      weather: [
        {
          description: 'light rain',
          icon: '10n',
        },
      ],
    },
    {
      temp: {
        day: 5,
        min: 10,
        max: 15,
      },
      weather: [
        {
          description: 'light rain',
          icon: '10n',
        },
      ],
    },
  ],
};
