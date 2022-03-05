import './App.css';
import Posts from './components/Content_Posts/Posts';
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
          <Posts/>
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
