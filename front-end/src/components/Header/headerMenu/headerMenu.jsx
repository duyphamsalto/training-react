import React from "react";
import "./style.scss";
import icon1 from "../../../asset/Ellipse.png";
import icon2 from "../../../asset/Notification.png";
import icon3 from "../../../asset/Group.png";

export default function headerMenu() {
  return (
    <>
      <ul className="icons">
        <li className="icon">
          <img src={icon1} alt="" />
        </li>
        <li className="icon">
          <img src={icon2} alt="" />
        </li>
        <li className="icon">
          <img src={icon3} alt="" />
        </li>
      </ul>
    </>
  );
}
