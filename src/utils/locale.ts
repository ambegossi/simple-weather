import { LOCALES } from '../i18n';

export const getLocaleFromDeviceLocale = (deviceLocale: string) => {
  switch (deviceLocale) {
    case 'en':
      return LOCALES.ENGLISH;
    case 'pt-BR':
      return LOCALES.PORTUGUESE_BR;
    default:
      return 'en';
  }
};
