import {
  GooglePlacesAutocomplete,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete';
import { useTheme } from 'styled-components/native';
import { useTranslation } from 'react-i18next';

import { GOOGLE_PLACES_API_KEY } from 'react-native-dotenv';

import { getGooglePlacesLanguage } from '../../utils/language';
import { usePreferences } from '../../store/usePreferences';

type Props = {
  onSelectPlace: (placeDetails: GooglePlaceDetail) => void;
};

export function GooglePlacesInput({ onSelectPlace }: Props) {
  const theme = useTheme();
  const { t } = useTranslation();

  const language = usePreferences(state => state.language);

  const googlePlacesLanguage = getGooglePlacesLanguage(language);

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
        if (details) {
          onSelectPlace(details);
        }
      }}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: googlePlacesLanguage,
      }}
    />
  );
}
