import { UserModel } from "../model/user.model";

const STORAGE_KEY = "local_users";

export const getLocalUsers = (): UserModel[] => {
  const users = localStorage.getItem(STORAGE_KEY);
  return users ? JSON.parse(users) : [];
};

export const saveLocalUsers = (users: UserModel[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const addLocalUser = (
  user: UserModel
): UserModel => {
  const users = getLocalUsers();

  const newUser = {
    ...user,
    id: Date.now(),
  };

  users.unshift(newUser);

  saveLocalUsers(users);

  return newUser;
};

export const deleteLocalUser = (id: number) => {
  const users = getLocalUsers();

  const updatedUsers = users.filter(
    (user) => user.id !== id
  );

  saveLocalUsers(updatedUsers);
};

export const updateLocalUser = (
  updatedUser: UserModel
) => {
  const users = getLocalUsers();

  const index = users.findIndex(
    (user) => user.id === updatedUser.id
  );

  if (index !== -1) {
    users[index] = updatedUser;

    saveLocalUsers(users);
  }
};

export const getLocalUserById = (
  id: number
): UserModel | undefined => {
  return getLocalUsers().find((user) => user.id === id);
};