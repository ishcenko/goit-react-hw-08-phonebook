import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;
export const Title = styled.h2`
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  display: block;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;
