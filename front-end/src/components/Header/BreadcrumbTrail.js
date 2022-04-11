import React from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import './style.scss';

export default function BreadcrumbTrail() {
  // URLパスを取得
  const location = useLocation();
  const urlPath = location.pathname.slice(1).split('/');

  // 文字列の先頭を大文字にする処理
  const capitalize = function(str) {
    if (typeof str !== 'string' || !str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <nav>
      <ul>
        <li>
          <img src={`${process.env.PUBLIC_URL}/image/icon-wrapper-h.png`} alt='icon-wrapper-h' />
          &nbsp;<Link to='/'>Home</Link>
        </li>
        {urlPath.map((path, index) => (
          <li key={index}>
            <NavLink to={`/${path}`}>{capitalize(path)}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

