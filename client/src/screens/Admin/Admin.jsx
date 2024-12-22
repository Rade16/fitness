import React, { useState } from "react";
import "./Admin.scss";
import axios from "axios";

const Admin = () => {
  const [className, setClassName] = useState("");
  const [classTime, setClassTime] = useState("");
  const [classDay, setClassDay] = useState("");

  const [gymName, setGymName] = useState("");
  const [gymAdress, setGymAdress] = useState("");
  const [gymLatitude, setGymLatitude] = useState("");
  const [gymLongitude, setGymLongitude] = useState("");
  const [gymDescription, setGymDescription] = useState("");
  const [gymImage, setGymImage] = useState("");
  const [previewGymImage, setPreviewGymImage] = useState("");

  const gymFormData = new FormData();
  gymFormData.append("image", gymImage);
  gymFormData.append("name", gymName);
  gymFormData.append("adress", gymAdress);
  gymFormData.append("latitude", gymLatitude);
  gymFormData.append("longitude", gymLongitude);
  gymFormData.append("description", gymDescription);

  const handleAddClass = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/class/create",
        {
          name: className,
          time: classTime,
          days: classDay,
        }
      );
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

  const handleAddGym = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/gym/create",
        gymFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
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

  const handleImageChange = (e) => {
    setGymImage(e.target.files[0]);
    const file = e.target.files[0];
    setPreviewGymImage(URL.createObjectURL(file));
  };

  return (
    <div className="admin">
      <div className="admin__container">
        <form action="" className="admin__classForm" onSubmit={handleAddClass}>
          <h1 className="admin__classForm-title">Добавить занятие</h1>
          <input
            type="text"
            className="admin__classForm-input"
            placeholder="Название"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <input
            type="time"
            className="admin__classForm-input"
            placeholder="Время"
            value={classTime}
            onChange={(e) => setClassTime(e.target.value)}
          />
          <input
            type="text"
            className="admin__classForm-input"
            placeholder="День"
            value={classDay}
            onChange={(e) => setClassDay(e.target.value)}
          />
          <button className="admin__classForm-button" type="submit">
            Добавить
          </button>
        </form>
        <form action="" className="admin__gymForm" onSubmit={handleAddGym}>
          <h1 className="admin__gymForm-title">Добавить занятие</h1>
          <label htmlFor="gymImage" className="admin__gymForm-label">
            <input
              id="gymImage"
              type="file"
              accept="image/*"
              className="admin__gymForm-label-input"
              placeholder="Название"
              onChange={handleImageChange}
            />
            <img
              src={previewGymImage}
              alt=""
              className="admin__gymForm-label-image"
            />
          </label>
          <input
            type="text"
            className="admin__gymForm-input"
            placeholder="Название"
            value={gymName}
            onChange={(e) => setGymName(e.target.value)}
          />
          <input
            type="text"
            className="admin__gymForm-input"
            placeholder="Адрес"
            value={gymAdress}
            onChange={(e) => setGymAdress(e.target.value)}
          />
          <input
            type="text"
            className="admin__gymForm-input"
            placeholder="Описание"
            value={gymDescription}
            onChange={(e) => setGymDescription(e.target.value)}
          />
          <input
            type="text"
            className="admin__gymForm-input"
            placeholder="Широта"
            value={gymLatitude}
            onChange={(e) => setGymLatitude(e.target.value)}
          />
          <input
            type="text"
            className="admin__gymForm-input"
            placeholder="Долгота"
            value={gymLongitude}
            onChange={(e) => setGymLongitude(e.target.value)}
          />

          <button className="admin__gymForm-button" type="submit">
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
