import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Title, Subtitle } from './styles';

export function NoCityInfo() {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('looks-like-you-havent-added-a-city-yet')}</Title>
      <Subtitle>{t('try-adding-a-city-using-the-plus-button')}</Subtitle>
    </Container>
  );
}
