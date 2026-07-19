
import { useMutation } from "@tanstack/react-query";
import { login, getUserById } from "../services/auth.service";
import { LoginFormData } from "../validation/login.schema";
import { LoginResponse } from "../types/auth.types";

export function useLogin() {
  return useMutation<LoginResponse, Error, LoginFormData>({
    mutationFn: async (payload) => {
      // Login API
      const loginResponse = await login(payload);

      // Fetch complete user details
      const user = await getUserById(loginResponse.id);

      // Merge both responses
      return {
        ...loginResponse,  
        role: user.role,
      };
    },
  });
}