import { Link } from "react-router-dom";
import Button from "../../../components/common/Button/Button";
interface UserToolbarProps {
  search: string;
  role: string;
  sortBy: string;
  order: string;

  onSearchChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onSortByChange: (value: string) => void;
  onOrderChange: (value: string) => void;
}

function UserToolbar({
  search,
  role,
  sortBy,
  order,
  onSearchChange,
  onRoleChange,
  onSortByChange,
  onOrderChange,
}: UserToolbarProps) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-4">

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="rounded border px-3 py-2"
      />

      <select
        value={role}
        onChange={(e) => onRoleChange(e.target.value)}
        className="rounded border px-3 py-2"
      >
        <option value="">All Roles</option>
        <option value="admin">Administrator</option>
        <option value="moderator">Manager</option>
        <option value="user">Contributor</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => onSortByChange(e.target.value)}
        className="rounded border px-3 py-2"
      >
        <option value="firstName">Name</option>
        <option value="age">Age</option>
      </select>

      <select
        value={order}
        onChange={(e) => onOrderChange(e.target.value)}
        className="rounded border px-3 py-2"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <Link to="/users/new">
  <Button>Create User</Button>
     </Link>

    </div>
  );
}

export default UserToolbar;