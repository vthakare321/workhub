export const workItemKeys = {
  all: ["work-items"] as const,

  lists: () => [...workItemKeys.all, "list"] as const,

  detail: (id: number) =>
    [...workItemKeys.all, "detail", id] as const,
};