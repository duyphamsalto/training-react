import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import SideBar from './SideBar';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <SideBar />
      <Header />
      <main className='main'>
        <div className='container-fluid'>
          <Outlet />
        </div>
      </main>
    </>
  );
};
