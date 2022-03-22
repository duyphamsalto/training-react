import React, { useState, useEffect } from "react";
import "./style.scss";
import Card from "../../partsComponents/Card";

export default function PostPage() {
  const url = "https://api.duypham.vn/api/v1/login";
  const data = [
    {
      email: "akihiro.fukabe@salto.link",
      password: "123456",
    },
  ];

  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function getCardData() {
      const res = await fetch(url, {
        method: "post",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(res);
      const json = await res.json();
      console.log(json);
      // const sliced = json.slice(0, 30);
      // setCards(sliced);
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
