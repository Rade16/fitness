import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__container">
        <Outlet />
      </div>
      <Navigation />
    </div>
  );
};

export default Layout;
