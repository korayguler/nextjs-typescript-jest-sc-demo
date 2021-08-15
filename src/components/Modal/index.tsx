import React, { FunctionComponent } from 'react';
import { MainContainer, CloseButton, ModalContainer } from './style';

type Props = {
  isOpen?: Boolean;
  onClose: (ev: React.MouseEvent<HTMLElement>) => void;
};

const Modal: FunctionComponent<Props> = (props) => {
  return (
    <MainContainer
      data-testid='modal-main-container'
      className={!props.isOpen ? 'hidden' : ''}
      onClick={props.onClose}
    >
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={props.onClose} data-testid='modal-close-button'>
          x
        </CloseButton>

        <div>{props.children}</div>
      </ModalContainer>
    </MainContainer>
  );
};

Modal.defaultProps = {
  isOpen: false,
};

export default Modal;
