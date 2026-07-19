import { z } from "zod";

export const workItemSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),

  assignee: z
    .string()
    .min(2, "Assignee is required"),

  status: z.enum([
    "Pending",
    "In Progress",
    "Completed",
  ]),

  priority: z.enum([
    "Low",
    "Medium",
    "High",
  ]),
});

export type WorkItemFormData = z.infer<
  typeof workItemSchema
>;