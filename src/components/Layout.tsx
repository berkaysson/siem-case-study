import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import PublicRoute from "../routes/PublicRoute";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "../routes/PrivateRoute";
import Books from "./Books";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import NotFound from "./NotFound";
import { ThemeContext } from "../context/ThemeContext";

const Layout: React.FC = () => {
  const { user } = useContext(AuthContext);
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <Router>
      {!user && (
        <nav>
          <Link to="/login" style={{ marginRight: "10px" }}>
            Login
          </Link>
          <Link to="/register">Register</Link>
          <button onClick={toggleTheme}>
            {isDarkMode ? "Light" : "Dark"}
          </button>
        </nav>
      )}

      <Routes>
        <Route element={<PublicRoute isAuthenticated={!!user} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoute isAuthenticated={!!user} />}>
          <Route path="/books" element={<Books />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Layout;
