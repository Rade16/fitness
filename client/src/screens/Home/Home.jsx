import React from "react";
import "./Home.scss";
import time from "../../assets/Group 2.svg";
import qr from "../../assets/home/qr.svg";
import { Link } from "react-router-dom";
import { YMaps, Map, RouteButton, Placemark } from "@pbe/react-yandex-maps";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__subscription">
          <div className="home__subscription-text">
            <h1 className="home__subscription-title">PREMIUM Абонемент</h1>
            <p className="home__subscription-price">3500 ₽</p>
          </div>
          <div className="home__subscription-time">
            <img src={time} alt="" />
          </div>
        </div>

        <div className="home__qr">
          <img src={qr} alt="" className="home__qr-img" />
          <p className="home__qr-text">QR код</p>
        </div>
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
                <Placemark />
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
            <div className="home__subscriptions-card intensive">
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
