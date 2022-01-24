import { ElementType } from 'react';
import { useTranslation } from 'react-i18next';

import { DailyWeatherCard } from './DailyWeatherCard';

import { DailyWeather } from '../../../types/weather';
import { addDays, formatDate } from '../../../utils/date';

import { List } from './styles';
import { usePreferences } from '../../../store/usePreferences';
import { capitalizeFirstetter, capitalize } from '../../../utils/format';

type Props = {
  dailyWeatherList: DailyWeather[];
};

export function DailyWeatherList({ dailyWeatherList }: Props) {
  const { t } = useTranslation();

  const language = usePreferences(state => state.language);

  const currentDate = new Date();

  const formattedDailyWeatherList = dailyWeatherList.map(
    (dailyWeather, index) => {
      let day;

      const nextDay = addDays(currentDate, index + 1);

      if (index === 0) {
        day = t('tomorrow');
      } else {
        day = capitalizeFirstetter(formatDate(nextDay, 'eeee', language));
      }

      const date = capitalize(formatDate(nextDay, 'dd MMMM', language));

      return {
        ...dailyWeather,
        day,
        date,
      };
    },
  );

  return (
    <List<ElementType>
      data={formattedDailyWeatherList}
      renderItem={({ item }: { item: DailyWeather }) => (
        <DailyWeatherCard dailyWeather={item} />
      )}
      keyExtractor={(item: DailyWeather) => item.date}
    />
  );
}
