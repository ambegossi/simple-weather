import { ElementType } from 'react';
import { useTranslation } from 'react-i18next';

import { CityCard } from './CityCard';

import { useCities } from '../../../store/useCities';
import { useFavoriteCities } from '../../../store/useFavoriteCities';
import { City } from '../../../types/city';

import { Title, List } from './styles';

export function CitiesList() {
  const { t } = useTranslation();

  const cities = useCities(state => state.cities);
  const favoriteCitiesIds = useFavoriteCities(state => state.favoriteCitiesIds);

  const nonFavoriteCities = cities.filter(
    city => !favoriteCitiesIds.includes(city.id),
  );

  return (
    <>
      <Title>{t('cities')}</Title>

      <List<ElementType>
        data={nonFavoriteCities}
        renderItem={({ item }: { item: City }) => <CityCard city={item} />}
        keyExtractor={(item: City) => item.id}
      />
    </>
  );
}
