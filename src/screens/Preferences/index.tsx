import React from 'react';
import { TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { usePreferences } from '../../store/usePreferences';

import {
  Container,
  Header,
  Title,
  ContentContainer,
  Row,
  PreferenceName,
} from './styles';

export function Preferences() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { t } = useTranslation();

  const { isDarkMode, toggleDarkMode } = usePreferences();

  function handleBack() {
    navigation.goBack();
  }

  const toggleSwitch = () => toggleDarkMode();

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
      </ContentContainer>
    </Container>
  );
}
