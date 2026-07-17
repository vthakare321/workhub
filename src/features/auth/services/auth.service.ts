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