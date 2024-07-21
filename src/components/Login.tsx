import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { CardForm, FormGroup } from "./ui/CardForm";
import { Input } from "./ui/Input";
import { LogIn } from "lucide-react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate("/books");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <CardForm>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label>Username</label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <label>Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <Button fullWidth type="submit" icon={<LogIn size={16} />}>Login</Button>
        </FormGroup>
      </form>
      <p className="link">
        <Link to="/register">Don't have an account?</Link>
      </p>
    </CardForm>
  );
};

export default Login;
