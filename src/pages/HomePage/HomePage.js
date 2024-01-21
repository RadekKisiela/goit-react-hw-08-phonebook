import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import css from './HomePage.module.css';

export const Home = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className={css.homeContainer}>
      {isLoggedIn ? (
        <div>
          <p className={css.welcomeMsg}>Hi {user.name}</p>
        </div>
      ) : (
        <div>
          <p className={css.infoMsg}>Please login or register</p>
        </div>
      )}
    </div>
  );
};
