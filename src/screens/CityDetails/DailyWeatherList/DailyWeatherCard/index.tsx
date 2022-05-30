import { useMemo } from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useTranslation } from 'react-i18next';

import { usePreferences } from '../../../../store/usePreferences';
import { capitalize, capitalizeFirstetter } from '../../../../utils/format';
import { Weather } from '../../../../types/weather';
import { addDays, formatDate } from '../../../../utils/date';

import {
  Container,
  LeftSideContainer,
  Name,
  Country,
  WeatherDescription,
  TempMinAndMax,
  RightSideContainer,
  TemperatureContainer,
  Temperature,
  WeatherIcon,
} from './styles';

type Props = ViewProps & {
  dailyWeather: Weather;
  index: number;
};

export function DailyWeatherCard({ dailyWeather, index, ...rest }: Props) {
  const theme = useTheme();
  const { t } = useTranslation();

  const temperatureUnit = usePreferences(state => state.temperatureUnit);
  const language = usePreferences(state => state.language);

  const unit = temperatureUnit === 'celsius' ? 'C' : 'F';

  const nextDay = useMemo(() => addDays(new Date(), index + 1), [index]);

  const day = useMemo(() => {
    if (index === 0) {
      return t('tomorrow');
    }

    return capitalizeFirstetter(formatDate(nextDay, 'eeee', language));
  }, [index, language, nextDay, t]);

  const date = useMemo(() => {
    return capitalize(formatDate(nextDay, 'dd MMMM', language));
  }, [language, nextDay]);

  return (
    <Container
      style={{
        shadowColor: theme.colors.shadow,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
      {...rest}
    >
      <LeftSideContainer>
        <Name>{day}</Name>
        <Country>{date}</Country>
        <WeatherDescription>
          {capitalizeFirstetter(dailyWeather.weatherDescription)}
        </WeatherDescription>
        <TempMinAndMax>{`${dailyWeather.tempMin}° - ${dailyWeather.tempMax}°`}</TempMinAndMax>
      </LeftSideContainer>

      <RightSideContainer>
        <TemperatureContainer>
          <Temperature>{`${dailyWeather.temp}° ${unit}`}</Temperature>
          <WeatherIcon
            source={{ uri: dailyWeather.icon }}
            testID="daily-weather-card-icon"
          />
        </TemperatureContainer>
      </RightSideContainer>
    </Container>
  );
}
