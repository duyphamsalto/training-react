import React from 'react';
import './style.scss';

export default function Sidebar() {
  return (
    <div className='side-bar'>
      <div className="content">
        <div className="content__logo">
          <img src={`${process.env.PUBLIC_URL}/image/Logo.png`}/>
        </div>
      </div>
      <div className="content">
        <div className="content__block dashboard">
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/image/Dashbord.png`} />
            <span>Dashboard</span>
          </a>
        </div>
      </div>
      <div className="content">
        <span className="content__title">Main</span>
        <div className="content__block">
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/image/3User.png`} />
            <span>Dashboard</span>
          </a>
        </div>
        <div className="content__block">
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/image/Posts.png`} />
            <span>Posts</span>
          </a>
        </div>
        <div className="content__block">
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/image/Categories.png`} />
            <span>Categories</span>
          </a>
        </div>
      </div>
      <div className="content">
        <span className="content__title">Settings</span>
        <div className="content__block">
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/image/Profile.png`} />
            <span>Profile</span>
          </a>
        </div>
        <div className="content__block">
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/image/Roles.png`} />
            <span>Roles</span>
          </a>
        </div>
        <div className="content__block">
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/image/Maps.png`} />
            <span>Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
}
