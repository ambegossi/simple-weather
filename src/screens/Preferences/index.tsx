import React, { useState } from 'react';
import { TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { LanguagePicker } from './LanguagePicker';

import { LOCALES } from '../../i18n';
import { usePreferences } from '../../store/usePreferences';

import {
  Container,
  Header,
  Title,
  ContentContainer,
  Row,
  PreferenceName,
  Language,
} from './styles';

export function Preferences() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const { isDarkMode, toggleDarkMode } = usePreferences();

  const [isOpenLanguagePicker, setIsOpenLanguagePicker] = useState(false);

  function handleBack() {
    navigation.goBack();
  }

  const toggleSwitch = () => toggleDarkMode();

  const toggleLanguagePicker = () => setIsOpenLanguagePicker(prev => !prev);

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
            <Language>
              {i18n.language === LOCALES.ENGLISH
                ? t('english')
                : t('portuguese-br')}
            </Language>
          </Row>
        </TouchableOpacity>
        {isOpenLanguagePicker && <LanguagePicker />}
      </ContentContainer>
    </Container>
  );
}
