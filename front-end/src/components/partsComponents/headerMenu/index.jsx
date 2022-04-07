import React from "react";
import "./style.scss";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function headerMenu() {
  return (
    <>
      <ul className="icons">
        <li className="icon">
          <NotificationsActiveIcon fontSize="large" />
        </li>
        <li className="icon">
          <MailOutlineIcon fontSize="large" />
        </li>
      </ul>
    </>
  );
}
