import React from "react";
import "./Training.scss";
const Training = () => {
  return (
    <div className="training">
      <p className="training__time">14:30</p>
      <p className="training__name">SPLIT Спина&Руки</p>
      <p className="training__text">Когда:</p>
      <div className="training__days">
        <div className="training__days-day">
          <p className="training__days-day-text">пн</p>
        </div>
        <div className="training__days-day">
          <p className="training__days-day-text">вт</p>
        </div>
      </div>
    </div>
  );
};

export default Training;
