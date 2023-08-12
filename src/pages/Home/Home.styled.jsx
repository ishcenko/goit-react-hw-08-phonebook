import styled from 'styled-components';
import { ImAddressBook } from 'react-icons/im';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 48;
  text-align: center;
  display: block;
  font-style: italic;

  &.tracking-out-expand {
    animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }

  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;
export const Block = styled.div`
  margin: 0 auto;
`;
export const ImAddressBookStyled = styled(ImAddressBook)`
  margin: 0 auto;
  height: 100px;
  width: 80px;
  fill: #3616ef;

  &.roll-in-left {
    animation: roll-in-left 0.6s ease-out both;
  }

  @keyframes roll-in-left {
    0% {
      transform: translateX(-800px) rotate(-540deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0) rotate(0deg);
      opacity: 1;
    }
  }
`;
