import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${`${Platform.OS === 'android' ? 40 : 0}px`};

  flex: 1;
`;

export const Header = styled.View`
  padding-horizontal: 20px;
  margin-bottom: 15px;

  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.xlarge};
  color: ${({ theme }) => theme.colors.text_primary};
  font-weight: bold;
  margin-left: 10px;
`;
