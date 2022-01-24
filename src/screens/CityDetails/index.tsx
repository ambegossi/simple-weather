import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import { DailyWeatherList } from './DailyWeatherList';

import { capitalizeFirstetter } from '../../utils/format';
import { usePreferences } from '../../store/usePreferences';
import { City } from '../../types/city';

import {
  Container,
  Header,
  ContentContainer,
  TodaysWeatherContainer,
  CityName,
  StateAndCountry,
  WeatherIcon,
  Temperature,
  WeatherDescription,
  TempMinAndMax,
} from './styles';

type Props = {
  route: {
    params: {
      city: City;
    };
  };
};

export function CityDetails({ route }: Props) {
  const theme = useTheme();
  const navigation = useNavigation();

  const temperatureUnit = usePreferences(state => state.temperatureUnit);

  const { city } = route.params;

  const unit = temperatureUnit === 'celsius' ? 'C' : 'F';
  const todaysWeather = city.dailyWeatherList ? city.dailyWeatherList[0] : null;
  const { dailyWeatherList } = city;
  dailyWeatherList?.shift();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons
            name="chevron-back"
            size={24}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </Header>

      <ContentContainer>
        <TodaysWeatherContainer>
          <CityName>{city.name}</CityName>
          <StateAndCountry>{`${city.state}, ${city.country}`}</StateAndCountry>
          <WeatherIcon source={{ uri: todaysWeather?.icon }} />
          <Temperature>{`${todaysWeather?.temp}° ${unit}`}</Temperature>
          {todaysWeather && (
            <WeatherDescription>
              {capitalizeFirstetter(todaysWeather.weatherDescription)}
            </WeatherDescription>
          )}
          <TempMinAndMax>{`${todaysWeather?.tempMin}° - ${todaysWeather?.tempMax}°`}</TempMinAndMax>
        </TodaysWeatherContainer>

        <DailyWeatherList dailyWeatherList={dailyWeatherList} />
      </ContentContainer>
    </Container>
  );
}
