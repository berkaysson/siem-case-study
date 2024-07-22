import React, { createContext, useState, useMemo } from "react";
import { createUser, getUser, updateUser } from "../utils/localStorage";
import { User } from "../types/User";
import { AuthContextType } from "../types/AuthContext";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  onUpdateUser: () => {},
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    const storedUser = getUser();
    if (storedUser === null) {
      alert("Invalid credentials");
      return;
    }
    if (storedUser.username === username && storedUser.password === password) {
      setUser(storedUser);
    } else {
      alert("Invalid credentials");
    }
  };

  const register = async (username: string, password: string) => {
    if (!username || !password) {
      throw new Error("Username and password are required");
    }

    const newUser = {
      id: crypto.randomUUID(),
      username,
      password,
      createdAt: new Date(),
      books: [],
    };
    createUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const onUpdateUser = (newUser: User | null) => {
    if (newUser) {
      updateUser(newUser);
      setUser(newUser);
    } else {
      console.error("User is null in onUpdateUser");
    }
  };

  const contextValue = useMemo(
    () => ({ user, login, register, logout, onUpdateUser }),
    [user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
