import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logoSvg.svg';
import { Container, Content } from './styles';

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false,
  );

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova transação</button>
        <Modal isOpen={isNewTransactionModalOpen}>
          <h2>Cadastrar transação</h2>
        </Modal>
      </Content>
    </Container>
  );
}
