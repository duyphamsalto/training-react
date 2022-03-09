import React from 'react';
import './style.scss';
import App from './../../App';

export default function Sidebar() {
let menuMain = [
  'Users','Posts','Categories'
];
let menuSettings = [
  'Users','Posts','Categories'
];

const mainOption = menuMain.map((data)=><li>{data}</li>);
const settingsOption = menuMain.map((data)=><li>{data}</li>);
// console.log(option)
  return (
    <div className='side-bar'>
      <div id='iconImg'>
         <img src={`${process.env.PUBLIC_URL}/Images/logo.png`} alt=""></img>
      </div>
      <div className='dashboard' id='dashboard'>
        <img src={`${process.env.PUBLIC_URL}/Images/Dashbord.png`}></img>
        <p>Dashboard</p>
      </div>
      <div className='menu Main'>
        <p>Main</p>
        <ul>
          {mainOption}
        </ul>
      </div>
      <div className='menu Settings'>
        <p>Settings</p>
        <ul>
           {settingsOption}
        </ul>
      </div>
    </div>
  );
}
