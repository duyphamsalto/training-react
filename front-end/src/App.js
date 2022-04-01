import "./App.scss";
import Body from "./components/layoutComponents/Body";
import Footer from "./components/layoutComponents/Footer";
import Header from "./components/layoutComponents/Header";
import Sidebar from "./components/layoutComponents/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Sidebar />
            <div className="container-inner">
              <Body />
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}
