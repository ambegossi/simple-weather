import {
  GooglePlacesAutocomplete,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { GOOGLE_PLACES_API_KEY } from 'react-native-dotenv';

import { generateUuid } from '../../utils/uuid';
import { getGooglePlacesLanguage } from '../../utils/language';
import { usePreferences } from '../../store/usePreferences';
import { getCity, getCountry, getState } from '../../utils/googlePlaces';
import { City } from '../../types/city';

function formatCity(details: GooglePlaceDetail) {
  const name = getCity(details);
  const state = getState(details);
  const country = getCountry(details);
  const { lat } = details.geometry.location;
  const { lng } = details.geometry.location;

  return {
    id: generateUuid(),
    name,
    state,
    country,
    lat,
    lng,
  };
}

type Props = {
  setCity: (city: City) => void;
};

export function GooglePlacesInput({ setCity }: Props) {
  const theme = useTheme();
  const { t } = useTranslation();

  const language = usePreferences(state => state.language);

  const googlePlacesLanguage = getGooglePlacesLanguage(language);

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
          flex: 0,
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
        language: googlePlacesLanguage,
      }}
    />
  );
}
