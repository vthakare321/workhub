import { UserModel } from "../model/user.model";
import UserRoleBadge from "../components/UserRoleBagde"
import UserActions from "../components/UserActions"
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
  <UserRoleBadge role={user.role} />
</td>

      <td className="px-4 py-3">
        {user.age}
      </td>

      <td className="px-4 py-3 text-center">
  <UserActions userId={user.id} />
</td>

    </tr>
  );
}

export default UserTableRow;