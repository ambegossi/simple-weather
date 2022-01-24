import { useTranslation } from 'react-i18next';

import { CityCard } from './CityCard';

import { useCities } from '../../../store/useCities';
import { useFavoriteCities } from '../../../store/useFavoriteCities';

import { Title } from './styles';

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

      {nonFavoriteCities.map(city => (
        <CityCard key={city.id} city={city} />
      ))}
    </>
  );
}
