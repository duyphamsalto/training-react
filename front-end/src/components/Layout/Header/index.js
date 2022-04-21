import React from 'react';
import './index.scss';
import iconNotification from '../../../assets/images/icons/icon-notification.svg';
import iconMessage from '../../../assets/images/icons/icon-message.svg';
import User from '../User';

export default function Header() {
  console.log('%c RENDER HEADER', 'color: orange; font-size: 20px');
  return (
    <div className='header'>
      <div className='search-box'>
        <input type="text" className='form-control' placeholder=' Search here' />
      </div>
      <div className='info'>
        <div className='icon'><img src={iconNotification} alt='' /></div>
        <div className='icon'><img src={iconMessage} alt='' /></div>
        <User />
      </div>
    </div>
  );
}
