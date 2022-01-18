import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Main } from '../screens/Main';

type MainRoutesParamList = {
  Main: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<MainRoutesParamList>();

export function MainRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Main" component={Main} />
    </Navigator>
  );
}
