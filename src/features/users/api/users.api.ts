import { apiClient } from "../../../api";
import { UsersResponseDTO } from "../dto/user-response.dto";
import { UserQueryParams } from "../types/user-query.types";

// export async function getUsers(): Promise<UsersResponseDTO> {
//   const response = await apiClient.get<UsersResponseDTO>("/users");

//   return response.data;
// }
export const getUsers = async (
  params: UserQueryParams
) => {
  const response = await apiClient.get("/users", {
    params: {
      limit: params.limit,
      skip: params.skip,
      sortBy: params.sortBy,
      order: params.order,
    },
  });

  return response.data;
};

export const getUserById = async (id: number) => {
  const response = await apiClient.get(`/users/${id}`);
  return response.data;
};