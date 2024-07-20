import React, { createContext, useState, useMemo } from "react";
import { createUser, getUser } from "../utils/localStarage";
import { IUser } from "../types/User";

interface AuthContextType {
  user: IUser | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);

  const login = async (username: string, password: string) => {
    const storedUser = getUser();
    if (storedUser) {
      if (
        storedUser.username === username &&
        storedUser.password === password
      ) {
        setUser(storedUser);
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  const register = async (username: string, password: string) => {
    const newUser = {
      id: crypto.randomUUID(),
      username,
      password,
      createdAt: new Date(),
      books: [],
    };
    createUser(newUser);
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const contextValue = useMemo(
    () => ({ user, login, register, logout }),
    [user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
