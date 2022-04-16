import React from "react";
import SideSection from "../../partsComponents/SideSection";
import "./style.scss";

export default function Sidebar() {
  const itemsList = [
    { id: 1, title: "", items: ["Dashboard"] },
    { id: 2, title: "main", items: ["Users", "Posts", "Categories"] },
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
            />
          );
        })}
      </div>
    </div>
  );
}
