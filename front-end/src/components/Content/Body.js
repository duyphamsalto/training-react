import React from "react";
import "./style.scss";
import BreadCrumb from "./Bread-crumb/bread-crumb";
import Pagination from "./Pagination/Pagination";

export default function Body() {
  const columns = 12;
  const item = (
    <div class="item">
      <img src={'./images/card-image.png'} className="box-image" />
        <h3 className="title">Card Title</h3>
        <p className="context">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
    </div>
  );

  let items = [];
  for (let i = 0; i < columns; i++) {
    items.push(item);
  }

  return (
    <div className="right-wrapper">
      <BreadCrumb />
      <div className="items">
        {items}
      </div>
      <Pagination />
    </div>
  );
}