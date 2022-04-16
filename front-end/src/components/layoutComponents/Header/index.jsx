import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

import HeaderMenu from "../../partsComponents/headerMenu";
import User from "../../partsComponents/User";
import logo from "asset/Logo.png";

export default function Header() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("loggingInUser")
    ? JSON.parse(localStorage.getItem("loggingInUser")).user.email.replace(
        "@salto.link",
        ""
      )
    : "foobar";

  function exit() {
    localStorage.clear();
    navigate("/login");
  }

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
        <User name={userName} />
        <LogoutIcon
          fontSize="large"
          sx={{
            borderRadius: "2rem",
            marginRight: "2rem",
            background: "#ddd",
          }}
          onClick={() => {
            exit();
          }}
        />
      </div>
    </header>
  );
}
