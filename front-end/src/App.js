import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import BreadcrumbTrail from './components/Header/BreadcrumbTrail';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <div className='contents'>
        <Header />
        <BreadcrumbTrail />
        <Routes>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
