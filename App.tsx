import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import themes from './src/styles/themes';
import { Routes } from './src/routes';
import { resources, LOCALES } from './src/i18n';
import { usePreferences } from './src/store/usePreferences';

export default function App() {
  const isDarkMode = usePreferences(state => state.isDarkMode);
  const language = usePreferences(state => state.language);

  const [i18nInitialized, setI18nInitialized] = useState(false);

  const theme = isDarkMode ? themes.dark : themes.light;
  const statusBarStyle = isDarkMode ? 'light' : 'dark';

  useEffect(() => {
    const initI18n = async () => {
      i18n.use(initReactI18next).init({
        compatibilityJSON: 'v3',
        resources,
        lng: language,
        fallbackLng: LOCALES.ENGLISH,
        interpolation: {
          escapeValue: false,
        },
      });

      setI18nInitialized(true);
    };

    initI18n();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
