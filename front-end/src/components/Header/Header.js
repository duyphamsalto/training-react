import React from "react";
import "./style.scss";

export default function Header() {
  return (
    <header>
      <div className="header-logo">
        <img src={"./images/Logo.png"} />
      </div>
      <div className="header-search">
        <div className="header-search__bar">
          <img src={"./images/Search.png"} />
          <input
            className="search__bar__input"
            placeholder="Search..."
            size="10"
          />
        </div>
      </div>
      <div className="header-ellipse-icon">
        <img src={"./images/Ellipse176.png"} />
      </div>
      <div className="header-notification-icon">
        <img src={"./images/Notification.png"} />
      </div>
      <div className="header-group-icon">
        <img src={"./images/Group.png"} />
      </div>
      <div className="header-person-icon">
        <img src={"./images/Beared Guy02-min 1.png"} />
      </div>
      <div className="header-person">
        <div className="last-name">Taisei</div>
        <div className="authority">Administrator</div>
      </div>
    </header>
  );
}
