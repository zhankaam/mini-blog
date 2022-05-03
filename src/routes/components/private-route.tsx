import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

function PrivateRoute({ children }: {children: JSX.Element}) {
  const auth = useAuth();
  const location = useLocation();
  const url = new URLSearchParams();
  url.set("redirect", location.pathname + location.search);

  return auth.user ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/login",
        search: url.toString(),
      }}
    />
  );
}

export default PrivateRoute;
