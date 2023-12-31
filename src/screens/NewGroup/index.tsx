import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie uma nova turma"
        />
        <Input />
        <Button
          title="Criar nova turma"
          style={{ marginTop: 20 }}
        />
      </Content>
    </Container>
  );
}