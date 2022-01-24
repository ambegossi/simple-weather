import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: ${({ theme }) => theme.border.radius};
  margin-bottom: 10px;

  flex-direction: row;
  justify-content: space-between;
`;

export const LeftSideContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const DescriptionContainer = styled.View`
  margin-bottom: 5px;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.medium};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const Country = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.medium};
  color: ${({ theme }) => theme.colors.text_secondary};
`;

export const RightSideContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Temperature = styled.Text`
  margin-right: 5px;
  font-size: ${({ theme }) => theme.typography.sizes.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const WeatherIcon = styled.Image`
  width: 40px;
  height: 40px;
`;
