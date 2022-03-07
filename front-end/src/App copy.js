// import logo from './logo.svg';
import './App.css';
import Body from "./components/Content/Body";
import Users from "./components/Content/Users";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Content/Navbar";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="body">
          <Navbar />
          {/* <Body /> */}
          <Users />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;