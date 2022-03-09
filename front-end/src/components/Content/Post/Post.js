import React from "react";
import "./style.scss";

export default function Post() {
  const item = (
    <div class="item">
      <img src={"./images/card-image.png"} class="card-image" />
      <h3 className="title">Card Title</h3>
      <p className="card-text">
        This is a longer card with supporting text below as a natural lead-in to
        additional content.
      </p>
    </div>
  );

  let items = [];
  for (let i = 0; i < 12; i++) {
    items.push(item);
  }

  return <div class="items">{items}</div>;
}
