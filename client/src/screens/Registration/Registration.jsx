import React from "react";
import "./Registration.scss";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <div className="registration">
      <form action="" className="registration__form">
        <h1 className="registration__form-title">Регистрация</h1>
        <input
          type="text"
          className="registration__form-input"
          placeholder="Имя"
          required
        />
        <input
          type="tel"
          className="registration__form-input"
          placeholder="Телефон"
          required
        />
        <input
          type="email"
          className="registration__form-input"
          placeholder="Почта"
          required
        />
        <input
          type="password"
          className="registration__form-input"
          placeholder="Пароль"
          required
        />
        <button className="registration__form-button">
          Зарегистрироваться
        </button>
        <p className="registration__form-text">Уже есть аккаунт?</p>
        <Link to="/login">
          <p className="registration__form-link">Войти</p>
        </Link>
      </form>
    </div>
  );
};

export default Registration;
