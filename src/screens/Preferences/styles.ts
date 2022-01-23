import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};

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

export const ContentContainer = styled.ScrollView`
  padding-horizontal: 20px;
  margin-top: 15px;

  flex: 1;
`;

export const Row = styled.View`
  margin-vertical: 10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PreferenceName = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.medium};
  color: ${({ theme }) => theme.colors.text_secondary};
`;

export const Language = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.medium};
  color: ${({ theme }) => theme.colors.text_primary};
`;
