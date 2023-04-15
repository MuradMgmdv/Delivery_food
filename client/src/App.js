import React from 'react';
import './scss/app.scss';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza';
import MainLayouts from './layouts/MainLayouts';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
