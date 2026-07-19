import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteWorkItem } from "../services/work-item.service";
import { workItemKeys } from "../queryKey";

export const useDeleteWorkItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteWorkItem,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: workItemKeys.lists(),
      });
    },
  });
};