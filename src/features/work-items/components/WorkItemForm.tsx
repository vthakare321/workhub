import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Card, Input, Select } from "../../../components/common";

import {
  workItemSchema,
  WorkItemFormData,
} from "../schemas/work-item.schema";
import { WorkItemModel } from "../model/work-item.model";

// type WorkItemFormProps = {
//   mode: "create" | "edit";
//   defaultValues?: Partial<WorkItemFormData>;
//   onSubmit: (
//     data: WorkItemFormData
//   ) => void | Promise<void>;
// };
type WorkItemFormProps = {
  mode: "create" | "edit";
  defaultValues?: Partial<WorkItemFormData>;
  onSubmit: (
    data: WorkItemFormData
  ) => void | Promise<void>;
  isLoading?: boolean;
};
function WorkItemForm({
  mode,
  defaultValues,
  onSubmit,
  isLoading,
}: WorkItemFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<WorkItemFormData>({
    resolver: zodResolver(workItemSchema),
    defaultValues: {
      title: "",
      description: "",
      assignee: "",
      status: "Pending",
      priority: "Medium",
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset({
        title: defaultValues.title ?? "",
        description: defaultValues.description ?? "",
        assignee: defaultValues.assignee ?? "",
        status: defaultValues.status ?? "Pending",
        priority: defaultValues.priority ?? "Medium",
      });
    }
  }, [defaultValues, reset]);

  return (
    <Card
      title={
        mode === "create"
          ? "Create Work Item"
          : "Edit Work Item"
      }
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2"
      >
        <Input
          id="title"
          label="Title"
          {...register("title")}
          error={errors.title?.message}
        />

        <div>
          <label className="form-label">
            Description
          </label>

          <textarea
            className="form-control"
            rows={4}
            {...register("description")}
          />

          {errors.description && (
            <p className="text-danger small mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <Input
          id="assignee"
          label="Assignee"
          {...register("assignee")}
          error={errors.assignee?.message}
        />

        <Select
          id="status"
          label="Status"
          {...register("status")}
          options={[
            {
              label: "Pending",
              value: "Pending",
            },
            {
              label: "In Progress",
              value: "In Progress",
            },
            {
              label: "Completed",
              value: "Completed",
            },
          ]}
          error={errors.status?.message}
        />

        <Select
          id="priority"
          label="Priority"
          {...register("priority")}
          options={[
            {
              label: "Low",
              value: "Low",
            },
            {
              label: "Medium",
              value: "Medium",
            },
            {
              label: "High",
              value: "High",
            },
          ]}
          error={errors.priority?.message}
        />

        <Button
  type="submit"
  isLoading={isLoading || isSubmitting}
  className="w-full"
>
          {mode === "create"
            ? "Create Work Item"
            : "Update Work Item"}
        </Button>
      </form>
    </Card>
  );
}

export default WorkItemForm;