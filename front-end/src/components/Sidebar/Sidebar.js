import React from 'react';
import { useState, useCallback } from 'react';
import { Link, useParams } from "react-router-dom";
import './style.scss';

export default function Sidebar() {

  const menu = [
    {
      "title" : "",
      "block" : [ "dashboard" ]
    }, {
      "title" : "main",
      "block" : [ "users", "posts", "categories" ]
    }, {
      "title" : "settings",
      "block" : [ "profile", "roles", "maps" ]
    }
  ]

  // 再レンダリングさせる関数
  const useForceUpdate = () => {
    const [ignored, newState] = useState();
    return useCallback(() => newState({}), []);
  }

  // 文字列の先頭を大文字にする処理
  const capitalize = function(str) {
    if (typeof str !== 'string' || !str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const thisPage = function(str) {
    const params = window.location.pathname.slice(1);
    return ( params == str ? ' active' : '' );
  }

  return (
    <div className='side-bar'>
      <div className="content">
        <div className="content__logo">
          <img src={`${process.env.PUBLIC_URL}/image/Logo.png`}/>
        </div>
      </div>
      {menu.map((m) => (
        <div className="content">
          <span className="content__title">{capitalize(m.title)}</span>
          {m.block.map((b) => (
            <div className={`content__block ${b}`}>
              <Link className={thisPage(b)} to={b} onClick={useForceUpdate}>
                <img src={`${process.env.PUBLIC_URL}/image/${capitalize(b)}.png`} />
                <span>{capitalize(b)}</span>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
