import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from 'components/navigationbar/NavigationBar.js';

export const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};
