import React from "react";
import "./style.scss";

function getPagenationArr(c, m) {
  var current = c,
    last = m,
    delta = 2,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [],
    l;
  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) range.push(i);
  }
  for (let i of range) {
    if (l) {
      if (i - l === 2) rangeWithDots.push(l + 1);
      else if (i - l !== 1) rangeWithDots.push("...");
    }
    rangeWithDots.push(i);
    l = i;
  }
  return rangeWithDots;
}

export default function Pagenation(props) {
  console.log("props", props);
  const arr = getPagenationArr(props.current, props.last);

  function changePage(num) {
    props.parentFunction(num);
  }
  return (
    <>
      <div className="Pagenation">
        <p>Total {props.total} items</p>
        <p className="Pagenation-inner">
          <span onClick={() => changePage(props.current - 1)}>&lt;</span>
          {arr.map((i, index) => {
            if (i === props.current)
              return (
                <span
                  key={index}
                  className="current"
                  onClick={() => changePage(i)}
                >
                  {i}
                </span>
              );
            if (typeof i === "string")
              return (
                <span key={index} className="while">
                  {i}
                </span>
              );
            const el = (
              <span key={index} onClick={() => changePage(i)}>
                {i}
              </span>
            );
            return el;
          })}
          <span onClick={() => changePage(props.current + 1)}>&gt;</span>
        </p>
      </div>
    </>
  );
}
