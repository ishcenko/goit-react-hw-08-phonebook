import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const WelcomeTitle = styled.p`
  text-align: center;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: black;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  &.hover,
  &.focus {
    color: blue;
  }

  &.active {
    color: blueviolet;
    padding: 6px 12px;
    border-radius: 6px;
    pointer-events: none;
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  background: blue;
  box-shadow: 0 3px 0 0 yellow;
  border-radius: 3px;
  border: none;
  color: whitesmoke;
  cursor: pointer;
  outline: none;
  padding: 10px 15px;
  font-size: 1em;
  text-shadow: 0 1px #77c9f1;

  &.hover,
  &.focus {
    background-color: #2b5beb;
  }
`;
