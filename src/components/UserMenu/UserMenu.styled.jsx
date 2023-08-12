import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  color: black;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;

  &.hover,
  &.focus {
    color: blue;
  }

  &.active {
    color: blue;
    padding: 6px 12px;
    border-radius: 4px;
    pointer-events: none;
    text-decoration: underline;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 12px;
`;

export const LinkItem = styled.li`
  justify-content: flex-end;
`;
