import { NavigationContainer } from '@react-navigation/native';

import { MainRoutes } from './main.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
}
