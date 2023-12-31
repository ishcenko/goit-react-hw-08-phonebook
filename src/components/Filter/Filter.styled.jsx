import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const Block = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
  width: 100%;
  border: 2px solid #141313;
  font-size: 0.95em;
  padding: 0.8em 0.5em;
  border-radius: 7px;

  &:hover {
    border-color: #3616ef;
    outline: none;
  }
`;

export const ImSearchStyled = styled(ImSearch)`
  fill: #1f0886;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
`;
