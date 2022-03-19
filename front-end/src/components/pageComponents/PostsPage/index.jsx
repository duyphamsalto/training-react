import React, { useState, useEffect } from "react";
import "./style.scss";
import Card from "../../partsComponents/Card";

export default function PostPage() {
  const url = "https://jsonplaceholder.typicode.com/todos/";

  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function getCardData() {
      const res = await fetch(url);
      const json = await res.json();
      const sliced = json.slice(0, 30);
      setCards(sliced);
    }
    getCardData();
  }, []);

  return (
    <>
      <div className="PostPage">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              fileName={card.fileName}
              desc={card.desc}
            />
          );
        })}
      </div>
    </>
  );
}
