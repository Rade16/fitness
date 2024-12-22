import React, { useEffect, useState } from "react";
import "./GymPage.scss";
import { YMaps, Map, RouteButton, Placemark } from "@pbe/react-yandex-maps";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
const GymPage = () => {
  const { user } = useAuth();
  if (!user) {
    return <p>Загрузка</p>;
  }
  const [gym, setGym] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/gym/getOne/${id}`
        );
        setGym(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="gym">
      <div className="gym__container">
        <img
          src={`http://localhost:5000${gym.image}`}
          alt=""
          className="gym__image"
        />
        <p className="gym__caption">Название:</p>
        <h1 className="gym__title">{gym.name}</h1>
        <p className="gym__caption">Описание:</p>
        <p className="gym__description">{gym.description}</p>
        <p className="gym__caption">На карте:</p>
        <div className="gym__map">
          <YMaps>
            <Map
              defaultState={{ center: [gym.latitude, gym.longitude], zoom: 15 }}
              width="100%"
              height="400px"
            >
              <Placemark
                geometry={[gym.latitude, gym.longitude]}
                options={{
                  iconLayout: "default#image",
                }}
              />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default GymPage;
