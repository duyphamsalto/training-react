import React from 'react';
import './style.scss';

export default function Sidebar() {
  return (
    <div className='side-bar'>
      <div id='iconImg'>
         <img src={`${process.env.PUBLIC_URL}/Images/logo.png`} alt=""></img>
      </div>
      Sidebar components
    </div>
  );
}
