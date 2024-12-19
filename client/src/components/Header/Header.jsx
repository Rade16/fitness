import React from "react";
import "./Header.scss";
import avatar from "../../assets/header/avatar.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__user">
          <img src={avatar} alt="" className="header__user-img" />
          <div className="header__user-info">
            <p className="header__user-info-welcome">С возвращением</p>
            <p className="header__user-info-name">Дуэйн Джонсон</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
