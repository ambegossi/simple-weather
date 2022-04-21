import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import theme from '../../../styles/themes/light';
import { CityDetails } from '..';
import { city } from '../../../../__mocks__/city';
import { capitalizeFirstetter } from '../../../utils/format';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>{children}</NavigationContainer>
  </ThemeProvider>
);

describe('CityDetails screen', () => {
  it('renders todays weather', () => {
    const { getByText, getByTestId } = render(
      <CityDetails
        route={{
          params: {
            city,
          },
        }}
      />,
      {
        wrapper: Providers,
      },
    );

    const todaysWeather = city.dailyWeatherList
      ? city.dailyWeatherList[0]
      : null;

    getByText(city.name);
    getByText(`${city.state}, ${city.country}`);
    getByTestId('weather-icon');
    if (todaysWeather) {
      getByText(capitalizeFirstetter(todaysWeather.weatherDescription));
      getByText(`${todaysWeather?.tempMin}° - ${todaysWeather?.tempMax}°`);
    }
  });

  it('renders daily weather', () => {
    const { getByTestId } = render(
      <CityDetails
        route={{
          params: {
            city,
          },
        }}
      />,
      {
        wrapper: Providers,
      },
    );

    city.dailyWeatherList?.forEach((_, index) =>
      getByTestId(`daily-weather-card-${index}`),
    );
  });
});
