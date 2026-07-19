import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createWorkItem } from "../services/work-item.service";
import {workItemKeys} from "../queryKey"

export const useCreateWorkItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createWorkItem,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: workItemKeys.lists(),
      });
    },
  });
};