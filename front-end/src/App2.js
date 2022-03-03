import './App.css';
import Body2 from './components/Content2/Body2';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App2() {
  return (
    <>
      <Header />
      <div className='container'>
        <Sidebar />
        <Body2/>
      </div>
      <Footer />
    </>
  );
}

export default App2;
