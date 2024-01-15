import React from 'react';
import { LoginForm } from './loginform/LoginForm';
import { Layout } from 'pages/Layout/Layout';
// import { Home } from '../pages/HomePage/HomePage';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <LoginForm />
      <Layout />
      {/* <Home /> */}
    </div>
  );
};
