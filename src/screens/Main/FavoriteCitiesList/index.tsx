import { useTranslation } from 'react-i18next';

import { FavoriteCityCard } from './FavoriteCityCard';

import { useCities } from '../../../store/useCities';
import { useFavoriteCities } from '../../../store/useFavoriteCities';

import { Title } from './styles';

export function FavoriteCitiesList() {
  const { t } = useTranslation();

  const cities = useCities(state => state.cities);
  const favoriteCitiesIds = useFavoriteCities(state => state.favoriteCitiesIds);

  const favoriteCities = cities.filter(city =>
    favoriteCitiesIds.includes(city.id),
  );

  return (
    <>
      <Title>{t('favorites')}</Title>

      {favoriteCities.map(city => (
        <FavoriteCityCard key={city.id} city={city} />
      ))}
    </>
  );
}
