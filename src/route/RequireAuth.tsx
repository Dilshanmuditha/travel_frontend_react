import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/store";

// Define props type
interface RequireAuthProps {
  allowedRoles: string;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ allowedRoles }) => {
  const userData = useAppSelector((state: any) => state.user);
  const location = useLocation();

  const hasAllowedRole = userData?.role && allowedRoles.includes(userData.role);
  console.log("hasAllowedRole",hasAllowedRole);

  return hasAllowedRole ? (
    <Outlet />
  ) : userData?.role ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
