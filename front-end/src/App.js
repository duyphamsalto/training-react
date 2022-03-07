// import logo from './logo.svg';
import './App.css';
import Body from "./components/Content/Body";
import Users from "./components/Content/Users";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Content/Navbar";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="body">
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="Users" element={<Users />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter >
  );
}



function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;