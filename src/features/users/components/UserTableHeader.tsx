interface UserTableHeaderProps {
  onSort?: (field: string) => void;
}

function UserTableHeader({ onSort }: UserTableHeaderProps) {
  return (
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-3 text-left">Avatar</th>

        <th
          className="cursor-pointer px-4 py-3 text-left"
          onClick={() => onSort?.("firstName")}
        >
          Name
        </th>

        <th className="px-4 py-3 text-left">
          Email
        </th>

        <th className="px-4 py-3 text-left">
          Role
        </th>

        <th
          className="cursor-pointer px-4 py-3 text-left"
          onClick={() => onSort?.("age")}
        >
          Age
        </th>

        <th className="px-4 py-3 text-center">
          Actions
        </th>
      </tr>
    </thead>
  );
}

export default UserTableHeader;