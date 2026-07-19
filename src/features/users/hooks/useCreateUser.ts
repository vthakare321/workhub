import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addLocalUser } from "../services/localUserService";
import { userKeys } from "../queryKeys";
import { UserModel } from "../model/user.model";

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user: UserModel) => {
      return addLocalUser(user);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKeys.lists(),
      });
    },
  });
}