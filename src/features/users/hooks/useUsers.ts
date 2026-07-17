import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../api/users.api";
import { userKeys } from "../queryKeys";
import { UserModel } from "../model/user.model";
import { mapUserDtoToModel, mapUsersDtoToModel } from "../mapper/user.mapper";

export function useUsers() {
  return useQuery<UserModel[]>({
    queryKey: userKeys.lists(),
    queryFn: async () => {
      const response = await getUsers();

      return mapUsersDtoToModel(response.users);
    },
  });
}