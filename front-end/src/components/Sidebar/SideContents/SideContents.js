import React from 'react';
import { NavLink } from "react-router-dom";
// import './style.scss';

export default function SideContents(props) {
  // 文字列の先頭を大文字にする処理
  const capitalize = function(str) {
    if (typeof str !== 'string' || !str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return(
    <div className="sidebar__content">
      <div className='sidebar__content__title'>{capitalize(props.title)}</div>
      {props.block.map((b) => (
        <div className={`sidebar__content__block ${b}`} key={b}>
          <NavLink to={`/${b}`} className={({isActive}) => (isActive ? 'activated':'')}>
            <img src={`${process.env.PUBLIC_URL}/image/${capitalize(b)}.png`} alt={b} />
            {capitalize(b)}
          </NavLink>
        </div>
      ))}
    </div>
  )
}