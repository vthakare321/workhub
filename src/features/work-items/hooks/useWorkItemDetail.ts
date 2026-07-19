import { useQuery } from "@tanstack/react-query";
import { getWorkItemById } from "../services/work-item.service";
import { workItemKeys } from "../queryKey";

export const useWorkItemDetail = (id: number) => {
  return useQuery({
    queryKey: workItemKeys.detail(id),
    queryFn: () => getWorkItemById(id),
    enabled: id > 0,
  });
};