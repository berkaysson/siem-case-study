import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PublicRoute from "../routes/PublicRoute";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "../routes/PrivateRoute";
import Books from "./Books";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Layout: React.FC = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute isAuthenticated={!!user} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoute isAuthenticated={!!user} />}>
          <Route path="/books" element={<Books />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default Layout;
