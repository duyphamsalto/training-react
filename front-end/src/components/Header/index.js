import React from 'react';
import { useNavigate } from "react-router-dom"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './style.scss';

export default function Header() {
  const navigate = useNavigate();

  function logout() {
    if(window.confirm("ログアウトしますか？")){
      localStorage.removeItem("loginUserData");
      navigate("/login");
    }
  }

  return (
    <header>
      <div className='search'>
        <input className='font-awesome' type='search' placeholder='&#xF002;&nbsp;Search...'/>
        <button>検索</button>
      </div>
      <div className='contentBox'>
        <img src={`${process.env.PUBLIC_URL}/image/UnionFlag.png`} alt='UnionFlag' />
        <img src={`${process.env.PUBLIC_URL}/image/Notification.png`} alt='Notification' />
        <img src={`${process.env.PUBLIC_URL}/image/Group.png`} alt='Group' />
        <div className='contentBox__profile'>
          <img src={`${process.env.PUBLIC_URL}/image/profile-image.jpg`} alt='myprofile' />
          <div className='contentBox__profile__text'>
            <span>橋本泰河</span>
            <span>Admin</span>
          </div>
        </div>
        <div className="contentBox__logout">
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="error" onClick={() => logout()}>
              Logout
            </Button>
          </Stack>
        </div>
      </div>
    </header>
  );
}

