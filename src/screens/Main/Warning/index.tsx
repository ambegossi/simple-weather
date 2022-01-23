import { Container, Title, Subtitle } from './styles';

type Props = {
  title: string;
  subtitle: string;
};

export function Warning({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
