import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const Home = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Hi {user.name}</p>
        </div>
      ) : (
        <div>
          <p>Please login or register</p>
        </div>
      )}
    </div>
  );
};
