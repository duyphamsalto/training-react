import React from 'react';
import { useState, useCallback } from 'react';
import './style.scss';

export default function BreadcrumbTrail() {

  // 再レンダリングさせる関数
  const useForceUpdate = () => {
    const [ignored, newState] = useState();
    return useCallback(() => newState({}), []);
  }
  // 文字列の先頭を大文字にする処理
  const capitalize = function(str) {
    if (typeof str !== 'string' || !str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <nav>
      <ul>
        <li><img src={`${process.env.PUBLIC_URL}/image/icon-wrapper-h.png`} />&nbsp;Home</li>
        <li>{capitalize(window.location.pathname.slice(1))}</li>
      </ul>
    </nav>
  );
}

