import React from 'react';
import { useNavigate } from "react-router-dom";
import './index.scss';
import iconNotification from '../../../assets/images/icons/icon-notification.svg';
import iconMessage from '../../../assets/images/icons/icon-message.svg';
import { fetchLogout } from '../../../services/user';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { pink } from '@mui/material/colors';

export default function Header() {
  const navigate = useNavigate();

  async function handleLogout() {
    const res = await fetchLogout();
    if (res.isOk) {
      return navigate('/login');
    }
  }

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
            <span>Duy Pham</span>
            <span>Administrator</span>
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
