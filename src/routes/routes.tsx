import { createHashRouter } from "react-router-dom";
import LandingPage from "../modules/home/LandingPage";
import Register from "../modules/auth/views/Register";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../modules/auth/views/Login";
import Dashboard from "../modules/dashboard/views/Dashboard";

const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "register-client",
    element: <Register userType="passanger" />,
  },
  {
    path: "register-driver",
    element: <Register userType="driver" />,
  },
  {
    path: "login",
    element: <Login title="Login" />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);
export default router;
