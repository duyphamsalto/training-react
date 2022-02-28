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

const Pagenation = (props) => {
  const arr = getPagenationArr(props.current, 20);
  return (
    <>
      <div className="Pagenation">
        <p>Total 85 items</p>
        <p className="Pagenation-inner">
          <a href={`/demo/page${props.current - 1}`}>
            <span>&lt;</span>
          </a>
          {arr.map((i) => {
            if (i === props.current) return <span class="current">{i}</span>;
            if (typeof i === "string") return <span class="while">{i}</span>;
            const el = (
              <a href={`/demo/page${i}`}>
                <span>{i}</span>
              </a>
            );
            return el;
          })}
          <a href={`/demo/page${props.current + 1}`}>
            <span>&gt;</span>
          </a>
        </p>
      </div>
    </>
  );
};
export default Pagenation;
