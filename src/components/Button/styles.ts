import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 15px;
  margin-bottom: 8px;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.colors.button_primary_bg};

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.sizes.medium};
  color: ${({ theme }) => theme.colors.button_primary_text};
`;
