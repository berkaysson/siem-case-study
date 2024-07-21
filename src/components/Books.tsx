import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import BookForm from "./BookForm";
import BookList from "./BookList";

const Books: React.FC = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome, {user?.username}!</h1>
      <p>Books Page</p>
      <BookForm />
      <BookList />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Books;
