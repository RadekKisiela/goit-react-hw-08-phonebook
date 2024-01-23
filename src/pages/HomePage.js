import React from 'react';
import { useAuth } from '../hooks/useAuth';
import css from './HomePage.module.css';

export const Home = () => {
  const { isUser, isLogged } = useAuth();
  const { name } = isUser || {};

  return (
    <div className={css.homeContainer}>
      {isLogged ? (
        <div>
          <p className={css.welcomeMsg}>Hi {name}</p>
        </div>
      ) : (
        <div>
          <p className={css.infoMsg}>Please login or register</p>
        </div>
      )}
    </div>
  );
};
