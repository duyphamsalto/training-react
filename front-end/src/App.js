// import logo from './logo.svg';
import './App.css';
import { Body, Header, Footer, Sidebar  } from './components/Index';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <Body />
      </div>
      {/* <tr className="grid">
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
      </tr>
      <tr className="grid">
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
      </tr>
      <tr className="grid">
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
      </tr> */}


      <Footer />
    </>
  );
}

export default App;