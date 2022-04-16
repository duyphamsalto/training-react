import React, { useState, useEffect } from "react";
import "./style.scss";
import Card from "../../partsComponents/Card";
import { fetchCardData } from "../../../API/function";

export default function PostPage() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetchCardData(setCards);
  }, []);

  return (
    <>
      <div className="PostPage">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              fileName={card.thumbnailUrl}
              desc={card.desc}
            />
          );
        })}
      </div>
    </>
  );
}
