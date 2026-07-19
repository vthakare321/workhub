import { Link } from "react-router-dom";
import { Button } from "../../../components/common/index";
import { WorkItemModel } from "../model/work-item.model";
import { useDeleteWorkItem } from "../hooks/useDeleteWorkItem";
type WorkItemTableProps = {
  workItems: WorkItemModel[];
};

function WorkItemTable({ workItems }: WorkItemTableProps) {
  const deleteMutation = useDeleteWorkItem();

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              ID
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Title
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Assignee
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Status
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Priority
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Created
            </th>

            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {workItems.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm">{item.id}</td>

              <td className="px-4 py-3 text-sm font-medium">{item.title}</td>

              <td className="px-4 py-3 text-sm">{item.assignee || "-"}</td>

              <td className="px-4 py-3">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                    item.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : item.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="px-4 py-3">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                    item.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : item.priority === "Medium"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {item.priority}
                </span>
              </td>

              <td className="px-4 py-3 text-sm">
                {item.createdAt
                  ? new Date(item.createdAt).toLocaleDateString()
                  : "-"}
              </td>

              <td className="px-4 py-3">
                <div className="flex justify-center gap-2">
                  <Link
                    to={`/work-items/${item.id}`}
                    className="rounded-md bg-sky-600 px-3 py-1 text-sm text-white transition hover:bg-sky-700"
                  >
                    View
                  </Link>

                  <Link
                    to={`/work-items/${item.id}/edit`}
                    className="rounded-md bg-amber-500 px-3 py-1 text-sm text-white transition hover:bg-amber-600"
                  >
                    Edit
                  </Link>

                  <Button
                    type="button"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this work item?",
                        )
                      ) {
                        deleteMutation.mutate(item.id);
                      }
                    }}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkItemTable;
