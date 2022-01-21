import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};

  flex: 1;
`;

export const Header = styled.View`
  padding-horizontal: 20px;
  margin-bottom: 15px;
`;
