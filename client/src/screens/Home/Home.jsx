import React, { useEffect, useState } from "react";
import "./Home.scss";
import time from "../../assets/Group 2.svg";
import qr from "../../assets/home/qr.svg";
import { Link } from "react-router-dom";
import { YMaps, Map, RouteButton, Placemark } from "@pbe/react-yandex-maps";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { differenceInDays } from "date-fns";
const Home = () => {
  const { user } = useAuth();
  if (!user) return <p>Загрузка...</p>;
  const [membership, setMembership] = useState(null);
  const [gyms, setGyms] = useState([]);
  const daysLeft = membership
    ? differenceInDays(new Date(membership.endDate), new Date())
    : null;

  console.log(daysLeft);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/gym/getAll"
        );
        setGyms(response.data);
        console.log(gyms);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGyms();
  }, []);
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
    <div className="home">
      <div className="home__container">
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
              Абонемент не найден. <Link to="/user/subscriptions">Купить</Link>
            </p>
          )}
        </div>
        <Link to="/user/qr">
          <div className="home__qr">
            <img src={qr} alt="" className="home__qr-img" />
            <p className="home__qr-text">QR код</p>
          </div>
        </Link>
        <section className="home__clubs">
          <h1 className="home__clubs-title">Наши клубы</h1>
          <div className="home__clubs-map">
            <YMaps>
              <Map
                defaultState={{
                  center: [55.639128, 37.759741],
                  zoom: 15,
                }}
                width={"100%"}
                height={"300px"}
              >
                {gyms.map((gym) => (
                  <Placemark
                    geometry={[gym.latitude, gym.longitude]}
                    onClick={() => navigate(`/user/gym/${gym.id}`)}
                  />
                ))}
              </Map>
            </YMaps>
          </div>
        </section>
        <section className="home__subscriptions">
          <h1 className="home__subscriptions-title">Абонементы</h1>
          <Link to="/user/subscriptionStart">
            <div className="home__subscriptions-card start">
              <div className="home__subscriptions-card-text">
                <h1 className="home__subscriptions-card-title">START Тариф</h1>
                <p className="home__subscriptions-card-price">1100 ₽</p>
              </div>
            </div>
          </Link>
          <Link to="/user/subscriptionMedium">
            <div className="home__subscriptions-card medium">
              <div className="home__subscriptions-card-text">
                <h1 className="home__subscriptions-card-title">
                  INTENSIVE Тариф
                </h1>
                <p className="home__subscriptions-card-price">1700 ₽</p>
              </div>
            </div>
          </Link>
          <Link to="/user/subscriptionPremium">
            <div className="home__subscriptions-card premium">
              <div className="home__subscriptions-card-text">
                <h1 className="home__subscriptions-card-title">
                  PREMIUM Абонемент
                </h1>
                <p className="home__subscriptions-card-price">3500 ₽</p>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
