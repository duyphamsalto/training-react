import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <article className="Card" data-id={props.id}>
        <Link to={`/${props.id}`}>
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
        </Link>
      </article>
    </>
  );
}
