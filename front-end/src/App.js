import './App.css';
import Body from './components/Content/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Post from "./components/Content/Post/Post";
import User from "./components/Content/User/User";
// import Breadcrumb from "./components/Content/Breadcrumb/Breadcrumb";
import Pagination from "./components/Content/Pagination/Pagination";
// import {BrowserRouter, Route, Routes } from "react-router-dom";

function Home() {
  return <h1>Home</h1>
}

function App() {
  return (
    <>
      {/* <link to="/">Home</link>
      <link to="/User">User</link>
      <link to="/Post">Post</link>

      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="user" element={<User />}></Route>
        <Route path="post" element={<Post />}></Route>
      </Routes> */}
      
      <div className='contents'>
        <Sidebar />
        <div className='container'>
          <Header />
          <Body />
          <Footer />
        </div>
      </div>

        {/* <Header />
        <div className='contents'>
          <Sidebar />
          <div className='container'>
            <Breadcrumb />
            <div className='sub-container'>
              <BrowserRouter>
                <Routes>
                  <Route index element={<Home />}></Route>
                  <Route path="user" element={<User />}></Route>
                  <Route path="post" element={<Post />}></Route>
                </Routes>
              </BrowserRouter>
              </div>
              <div className='sub-container'>
                <Pagination />
              </div>
            </div>
          </div>
          <Footer /> */}

    </>
  
  );
}

export default App;
