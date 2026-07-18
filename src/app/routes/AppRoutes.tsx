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
import ForbiddenPage from "../../features/error/pages/ForbiddenPage"
import { PERMISSIONS } from "../../constants/permissions";

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
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
          <Route
  path="/dashboard"
  element={
    <ProtectedRoute permission={PERMISSIONS.DASHBOARD_VIEW}>
      <DashboardPage />
    </ProtectedRoute>
  }
/>
          {/* <Route path="/users" element={<UsersPage />} /> */}
          <Route
  path="/users"
  element={
    <ProtectedRoute permission={PERMISSIONS.USERS_VIEW}>
      <UsersPage />
    </ProtectedRoute>
  }
/>
          {/* <Route path="/work-items" element={<WorkItemsPage />} /> */}
          <Route
  path="/work-items"
  element={
    <ProtectedRoute permission={PERMISSIONS.WORKITEMS_VIEW}>
      <WorkItemsPage />
    </ProtectedRoute>
  }
/>
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          <Route
  path="/profile"
  element={
    <ProtectedRoute permission={PERMISSIONS.PROFILE_VIEW}>
      <ProfilePage />
    </ProtectedRoute>
  }
/>
          {/* <Route path="/settings" element={<SettingsPage />} /> */}
          <Route
  path="/settings"
  element={
    <ProtectedRoute permission={PERMISSIONS.SETTINGS_VIEW}>
      <SettingsPage />
    </ProtectedRoute>
  }
/>
          <Route
    path="/forbidden"
    element={<ForbiddenPage />}
/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;