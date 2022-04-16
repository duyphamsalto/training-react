import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loginState") == null) navigate("/login");
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="container-inner">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}
