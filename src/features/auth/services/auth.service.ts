import { apiClient } from "../../../api";
import { LoginRequest, LoginResponse } from "../types/auth.types";

export const login = async (
  payload: LoginRequest
): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>(
    "/auth/login",
    payload
  );

  return response.data;
};

// Get complete user details (includes role)
export const getUserById = async (id: number) => {
  const response = await apiClient.get(`/users/${id}`);

  return response.data;
};