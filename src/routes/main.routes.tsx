import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Main } from '../screens/Main';
import { AddCity } from '../screens/AddCity';
import { Preferences } from '../screens/Preferences';
import { CityDetails } from '../screens/CityDetails';

import { City } from '../types/city';

export type MainRoutesParamList = {
  Main: undefined;
  AddCity: undefined;
  Preferences: undefined;
  CityDetails: { city: City };
};

const { Navigator, Screen } = createNativeStackNavigator<MainRoutesParamList>();

export function MainRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Main" component={Main} />
      <Screen name="AddCity" component={AddCity} />
      <Screen name="Preferences" component={Preferences} />
      <Screen name="CityDetails" component={CityDetails} />
    </Navigator>
  );
}
