import React from 'react';
import './style.scss';

import SideContents from './SideContents/SideContents'

export default function Sidebar() {

  const menu = [
    {
      'id'    : '1',
      'title' : '',
      'block' : [ 'dashboard' ]
    }, {
      'id'    : '2',
      'title' : 'main',
      'block' : [ 'users', 'posts', 'categories' ]
    }, {
      'id'    : '3',
      'title' : 'settings',
      'block' : [ 'profile', 'roles', 'maps' ]
    }
  ]

  return (
    <div className='sidebar'>
      <div className='sidebar__content'>
        <div className='sidebar__content__logo'>
          <img src={`${process.env.PUBLIC_URL}/image/Logo.png`} alt='Logo'/>
        </div>
      </div>
      {menu.map((m) => (
        <SideContents key={m.id} title={m.title} block={m.block} />
      ))}
    </div>
  );
}
