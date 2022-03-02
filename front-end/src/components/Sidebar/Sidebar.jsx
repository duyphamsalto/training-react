import React from "react";
import SideSection from "./SideSection/SideSection";
import "./style.scss";

export default function Sidebar() {
  const itemsList = [
    { id: 1, title: "", items: ["Dashboard"] },
    { id: 2, title: "main", items: ["Users", "Posts", "Categories"] },
    { id: 3, title: "settings", items: ["Profile", "Roles", "Maps"] },
  ];

  return (
    <div className="side">
      <div className="sid-sections">
        {itemsList.map((item) => {
          return (
            <SideSection
              key={item.id}
              secTitle={item.title}
              items={item.items}
            ></SideSection>
          );
        })}
      </div>
    </div>
  );
}
