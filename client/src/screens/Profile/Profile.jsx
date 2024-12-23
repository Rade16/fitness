import React, { useState, useEffect } from "react";
import "./Profile.scss";
import time from "../../assets/Group 2.svg";
import addImage from "../../assets/profile/image.svg";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { differenceInDays } from "date-fns";
const Profile = () => {
  const { user } = useAuth();
  if (!user) return <p>Загрузка...</p>;
  const token = localStorage.getItem("token");
  const [avatar, setAvatar] = useState(null);
  const [previewAvatar, setPreviewAvatar] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [membership, setMembership] = useState(null);
  const [gyms, setGyms] = useState([]);
  const daysLeft = membership
    ? differenceInDays(new Date(membership.endDate), new Date())
    : null;

  console.log(daysLeft);

  const formData = new FormData();
  formData.append("avatar", avatar);
  formData.append("username", username);
  formData.append("email", email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/auth/update/${user.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
    const file = e.target.files[0];
    setPreviewAvatar(URL.createObjectURL(file));
  };

  useEffect(() => {
    const fetchMembership = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/membership/current/${user.id}`
        );
        setMembership(response.data);
      } catch (error) {
        console.error("Ошибка при получении абонемента:", error);
      }
    };

    fetchMembership();
  }, [user.id]);
  return (
    <div className="profile">
      <div className="profile__container">
        <div
          className={`home__subscription ${
            membership
              ? membership.type.toLowerCase() // Конвертация типа в lowercase для соответствия классам
              : "no-membership"
          }`}
        >
          {membership ? (
            <>
              <div className="home__subscription-text">
                <h1 className="home__subscription-title">
                  {membership.type} Абонемент
                </h1>
                <p className="home__subscription-price">{membership.price} ₽</p>
                <p className="home__subscription-days">
                  {daysLeft > 0 ? "" : "абонемент закончился"}
                </p>
              </div>
              <div className="home__subscription-time">
                {daysLeft > 0 ? `${daysLeft} ` : "0"}
                <p className="home__subscription-time-text">дней</p>
              </div>
            </>
          ) : (
            <p className="home__subscription-no-membership">
              Абонемент не найден.
            </p>
          )}
        </div>

        <form action="" className="profile__form" onSubmit={handleSubmit}>
          <h1 className="profile__form-title">Личные данные</h1>
          <div className="profile__form-user">
            <label htmlFor="image" className="profile__form-user-img">
              <img
                src={previewAvatar || addImage}
                alt=""
                className="profile__form-user-img-img"
              />
              <input
                id="image"
                type="file"
                accept="image/*"
                className="profile__form-user-img-input"
                onChange={handleFileChange}
              />
            </label>
            <div className="profile__form-user-info">
              <input
                type="email"
                placeholder="Почта"
                className="profile__form-user-info-input"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Имя"
                className="profile__form-user-info-input"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <button className="profile__form-button" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
