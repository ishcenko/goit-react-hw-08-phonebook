import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 320px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1280px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
