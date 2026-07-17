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
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/work-items" element={<WorkItemsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
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