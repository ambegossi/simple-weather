import { useCallback } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { CitiesList } from './CitiesList';
import { FavoriteCitiesList } from './FavoriteCitiesList';
import { Warning } from './Warning';

import { useCities } from '../../store/useCities';
import { useFavoriteCities } from '../../store/useFavoriteCities';
import { usePreferences } from '../../store/usePreferences';

import { Container, Header, AddButton, ContentContainer } from './styles';

export function Main() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { t } = useTranslation();

  const { cities, fetchCitiesWeather, fetchCitiesWeatherStatus } = useCities();
  const favoriteCitiesIds = useFavoriteCities(state => state.favoriteCitiesIds);
  const temperatureUnit = usePreferences(state => state.temperatureUnit);

  const hasFavoriteCities = !!favoriteCitiesIds.length;
  const hasNonFavoriteCities = cities.some(
    city => !favoriteCitiesIds.includes(city.id),
  );

  function handleNavigateToAddCity() {
    navigation.navigate('AddCity');
  }

  function handleNavigateToPreferences() {
    navigation.navigate('Preferences');
  }

  useFocusEffect(
    useCallback(() => {
      fetchCitiesWeather(temperatureUnit);
    }, [fetchCitiesWeather, temperatureUnit]),
  );

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleNavigateToPreferences}>
          <Ionicons
            name="settings-outline"
            size={34}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
        <AddButton onPress={handleNavigateToAddCity}>
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
          <>
            {hasFavoriteCities && <FavoriteCitiesList />}

            {hasNonFavoriteCities && <CitiesList />}
          </>
        )}
      </ContentContainer>
    </Container>
  );
}
