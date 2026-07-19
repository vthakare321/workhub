export interface WorkItemModel {
  id: number;
  title: string;
  description: string;
  assignee: string;
  status: "Pending" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  createdAt: string;
}