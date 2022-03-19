import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export default function SideSectionItem(props) {
  return (
    <>
      <li className="SideSectionItem">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to={`/${props.item}`}
        >
          <img src={`${process.env.PUBLIC_URL}/img/${props.item}.png`} alt="" />
          <p>{props.item}</p>
        </NavLink>
      </li>
    </>
  );
}
