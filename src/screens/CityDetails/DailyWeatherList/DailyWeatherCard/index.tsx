import { useTheme } from 'styled-components';

import { usePreferences } from '../../../../store/usePreferences';
import { capitalizeFirstetter } from '../../../../utils/format';
import { DailyWeather } from '../../../../types/weather';

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

type Props = {
  dailyWeather: DailyWeather;
};

export function DailyWeatherCard({ dailyWeather }: Props) {
  const theme = useTheme();

  const temperatureUnit = usePreferences(state => state.temperatureUnit);

  const unit = temperatureUnit === 'celsius' ? 'C' : 'F';

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
    >
      <LeftSideContainer>
        <Name>{dailyWeather.day}</Name>
        <Country>{dailyWeather.date}</Country>
        <WeatherDescription>
          {capitalizeFirstetter(dailyWeather.weatherDescription)}
        </WeatherDescription>
        <TempMinAndMax>{`${dailyWeather.tempMin}° - ${dailyWeather.tempMax}°`}</TempMinAndMax>
      </LeftSideContainer>

      <RightSideContainer>
        <TemperatureContainer>
          <Temperature>{`${dailyWeather.temp}° ${unit}`}</Temperature>
          <WeatherIcon source={{ uri: dailyWeather.icon }} />
        </TemperatureContainer>
      </RightSideContainer>
    </Container>
  );
}
