import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import * as Localization from 'expo-localization';
import { ThemeProvider } from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import themes from './src/styles/themes';
import { Routes } from './src/routes';
import { resources, LOCALES } from './src/i18n';
import { getLocaleFromDeviceLocale } from './src/utils/locale';
import { usePreferences } from './src/store/usePreferences';

export default function App() {
  const isDarkMode = usePreferences(state => state.isDarkMode);

  const [i18nInitialized, setI18nInitialized] = useState(false);

  const theme = isDarkMode ? themes.dark : themes.light;
  const statusBarStyle = isDarkMode ? 'light' : 'dark';

  useEffect(() => {
    const initI18n = async () => {
      let locale = '';
      const storedLocale = await AsyncStorage.getItem('@locale');

      if (storedLocale) {
        locale = storedLocale;
      } else {
        const deviceLocale = Localization.locale;

        locale = getLocaleFromDeviceLocale(deviceLocale);
      }

      i18n.use(initReactI18next).init({
        resources,
        lng: locale,
        fallbackLng: LOCALES.ENGLISH,
        interpolation: {
          escapeValue: false,
        },
      });

      setI18nInitialized(true);
    };

    initI18n();
  }, []);

  if (!i18nInitialized) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={statusBarStyle} />
      <Routes />
    </ThemeProvider>
  );
}
