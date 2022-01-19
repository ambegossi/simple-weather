import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import themes from './src/styles/themes';

import { Routes } from './src/routes';

export default function App() {
  const deviceTheme = useColorScheme();

  const theme = deviceTheme ? themes[deviceTheme] : themes.light;
  const statusBarStyle = deviceTheme === 'dark' ? 'light' : 'dark';

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={statusBarStyle} />
      <Routes />
    </ThemeProvider>
  );
}
