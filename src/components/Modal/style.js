import styled from 'styled-components';

export const MainContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0%;
  transition: 200ms all;

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;
export const ModalContainer = styled.div`
  position: absolute;
  z-index: 999;
  background: #ffffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 50px;
  width: 100%;
  max-width: 606px;
  min-width: 300px;
  height: fit-content;
  border-radius: 25px;
  box-shadow: 0px 24px 35px -15px rgba(100, 93, 152, 0.17);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  background: inherit;
  transition: 200ms all;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
