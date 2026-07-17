import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

import { useAuthStore } from "../../features/auth/store/auth.store";
import { useAuthorization } from "../../hooks/useAuthorization";
import { Permission } from "../../constants/permissions";

type ProtectedRouteProps = {
  children: ReactNode;
  permission?: Permission;
};

function ProtectedRoute({
  children,
  permission,
}: ProtectedRouteProps) {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const { can } = useAuthorization();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (permission && !can(permission)) {
    return <Navigate to="/forbidden" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;