import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import theme from '../../../../../styles/themes/light';
import { CityCard } from '..';
import { city } from '../../../../../../__mocks__/city';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>{children}</NavigationContainer>
  </ThemeProvider>
);

describe('CityCard', () => {
  it('renders CityCard correctly', () => {
    const { getByText, getByTestId } = render(<CityCard city={city} />, {
      wrapper: Providers,
    });

    getByText(`${city.name},`);
    getByText(city.country);
    if (city.dailyWeatherList) {
      getByText(`${city.dailyWeatherList[0].temp}° C`);
    }
    getByTestId('city-card-icon');
  });
});
