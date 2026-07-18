import { UserModel } from "../model/user.model";

interface UserTableProps {
  users: UserModel[];
}

function UserTable({ users }: UserTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left">Avatar</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Role</th>
            <th className="px-4 py-3 text-left">Age</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t"
            >
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

              <td className="px-4 py-3">
                View
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;