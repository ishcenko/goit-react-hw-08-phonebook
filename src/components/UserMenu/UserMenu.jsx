import {
  NavLinkStyled,
  LinkList,
  LinkItem,
} from 'components/UserMenu/UserMenu.styled';

export const UserMenu = () => {
  return (
    <LinkList>
      <LinkItem>
        <NavLinkStyled to="login">Login</NavLinkStyled>
      </LinkItem>
      <li>
        <NavLinkStyled to="register">Register</NavLinkStyled>
      </li>
    </LinkList>
  );
};
