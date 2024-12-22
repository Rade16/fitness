import React from "react";
import "./Navigation.scss";

import home from "../../assets/navigation/home.svg";
import workout from "../../assets/navigation/workout.svg";
import profile from "../../assets/navigation/profile.svg";

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const Navigation = () => {
  const { user } = useAuth();
  if (!user) return <p>Загрузка...</p>;
  return (
    <div className="navigation">
      <Link to={"/user/home"}>
        <div className="navigation__link">
          <img src={home} alt="" className="navigation__link-img" />
          <p className="navigation__link-text">Главная</p>
        </div>
      </Link>
      <Link to={"/user/workout"}>
        <div className="navigation__link">
          <img src={workout} alt="" className="navigation__link-img" />
          <p className="navigation__link-text">Занятия</p>
        </div>
      </Link>
      <Link to={"/user/profile"}>
        <div className="navigation__link">
          <img src={profile} alt="" className="navigation__link-img" />
          <p className="navigation__link-text">Профиль</p>
        </div>
      </Link>
      {user.role === "admin" && (
        <Link to={"/user/admin"}>
          <div className="navigation__link">
            <img src={profile} alt="" className="navigation__link-img" />
            <p className="navigation__link-text">Админ</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Navigation;
