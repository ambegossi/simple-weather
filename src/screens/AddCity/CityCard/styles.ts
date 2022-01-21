import styled from 'styled-components/native';

export const Container = styled.View`
  margin-horizontal: 20px;
  padding: 15px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5px;
`;

export const Country = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.medium};
  color: ${({ theme }) => theme.colors.text_secondary};
  margin-bottom: 15px;
`;
