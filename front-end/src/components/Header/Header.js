import React from 'react';
import './style.scss';

export default function Header() {
  return (
    <header>
      <div className="search">
        <input className="font-awesome" type="search" placeholder="&#xF002;&nbsp;Search..."/>
        <button>検索</button>
      </div>
      <div className="contentBox">
        <img src={`${process.env.PUBLIC_URL}/image/UnionFlag.png`} />
        <img src={`${process.env.PUBLIC_URL}/image/Notification.png`} />
        <img src={`${process.env.PUBLIC_URL}/image/Group.png`} />
        <div className="contentBox__profile">
          <img src={`${process.env.PUBLIC_URL}/image/profile-image.jpg`} />
          <div className="contentBox__profile__text">
            <span>橋本泰河</span>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}

