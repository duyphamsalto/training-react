import React from "react";
import "./style.scss";

export default function Card(props) {
  return (
    <>
      <article className="Card" data-id={props.id}>
        <a href={`/demoURL/${props.id}`}>
          <figure>
            <img
              src={`${process.env.PUBLIC_URL}/img/${props.fileName}`}
              alt=""
            />
            <figcaption>
              <p>{props.title}</p>
              <p>{props.desc}</p>
            </figcaption>
          </figure>
        </a>
      </article>
    </>
  );
}
