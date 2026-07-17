import { UserResponseDTO } from "../dto/user-response.dto";
import { UserModel } from "../model/user.model";
export function mapUserDtoToModel(
  dto: UserResponseDTO
): UserModel {
  return {
    id: dto.id,
    fullName: `${dto.firstName} ${dto.lastName}`,
    email: dto.email,
    username: dto.username,
    age: dto.age,
    gender: dto.gender,
    role: dto.role,
    image: dto.image,
  };
}

export function mapUsersDtoToModel(
  users: UserResponseDTO[]
): UserModel[] {
  return users.map(mapUserDtoToModel);
}