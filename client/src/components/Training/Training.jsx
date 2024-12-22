import React from "react";
import "./Training.scss";
const Training = (obj) => {
  return (
    <div className="training">
      <p className="training__time">{obj.time}</p>
      <p className="training__name">{obj.name}</p>
      <p className="training__text">Когда:</p>
      <div className="training__days">
        <div className="training__days-day">
          <p className="training__days-day-text">{obj.day}</p>
        </div>
        {/* <div className="training__days-day">
          <p className="training__days-day-text">вт</p>
        </div> */}
      </div>
    </div>
  );
};

export default Training;
