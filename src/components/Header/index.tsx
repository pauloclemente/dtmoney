import logoImg from '../../assets/logoSvg.svg';
import { Container, Content } from './styles';

type HeaderProps = {
  onOpenNewTransactioinModal: () => void;
};
export function Header({ onOpenNewTransactioinModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactioinModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
