import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../../features/auth/pages/LoginPage";
import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import UsersPage from "../../features/users/pages/UsersPage";
import WorkItemsPage from "../../features/work-items/pages/WorkItemsPage";
import ProfilePage from "../../features/profile/pages/ProfilePage";
import SettingsPage from "../../features/settings/pages/SettingsPage";

import ProtectedRoute from "./ProtectedRoute";
// import AppLayout from "../../layouts/AppLayout";
import AppLayout from "../../components/layout/AppLayout";
import ForbiddenPage from "../../features/error/pages/ForbiddenPage";
import { PERMISSIONS } from "../../constants/permissions";
import UserDetailsPage from "../../features/users/pages/UserDetailsPage";
import EditUserPage from "../../features/users/pages/EditUserPage";
import CreateUserPage from "../../features/users/pages/CreateUserPage"
import CreateWorkItemPage from "../../features/work-items/pages/CreateWorkItemPage";
import WorkItemDetailsPage from "../../features/work-items/pages/WorkItemDetailsPage";
import EditWorkItemPage from "../../features/work-items/pages/EditWorkItemPage";

function AppRoutes() {
  return (
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<LoginPage />} />

    <Route
      element={
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      }
    >
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute permission={PERMISSIONS.DASHBOARD_VIEW}>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users"
        element={
          <ProtectedRoute permission={PERMISSIONS.USERS_VIEW}>
            <UsersPage />
          </ProtectedRoute>
        }
      />

      {/* 👇 MOVE THESE INSIDE */}
      <Route
        path="/users/new"
        element={
          <ProtectedRoute permission={PERMISSIONS.USERS_CREATE}>
            <CreateUserPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users/:userId"
        element={
          <ProtectedRoute permission={PERMISSIONS.USERS_VIEW}>
            <UserDetailsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users/:userId/edit"
        element={
          <ProtectedRoute permission={PERMISSIONS.USERS_EDIT}>
            <EditUserPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/work-items"
        element={
          <ProtectedRoute permission={PERMISSIONS.WORKITEMS_VIEW}>
            <WorkItemsPage />
          </ProtectedRoute>
        }
      />

      <Route
  path="/work-items/new"
  element={
    <ProtectedRoute permission={PERMISSIONS.WORKITEMS_CREATE}>
      <CreateWorkItemPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/work-items/:workItemId"
  element={
    <ProtectedRoute permission={PERMISSIONS.WORKITEMS_VIEW}>
      <WorkItemDetailsPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/work-items/:workItemId/edit"
  element={
    <ProtectedRoute permission={PERMISSIONS.WORKITEMS_EDIT}>
      <EditWorkItemPage />
    </ProtectedRoute>
  }
/>

      <Route
        path="/profile"
        element={
          <ProtectedRoute permission={PERMISSIONS.PROFILE_VIEW}>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute permission={PERMISSIONS.SETTINGS_VIEW}>
            <SettingsPage />
          </ProtectedRoute>
        }
      />

      <Route path="/forbidden" element={<ForbiddenPage />} />
    </Route>
  </Routes>
</BrowserRouter>
  );
}

export default AppRoutes;
