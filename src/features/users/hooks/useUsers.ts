// import { useQuery } from "@tanstack/react-query";

// import { getUsers } from "../api/users.api";
// import { userKeys } from "../queryKeys";
// import { UserModel } from "../model/user.model";
// import { mapUserDtoToModel, mapUsersDtoToModel } from "../mapper/user.mapper";

// export function useUsers() {
//   return useQuery<UserModel[]>({
//     queryKey: userKeys.lists(),
//     queryFn: async () => {
//       const response = await getUsers();

//       return mapUsersDtoToModel(response.users);
//     },
//   });
// }

import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../api/users.api";
import { userKeys } from "../queryKeys";
import { UserModel } from "../model/user.model";
import { mapUsersDtoToModel } from "../mapper/user.mapper";
import { UserQueryParams } from "../types/user-query.types";
import {PaginatedUsersModel} from "../model/paginated-users.model"
export function useUsers(params: UserQueryParams) {
  return useQuery<PaginatedUsersModel>({
    queryKey: userKeys.list(params),

    queryFn: async () => {
      const response = await getUsers(params);

      // return mapUsersDtoToModel(response.users);
      return {
  users: mapUsersDtoToModel(response.users),
  total: response.total,
  skip: response.skip,
  limit: response.limit,
};
    },
  });
}