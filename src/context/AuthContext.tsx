import React, { createContext, useState, useMemo } from "react";
import { createUser, getUser, updateUser } from "../utils/localStarage";
import { IUser } from "../types/User";
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

  const onUpdateUser = (newUser: IUser | null) => {
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
