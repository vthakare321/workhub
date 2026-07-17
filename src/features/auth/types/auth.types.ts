// export interface LoginRequest {
//   username: string;
//   password: string;
// }

// export interface LoginResponse {
//   accessToken: string;
//   refreshToken: string;
//   id: number;
//   username: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   image: string;
// }

import { UserRole } from "../../../constants/roles";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;

  accessToken: string;
  refreshToken: string;

  role: UserRole;
}