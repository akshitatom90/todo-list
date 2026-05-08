import { useRoutes, Navigate } from "react-router";
import Login from "../pages/Login";
import TodoPage from "../pages/Todo";
import ProtectedRoute from "../components/ProtectedRoute";
import SignUp from "../pages/SignUp";

function AppRoutes() {
  const publicRoutes = [
    {
      path: "/login",
      element:  <Login />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
  ];

  const protectedRoutes = [
    {
      element: <ProtectedRoute />,
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