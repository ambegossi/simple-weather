import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import { usePreferences } from '../../../../store/usePreferences';
import { useFavoriteCities } from '../../../../store/useFavoriteCities';
import { City } from '../../../../types/city';

import {
  Container,
  LeftSideContainer,
  DescriptionContainer,
  Name,
  Country,
  RightSideContainer,
  Temperature,
  WeatherIcon,
} from './styles';

type Props = {
  city: City;
};

export function CityCard({ city }: Props) {
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
        shadowColor: theme.colors.shadow,
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
        <DescriptionContainer>
          <Name>{`${city.name}, `}</Name>
          <Country>{city.country}</Country>
        </DescriptionContainer>
        <TouchableOpacity onPress={() => handleFavoriteCity(city.id)}>
          <Ionicons
            name="heart-outline"
            size={20}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </LeftSideContainer>

      <RightSideContainer>
        <Temperature>{`${todaysWeather?.temp}° ${unit}`}</Temperature>
        <WeatherIcon source={{ uri: todaysWeather?.icon }} />
      </RightSideContainer>
    </Container>
  );
}
