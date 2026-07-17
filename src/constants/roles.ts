export const ROLES = {
  ADMIN: "admin",
  MANAGER: "moderator",
  CONTRIBUTOR: "user",
} as const;

export type UserRole = (typeof ROLES)[keyof typeof ROLES];