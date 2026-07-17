import { useUsers } from "../hooks/useUsers";

function UsersPage() {
  const { data, isLoading, error } = useUsers();

  if (isLoading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2>Something went wrong.</h2>;
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Users
      </h1>

      <div className="space-y-4">
        {data?.map((user) => (
          <div
            key={user.id}
            className="rounded-lg border bg-white p-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold">
              {user.fullName}
            </h2>

            <p>{user.email}</p>

            <p>{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersPage;