import { useParams } from "react-router-dom";
import {
  BackButton,
  Card,
  ErrorState,
  Skeleton,
} from "../../../components/common";
import { useWorkItemDetail } from "../hooks/useWorkItemDetail";

function WorkItemDetailsPage() {
  const { workItemId } = useParams();

  const id = Number(workItemId);

  const {
    data: workItem,
    isLoading,
    error,
  } = useWorkItemDetail(id);

  if (isLoading) {
    return (
      <Skeleton className="h-64 w-full" />
    );
  }

  if (error || !workItem) {
    return (
      <ErrorState
        title="Work Item Not Found"
        description="The requested work item could not be found."
      />
    );
  }

  return (
    <div className="space-y-6">
      <BackButton />

      <Card title="Work Item Details">
        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <h3 className="text-sm text-gray-500">
              Title
            </h3>
            <p className="font-medium">
              {workItem.title}
            </p>
          </div>

          <div>
            <h3 className="text-sm text-gray-500">
              Assignee
            </h3>
            <p>{workItem.assignee}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-500">
              Status
            </h3>
            <p>{workItem.status}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-500">
              Priority
            </h3>
            <p>{workItem.priority}</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm text-gray-500">
              Description
            </h3>
            <p>
              {workItem.description || "-"}
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm text-gray-500">
              Created At
            </h3>
            <p>
              {workItem.createdAt
                ? new Date(
                    workItem.createdAt
                  ).toLocaleString()
                : "-"}
            </p>
          </div>

        </div>
      </Card>
    </div>
  );
}

export default WorkItemDetailsPage;