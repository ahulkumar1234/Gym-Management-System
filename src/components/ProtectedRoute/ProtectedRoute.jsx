import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children, allowedFor }) => {
  const location = useLocation();

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const loggedAdmin = JSON.parse(localStorage.getItem("Admin"));

  // ✅ If neither is logged in → go to login
  if (!loggedUser && !loggedAdmin) {
    toast.error("Please login first!");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ Restrict access based on role
  if (allowedFor === "admin" && !loggedAdmin) {
    toast.error("Admins only!");
    return <Navigate to="/" replace />;
  }

  if (allowedFor === "user" && !loggedUser) {
    toast.error("Users only!");
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
