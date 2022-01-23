import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.xlarge};
  color: ${({ theme }) => theme.colors.text_primary};
  font-weight: bold;
  margin-top: 10px;
  padding-left: 20px;
`;

export const List = styled.FlatList`
  padding-vertical: 15px;
  padding-horizontal: 20px;

  flex: none;
`;
