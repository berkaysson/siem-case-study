import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

const Navigation = () => {
  const { user, logout } = useContext(AuthContext);
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  const authNavigation = (
    <>
      <NavLink to="/login" style={{ marginRight: "10px" }}>
        Login
      </NavLink>
      <NavLink to="/register">Register</NavLink>
    </>
  );

  const userNavigation = (
    <>
      <h1>Welcome {user?.username}</h1>
      <button onClick={logout}>Logout</button>
    </>
  );

  return (
    <nav>
      {user ? userNavigation : authNavigation}
      <button onClick={toggleTheme}>{isDarkMode ? "Light" : "Dark"}</button>
    </nav>
  );
};

export default Navigation;
