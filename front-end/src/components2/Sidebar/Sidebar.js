import './Sidebar.css';
import React, { useState } from 'react';
import dashboard from '../img/Dashbord.png';
import users from '../img/3User.png';
import posts from '../img/Posts.png';
import categories from '../img/Categories.png';
import profile from '../img/Prof.png';
import roles from '../img/Roles.png';
import maps from '../img/Map.png';
//import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";


function Sidebar() {
    
    return(
        <>
            <div class='sidebar'>
                <div class='dashboard'>
                    <p><span class='menu-list'><img src={dashboard}></img>Dashboard</span></p>
                </div>
                <div class='main-menu'>
                    <p>Main</p>
                    <ul>
                        <li class='users-link'>
                            <span class='menu-list'>
                                <img src={users}></img>Users           
                            </span>
                        </li>
                        <li class='posts-link'>
                            <span class='menu-list'>
                                <img src={posts}></img>Posts                               
                            </span>
                        </li>
                        <li class='category-link'>
                            <span class='menu-list'>
                                <img src={categories}></img>Categories
                            </span>
                        </li>
                    </ul>
                </div>
                <div class='settings-menu'>
                    <p>Settings</p>
                    <ul>
                        <li><span class='menu-list'><img src={profile}></img>Profile</span></li>
                        <li><span class='menu-list'><img src={roles}></img></span>Roles</li>
                        <li><span class='menu-list'><img src={maps}></img></span>Maps</li>
                    </ul>
                </div>
                <div class='menu-bottom-base'></div>
            </div>
        </>
    );
}

export default Sidebar;