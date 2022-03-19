import "./App.scss";
import Body from "./components/layoutComponents/Body";
import Footer from "./components/layoutComponents/Footer";
import Header from "./components/layoutComponents/Header";
import Sidebar from "./components/layoutComponents/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="container-inner">
          <Body />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
