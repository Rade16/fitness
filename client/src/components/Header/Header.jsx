import React from "react";
import "./Header.scss";
import avatar from "../../assets/header/avatar.png";
import { useAuth } from "../../context/AuthContext";
const Header = () => {
  const { user } = useAuth();
  if (!user) return <p>Загрузка...</p>;
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__user">
          <img
            src={`http://localhost:5000${user.avatar}`}
            alt=""
            className="header__user-img"
          />
          <div className="header__user-info">
            <p className="header__user-info-welcome">С возвращением</p>
            <p className="header__user-info-name">{user.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
