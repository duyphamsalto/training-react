import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

import Layout from './components/Comons/Layout';
import './App.css';

function App() {
  routes.parents.map((route, idx) => (
    console.log(route)
  ))
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.children.map((route, idx) => (
          <Route
            idx={idx}
            index={route.index}
            path={route.path}
            element={route.component}
          />
        ))}
      </Route>
      {routes.parents.map((route, idx) => (
        <Route
          idx={idx}
          path={route.path}
          element={route.component}
        />
      ))}
    </Routes>
  );
}

export default App;
