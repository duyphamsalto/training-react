import React from 'react';
import './style.scss';

export default function Header() {
  return (
    <header>
      <div className='serch-window'>
        <input placeholder='&emsp;&emsp;&emsp;Seach...'></input>
      </div>
      <div className='userStatus'>
        <img className='icon ellipse' src={`${process.env.PUBLIC_URL}/Images/Ellipse 176.png`} />
        <img className='icon bell' src={`${process.env.PUBLIC_URL}/Images/Notification.png`} />
        <img className='icon mail' src={`${process.env.PUBLIC_URL}/Images/Group.png`} />
        <img className='icon profile' src={`${process.env.PUBLIC_URL}/Images/profileIcon.jpg`} />
        <div className='user'>
          <p><span className='strong'>abc</span></p>
          <p>def</p>
        </div>
      </div>
    </header>
  );
}

