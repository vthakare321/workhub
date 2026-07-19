import { useQuery } from "@tanstack/react-query";
import { getWorkItems } from "../services/work-item.service";
import { workItemKeys } from "../queryKey";

export const useWorkItems = () => {
  return useQuery({
    queryKey: workItemKeys.lists(),
    queryFn: getWorkItems,
  });
};