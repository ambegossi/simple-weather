import { LOCALES } from '../i18n';

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
