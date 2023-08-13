import { Container, Title, ImAddressBookStyled, Block } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Title className="tracking-out-expand">Welcome!</Title>
      <Block>
        <ImAddressBookStyled className="roll-in-left" />
      </Block>
    </Container>
  );
}
