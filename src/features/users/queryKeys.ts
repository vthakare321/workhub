export const userKeys = {
  all: ["users"] as const,

  lists: () => [...userKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...userKeys.lists(), page, limit] as const,

  details: () => [...userKeys.all, "detail"] as const,

  detail: (id: number) =>
    [...userKeys.details(), id] as const,
};