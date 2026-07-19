import { useSearchParams } from "react-router-dom";
import type { WorkItemModel } from "../model/work-item.model";
import {
  EmptyState,
  ErrorState,
  Skeleton,

} from "../../../components/common";
import Pagination from "../../../components/common/Pagination/Pagination";
import { useWorkItems } from "../hooks/useWorkItems";
// import WorkItemTable from "../components/WorkItemTable";
import WorkItemToolbar from "../components/WorkItemToolbar";
import WorkItemTable from "./WorkItemTable";
function WorkItemsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const status = searchParams.get("status") ?? "";
  const priority = searchParams.get("priority") ?? "";


  const page = Number(searchParams.get("page") ?? "1");
  const pageSize = 10;


  const { data, isLoading, error } = useWorkItems();

  const workItems = data?.todos ?? [];

  const filteredWorkItems = workItems.filter(
  (item: WorkItemModel) => {
    const matchesSearch =
      item.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.assignee
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      status === "" || item.status === status;

    const matchesPriority =
      priority === "" || item.priority === priority;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority
    );
  }
);

  const totalPages = Math.ceil(
  filteredWorkItems.length / pageSize
);

const paginatedWorkItems = filteredWorkItems.slice(
  (page - 1) * pageSize,
  page * pageSize
);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton
            key={index}
            className="h-16 w-full"
          />
        ))}
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
      <h1 className="mb-6 text-3xl font-bold">
        Work Items
      </h1>

      <WorkItemToolbar
        search={search}
        status={status}
        priority={priority}
        onSearchChange={(value) =>
          setSearchParams({
            search: value,
            status,
            priority,
          })
        }
        onStatusChange={(value) =>
          setSearchParams({
            search,
            status: value,
            priority,
          })
        }
        onPriorityChange={(value) =>
          setSearchParams({
            search,
            status,
            priority: value,
          })
        }
      />

      {filteredWorkItems.length === 0 ? (
        <EmptyState
          title="No Work Items Found"
          description="Try changing your search or filters."
        />
      ) : (
        <WorkItemTable
  workItems={paginatedWorkItems}

  
/>
      )}

      <div className="mt-6">
  <Pagination
    page={page}
    totalPages={totalPages}
    onPrevious={() =>
      setSearchParams({
        page: String(Math.max(page - 1, 1)),
        search,
        status,
        priority,
      })
    }
    onNext={() =>
      setSearchParams({
        page: String(
          Math.min(page + 1, totalPages)
        ),
        search,
        status,
        priority,
      })
    }
  />
</div>
    </div>
  );
}

export default WorkItemsPage;