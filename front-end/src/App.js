import './App.css';
import Body from './components/Content/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default App;
