import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';

import { generateUuid } from './uuid';
import { getCity, getCountry, getState } from './googlePlaces';

export function composeCity(details: GooglePlaceDetail) {
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
