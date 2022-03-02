import React from "react";
import "./style.scss";
import SideSectionItem from "./SideSectionItem/SideSectionItem";

export default function SideSection(props) {
  return (
    <>
      <div className="side-section">
        <p>{props.secTitle}</p>
        <ul>
          {props.items.map((item, index) => {
            return <SideSectionItem key={index} item={item}></SideSectionItem>;
          })}
        </ul>
      </div>
    </>
  );
}
