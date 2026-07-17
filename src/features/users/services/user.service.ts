import { apiClient } from "../../../api";

export const getUsers = async () => {
  const response = await apiClient.get("/users");
  return response.data;
};