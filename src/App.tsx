import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
};

export default App;
