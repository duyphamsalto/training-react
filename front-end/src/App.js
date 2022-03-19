import "./App.scss";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

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

// test
