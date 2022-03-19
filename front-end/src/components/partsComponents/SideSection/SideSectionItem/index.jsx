import React from "react";
import "./style.scss";

export default function SideSectionItem(props) {
  return (
    <>
      <li
        className="SideSectionItem"
        data-flag={
          window.location.pathname === `/${props.item}` ? "active" : ""
        }
      >
        <a className={props.item} href={`/${props.item}`}>
          <img src={`${process.env.PUBLIC_URL}/img/${props.item}.png`} alt="" />
          <p>{props.item}</p>
        </a>
      </li>
    </>
  );
}
