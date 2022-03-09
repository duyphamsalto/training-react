import React from "react";
import "./style.scss";

export default function Sidebar() {
  return (
    <div className="side-bar">
      <div className="side-bar-item">
        <a href="#">
          <img src="./images/Dashbord.png" />
          <span>Dashboard</span>
        </a>
      </div>
      <div className="side-bar-content">
        <p>Main</p>
        <div className="side-bar-item is-active">
          <a href="/Users">
            <img src="./images/3User.png" />
            <span>Users</span>
          </a>
        </div>
        <div className="side-bar-item">
          <a href="/">
            <img src="./images/Game.png" />
            <span>Posts</span>
          </a>
        </div>
        <div className="side-bar-item">
          <a href="#">
            <img src="./images/Categories.png" />
            <span>Categories</span>
          </a>
        </div>
      </div>
      <div className="side-bar-content">
        <p>Setting</p>
        <div className="side-bar-item">
          <a href="#">
            <img src="./images/Document.png" />
            <span>Profile</span>
          </a>
        </div>
        <div className="side-bar-item">
          <a href="#">
            <img src="./images/Setting.png" />
            <span>Roles</span>
          </a>
        </div>
        <div className="side-bar-item">
          <a href="#">
            <img src="./images/Location.png" />
            <span>Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
}
