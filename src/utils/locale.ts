import { LOCALES } from '../i18n';

export function getLocaleFromDeviceLocale(deviceLocale: string) {
  switch (deviceLocale) {
    case 'en':
      return LOCALES.ENGLISH;
    case 'pt-BR':
      return LOCALES.PORTUGUESE_BR;
    default:
      return 'en';
  }
}

export function getGooglePlacesLanguage(locale: string) {
  switch (locale) {
    case LOCALES.ENGLISH:
      return 'en';
    case LOCALES.PORTUGUESE_BR:
      return 'pt-BR';
    default:
      return 'en';
  }
}
