import { WorkItemModel } from "../model/work-item.model";

const STORAGE_KEY = "local_work_items";

export const getLocalWorkItems = (): WorkItemModel[] => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data) as WorkItemModel[];
};

export const saveLocalWorkItems = (
  items: WorkItemModel[]
): void => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(items)
  );
};