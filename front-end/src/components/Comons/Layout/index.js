import React from 'react';
import { Outlet } from "react-router-dom";

import Sidebar from '../../Sidebar';
import Header from '../../Header';
import BreadcrumbTrail from '../../Header/BreadcrumbTrail';
import Footer from '../../Footer';

export default function Layout() {
  return(
    <div className='container'>
      <Sidebar />
      <div className='contents'>
        <Header />
        <BreadcrumbTrail />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}