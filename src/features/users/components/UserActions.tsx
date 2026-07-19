import { Link } from "react-router-dom";
import { useAuthStore } from "../../auth/store/auth.store";
import {useAuthorization} from "../../../hooks/useAuthorization"
import { PERMISSIONS } from "../../../constants/permissions";
import { useDeleteUser } from "../hooks/useDeleteUser";


interface UserActionsProps {
  userId: number;
}

function UserActions({ userId }: UserActionsProps) {
  const { can } = useAuthorization();

  const deleteUser = useDeleteUser();

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) {
      return;
    }

    await deleteUser.mutateAsync(userId);

    alert("User deleted successfully.");
  };


  return (
    <div className="flex items-center justify-center gap-2">
      {can(PERMISSIONS.USERS_VIEW) && (
        <Link
         to={`/users/${userId}`}
          className="rounded bg-blue-500 px-3 py-1 text-sm text-white"
        >
          View
        </Link>
      )}

      {can(PERMISSIONS.USERS_EDIT) && (
        <Link
          to={`/users/${userId}/edit`}
          className="rounded bg-yellow-500 px-3 py-1 text-sm text-white"
        >
          Edit
        </Link>
      )}

      {can(PERMISSIONS.USERS_DELETE) && (
        <button
          onClick={handleDelete}
          disabled={deleteUser.isPending}
          className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600 disabled:opacity-50"
        >
          {deleteUser.isPending ? "Deleting..." : "Delete"}
        </button>
      )}
    </div>
  );
}

export default UserActions;