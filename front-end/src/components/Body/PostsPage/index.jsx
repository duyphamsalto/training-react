import React, { useEffect } from "react";
import "./style.scss";
import Card from "./Card";

// useEffect(() => {
// 		getCardData();
// }, []);

const cards = [
  {
    id: 1,
    title: "Card Title",
    fileName: "card-image.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 2,
    title: "Card Title",
    fileName: "card-image.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 3,
    title: "Card Title",
    fileName: "card-image.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 4,
    title: "Card Title",
    fileName: "card-image.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 5,
    title: "Card Title",
    fileName: "card-image.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 6,
    title: "Card Title",
    fileName: "card-image.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 7,
    title: "Card Title",
    fileName: "card-image.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 8,
    title: "Card Title",
    fileName: "card-image.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 9,
    title: "Card Title",
    fileName: "card-image.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 10,
    title: "Card Title",
    fileName: "card-image.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 11,
    title: "Card Title",
    fileName: "card-image.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 12,
    title: "Card Title",
    fileName: "card-image.png",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
];

export default function PostPage() {
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
