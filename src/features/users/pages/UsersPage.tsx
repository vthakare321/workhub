import { useUsers } from "../hooks/useUsers";
// import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import UserTable from "../components/UserTable"
import UserToolbar from "../components/UserToolbar";
import Pagination from "../../../components/common/Pagination/Pagination"
// import EmptyState from "../../../components/common/EmptyState/EmptyState"
// import Skeleton from "../../../components/common/Skeleton/Skeleton"
import { ErrorState, Skeleton, EmptyState} from "../../../components/common";
import type { UserQueryParams } from "../types/user-query.types";
function UsersPage() {
  // const [page, setPage] = useState(1);
  // const pageSize = 10;
  const [searchParams, setSearchParams] = useSearchParams();

 const search = searchParams.get("search") ?? "";
const role = searchParams.get("role") ?? "";
const sortBy: UserQueryParams["sortBy"] =
  (searchParams.get("sortBy") as UserQueryParams["sortBy"]) ?? "firstName";

const order: UserQueryParams["order"] =
  (searchParams.get("order") as UserQueryParams["order"]) ?? "asc";

const page = Number(searchParams.get("page") ?? "1");
const pageSize = Number(searchParams.get("pageSize") ?? "10");

const params = {
  limit: pageSize,
  skip: (page - 1) * pageSize,
  sortBy,
  order,
};
  const { data, isLoading, error } = useUsers(params);

  const filteredUsers =
  data?.users.filter((user) => {
    const matchesSearch =
      user.firstName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.lastName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesRole =
      role === "" || user.role === role;

    return matchesSearch && matchesRole;
  }) ?? [];

  const sortedUsers = [...filteredUsers].sort((a, b) => {
  const first = a[sortBy as keyof typeof a];
  const second = b[sortBy as keyof typeof b];

  if (
    typeof first === "string" &&
    typeof second === "string"
  ) {
    return order === "asc"
      ? first.localeCompare(second)
      : second.localeCompare(first);
  }

  if (
    typeof first === "number" &&
    typeof second === "number"
  ) {
    return order === "asc"
      ? first - second
      : second - first;
  }

  return 0;
});

 if (isLoading) {
  return (
    <div className="space-y-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton
          key={index}
          className="h-16 w-full"
        />
      ))}
    </div>
  );
}

  if (error) {
  return (
    <ErrorState
      title="Failed to Load Users"
      description="Unable to fetch users. Please try again."
    />
  );
}

  const totalPages = data
  ? Math.ceil(data.total / pageSize)
  : 1;

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Users
      </h1>

 <UserToolbar
  search={search}
  role={role}
  sortBy={sortBy}
  order={order}
  onSearchChange={(value) =>
    setSearchParams({
      page: "1",
      pageSize: String(pageSize),
      search: value,
      role,
      sortBy,
      order,
    })
  }
  onRoleChange={(value) =>
    setSearchParams({
      page: "1",
      pageSize: String(pageSize),
      search,
      role: value,
      sortBy,
      order,
    })
  }
  onSortByChange={(value) =>
    setSearchParams({
      page: "1",
      pageSize: String(pageSize),
      search,
      role,
      sortBy: value,
      order,
    })
  }
  onOrderChange={(value) =>
    setSearchParams({
      page: "1",
      pageSize: String(pageSize),
      search,
      role,
      sortBy,
      order: value,
    })
  }
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
      {/* <UserTable users={data ?? []} /> */}
      {/* <UserTable users={filteredUsers} /> */}
      {/* <UserTable users={sortedUsers} /> */}
      {sortedUsers.length === 0 ? (
  <EmptyState
    title="No Users Found"
    description="Try changing your search or filter."
  />
) : (
  <UserTable users={sortedUsers} />
)}
      <div className="mt-6 flex items-center gap-3">

      <Pagination
  page={page}
  totalPages={totalPages}
  onPrevious={() =>
    setSearchParams({
      page: String(Math.max(page - 1, 1)),
      pageSize: String(pageSize),
    })
  }
  onNext={() =>
    setSearchParams({
      page: String(page + 1),
      pageSize: String(pageSize),
    })
  }
/>
    </div>
    </div>
  );
}

export default UsersPage;