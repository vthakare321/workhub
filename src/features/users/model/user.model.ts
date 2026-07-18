// import {UserRole} from "../../auth/types/auth.types"
export interface UserModel {
  id: number;

  firstName: string;
  lastName: string;


  fullName: string;

  email: string;

  username: string;

  age: number;

  gender: string;

  role: "admin" | "moderator" | "user";

  image: string;
}