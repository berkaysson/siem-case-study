import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import styled from "styled-components";
import { LogOut, Moon, Sun } from "lucide-react";
import Button from "./Button";

const Navigation = () => {
  const { user, logout } = useContext(AuthContext);
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  const authNavigation = (
    <>
      <StyledNavLink to="/login">Login</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
    </>
  );

  const userNavigation = (
    <>
      <WelcomeText>Welcome {user?.username}</WelcomeText>
      <Button
        variant="primary"
        icon={<LogOut size={20} />}
        onClick={logout}
        destructive
      >
        Logout
      </Button>
    </>
  );

  return (
    <StyledNav>
      <NavGroup>{user ? userNavigation : authNavigation}</NavGroup>
      <Button size="small" variant="ghost" onClick={toggleTheme}>
        {isDarkMode ? <Sun /> : <Moon />}
      </Button>
    </StyledNav>
  );
};

export default Navigation;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.background};
  border-bottom: 2px solid ${(props) => props.theme.textAlt};
  transition: all 0.1s ease;

  @media (max-width: 426px) {
    padding: 0.5rem;
  }
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 426px) {
    gap: 1rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.1s ease;
  text-decoration: underline;

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }

  &.active {
    color: ${(props) => props.theme.textAlt};
  }
`;

const WelcomeText = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};

  @media (max-width: 426px) {
    display: none;
  }
`;
