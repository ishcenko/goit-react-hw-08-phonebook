import styled from 'styled-components';
import { ImPhone, ImUserPlus } from 'react-icons/im';

export const Input = styled.input`
  width: 100%;
  display: block;
  border: 1px solid #dbdbdb;
  margin-right: 20px;
  margin-bottom: 10px;
  font-size: 0.8em;
  padding: 0.8em 0.5em;
  border-radius: 2px;
  &:hover {
    border-color: #3616ef;
    outline: none;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
`;
export const Label = styled.label`
  display: block;
`;

export const ImUserPlusStyled = styled(ImUserPlus)`
  fill: #3616ef;
`;
export const ImPhoneStyled = styled(ImPhone)`
  fill: #3616ef;
`;
