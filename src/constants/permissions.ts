export const PERMISSIONS = {
  DASHBOARD_VIEW: "dashboard:view",

  USERS_VIEW: "users:view",
  USERS_CREATE: "users:create",
  USERS_EDIT: "users:edit",
  USERS_DELETE: "users:delete",

  WORKITEMS_VIEW: "workitems:view",
  WORKITEMS_CREATE: "workitems:create",
  WORKITEMS_EDIT: "workitems:edit",
  WORKITEMS_DELETE: "workitems:delete",

  PROFILE_VIEW: "profile:view",

  SETTINGS_VIEW: "settings:view",
} as const;

export type Permission =
  (typeof PERMISSIONS)[keyof typeof PERMISSIONS];