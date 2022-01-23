import { useState } from 'react';
import { TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { LanguagePicker } from './LanguagePicker';
import { TemperatureUnitPicker } from './TemperatureUnitPicker';

import { LOCALES } from '../../i18n';
import { usePreferences } from '../../store/usePreferences';
import { capitalizeFirstetter } from '../../utils/format';

import {
  Container,
  Header,
  Title,
  ContentContainer,
  Row,
  PreferenceName,
  PreferenceValue,
} from './styles';

export function Preferences() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const { isDarkMode, toggleDarkMode, temperatureUnit } = usePreferences();

  const [isOpenLanguagePicker, setIsOpenLanguagePicker] = useState(false);
  const [isOpenTemperatureUnitPicker, setIsOpenTemperatureUnitPicker] =
    useState(false);

  function handleBack() {
    navigation.goBack();
  }

  const toggleSwitch = () => toggleDarkMode();

  const toggleLanguagePicker = () => setIsOpenLanguagePicker(prev => !prev);

  const toggleTemperatureUnitPicker = () =>
    setIsOpenTemperatureUnitPicker(prev => !prev);

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons
            name="chevron-back"
            size={24}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
        <Title>{t('preferences')}</Title>
      </Header>

      <ContentContainer>
        <Row>
          <PreferenceName>{t('dark-mode')}</PreferenceName>
          <Switch onValueChange={toggleSwitch} value={isDarkMode} />
        </Row>
        <TouchableOpacity onPress={toggleLanguagePicker}>
          <Row>
            <PreferenceName>{t('language')}</PreferenceName>
            <PreferenceValue>
              {i18n.language === LOCALES.ENGLISH
                ? t('english')
                : t('portuguese-br')}
            </PreferenceValue>
          </Row>
        </TouchableOpacity>
        {isOpenLanguagePicker && <LanguagePicker />}
        <TouchableOpacity onPress={toggleTemperatureUnitPicker}>
          <Row>
            <PreferenceName>{t('temperature-unit')}</PreferenceName>
            <PreferenceValue>
              {capitalizeFirstetter(temperatureUnit)}
            </PreferenceValue>
          </Row>
        </TouchableOpacity>
        {isOpenTemperatureUnitPicker && <TemperatureUnitPicker />}
      </ContentContainer>
    </Container>
  );
}
