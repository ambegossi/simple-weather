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

  const temperatureUnit = usePreferences(state => state.temperatureUnit);
  const favoriteCity = useFavoriteCities(state => state.favoriteCity);

  const unit = temperatureUnit === 'celsius' ? 'C' : 'F';

  function handleFavoriteCity(id: string) {
    favoriteCity(id);
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
    >
      <LeftSideContainer>
        <Name>{city.name}</Name>
        <Country>{city.country}</Country>
        {city.weather?.description && (
          <WeatherDescription>
            {capitalizeFirstetter(city.weather.description)}
          </WeatherDescription>
        )}
        <TempMinAndMax>{`${city.weather?.temp_min}° - ${city.weather?.temp_max}°`}</TempMinAndMax>
      </LeftSideContainer>

      <RightSideContainer>
        <TemperatureContainer>
          <Temperature>{`${city.weather?.temp}° ${unit}`}</Temperature>
          <WeatherIcon source={{ uri: city.weather?.icon }} />
        </TemperatureContainer>

        <FavoriteButton onPress={() => handleFavoriteCity(city.id)}>
          <Ionicons name="heart" size={32} color={theme.colors.heart} />
        </FavoriteButton>
      </RightSideContainer>
    </Container>
  );
}
