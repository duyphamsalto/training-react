import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Sidebar from '../../Sidebar';
import Header from '../../Header';
import BreadcrumbTrail from '../../Header/BreadcrumbTrail';
import Footer from '../../Footer';

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loginUserData") == null) navigate("/login");
  }, []);

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