// import { useMutation } from "@tanstack/react-query";
// import { login } from "../services/auth.service";

// export function useLogin() {
//   return useMutation({
//     mutationFn: login,
//   });
// }

import { useMutation } from "@tanstack/react-query";
import { login, getUserById } from "../services/auth.service";

export function useLogin() {
  return useMutation({
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