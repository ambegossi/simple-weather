import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${`${Platform.OS === 'android' ? 40 : 0}px`};

  flex: 1;
`;

export const Header = styled.View`
  padding-horizontal: 20px;
  margin-bottom: 10px;
`;

export const ContentContainer = styled.View`
  padding-horizontal: 20px;

  flex: 1;
`;

export const TodaysWeatherContainer = styled.View`
  margin-bottom: 10px;

  align-items: center;
`;

export const CityName = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.xlarge};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_primary};
  margin-bottom: 5px;
`;

export const StateAndCountry = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.medium};
  color: ${({ theme }) => theme.colors.text_secondary};
`;

export const WeatherIcon = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Temperature = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.xlarge};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_primary};
  margin-bottom: 10px;
`;

export const WeatherDescription = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.medium};
  color: ${({ theme }) => theme.colors.text_secondary};
  margin-bottom: 5px;
`;

export const TempMinAndMax = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.small};
  color: ${({ theme }) => theme.colors.text_secondary};
`;
