import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import {
  NavBar,
  NavLinkStyled,
  OutletStyled,
  ImHomeStyled,
} from './Navbar.styled';

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <NavBar>
        <NavLinkStyled to="/">
          <ImHomeStyled />
        </NavLinkStyled>
        {isLoggedIn ? <AuthNav /> : <UserMenu />}
      </NavBar>
      <OutletStyled />
    </>
  );
};
