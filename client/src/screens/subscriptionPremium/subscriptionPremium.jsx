import React from "react";
import "./subscriptionPremium.scss";
import circle from "../../assets/subsctiptions/circleBlue.svg";
const subscriptionPremium = () => {
  return (
    <div className="subscriptionPremium">
      <div className="subscriptionPremium__container">
        <div className="subscriptionPremium__subscription-card">
          <div className="subscriptionPremium__subscription-card-text">
            <h1 className="subscriptionPremium__subscription-card-title">
              PREMIUM Тариф
            </h1>
            <p className="subscriptionPremium__subscription-card-price">
              5000 ₽
            </p>
          </div>
        </div>
      </div>
      <div className="subscriptionPremium__main">
        <div className="subscriptionPremium__main-container">
          <h2 className="subscriptionPremium__main-title">Описание:</h2>
          <p className="subscriptionPremium__main-text">
            Тариф MEDIUM предназначен для тех, кто уже хорошо знаком с фитнесом
            и ищет более разнообразный и комфортный опыт тренировок.
          </p>
          <h2 className="subscriptionPremium__main-title">
            Что входит в абонемент?
          </h2>
          <ul className="subscriptionPremium__main-list">
            <li className="subscriptionPremium__main-list-item">
              <img src={circle} alt="" />
              Безлимитный доступ во все клубы сети
            </li>
            <li className="subscriptionPremium__main-list-item">
              <img src={circle} alt="" />
              Тренажерный зал
            </li>
            <li className="subscriptionPremium__main-list-item">
              <img src={circle} alt="" />
              Душ
            </li>
            <li className="subscriptionPremium__main-list-item">
              <img src={circle} alt="" />
              Анализ состава тела
            </li>
            <li className="subscriptionPremium__main-list-item">
              <img src={circle} alt="" />
              Групповые занятия
            </li>
            <li className="subscriptionPremium__main-list-item">
              <img src={circle} alt="" />
              Бесплатный Wi-Fi и доступ к зоне отдыха
            </li>
            <li className="subscriptionPremium__main-list-item">
              <img src={circle} alt="" />
              SPA-зона
            </li>
            <li className="subscriptionPremium__main-list-item">
              <img src={circle} alt="" />
              Услуги персонального ассистента (помощь с расписанием тренировок,
              подбор питания).
            </li>
            <li className="subscriptionPremium__main-list-item">
              <img src={circle} alt="" />
              Бесплатный массаж или физиотерапия
            </li>
          </ul>

          <button className="subscriptionPremium__main-button">
            Приобрести
          </button>
        </div>
      </div>
    </div>
  );
};

export default subscriptionPremium;
