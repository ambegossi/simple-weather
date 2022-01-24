import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: ${({ theme }) => theme.border.radius};
  margin-bottom: 10px;

  flex-direction: row;
`;

export const LeftSideContainer = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_primary};
  margin-bottom: 5px;
`;

export const Country = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.medium};
  color: ${({ theme }) => theme.colors.text_secondary};
  margin-bottom: 15px;
`;

export const WeatherDescription = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.small};
  color: ${({ theme }) => theme.colors.text_primary};
  margin-bottom: 5px;
`;

export const TempMinAndMax = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.small};
  color: ${({ theme }) => theme.colors.text_secondary};
`;

export const RightSideContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const TemperatureContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Temperature = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.xlarge};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const WeatherIcon = styled.Image`
  width: 60px;
  height: 60px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  margin-right: 10px;
`;
