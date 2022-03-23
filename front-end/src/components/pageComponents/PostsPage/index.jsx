import React, { useState, useEffect } from "react";
import "./style.scss";
import Card from "../../partsComponents/Card";

export default function PostPage() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function fetchCardData() {
      const url = "https://jsonplaceholder.typicode.com/photos";
      const res = await fetch(url);
      const json = await res.json();
      setCards(json.slice(0, 28));
    }
    fetchCardData();
  }, []);

  return (
    <>
      <div className="PostPage">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
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
