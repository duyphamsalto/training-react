import React from "react";
import "./style.scss";
export default function Pagination(props) {
  const { page, onChange } = props;

  function onPageChange(props) {
    onChange(page);
  }

  return (
    <div className="pager">
      <ul className="pagination">
        <li className="pre">
          <a href="#">
            <span>≪</span>
          </a>
        </li>
        <li>
          <a onClick={() => onPageChange(1)}>1</a>
        </li>
        <li>
          <a onClick={() => onPageChange(2)}>2</a>
        </li>
      </ul>
    </div>
  );
}
