import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import { GooglePlacesInput } from '../../components/GooglePlacesInput';
import { CityCard } from './CityCard';

import { City } from '../../types/city';

import { Container, Header } from './styles';

export function AddCity() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [city, setCity] = useState<City | null>(null);

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

      <GooglePlacesInput setCity={setCity} />

      {city && <CityCard city={city} />}
    </Container>
  );
}
