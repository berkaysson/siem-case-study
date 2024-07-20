import { IUser } from "../types/User";

export const getUser = (): IUser | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) as IUser : null;
};

export const createUser = (user: IUser) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUser = () => {
  localStorage.removeItem("user");
};
