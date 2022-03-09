import React from "react";
import "./style.scss";

export default function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <img src="./images/icon.png" />
      <a href="/">Home</a>
      <span>/</span>
      <a href="/Users" className="breadcrumb-item">
        Users
      </a>
    </div>
  );
}
