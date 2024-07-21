import { User } from "../types/User";

const USER_STORAGE_KEY = "user";

export const getUser = (): User | null => {
  const storedUser = localStorage.getItem(USER_STORAGE_KEY);
  try {
    return storedUser ? JSON.parse(storedUser) as User : null;
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
    return null;
  }
};

export const createUser = (user: User): void => {
  if (user === null || user === undefined) {
    throw new Error('User is null or undefined');
  }

  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
};

export const removeUser = (): void => {
  if (localStorage.getItem(USER_STORAGE_KEY) !== null) {
    localStorage.removeItem(USER_STORAGE_KEY);
  }
};

export const updateUser = (user: User | null): void => {
  if (user) {
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } catch (error) {
      console.error("Error updating user in localStorage:", error);
    }
  } else {
    console.error("User is null in updateUser");
  }
};
