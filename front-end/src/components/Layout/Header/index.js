import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';
import iconNotification from '../../../assets/images/icons/icon-notification.svg';
import iconMessage from '../../../assets/images/icons/icon-message.svg';
import { fetchLogout } from '../../../services/user';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { pink } from '@mui/material/colors';

export default function Header() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { info } = userState;

  async function handleLogout() {
    await fetchLogout(dispatch);
  }
  console.log('%c RENDER HEADER', 'color: orange; font-size: 20px');
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
            <span>{info?.user?.name}</span>
            <span>{info?.user?.email}</span>
          </div>
          <div className='d-flex ms-3'>
            <Avatar sx={{ bgcolor: pink[500], width: 30, height: 30, cursor: 'pointer' }}>
              <LogoutIcon fontSize="small" onClick={handleLogout} />
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}
