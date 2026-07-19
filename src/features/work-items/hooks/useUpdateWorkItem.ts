import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateWorkItem } from "../services/work-item.service";
import { workItemKeys } from "../queryKey";

export const useUpdateWorkItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateWorkItem,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: workItemKeys.lists(),
      });
    },
  });
};