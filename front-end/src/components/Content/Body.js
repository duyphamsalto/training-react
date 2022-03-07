import React from 'react';
import './style.css';
import '../../Assets/css/cardStyle.css';

export default function Body() {
  const description = "TextTextTextTextTextTextTextTextTextTextText TextTextTextTextTextTextTextTextTextTextText TextTextTextTextTextTextTextTextTextTextText"

  function Card(params){
    let result = <div className='card'> <img src={params.pass} alt="Test"></img>
                   <div className='textArea'><h2>{params.title}</h2>
                   <p>{params.text}</p></div></div>
    return result
  }


  return (
    <div className='body'>
      <div className='App'>
        <div className='itemArea'>
          <Card pass="https://placehold.jp/256x144.png" text={description} title="Title" />
          <Card pass="https://placehold.jp/256x144.png" text={description} title="Title" />
          <Card pass="https://placehold.jp/256x144.png" text={description} title="Title" />
          <Card pass="https://placehold.jp/256x144.png" text={description} title="Title" />
          <Card pass="https://placehold.jp/256x144.png" text={description} title="Title" />
          <Card pass="https://placehold.jp/256x144.png" text={description} title="Title" />
          <Card pass="https://placehold.jp/256x144.png" text={description} title="Title" />
          <Card pass="https://placehold.jp/256x144.png" text={description} title="Title" />
          <Card pass="https://placehold.jp/256x144.png" text={description} title="Title" />
          <Card pass="https://placehold.jp/256x144.png" text={description} title="Title" />
          <Card pass="https://placehold.jp/256x144.png" text={description} title="Title" />
          <Card pass="https://placehold.jp/256x144.png" text={description} title="Title" />
        </div>
      </div>
    </div>
  );
}
