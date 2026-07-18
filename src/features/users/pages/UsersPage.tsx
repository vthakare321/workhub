import { useUsers } from "../hooks/useUsers";
// import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import UserTable from "../components/UserTable"
import UserToolbar from "../components/UserToolbar";

function UsersPage() {
  // const [page, setPage] = useState(1);
  // const pageSize = 10;
  const [searchParams, setSearchParams] = useSearchParams();

const page = Number(searchParams.get("page") ?? "1");

const pageSize = Number(searchParams.get("pageSize") ?? "10");
  const params = {
  limit: pageSize,
  skip: (page - 1) * pageSize,
};
  const { data, isLoading, error } = useUsers(params);

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

      <UserToolbar
    search=""
    role=""
    sortBy="firstName"
    order="asc"
    onSearchChange={() => {}}
    onRoleChange={() => {}}
    onSortByChange={() => {}}
    onOrderChange={() => {}}
/>

      {/* <div className="space-y-4">
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
      </div> */}
      <UserTable users={data ?? []} />
      <div className="mt-6 flex items-center gap-3">
      <button
        // onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        onClick={() =>
  setSearchParams({
    page: String(Math.max(page - 1, 1)),
    pageSize: String(pageSize),
  })
}
        disabled={page === 1}
        className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
      >
        Previous
      </button>

      <span>Page {page}</span>

      <button
        // onClick={() => setPage((prev) => prev + 1)}
        onClick={() =>
  setSearchParams({
    page: String(page + 1),
    pageSize: String(pageSize),
  })
}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Next
      </button>
    </div>
    </div>
  );
}

export default UsersPage;