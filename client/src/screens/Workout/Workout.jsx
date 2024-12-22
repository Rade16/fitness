import React, { useState, useEffect } from "react";
import "./Workout.scss";
import Training from "../../components/Training/Training";

const Workout = () => {
  const [trainings, setTrainings] = useState([]);
  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/class/getAll");
        const data = await response.json();
        setTrainings(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrainings();
  }, []);

  return (
    <div className="workout">
      {trainings.map((training) => (
        <Training
          key={training.id}
          time={training.time}
          name={training.name}
          day={training.days}
        />
      ))}
    </div>
  );
};

export default Workout;
