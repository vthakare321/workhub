import { AxiosError, InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "../features/auth/store/auth.store";

export const requestInterceptor = (
  config: InternalAxiosRequestConfig
) => {
  const token = useAuthStore.getState().user?.accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

export const requestErrorInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};

export const responseInterceptor = (response: any) => {
  return response;
};

export const responseErrorInterceptor = (error: AxiosError) => {
  if (error.response?.status === 401) {
    useAuthStore.getState().logout();
    window.location.href = "/";
  }

  return Promise.reject(error);
};