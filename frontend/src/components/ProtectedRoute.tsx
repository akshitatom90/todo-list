import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;