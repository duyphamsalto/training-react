import "./App.css";
import Body from "./components/Content/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Breadcrumb from "./components/Content_Breadcrumb/Breadcrumb";
import Sidebar from "./components/Sidebar/Sidebar";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="sub-container">
          <Breadcrumb />
          <div className="sub-container-item">  
          <Body />
          </div>
          <div className="sub-container-item">  
          <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
