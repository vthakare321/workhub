import { useQuery } from "@tanstack/react-query";

import { getUserById } from "../api/users.api";
import { userKeys } from "../queryKeys";
import { mapUserDtoToModel } from "../mapper/user.mapper";
import { UserModel } from "../model/user.model";
import { getLocalUserById } from "../services/localUserService";

export function useUserDetail(id: number) {
  return useQuery<UserModel>({
    queryKey: userKeys.detail(id),

    queryFn: async () => {
      // Check localStorage first
      const localUser = getLocalUserById(id);

      if (localUser) {
        return localUser;
      }
      
      const response = await getUserById(id);

      return mapUserDtoToModel(response);
    },

    enabled: !!id,
  });
}