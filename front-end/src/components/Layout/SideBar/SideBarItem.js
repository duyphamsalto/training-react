import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBarItem(props) {
  const { name, icon, path } = props;

  return (
    <li className='item-row'>
      <Link to={path} className="d-flex item">
        {icon && <div className='icon'>
          <img src={require(`../../../assets/images/icons/icon-${icon}.svg`)} alt='' />
        </div>}
        <span className='item-title'>{name}</span>
      </Link>
    </li>
  );
}
