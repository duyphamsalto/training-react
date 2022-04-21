import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { fetchLogout } from '../../../services/user';
import LogoutIcon from '@mui/icons-material/Logout';
import { pink } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './index.scss';

export default function User() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { info, isShowIcon } = userState;

  console.log('%c RENDER User Component', 'color: orange; font-size: 20px');

  async function handleLogout() {
    await fetchLogout(dispatch);
  }

  function showIcon() {
    return !isShowIcon ? <div className='avatar'></div> : <Avatar sx={{ bgColor: pink[500], width: 30, height: 30, cursor: 'pointer' }}>
          <AccountCircleIcon fontSize="small" sx={{ color: pink[500] }} onClick={handleLogout} />
        </Avatar>
  }

  return (
    <div className='icon'>
      {showIcon()}
      <div className='user-info'>
        <span>{info?.user?.name}</span>
        <span>{info?.user?.email}</span>
      </div>
      <div className='d-flex ms-3'>
        <Avatar sx={{ bgColor: pink[500], width: 30, height: 30, cursor: 'pointer' }}>
          <LogoutIcon fontSize="small" onClick={handleLogout} />
        </Avatar>
      </div>
    </div>
  );
}
