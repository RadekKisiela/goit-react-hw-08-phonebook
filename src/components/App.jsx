import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'pages/layout/Layout';
import { RegisterPage } from 'pages/registerpage/RegisterPage';
import { LoginPage } from 'pages/loginpage/LoginPage';
import { RestrictRoute } from './layoutRoutes/RestrictRoute';
import { PrivateRoute } from './layoutRoutes/PrivateRoute';
import { ContactsPage } from 'pages/contactspage/ContactsPage';
import { Home } from 'pages/homepage/HomePage';
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
    <div>
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
