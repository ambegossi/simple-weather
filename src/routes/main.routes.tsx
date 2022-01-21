import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Main } from '../screens/Main';
import { AddCity } from '../screens/AddCity';

export type MainRoutesParamList = {
  Main: undefined;
  AddCity: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<MainRoutesParamList>();

export function MainRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Main" component={Main} />
      <Screen name="AddCity" component={AddCity} />
    </Navigator>
  );
}
