import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./QRcode.scss";
const QRcode = () => {
  const [qrValue, setQrValue] = useState("initial value");
  const [timeLeft, setTimeLeft] = useState(10);
  const updateQRCode = () => {
    setQrValue(`value-${Math.random()}`);
    setTimeLeft(10);
  };

  useEffect(() => {
    const qrInterval = setInterval(() => {
      updateQRCode();
    }, 10000);
    return () => clearInterval(qrInterval);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [timeLeft]);
  return (
    <div className="qr">
      <div className="qr__container">
        <h1 className="qr__title">QR-код </h1>
        <QRCodeSVG value={qrValue} size={256} className="qr__code" />
        <p className="qr__text">До обновления QR:</p>
        <p className="qr__time">{timeLeft} сек</p>
      </div>
    </div>
  );
};

export default QRcode;
