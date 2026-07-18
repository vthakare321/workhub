import { UserModel } from "../model/user.model";
import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";


interface UserTableProps {
  users: UserModel[];
}

function UserTable({
  users,
}: UserTableProps) {
  return (  
    <div className="overflow-x-auto rounded-lg border bg-white shadow">

      <table className="min-w-full">

        <UserTableHeader />

        <tbody>

          {users.map((user) => (
            <UserTableRow
              key={user.id}
              user={user}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default UserTable;