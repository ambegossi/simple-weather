import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

type Props = {
  title: string;
};

export function Button({ title, ...rest }: Props & RectButtonProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
