import React from "react";
import "./Profile.scss";
import time from "../../assets/Group 2.svg";
import addImage from "../../assets/profile/image.svg";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__subscription">
          <div className="profile__subscription-text">
            <h1 className="profile__subscription-title">PREMIUM Абонемент</h1>
            <p className="profile__subscription-price">3500 ₽</p>
          </div>
          <div className="profile__subscription-time">
            <img src={time} alt="" />
          </div>
        </div>

        <form action="" className="profile__form">
          <h1 className="profile__form-title">Личные данные</h1>
          <div className="profile__form-user">
            <label htmlFor="image" className="profile__form-user-img">
              <img src={addImage} alt="" />
              <input
                id="image"
                type="file"
                accept="image/*"
                className="profile__form-user-img-input"
              />
            </label>
            <div className="profile__form-user-info">
              <input
                type="email"
                placeholder="Почта"
                className="profile__form-user-info-input"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="profile__form-user-info-input"
              />
            </div>
          </div>

          <button className="profile__form-button">Сохранить</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
