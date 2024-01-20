import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'pages/Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RestrictRoute } from 'LayoutRoutes/RestrictRoute';
import { PrivateRoute } from 'LayoutRoutes/PrivateRoute';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { Home } from 'pages/HomePage/HomePage';
import { refreshUser } from '../redux/actions';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading....</div>;
  }
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictRoute redirectTo="/contacts">
                <RegisterPage />
              </RestrictRoute>
            }
          />
          <Route
            path="login"
            element={
              <RestrictRoute redirectTo="/">
                <LoginPage />
              </RestrictRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={ContactsPage}>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
