import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from 'components/NavigationBar/NavigationBar';

export const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};
