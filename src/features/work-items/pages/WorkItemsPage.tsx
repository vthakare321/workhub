import { Link } from "react-router-dom";

import {
  EmptyState,
  ErrorState,
  Skeleton,
} from "../../../components/common";

import { useWorkItems } from "../hooks/useWorkItems";
// import WorkItemTable from "../components/WorkItemTable";
import WorkItemTable from "../pages/WorkItemTable"

function WorkItemsPage() {
  const { data, isLoading, error } =
    useWorkItems();

  const workItems = data?.todos ?? [];

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 8 }).map(
          (_, index) => (
            <Skeleton
              key={index}
              className="h-16 w-full"
            />
          )
        )}
      </div>
    );
  }

  if (error) {
    return (
      <ErrorState
        title="Failed to Load Work Items"
        description="Unable to fetch work items."
      />
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Work Items
        </h1>

        <Link
          to="/work-items/new"
          className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          Create Work Item
        </Link>
      </div>

      {workItems.length === 0 ? (
        <EmptyState
          title="No Work Items Found"
          description="Create your first work item."
        />
      ) : (
        <WorkItemTable
          workItems={workItems}
        />
      )}
    </div>
  );
}

export default WorkItemsPage;