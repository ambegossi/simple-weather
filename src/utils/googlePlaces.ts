import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';

export function getCity(details: GooglePlaceDetail) {
  return (
    details.address_components.find(addressComponent =>
      addressComponent.types.includes('locality'),
    )?.long_name || ''
  );
}

export function getState(details: GooglePlaceDetail) {
  return (
    details.address_components.find(addressComponent =>
      addressComponent.types.includes('administrative_area_level_1'),
    )?.short_name || ''
  );
}

export function getCountry(details: GooglePlaceDetail) {
  return (
    details.address_components.find(addressComponent =>
      addressComponent.types.includes('country'),
    )?.long_name || ''
  );
}
