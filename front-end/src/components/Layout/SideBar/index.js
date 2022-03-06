import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';
import iconReact from '../../../assets/images/icons/icon-react.svg';
import SideBarItem from './SideBarItem';

export default function index() {
  console.log('%c RENDER SIDE BAR', 'color: orange; font-size: 20px');
  const items = [
    {
      name: 'DashBoard',
      icon: null,
      path: '/'
    },
    {
      name: 'Users',
      icon: 'user',
      path: '/users'
    },
    {
      name: 'Posts',
      icon: 'post',
      path: '/posts'
    },
    {
      name: 'Categories',
      icon: 'cate',
      path: '/categories'
    },

  ];
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-left">
      <div className='logo'>
        <Link to='/' className="d-flex item">
          <div className='icon'>
            <img src={iconReact} alt='' />
          </div>
          <span className='item-link'>React Training</span>
        </Link>
      </div>
      <ul className="nav-menu">
        {
          items.map((item, idx) =>
            <SideBarItem key={idx} {...item} />
          )
        }
      </ul>
    </nav>
  );
}
