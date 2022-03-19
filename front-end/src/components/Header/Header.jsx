import React from "react";
import "./style.scss";
import HeaderMenu from "./headerMenu/headerMenu";
import User from "./User/User";
import logo from "asset/Logo.png";

export default function Header() {
  return (
    <header>
      <div className="left">
        <img src={logo} alt="" />
        <div className="search_box">
          <input
            placeholder="Search..."
            type="search"
            id="site-search"
            name="q"
            aria-label="Search through site content"
          ></input>
        </div>
      </div>
      <div className="right">
        <HeaderMenu />
        <User name="A-Fukabe" />
      </div>
    </header>
  );
}
