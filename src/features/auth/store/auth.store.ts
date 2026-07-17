import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoginResponse } from "../types/auth.types";

type AuthState = {
  user: LoginResponse | null;
  token: string | null;

  login: (data: LoginResponse) => void;
  logout: () => void;

  isAuthenticated: boolean;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      isAuthenticated: false,

      login: (data) =>
        set({
          user: data,
          token: data.accessToken,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "workhub-auth",
    }
  )
);