import "./App.scss";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

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
