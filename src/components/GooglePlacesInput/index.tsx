import React from 'react';
import {
  GooglePlacesAutocomplete,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { GOOGLE_PLACES_API_KEY } from 'react-native-dotenv';

import { generateUuid } from '../../utils/uuid';
import { getGooglePlacesLanguage } from '../../utils/locale';
import { City } from '../../types/city';

function formatCity(details: GooglePlaceDetail) {
  const name = details.address_components[0].long_name;
  const state = details.address_components[2].short_name;
  const country = details.address_components[3].long_name;

  return {
    id: generateUuid(),
    name,
    state,
    country,
  };
}

type Props = {
  setCity: (city: City) => void;
};

export function GooglePlacesInput({ setCity }: Props) {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const language = getGooglePlacesLanguage(i18n.language);

  function handleSetCity(details: GooglePlaceDetail | null) {
    if (details) {
      const formattedCity = formatCity(details);

      setCity(formattedCity);
    }
  }

  return (
    <GooglePlacesAutocomplete
      styles={{
        container: {
          paddingHorizontal: 20,
          flex: 'none',
          marginBottom: 20,
        },
        textInput: {
          paddingVertical: 14,
          paddingHorizontal: 16,
          color: '#fff',
          backgroundColor: theme.colors.google_places_input_bg,
          fontSize: 15,
        },
      }}
      textInputProps={{
        placeholderTextColor: theme.colors.google_places_input_placeholder,
      }}
      fetchDetails
      placeholder={t('type-the-city-here')}
      onPress={(_, details) => {
        handleSetCity(details);
      }}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language,
      }}
    />
  );
}
