import { useTranslation } from 'react-i18next';

import { Picker } from '../../../components/Picker';

import { LOCALES } from '../../../i18n';
import { usePreferences } from '../../../store/usePreferences';

export function LanguagePicker() {
  const { t, i18n } = useTranslation();

  const setLanguage = usePreferences(state => state.setLanguage);

  const currentLanguage = i18n.language;

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
