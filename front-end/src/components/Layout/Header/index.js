import React from 'react';
import './index.scss';
import iconNotification from '../../../assets/images/icons/icon-notification.svg';
import iconMessage from '../../../assets/images/icons/icon-message.svg';

export default function index() {
  console.log('%c RENDER NAVBAR', 'color: orange; font-size: 20px');
  return (
    <div className='header'>
      <div className='search-box'>
        <input type="text" className='form-control' placeholder=' Search here' />
      </div>
      <div className='info'>
        <div className='icon'><img src={iconNotification} alt='' /></div>
        <div className='icon'><img src={iconMessage} alt='' /></div>
        <div className='icon'>
          <div className='avatar'>
          </div>
          <div className='user-info'>
            <span>Duy Pham</span>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </div>
  );
}
