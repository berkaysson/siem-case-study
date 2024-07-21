import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";
import { BookProvider } from "./context/BookContext";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BookProvider>
        <Layout />
      </BookProvider>
    </AuthProvider>
  );
};

export default App;
