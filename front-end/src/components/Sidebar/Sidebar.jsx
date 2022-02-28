import React from "react";
import SideSection from "./SideSection/SideSection";
import "./style.scss";

export default function Sidebar() {
  const itemsList = [
    { title: "", items: ["Dashboard"] },
    { title: "main", items: ["Users", "Posts", "Categories"] },
    { title: "settings", items: ["Profile", "Roles", "Maps"] },
  ];

  return (
    <div className="side">
      <div className="sid-sections">
        {itemsList.map((item) => {
          return (
            <SideSection secTitle={item.title} items={item.items}></SideSection>
          );
        })}
      </div>
    </div>
  );
}
