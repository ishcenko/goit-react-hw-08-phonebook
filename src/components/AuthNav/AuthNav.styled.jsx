import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;
export const WelcomeTitle = styled.p`
  text-align: center;
  font-style: italic;
  font-weight: 400;
  font-size: 11px;
  @media (min-width: 768px) {
    font-weight: 400;
    font-size: 20px;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  color: black;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  @media (min-width: 768px) {
    font-size: 20px;
    font-weight: 700;
  }
  &:hover,
  &:focus {
    color: blueviolet;
  }

  &.active {
    color: blueviolet;
    padding: 6px 12px;
    border-radius: 4px;
    pointer-events: none;
    text-decoration: underline;
  }
`;
export const Button = styled.button`
  background: blue;
  box-shadow: 0 3px 0 0 grey;
  border-radius: 2px;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
  padding: 8px 12px;
  font-size: 1em;
  text-shadow: 0 1px #3616ef;
  @media (min-width: 768px) {
    font-size: 20px;
    padding: 10px 15px;
  }
  &:hover,
  &:focus {
    background-color: #3616ef;
  }
`;
