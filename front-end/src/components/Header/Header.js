import React from "react";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div className="flex__row">
        <img src={"./images/Logo.png"} />
      </div>
      <div className="search">
        <div className="search__bar">
          <img src={"./images/Search.png"} />
          <input
            className="search__bar__input"
            placeholder="Search"
            size="20"
          />
        </div>
      </div>
        <div className="image_1">
          <img src={"./images/Ellipse 176.png"}/>
        </div>
        <div className="image_2">
          <img src={"./images/Notification.png"} />
        </div>
        <div className="image_3">
          <img src={"./images/Group.png"} />
        </div>
        <div className="image_4">
          <img src={"./images/Group.png"} />
        </div>
      <div className="image_5">
        <span>Taisei</span>
        <span>admin</span>
      </div>
    </header>
  );
}
