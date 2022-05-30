import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import theme from '../../../../../styles/themes/light';
import { DailyWeatherCard } from '..';
import { addDays, formatDate } from '../../../../../utils/date';
import { capitalize, capitalizeFirstetter } from '../../../../../utils/format';
import { LOCALES } from '../../../../../i18n';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>{children}</NavigationContainer>
  </ThemeProvider>
);

const dailiWeather = {
  icon: 'http://openweathermap.org/img/wn/04d@2x.png',
  temp: 56,
  tempMax: 57,
  tempMin: 48,
  weatherDescription: 'overcast clouds',
};

describe('DailyWeatherCard', () => {
  it('renders tomorrow DailyWeatherCard correctly', () => {
    const index = 0;

    const { weatherDescription, tempMin, tempMax, temp } = dailiWeather;

    const { getByText, getByTestId } = render(
      <DailyWeatherCard dailyWeather={dailiWeather} index={index} />,
      {
        wrapper: Providers,
      },
    );

    const currentDate = new Date();
    const nextDay = addDays(currentDate, index + 1);
    const date = capitalize(formatDate(nextDay, 'dd MMMM', LOCALES.ENGLISH));

    getByText('tomorrow');
    getByText(date);
    getByText(capitalizeFirstetter(weatherDescription));
    getByText(`${tempMin}° - ${tempMax}°`);
    getByText(`${temp}° C`);
    getByTestId('daily-weather-card-icon');
  });

  it('renders DailyWeatherCard correctly', () => {
    const index = 1;

    const { weatherDescription, tempMin, tempMax, temp } = dailiWeather;

    const { getByText, getByTestId } = render(
      <DailyWeatherCard dailyWeather={dailiWeather} index={index} />,
      {
        wrapper: Providers,
      },
    );

    const currentDate = new Date();
    const nextDay = addDays(currentDate, index + 1);
    const day = capitalizeFirstetter(
      formatDate(nextDay, 'eeee', LOCALES.ENGLISH),
    );
    const date = capitalize(formatDate(nextDay, 'dd MMMM', LOCALES.ENGLISH));

    getByText(day);
    getByText(date);
    getByText(capitalizeFirstetter(weatherDescription));
    getByText(`${tempMin}° - ${tempMax}°`);
    getByText(`${temp}° C`);
    getByTestId('daily-weather-card-icon');
  });
});
