import React from "react";
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
