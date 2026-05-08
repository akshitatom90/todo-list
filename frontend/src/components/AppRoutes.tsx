import { useEffect, useState } from "react";
import { useRoutes, Navigate } from "react-router";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import TodoPage from "../pages/Todo";
import ProtectedRoute from "../components/ProtectedRoute";
import { isLoggedIn } from "../services"; 

function AppRoutes() {
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

  const publicRoutes = [
    {
      path: "/login",
      element: loading ? (
        <div>Loading...</div>
      ) : loggedIn ? (
        <Navigate to="/todos" />
      ) : (
        <Login />
      ),
    },
    {
      path: "/signup",
      element: loading ? (
        <div>Loading...</div>
      ) : loggedIn ? (
        <Navigate to="/todos" />
      ) : (
        <SignUp />
      ),
    },
  ];

  const protectedRoutes = [
    {
      element: loading ? (
        <div>Loading...</div>
      ) : (
        <ProtectedRoute isLoggedIn={loggedIn} />
      ),
      children: [
        {
          path: "/todos",
          element: <TodoPage />,
        },
        {
          path: "/",
          element: <Navigate to="/todos" />,
        },
      ],
    },
  ];

  const routes = useRoutes([...publicRoutes, ...protectedRoutes]);

  return routes;
}

export default AppRoutes;