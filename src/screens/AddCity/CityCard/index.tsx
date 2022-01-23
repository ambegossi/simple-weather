import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../components/Button';

import { useCities } from '../../../store/useCities';
import { City } from '../../../types/city';

import { Container, Name, Country } from './styles';

type Props = {
  city: City;
};

export function CityCard({ city }: Props) {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const addCity = useCities(state => state.addCity);

  function handleAddCity() {
    addCity(city);
    navigation.navigate('Main');
  }

  return (
    <Container>
      <Name>{city.name}</Name>
      <Country>{city.country}</Country>

      <Button title={t('add')} onPress={handleAddCity} />
    </Container>
  );
}
