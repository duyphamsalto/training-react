import React from "react";
import "./style.css";

export default function Pagination() {
  return (
<div class="pager">
  <ul class="pagination">
      <li class="pre"><a href="#"><span>«</span></a></li>
      <li><a href="#"><span>1</span></a></li>
      <li><a href="#"><span>…</span></a></li>
      <li><a href="#"><span>4</span></a></li>
      <li><a href="#"><span>5</span></a></li>
      <li><a href="#"class="active"><span>6</span></a></li>
      <li><a href="#"><span>7</span></a></li>
      <li><a href="#"><span>8</span></a></li>
      <li><a href="#"><span>…</span></a></li>
      <li><a href="#"><span>20</span></a></li>
      <li class="next"><a href="#"><span>»</span></a></li>
  </ul>
  </div>
  );
}
