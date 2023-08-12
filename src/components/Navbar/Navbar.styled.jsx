import styled from 'styled-components';

import { NavLink, Outlet } from 'react-router-dom';

import { ImHome } from 'react-icons/im';

export const NavBar = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 2px solid #2a363b;
  padding: 0 25px;
`;

export const HeaderWrapper = styled.div``;

export const NavLinkStyled = styled(NavLink)`
  color: black;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  &.hover,
  &.focus {
    color: blue;
  }

  &.active {
    color: blue;
    padding: 6px 12px;
    border-radius: 6px;
    pointer-events: none;
    text-decoration: underline;
  }
`;

export const OutletStyled = styled(Outlet)``;

export const ImHomeStyled = styled(ImHome)`
  height: 25px;
  width: 25px;
`;
