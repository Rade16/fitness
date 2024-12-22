import React, { useState } from "react";

import "./Login.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      const token = response.data.token;
      localStorage.setItem("token", token);
      const userResponse = await axios.get(
        "http://localhost:5000/api/auth/auth",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(userResponse.data.user);
      navigate("/user/home");
    } catch (e) {
      alert(e.response.data.message);
      setError("Ошибка входа: неверный email или пароль");
    }
  };
  return (
    <div className="login">
      <form action="" className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__form-title">Вход</h1>
        <input
          type="email"
          className="login__form-input"
          placeholder="Почта"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="login__form-input"
          placeholder="Пароль"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login__form-button" type="submit">
          Войти
        </button>
        <p className="login__form-text">Еще нет аккаунта?</p>
        <Link to="/">
          <p className="login__form-link">Зарегистрироваться</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
