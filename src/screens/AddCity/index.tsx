import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';

import { GooglePlacesInput } from '../../components/GooglePlacesInput';
import { CityCard } from './CityCard';

import { City } from '../../types/city';
import { composeCity } from '../../utils/city';

import { Container, Header, Title } from './styles';

export function AddCity() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [city, setCity] = useState<City | null>(null);

  function handleBack() {
    navigation.goBack();
  }

  function handleSetCity(placeDetails: GooglePlaceDetail) {
    const composedCity = composeCity(placeDetails);

    setCity(composedCity);
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
        <Title>{t('add-city')}</Title>
      </Header>

      <GooglePlacesInput onSelectPlace={handleSetCity} />

      {city && <CityCard city={city} />}
    </Container>
  );
}
