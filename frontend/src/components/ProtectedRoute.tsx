import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../services";

function ProtectedRoute() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function check() {
      try {
        const res = await isLoggedIn(); // ✅ fixed name
        setLoggedIn(res.isLoggedIn);
      } catch (err) {
        setLoggedIn(false);
      }
      setLoading(false);
    }
    check();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;