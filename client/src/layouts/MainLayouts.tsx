import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayouts: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
