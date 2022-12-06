import React from "react";
import "./Notification.scss";

function Notification({ showNotification }) {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
}

export default Notification;
