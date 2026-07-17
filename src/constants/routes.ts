import { PERMISSIONS } from "./permissions";

export const APP_ROUTES = [
  {
    label: "Dashboard",
    path: "/dashboard",
    permission: PERMISSIONS.DASHBOARD_VIEW,
  },
  {
    label: "Users",
    path: "/users",
    permission: PERMISSIONS.USERS_VIEW,
  },
  {
    label: "Work Items",
    path: "/work-items",
    permission: PERMISSIONS.WORKITEMS_VIEW,
  },
  {
    label: "Profile",
    path: "/profile",
    permission: PERMISSIONS.PROFILE_VIEW,
  },
  {
    label: "Settings",
    path: "/settings",
    permission: PERMISSIONS.SETTINGS_VIEW,
  },
] as const;