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
import NotFound from "./NotFound";
import Navigation from "./ui/Navigation";
import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";

const Layout: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  return (
    <Wrapper theme={theme}>
      <Router>
        <Navigation />
        <Main>
          <p className="description">
            This is a book library app. You can add, edit and delete books.
          </p>
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
        </Main>
      </Router>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  min-height: 100%;
  min-width: 100%;
`;

const Main = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .description {
    text-align: center;
    color: ${(props) => props.theme.textAlt};
    font-size: 0.875rem;
    margin: 0.5rem;
  }

  @media (max-width: 426px) {
    padding: 0.2rem;
  }
`;
