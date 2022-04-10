import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
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
