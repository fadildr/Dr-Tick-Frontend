import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(props) {
  const isAuthenticated = localStorage.getItem("token");
  const location = useLocation();
  const role = "Admin";

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (props.isAdmin && role !== "Admin") {
    return <Navigate to="/notfound" state={{ from: location }} replace />;
  }
  return <Outlet />;
}
