import './App.css';
import Body from './components/Content/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      
      <div className='contents'>
        <Sidebar />
        <div className='container'>
          <Header />
          <Body />
          <Footer />
        </div>

      </div>
    </>
  
  );
}

export default App;
