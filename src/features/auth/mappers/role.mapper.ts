import { ROLES, UserRole } from "../../../constants/roles";

export function mapRole(dummyRole: string): UserRole {
  switch (dummyRole) {
    case "admin":
      return ROLES.ADMIN;

    case "moderator":
      return ROLES.MANAGER;

    default:
      return ROLES.CONTRIBUTOR;
  }
}