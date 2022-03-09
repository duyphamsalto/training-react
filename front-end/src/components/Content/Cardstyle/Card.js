import React from 'react';

export default function Card(params) {
    console.log(params);
    let result = <div className='card'> <img src={params.pass} alt="Test"></img>
                   <div className='textArea'><h2>{params.title}</h2>
                   <p>{params.desc}</p></div></div>
  return (
    result
  );
}

