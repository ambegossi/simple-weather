import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import theme from '../../../../../styles/themes/light';
import { FavoriteCityCard } from '..';
import { city } from '../../../../../../__mocks__/city';
import { capitalizeFirstetter } from '../../../../../utils/format';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>{children}</NavigationContainer>
  </ThemeProvider>
);

describe('FavoriteCityCard', () => {
  it('renders FavoriteCityCard correctly', () => {
    const { getByText, getByTestId } = render(
      <FavoriteCityCard city={city} />,
      {
        wrapper: Providers,
      },
    );

    getByText(city.name);
    getByText(`${city.country}`);
    if (city.dailyWeatherList) {
      const { weatherDescription, temp, tempMin, tempMax } =
        city.dailyWeatherList[0];

      getByText(`${temp}° C`);
      getByText(capitalizeFirstetter(weatherDescription));
      getByText(`${tempMin}° - ${tempMax}°`);
    }
    getByTestId('favorite-city-card-icon');
  });
});
