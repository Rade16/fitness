import React from "react";
import "./subscriptionStart.scss";
import circle from "../../assets/subsctiptions/circleGreen.svg";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const subscriptionStart = () => {
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
    <div className="subscriptionStart">
      <div className="subscriptionStart__container">
        <div className="subscriptionStart__subscription-card start">
          <div className="subscriptionStart__subscription-card-text">
            <h1 className="subscriptionStart__subscription-card-title">
              START Тариф
            </h1>
            <p className="subscriptionStart__subscription-card-price">1100 ₽</p>
          </div>
        </div>
      </div>
      <div className="subscriptionStart__main">
        <div className="subscriptionStart__main-container">
          <h2 className="subscriptionStart__main-title">Описание:</h2>
          <p className="subscriptionStart__main-text">
            Тариф START предназначен для тех, кто только начинает заниматься
            фитнесом или предпочитает базовый набор услуг для поддержания
            физической формы.
          </p>
          <h2 className="subscriptionStart__main-title">
            Что входит в абонемент?
          </h2>
          <ul className="subscriptionStart__main-list">
            <li className="subscriptionStart__main-list-item">
              <img src={circle} alt="" />
              Безлимитный доступ во все клубы сети
            </li>
            <li className="subscriptionStart__main-list-item">
              <img src={circle} alt="" />
              Тренажерный зал
            </li>
            <li className="subscriptionStart__main-list-item">
              <img src={circle} alt="" />
              Душ
            </li>
            <li className="subscriptionStart__main-list-item">
              <img src={circle} alt="" />
              Анализ состава тела
            </li>
          </ul>

          <button
            className="subscriptionStart__main-button"
            onClick={() => handleBuyMembership(1)}
          >
            Приобрести
          </button>
        </div>
      </div>
    </div>
  );
};

export default subscriptionStart;
