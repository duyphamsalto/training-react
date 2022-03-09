import React from 'react';
import './style.scss';

export default function Posts() {

  const cards = [
    {
      'title' : 'Card Title',
      'text' : 'This is a longer card with supporting text below as a natural lead-in to additional content.'
    }, {
      'title' : 'Card Title',
      'text' : 'This is a longer card with supporting text below as a natural lead-in to additional content.'
    }, {
      'title' : 'Card Title',
      'text' : 'This is a longer card with supporting text below as a natural lead-in to additional content.'
    }, {
      'title' : 'Card Title',
      'text' : 'This is a longer card with supporting text below as a natural lead-in to additional content.'
    }
  ];
  const cnt = [1, 2, 3];

  return (
    <div id='posts'>
      {cnt.map((c) => (
        <div className='row'>
          {cards.map((card) => (
            <div className='card'>
              <img src={`${process.env.PUBLIC_URL}/image/card-image.png`} />
              <span className='card__title'>{card.title}</span>
              <p className='card__text'>{card.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}