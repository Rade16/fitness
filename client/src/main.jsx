import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Registration from "./screens/Registration/Registration";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import Layout from "./components/Layout/Layout";
import Workout from "./screens/Workout/Workout";
import Profile from "./screens/Profile/Profile";
import SubscriptionStart from "./screens/subscriptionStart/subscriptionStart";
import SubscriptionMedium from "./screens/subscriptionMedium/subscriptionMedium";
import SubscriptionPremium from "./screens/subscriptionPremium/subscriptionPremium";
import GymPage from "./components/GymPage/GymPage";
import Admin from "./screens/Admin/Admin";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";
import axios from "axios";
const App = () => {
  const { user, setUser } = useAuth();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(
          "http://localhost:5000/api/auth/auth",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log(response.data.user);
        setUser(response.data.user);
      } catch (error) {
        console.error("Ошибка аутентификации:", error);
      }
    };

    fetchUserData();
  }, [setUser]);

  return <RouterProvider router={router} />;
};

import "./sass/main.scss";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user",
    element: <Layout />,
    redirect: "/user/home",
    children: [
      {
        index: true,
        loader: () => redirect("/ads"),
      },
      {
        path: "/user/home",
        element: <Home />,
      },
      {
        path: "/user/workout",
        element: <Workout />,
      },
      {
        path: "/user/profile",
        element: <Profile />,
      },
      {
        path: "/user/subscriptionStart",
        element: <SubscriptionStart />,
      },
      {
        path: "/user/subscriptionMedium",
        element: <SubscriptionMedium />,
      },
      {
        path: "/user/subscriptionPremium",
        element: <SubscriptionPremium />,
      },
      {
        path: "/user/Admin",
        element: <Admin />,
      },
      {
        path: "/user/gym/:id",
        element: <GymPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
