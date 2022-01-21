import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import { NoCityInfo } from './NoCityInfo';

import { Container, Header, AddButton, ContentContainer } from './styles';
import { useCities } from '../../store/useCities';
import { CitiesList } from './CitiesList';

export function Main() {
  const theme = useTheme();
  const navigation = useNavigation();
  const cities = useCities(state => state.cities);

  function handleNavigateAddCity() {
    navigation.navigate('AddCity');
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity>
          <Ionicons
            name="settings-outline"
            size={34}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
        <AddButton onPress={handleNavigateAddCity}>
          <Ionicons name="add" size={24} color={theme.colors.secondary} />
        </AddButton>
      </Header>

      <ContentContainer>
        {cities.length ? <CitiesList /> : <NoCityInfo />}
      </ContentContainer>
    </Container>
  );
}
