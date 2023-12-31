import { BackButton, BackIcon, Container, Logo } from "./styles";
import { CaretLeft } from 'phosphor-react-native'
import logoImg from '../../assets/logo.png'

interface Props {
  showBackButton?: boolean,
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}