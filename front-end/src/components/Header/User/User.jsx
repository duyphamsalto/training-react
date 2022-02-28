import React from "react";
import "./style.scss";
import userImg from "../../../asset/icon.jpg";

export default function User(prop) {
  return (
    <>
      <div className="user">
        <img src={userImg} alt="" />
        <div className="user-profile">
          <h3>{prop.name}</h3>
          <p>Administrator</p>
        </div>
      </div>
    </>
  );
}
