import { UserModel } from "./user.model";

export interface PaginatedUsersModel {
  users: UserModel[];
  total: number;
  skip: number;
  limit: number;
}