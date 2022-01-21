import React, { useEffect, useState, ElementType } from 'react';
import { ActivityIndicator } from 'react-native';

import { OPEN_WEATHER_API_KEY } from 'react-native-dotenv';

import { CityCard } from './CityCard';

import { useCities } from '../../../store/useCities';
import { weatherApi } from '../../../services/weatherApi';
import { usePreferences } from '../../../store/usePreferences';
import { WeatherCity } from '../../../types/city';

import { List } from './styles';

export function CitiesList() {
  const cities = useCities(state => state.cities);
  const temperatureUnit = usePreferences(state => state.temperatureUnit);

  const [status, setStatus] = useState('loading');
  const [weatherCities, setWeatherCities] = useState<WeatherCity[]>([]);

  useEffect(() => {
    async function fetchCitiesWeather() {
      try {
        const formattedCities: WeatherCity[] = [];
        const weatherUnit =
          temperatureUnit === 'celsius' ? 'metric' : 'imperial';

        await Promise.all(
          cities.map(async city => {
            const { data } = await weatherApi.get(
              `weather?q=${city.name}&units=${weatherUnit}&appid=${OPEN_WEATHER_API_KEY}`,
            );

            const { temp } = data.main;
            const { icon } = data.weather[0];

            formattedCities.push({
              ...city,
              temp: Math.round(temp),
              icon: `http://openweathermap.org/img/wn/${icon}@2x.png`,
            });
          }),
        );

        setWeatherCities(formattedCities);
        setStatus('success');
      } catch (error) {
        setStatus('error');
      }
    }

    fetchCitiesWeather();
  }, [cities, temperatureUnit]);

  if (status === 'loading') {
    return <ActivityIndicator size="large" />;
  }

  return (
    <List<ElementType>
      data={weatherCities}
      renderItem={({ item }: { item: WeatherCity }) => <CityCard city={item} />}
      keyExtractor={(item: WeatherCity) => item.name}
    />
  );
}
