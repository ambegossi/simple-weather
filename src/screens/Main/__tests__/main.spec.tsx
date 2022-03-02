import {
  render,
  waitFor,
  waitForElementToBeRemoved,
  act,
  fireEvent,
} from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import nock from 'nock';

import {
  OPEN_WEATHER_API_URL,
  OPEN_WEATHER_API_KEY,
} from 'react-native-dotenv';
import { Main } from '..';

import theme from '../../../styles/themes/light';
import { useCities } from '../../../store/useCities';
import { City } from '../../../types/city';
import { cityWeather } from '../../../../__mocks__/cityWeather';

const cityMock: City = {
  id: 'cityId',
  name: 'New York City',
  state: 'New York',
  country: 'USA',
  lat: 40.73061,
  lng: -73.935242,
};

const getCityWeatherMock = nock(OPEN_WEATHER_API_URL).get(
  `/onecall?lat=${cityMock.lat}&lon=${cityMock.lng}&units=metric&lang=en&appid=${OPEN_WEATHER_API_KEY}`,
);

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>{children}</NavigationContainer>
  </ThemeProvider>
);

describe('Main screen', () => {
  it('renders settings and add buttons', async () => {
    await waitFor(() => {
      const { getByTestId } = render(<Main />, {
        wrapper: Providers,
      });

      getByTestId('settings-button');
      getByTestId('add-button');
    });
  });

  it('renders a warning if there is no city added', async () => {
    const { getByText } = render(<Main />, {
      wrapper: Providers,
    });

    getByText('looks-like-you-havent-added-a-city-yet');
  });

  it('renders a error warning when fetch cities weather fails', async () => {
    getCityWeatherMock.reply(500);

    act(() =>
      useCities.setState({
        cities: [cityMock],
      }),
    );

    const { findByText } = render(<Main />, {
      wrapper: Providers,
    });

    await findByText('ops-an-error-has-occurred');
  });

  it('renders a loading while fetching cities weather', async () => {
    getCityWeatherMock.reply(200, cityWeather).persist();

    act(() =>
      useCities.setState({
        cities: [cityMock],
      }),
    );

    const { getByTestId } = render(<Main />, {
      wrapper: Providers,
    });

    await waitForElementToBeRemoved(() => getByTestId('loading'));
  });

  it('renders cities list', async () => {
    act(() =>
      useCities.setState({
        cities: [cityMock],
      }),
    );

    const { findByTestId } = render(<Main />, {
      wrapper: Providers,
    });

    await findByTestId(`city-card-${cityMock.id}`);
  });

  it('favorite city successfully', async () => {
    act(() =>
      useCities.setState({
        cities: [cityMock],
      }),
    );

    const { findByTestId, getByTestId, queryByTestId } = render(<Main />, {
      wrapper: Providers,
    });

    const favoriteCityButton = await findByTestId(
      `favorite-city-button-${cityMock.id}`,
    );

    fireEvent.press(favoriteCityButton);

    getByTestId(`favorite-city-card-${cityMock.id}`);
    expect(queryByTestId(`city-card-${cityMock.id}`)).toBeNull();
  });
});
