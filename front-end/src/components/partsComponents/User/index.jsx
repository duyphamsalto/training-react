import React, { useState } from "react";
import "./style.scss";

import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";

export default function User(prop) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="user">
        {show ? (
          <Avatar
            src={`${process.env.PUBLIC_URL}/img/icon.jpg`}
            sx={{ width: "2rem", height: "2rem" }}
          />
        ) : (
          <Avatar
            sx={{ bgcolor: deepOrange[500], width: "2rem", height: "2rem" }}
          >
            <PersonIcon />
          </Avatar>
        )}
        <p
          onClick={() => {
            setShow(!show);
            console.log(show);
          }}
        >
          btn
        </p>
        <div className="user-profile">
          <h3>{prop.name}</h3>
          <p>Administrator</p>
        </div>
      </div>
    </>
  );
}
