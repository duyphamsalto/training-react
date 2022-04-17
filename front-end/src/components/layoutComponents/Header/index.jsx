import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Stack, Avatar, Typography } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LogoutIcon from "@mui/icons-material/Logout";

import logo from "asset/Logo.png";

export default function Header() {
  const navigate = useNavigate();
  const showState = useSelector((state) => state.counter.isShow);
  const userName = localStorage.getItem("loggingInUser")
    ? JSON.parse(localStorage.getItem("loggingInUser")).user.email.replace(
        "@salto.link",
        ""
      )
    : "foo bar";

  function exit() {
    localStorage.clear();
    navigate("/login");
  }

  function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(".")[0][0]}${name.split(".")[1][0]}`,
    };
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

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        mx={4}
      >
        <NotificationsActiveIcon fontSize="large" />
        <MailOutlineIcon fontSize="large" />
        {showState ? <Avatar {...stringAvatar(userName)} /> : <Avatar />}
        <div>
          <Typography>Administrator</Typography>
          <Typography>{userName}</Typography>
        </div>
        <Avatar
          onClick={() => {
            exit();
          }}
        >
          <LogoutIcon fontSize="large" />
        </Avatar>
      </Stack>
    </header>
  );
}
