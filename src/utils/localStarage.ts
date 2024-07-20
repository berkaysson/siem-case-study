export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const createUser = (user: object) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUser = () => {
  localStorage.removeItem("user");
};
