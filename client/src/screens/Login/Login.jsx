import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <form action="" className="login__form">
        <h1 className="login__form-title">Вход</h1>
        <input
          type="email"
          className="login__form-input"
          placeholder="Почта"
          required
        />
        <input
          type="password"
          className="login__form-input"
          placeholder="Пароль"
          required
        />
        <button className="login__form-button">Войти</button>
        <p className="login__form-text">Еще нет аккаунта?</p>
        <Link to="/">
          <p className="login__form-link">Зарегистрироваться</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
