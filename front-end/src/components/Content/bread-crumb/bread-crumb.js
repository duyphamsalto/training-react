import React from "react";
import "./style.scss";

export default function BreadCrumb() {
  return (
    <div className="bread-crumb">
      <div className="bread-crumb-inner">
        <img src={'./images/icon-wrapper-h.png'} className="icon-wrapper" />
        <a href= "/" >Home</a>
        /
        <a href="/users">Users</a>
      </div>
    </div>
  );
}
