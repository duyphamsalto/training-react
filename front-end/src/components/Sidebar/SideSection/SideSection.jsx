import React from "react";
import "./style.scss";
import SideSectionItem from "./SideSectionItem/SideSectionItem";

export default function SideSection(props) {
  return (
    <>
      <div className="side-section">
        <p>{props.secTitle}</p>
        <ul>
          {props.items.map((item) => {
            return <SideSectionItem item={item}></SideSectionItem>;
          })}
        </ul>
      </div>
    </>
  );
}
