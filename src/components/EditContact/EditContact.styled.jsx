import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
