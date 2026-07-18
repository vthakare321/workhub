interface UserRoleBadgeProps {
  role: string;
}

function UserRoleBadge({ role }: UserRoleBadgeProps) {
  const badgeStyles: Record<string, string> = {
    admin: "bg-red-100 text-red-700",
    moderator: "bg-yellow-100 text-yellow-700",
    user: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        badgeStyles[role] ?? "bg-gray-100 text-gray-700"
      }`}
    >
      {role}
    </span>
  );
}

export default UserRoleBadge;