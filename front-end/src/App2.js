import './App.css';
import User from './components/Content_User/User';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Breadcrumb from "./components/Content_Breadcrumb/Breadcrumb";
import Sidebar from './components/Sidebar/Sidebar';
import Pagination from "./components/Pagination/Pagination";

function App2() {
  return (
    <>
      <Header />
      <div className='container'>
      <Sidebar />
      <div className="sub-container">
          <Breadcrumb />
          <div className="sub-container-item2"> 
          <User/>
          </div>
          <div className="sub-container-item3">  
          <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App2;
