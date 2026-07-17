import axios from "axios";
import { API_CONFIG } from "./config";

import {
  requestInterceptor,
  requestErrorInterceptor,
  responseInterceptor,
  responseErrorInterceptor,
} from "./interceptors";

const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  requestInterceptor,
  requestErrorInterceptor
);

apiClient.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
);

export default apiClient;