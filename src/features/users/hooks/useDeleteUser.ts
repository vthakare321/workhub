import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteLocalUser } from "../services/localUserService";
import { userKeys } from "../queryKeys";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      deleteLocalUser(id);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKeys.lists(),
      });
    },
  });
}