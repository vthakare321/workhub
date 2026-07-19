import { TodoDto } from "../dto/work-item.dto";
import { WorkItemModel } from "../model/work-item.model";

export const mapTodoDtoToWorkItem = (
  todo: TodoDto
): WorkItemModel => ({
  id: todo.id,
  title: todo.todo,
  description: "",
  assignee: `User ${todo.userId}`,
  status: todo.completed ? "Completed" : "Pending",
  priority: "Medium",
  createdAt: "",
});