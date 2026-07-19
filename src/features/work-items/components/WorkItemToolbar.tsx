import { Link } from "react-router-dom";
import { Button } from "../../../components/common";

interface WorkItemToolbarProps {
  search: string;
  status: string;
  priority: string;

  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
}

function WorkItemToolbar({
  search,
  status,
  priority,
  onSearchChange,
  onStatusChange,
  onPriorityChange,
}: WorkItemToolbarProps) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-4">
      <input
        type="text"
        placeholder="Search work items..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="rounded border px-3 py-2"
      />

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="rounded border px-3 py-2"
      >
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={priority}
        onChange={(e) => onPriorityChange(e.target.value)}
        className="rounded border px-3 py-2"
      >
        <option value="">All Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <Link to="/work-items/new">
        <Button>Create Work Item</Button>
      </Link>
    </div>
  );
}

export default WorkItemToolbar;