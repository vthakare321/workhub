import { useNavigate } from "react-router-dom";

import WorkItemForm from "../components/WorkItemForm";
import {
  WorkItemFormData,
} from "../schemas/work-item.schema";
import { useCreateWorkItem } from "../hooks/useCreateWorkItem";
import { WorkItemModel } from "../model/work-item.model";

function CreateWorkItemPage() {
  const navigate = useNavigate();

  const { mutateAsync } = useCreateWorkItem();

  const handleSubmit = async (
    data: WorkItemFormData
  ) => {
    const workItem: WorkItemModel = {
      id: 0,
      title: data.title,
      description: data.description,
      assignee: data.assignee,
      status: data.status,
      priority: data.priority,
      createdAt: "",
    };

    await mutateAsync(workItem);

    navigate("/work-items");
  };

  return (
    <WorkItemForm
      mode="create"
      onSubmit={handleSubmit}
    />
  );
}

export default CreateWorkItemPage;