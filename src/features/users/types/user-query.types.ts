export interface UserQueryParams {
  search?: string;
  role?: string;
  sortBy?: "firstName" | "age";
  order?: "asc" | "desc";
  limit: number;
  skip: number;
}