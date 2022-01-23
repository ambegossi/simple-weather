import { LOCALES } from '../i18n';

export function getGooglePlacesLanguage(language: string) {
  switch (language) {
    case LOCALES.ENGLISH:
      return 'en';
    case LOCALES.PORTUGUESE_BR:
      return 'pt-BR';
    default:
      return 'en';
  }
}

export function getOpenWeatherLanguage(language: string) {
  switch (language) {
    case LOCALES.ENGLISH:
      return 'en';
    case LOCALES.PORTUGUESE_BR:
      return 'pt_br';
    default:
      return 'en';
  }
}
