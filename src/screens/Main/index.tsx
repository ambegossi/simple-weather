import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { Warning } from './Warning';

import { Container, Header, AddButton, ContentContainer } from './styles';
import { useCities } from '../../store/useCities';
import { usePreferences } from '../../store/usePreferences';
import { CitiesList } from './CitiesList';

export function Main() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { t } = useTranslation();

  const { cities, fetchCitiesWeather, fetchCitiesWeatherStatus } = useCities();
  const temperatureUnit = usePreferences(state => state.temperatureUnit);

  function handleNavigateAddCity() {
    navigation.navigate('AddCity');
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchCitiesWeather(temperatureUnit);
    }, [fetchCitiesWeather, temperatureUnit]),
  );

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
        {!cities.length ? (
          <Warning
            title={t('looks-like-you-havent-added-a-city-yet')}
            subtitle={t('try-adding-a-city-using-the-plus-button')}
          />
        ) : fetchCitiesWeatherStatus === 'loading' ? (
          <ActivityIndicator size="large" />
        ) : fetchCitiesWeatherStatus === 'error' ? (
          <Warning
            title={t('ops-an-error-has-occurred')}
            subtitle={t('please-try-again-later')}
          />
        ) : (
          <CitiesList />
        )}
      </ContentContainer>
    </Container>
  );
}
