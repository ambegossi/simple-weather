import React from 'react';
import { useTranslation } from 'react-i18next';

import { Picker } from '../../../components/Picker';

import { LOCALES } from '../../../i18n';

export function LanguagePicker() {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  function setLanguage(itemValue: string) {
    i18n.changeLanguage(itemValue);
  }

  return (
    <Picker
      items={[
        { label: t('english'), value: LOCALES.ENGLISH },
        { label: t('portuguese-br'), value: LOCALES.PORTUGUESE_BR },
      ]}
      selectedValue={currentLanguage}
      setValue={setLanguage}
    />
  );
}
