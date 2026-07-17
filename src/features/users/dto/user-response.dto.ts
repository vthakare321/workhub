export interface UserResponseDTO {
  id: number;

  firstName: string;

  lastName: string;

  maddleName: string;

  age: number;

  gender: string;

  email: string;

  phone: string;

  username: string;

  image: string;

  role: string;
}

export interface UsersResponseDTO {
  users: UserResponseDTO[];

  total: number;

  skip: number;

  limit: number;
}