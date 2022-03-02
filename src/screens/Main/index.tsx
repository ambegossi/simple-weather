import { useCallback } from 'react';
import { TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { CitiesList } from './CitiesList';
import { FavoriteCitiesList } from './FavoriteCitiesList';
import { Warning } from './Warning';

import { useCities } from '../../store/useCities';
import { useFavoriteCities } from '../../store/useFavoriteCities';
import { usePreferences } from '../../store/usePreferences';

import {
  Container,
  Header,
  AddButton,
  ContentContainer,
  LoadingContainer,
} from './styles';
import { getOpenWeatherLanguage } from '../../utils/language';

export function Main() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { t } = useTranslation();

  const { cities, fetchCitiesWeather, fetchCitiesWeatherStatus } = useCities();
  const { temperatureUnit, language } = usePreferences();
  const favoriteCitiesIds = useFavoriteCities(state => state.favoriteCitiesIds);

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
      const openWeatherLanguage = getOpenWeatherLanguage(language);
      fetchCitiesWeather(temperatureUnit, openWeatherLanguage);
    }, [fetchCitiesWeather, temperatureUnit, language]),
  );

  return (
    <Container>
      <Header>
        <TouchableOpacity
          onPress={handleNavigateToPreferences}
          testID="settings-button"
        >
          <Ionicons
            name="settings-outline"
            size={34}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
        <AddButton onPress={handleNavigateToAddCity} testID="add-button">
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
          <LoadingContainer testID="loading">
            <ActivityIndicator size="large" color={theme.colors.primary} />
          </LoadingContainer>
        ) : fetchCitiesWeatherStatus === 'error' ? (
          <Warning
            title={t('ops-an-error-has-occurred')}
            subtitle={t('please-try-again-later')}
          />
        ) : (
          <ScrollView>
            {hasFavoriteCities && <FavoriteCitiesList />}

            {hasNonFavoriteCities && <CitiesList />}
          </ScrollView>
        )}
      </ContentContainer>
    </Container>
  );
}
