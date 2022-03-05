import React from "react";
import "./style.css";

export default function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <img src="./images/icon.png" />
      <a href="#">Home</a>
      <span>/</span>
      <a href="#" className="breadcrumb-item">
        User
      </a>
    </div>
  );
}
