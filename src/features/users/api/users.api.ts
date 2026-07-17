import { apiClient } from "../../../api";
import { UsersResponseDTO } from "../dto/user-response.dto";

export async function getUsers(): Promise<UsersResponseDTO> {
  const response = await apiClient.get<UsersResponseDTO>("/users");

  return response.data;
}