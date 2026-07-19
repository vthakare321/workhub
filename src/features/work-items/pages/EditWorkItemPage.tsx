import { useNavigate, useParams } from "react-router-dom";

import {
  BackButton,
  ErrorState,
  Skeleton,
} from "../../../components/common";

import WorkItemForm from "../components/WorkItemForm";
import { useWorkItemDetail } from "../hooks/useWorkItemDetail";
import { useUpdateWorkItem } from "../hooks/useUpdateWorkItem";
import type { WorkItemFormData } from "../schemas/work-item.schema";

function EditWorkItemPage() {
  const { workItemId } = useParams();
  const navigate = useNavigate();

  const id = Number(workItemId);

  const {
    data: workItem,
    isLoading,
    error,
  } = useWorkItemDetail(id);

  const updateMutation = useUpdateWorkItem();

  if (isLoading) {
    return <Skeleton className="h-64 w-full" />;
  }

  if (error || !workItem) {
    return (
      <ErrorState
        title="Work Item Not Found"
        description="Unable to load work item."
      />
    );
  }

  const handleSubmit = async (
    data: WorkItemFormData
  ) => {
    await updateMutation.mutateAsync({
      ...workItem,
      ...data,
    });

    navigate("/work-items");
  };

  return (
    <div className="space-y-6">
      <BackButton />

      <WorkItemForm
        mode="edit"
        defaultValues={workItem}
        onSubmit={handleSubmit}
        isLoading={updateMutation.isPending}
      />
    </div>
  );
}

export default EditWorkItemPage;