import apiClient from "../../../api/client";
import { WorkItemModel } from "../model/work-item.model";
import { TodoDto } from "../dto/work-item.dto";
import { mapTodoDtoToWorkItem } from "../mapper/work-item.mapper";
import {
  getLocalWorkItems,
  saveLocalWorkItems,
} from "./localWorkItemService";
export const getWorkItems = async () => {
  const response = await apiClient.get("/todos");

  const apiItems = response.data.todos.map((todo: any) => ({
    id: todo.id,
    title: todo.todo,
    description: "",
    assignee: `User ${todo.userId}`,
    status: todo.completed ? "Completed" : "Pending",
    priority: "Medium",
    createdAt: "",
  }));

  const localItems = getLocalWorkItems();

  return {
    ...response.data,
    todos: [...localItems, ...apiItems],
  };
};

export const getWorkItemById = async (
  id: number
): Promise<WorkItemModel | undefined> => {
  // Check localStorage first
  const localItems = getLocalWorkItems();

  const localItem = localItems.find(
    (item) => item.id === id
  );

  if (localItem) {
    return localItem;
  }

  // If not found locally, fetch from API
  try {
    const response = await apiClient.get<TodoDto>(`/todos/${id}`);

    return mapTodoDtoToWorkItem(response.data);
  } catch {
    return undefined;
  }
};
export const createWorkItem = async (
  workItem: WorkItemModel
): Promise<WorkItemModel> => {
  const items = getLocalWorkItems();

  const newItem = {
    ...workItem,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  };

  items.push(newItem);
  saveLocalWorkItems(items);

  return newItem;
};

export const updateWorkItem = async (
  workItem: WorkItemModel
): Promise<WorkItemModel> => {
  const items = getLocalWorkItems();

  const updatedItems = items.map((item: WorkItemModel) =>
    item.id === workItem.id ? workItem : item
  );

  saveLocalWorkItems(updatedItems);

  return workItem;
};

export const deleteWorkItem = async (id: number): Promise<void> => {
  const items = getLocalWorkItems();

  saveLocalWorkItems(
    items.filter((item: WorkItemModel) => item.id !== id)
  );
};

