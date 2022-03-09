import React from 'react';
import './style.scss';
import '../../Assets/css/cardStyle.css';
// import Card from './Cardstyle/Card';

export default function Body() {
  const description = "TextTextTextTextTextTextTextTextTextTextText TextTextTextTextTextTextTextTextTextTextText TextTextTextTextTextTextTextTextTextTextText"

  function Card(params){
    console.log(params);
    let result = <div className='card'> <img src={params.pass} alt="Test"></img>
                   <div className='textArea'><h2>{params.title}</h2>
                   <p>{params.text}</p></div></div>
    return result
  }

  const cards = [
    { 
       id:1 , 
     pass:"../../Asstes/Images/card-image.png", 
    title:"Title",
     desc:"This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    { 
      id:2 , 
    pass:"../../Asstes/Images/card-image.png", 
   title:"Title",
    desc:"This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    { 
      id:3 , 
    pass:"../../Asstes/Images/card-image.png", 
   title:"Title",
    desc:"This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    { 
      id:4 , 
    pass:"../../Asstes/Images/card-image.png", 
   title:"Title",
    desc:"This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    { 
      id:5 , 
    pass:"../../Asstes/Images/card-image.png", 
   title:"Title",
    desc:"This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    { 
      id:6 , 
    pass:"../../Asstes/Images/card-image.png", 
   title:"Title",
    desc:"This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    { 
      id:7 , 
    pass:"../../Asstes/Images/card-image.png", 
   title:"Title",
    desc:"This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    { 
      id:8 , 
    pass:"../../Asstes/Images/card-image.png", 
   title:"Title",
    desc:"This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    { 
      id:9 , 
    pass:"../../Asstes/Images/card-image.png", 
   title:"Title",
    desc:"This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    { 
      id:10 , 
    pass:"../../Asstes/Images/card-image.png", 
   title:"Title",
    desc:"This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    { 
      id:11 , 
    pass:"../../Asstes/Images/card-image.png", 
   title:"Title",
    desc:"This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    { 
      id:12 ,
    pass:"../../Asstes/Images/card-image.png", 
   title:"Title",
    desc:"This is a longer card with supporting text below as a natural lead-in to additional content."
    }

  ];

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
