import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

function GuestRoute({ children }: {children: JSX.Element}) {
  const auth = useAuth();
  const {search} = useLocation();
  const url = new URLSearchParams(search.slice(1));

  return auth.user ? <Navigate to={url.get("redirect") || "/"} /> : children;
}

export default GuestRoute;
