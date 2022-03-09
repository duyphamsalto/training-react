import React from 'react';
import './style.scss';

export default function Footer() {
  return (
    <footer>
      <div className='left-f'>
        <a href='#'>Privacy Policy</a>
        <a href='#'>Terms of Use</a>
      </div>
      <div className='right-f'>
        &copy;2022 hogehoge　
      </div>
    </footer>
  );
}
