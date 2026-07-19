import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateLocalUser } from "../services/localUserService";
import { userKeys } from "../queryKeys";
import { UserModel } from "../model/user.model";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user: UserModel) => {
      updateLocalUser(user);
      return user;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKeys.lists(),
      });
    },
  });
}