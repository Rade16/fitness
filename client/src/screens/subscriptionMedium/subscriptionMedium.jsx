import React from "react";
import "./subscriptionMedium.scss";
import circle from "../../assets/subsctiptions/circleOrange.svg";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
const subscriptionMedium = () => {
  const { user } = useAuth();
  const handleBuyMembership = async (membershipTypeId) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/membership/buy",
        {
          userId: user.id,
          membershipTypeId,
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Ошибка при покупке абонемента");
    }
  };
  return (
    <div className="subscriptionMedium">
      <div className="subscriptionMedium__container">
        <div className="subscriptionMedium__subscription-card">
          <div className="subscriptionMedium__subscription-card-text">
            <h1 className="subscriptionMedium__subscription-card-title">
              MEDIUM Тариф
            </h1>
            <p className="subscriptionMedium__subscription-card-price">
              1700 ₽
            </p>
          </div>
        </div>
      </div>
      <div className="subscriptionMedium__main">
        <div className="subscriptionMedium__main-container">
          <h2 className="subscriptionMedium__main-title">Описание:</h2>
          <p className="subscriptionMedium__main-text">
            Тариф MEDIUM предназначен для тех, кто уже хорошо знаком с фитнесом
            и ищет более разнообразный и комфортный опыт тренировок.
          </p>
          <h2 className="subscriptionMedium__main-title">
            Что входит в абонемент?
          </h2>
          <ul className="subscriptionMedium__main-list">
            <li className="subscriptionMedium__main-list-item">
              <img src={circle} alt="" />
              Безлимитный доступ во все клубы сети
            </li>
            <li className="subscriptionMedium__main-list-item">
              <img src={circle} alt="" />
              Тренажерный зал
            </li>
            <li className="subscriptionMedium__main-list-item">
              <img src={circle} alt="" />
              Душ
            </li>
            <li className="subscriptionMedium__main-list-item">
              <img src={circle} alt="" />
              Анализ состава тела
            </li>
            <li className="subscriptionMedium__main-list-item">
              <img src={circle} alt="" />
              Групповые занятия
            </li>
            <li className="subscriptionMedium__main-list-item">
              <img src={circle} alt="" />
              Бесплатный Wi-Fi и доступ к зоне отдыха
            </li>
            <li className="subscriptionMedium__main-list-item">
              <img src={circle} alt="" />
              SPA-зона
            </li>
          </ul>

          <button
            className="subscriptionMedium__main-button"
            onClick={() => handleBuyMembership(2)}
          >
            Приобрести
          </button>
        </div>
      </div>
    </div>
  );
};

export default subscriptionMedium;
