import { Permission } from "../constants/permissions";
import { ROLE_PERMISSIONS } from "../constants/rolePermissions";
import { ROLES } from "../constants/roles";
import { useAuthStore } from "../features/auth/store/auth.store";

export function useAuthorization() {
  const user = useAuthStore((state) => state.user);

  const role = user?.role ?? ROLES.CONTRIBUTOR;

  const permissions = ROLE_PERMISSIONS[role];

  const can = (permission: Permission) => {
    return permissions.includes(permission);
  };

  return {
    role,
    permissions,
    can,
  };
}