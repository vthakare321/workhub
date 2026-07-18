import { UserModel } from "../model/user.model";

interface UserTableRowProps {
  user: UserModel;
}

function UserTableRow({
  user,
}: UserTableRowProps) {
  return (
    <tr className="border-t hover:bg-gray-50">

      <td className="px-4 py-3">
        <img
          src={user.image}
          alt={user.fullName}
          className="h-10 w-10 rounded-full"
        />
      </td>

      <td className="px-4 py-3">
        {user.fullName}
      </td>

      <td className="px-4 py-3">
        {user.email}
      </td>

      <td className="px-4 py-3">
        {user.role}
      </td>

      <td className="px-4 py-3">
        {user.age}
      </td>

      <td className="px-4 py-3 text-center">

        <button className="rounded bg-blue-500 px-3 py-1 text-sm text-white">
          View
        </button>

      </td>

    </tr>
  );
}

export default UserTableRow;