import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.large};
  color: ${({ theme }) => theme.colors.text_primary};
  font-weight: bold;
  margin-vertical: 10px;
  padding-left: 20px;
`;
