import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";
import { BookProvider } from "./context/BookContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BookProvider>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </BookProvider>
    </AuthProvider>
  );
};

export default App;
