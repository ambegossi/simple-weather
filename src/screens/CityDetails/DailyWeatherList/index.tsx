import { ElementType } from 'react';

import { DailyWeatherCard } from './DailyWeatherCard';

import { Weather } from '../../../types/weather';

import { List } from './styles';

type Props = {
  dailyWeatherList: Weather[];
};

export function DailyWeatherList({ dailyWeatherList }: Props) {
  return (
    <List<ElementType>
      data={dailyWeatherList}
      renderItem={({ item, index }: { item: Weather; index: number }) => (
        <DailyWeatherCard
          dailyWeather={item}
          index={index}
          testID={`daily-weather-card-${index}`}
        />
      )}
      keyExtractor={(item: Weather, index: string) => index}
    />
  );
}
