import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { ClipLoader, PacmanLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location=useLocation()

  if (user) {
    return children;
  }
  if (loading) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex justify-center items-center">
        <PacmanLoader color="#9B177E" size={40}></PacmanLoader>
      </div>
    );
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
