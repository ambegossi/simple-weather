import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${`${Platform.OS === 'android' ? 40 : 0}px`};

  flex: 1;
`;

export const Header = styled.View`
  padding-horizontal: 20px;

  flex-direction: row;
  justify-content: space-between;
`;

export const ContentContainer = styled.View`
  flex: 1;
`;

export const AddButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;
`;
