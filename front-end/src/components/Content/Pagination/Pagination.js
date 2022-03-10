import React from "react";
import "./style.scss";

export default function Pagination() {
  return(
    <div className="pagination-wrapper">
      <p>Total 85 items</p>
      <ul class="pagination">
        <li><a href="#">«</a></li>
        <li><a href="#">1</a></li>
        <li><a>...</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a class="active" href="#">6</a></li>
        <li><a href="#">7</a></li>
        <li><a href="#">8</a></li>
        <li><a>...</a></li>
        <li><a href="#">20</a></li>
        <li><a href="#">»</a></li>
      </ul>
    </div>
  );
}