import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.large};
  color: ${({ theme }) => theme.colors.text_primary};
  text-align: center;
  font-weight: bold;
  max-width: 270px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.medium};
  color: ${({ theme }) => theme.colors.text_secondary};
  text-align: center;
  margin-top: 14px;
  max-width: 270px;
`;
