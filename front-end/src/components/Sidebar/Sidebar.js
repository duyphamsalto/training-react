import './Sidebar.css';
import React, { useState } from 'react';
import dashboard from './img/dashboard.png';
import users from './img/users.png';
import posts from './img/posts.png';
import categories from './img/categories.png';
import profile from './img/profile.png';
import roles from './img/roles.png';
import maps from './img/maps.png';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";



function Sidebar() {


    return(
        <>
            <div className='sidebar'>
                <div className='dashboard'>
                    <p><img src={dashboard}></img>Dashboard</p>
                </div>
                <div className='main-menu'>
                    <p>Main</p>
                    <span>
                        <NavLink to='/users' 
                            className={({isActive}) => (isActive ? 'activated':'')}><img src={users}></img>Users</NavLink>
                    </span>
                    <span>
                        <NavLink exact to='/' 
                            className={({ isActive }) => (isActive ? 'activated':'')}><img src={posts}></img>Posts</NavLink>
                    </span>
                    <span>
                        <a><img src={categories}></img>Categories</a>
                    </span>
                </div>
                <div class='settings-menu'>
                    <p>Settings</p>
                    <ul>
                        <li><span className='menu-list'><img src={profile}></img>Profile</span></li>
                        <li><span className='menu-list'><img src={roles}></img></span>Roles</li>
                        <li><span className='menu-list'><img src={maps}></img></span>Maps</li>
                    </ul>
                </div>
                <div className='menu-bottom-base'></div>
            </div>
        </>
    );
}

export default Sidebar;