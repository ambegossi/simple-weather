import React, { ElementType } from 'react';

import { CityCard } from './CityCard';

import { useCities } from '../../../store/useCities';
import { City } from '../../../types/city';

import { List } from './styles';

export function CitiesList() {
  const cities = useCities(state => state.cities);

  return (
    <List<ElementType>
      data={cities}
      renderItem={({ item }: { item: City }) => <CityCard city={item} />}
      keyExtractor={(item: City) => item.id}
    />
  );
}
