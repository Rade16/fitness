import React, { useState } from "react";

import "./Registration.scss";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Registration = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/registration`,
        {
          username,
          password,
          email,
          phone,
        }
      );
      navigate("/login");
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        const { errors } = error.response.data;
        if (Array.isArray(errors)) {
          alert(errors.join("\n"));
        } else {
          alert(error.response.data.message);
        }
      }
    }
  };
  return (
    <div className="registration">
      <form action="" className="registration__form" onSubmit={handleSubmit}>
        <h1 className="registration__form-title">Регистрация</h1>
        <input
          type="text"
          className="registration__form-input"
          placeholder="Имя"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="tel"
          className="registration__form-input"
          placeholder="Телефон"
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          className="registration__form-input"
          placeholder="Почта"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="registration__form-input"
          placeholder="Пароль"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registration__form-button" type="submit">
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
