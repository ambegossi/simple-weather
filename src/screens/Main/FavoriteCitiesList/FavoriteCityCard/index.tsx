import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { usePreferences } from '../../../../store/usePreferences';
import { useFavoriteCities } from '../../../../store/useFavoriteCities';
import { capitalizeFirstetter } from '../../../../utils/format';
import { City } from '../../../../types/city';

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
  FavoriteButton,
} from './styles';

type Props = {
  city: City;
};

export function FavoriteCityCard({ city }: Props) {
  const theme = useTheme();
  const navigation = useNavigation();

  const temperatureUnit = usePreferences(state => state.temperatureUnit);
  const favoriteCity = useFavoriteCities(state => state.favoriteCity);

  const unit = temperatureUnit === 'celsius' ? 'C' : 'F';
  const todaysWeather = city.dailyWeatherList ? city.dailyWeatherList[0] : null;

  function handleFavoriteCity(id: string) {
    favoriteCity(id);
  }

  function handleNavigateToCityDetails() {
    navigation.navigate('CityDetails', {
      city,
    });
  }

  return (
    <Container
      style={{
        shadowColor: '#FCC76B',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
      onPress={handleNavigateToCityDetails}
    >
      <LeftSideContainer>
        <Name>{city.name}</Name>
        <Country>{city.country}</Country>
        {todaysWeather && (
          <WeatherDescription>
            {capitalizeFirstetter(todaysWeather.weatherDescription)}
          </WeatherDescription>
        )}

        <TempMinAndMax>{`${todaysWeather?.tempMin}° - ${todaysWeather?.tempMax}°`}</TempMinAndMax>
      </LeftSideContainer>

      <RightSideContainer>
        <TemperatureContainer>
          <Temperature>{`${todaysWeather?.temp}° ${unit}`}</Temperature>
          <WeatherIcon source={{ uri: todaysWeather?.icon }} />
        </TemperatureContainer>

        <FavoriteButton onPress={() => handleFavoriteCity(city.id)}>
          <Ionicons name="heart" size={32} color={theme.colors.heart} />
        </FavoriteButton>
      </RightSideContainer>
    </Container>
  );
}
