import { IUser } from "./User";

export interface AuthContextType {
  user: IUser | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
  onUpdateUser: (user: IUser) => void;
}
