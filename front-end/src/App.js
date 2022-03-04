import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

import Body from './components/Content/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className='contents'>
        <Header />
          <Routes>
            {routes.map((route, idx) => (
              <Route
                path={route.path}
                element={route.component}
                key={idx}
              />
            ))}
          </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
